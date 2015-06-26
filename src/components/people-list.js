import React from 'react/addons';

class PeopleList extends React.Component {

  getInitialState() {
    this.store = props.store;
  }


  render() {
    return <ul>
      {_.map(this.state.people, (person) => {
        <li>{person}</li>
      })}
    </ul>;
  }

}

export default PeopleList;
