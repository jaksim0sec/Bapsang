function HTML(name) {
  const element = document.querySelector(name);
  return element ? element : null;
}

async function pageMove(page, time) {
  if (loader) {
    HTML('#loader').style.animation = 'show 1s ease';
    setTimeout(() => {
      window.location.href = page;
    }, time);
  } else {
    window.location.href = page;
  }
}

function random(min, max) {
  const time = Date.now();
  let seed = time ^ (time >> 3);
  seed = (seed * 9301 + 49297) % 233280;
  const randomValue = (seed / 233280) + Math.random();
  return Math.floor((randomValue % 1) * (max - min + 1)) + min;
}

function timing(){
  const now = new Date();
const formattedDate = now.getFullYear() * 10000000000 + (now.getMonth() + 1) * 100000000 + now.getDate() * 1000000 +
  now.getHours() * 10000 + now.getMinutes() * 100 + now.getSeconds();
  return formattedDate;
}

function timing2(){
  const now = new Date();
const formattedDate = now.getFullYear() + '.' + now.getMonth() + 1+'.' + now.getDate();
  return formattedDate;
}

// 로그인 상태 설정
window.login = null;

function updateLoginState() {
  if (window.innerWidth > 768) {
    HTML('#mobileNavCover').style.visibility = 'hidden';
    HTML('#mobileNavCover').style.opacity = '0';
    if (login) {
      HTML('#logined').style.display = 'flex';
      HTML('#not-logined').style.display = 'none';
    } else {
      HTML('#logined').style.display = 'none';
      HTML('#not-logined').style.display = 'flex';
    }
    if(HTML('#BfollowB')){HTML('#BfollowB').innerHTML = '+ 팔로우'}
  } else {
    HTML('#logined').style.display = 'none';
    HTML('#not-logined').style.display = 'none';

    if (login) {
      HTML('#mob-logined').style.display = 'flex';
      HTML('#mob-logined').style.flexDirection = 'column';
      HTML('#mob-not-logined').style.display = 'none';
    } else {
      HTML('#mob-logined').style.display = 'none';
      HTML('#mob-not-logined').style.display = 'flex';
    }
    if(HTML('#BfollowB')){HTML('#BfollowB').innerHTML = '+'}
  }
}

const wawiter  = setInterval(()=>{
  if(window.login !== null){
    window.addEventListener("resize", updateLoginState);
    updateLoginState();
    clearInterval(wawiter);
  }
},10)
