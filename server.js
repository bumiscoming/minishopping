const express = require('express');
const app = express();

app.listen(5000, function() {
    console.log('listening on 5000');
})

// 정적 경로 설정
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});