import React from 'react/addons';
import HelloComponent from '../../components/hello';

var mountNode = document.getElementById('app');
React.render(<HelloComponent name={"World"} />, mountNode);
