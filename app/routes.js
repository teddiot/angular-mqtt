const Routes = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/');
};

Routes.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
export default Routes;
