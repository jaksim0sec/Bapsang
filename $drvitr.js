function warn(){
  console.error('수상한 활동이 감지되었습니다.');
  $3$dkffla('수상한 활동이 감지되었습니다.','부적절한 활동으로 서버에 피해를 줄 경우 법적 처벌을 받을 수 있음 알려드립니다. 만일 오류라 생각되신다면 개발자에게 문의 부탁드립니다.')
  console.error('부적절한 활동으로 서버에 피해를 줄 경우 법적 처벌을 받을 수 있음 알려드립니다.');
}

function $3$dkffla(t, c) {
  const w = HTML('#window'), cvr = HTML('#windowCover'),
        v = + parseInt(cvr.style.opacity) == 1, o = v ? '0' : '1';
  w.querySelector('#title').innerHTML = t;
  w.querySelector('#content').innerHTML = c;
  if (!v) cvr.style.display = 'block';
  setTimeout(() => { cvr.style.opacity = o; }, 10);
  setTimeout(() => { if (v) cvr.style.display = 'none'; }, 310);
}

function $goayrt(targetString) {
  return targetString;
  let result = targetString;
  const removeSpecialChars = (text) => text.replace(/[^\w\s]/g, '').replace(/\d+/g, '');

  const blackList = [
    '병신', '개새끼', '새끼', '시발', '좆', '씨발', '미친놈', '존나', '노답', '썅', '뿅뿅', '병X', 'X신',
    '미친X', '얼척', '엿먹어', '애미', '애비', '뒤지다', '죽어', '좆같다', '지랄', '좆밥', '좆꼴', 'X끼',
    '똥꼬', '씹', '병X', '꼴값', '상간녀', '자살충동', '까불다', '쉐끼', '발자국', '개XX', '쓰레기', '죽여버리다', 
    '개X', '씹새끼', '개미친X', 'X같이', '좆같은', '새끼야', '낄낄', '넌X신', '똥X', '빡대가리', '호로새끼', '병신년',
    '시발새끼', '개새끼년', '시발놈', '하늘의 법칙', '지X', '앰창', '씨발', 'ㅅㅂ', '븅신', '느금', 'ㅄ', '좆까', 
    '빨갱이', '자한당', '진보새끼', '수구세력', '자유한국당', '빨갱이새끼', '민주노동당', '자유당', '왼쪽X신', '혐오',
    '박근혜', '문재인', '우파', '좌파', '문빠', '박빠', '사상검증', '독재자', '좌빨', '꼴통', '빨갱이새끼', '태극기부대',
    '수꼴', '전두환', '무능한 정부', '어용언론', '국가반역자', '극우', '극좌', '적폐청산', '인권운동', '사회주의', 
    '레드컴플렉스', '사이비종교', '민족반역자', '친일파', '종북', '종교자유', '허위정보', '사이버테러', '언론탄압',
    '죽어버려', 'X같은', '좆같은', '게이새끼', 'X새끼', '늙은X', '노무', '애X', '미친놈', '하청새끼', '년놈', '상간년', 
    '박정희', '가짜뉴스', '전쟁광', '인종차별', '종교차별', '가짜보수', '대통령새끼', '문재인새끼', '좌파새끼', 
    '우파새끼', '개독', '빨갱이들', '떼놈', '미친년', '염병', '병신새끼', 'X같은새끼', '목사새끼', '카르텔', '개념없', 
    '놈팽이', '하위직', '간첩', '암살자', '살인자', '극단주의', '사회적이탈자', '병X새끼', '친일매국노', '패거리', 
    '반정부', '저능아', '양아치', '쓰레기년','쓰레기인간', '노가리', '빨갱이년', '병X걸린', '강간범', '부패자', 
    '친미주의자', '유신', '홍준표', '부엉이바위', '혐오표현', '난민', '깡패', '문빠들', '독재정권', '친일파새끼', '미친정권', 
    '서슬퍼런', '빨갱이짓', '똥통', '종북자', '독재주의', '깡패새끼', '여론조작', '자유연대', '기레기', '기레기언론', 
    '언론개혁', '음모론', '적반하장', '북한', '보수파', '보수정권', '악질', '못된년', '국정농단', '보수주의자', 
    '헌법파괴자','이기야','운지'
  ];

  for (let i = 0; i < blackList.length; i++) {
    const cleanWord = removeSpecialChars(blackList[i]); 
    let index = result.includes(cleanWord);  
    while (index) {
      result = result.replace(cleanWord,'(검열)');
      index = result.includes(cleanWord);
      console.log('dd')
    }
  }

  return result;
}

function $gomfDID(value,num) {
  const allowedChars = /^[a-zA-Z0-9_\-\.@*!]*$/;
  if (!allowedChars.test(value) || value.length > num) {
    if(value){return 'SUS';}
  }
  return (value)?value:'SUS';
}

function $3$fhrmdlsqnfrkdkffla(n){
  $3$dkffla('알림',n==1?'아이디와 비밀번호를 입력하세요.':(n==2)?'올바른 아이디 또는 비밀번호를 입력하세요.':'')
}
