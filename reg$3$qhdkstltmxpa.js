HTML('#cover2 .highB').addEventListener('click', function () {
  let $I = HTML('#id').value;
  let $Q = HTML('#pass').value;
  let $cQ = HTML('#passC').value;
  let $M = HTML('#nick').value;
  let color = HTML('#color').value;
  let about = HTML('#about').value;
  let mbti = HTML('#mbti').value;
  let hobby = HTML('#hobby').value;
  let fakeInfoLog = {$I:$I,$Q:$Q,color:color,about:about,mbti:mbti,hobby:hobby,$M:$M,num:(localStorage.getItem('$3$rPwjdrPtn'))?localStorage.getItem('$3$rPwjdrPtn'):0};
  if ($I === '' || $Q === ''|| $M === '') {
    $3$fhrmdlsqnfrkdkffla(1);
    return;
  }
  if($Q!==$cQ){$3$ghldnjsrkdlqdkfflaghkfehd('passNot');return}
  $I = $gomfDID($I,10);
  $Q = $gomfDID($Q,25);
  if($M.length>6||$M.length<2){$3$ghldnjsrkdlqdkfflaghkfehd('nickLong');return;}
  if(($I+$Q).includes('SUS')){$3$fhrmdlsqnfrkdkffla(2)}
  else{$3$dnghlzhem1(2,fakeInfoLog);}
});


function $3$ghldnjsrkdlqdkfflaghkfehd(i){
  if(i==1){return};
  console.log(i)
  let alertContent = '';
  if(i=='finished'){
    $3$dkffla('가입을 성공했어요','좋은 추억을 만들어봐요!');
    setTimeout(()=>{location.href='/login'},500)
  }

  if(i.includes('idExist')&&i.includes('nickExist')){
    alertContent='아이디와 닉네임이 이미 사용되고 있습니다'
  }
  if(i.includes('idExist')&&!i.includes('nickExist')){
    alertContent='아이디가 이미 사용되고 있습니다'
  }
  if(!i.includes('idExist')&&i.includes('nickExist')){
    alertContent='닉네임이 이미 사용되고 있습니다'
  }
  if(i.includes('passNot')){
    alertContent='입력하신 비밀번호와 확인비밀번호가 일치하지 않습니다.'
  }
  if(i.includes('nickLong')){
    alertContent+='입력하신 닉네임이 글자수 제한에 맞지 않아요'
  }
  if(i.includes('account')){
    alertContent='한 유저당 최대 두개의 계정까지 가입이 가능합니다. 만일 아직 계정이 한개 이하라면 운영자에게 문의해주세요.';
  };
  HTML('#regAlert').innerHTML = alertContent;
  HTML('#regAlert').style.opcity = 0;
  HTML('#regAlert').style.transtition = 'all 0.5s ease';
  HTML('#regAlert').style.display = 'block';
  HTML('#regAlert').style.opcity = 1;
  //setTimeout(()=>{},500)
}