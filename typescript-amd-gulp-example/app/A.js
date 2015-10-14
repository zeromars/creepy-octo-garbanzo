var A = (function () {
    function A() {
    }
    A.prototype.add = function (number1, number2) {
        return number1 + number2;
    };

    A.prototype.colorBG = function () {
        $("body").css({ "background-color": "black" });
    };
    return A;
})();

module.exports = A;
//# sourceMappingURL=A.js.map
