import express from 'express';

const app = express();
const admin = express();

app.use('/',express.static('public'));

app.get('/welcome',function(req,res){
  res.redirect('/');
})

app.get('/user/:id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});

app.listen(process.env.PORT || 3000);