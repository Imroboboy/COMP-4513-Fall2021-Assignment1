import React from 'react';
import './FilteredPlays.css';
import FavoriteButton from './FavoriteButton';

import {Link} from 'react-router-dom';

class FilteredPlays extends React.Component {

    render() {
        let isOpen = (!this.props.display.isDetailsOpen) ? "filteredPlays tc2" : "filteredPlays tc2 rightTwixClosed";
        isOpen += " rightTwix";

        if(this.props.filteredPlays) {
            if(this.props.filteredPlays.length) {
                return (
                    <section className={isOpen}>
                        <h2 className="tc2">Plays</h2>
                        <div className="thePlays">
                            {this.props.filteredPlays.map((p, index) => 
                                <div key={index}> 
                                    <h4>{p.title}</h4> 
                                    <p>{p.likelyDate}</p> 
                                    <FavoriteButton isFavorite={this.props.checkFavorite(p.id)} id={p.id} updateFavorite={this.props.updateFavorites}/> 
                                    <button className="button viewDetails"> 
                                        <Link to="/details" value={p.id} name="gotoDetails" onClick={this.props.setCurrentPlay}>View</Link>
                                    </button>  
                                </div>
                            )}
                        </div>
                    </section>
                );
            } else {
                return (
                    <section className={isOpen}>
                        <h2 className="tc2">Plays</h2>
                        <div className="thePlays">
                            <h3> - No plays found with these filters! </h3>
                        </div>
                    </section>
                );
            }
        } else {
            return (
                <section className="filteredPlays tc2">
                    Loading...
                </section>
            );
        }

    }
}

export default FilteredPlays;