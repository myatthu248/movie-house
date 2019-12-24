import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    FlatList,
    TouchableHighlight,
}
from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CardView from 'react-native-cardview';

import Icon from 'react-native-vector-icons/FontAwesome';

import { GET_MOVIE_LIST, GET_TOP_RATED_MOVIE_LIST, GET_TRENDING_MOVIE_LIST } from '../../actions/movieActions';
import { connect } from 'react-redux';
import { flatMap } from 'rxjs/operators';

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

var RandomNumber = Math.floor(Math.random() * 20) + 1 ;

class MovieHome extends React.Component {

    constructor(props){
        super(props)   
        this.tirggerGetMovieList()
     }

     

    tirggerGetMovieList = () => {
        this.props.getMovieList("myatthu")
    }

    //Navigation
    gotoDetail = () => {
        this.props.navigation.navigate('Detail')
    }
    
    renderLoading(){
        return(
            <View>
                <Text>show loading</Text>
            </View>
        )
    }


    render(){
       return( <View style={{flex:1}}> 
            {this.props.isLoading && this.props.movieState!=null ? this.renderLoading() : this.showData()}
       </View>) 
    }

    showData(){

        console.log("movie list result " + JSON.stringify(this.props.movieState.movieList.results))

        console.log("top rated list " + JSON.stringify(this.props.movieState.topRatedMovieList))

       let hotMovieUrl = defaultImageUrl + this.props.movieState.topRatedMovieList.results[1].poster_path;
        let hotMovieTitle = this.props.movieState.topRatedMovieList.results[RandomNumber].title;
        let previewMovies = this.props.movieState.movieList.results;
        let topRatedMovies = this.props.movieState.topRatedMovieList.results;
       let trendingMovies = this.props.movieState.trendingMovieList.results;

        return(
            <>
                <ScrollView
                    style={styles.scrollView}>

                {/* MARK: Hot Movie */}
                    <View style={{ height: 600, width: '100%'}}>
                        
                        <Image
                            style={{ width: '100%', height: '100%', alignSelf: "center", position: 'absolute' }}
                            source={{ uri: hotMovieUrl }}
                            resizeMode = 'cover'
                        />

                        <SafeAreaView style={{flex:1, flexDirection: 'row', alignSelf:'center', position: 'absolute', top: 20, backgroundColor: 'rgba(52, 52, 52, 0.1)'}}>
                            <Text style= {{fontSize: 20, color: 'white', marginTop: 5, marginRight: 10}}> TV Shows </Text>
                            <Text style= {{fontSize: 20, color: 'white', marginTop: 5}}> Movies </Text>
                            <Text style= {{fontSize: 20, color: 'white', marginTop: 5, marginLeft: 10}}> My List </Text>
                        </SafeAreaView>

                        <View style={{width: '100%', height: '20%', position: 'absolute', bottom: 0, backgroundColor: 'rgba(52, 52, 52, 0.1)'}}>
                            {/* <Text style={[styles.movieHeadTitleTextStyle, { alignSelf: "center", textAlign: "center", width: '50%' }]}> {hotMovieTitle}</Text> */}
                            <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 60,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10}}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                        <Icon style={{textAlign:'center', color: 'white'}} name="plus" size = {30}/>
                                        <Text style= {{color: 'white', marginTop: 5}}> My List </Text>
                                    </View>
                                    
                                    {/* <Icon name="add" /> */}
                                    {/* <Text> Touch Here </Text> */}

                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '32%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                        <Icon style={{textAlign:'center'}} name="play" size = {22}/>
                                        <Text style= {{ marginLeft: 5, marginTop: 3}}> Play </Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 60,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.gotoDetail}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                        <Icon style={{textAlign:'center', color: 'white'}} name="info-circle" size = {30}/>
                                        <Text style= {{color: 'white', marginTop: 5}}> Info </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        
                        
                    </View>
                {/* MARK: Hot Movie End*/}

                {/* MARK: Previews */}
                    <View>
                        <Text style={[styles.movieSectionTitleTextStyle, { color: 'white', marginVertical: 10 }]}>Previews</Text>

                        <FlatList
                            data={previewMovies}
                            horizontal={true}
                            renderItem={({ item }) =>
                                <CardView
                                    cardElevation={2}
                                    cardMaxElevation={2}
                                    cornerRadius={10}
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginRight: 10,
                                        marginBottom: 10,
                                        width: 150
                                    }}>
                                   <Image
                                        style={{ width: 150, height: 150, margin: 10, alignSelf: "center", borderRadius: 150/2 }}
                                        source={{ uri: defaultImageUrl + item.poster_path }}
                                        resizeMode= 'center'
                                    />
                                </CardView>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                {/* MARK: Previews End*/}

                {/* MARK: Top Rated Movie */}
                    <View>
                        <Text style={[styles.movieSectionTitleTextStyle, { color: 'white', marginVertical: 10 }]}>Upcoming Movies</Text>

                        <FlatList
                            data={topRatedMovies}
                            horizontal={true}
                            renderItem={({ item }) =>
                                <CardView
                                    cardElevation={2}
                                    cardMaxElevation={2}
                                    cornerRadius={10}
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginRight: 10,
                                        marginBottom: 10,
                                        width: 150,
                                        height: 250
                                    }}>
                                   <Image
                                        style={{ width: '100%', height: '100%', margin: 10, alignSelf: "center" }}
                                        source={{ uri: defaultImageUrl + item.poster_path }}
                                        resizeMode='cover'
                                    />
                                </CardView>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                {/* MARK: Top Rated Movie End*/}

                {/* MARK: Trending Movie */}
                    <View>
                        <Text style={[styles.movieSectionTitleTextStyle, { color: 'white', marginVertical: 10 }]}>Trending Now</Text>

                        <FlatList
                            data={trendingMovies}
                            horizontal={true}
                            renderItem={({ item }) =>
                                <CardView
                                    cardElevation={2}
                                    cardMaxElevation={2}
                                    cornerRadius={10}
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        marginRight: 10,
                                        marginBottom: 10,
                                        width: 150,
                                        height: 250
                                    }}>
                                   <Image
                                        style={{ width: '100%', height: '100%', margin: 10, alignSelf: "center" }}
                                        source={{ uri: defaultImageUrl + item.poster_path }}
                                        resizeMode='cover'
                                    />
                                </CardView>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                {/* MARK: Trending Movie End*/}

                
                    
                </ScrollView>
            </>
            )
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent : 'center',
      alignItems : 'center'
    },
    scrollView: {
        height: '100%',
        backgroundColor: Colors.black,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.black,
    },
    sectionContainer: {
        margin: 32,
        paddingHorizontal: 24,
        paddingVertical: 10,
        backgroundColor: '#5DBCD2'
    },
    navBarTextStyle: {
        fontSize: 20,
        fontWeight: '600'
    },
    movieHeadTitleTextStyle: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.white,
        textAlign: "center"
    },
    movieSectionTitleTextStyle: {
        fontSize: 18,
        fontWeight: '600'
    },
    normalTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.white
    },
    normalBlackTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.black
    },
    titleTextStyle: {
        fontSize: 35,
        fontWeight: '600',
        color: Colors.white,
        textAlign: "center"
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    });

const mapStateToProps = (props) => {
    return {
        movieState: props.movieState,
        isLoading: props.movieState.isLoading
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getMovieList: (userName) => {
            dispatch({ type: GET_MOVIE_LIST, userName: userName })
            // dispatch({ type: GET_TOP_RATED_MOVIE_LIST, userName: userName })
            // dispatch({ type: GET_TRENDING_MOVIE_LIST })
        }
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(MovieHome);
// export default MovieHome;