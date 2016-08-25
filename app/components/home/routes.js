const Routes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home/>'
        });
};

Routes.$inject = ['$stateProvider'];
export default Routes;
