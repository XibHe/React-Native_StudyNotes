/* eslint-disable react/self-closing-comp */


import React, {
    Component
} from 'react'

import {
    View,
    FlatList,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

import {
    queryMovies,
    comingMovies
} from '../common/Service'

import MovieItemCell from '../widgets/MovieItemCell'

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
    loadText: {
        color: '#666666',
    }
})

export default class MovieListScreen extends Component {


    static navigationOptions = {
        headerTitle: '豆瓣电影'
    };

    constructor(props) {
        super(props);
        this.state = {
            movieList: [],  // 电影列表的数据源
            loaded: false   // 用来控制loading视图的显示，当数据加载完成，loading视图不再显示
        }
    }

    componentDidMount() {
        let routeName = this.props.navigation.state.routeName;
        if (routeName == 'First') {
            this.loadDisplayingMovies();
        } else {
            this.loadComingMovies();
        }
    }

    _renderItem = (item) => {
        return (
            <MovieItemCell movie={item.item} onPress={() => {
                console.log('点击了电影-----' + item.item.title);
            }} />
        )
    }

    render(){
        if (!this.state.loaded) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator animating={true} size='small' />
                    <Text style={styles.loadText}>努力加载中...</Text>
                </View>
            )
        }
        return(
          <FlatList
            data={this.state.movieList}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.id}
          />
        )
    }


    // 正在上映的电影列表，取20条数据显示
    loadDisplayingMovies() {
        fetch(queryMovies('北京', 0, 50)).then((Response) => Response.json()).then((json) => {
            console.log('上映电影列表' + json)
            var movies = []
            for (var idx in json.subjects) {
              var movieItem = json.subjects[idx]
              var directors = ""
              for (var index in movieItem.directors) {
                var director = movieItem.directors[index]
                if (directors == "") {
                  directors = directors + director.name
                } else {
                  directors = directors + " " + director.name
                }
              }
              movieItem["directorNames"] = directors
              
              var actors = ""
              for (var index in movieItem.casts) {
                var actor = movieItem.casts[index]
                if (actors == "") {
                  actors = actors + actor.name
                } else {
                  actors = actors + " " + actor.name
                }
              }
              movieItem["actorNames"] = actors
              movies.push(movieItem)
            }
            this.setState({
                movieList: movies,
                loaded: true
            })
          })
    }

    // 加载即将上映的电影列表，取20条数=数据显示
    loadComingMovies() {
        fetch(comingMovies('北京', 0, 20)).then((Response) => Response.json()).then((json) => {
            console.log(json)
            var movies = []
            for (var idx in json.subjects) {
              var movieItem = json.subjects[idx]
              var directors = ""
              for (var index in movieItem.directors) {
                var director = movieItem.directors[index]
                if (directors == "") {
                  directors = directors + director.name
                } else {
                  directors = directors + " " + director.name
                }
              }
              movieItem["directorNames"] = directors
              
              var actors = ""
              for (var index in movieItem.casts) {
                var actor = movieItem.casts[index]
                if (actors == "") {
                  actors = actors + actor.name
                } else {
                  actors = actors + " " + actor.name
                }
              }
              movieItem["actorNames"] = actors
              movies.push(movieItem)
            }
            this.setState({
                movieList: movies,
                loaded: true
            })
          }).catch((error) => {
              console.log('加载失败')
              this.setState({
                  loaded: true
              })
          }).done();

    }

}