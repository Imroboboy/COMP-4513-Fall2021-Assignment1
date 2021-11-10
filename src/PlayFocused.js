import React from 'react';
import './PlayFocused.css';
import {Link} from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

class PlayFocused extends React.Component {

    createSelectMenu = (name, propertyName, data, selectedDefault, extra = "") => {

        let extraOption = (extra) ? <option value={extra}>{extra}</option> : "";
        if(name === "character") {
            console.log(data);
            const toReturn = (
                <select key={name + "Select"} name={name} value={selectedDefault} onChange={this.props.updateFilters}>
                    {extraOption}
                    {data.map( (opt, index) => {
                        return (<option key={opt[propertyName]} value={opt[propertyName]}>{opt[propertyName]}</option>);
                    })}
                </select>
            );
            console.log(toReturn);
            return toReturn;
        } else {
            console.log(data);
            const toReturn = (
                <select key={name + "Select"} name={name} value={selectedDefault} onChange={this.props.updateFilters}>
                    {extraOption}
                    {data.map( (opt, index) => {
                        return (<option key={opt[propertyName]} value={index}>{opt[propertyName]}</option>);
                    })}
                </select>
            );
            console.log(toReturn);
            return toReturn;
        }

    }

    render() {
        console.log(this.props)

        const info = this.props.playData.playsInfo;
        const data = this.props.playData.playData;

        if(info && data) {
            let isOpen = (this.props.display.isDetailsOpen) ? "playFocused tc5" : "leftTwixClosed playFocused tc5";

            isOpen += " leftTwix";

            let myContent;

            if(this.props.display.detailsTabName === "text") {

                console.log(this.props.getActIndex(this.props.filters.innerPlay.act, data.acts));
                try {
                    myContent = (
                        <div className="indent">
                            {this.createSelectMenu("act", "name", data.acts, this.props.filters.innerPlay.act)}
                            <br />
                            {this.createSelectMenu("scene", "name", data.acts[this.props.filters.innerPlay.act].scenes, this.props.filters.innerPlay.scene)}
                            <br />
                            {this.createSelectMenu("character", "player", data.persona, this.props.filters.innerPlay.character, "ALL PLAYERS")}
                            <br />
                            <input type="text" name="searchInPlay" value={this.props.filters.innerPlay.search} onChange={this.props.updateFilters} />
                        </div>
                    );
                } catch(e) {
                    myContent = (
                        <div className="indent">
                            Loading...
                        </div>
                    );
                }
                
            } else {
                myContent = (
                    <div className="indent">
                        <p>{info.synopsis}</p>
                    </div>
                );
            }

            return (
                <section className={isOpen}>
                    <h2 className="leftAlign">{data.title}</h2>
                    
                    {myContent}
                    
                    <div className="alignButtons">
                        <button className="button smallButton viewHome"> 
                            <Link to="/COMP-4513-Fall2021-Assignment1/home" value={info.id} name="gotoHome">Close</Link>
                        </button>  
                        <FavoriteButton isFavorite={this.props.checkFavorite(info.id)} id={info.id} updateFavorite={this.props.updateFavorites}/> 
                    </div>
                </section>
            );
        } else {
            return (
                <section className="leftTwixClosed leftTwix playFocused tc5">
                    <h2 className="leftAlign">Loading...</h2>
                    <div className="indent">
                        <p>Loading...</p>
                    </div>
                    <div className="alignButtons">
                        <button className="button smallButton viewHome"> 
                            <Link to="/home">Close</Link>
                        </button>  
                    </div>
                </section>
            );
        }
        
    }
}

export default PlayFocused;