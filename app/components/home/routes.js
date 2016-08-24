const routes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home/>'
        });
};

routes.$inject = ['$stateProvider'];

export default routes;
