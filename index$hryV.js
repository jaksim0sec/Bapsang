let C = {};

async function $NNN(what) {
  try {
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        vpz: 'vpfr',
        zptr: JSON.stringify({
          ycy: what,
        }),
      },
    });

    const data = await response.json();
    //console.log('$Drbrt res is', data);
    return data;
  } catch (error) {
    //console.error('$^^Ryyqy is', error);
  }
}

function getC(type) {
  fetch('/getC', {
    method: 'POST',
    headers: {
      miz: 'max',
      yuqr: type,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('$Drbrt res of Cis', data);
      C = data;
      console.log(C);
      setTimeout(() => {
        showC();
      }, 500);
    })
    .catch((error) => console.error('$^^Ryyqy is', error));
}

async function postC(vpmt) {
  if (!($$MMM && client.Name && login)) {
    if (!($$MMM && client.Name) && login) {
      warn();
    }
    unLoginUI();
    return;
  }
  //console.log(vpmt);
  try {
    fetch('/postC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vpmt, omgp: $$MMM }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('$Drbrt res of Succ or Fail', data);
        HTML('textarea').value = '';
        getC();
        $3$djqfhemcnlth()
      })
      .catch((error) => console.error('$^^Ryyqy is', error));
  } catch (error) {
    console.error('Error in $NNN:', error);
  }
}

async function postCC(vpmt, n) {
  if (!($$MMM && client.Name && login)) {
    if (!($$MMM && client.Name) && login) {
      warn();
    }
    unLoginUI();
    return;
  }
  //console.log(vpmt);
  try {
    fetch('/postCC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vpmt, omgp: $$MMM, num: n }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('$Drbrt res of Succ or Fail', data);
        HTML('#comment' + n + ' textarea').value = '';
        C[n].comment.push({
          user: Nuser,
          time: timing2(),
          content: vpmt,
        });
        HTML('#comment' + n).innerHTML =
          showCC(C[n]) +
          `<div class='commentReplyCover'><textarea placeholder="${C[n].user.nick}님의 생각에 대해 반응해보세요!" id='writerText${n}'></textarea>
        <button id="writeSend${n}" class="highB">올리기</button></div>`;
        HTML(`#writeSend${n}`).onclick = function () {
          postCC(HTML('#writerText' + n).value, n);
        };
      })
      .catch((error) => console.error('$^^Ryyqy is', error));
  } catch (error) {
    console.error('Error in $NNN:', error);
  }
}

async function likeC(num) {
  if (!($$MMM && client.Name && login)) {
    if (!($$MMM && client.Name) && login) {
      warn();
    }
    unLoginUI();
    return;
  }
  //console.log(vpmt);
  try {
    fetch('/likeC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num: num, omgp: $$MMM }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('$Drbrt res of Succ or Fail', data);
        getC();
      })
      .catch((error) => console.error('$^^Ryyqy is', error));
  } catch (error) {
    console.error('Error in $NNN:', error);
  }
}

async function delC(num) {
  if (!($$MMM && client.Name && login)) {
    if (!($$MMM && client.Name) && login) {
      warn();
    }
    unLoginUI();
    return;
  }
  //console.log(vpmt);
  try {
    fetch('/delC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num: num, omgp: $$MMM }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('$Drbrt res of Succ or Fail', data);
        getC();
      })
      .catch((error) => console.error('$^^Ryyqy is', error));
  } catch (error) {
    console.error('Error in $NNN:', error);
  }
}

function showC() {
  const cont = HTML('#contentListCover');
  while (HTML('.contentCover')) {
    HTML('.contentCover').remove();
  }
  for (var i = 0; i < Object.keys(C).length; i++) {
    if (i > 10) {
      break;
    }
    const c = C[Object.keys(C)[i]];
    c.content = $3$htmlxkfcnf(c.content);
    const mentionRegex = /@[\w가-힣]+(?=\s|$)/g;
    let contC = c.content.replace(mentionRegex, (match) => {
      return `<span class='mention'>${match}</span>`;
    });
    const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    contC = contC.replace(urlPattern, (match) => {
      return match.includes('i.ibb')?match:`<span><a href="${match}" target="_blank" class="link">${match}</a></span>`;
    });

    const ii = i;
    setTimeout(() => {
      const CC = document.createElement('div');
      CC.className = 'contentCover';
      CC.id = `content${ii}`;
      let commentContenter = showCC(c);
      CC.innerHTML = `
    <div class="contentUser">
            <img
            loading="lazy"
              class="contentUserProf ProfSty"
              src="${c.user.prof}"
              style="outline-color:${c.user.color};"
              onerror="//this"
              onclick='pageMove("/mypage?u=${c.user.name}")'
            />
            <div class="contentUserInfo"onclick='pageMove("/mypage?u=${
              c.user.name
            }")'>
              <div class="contentUserNick">@${
                c.user.nick +
                (c.user.type == 'admin'
                  ? '<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>'
                  : '')
              }</div>
              <div class="contentUserTime">${c.time}</div>
            </div>
          </div>
          <div class="contentContent">
  ${contC.replace(/https:\/\/i\.ibb\.co\/[^\s"']+/g, '')}
  ${
    contC.match(/https:\/\/i\.ibb\.co\/[^\s"']+/g)
      ? `<div style = 'width:100%;height: 5px;'></div><img style = 'width:150px;border-radius:20px;'src='${contC.match(/https:\/\/i\.ibb\.co\/[^\s"']+/g)[0]}'>`
      : ''
  }
