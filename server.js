//version New-> v. 0.01

//get Modules
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

//app Set
const app = express();
app.use(cors({
  origin: ['https://bapsang.onrender.com','https://babosangja.onrender.com'],
  allowedHeaders: [
    'Content-Type',
    'ssO',
    'ssW',
    'miz',
    'yuqr',
    'vpz',
    'zptr'
  ]
}));
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: '워워, 진정하세요. 당신은 분당 30번 이상 요청하고 있어요!',
  statusCode: 403,
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.set('trust proxy', true);
app.use(limiter);
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) res.set('Content-Type', 'text/css');
      if (filePath.endsWith('.js')) res.set('Content-Type', 'application/javascript');
    }
  }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const routes = {
    '/': 'index.html',
    '/comu': 'comu.html',
    '/login': 'login.html',
    '/reg': 'reg.html',
    '/mypage': 'mypage.html',
    '/alarm': 'alarm.html',
    '/setting': 'setting.html',
    '/term': 'term.html',
    '/space': 'errorr.html'
};
  
app.get('*', (req, res) => {
    if(saveData.ban.ip.includes(req.ip)){
      res.status(404).sendFile(path.join(__dirname, 'error.html'));
      return;
    }
    const file = routes[req.path];
    if (file) {
      res.sendFile(path.join(__dirname, file));
      console.log(`▶ ${req.path} (${req.ip})`);
    } else {
      res.status(404).sendFile(path.join(__dirname, 'error.html'));
      console.log(`▶ error ${req.path} (${req.ip})`);
    }
});

//api base
app.post('*', (req, res, next) => {
    console.log(req.header)

    next()
})

//api inner


//useful Def
function random(min, max) {
    const time = Date.now();
    let seed = time ^ (time >> 3);
    seed = (seed * 9301 + 49297) % 233280;
    const randomValue = (seed / 233280) + Math.random();
    return Math.floor((randomValue % 1) * (max - min + 1)) + min;
}
  
function toggle(text, key) {
    let res = text;
    if (res.includes(key)) {
      while (res.includes(key)) {
        res = res.replace(key, '');
      }
    } else {
      res += key;
    }
    return res;
}
  
function BBBtoken(type, num) {
    if (num > 25) { return '@NNNyplrm@ !work num@.@25'; }
    let token = "";
    while (true) {
      for (var i = 0; i < num; i++) {
        token += random(0, 9);
      }
      if (!(K.NSD.token.includes(token))) { K.NSD.token.push(token); break; };
    }
    return token;
}
  
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
  
function timing(){
    const now = new Date();
  const formattedDate = now.getFullYear() + '.' + (parseInt(now.getMonth()) + 1)+'.' + now.getDate();
    return formattedDate;
}

//server Starter
app.listen(3000, () => {
    console.log('▶▶ Running');
  });
//setInterval(()=>{fixData(saveData)},600000)
  
console.log(BBBpass('이 프로젝트는 바보상자크루에서 1인 개발되었습니다. This project was developed solo by BaBoBox Crew.'));
console.log(BBBdepass('1153걃îéčþČčâÝ'));
console.log(BBBdepass(BBBpass('이 프로젝트는 바보상자크루에서 1인 개발되었습니다. This project was developed solo by BaBoBox Crew.')));
  