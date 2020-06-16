var urlA="https://covid19.mathdro.id/api";
var app= angular.module("opportunityApp",[]);

app.controller("OpportunityCtrl", function($scope,$http) {
    
 //$scope.opportunityListData=opportunityListData;
    
    $http({
        method: 'GET',      
        url:  urlA           
        }).then(function success(response) {
        $scope.all_data = response.data;     
        $scope.statusval = response.status;       
        $scope.statustext = response.statusText;      
        $scope.headers = response.headers();      
        }, function error(response) { 
            console.log("some thing happen on the server.");       
        });
});
