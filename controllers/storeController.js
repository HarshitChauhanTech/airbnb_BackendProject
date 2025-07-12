const Home = require('../models/home');




exports.getHomes =  (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
  res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'});
})
}


exports.getBookings =   (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
  res.render('store/bookings', {registeredHomes: registeredHomes, pageTitle: 'My Bookings', currentPage: 'bookings'});
})
}





