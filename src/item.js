'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Animated,
	Easing
} from 'react-native';

import Config from './config';

let _animate;
class item extends Component {
	constructor(props) {
		super(props);
		let _position = Config.returnPosition(this.props.x, this.props.y);
		this.state = {
			top: new Animated.Value(_position.top),
			left: new Animated.Value(_position.left),
			width: new Animated.Value(Config.itemWidth)
		};
	}
	animate = (to_x, to_y, dir) => {
		//dir  方向值，提供是x轴还是y轴方向。0：x，1：y
		let _position = Config.returnPosition(to_x, to_y);
		let {
			x,
			y
		} = this.props;
		let _static = Config.returnPosition(x, y);
		let _ = this;
		if (dir === 0) {
			Animated.sequence([
				Animated.timing(this.state.left, {
					toValue: _position.left, // 目标值
					duration: 30, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.timing(this.state.width, {
					toValue: 0, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.delay(31),
				Animated.timing(this.state.left, {
					toValue: _static.left, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.timing(this.state.width, {
					toValue: Config.itemWidth, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				})
			]).start();
		} else if (dir === 1) {
			Animated.sequence([
				Animated.timing(this.state.top, {
					toValue: _position.top, // 目标值
					duration: 30, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.timing(this.state.width, {
					toValue: 0, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.delay(31),
				Animated.timing(this.state.top, {
					toValue: _static.top, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.timing(this.state.width, {
					toValue: Config.itemWidth, // 目标值
					duration: 1, // 动画时间
					easing: Easing.linear // 缓动函数
				})
			]).start();
		}
	};
	render() {
		let {
			number,
			x,
			y
		} = this.props;
		return (
			<Animated.View style={[styles.item,{width: this.state.width,left:this.state.left,top:this.state.top}]}>
				<Text style={[styles.text,Config.returnStyles(number)]}>{number}</Text>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		position: 'absolute',
		width: Config.itemWidth,
		height: Config.itemWidth,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden'
	},
	text: {
		width: Config.itemWidth,
		height: Config.itemWidth,
		textAlign: 'center',
		textAlignVertical: 'center',
		borderRadius: Config.borderRadius,
		fontWeight: '700'
	}
});

export default item;