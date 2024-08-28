console.log(true && true && 'Hello World!');

console.log(false && true && 'Hello World!');

console.log(false || false || 'Hello World!');

console.log(true || true || 'Hello World!');

const data = 'data';
const nulldata = null;

function ferchData(data) {
  //   if (data) {
  //     return data;
  //   } else {
  //     return 'fetch...';
  //   }

  //   return data ? data : 'fetch...';
  return data || 'fetch...';
}

console.log(ferchData(data));
console.log(ferchData(nulldata));

function loveDog(dog) {
  //   let lovingDog;
  //   if (dog) {
  //     lovingDog = dog;
  //   } else {
  //     lovingDog = 'cat';
  //   }
  //   return 'My ' + lovingDog;
  return 'My ' + (dog || 'cat');
}

console.log(loveDog());
console.log(loveDog('puppy'));

function getUserName(user, isLogin) {
  //   if (isLogin) {
  //     if (user) {
  //       if (user.name) {
  //         return user.name;
  //       } else {
  //         return 'Nobody';
  //       }
  //     }
  //   }

  //   if (isLogin && user) {
  //     if (user.name) {
  //       return user.name;
  //     } else {
  //       return 'Nobody';
  //     }
  //   }

  if (isLogin && user) {
    return user.name || 'Nobody';
  }
}

console.log(getUserName());
console.log(getUserName({ name: 'kiyori' }, true));
console.log(getUserName({ name: 'kiyori' }, false));
console.log(getUserName({ age: 15 }, true));
