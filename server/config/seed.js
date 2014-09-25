/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Dinner = require('../api/dinner/dinner.model');
var CookAtHome = require('../api/cookathome/cookathome.model');
var EatOut = require('../api/eatout/eatout.model');
var OrderIn = require('../api/orderin/orderin.model');





OrderIn.find({}).remove(function(){
  OrderIn.create(
    {
    nameOfPlace: 'Ninety Acres',
    addressOfPlace: '2 Main St Far Hills, NJ 07931',
    phoneOfPlace: '(908) 901-9500',
    website: 'ninetyacres.com'
  },{
    nameOfPlace: 'Twofiftytwo',
    addressOfPlace: '252 Somerville Rd Bedminster, NJ 07921',
    phoneOfPlace: '(908) 234-9093',
    website: 'twofiftytworestaurant.com'
  },{
    nameOfPlace: 'Trattoria Mediterranea',
    addressOfPlace: '2472 Lamington Rd Bedminster, NJ 07921',
    phoneOfPlace: '(908) 781-7131',
    website: 'trattoriamediterranea.com/indexR.htm'
  },{
    nameOfPlace: 'Bernards Cafe',
    addressOfPlace: '8 Mine Brook Rd Bernardsville, NJ 07924',
    phoneOfPlace: '(908) 221-0222',
    website: 'bernardscafe.com'
  },{
    nameOfPlace: 'Gladstone Tavern',
    addressOfPlace: '273 Main St Gladstone, NJ 07934',
    phoneOfPlace: '(908) 234-9055',
    website: 'gladstonetavern.com'
  },{
    nameOfPlace: 'Sublime',
    addressOfPlace: '12 Lackawanna St Gladstone, NJ 07934',
    phoneOfPlace: '(908) 781-1888',
    website: 'sublimenj.com'
  },
  {
    nameOfPlace: 'Bedminster Pizza',
    addressOfPlace: '2480 Lamington Rd Bedminster, NJ 07921',
    phoneOfPlace: '(908) 781-9391',
    website: ''
  },
  {
    nameOfPlace: 'Rocco’s Pizza & Restaurant',
    addressOfPlace: '466 US Hwy 202 Bedminster, NJ 07921',
    phoneOfPlace: '(908) 781-2300',
    website: 'roccospizzanj.com'
  },
  {
    nameOfPlace: 'Chester Hills Diner',
    addressOfPlace: '65 US Hwy 206 S Chester, NJ 07930',
    phoneOfPlace: '(908) 879-7423',
    website: ''
  },
  {
    nameOfPlace: 'The Cheesecake Factory',
    addressOfPlace: '400 Commons Way Suite 270 Bridgewater, NJ 08807',
    phoneOfPlace: '(908) 252-0399',
    website: 'thecheesecakefactory.com'
  },
  {
    nameOfPlace: 'Oldwick General Store',
    addressOfPlace: '57 Main St Oldwick, NJ 08804‎',
    phoneOfPlace: '(908) 439-2642',
    website: ''
  },
   {
    nameOfPlace: 'Delicious Heights',
    addressOfPlace: '285 US 202 Bedminster, NJ 07921',
    phoneOfPlace: '(908) 234-1596',
    website: 'deliciousheights.com'
  },
  {
    nameOfPlace: 'Chu’s Cafe',
    addressOfPlace: '576 Allen Rd Basking Ridge, NJ 07920',
    phoneOfPlace: '(908) 901-0808',
    website: 'chuscafe.com'
  }
  );

});


CookAtHome.find({}).remove(function(){
  CookAtHome.create(
  {
    nameOfDish: 'Pot roast'
  },
  {
    nameOfDish: 'Curry'
  },
  {
    nameOfDish: 'すき焼き'
  },
  {
    nameOfDish: 'うどん'
  },
  {
    nameOfDish: 'Pasta'
  });


});

