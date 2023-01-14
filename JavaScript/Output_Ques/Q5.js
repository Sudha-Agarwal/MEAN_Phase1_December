(function immediateA(a) {
    return (function immediateB(b) {
      console.log(a); // What is logged?
    })(1);
  })(0);