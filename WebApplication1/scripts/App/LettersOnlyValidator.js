var Validataion;
(function (Validataion) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validataion.LettersOnlyValidator = LettersOnlyValidator;
})(Validataion || (Validataion = {}));
//# sourceMappingURL=LettersOnlyValidator.js.map