const Home = require('../models/home')

exports.getAddHome= (req, res, next) => {
    res.render('host/edit-home', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome', editing: false});
}

exports.getEditHome= (req, res, next) => {
  const homeId  = req.params.homeId
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home =>{
    if(!home){
      console.log("Home not found for editing.")
      return res.redirect("/host/host-home-list")
    }
    console.log(homeId, editing,home)
    res.render('host/edit-home', {pageTitle: 'Edit Your Home', currentPage: 'host-homes', editing: editing, home:home});

  })

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
  res.redirect("host/host-home-list")
}


exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log('Error while deleting ', error);
    }
    res.redirect("/host/host-home-list");
  })
};