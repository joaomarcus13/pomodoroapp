const obj = {
  fn: () => {
    console.log('fn');
    obj.fn2();
    return 'fn';
  },
  fn2: () => {
    console.log('fn2');
    return 'fn2';
  },
};

obj.fn();
