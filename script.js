let app = angular.module("myApp", []);
app.controller("myCtrl", [
  "$scope",
  function ($scope) {
    $scope.names = [
      {
        id: 15,
        name: "آناهیتا",
        city: "آمل",
      },
      {
        id: 8,
        name: "بیتا",
        city: "جهرم",
      },
      {
        id: 7,
        name: "تبسم",
        city: "طبس",
      },
      {
        id: 13,
        name: "جهان",
        city: "شیراز",
      },
      {
        id: 1,
        name: "چکامه",
        city: "کرمان",
      },
      {
        id: 2,
        name: "زینب",
        city: "یزد",
      },
      {
        id: 12,
        name: "درسا",
        city: "قزوین",
      },
      {
        id: 4,
        name: "پدرام",
        city: "گنبد",
      },
      {
        id: 3,
        name: "دانیال",
        city: "چالیدره",
      },
      {
        id: 9,
        name: "ژینا",
        city: "شاهرود",
      },
      {
        id: 11,
        name: "ژاله",
        city: "رشت",
      },
      {
        id: 6,
        name: "گندم",
        city: "بابل",
      },
      {
        id: 5,
        name: "یلدا",
        city: "تهران",
      },
      {
        id: 10,
        name: "ویدا",
        city: "گناباد",
      },
      {
        id: 14,
        name: "فاطمه",
        city: "پرند",
      },
    ];
    $scope.reverse = true;
    $scope.column = "id";

    $scope.persianSort = function (column) {
      //First, check that the desired col is already clicked
      //If that col is already clicked, again you have to do a reverse sort but it's the first time, u always have to sort normally,I mean ascending sort
      $scope.reverse = column === $scope.column ? !$scope.reverse : false;
      $scope.column = column;

      return $scope.names.sort(function (m1, m2) {
        if (column === "id") {
          //for sorting id
          if (m1.id > m2.id && $scope.reverse) return -1;
          else if (m1.id > m2.id && !$scope.reverse) return 1;
          else if (m1.id < m2.id && $scope.reverse) return 1;
          else if (m1.id < m2.id && !$scope.reverse) return -1;
        } else {
          //for sorting name and city
          return $scope.reverse
            ? m2[column].localeCompare(m1[column])
            : m1[column].localeCompare(m2[column]);
        }
      });
    };

    //when the page is loaded for the first time, its sort is based on the ID by default
    $scope.persianSort("id");
  },
]);
