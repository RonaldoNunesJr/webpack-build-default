//import _ from 'lodash';
import './css/style.scss';
import Variant from './js/variant.js';
import Services from './js/services/Services';

const loadSite = 'body';

Services.waitForElement(
	loadSite
).then(() => {
	Variant();
});