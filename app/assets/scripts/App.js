//var $ = require('jquery');
//var Person = require('./Modules/Person');
/*import Person from './modules/Person';

class Adult extends Person{
    payTaxes(){
        console.log(this.name + ' now owes $0 in taxes.')
    }
}
var john = new Person('John Doe', 'red');
john.greet();
var jane = new Adult('Jane Smith','yellow');
jane.payTaxes();
$('h1').remove();*/

import $ from 'jquery';
import MagicalMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MagicalMenu();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();

