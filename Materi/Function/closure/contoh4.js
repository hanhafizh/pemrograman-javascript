const add = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());
  
  /* output
  1
  2
  3
   */