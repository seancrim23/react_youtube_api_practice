import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import classes from './SelectedVideo.module.css';

const SelectedVideo = props => {

    const { thumbnails, description, title } = props.selectedVideo.snippet;
    const id = props.selectedVideo.id.videoId;

    let favButton = null;
    const favIndex = props.favoriteList.findIndex(fav => {
        return fav.id === id;
    });
    if(favIndex === -1){
        favButton = <button onClick={() => props.addFav({title, id})} style={{width: "80%", marginTop: "15px"}}>ADD TO FAVORITES</button>;
    }else{
        favButton = <button onClick={() => props.removeFav(id)} style={{width: "80%", marginTop: "15px"}}>REMOVE FROM FAVORITES</button>;
    }

    return (
            <div className={classes.SelectedVideo}>
                <img src={thumbnails.medium.url} alt={description} style={{width: "100%"}} />
                <div className={classes.SelectedVideoInfo}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${id}`}>Watch this video!</a>
                    {favButton}
                </div>
            </div>
    );
};

const mapStateToProps = state => {
    return {
        favoriteList: state.favs.favList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFav: (favorite) => dispatch(actions.addFavorite(favorite)),
        removeFav: (id) => dispatch(actions.removeFavorite(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedVideo);