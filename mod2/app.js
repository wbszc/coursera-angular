(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    var toBuyFoods = [
            { name: "cookies", number: 100 },
            { name: "chips", number: 10 },
            { name: "beers", number: 20 },
            { name: "burgers", number: 30 },
            { name: "pickles", number: 50 }
    ];

    var alreadyBoughtFood = [];

    function ShoppingListCheckOffService() {
        var service = this;

        service.buyFood = function(itemIndex) {
            var item = toBuyFoods[itemIndex];

            alreadyBoughtFood.push(item);
            toBuyFoods.splice(itemIndex, 1);
        };

        service.getToBuyFood = function() {
            return toBuyFoods;
        };

        service.getAlreadyBoughtFood = function() {
            return alreadyBoughtFood;
        };
    };

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyController = this;

        toBuyController.foods = ShoppingListCheckOffService.getToBuyFood();

        toBuyController.buyFood = function(itemIndex) {
            ShoppingListCheckOffService.buyFood(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtController = this;

        alreadyBoughtController.foods = ShoppingListCheckOffService.getAlreadyBoughtFood();
    }

})();
