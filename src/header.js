'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Animated,
	Easing
} from 'react-native';

import Button from './Button';
import Config from './config';

const _width = Dimensions.get('window').width;

class header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			addNum: 10,
			right: 0,
			opacity: 0,
			falg: true
		};
	}
	onPress = (callback) => {
		this.setState({
			score: 100,
			addNum: 30
		});
		//this.addNumAniamte();
		callback();
	}
	addScore = (num) => {
		let _socre = this.state.score;
		_socre += num;
		this.setState({
			score: _socre
		});
	};
	//获取当前的得分
	getScore = () => {
		//alert(this.state.score);
		return this.state.score;
	}
	addNumAniamte = () => {
		//定义动画
		let _animate = Animated.sequence([
			Animated.parallel([
				Animated.timing(this.state.right, {
					toValue: 50, // 目标值
					duration: 100, // 动画时间
					easing: Easing.linear // 缓动函数
				}),
				Animated.timing(this.state.opacity, {
					toValue: 1, // 目标值
					duration: 30, // 动画时间
					easing: Easing.linear // 缓动函数
				})
			]),
			Animated.timing(this.state.opacity, {
				toValue: 0, // 目标值
				duration: 1, // 动画时间
				easing: Easing.linear // 缓动函数
			}),
			Animated.delay(1),
			Animated.timing(this.state.right, {
				toValue: 0, // 目标值
				duration: 1, // 动画时间
				easing: Easing.linear // 缓动函数
			})
		]);
		//防止动画多次重叠
		if (this.state.falg) {
			_animate.start();
		} else {
			alert('slow');
		}

	};
	render() {
		return (
			<View style={styles.header}>
				<View style={styles.name}>
					<Text style={styles.nameStr}>2048</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.leftConetent}>
						<View style={styles.scoreText}>
							<Text>Score：{this.state.score}</Text>
						</View>
						<Animated.View style={[styles.addItem,{right:this.state.right,opacity:this.state.opacity}]}>
							<Text style={styles.text}>+{this.state.addNum}</Text>
						</Animated.View>
					</View>
					<View style={styles.rightConetent}>
						<Button onPress = {this.onPress} btnText = "New Game" size='small' bgcolor={Config.containerBgColor}/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		width: _width
	},
	name: {
		width: _width,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center'
	},
	nameStr: {
		fontSize: 0.63 * Config.itemWidth
	},
	content: {
		width: _width,
		justifyContent: 'center',
		flexDirection: 'row'
	},
	leftConetent: {
		width: _width / 2 - Config.itemPadding,
		height: 45,
		flexDirection: 'row',
		marginLeft: Config.itemPadding
	},
	scoreText: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: 45
	},
	addItem: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: 45,
		position: 'absolute'
	},
	text: {
		color: 'red'
	},
	rightConetent: {
		height: 45,
		width: _width / 2 - Config.itemPadding,
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginRight: Config.itemPadding - 5
	}
});


export default header;