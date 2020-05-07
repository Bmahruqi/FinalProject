exports.api = {};

var testData=require('./testdata');

 


exports.home = (req, res) => {


  if (req.session.pageViews){
    req.session.pageViews++
    }
   else{
  req.session.pageViews = 1;
  }

    if (req.signedCookies.tracking) {
      var dateLastVisit = req.signedCookies.tracking;
      var message = "welcome back you last visited on :" + dateLastVisit;
    }
    else{
      message = ""
    }
    var currentDate = new Date();
    console.log (currentDate);
    res.cookie('tracking',currentDate.toUTCString(), {signed : true});
    res.render('homepage', {'message' : message,
    'numbervisits' : req.session.pageViews})
} 
  

exports.contact=(req,res) => res.render('Contact')
exports.login=(req,res) => res.render('login')

exports.Resgister=(req,res) => res.render('formRegister')
exports.getregister=(req,res) => res.render('formRegister')
exports.book=(req,res) => res.render('book')
exports.getBook=(req,res) => res.render('book')
//exports.services=(req,res) => res.render('services')


exports.postregister=(req,res) =>
{ 
   console.log('form submitted :' + req.body.Name);
   console.log('form submitted :' + req.body.DOB);
   console.log('form submitted :' + req.body.PhoneNumber);
   console.log('form submitted :' + req.body.email);
   console.log('form submitted :' + req.body.Password);

req.session.formResults = {"Name": req.body.Name,
"DOB": req.body.DOB,"email": req.body.email,
"PhoneNumber": req.body.PhoneNumber,"Password": req.body.Password}

res.redirect('/formResults');

}

exports.postBook=(req,res) =>
{
 
  console.log('form submitted :' + req.body.Date);
  console.log('form submitted :' + req.body.time);

req.session.BookResults = {"Date": req.body.Date,
"Time": req.body.time}

res.redirect('/BookResults');

}




exports.formResults = (req, res) => 
res.render('formResults',{form: req.session.formResults})


exports.BookResults = (req, res) => 
res.render('BookResults',{form: req.session.BookResults})



exports.services = (req, res) => 
{
  res.render('services', {data: testData.getServiceData()});
}

exports.Details = function(req, res){
  ServiceData = testData.getServiceData();
  Service = ServiceData[req.params.Serviceid];
  //console.log (currentMovie);
  res.render('Details', {'data' : Service});
}


exports.notFound = (req, res) => res.render('404');
exports.serverError = (err,req,res,next) => res.render('500');

