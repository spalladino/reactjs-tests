import {EventEmitter} from 'events';
import Immutable from 'immutable';

import dispatcher from '../dispatcher/dispatcher'
import _ from 'lodash';

class Store extends EventEmitter {

  constructor (state) {
    super();

    state = _.merge({}, Store.defaultState, state || {});

    dispatcher.register(this.handleChange);
    this.state = state;
    // _this.state = Immutable.fromJS(state);
  }

  getState () {
    console.log(`Getting state ${this.state}`);
    return this.state;
  }

  handleChange (action) {
    switch (action.actionType) {
      case 'ADD_PERSON':
        this.state.people.push(action.item);
        this.emit('CHANGE')
        break;
      default:
        true
    }
  }

}

// Default state
Store.defaultState = {
  people: ['Jedi', 'Gus', 'Juanb']
};

export default Store;
