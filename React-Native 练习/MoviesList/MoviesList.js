/*
 *  https://reactnative.cn/docs/sample-application-movies/ 的例子
 *  
 */


import React, {
	Component
} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	FlatList,
	View
} from 'react-native';

// 拉取的数据
var REQUEST_URL =
	"https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// 详情数组
var MOCKED_MOVIES_DATA = [{
	title: "标题",
	year: "2015",
	posters: {
		thumbnail: "http://i.imgur.com/UePbdph.jpg"
	}
}];


export default class App extends Component {


	constructor(props) {
		super(props);
		this.state = {
			// 这里放你自己定义的state变量及初始值
			//movies: null, 

			data: [],
			loaded: false,
		};
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
		// 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}


	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					// movies: responseData.movies,
					data: this.state.data.concat(responseData.movies),
					loaded: true,
				});
			});
	}

	// 加载第一张
	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		// var movie = MOCKED_MOVIES_DATA[0];
		// return this.renderMovie(movie);

		// 使用FlatList加载数据
		return (
			<FlatList
              data={this.state.data}
              renderItem={this.renderMovie}
              style={styles.list}
            />
		);
	}

	// 加载中
	renderLoadingView() {
		return (
			<View style={styles.container}>
              <Text>正在加载数据......</Text>
            </View>
		);
	}

	// 加载
	renderMovie({
		item
	}) {
		// { item }是一种“解构”写法，请阅读ES2015语法的相关文档
		// item也是FlatList中固定的参数名，请阅读FlatList的相关文档
		return (
			<View style={styles.container}>
			  <Image 
			    source={{uri: item.posters.thumbnail}} 
			    style={styles.thumbnail} 
			  />
              <View style={styles.rightContainer}>
			    <Text style={styles.title}>{item.title}</Text>
			    <Text style={styles.year}>{item.year}</Text>
              </View>
			</View>
		);
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#F5FCFF"
	},
	thumbnail: {
		width: 53,
		height: 81,
		//backgroundColor: 'red'
	},
	rightContainer: {
		flex: 1, // 去掉flex:1对比一下。你会发现去掉这一句后，容器会变成能容纳它孩子的最小大小。
		//backgroundColor: 'green'
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
	list: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},

	marTop14: {
		marginTop: 400,
		alignSelf: 'center',
	},

});