import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: AppCtrl
  }
};

const MODULE_NAME = 'app';
const AppCtrl = require('./app.controller.js');

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', ['$scope', '$http', AppCtrl]);

export default MODULE_NAME;
