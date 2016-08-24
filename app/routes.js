const routes = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/');
};

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default routes;
