function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}

function switchEx() {
  switch (condition) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    default:
      return 4;
  }
}

const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';

const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';

  return `안녕하세요 ${name}`;
};

const isAdult = age > 19 ? 'yes' : 'no';

function alertMessage(isAdult) {
  isAdult ? alert('입장이 가능합니다.') : alert('입장이 불가능합니다.');
}
