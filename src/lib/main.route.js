export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider.state('annatheaCore', {
    url:'',
    controller: 'annatheaCoreMainController',
    controllerAs: 'annatheaCore',
    templateUrl: 'lib/core.html'
  })

  $urlRouterProvider.otherwise('/');
}
