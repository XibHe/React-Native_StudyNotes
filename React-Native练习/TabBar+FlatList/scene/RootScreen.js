/* eslint-disable react/jsx-space-before-closing */
/* eslint-disable no-unused-vars */



import React, {
    Component
} from 'react'

import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation'

import Color from '../common/Color'
import MovieListScreen from './MovieListScreen'
import TabBarItemComponent from '../widgets/TabBarItemComponent'


export default class RootScreen extends Component{

    render(){
        return (
          <Navigator/>
        )
    }
}

const Tab = TabNavigator(
    {
        First:{
            screen: MovieListScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '正在热映',
                tabBarIcon: ({focused, tintColor}) => (
                  <TabBarItemComponent 
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../image/playing.png')}
                    selectedImage={require('../image/playing-active.png')}
                  />
                )
            }),
        },

        Second: {
            screen: MovieListScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '即将上映',
                tabBarIcon: ({focused, tintColor}) => (
                  <TabBarItemComponent
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../image/coming.png')}
                    selectedImage={require('../image/coming-active.png')}
                  />
              )
            })
        }
    },

    {
        TabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: Color.themeColor,
            inactiveTintColor: '#888888',
            style: {backgroundColor: '#ffffff'}
        }
    }
)


const Navigator = StackNavigator (
    {
        Tab: {screen: Tab}
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#ffffff',
            headerStyle: {backgroundColor: Color.themeColor},
            showIcon: true
        }
    }
)