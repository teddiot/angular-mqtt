import Controller from './controller';
import Template from './tmpl.html';

class HomeDirective {
    constructor() {
        this.template = Template;
        this.restrict = 'EA';
        this.scope = {};
        this.controller = Controller;
        this.controllerAs = 'vm';
        this.bindToController = true;
    }
}

HomeDirective.$inject = [];
export default HomeDirective;
