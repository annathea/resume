import MainController from './main.controller';
import { providerConfig } from './main.config';

import { routerConfig } from './main.route';

angular.module('annatheaCore',  ['ui.router', ])
.config(providerConfig)
.config(routerConfig)
.controller('annatheaCoreMainController', MainController);