</div>

          <div class="contentTail">
            <div onclick = 'likeC(${ii})'class="contentLike L${
        c.likeP.includes(client.Name) ? 1 : 0
      }"><span><img src='https://ifh.cc/g/t45KAM.png' style="width:14px;margin-top:4.5px;margin-right:2px;"></span>${
        c.like
      }</div>
            <div class="contentComButton" onclick='toggleComment(${ii})'><span><img src='https://ifh.cc/g/QABW7t.png'style="width:14px;margin-top:3.5px;margin-right:4px;"></span> ${
        Object.keys(c.comment).length
      }</div>
            ${
              c.user.name == client.Name||fakeInfo.ssfzom
                ? `<div class="contentDel" onclick = 'delC(${ii})'>삭제</div>`
                : ''
            }
    </div>
    <div id='comment${ii}' class='commentCover'>
    ${commentContenter}
    <div class='commentReplyCover'><textarea placeholder="${c.user.nick}님의 생각에 대해 반응해보세요!" id='writerText${ii}'></textarea>
        <button id="writeSend${ii}" class="highB">올리기</button></div>
    </div>
    `;
      cont.appendChild(CC);
      HTML(`#writeSend${ii}`).onclick = function () {
        postCC(HTML('#writerText' + ii).value, ii);
      };
    }, 200 * i);
  }
}

getC();

function showCC(c) {
  let commentContenter = '';
  for (var j = 0; j < c.comment.length; j++) {
    const mentionRegex = /@[\w가-힣]+(?=\s|$)/g;
    let contC = c.comment[j].content.replace(mentionRegex, (match) => {
      return `<span class='mention'>${match}</span>`;
    });
    const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    contC = contC.replace(urlPattern, (match) => {
      return match.includes('i.ibb')?match:`<span><a href="${match}" target="_blank" class="link">${match}</a></span>`;
    });
    commentContenter += `
    <div class='commentC'>
    <div class="commentUser">
          <img
          loading="lazy"
            class="contentUserProf ProfSty"
            src="${c.comment[j].user.prof}"
            style="outline-color: ${c.comment[j].user.color};"
            onerror="//this"
            onclick='pageMove("/mypage?u=${c.comment[j].user.name}")'
          />
          <div class="contentUserInfo">
            <span class="contentUserNick" style = 'font-size:15px;color:#000000AA' onclick='pageMove("/mypage?u=${
              c.comment[j].user.name
            }")'>#${
      c.comment[j].user.nick +
      (c.comment[j].user.type == 'admin'
        ? '<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>'
        : '')
    }</span><span style="color:#00000040;font-size:11px;margin-left:5px;">(${
      c.comment[j].time
    })</span>
            <div class="contentUserTime" style = 'margin-top:3px;'>${contC}</div>
          </div>
      </div>
    </div>
    ${j < c.comment.length - 1 ? '<hr style="opacity:0.3;width: 98%;">' : ''}
    `;
  }
  return commentContenter;
}

function toggleComment(n) {
  HTML(`#comment${n}`).style.display =
    HTML(`#comment${n}`).style.display == 'flex' ? 'none' : 'flex';
}
/*
https://ifh.cc/g/y4oa3w.png

`
    <div class='commentC'>
    <div class="commentUser">
          <img
            class="contentUserProf"
            src="${c.comment[j].user.prof}"
            style="border:1.5px solid ${c.comment[j].user.color};"
            onerror="//this"
            onclick='pageMove("/mypage?u=${c.comment[j].user.name}")'
          />
          <div class="contentUserInfo">
            <div class="contentUserNick">#${c.comment[j].user.nick+((c.comment[j].user.type == 'admin')?'<span class="tag"title="스태프 훈장"><img src="https://ifh.cc/g/rrOtdm.png"></span>':'')}</div>
            <div class="contentUserTime">${c.comment[j].time}</div>
          </div>
          <span class='commentContentCover'>${contC}</span>
      </div>
    </div>
    `
*/
