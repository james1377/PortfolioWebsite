/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap'
]).run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/demos", {templateUrl: "partials/demos.html", controller: "PageCtrl"})
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
    //.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    //.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    
    // Blog
    //.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    //.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls the Home Page
 */
app.controller('HomeCtrl', ['$anchorScroll', '$location', '$scope',
  function ($anchorScroll, $location, $scope) {
    console.log("Home Controller reporting for duty.");
  
    $scope.gotoAnchor = function (x) {
      console.log("Home gotoAnchor " + x);
     
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        $location.hash('anchor' + x);
      } else {
        $anchorScroll();
      }
    };

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({ selector: "a[data-toggle=tooltip]" })

  }
]);
    




/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/*$scope, $location,$http*/) {
    console.log("Page Controller reporting for duty.");
    
 
    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({ selector: "a[data-toggle=tooltip]" })
  
  }
);

//This is to make available the templates like header.html and footer.html
app.controller('templatesController', ['$scope', function ($scope) {
  $scope.templates = [{
    name: 'templateheader',
    url: 'templates/header.html'
  }, {
    name: 'templatefooter',
    url: 'templates/footer.html'
  }];
  $scope.templateHdr = $scope.templates[0];
  $scope.templateFtr = $scope.templates[1];
}])

//Carousel Controller
app.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    //To add my own slides I would push them in here with individual image ref and text
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

})