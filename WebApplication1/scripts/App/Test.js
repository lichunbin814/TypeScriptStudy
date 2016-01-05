define(["require", "exports"], function (require, exports) {
    //ç¶“é??ä??è¼¯ï¼Œå†³å®šè??¼å«ZipValidation
    var needZipValidation = true;
    if (needZipValidation) {
        require(['./ZipValidator'], function (x) {
            if (new x().isAcceptable('...')) { }
        });
    }
});
//# sourceMappingURL=test.js.map