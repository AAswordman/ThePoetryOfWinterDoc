// lanzou.js
function randIP() {
  const arr_1 = ["218", "218", "66", "66", "218", "218", "60", "60", "202", "204", "66", "66", "66", "59", "61", "60", "222", "221", "66", "59", "60", "60", "66", "218", "218", "62", "63", "64", "66", "66", "122", "211"];
  const randIndex = Math.floor(Math.random() * arr_1.length);
  const ip1 = arr_1[randIndex];
  const ip2id = Math.round(Math.random() * (255 - 60) + 60);
  const ip3id = Math.round(Math.random() * (255 - 60) + 60);
  const ip4id = Math.round(Math.random() * (255 - 60) + 60);
  return `${ip1}.${ip2id}.${ip3id}.${ip4id}`;
}

function zhengze(pattern, text, flags = '') {
  try {
    const regex = new RegExp(pattern, flags);
    const match = regex.exec(text);
    return match ? match[1].trim() : null;
  } catch (e) {
    return null;
  }
}

async function getRedirectUrl(url, ua) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual',
      headers: {
        'User-Agent': ua || 'Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0',
        'X-Forwarded-For': randIP()
      }
    });
    return response.headers.get('Location') || url;
  } catch (error) {
    console.error('Redirect error:', error);
    return null;
  }
}

async function c(url, ua) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': ua || 'Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0',
        'Referer': url,
        'X-Forwarded-For': randIP()
      }
    });
    return await response.text();
  } catch (error) {
    console.error('Request error:', error);
    return null;
  }
}

function getFileInfo(data) {
  return {
    name: zhengze(/"md">([^<]+)/, data),
    size: zhengze(/mtt">\( ([^)]+) \)/, data),
    author: zhengze(/发布者:<\/span>([^<]+)/, data),
    time: zhengze(/时间:<\/span>([^<]+)/, data),
    description: zhengze(/mdo">([\s\S]*?)<\/div>/, data, 'm')
  };
}

async function start(link, password) {
  try {
    const cleanLink = link.replace(/https?:\/\//, '');
    const [prefix] = cleanLink.match(/([a-z]+)\.lanzou[a-z]*\.com/) || [];
    const [_, lanzou] = cleanLink.match(/lanzou([a-z]+)\.com/) || [];
    const id = cleanLink.split('/').pop();

    let data = await c(`https://api.codetabs.com/v1/proxy?quest=https://${prefix}/tp/${id}`);
    let isMultiFile = !data.includes('举报文件');

    // 单文件处理逻辑
    if (!isMultiFile) {
      const info = getFileInfo(data);
      if (password) {
        const sign = zhengze(/var postsign = '([^']+)/, data);
        const formData = new URLSearchParams({ action: 'downprocess', sign, p: password });
        const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://${prefix}/ajaxm.php`, {
          method: 'POST',
          body: formData,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        const json = await response.json();
        if (json.zt !== 1) return { error: '密码错误' };
        return { ...info, url: await getRedirectUrl(`${json.dom}/file/${json.url}`) };
      }
      const domain = zhengze(/var tedomain = '([^']+)/, data);
      const path = zhengze(/var domianload = '([^']+)/, data);
      return { ...info, url: await getRedirectUrl(domain + path) };
    }

    // 多文件处理逻辑
    const docName = zhengze(/var \w+ = '([^']+)/, data);
    const [t, k, fid, uid] = ['t', 'k', 'fid', 'uid'].map(f => zhengze(new RegExp(`'${f}':[']?(\\w+)`), data));
    const formData = new URLSearchParams({ lx: 2, fid, uid, pg: 1, rep: 0, t, k, up: 1, ls: 1, pwd: password });

    const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://${prefix}/filemoreajax.php`, {
      method: 'POST',
      body: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const json = await response.json();
    if (json.zt !== 1) return { error: '密码错误' };

    const results = [];
    for (const item of json.text) {
      const fileData = await c(`https://api.codetabs.com/v1/proxy?quest=https://${prefix}/tp/${item.id}`);
      const domain = zhengze(/var tedomain = '([^']+)/, fileData);
      const path = zhengze(/var domianload = '([^']+)/, fileData);
      results.push({
        ...getFileInfo(fileData),
        url: await getRedirectUrl(domain + path)
      });
    }
    return { docName, files: results };

  } catch (error) {
    console.error('解析错误:', error);
    return { error: '解析失败' };
  }
}
