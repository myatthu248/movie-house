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

     dismiss = () => {
         this.props.navigation.popToTop();
     }
    
    render(){
        return(<View>
            <ScrollView
                    style={styles.scrollView}>

                        {/* MARK: Hot Movie */}
                    <View style={{ height: 400, width: '100%'}}>
                        
                        <Image
                            style={{ width: '100%', height: '100%', alignSelf: "center", position: 'absolute', opacity: 0.1 }}
                            source={{ uri: this.state.movieCoverUrl }}
                            resizeMode = 'cover'
                        />

                        <SafeAreaView style={{ position: 'absolute', top: 15, right: 10}}>
                                <TouchableHighlight
                                    style={{
                                        width: 30,
                                        height: 30,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',}}
                                    onPress={this.dismiss}
                                >
                                    <Icon style={{textAlign:'center', color: 'white'}} name="close" size = {30}/>
                                    
                                    {/* <Icon name="add" /> */}
                                    {/* <Text> Touch Here </Text> */}

                                </TouchableHighlight>
                        </SafeAreaView>

                    <SafeAreaView style={{ width: '100%', height: '100%', flexDirection: 'column', position: 'absolute', marginTop: '20%' }}>
                        <Image
                            style={{ width: '35%', height: '55%', alignSelf: "center" }}
                            source={{ uri: this.state.movieCoverUrl }}
                            resizeMode='cover'
                        />

                        <View style={{ height: '5%', flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'green', marginTop: 5, marginRight: 10 }}> 98% match </Text>
                            <Text style={{ fontSize: 12, color: 'white', marginTop: 5 }}> 2019 </Text>
                            <Text style={{ fontSize: 12, color: 'white', marginTop: 5, marginLeft: 10 }}> 18+ </Text>
                            <Text style={{ fontSize: 12, color: 'white', marginTop: 5, marginLeft: 10 }}> 2h 8m </Text>
                        </View>

                        <TouchableHighlight
                            style={{
                                width: '98%',
                                height: 40,
                                alignSelf: 'center',
                                alignItems: 'center',
                                backgroundColor: 'red',
                                padding: 10,
                                margin: 10
                            }}
                            onPress={this.onPress}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon style={{ textAlign: 'center', color: 'white' }} name="play" size={22} />
                                <Text style={{ marginLeft: 5, marginTop: 3, color: 'white' }}> Play </Text>
                            </View>
                        </TouchableHighlight>

                        <Text style={{ fontSize: 13, marginLeft: 5, marginRight: 5, color: 'white', backgroundColor: 'black' }}>The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.</Text>
                        <Text style={{ fontSize: 11, marginTop: 5, marginLeft: 5, marginRight: 5, color: 'grey', backgroundColor: 'black' }}>Cast: Ryan Reynolds, Melanie Laurent, Corey Hawkins</Text>
                        <Text style={{ fontSize: 11, marginLeft: 5, marginRight: 5, color: 'grey', backgroundColor: 'black' }}>Director: Michael Bay</Text>


                        <View style={{ width: '75%', height: 40, alignSelf: 'center', marginTop: 10, backgroundColor: 'rgba(52, 52, 52, 0.1)' }}>
                            {/* <Text style={[styles.movieHeadTitleTextStyle, { alignSelf: "center", textAlign: "center", width: '50%' }]}> {this.state.hotMovieTitle}</Text> */}
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Icon style={{ textAlign: 'center', color: 'white' }} name="plus" size={20} />
                                        <Text style={{ fontSize: 10, color: 'grey', marginTop: 5 }}> My List </Text>
                                    </View>

                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Icon style={{ textAlign: 'center', color: 'white' }} name="thumbs-o-up" size={20} />
                                        <Text style={{ fontSize: 10, color: 'grey', marginTop: 5 }}> Rate </Text>
                                    </View>

                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Icon style={{ textAlign: 'center', color: 'white' }} name="location-arrow" size={20} />
                                        <Text style={{ fontSize: 10, color: 'grey', marginTop: 5 }}> Share </Text>
                                    </View>

                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Icon style={{ textAlign: 'center', color: 'white' }} name="download" size={20} />
                                        <Text style={{ fontSize: 10, color: 'grey', marginTop: 5 }}> Download </Text>
                                    </View>

                                </TouchableHighlight>
                            </View>
                        </View>

                        <View style={{ color: 'black'}}></View>

                    </SafeAreaView>
                    
                        
                        
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