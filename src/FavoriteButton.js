import favoriteLogo from './favoriteStar.svg';
import favoriteLogoAdd from './favoriteStarAdd.svg';
import './FavoriteButton.css'; 
import React from 'react';

//import {Link} from 'react-router-dom';

class FavoriteButton extends React.Component {
    /*
    constructor(props) {
        super(props);

    }
    */

    removeFavorite = () => {
        this.props.updateFavorite(
            this.props.id
        );
    }

    render() {

        const image = (this.props.isFavorite) ? <img src={favoriteLogoAdd} alt="Favorite" /> : <img src={favoriteLogo} alt="Unfavorite" />
        const label = (this.props.isFavorite) ? <div>Del</div> : <div>Add</div> 

        return (
            <button className="button favorite" name="favorite" onClick={this.removeFavorite}>
                {image}{label}
            </button> 
        );
    }
}

//value={this.props.play} 

export default FavoriteButton;
