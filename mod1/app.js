(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.items = '';
      $scope.message = '';
      $scope.checkGood = false;
      $scope.empty = false;
      $scope.emptyMsg = "Please enter data first";

      $scope.checkLunch = function() {

          if ($scope.items && $scope.items.length > 0) {
             $scope.checkGood = true;
             $scope.empty = false;
             var itemsArray = $scope.items.split(',');

             if (itemsArray.length <= 3) {
                $scope.message = 'Enjoy!';
              } else {
                $scope.message = 'Too much!';
              }

          } else {
            $scope.checkGood = false;
            $scope.empty = true;
          }
      };
    }
})();
