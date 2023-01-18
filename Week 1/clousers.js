
function parent() {
    const message = "Hey! How Are you?";
    function child() {
      alert(message);
    }
    child();
  }
  parent();
  
  const childFN = parent();
  childFN();