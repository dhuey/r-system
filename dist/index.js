(() => {
  // src/basher/main.js
  var basher = {
    bash: () => {
      console.log("go bash");
    },
    stopBash: () => {
      console.log("stop bashing");
    }
  };

  // src/index.js
  console.log("hello world");
  var RSystem = {
    basher
  };
  window.RSystem = RSystem;
})();
