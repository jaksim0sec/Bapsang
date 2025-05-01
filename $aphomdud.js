let client = {Nick : '', Prof : '', Name : '', Color:''}
let Nuser = undefined;
let $$MMM = null;
setTimeout(async function() {
  if (true) {
    console.log('sessionStorage->', sessionStorage);

    if (getSession('$aphom')) {
      window.login = (getSession('$aphom') == '$urd') ? true : false;
      console.log('got $aphom');

      if (localStorage.getItem('$$uqatz') && localStorage.getItem('$$uqatz') !== '') {
        $$MMM = localStorage.getItem('$$uqatz');
      }

      if (login === true) {
        const fakeInfo = await getU();
        Nuser = fakeInfo;
        client.Nick = fakeInfo.nick;
        client.Name = fakeInfo.name;
        client.Prof = fakeInfo.prof;
        client.Color = fakeInfo.color;
        HTML('body').innerHTML = HTML('body').innerHTML
        .replace('로그인안된계정', client.Name)
        .replace('예시닉네임', ('<span>'+client.Nick+'</span>'+((Nuser.type == 'admin')?'<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>':''))).replace('예시닉네임', ('<span>'+client.Nick+'</span>'+((Nuser.type == 'admin')?'<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>':'')));
        HTML('main').innerHTML = HTML('main').innerHTML
        .replace('로그인안된계정', client.Name)
        .replace('예시닉네임', ('<span>'+client.Nick+'</span>'+((Nuser.type == 'admin')?'<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>':'')));
        HTML('#profile').onclick = function() {
          pageMove(`/mypage?u=${fakeInfo.name}`);
        };
        HTML('#nickname').onclick = function() {
          pageMove(`/mypage?u=${fakeInfo.name}`);
        };
        HTML('#profile img').src=fakeInfo.prof;
        HTML('#profile').style.outlineColor=`${fakeInfo.color}`;
        HTML('#mob-logined #profile').style.outlineColor=`${fakeInfo.color}`;
        if(HTML('#writerProf')){HTML('#writerProf').src=fakeInfo.prof;HTML('#writerProf').style.outlineColor=`${fakeInfo.color}`;
        HTML('#postImgButton').style.display = 'block'}
        HTML('#mob-logined #profile img').src=fakeInfo.prof;
        HTML('#mob-logined #profile').onclick = function() {
          pageMove(`/mypage?u=${fakeInfo.name}`);
        };
      }
    } else {
      console.warn('Session $aphom = New');

      if (!getSession('$aphom')) {
        setSession('$aphom', '$mp');
      }
      window.login = false;
      console.log('new Session $aphom = $mp // $vjrvl = ', sessionStorage);
    }

    console.log('$aphom is', window.login);
  }
}, 50);

function $aphpiy() {
  setSession('$aphom', '$mp');

  if (getSession('$aphom') === '$urd') {
    setSession('$aphom', '$mp');
  }

  localStorage.removeItem('$$uqatz');
  location.reload();
}

function setSession(key, value) {
  sessionStorage.setItem(key, value);
}

function getSession(key) {
  return sessionStorage.getItem(key);
}

async function getU() {
  try {
    const response = await fetch('/getU', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ omgp: $$MMM }),
    });

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error('Error in getU:', error);
  }
}

async function editU(i) {
  
  try {
    const response = await fetch('/editU', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({i:i,omgp: $$MMM,}),
    });

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error('Error in getU:', error);
  }
}

async function getUnorm(who) {
  try {
    const response = await fetch('/getUnorm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ who: who }),
    });

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error('Error in getUnorm:', error);
  }
}

//$jofromh
function BBBpass(value) {
  let result = '';
  let shift = random(50, 200);
  for (let i = 0; i < value.length; i++) {
    let charCode = value.charCodeAt(i);
    result += String.fromCharCode(charCode + shift);
  }
  let type = random(1, 3);
  if (type == 1) {
    return '0' + shift + 'a' + result;
  }
  if (type == 2) {
    return '1' + shift + '걃' + result;
  }
  if (type == 3) {
    return 'b' + shift + '늦' + result;
  }
}
function BBBdepass(value) {
  let codeType = value.match(/^0(\d+)a/) || value.match(/^1(\d+)걃/) || value.match(/^b(\d+)늦/);
  //console.log('해독대상',value);
  if (!codeType) {
    return '@NNNfrqsdd@ SUS';
  }

  let shift = parseInt(codeType[1]);
  value = value.substring(codeType[0].length);
  let result = '';
  for (let i = 0; i < value.length; i++) {
    let charCode = value.charCodeAt(i);
    result += String.fromCharCode(charCode - shift);
  }
  return result;
}