var app= angular.module("opportunityApp",[]);

app.controller("OpportunityCtrl", function($scope,$http) {
    
 $scope.opportunityListData=opportunityListData;
    
    // $http({
    //     method: 'GET',      
    //     url: 'https://reqres.in/api/users?page=2'            
    //     }).then(function success(response) {
    //     $scope.opportunityListData = response.data;     
    //     $scope.statusval = response.status;       
    //     $scope.statustext = response.statusText;      
    //     $scope.headers = response.headers();      
    //     }, function error(response) { 
    //         console.log("some thing happen on the server.");       
    //     });
});