EatOut.find({}).remove(function(){
  EatOut.create({
    nameOfPlace: 'Ninety Acres',
    addressOfPlace: '2 Main St Far Hills, NJ 07931',
    phoneOfPlace: '(908) 901-9500',
    website: 'ninetyacres.com'
  },{
    nameOfPlace: 'Twofiftytwo',
    addressOfPlace: '252 Somerville Rd Bedminster, NJ 07921',
    phoneOfPlace: '(908) 234-9093',
    website: 'twofiftytworestaurant.com'
  },{
    nameOfPlace: 'Trattoria Mediterranea',
    addressOfPlace: '2472 Lamington Rd Bedminster, NJ 07921',
    phoneOfPlace: '(908) 781-7131',
    website: 'trattoriamediterranea.com/indexR.htm'
  },{
    nameOfPlace: 'Bernards Cafe',
    addressOfPlace: '8 Mine Brook Rd Bernardsville, NJ 07924',
    phoneOfPlace: '(908) 221-0222',
    website: 'bernardscafe.com'
  },{
    nameOfPlace: 'Gladstone Tavern',
    addressOfPlace: '273 Main St Gladstone, NJ 07934',
    phoneOfPlace: '(908) 234-9055',
    website: 'gladstonetavern.com'
  },{
    nameOfPlace: 'Sublime',
    addressOfPlace: '12 Lackawanna St Gladstone, NJ 07934',
    phoneOfPlace: '(908) 781-1888',
    website: 'sublimenj.com'
  },
  {
    nameOfPlace: 'Cafe Azzurro',
    addressOfPlace: '141 Main St Peapack, NJ 07934',
    phoneOfPlace: '(908) 470-1470',
    website: 'cafeazzurronj.com'
  },
  {
    nameOfPlace: 'Sushi Azabu',
    addressOfPlace: '428 Greenwich St New York, NY 10013',
    phoneOfPlace: '(212) 274-0428',
    website: 'darumaya-nyc.com/sushiazab'
  },
  {
    nameOfPlace: 'Shanghai Jazz',
    addressOfPlace: '24 Main St Madison, NJ 07940',
    phoneOfPlace: '(973) 822-2899',
    website: 'shanghaijazz.com'
  },
  {
    nameOfPlace: 'Carmine’s',
    addressOfPlace: '200 W 44th St New York, NY 10036',
    phoneOfPlace: '(212) 221-3800',
    website: 'carminesnyc.com'
  },
  {
    nameOfPlace: 'Mehndi',
    addressOfPlace: '88 Headquarters Plz 3 Speedwell Ave Morristown, NJ 07960',
    phoneOfPlace: '(973) 871-2323',
    website: 'mehtanirestaurantgroup.com'
  },
  {
    nameOfPlace: 'Buffalo Wild Wings',
    addressOfPlace: '970 US-22 Bridgewater, NJ 08807',
    phoneOfPlace: '(908) 704-9300',
    website: 'buffalowildwings.com'
  },
  {
    nameOfPlace: 'Outback Steakhouse',
    addressOfPlace: '98 US Hwy 22 W Green Brook, NJ 08812',
    phoneOfPlace: '(732) 424-0555',
    website: 'outback.com/'
  },
  {
    nameOfPlace: 'Raritan Yacht Club',
    addressOfPlace: '160 Water St Perth Amboy, NJ 08861',
    phoneOfPlace: '(732) 826-2277',
    website: 'http://www.ryc.org/'
  },
  {
    nameOfPlace: 'Mad for Chicken',
    addressOfPlace: '314 5th Ave 2nd Fl New York, NY 10001',
    phoneOfPlace: '(212) 714-9700',
    website: 'turntablenyc.com'
  },
  {
    nameOfPlace: 'Del Frisco’s Double Eagle Steak House',
    addressOfPlace: '1221 Avenue of the Americas New York, NY 10020',
    phoneOfPlace: '(212) 575-5129',
    website: 'delfriscos.com/steakhouse/new-york/'
  });

});

Thing.find({}).remove(function() {
  Thing.create({
    currentUser : 'Mike',
    message : 'Me too!',
    timeSent: '2014-09-19T14:06:41.513Z'
 }, {
    currentUser : 'Jack',
    timeSent: '2014-09-19T14:05:46.513Z',
    message : 'I\'m hungry already!!',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    currentUser : 'David',
    timeSent: '2014-09-19T14:07:44.513Z',
    message : 'I think I\'m just going to get smth on my own:)',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    currentUser : 'Nimit',
    message : 'Didn\'t we get Mad for chicken last week?'  ,
    timeSent: '2014-09-19T14:11:48.513Z',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    currentUser : 'Charlotte',
    message : 'So what\'s for dinner?',
    timeSent: '2014-09-19T11:30:49.513Z',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    currentUser : 'Steve',
    message : 'Anyone interested in going to Mad for chicken?',
    timeSent: '2014-09-19T14:10:41.513Z',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});