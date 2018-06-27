angular.module('myApp')
.controller('HomeCtrl',['$scope','$location',function($scope,$location){
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.email = "";
  $scope.password = "";

  $scope.submit = function(){
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var reName = /^[a-zA-Z]/;

    if($scope.firstName!= '' && $scope.lastName!= '' && $scope.password!='' && $scope.email!=''){

    if(reName.test($scope.firstName) && reName.test($scope.lastName) && re.test($scope.password) && reEmail.test($scope.email)){
      $location.path("/views");
    }
    else{
      alert("Please provide the correct details");
    }
    }

    else{
      alert("Please provide the details");
    }
  };
}]);
