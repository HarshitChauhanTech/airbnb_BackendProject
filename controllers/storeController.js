const Home = require('../models/home');




exports.getHomes =  (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
  res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'});
})
}


exports.getIndex =  (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
    res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Index'});
  })
}





exports.getBookings =   (req, res, next) => {
  res.render('store/bookings', {pageTitle: 'My Bookings', currentPage: 'bookings'});

}



exports.getFavouriteList =  (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes)=>{
  res.render('store/favourite-list', {registeredHomes: registeredHomes, pageTitle: 'My Favourites', currentPage: 'favourites'});
})
}

