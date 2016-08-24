import mqtt from 'mqtt';

class HomeController {
    constructor($scope, homeService) {
        this.scope = $scope;
        this.title = 'Home Page';
        this.homeService = new homeService.Home();

        this.topicMessages = [];

        let client = mqtt.connect('mqtt://broker.hivemq.com:8000');

        client.on('connect', function() {
            client.subscribe('FV/+');
        });

        client.on('message', (topic, message) => {
            // message is Buffer
            return this.handleMessage(topic, message);
            //client.end();
        });

        $scope.$on('$destroy', () => {
            console.log('You\'re destroying me!');
            client.end();
        });

    }

    handleMessage(topic, message) {
        console.log('topic: ', topic);

        let topicMessage = {
          topic: topic,
          message: JSON.parse(message.toString())
        };

        this.topicMessages.push(topicMessage);

        this.scope.$apply();
    }

    square() {
        this.homeService.square(this.firstNumber, this.secondNumber, this.printResult);
    }

    printResult(result) {
        console.log('printResult(result): ', result);
    }
}

HomeController.$inject = ['$scope', 'homeService'];

export default HomeController;
