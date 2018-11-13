/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
	Component
} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	PixelRatio, // 用来设置分割线
	View
} from 'react-native';

export default class ViewTest extends Component {
	render() {
		return (
			<View style={styles.flex}>
			<View style={styles.container}>

              <View style={[styles.item,styles.center]}>
                <Text style={styles.font}>测试</Text>
              </View>

              <View style={[styles.item,styles.lineLeftRight]}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试001</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试002</Text>
                 </View>
              </View>

              <View style={styles.item}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试003</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试004</Text>
                 </View>
              </View>
             </View>
     
            <View style={[styles.container,{backgroundColor:'green',marginTop:4}]}>
              <View style={[styles.item,styles.center]}>
                <Text style={styles.font}>测试1</Text>
              </View>
              <View style={[styles.item,styles.lineLeftRight,{borderRightWidth:0}]}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试001</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试002</Text>
                 </View>
              </View>
            </View>

            <View style={[styles.container,{backgroundColor:'orange',marginTop:4}]}> 
              <View style={[styles.item,{borderRightWidth:0}]}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试001</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试002</Text>
                 </View>
              </View>
              <View style={[styles.item,styles.lineLeftRight]}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试003</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试004</Text>
                 </View>
              </View>
              <View style={styles.item}>
                 <View style={[styles.center,styles.flex,styles.lineCenter]}>
                   <Text style={styles.font}>测试005</Text>
                 </View>
                 <View style={[styles.center,styles.flex]}>
                   <Text style={styles.font}>测试006</Text>
                 </View>
              </View>
            </View>

		    </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		marginLeft: 5,
		marginRight: 5,
		height: 84,
		flexDirection: 'row',
		borderRadius: 5,
		padding: 2,
		backgroundColor: '#FF0067',
	},
	item: {
		flex: 1,
		height: 80,

	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	flex: {
		flex: 1,
	},
	font: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	lineLeftRight: {
		borderLeftWidth: 1 / PixelRatio.get(),
		borderRightWidth: 1 / PixelRatio.get(),
		borderColor: '#fff',
	},
	lineCenter: {
		borderBottomWidth: 1 / PixelRatio.get(),
		borderColor: '#fff',
	},
});