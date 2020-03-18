function MainController($scope){
    $scope.name = 'Tom';
    $scope.email = 'tom@t.com';
    $scope.phone = '555-1212'
}

angular
    .module('app')
    .controller('MainController', MainController)
