declare var packageNames : Array<string> ;

require.config({
    packages: packageNames
})

require(packageNames);