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

OrderIn.create({});

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
  });

});

Thing.find({}).remove(function() {
  Thing.create({
    currentUser : 'Mike',
    message : 'Development Tools',
    timeSent: '2014-09-19T14:06:41.513Z',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    dinnerType: 'Eat Out',
    eatOutDetails: {
      restName: 'Great restaurant', 
      restAddress: '123 Main St Nowhere, NJ 09321', 
      restPhone: '212-333-1111', 
      restWeb: 'dddd.com',
      likes: 0}
 }, {
    currentUser : 'Jack',
    timeSent: '2014-09-19T14:05:46.513Z',
    message : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    currentUser : 'David',
    timeSent: '2014-09-19T14:07:44.513Z',
    message : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    currentUser : 'Nimit',
    message : 'Modular Structure',
    timeSent: '2014-09-19T14:11:48.513Z',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    currentUser : 'Charlotte',
    message : 'Optimized Build',
    timeSent: '2014-09-19T11:30:49.513Z',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    currentUser : 'Steve',
    message : 'Deployment Ready',
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