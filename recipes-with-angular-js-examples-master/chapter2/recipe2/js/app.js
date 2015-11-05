function MyCtrl($scope) {
  $scope.value = 5;

  $scope.incrementValue = function(value) {
    $scope.value += 1;
  };
}