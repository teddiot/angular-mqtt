class HomeController {
    constructor($scope, homeService) {
        this.scope = $scope;
        this.title = 'Home Page';
        this.topic = 'FV/+';

        this.homeService = new homeService.Home($scope);
        this.topicMessages = this.homeService.topicMessages;

        $scope.$on('$destroy', () => {
            console.log('You\'re destroying me!');
            this.homeService.unsubscribe(this.topic);
        });
    }

    subscribe() {
        if (this.topic) {
            this.homeService.subscribe(this.topic);
        }
    }

    unsubscribe() {
        this.homeService.unsubscribe(this.topic);
    }
}

HomeController.$inject = ['$scope', 'homeService'];
export default HomeController;
