class HomeController {
    constructor($scope, homeService) {
        this.scope = $scope;
        this.title = 'Home Page';
        this.topic = undefined;
        this.subscribed = false;

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

            this.subscribed = true;
        }
    }

    unsubscribe() {
        this.homeService.unsubscribe(this.topic);

        this.subscribed = false;
    }
}

HomeController.$inject = ['$scope', 'homeService'];
export default HomeController;
