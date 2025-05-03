/*document.head.appendChild(Object.assign(document.createElement('meta'), { charset: 'UTF-8' }));
document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'viewport', content: 'width=device-width' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'styles.css' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'shortcut icon', href: 'https://ifh.cc/g/tVs9Jo.png' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'preconnect', href: 'https://fonts.googleapis.com' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=IBM+Plex+Sans+KR&family=Jua&family=Nanum+Gothic+Coding&display=swap' }));
document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gowun+Dodum&amp;family=Jua&amp;display=swap' }));*/
const before = HTML('body').innerHTML;
HTML('body').innerHTML = `
<noscript>
      <h2>이런! JS 실행이 불가능한 환경입니다.</h2>
      <h4>Hmm.. JS can't work here!</h4>
    </noscript>
    <div id="loader"></div>
    <header>
      <div id="logo" onclick="pageMove('/',1000)">
        <img src="https://ifh.cc/g/tVs9Jo.png" />
      </div>
      <div class="standHr"></div>
      <!--PC 와 타블렛 환경 네비게이션바-->
      <nav>
        <div onclick="pageMove('/',1000);">커뮤니티</div>
        <div onclick="pageMove('/space',1000);">스페이스</div>
        <div onclick="pageMove('/term',1000);">공지사항</div>
        <div onclick="pageMove('/mypage',1000);">마이페이지</div>
      </nav>
      <div class="standHr"></div>
      <!--PC 와 타블렛 환경 로그인 메뉴-->
      <div id="more">
        <div id="logined">
          <div id="profile" class = 'ProfSty'><img src="https://ifh.cc/g/qaHX3T.png"/></div>
          <div id="nickname">예시닉네임</div>
          <button
            class="midB"
            style="width: 50px; height: 50px; padding: 8px; margin-top: 10px;"
            id="logout"
            onclick="$aphpiy()"
          >
            ⨉
          </button>
        </div>
        <div id="not-logined">
          <button class="highB" style="width: 100px" onclick="pageMove('/login',1000)">로그인</button>
          <button class="midB" style="width: 100px" onclick="pageMove('/reg',1000)">회원가입</button>
        </div>
        <div
          id="mobileNav"
          onclick="
          HTML('#mobileNavCover').style.visibility = 'visible';
          HTML('#mobileNavCover').style.opacity = '1';
          HTML('#mobileNavWindow').style.height = '450px'"
        >
          <img src="https://ifh.cc/g/3a2WwO.png" />
        </div>
      </div>
    </header>
    <!--모바일 네비게이션바 환경 + 로그인 메뉴-->
    <div
      id="mobileNavCover"
      onclick="
    HTML('#mobileNavWindow').style.height = '0px'
    HTML('#mobileNavCover').style.opacity = '0'
    HTML('#mobileNavCover').style.visibility = 'hidden';"
    >
      <div id="mobileNavWindow">
        <div id="mobileMore-R">
          <div id="mob-logined">
            <div id="profile" class='ProfSty'><img src="https://ifh.cc/g/y4oa3w.png" /></div>
            <div id="nickname">예시닉네임</div>
            <button
              class="midB"
              style="padding: 8px; margin-top: 10px;width: 130px;"
              onclick="$aphpiy()"
            >
              ⨉
            </button>
          </div>
          <div id="mob-not-logined">
            <button class="highB" style="width: 100px" onclick="pageMove('/login',1000)">로그인</button>
            <button class="midB" style="width: 100px" onclick="pageMove('/login',1000)">회원가입</button>
          </div>
        </div>
        <div style="width: 150px; height: 15px"></div>
        <div class="standHr" style="height: 15px"></div>
        <div style="width: 150px; height: 15px"></div>
        <div id="mobileNav-R">
          <div onclick="pageMove('/',1000);">커뮤니티</div>
          <div onclick="pageMove('/space',1000);">스페이스</div>
          <div onclick="pageMove('/term',1000);">공지사항</div>
          <div onclick="pageMove('/mypage',1000);">마이페이지</div>
        </div>
      </div>
    </div>
` + before+`<div id="windowCover">
<div id="window">
  <div id="title">예시 알림입니다.</div>
  <div id="content">이곳에는 내용이 표시됩니다.</div>
  <button onclick="$3$dkffla('','')" id="closer" class="highB">확인</button>
</div>
</div>`;

const nameList = {'/':'홈','/login':'로그인','/reg':'회원가입','/mypage':'마이페이지','/alarm':'알림','/setting':'설정','/term':'이용약관 및 정책'}
document.title = `바보상자 : ${nameList[window.location.pathname]}`;
setTimeout(()=>{
  HTML('main').style.display = 'flex';
  HTML('#loader').style.opacity = '0';
  setTimeout(()=>{
    HTML('#loader').style.display = 'none';},1000)
},1100)