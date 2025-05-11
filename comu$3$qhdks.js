document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
      HTML('#writeSpace .highB').addEventListener('click', function () {
        if(localStorage.getItem('$3$rmfwkrtjdtlrks')){
        if(((timing() - localStorage.getItem('$3$rmfwkrtjdtlrks')))<5){
          $3$rmfrudrh(3);return;
        }
        }
        let $3$sodyd = HTML('#writeSpace textarea').value;
        if ($3$sodyd === '') {$3$rmfrudrh(2);return;}
        if($3$sodyd.length>300){$3$rmfrudrh(1);return}
        $3$sodyd = $3$htmlxkfcnf(DOMPurify.sanitize($3$sodyd));
        $3$sodyd = $goayrt($3$sodyd);
        localStorage.setItem('$3$rmfwkrtjdtlrks', timing());
        postC($3$sodyd+` ${r !== null?r:''}`);
        setTimeout(()=>{postedImg = null;})
      });
    },1000)
  })
  
  function $3$htmlxkfcnf(str) {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;',
    };
  
    return str.replace(/[&<>"'`]/g, (char) => escapeMap[char]);
  }