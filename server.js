var app = require('express')(); 

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')
var sqlreqres = require('./api/introduce')
var preinterview = require('./api/preinterview')


app.use('/postsend', postsend); 
app.use('/getsend', getsend);
app.use('/introduce', sqlreqres);
app.use('/prointerview', preinterview);

app.set('port',8080)
app.post('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})