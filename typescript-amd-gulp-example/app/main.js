var A = require("./A");

var Main = (function () {
    function Main() {
        var sum = new A().add(2, 3);
        console.log(sum);
        new A().colorBG();
    }
    return Main;
})();

new Main();
//# sourceMappingURL=main.js.map
