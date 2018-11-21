// OMDB API example: http://www.omdbapi.com/?apikey=BanMePlz&s=transformers
module.exports = function($scope, $http) {
  $scope.userName = 'John';

  $scope.sayHello = () => {
    alert('Hello there :)');
  }
};
