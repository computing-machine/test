var app = angular.module("myApp", []);
//controllers
app.controller("myCtrl", function($scope) {
    $scope.data={
        "username":"Stock Manager",
        "tasks":{
            "Items":[["new"],["old"]],
            "Purchase order":[],
            "Recieve stock":[],
            "Stock count":[],
            "Stock adjustment":[],
            "Reports":[]
        }//tasks
    }//data
});