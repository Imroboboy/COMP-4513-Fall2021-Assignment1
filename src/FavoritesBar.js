import './FavoritesBar.css';
import React from 'react';
import FavoriteButton from './FavoriteButton';
import FavoriteResize from './FavoriteResize';
import {Link} from 'react-router-dom';
import FavoriteLabel from './FavoriteLabel';

class FavoritesBar extends React.Component {
    /*
    constructor(props) {
        super(props);

    }
    */

    render() {
        let classes = (this.props.display.isFavoriteOpen) ? "favoritesBar tc2" : "favoritesBar tc2 favoritesBarClosed "
        classes += (this.props.display.isDetailsOpen) ? " playTheme" : "";
        if(this.props.favorites) {
            return (
                <section className={classes}>
                    <h2>Favorites</h2>
                    <FavoriteLabel isFavorite={true}/>
                    <FavoriteResize isOpen={this.props.display.isFavoriteOpen} update={this.props.show}/>
                    <div>
                        {this.props.favorites.map((f, index) => <div key={index}> <Link to="/COMP-4513-Fall2021-Assignment1/details"  value={f.id} name="gotoDetails" onClick={this.props.setCurrentPlay}>{f.title}</Link> <FavoriteButton isFavorite={true} id={f.id} updateFavorite={this.props.update}/> </div>)}
                    </div>
                </section>
            );
        } else {
            return (
                <section className="favoritesBar">
                    Loading...
                </section>
            );
        }

    }
}

export default FavoritesBar;
