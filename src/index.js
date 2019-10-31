import { config } from './modules/config'
import AppService from './modules/app.services'
import './modules/header.component'

console.log('Hello world!');

console.log('Config key: ', config.key);
const service = new AppService('Hello world!');
service.log();