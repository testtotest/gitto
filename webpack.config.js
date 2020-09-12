const path=require('path');
module.exports = {
    entry: {
		reg:'./bdist/js/reg_.js',		
		},
    output: {
        path: path.resolve(__dirname,'bdist/js'),
        filename: '[name].js'
    },
    mode: 'development'  
}