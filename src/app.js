import React from 'react/addons';
import Flux from 'flux';

import HelloComponent from './components/hello';
import PeopleList from './components/people-list';

import Store from './stores/store'
import Actions from './actions/actions'

var dispatcher = new Flux.Dispatcher();

var store = new Store(dispatcher);
var actions = new Actions(dispatcher, store);

var mountNode = document.getElementById('app');
React.render(<PeopleList store=store />, mountNode);
