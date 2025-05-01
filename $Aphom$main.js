let K = null;
function $3$dnghlzhem1(n,i){if(n==2){$3$dnghlzhem1o5(n,i);return;};$3$dnghlzhem2(n,i);};
function $3$dnghlzhem1o5(n,i){$3$rPwjdrkdlq(i)};
function $3$dnghlzhem2(n,i){$3$dnghldhksfygudgkatn(n,i);};
async function $3$dnghldhksfygudgkatn(n,i){$3$fhrmdlsrjatkvocl(i);console.log(n,' :D');};
function $3$chlwhdfhrmdls(n){const doit = (n!=='N')?true:false;console.log(doit);if(doit){$$sqjpz(29,K)}else(alert('로그인불가'))}
function $3$fhrmdlsrjatkvocl(i){
  console.log(i,i.$I,i.$Q)
  fetch('/3cpzj', {
    method: 'POST',
    headers: {
      $$O: i.$I,
      $$W: i.$Q,
    }
  })
  .then(response => response.json())
  .then(data => {K = data.s;$3$chlwhdfhrmdls(K);})
  .catch(error => console.error('$3$fhrmdlsdhfb is', error));
}
function $3$rPwjdrkdlq(i) {
  console.log(i);
  fetch('/3rPwjdrkdlq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(i)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    K = data;if(K.status){
      $3$ghldnjsrkdlqdkfflaghkfehd(K.status);
      if(K.status=='1'){
      if(localStorage.getItem('$3$rPwjdrPtn')){localStorage.setItem('$3$rPwjdrPtn',localStorage.getItem('$3$rPwjdrPtn')+1)}
      window.location.href='/login'
    }}
  })
  .catch(error => console.error('$3$rPwjdrkdlq is', error));
}

//i.$I i.$Q