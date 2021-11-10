import React from 'react';
import './Filters.css';
import Radio from './Radio.js'

class Filters extends React.Component {

    render() {
        //console.log(this.props.plays)
        
        let isOpen = (!this.props.display.isDetailsOpen) ? "filters tc2" : "leftTwixClosed filters tc2";

        isOpen += " leftTwix";

        return (
            <section className={isOpen}>
                <h2>Play Filters</h2>
                <h3>Title</h3>
                <input type="text" name="title" value={this.props.filters.title} onChange={this.props.update}/>
                <h3>Year</h3>
                <Radio value="before" isSelected={this.props.filters.year.selected === "before"} click={this.props.update}/> Before:
                    <input type="text" name="before" value={this.props.filters.year.before} onChange={this.props.update}/>
                <br />
                <Radio value="after" isSelected={this.props.filters.year.selected === "after"} click={this.props.update}/> After:
                    <input type="text" name="after" value={this.props.filters.year.after} onChange={this.props.update}/>
                <h3>Genre</h3>
                <input type="text" name="genre" value={this.props.filters.genre} onChange={this.props.update}/>
                <br /><br />
                <button className="button" name="search" onClick={this.props.update}> Filter </button> 
                <button className="button" name="clear" onClick={this.props.update}> Clear </button> 

            </section>
        );
    }
}

export default Filters;