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
    TouchableHighlight
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

// import Icon from 'react-native-ionicons';

import { GET_MOVIE_LIST, GET_TOP_RATED_MOVIE_LIST } from '../../actions/movieActions';
import { connect } from 'react-redux';
import { flatMap } from 'rxjs/operators';

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

class MovieHome extends React.Component {

    constructor(props){
        super(props)   
        this.state = {
            hotMovieUrl: '',
            hotMovieTitle: ''
        }
     }

     componentDidMount() {
         console.log("componentDidMount")
         this.setState({
             hotMovieUrl: defaultImageUrl + this.props.movieState.topRatedMovieList.results[1].poster_path,
             hotMovieTitle: this.props.movieState.topRatedMovieList.results[1].title,
         })
     }

     componentWillMount(){
        console.log("Hello 123 constructor");
        this.tirggerGetMovieList()
    }

    tirggerGetMovieList = () => {
        this.props.getMovieList("myatthu")
    }
    
    render(){
        // console.log(this.props.movieState.movieList.results[0]);
        // console.log(this.props.movieState.topRatedMovieList.results[0].title);
        // console.log(defaultImageUrl + this.props.movieState.topRatedMovieList.results[0].poster_path)
        return(
            <>
                <ScrollView
                    style={styles.scrollView}>
                    <View style={{ height: '180%', width: '100%'}}>
                        <Image
                            style={{ width: '100%', height: '100%', alignSelf: "center", position: 'absolute' }}
                            source={{ uri: this.state.hotMovieUrl }}
                            resizeMode='cover'
                        />
                        <View style={{width: '100%', height: '20%', position: 'absolute', bottom: 0}}>
                            {/* <Text style={[styles.movieHeadTitleTextStyle, { alignSelf: "center", textAlign: "center", width: '50%' }]}> {this.state.hotMovieTitle}</Text> */}
                            <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        margin: 10}}
                                    onPress={this.onPress}
                                >
                                    {/* <Icon name="add" /> */}
                                    <Text> Touch Here </Text>

                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <Text> Touch Here </Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{
                                        width: '25%',
                                        height: 40,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={this.onPress}
                                >
                                    <Text> Touch Here </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        
                        
                    </View>

                    <View style={styles.body}>

                        <Text style={[styles.normalBlackTextStyle, { textAlign: "center", marginVertical: 10 }]}>Focus 5days weather</Text>

                        <FlatList
                            data={DATA}
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
                                        backgroundColor: item.bgColor,
                                        margin: 10,
                                        padding: 15,
                                        width: 150
                                    }}>
                                    <Text style={[styles.normalTextStyle, { textAlign: "center" }]}> {item.day}</Text>
                                    <Image
                                        style={{ width: 80, height: 80, margin: 10, alignSelf: "center", borderRadius: 80 / 2 }}
                                        source={{ uri: item.image }}
                                    />
                                    <Text style={{ color: Colors.white, fontSize: 23, fontWeight: '500', textAlign: "center", marginTop: 8 }}> {item.temp1}</Text>
                                    <Text style={{ color: Colors.white, fontSize: 15, fontWeight: '500', textAlign: "center", marginTop: 8 }}> {item.temp2}</Text>
                                    <Text style={{ color: Colors.white, fontSize: 13, fontWeight: '500', textAlign: "center", marginTop: 15 }}> {item.temp3}</Text>
                                </CardView>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>
            </>
            )
    }
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        day: 'Monday',
        temp1: '23°C',
        temp2: '21.62°C',
        temp3: '23°C',
        bgColor: 'darkgreen',
        image: 'https://www.bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        day: 'Tuesday',
        temp1: '24°C',
        temp2: '20.12°C',
        temp3: '24°C',
        bgColor: 'darkslateblue',
        image: 'https://i.pinimg.com/originals/4e/78/58/4e7858e916e149f38c3d80056fcb2430.gif'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        day: 'Wednesday',
        temp1: '29°C',
        temp2: '29.62°C',
        temp3: '30°C',
        bgColor: 'darkslategrey',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        day: 'Thursday',
        temp1: '23°C',
        temp2: '21.62°C',
        temp3: '23°C',
        bgColor: 'darkgreen',
        image: 'https://www.bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        day: 'Friday',
        temp1: '23°C',
        temp2: '21.62°C',
        temp3: '23°C',
        bgColor: 'darkslateblue',
        image: 'https://www.bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        day: 'Saturday',
        temp1: '23°C',
        temp2: '21.62°C',
        temp3: '23°C',
        bgColor: 'darkslategrey',
        image: 'https://www.bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        day: 'Sunday',
        temp1: '23°C',
        temp2: '21.62°C',
        temp3: '23°C',
        bgColor: 'darkslategrey',
        image: 'https://www.bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png'
    },
];

const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent : 'center',
      alignItems : 'center'
    },
    scrollView: {
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
        fontSize: 17,
        fontWeight: '600',
        color: Colors.white
    },
    movieHeadTitleTextStyle: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.white,
        textAlign: "center"
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
            dispatch({ type: GET_TOP_RATED_MOVIE_LIST, userName: userName })
        }
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(MovieHome);
// export default MovieHome;