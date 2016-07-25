angular.module('clinicapp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "features/home/home.html",
          controller: 'homeCtrl'
        })

        .state('aboutdiabetes', {
          url: "/aboutdiabetes",
          templateUrl: "features/about/aboutdiabetes.html",
          controller: 'aboutdiabetesCtrl'
        })

        .state('services', {
          url: "/services",
          templateUrl: "features/services/services.html",
          controller: 'servicesCtrl'
        })

        .state('appointments', {
          url: "/appointments",
          templateUrl: "features/appointments/appointments.html",
          controller: 'appointmentsCtrl'
        })

        .state('contact', {
          url: "/contact",
          templateUrl: "features/contact/contact.html",
          contoller: 'contactCtrl'
        })

        .state('onlinepayment', {
          url: "/onlinepayment",
          templateUrl: "features/payments/onlinepayment.html",
          controller: 'onlinepaymentCtrl'
        })
  });
