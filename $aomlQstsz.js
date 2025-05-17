const URLP = new URLSearchParams(window.location.search);
const $e = URLP.get('e');
if($e){
  console.log('@Drbrt sent e =>',$e,'// and it will work');
}
else{
  console.warn('@Drbrt sent no e =>',$e,'// so it won"t work');
}

async function fFetch(url, method = 'GET', headers = {}, body = null) {
  try {
    const options = {
      method,
      headers
    };

    if (body) {
      options.body = JSON.stringify(body);
      if (!headers['Content-Type']) {
        options.headers['Content-Type'] = 'application/json';
      }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Fetch 요청 실패:', error);
    throw error;
  }
}
