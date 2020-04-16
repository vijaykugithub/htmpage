var app= angular.module("opportunityApp",[]);

app.controller("OpportunityCtrl", function($scope,$http) {
    
 //$scope.opportunityListData=opportunityListData;
    
    $http({
        method: 'GET',      
        url: 'https://hbsspadev.azurewebsites.net/api/Opportunity/GetCovidData'            
        }).then(function success(response) {
        $scope.covidData = response.data;     
        $scope.statusval = response.status;       
        $scope.statustext = response.statusText;      
        $scope.headers = response.headers();      
        }, function error(response) { 
            console.log("some thing happen on the server.");       
        });
});
