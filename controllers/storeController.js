const Home = require('../models/home');
const Favourite = require('../models/favourite')




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


exports.postAddToFavourite = (req,res,next)=>{
  console.log("came to add to favorite",req.body);
  res.redirect('/favorites')
}




exports.getBookings =   (req, res, next) => {
  res.render('store/bookings', {pageTitle: 'My Bookings', currentPage: 'bookings'});

}



exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      })
    });
  })

};



exports.postAddToFavourite = (req, res, next)=>{
  console.log("Came to add to Favourite", req.body)
  Favourite.addToFavourite(req.body.id, error=>{
    if(error){
      console.log("Error while marking favourite");
    } 
    res.redirect("/favourites")
  })
}



exports.getHomesDetails =  (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId,home =>{
    if(!home){
      console.log("home not found")
      res.redirect("/homes");
    }else{
      console.log("Home Details Found",home);
      res.render('store/home-detail', { home:home, pageTitle: 'Home-Detail', currentPage: 'Home'});
  
    }


  })
}