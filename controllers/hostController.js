const Home = require('../models/home')

exports.getAddHome= (req, res, next) => {
    res.render('host/addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
}

exports.getHostHomes =  (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
  res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'host Home list', currentPage: 'host-Homes'});
})
}



exports.postAddHome=  (req, res, next) => {
  //const home= new Home(req.body.houseName, req.body.price,req.body.location, req.body.rating, req.body.photoUrl)      another way
  
  const {houseName, price, location, rating,photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating,photoUrl);
  home.save()
  res.render('host/home-Added', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'})
}