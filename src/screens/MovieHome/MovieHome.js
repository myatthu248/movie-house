import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
}
from 'react-native';
import { GET_MOVIE_LIST } from '../../actions/movieActions';
import { connect } from 'react-redux';
import { flatMap } from 'rxjs/operators';


class MovieHome extends React.Component {

    constructor(props){
        super(props)   
     }

     componentWillMount(){
        console.log("Hello 123 constructor");
        this.tirggerGetMovieList()
    }

    tirggerGetMovieList = () => {
        this.props.getMovieList("myatthu")
    }
    
    render(){
        return(<View style={styles.container}>
            <Text>HomePage 123 </Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      justifyContent : 'center',
      alignItems : 'center'
    }
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
        }
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(MovieHome);
// export default MovieHome;