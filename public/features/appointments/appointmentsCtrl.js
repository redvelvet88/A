angular.module('clinicapp').controller('appointmentsCtrl', function($scope, $timeout) {
  $scope.test = "Abbey"
  $scope.loading = true;

  function hidespinner() {
    $scope.loading = false;

    console.log($scope.loading);
  }

  $timeout(hidespinner, 3000);
});
