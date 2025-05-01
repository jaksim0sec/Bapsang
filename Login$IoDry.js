async function $$sqjpz(n, k) {
  if (true) {
    const $yplrm = (k === '!') ? await 'none' : k;
    localStorage.setItem('$$uqatz', $yplrm);
    setSession('$aphom', '$urd');
    if(HTML('#CHrem').checked){
      localStorage.setItem('$siypAphomO', BBBpass(HTML('#id').value));
      localStorage.setItem('$siypAphomQ', BBBpass(HTML('#pass').value));
    }
    window.location.href = '/';
  } else {
    console.error('SUSSUSSUSSUSSUS');
  }
}
HTML('#id').value=(localStorage.getItem('$siypAphomO'))?BBBdepass(localStorage.getItem('$siypAphomO')):'';
HTML('#pass').value=(localStorage.getItem('$siypAphomQ'))?BBBdepass(localStorage.getItem('$siypAphomQ')):'';

HTML('.cover button').addEventListener('click', function () {
  let $I = HTML('#id').value;
  let $Q = HTML('#pass').value;
  let fakeInfoLog = {$I:$I,$Q:$Q};
  if ($I === '' || $Q === '') {
    $3$fhrmdlsqnfrkdkffla(1);
    return;
  }
  $I = $gomfDID($I,10);
  $Q = $gomfDID($Q,25);
  if(($I+$Q).includes('SUS')){$3$fhrmdlsqnfrkdkffla(2)}
  else{$3$dnghlzhem1(1,fakeInfoLog);}
});