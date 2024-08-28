function printName(name) {
  if (!name) {
    return console.log('No name!!');
  }
  return console.log('안녕하세요 ' + name + ' 님');
}

var customer = 'kiyori';
var customer = null;

printName();
printName(customer);
printName('kiyori');