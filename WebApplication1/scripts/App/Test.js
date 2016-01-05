define(["require", "exports", "./ZipValidator", "./LettersOnlyValidator"], function (require, exports, zip, letters) {
    // Some samples to try
    var strings = ['Hello', '98052', '101'];
    // Validators to use
    var validators = {};
    validators['ZIP code'] = new zip();
    validators['Letters only'] = new letters();
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
    var polygons = Shapes.Polygons;
    var sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
});
//# sourceMappingURL=test.js.map