function init() {
    const name = 'Obi Wan';
  
    function greet() {
      console.log(`Halo, ${name}`);
    }
  
    return greet;
  }
  
  const myFunction = init();
  myFunction();
  
  /* output
  Halo, Obi Wan
   */