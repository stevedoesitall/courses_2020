const FALLBACK_VALUE = 'User';
const FALLBACK_PHRASE = 'Hello';

const sayHello = (name) => console.log(`Hi ${name}`);

const sayHello2 = (phrase, name) => {
  console.log(`${phrase} ${name}`);
};

const sayHello3 = () => {
  const name = 'Steve 3';
  console.log(`Hi ${name}`);
};

const sayHello4 = (name) => {
  return 'Hi ' + name;
};

const sayHello5 = (name, phrase = FALLBACK_PHRASE) => {
  console.log(`${phrase} ${name}`);
};


const sayHello6 = (cb, ...strings) => {
  let hasEmptyString = false;
  for (const stringVal of strings) {
    if (!stringVal) {
      hasEmptyString = true;
      break;
    }
  }

  if (!hasEmptyString) {
    cb();
  }
};

const showAlert = () => {
  alert("No empty strings!");
};


sayHello('Steve 1');
sayHello2('Hi', 'Steve 2');
sayHello3();
console.log(sayHello4('Steve 4'));
sayHello5('Steve');
sayHello6(showAlert, 'a', 'b', 'c');