let app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.names = [
    { id: 7, name: "Sepideh", city: "Mashhad" },
    { id: 10, name: "Zeinab", city: "Tehran" },
    { id: 6, name: "Sara", city: "Mashhad" },
    { id: 3, name: "Faranak", city: "Tehran" },
    { id: 9, name: "Maryam", city: "Shiraz" },
    { id: 2, name: "Ameneh", city: "Jovein" },
    { id: 1, name: "Zahra", city: "Birjand" },
    { id: 4, name: "Saeed", city: "Rasht" },
    { id: 8, name: "Amir", city: "Ghazvin" },
    { id: 5, name: "Yalda", city: "Hamedan" },
  ];
  $scope.reverse = false;
  $scope.orderByMe = function (x) {
    if ($scope.myOrderBy == x) {
      $scope.reverse = !$scope.reverse;
    }
    $scope.myOrderBy = x;
  };
});
