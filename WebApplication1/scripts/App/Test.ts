/// <reference path="lettersonlyvalidator.ts" />
/// <reference path="validation.ts" />
/// <reference path="zipvalidator.ts" />
import validation = require("./Validation");
import zip = require("./ZipValidator");
import letters = require("./LettersOnlyValidator");

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: validation.StringValidator; } = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => { 
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});