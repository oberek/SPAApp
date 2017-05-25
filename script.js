
(function() {

    var app = angular.module("howTo", []);
    var MainController = function($scope, $http) {

        $scope.username = "angular";
        $scope.howToTitle = "Lead An Effective Meeting";
        $http({

            url: 'list_of_how_tos.json',
            dataType: 'jsonp',
            method: 'GET',
            data: '',
            headers: {
                "Content-Type": "application/jsonp"
            }
        }).then(function(res){
            $scope.steps=res;
        });
    };

    app.controller("MainController", MainController);

}());
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBtn").style.color = "rgba(238,238,238,0)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openBtn").style.color = "rgba(238,238,238,1)";
}