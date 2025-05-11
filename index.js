//version 0.01
const express = require('express');
//const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://igclsxhcqikzrczohime.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnY2xzeGhjcWlrenJjem9oaW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4OTY1NDUsImV4cCI6MjA2MjQ3MjU0NX0.AL0BTiuIRmJLmYkcDBscNqFRh6temQ-NdYP51bFb5tk');
const rId = 1;
app.set('trust proxy', true);

app.use(cors({
  origin: '*',
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

/*const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const firebaseConfig = {
  apiKey: "AIzaSyCQhZwqjqDnd-5aIkbxwzuiosOLNEgxkZo",
  authDomain: "bbbb-c3481.firebaseapp.com",
  projectId: "bbbb-c3481",
  storageBucket: "bbbb-c3481.firebasestorage.app",
  messagingSenderId: "52727518098",
  appId: "1:52727518098:web:60440474400b32d91ba74b",
  measurementId: "G-Z4DVV47RSF"
};

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
const functions = require("firebase-functions");
const analytics = getAnalytics(app);
*/

// 정적 파일 제공
app.use(express.static(path.join(__dirname), {
  setHeaders: function (res, filePath) {
    if (filePath.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
    if (filePath.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));*/

let noneSaveData = {
  token: []
}
let saveData = {
  ban:{
  ip:[],id:[]
  },
  user:{
    'park0sec':{
      nick:'박영초',
      prof:'https://ifh.cc/g/yl44m6.jpg',
      name:'park0sec',
      about:'바보상자 개발자😏 <a style="color:#56aaee" href="https://discord.com">(디스코드 @pak0sec)</a>',
      color:'#E6D1C0',
      mbti:'entp',
      hobby:'',
      setting:{},
      type:'admin',
      follow:[0,0],xp:100000,ssfzom:true
    },
    'test':{
      nick:'밬밬',
      prof:'https://ifh.cc/g/GBvq2B.png',
      name:'test',
      about:'테스트 계정',
      color:'#FFCC7B',
      mbti:'intp',
      hobby:'',
      setting:{},
      type:'norm',
      follow:[0,0],xp:100000
    }
  },
  password:{'park0sec':'coolpassword','test':'a'},
  comu:[
  ],
}

const K = {
  NSD: noneSaveData,
  SD : saveData
}

async function getData() {
  const { data, error } = await supabase
    .from('saveData')
    .select('content')
    .eq('id', rId);

  if (error) {
    console.error("데이터 가져오기 오류:", error);
    return;
  }

  if (data.length === 0 || !data[0].content) {
    console.log(`id ${rId}에 해당하는 content 데이터가 없습니다.`);
    await fixData(saveData);
    return;
  }

  saveData = data[0].content;
  console.log("saveData 불러오기 완료");
}

async function fixData(saveData) {
  const { data: updateData, error: updateError } = await supabase
    .from('saveData')
    .update({ content: saveData })
    .eq('id', rId);

  if (updateError) {
    console.error("데이터 업데이트 오류:", updateError);
  } else {
    console.log("saveData가 content 컬럼에 저장되었습니다.");
  }
}
getData()
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
  const file = routes[req.path];
  if(saveData.ban.ip.includes(req.ip)){
res.status(404).sendFile(path.join(__dirname, 'error.html'))
}
  if (file) {
    res.sendFile(path.join(__dirname, file));
    console.log(`▶ ${req.path} (${req.ip})`);
  } else {
    res.status(404).sendFile(path.join(__dirname, 'error.html'));
    console.log(`▶ error ${req.path} (${req.ip})`);
  }
});


app.post('/postC', (req, res) => {
  console.log('▶ /postC' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  if (!body || !body.vpmt) { 
    console.error('No $vpmt <- body');
    return res.status(400).json({ error: 'No $vpmt <- body' });
  }
  if(true){}
  //console.log('Received vpmt:', body.vpmt);
  saveData.comu.unshift(
    {
      user:saveData.user[BBBdepass(token).replace('UP','')],
      time:timing(),
      content:body.vpmt,
      like:0,
      likeP:[],
      comment:[],
    }
  )
  res.json({ succOrfail: 'succ'});
});

app.post('/$3$wjdqhrkwudhrl', (req, res) => {
  console.log('▶ /정보가져오기' + ` (${req.ip})`);
  res.json(saveData);
});
app.post('/$dryMreOmgp', (req, res) => {
  //console.log('▶ /정보수정하기' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let u = body.who;
  let w = body.what;
  let h = body.how;
console.log('▶ /정보수정하기' ,u,w,h+` (${req.ip})`)

  if(Object.keys(saveData.user).includes(u)){
saveData.user[u][w]=h;res.json({r:true})}else{res.json({r:false});}

});

app.post('/postCC', (req, res) => {
  console.log('▶ /postCC' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  let n = body.num;
  //console.log(n);
  if (!body || !body.vpmt) { 
    console.error('No $vpmt <- body');
    return res.status(400).json({ error: 'No $vpmt <- body' });
  }
  if(true){}
  //console.log('Received vpmt:', body.vpmt);
  saveData.comu[n].comment.push(
    {
      user:saveData.user[BBBdepass(token).replace('UP','')],
      time:timing(),
      content:body.vpmt,
      like:0,
      likeP:[],
    }
  )
  res.json({ succOrfail: 'succ'});
});

app.post('/likeC', (req, res) => {
  console.log('▶ /likeC' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  let num = body.num;
  //console.log('num',num)
  if (!body || isNaN(body.num)) { 
    console.error('No $num <- body');
    return res.status(400).json({ error: 'No $num <- body' });
  }
  if(!saveData.comu[num].likeP.includes(BBBdepass(token).replace('UP',''))){
  saveData.comu[num].like++;
  saveData.comu[num].likeP.push(BBBdepass(token).replace('UP',''));
  }
  else{
  const where = saveData.comu[num].likeP.indexOf(BBBdepass(token).replace('UP',''));
  saveData.comu[num].like--;
  saveData.comu[num].likeP.splice(where,1);
  }
  res.json({ succOrfail: 'succ' });
});

app.post('/delC', (req, res) => {
  console.log('▶ /delC' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  let num = body.num;
  //console.log('num',num)
  if (!body || isNaN(body.num)) { 
    console.error('No $num <- body');
    return res.status(400).json({ error: 'No $num <- body' });
  }
  if(saveData.comu[num].user.name == BBBdepass(token).replace('UP','')||saveData.user[BBBdepass(token).replace('UP','')].ssfzom){
    saveData.comu.splice(num,1);
    res.json({ succOrfail: 'succ' });
  }
  else{res.json({ succOrfail: 'fail : SUS action found' });}
});


app.post('/getC', (req, res) => {
  console.log('▶ /getC' + ` (${req.ip})`);
  let header = req.headers;
  let limit = header.miz;
  let type = header.yuqr;
  res.json(saveData.comu);
});

app.post('/getU', (req, res) => {
  console.log('▶ /getU' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  if(Object.keys(saveData.user).includes(BBBdepass(token).replace('UP',''))){
    res.json(clientInfo);
  }
  else{res.json({ succOrfail: 'fail : SUS action found' });}
});

app.post('/editU', (req, res) => {
  console.log('▶ /editU' + ` (${req.ip})`);
  let header = req.headers;
  let body = req.body;
  let token = body.omgp;
  console.log(body);
  let clientInfo = saveData.user[BBBdepass(token).replace('UP','')];
  const name = BBBdepass(token).replace('UP','');
  if(name==body.i.name){
    saveData.user[name]=body.i;
    res.json({status:'finished'});return;
  }
  //console.log('num',num)
  res.json({status:'error'})
});

app.post('/getUnorm', (req, res) => {
  let header = req.headers;
  let body = req.body;
  let who = body.who;
  console.log('▶ /getUnorm'+ who + ` (${req.ip})`);
  if(Object.keys(saveData.user).includes(who)){
    res.json(saveData.user[who])
  }
  else{res.json({status:null})}
});

app.post('/3cpzj', (req, res) => {
  //console.log('▶ RAW headers:', req.rawHeaders);
  //console.log('▶ PARSED headers object:', req.headers);
  let header = req.headers;
  //console.log(header)
  let id = header['sso'];
  let ps = header['ssw'];
  if(saveData.ban.id.includes(id)){res.json({ s: 'N'});}

  console.log('▶ /3cpzj id->' +id + ` (${req.ip})`);
  if(saveData.user[id] && saveData.password[id]){
    if(saveData.password[id]==ps){const B = BBBpass('UP'+id,id,'yese');res.json({s: B});}
    else{res.json({ s: 'N'});}
  }else{res.json({ s: 'N'});}
});

app.post('/3rPwjdrkdlq', (req, res) => {
  let header = req.headers;
  //console.log(header)
  let body = req.body;
  //console.log(body);
  let sender = ''
  if(Object.keys(saveData.user).includes(body['$I'])){sender+='idExist,'}
  const Nicks = Object.values(saveData.user).map(item => item.nick);
  if(Nicks.includes(body['$M'].trim())){sender+='nickExist,'}
  if(body.num>=2){sender+='accountMany,'}
  if(sender!==''){res.json({status:sender});return}
  saveData.password[body['$I']] = body['$Q'];
  saveData.user[body['$I']] = {
    nick:body['$M'],
    prof:'https://ifh.cc/g/qaHX3T.png',
    name:body['$I'],
    about:body.about,
    color:body.color,
    mbti:body.mbti,
    hobby:body.hobby,
    setting:{},
    type:'norm',
    projectNum:[],
    follow:[0,0],
    xp:0,
  }
  res.json({status:'finished'})
});

app.post('/test', (req, res) => {
  let header = req.headers;
  let command = header['vpz'];
  let more = JSON.parse(header['zptr']);
  if (command === 'yplrm') {
    let type = parseInt(more.type);
    let num = parseInt(more.num);
    console.log('▶ API /test -> command-' + command + ';num-' + num + ` (${req.ip})`);
    res.json(BBBtoken(type, num));
  } 
  else if (command === 'yplrmR') {
    let token = parseInt(more.bsair);
    console.log('▶ API /test -> command-' + command + ';token-' + token + ` (${req.ip})`);
    if (K.NSD.token.includes(token)) {
      res.json('@div@');
    }
    else {
      res.json('K.NSD.@yplrmR@ !includes @bsair@');
    }
  }
  else if (command === 'vpfr') {
    let txt = more.ycy;
    if (!isNaN(txt)) {
      console.log('▶ API /test -> Invalid number in ycy:', more.ycy);
      res.json({ error: 'Invalid ycy value' });
      return;
    }
    console.log('▶ API /test -> command-' + command + ';txt-' + txt + ` (${req.ip})`);
    res.json(BBBpass(txt));
  }
  else if (command === 'frvpfr') {
    let txt = more.ycy;
    console.log('▶ API /test -> command-' + command + ';txt-' + txt + ` (${req.ip})`);
    res.json(BBBdepass(txt));
  }
  else {
    console.log('▶ API /test -> SUS' + ` (${req.ip})`);
    res.json('@?yrdy@ !work that');
  }
});

// 기타 함수
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

app.listen(3000, () => {
  console.log('▶▶ Running');
});
setInterval(()=>{fixData(saveData)},600000)

console.log(BBBpass('이 프로젝트는 바보상자크루에서 1인 개발되었습니다. This project was developed solo by BaBoBox Crew.'));
console.log(BBBdepass('1153걃îéčþČčâÝ'));
console.log(BBBdepass(BBBpass('이 프로젝트는 바보상자크루에서 1인 개발되었습니다. This project was developed solo by BaBoBox Crew.')));
