
async function $3$dlalwldjqfhemqjxmsfhwlr(event) {
  const file = event.files ? event.files[0] : null;
  if (file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024;
    if (!allowedTypes.includes(file.type)) {
      $3$dkffla('경고', '허용되지 않는 파일 형식입니다.');
      return;
    }
    if (file.size > maxSize) {
      $3$dkffla('알림', '파일 크기가 너무 큽니다. 최대 5MB까지 업로드 가능합니다.');
      return;
    }
    $3$dkffla('알림','업로드가 곧 완료됩니다.');
    let r = await $3$dlalwldjqfhem(file);;
    $3$dkffla('알림','업로드가 완료되었습니다.');
    return r;
    
  }
  else{alert('파일오류')}
}

async function $3$dlalwldjqfhem(file) {
  const $sq = '7ced23' + '11be7d3' + `${'9b9e34c7921b5ea252d'}`;
  const formData = new FormData();
  formData.append('image', file);
  formData.append('key', $sq);
  try {
    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      return data.data.url;
    } else {
      console.warn('failed uploading IMG');
      return 'null';
    }
  } catch (error) {
    console.error('failed uploading IMG :', error);
  }
}

function $yrdyDrmfrt(){
  fetch('/test', {
    method: 'POST',
    headers: {
      'vpz': 'vpfr',
      'zptr': JSON.stringify({
        num: 10,
        type: "def"
      })
    }
  })
  .then(response => response.json())
  .then(data => console.log('$Drbrt res is', data))
  .catch(error => console.error('$^^Ryyqy is', error));
}

function $yrdyDrmfrt2(){
  fetch('/test', {
    method: 'POST',
    headers: {
      'vpz': 'yplrm',
      'zptr': JSON.stringify({
        num: 1000000,
        type: "def"
      })
    }
  })
  .then(response => response.json())
  .then(data => console.log('$Drbrt res is', data))
  .catch(error => console.error('$^^Ryyqy is', error));
}

function $yrdyDrmfrt1(아흣아항){
  fetch('/test', {
    method: 'POST',
    headers: {
      'vpz': 'vpfr',
      'zptr': JSON.stringify({
        ycy : 'test'
      })
    }
  })
  .then(response => response.json())
  .then(data => console.log('$Drbrt res is', data))
  .catch(error => console.error('$^^Ryyqy is', error));
}

