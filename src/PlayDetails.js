import React from 'react';
import './PlayDetails.css';

import Highlighter from "react-highlight-words";


class PlayDetails extends React.Component {

    isTabSelected = (currentTabValue) => {
        //console.log(currentTabValue.lowercaseName);
        //console.log(this.props.display.detailsTabName.toLowerCase());
        return (this.props.display.detailsTabName === currentTabValue) ? "button tc4 tabSelected" : "button tc4";
    }

    makeTabSwitch = (value) => {
        const lowercaseName = value.toLowerCase();
        return (<button name="tabSwitch" value={lowercaseName} className={this.isTabSelected(lowercaseName)} onClick={this.props.showTab}>{value}</button>)
    }

    formatContent = () => {
        const info = this.props.playData.playsInfo;
        const data = this.props.playData.playData;

        let myContent;

        switch(this.props.display.detailsTabName) {
            case "details":
                myContent = (
                    <div id="detailsContent">
                        <table className="detailsTable">
                            <tbody>
                                <tr>
                                    <th>Likely date of Composition:</th>
                                    <td className="spaceOut"></td>
                                    <td>{info.likelyDate}</td>
                                </tr>
                                <tr>
                                    <th>Genre:</th>
                                    <td className="spaceOut"></td>
                                    <td>{info.genre}</td>
                                </tr>
                                <tr>
                                    <th>Wiki Link:</th>
                                    <td className="spaceOut"></td>
                                    <td><a href={info.wiki}>{info.wiki}</a></td>
                                </tr>
                                <tr>
                                    <th>Gutenberg Link:</th>
                                    <td className="spaceOut"></td>
                                    <td><a href={info.gutenberg}>{info.gutenberg}</a></td>
                                </tr>
                                <tr>
                                    <th>Shakespeare.org Link:</th>
                                    <td className="spaceOut"></td>
                                    <td><a href={info.shakespeareOrg}>{info.shakespeareOrg}</a></td>
                                </tr>
                                <tr>
                                    <th>Description:</th>
                                    <td className="spaceOut"></td>
                                    <td>{info.desc}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case "characters":
                myContent = (
                    <div id="detailsContent">
                        <table className="detailsTable">
                            <tbody>
                                {data.persona.map((p, index) => 
                                    <tr key={index}>
                                        <th>{p.player}: </th>
                                        <td className="spaceOut"></td>
                                        <td>{p.desc}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case "text":
                //let myContent = ();

                //textContent += data.acts[this.props.getActIndex(this.props.filters.innerPlay.act, data.acts)].name

                //{data.acts[this.props.filters.innerPlay.act].scenes[this.props.filters.innerPlay.scene]}
                //console.log("Searching: ");
                //console.log([this.props.filters]);
                

                /*
                <h2 key="">
                    <Highlighter 
                        highlightClassName="highightedData"
                        className="textData"
                        searchWords={searching}
                        textToHighlight={data.acts[this.props.getActIndex(this.props.filters.innerPlay.act, data.acts)].name} />
                </h2>
                */
                //{data.acts[this.props.filters.innerPlay.act].scenes}
                if(data && this.props.filters.innerPlay.character) {
                    const currentAct = data.acts[this.props.filters.innerPlay.act];
                    const currentScene = currentAct.scenes[this.props.filters.innerPlay.scene];

                    let searching = [this.props.filters.innerPlay.search];

                    myContent = (
                        <div id="detailsContent" className="textViewing">
                            <h2>
                                {data.title}
                            </h2>
                            <h3>
                                {currentAct.name}, {currentScene.name}: {currentScene.title}
                            </h3>
                            <hr />

                            <h4>{currentScene.stageDirection}</h4>

                            {currentScene.speeches.map( (s, index) => {

                                if(s.speaker === this.props.filters.innerPlay.character || this.props.filters.innerPlay.character === "ALL PLAYERS") {
                                    return (
                                        <div key={"Speech: " + index} className="speech">
                                            <h3>
                                                {s.speaker}
                                            </h3>
                                            {s.lines.map((l, indexLine) => 
                                                <p><Highlighter key= {"Line: " + indexLine}
                                                    highlightClassName="highightedData"
                                                    className="textData"
                                                    searchWords={searching}
                                                    textToHighlight={l} /></p>
                                            )}
                                            <h4>{s.stagedir}</h4>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={"Speech: " + index} className="speech">
                                            <h3>
                                                {s.speaker}
                                            </h3>
                                            {s.lines.map((l, indexLine) => <p key={"Line: " + indexLine}>{l}<br /></p>)}
                                        </div>
                                    );
                                }
                            })}
                            
                            
                        </div>
                    );
                } else {
                    myContent = (
                        <div id="detailsContent" className="textViewing">
                            Loading...
                        </div>
                    );
                }
                break;
            default:
                myContent = <p>Wow!</p>;
                break;
        }

        return myContent;
    }

    render() {
        //!this.props.display.isDetailsOpen
        let isOpen = (this.props.display.isDetailsOpen) ? "playDetails" : "playDetailsClosed playDetails";
        console.log(this.props.display.isDetailsOpen);
        isOpen += " rightTwix";

        //this.props.filteredPlays

        //                    {this.props.filteredPlays.map((p, index) => <div key={index}> <h4>{p.title}</h4> <p>{p.likelyDate}</p> <FavoriteButton isFavorite={this.props.checkFavorite(p.id)} id={p.id} updateFavorite={this.props.updateFavorites}/> </div>)}

        //let myContent = (<p>Wow!</p>);
        
        



        if(this.props.playData.playsInfo && this.props.playData.playData) {
            return (
                <section className={isOpen}>
                    <div id="playDetailsNavTabs">
                        {this.makeTabSwitch("Details")}
                        {this.makeTabSwitch("Characters")}
                        {this.makeTabSwitch("Text")}
                    </div>
                    
                    {this.formatContent()}

                </section>
            );
        } else {
            return (
                <section className="playDetailsClosed playDetails rightTwix">

                </section>
            );
        }

    }
}

export default PlayDetails;