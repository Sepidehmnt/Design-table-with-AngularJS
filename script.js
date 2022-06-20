var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.names = [
    { name: "Sepideh", city: "Mashhad" },
    { name: "Zeinab", city: "Tehran" },
    { name: "Sara", city: "Mashhad" },
    { name: "Faranak", city: "Tehran" },
    { name: "Maryam", city: "Shiraz" },
    { name: "Ameneh", city: "Jovein" },
    { name: "Zahra", city: "Birjand" },
    { name: "Saeed", city: "Rasht" },
    { name: "Amir", city: "Ghazvin" },
    { name: "Yalda", city: "Hamedan" },
  ];
  $scope.orderByMe = function (x) {
    $scope.myOrderBy = x;
  };
});
