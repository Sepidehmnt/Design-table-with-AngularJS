let app = angular.module("myApp", []);
app.controller("myCtrl", [
  "$scope",
  function ($scope) {
    let alphabets = [
      "آ",
      "ا",
      "ب",
      "پ",
      "ت",
      "ث",
      "ج",
      "چ",
      "ح",
      "خ",
      "د",
      "ذ",
      "ر",
      "ز",
      "ژ",
      "س",
      "ش",
      "ص",
      "ض",
      "ط",
      "ظ",
      "ع",
      "غ",
      "ف",
      "ق",
      "ک",
      "گ",
      "ل",
      "م",
      "ن",
      "و",
      "ه",
      "ی",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let friends = [
      { id: 15, firstName: "آناهیتا", city: "آمل" },
      { id: 8, firstName: "بیتا", city: "جهرم" },
      {
        id: 7,

        firstName: "تبسم",
        city: "طبس",
      },
      {
        id: 13,

        firstName: "جهان",
        city: "شیراز",
      },
      {
        id: 1,

        firstName: "چکامه",
        city: "کرمان",
      },
      {
        id: 2,

        firstName: "زینب",
        city: "یزد",
      },
      {
        id: 12,

        firstName: "درسا",
        city: "قزوین",
      },
      {
        id: 4,

        firstName: "پدرام",
        city: "گنبد",
      },
      {
        id: 3,

        firstName: "دانیال",
        city: "چالیدره",
      },
      {
        id: 9,

        firstName: "ژینا",
        city: "شاهرود",
      },
      {
        id: 11,

        firstName: "ژاله",
        city: "رشت",
      },
      {
        id: 6,

        firstName: "گندم",
        city: "بابل",
      },
      {
        id: 5,

        firstName: "یلدا",
        city: "تهران",
      },
      {
        id: 10,

        firstName: "ویدا",
        city: "گناباد",
      },
      {
        id: 14,

        firstName: "فاطمه",
        city: "پرند",
      },
    ];
    $scope.alphabets = alphabets;
    $scope.friends = friends;

    $scope.customSort = function () {
      let i = 0;
      $scope.i = i;
      return $scope.friends.sort(function (m1, m2) {
        if (alphabets.indexOf(m1[i]) == alphabets.indexOf(m2[i])) i++;

        if (alphabets.indexOf(m1[i]) < alphabets.indexOf(m2[i])) return -1;

        if (alphabets.indexOf(m1[i]) > alphabets.indexOf(m2[i])) return 1;

        return m1.firstName.localeCompare(m2.firstName);
      });
    };

    $scope.reverse = false;
    $scope.sortBy = function (propertyName) {
      $scope.reverse =
        $scope.propertyName === propertyName ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
  },
]);
