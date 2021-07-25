// import
const path = require('path')

// 노드js환경에서 동작
//export
module.export = {
    //parcel index.html
    //entry: 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 봔환하는 설정
    output: {
        // 절대경로를 필요
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}