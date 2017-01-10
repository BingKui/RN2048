/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	View
} from 'react-native';

import demo from './src/main';
import Touch from './src/touchTest';
import TouchDemo from './src/touch/touchDmo';

export default class RN2048 extends Component {
	render() {
		return (
			<View />
		);
	}
}

AppRegistry.registerComponent('RN2048', () => demo);