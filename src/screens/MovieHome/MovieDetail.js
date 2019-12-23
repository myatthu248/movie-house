import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
}
from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

class MovieDetail extends React.Component {

    constructor(props){
        super(props)   
        this.state = {
            movieCoverUrl: 'https://image.tmdb.org/t/p/original/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
            hotMovieTitle: '',
            previewMovies: null,
            upcomingMovies: null,
            trendingMovies: null
        }
     }
    
    render(){
        return(<View>
            <ScrollView
                    style={styles.scrollView}>

                        {/* MARK: Hot Movie */}
                    <View style={{ height: 400, width: '100%'}}>
                        
                        <Image
                            style={{ width: '100%', height: '100%', alignSelf: "center", position: 'absolute', opacity: 0.2 }}
                            source={{ uri: this.state.movieCoverUrl }}
                            resizeMode = 'cover'
                        />

                        <Image
                            style={{ width: '35%', height: '40%', alignSelf: "center", position: 'absolute', marginTop: '20%' }}
                            source={{ uri: this.state.movieCoverUrl }}
                            resizeMode = 'cover'
                        />

                        <SafeAreaView style={{ position: 'absolute', top: 15, right: 5, backgroundColor: 'rgba(52, 52, 52, 0.1)'}}>
                        <TouchableHighlight
                                    style={{
                                        width: 60,
                                        height: 60,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',}}
                                    onPress={this.onPress}
                                >
                                    <Icon style={{textAlign:'center', color: 'white'}} name="close" size = {30}/>
                                    
                                    {/* <Icon name="add" /> */}
                                    {/* <Text> Touch Here </Text> */}

                                </TouchableHighlight>
                        </SafeAreaView>

                        <View style={{width: '100%', height: '20%', position: 'absolute', bottom: 0, backgroundColor: 'rgba(52, 52, 52, 0.1)'}}>
                            {/* <Text style={[styles.movieHeadTitleTextStyle, { alignSelf: "center", textAlign: "center", width: '50%' }]}> {this.state.hotMovieTitle}</Text> */}
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

            </ScrollView>
        </View>)
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
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    });

export default MovieDetail;