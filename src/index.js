console.log('Hello world!');
import { config } from './modules/config';
import AppService from './modules/app.services'
console.log('Config key: ', config.key);
const service = new AppService('Hello world!');
service.log();