declare var require;
import Zip = require('./ZipValidator');
//經過某些邏輯，决定要呼叫ZipValidation
var needZipValidation = true;
if (needZipValidation) {
    require(['./ZipValidator'], (x: typeof Zip) => {    
        if (new x().isAcceptable('...')) { /* ... */ }
    });
}