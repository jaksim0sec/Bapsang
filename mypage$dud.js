const URLP = new URLSearchParams(window.location.search);
let u = URLP.get('u');
//console.log(u)

async function timeUser(){
  if((u == undefined || u == null)&&client.Name!==undefined){u=client.Name;console.log('ㅇㅇ')};
  console.log(u)
  if(!(u == undefined || u == null)){
    let who = await getUnorm(u);
    console.log(who)
    if(who.status=='none'){}
    else{setTimeout(()=>{
      HTML('#Bprofile img').src = who.prof;
      HTML('#Bnick').innerHTML = `<span class="tag"title="스태프 훈장" style=""><img src="https://ifh.cc/g/rrOtdm.png" style = "height:28px;margin-right:2px;"></span>${who.nick} <span id='Bname'>(${who.name})`;
      HTML('#Babout').innerHTML = `` + who.about;
      HTML('#Bfollow').innerHTML = `<span style="font-weight:normal">팔로워</span> ${who.follow[1]} <span style="font-weight:normal">팔로우</span> ${who.follow[0]}`;
      HTML('#background').style.backgroundColor = who.color;
      document.title = `${who.nick}님의 마이페이지 | 바보상자`
      if(who.type == 'admin'){HTML('#Bnick .tag').style.display='inline'}
      console.log('kkk')
    },100)
    }
  }
}

setTimeout(()=>{timeUser()},200)

async function $3$dlalwldjqfhemqjxmsfhwlr(event) {
  if(u!==Nuser.name){$3$dkffla('경고','이 프로필은 자신의 프로필이 아닙니다.');return;}
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
    $3$dkffla('알림','업로드가 곧 완료됩니다.')
    Nuser.prof = await $3$dlalwldjqfhem(file);
    HTML('#Bprofile').src=Nuser.prof;
    editU(Nuser);
    setTimeout(()=>{
      $3$dkffla('','')
      setTimeout(()=>{$3$dkffla('알림','업로드가 완료되었습니다.');setTimeout(()=>{location.reload()},500)
    },500)
    },1000)
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