/**
 * @file
 */

;(function (undefined) {

var app = angular.module('app', []);

/**
 * Main controller.
 */
app.controller('BackgroundSizeCtrl', function ($scope) {

  $scope.backgroundSizes = [
    'cover',
    'contain',
    'auto',
    '100% auto',
    '50% auto',
    'auto 100%',
    'auto 50%',
    '100% 100%',
    '50% 50%',
    '100% 50%',
    '50% 100%'
  ];
  $scope.backgroundRepeat = ['no-repeat', 'repeat-x', 'repeat-y', 'repeat'];
  $scope.backgroundPosition = [
    'left top',
    'left center',
    'left bottom',
    'right top',
    'right center',
    'right bottom',
    'center top',
    'center center',
    'center bottom'
  ];

  $scope.styles = {
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center center'
  };

  $scope.height = 200;
  $scope.width = 100;
  $scope.image = 'http://lorempixel.com/900/500/nature';

  $scope.$watch('height', function (value) {
    $scope.styles.height = value + 'px';
  });

  $scope.$watch('width', function (value) {
    $scope.styles.width = value + '%';
  });

  $scope.$watch('image', function (value) {
    $scope.styles['background-image'] = 'url("' + value + '")';
  });
});
})();

