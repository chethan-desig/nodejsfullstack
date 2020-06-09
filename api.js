var express = require('express');
var app = express();
var port =  8900;


var menu = [
    {link:'/',name:'Home'},
    {link:'/restaurents',name:'Restaurents'},
    {link:'/city',name:'City'}
]
var restaurentRouter = require('./src/routes/restaurentRouter')(menu);
var cityRouter = require('./src/routes/cityRouter')(menu);


app.use(express.static(__dirname+'/public'))
app.set('views','./src/views')
app.set('view engine','ejs')

app.get('/',function(req,res){
    //res.send("Home")
    res.render('index',{menu:menu})
})

app.use('/restaurent',restaurentRouter);
app.use('/city',cityRouter)


app.listen(port,function(err){
    if(err) throw err;
    console.log("app is runing in port " +port)
})

