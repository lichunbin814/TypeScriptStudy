define(["require", "exports"], function (require, exports) {
    //經�??��??�輯，决定�??�叫ZipValidation
    var needZipValidation = true;
    if (needZipValidation) {
        require(['./ZipValidator'], function (x) {
            if (new x().isAcceptable('...')) { }
        });
    }
});
//# sourceMappingURL=test.js.map