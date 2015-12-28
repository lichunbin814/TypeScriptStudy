/// <reference path="lettersonlyvalidator.ts" />
/// <reference path="validation.ts" />
/// <reference path="zipvalidator.ts" />
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new Validataion.ZipCodeValidator();
validators['Letters only'] = new Validataion.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//# sourceMappingURL=Test.js.map