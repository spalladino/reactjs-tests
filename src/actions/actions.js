class Actions {

  constructor (dispatcher) {
    this.dispatcher = dispatcher;
  }

  addPerson (item) {
    this.dispatcher.dispatch({
      actionType: 'ADD_PERSON',
      item: item
    });
  }
}

export default Actions;
