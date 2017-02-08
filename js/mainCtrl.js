angular.module('friendsList');

angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Russell', 'Thadeus', 'Cramer', 'Luis', 'Gabe'];

  //adding the addFriend key with the value of this function
  $scope.addFriend = function(name){
    $scope.friends.push(name);
  };
});
