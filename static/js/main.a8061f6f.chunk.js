/*! For license information please see main.a8061f6f.chunk.js.LICENSE.txt */
(this.webpackJsonpassignment1=this.webpackJsonpassignment1||[]).push([[0],{19:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),r=s(16),n=s.n(r),c=(s(30),s(17)),l=s.n(c),o=s(24),p=s(18),h=s(11),d=s(3),u=s(4),j=s(6),b=s(5),f=s.p+"static/media/logo.6ce24c58.svg",O=(s(32),s(33),s(7)),y=s(0),v=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(y.jsxs)("div",{id:"Browser",children:[Object(y.jsx)("img",{className:"hero",src:this.props.logo,alt:"Background"}),Object(y.jsxs)("div",{id:"browserSearch",children:[Object(y.jsx)("h1",{children:"Play Browser"}),Object(y.jsxs)("label",{className:"textInput",children:["Title:",Object(y.jsx)("input",{type:"text",name:"title",value:this.props.text,onChange:this.props.update})]}),Object(y.jsx)("button",{className:"button",children:Object(y.jsx)(O.b,{to:"/COMP-4513-Fall2021-Assignment1/home",name:"search",onClick:this.props.update,children:"Show Matching Plays"})}),Object(y.jsx)("button",{className:"button",children:Object(y.jsx)(O.b,{to:"/COMP-4513-Fall2021-Assignment1/home",name:"clear",onClick:this.props.update,children:"Show All Plays"})})]})]})}}]),s}(i.a.Component),x=v,m=(s(35),s(36),s.p+"static/media/favoriteStar.2025c704.svg"),g=s.p+"static/media/favoriteStarAdd.73b8c903.svg",P=(s(19),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).removeFavorite=function(){e.props.updateFavorite(e.props.id)},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props.isFavorite?Object(y.jsx)("img",{src:g,alt:"Favorite"}):Object(y.jsx)("img",{src:m,alt:"Unfavorite"}),t=this.props.isFavorite?Object(y.jsx)("div",{children:"Del"}):Object(y.jsx)("div",{children:"Add"});return Object(y.jsxs)("button",{className:"button favorite",name:"favorite",onClick:this.removeFavorite,children:[e,t]})}}]),s}(i.a.Component)),F=P,C=(s(37),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).removeFavorite=function(){e.props.updateFavorite(e.props.id)},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props.isOpen?"\u25c4":"\u25ba";return Object(y.jsx)("button",{className:"button favoriteToggle",name:"favoriteToggle",onClick:this.props.update,children:e})}}]),s}(i.a.Component)),k=C,w=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.isFavorite?Object(y.jsx)("img",{src:g,className:"favoriteLabel",alt:"Favorite"}):Object(y.jsx)("img",{src:m,className:"favoriteLabel",alt:"Unfavorite"})}}]),s}(i.a.Component),S=w,N=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this,t=this.props.display.isFavoriteOpen?"favoritesBar tc2":"favoritesBar tc2 favoritesBarClosed ";return t+=this.props.display.isDetailsOpen?" playTheme":"",this.props.favorites?Object(y.jsxs)("section",{className:t,children:[Object(y.jsx)("h2",{children:"Favorites"}),Object(y.jsx)(S,{isFavorite:!0}),Object(y.jsx)(k,{isOpen:this.props.display.isFavoriteOpen,update:this.props.show}),Object(y.jsx)("div",{children:this.props.favorites.map((function(t,s){return Object(y.jsxs)("div",{children:[" ",Object(y.jsx)(O.b,{to:"/COMP-4513-Fall2021-Assignment1/details",value:t.id,name:"gotoDetails",onClick:e.props.setCurrentPlay,children:t.title})," ",Object(y.jsx)(F,{isFavorite:!0,id:t.id,updateFavorite:e.props.update})," "]},s)}))})]}):Object(y.jsx)("section",{className:"favoritesBar",children:"Loading..."})}}]),s}(i.a.Component),D=N,A=(s(38),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.isSelected?Object(y.jsx)("button",{className:"radio radioSelect",name:"timeSelect",value:this.props.value,onClick:this.props.click,children:Object(y.jsx)("div",{children:" "})}):Object(y.jsx)("button",{className:"radio",name:"timeSelect",value:this.props.value,onClick:this.props.click,children:Object(y.jsx)("div",{children:" "})})}}]),s}(i.a.Component)),I=A,L=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props.display.isDetailsOpen?"leftTwixClosed filters tc2":"filters tc2";return e+=" leftTwix",Object(y.jsxs)("section",{className:e,children:[Object(y.jsx)("h2",{children:"Play Filters"}),Object(y.jsx)("h3",{children:"Title"}),Object(y.jsx)("input",{type:"text",name:"title",value:this.props.filters.title,onChange:this.props.update}),Object(y.jsx)("h3",{children:"Year"}),Object(y.jsx)(I,{value:"before",isSelected:"before"===this.props.filters.year.selected,click:this.props.update})," Before:",Object(y.jsx)("input",{type:"text",name:"before",value:this.props.filters.year.before,onChange:this.props.update}),Object(y.jsx)("br",{}),Object(y.jsx)(I,{value:"after",isSelected:"after"===this.props.filters.year.selected,click:this.props.update})," After:",Object(y.jsx)("input",{type:"text",name:"after",value:this.props.filters.year.after,onChange:this.props.update}),Object(y.jsx)("h3",{children:"Genre"}),Object(y.jsx)("input",{type:"text",name:"genre",value:this.props.filters.genre,onChange:this.props.update}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{className:"button",name:"search",onClick:this.props.update,children:" Filter "}),Object(y.jsx)("button",{className:"button",name:"clear",onClick:this.props.update,children:" Clear "})]})}}]),s}(i.a.Component),T=L,M=(s(39),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this,t=this.props.display.isDetailsOpen?"filteredPlays tc2 rightTwixClosed":"filteredPlays tc2";return t+=" rightTwix",this.props.filteredPlays?this.props.filteredPlays.length?Object(y.jsxs)("section",{className:t,children:[Object(y.jsx)("h2",{className:"tc2",children:"Plays"}),Object(y.jsx)("div",{className:"thePlays",children:this.props.filteredPlays.map((function(t,s){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{children:t.title}),Object(y.jsx)("p",{children:t.likelyDate}),Object(y.jsx)(F,{isFavorite:e.props.checkFavorite(t.id),id:t.id,updateFavorite:e.props.updateFavorites}),Object(y.jsx)("button",{className:"button viewDetails",children:Object(y.jsx)(O.b,{to:"/COMP-4513-Fall2021-Assignment1/details",value:t.id,name:"gotoDetails",onClick:e.props.setCurrentPlay,children:"View"})})]},s)}))})]}):Object(y.jsxs)("section",{className:t,children:[Object(y.jsx)("h2",{className:"tc2",children:"Plays"}),Object(y.jsx)("div",{className:"thePlays",children:Object(y.jsx)("h3",{children:" - No plays found with these filters! "})})]}):Object(y.jsx)("section",{className:"filteredPlays tc2",children:"Loading..."})}}]),s}(i.a.Component)),B=M,H=(s(40),s(25)),E=s.n(H),R=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).isTabSelected=function(t){return e.props.display.detailsTabName===t?"button tc4 tabSelected":"button tc4"},e.makeTabSwitch=function(t){var s=t.toLowerCase();return Object(y.jsx)("button",{name:"tabSwitch",value:s,className:e.isTabSelected(s),onClick:e.props.showTab,children:t})},e.formatContent=function(){var t,s=e.props.playData.playsInfo,a=e.props.playData.playData;switch(e.props.display.detailsTabName){case"details":t=Object(y.jsx)("div",{id:"detailsContent",children:Object(y.jsx)("table",{className:"detailsTable",children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Likely date of Composition:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:s.likelyDate})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Genre:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:s.genre})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Wiki Link:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:s.wiki,children:s.wiki})})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Gutenberg Link:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:s.gutenberg,children:s.gutenberg})})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Shakespeare.org Link:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:Object(y.jsx)("a",{href:s.shakespeareOrg,children:s.shakespeareOrg})})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Description:"}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:s.desc})]})]})})});break;case"characters":t=Object(y.jsx)("div",{id:"detailsContent",children:Object(y.jsx)("table",{className:"detailsTable",children:Object(y.jsx)("tbody",{children:a.persona.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsxs)("th",{children:[e.player,": "]}),Object(y.jsx)("td",{className:"spaceOut"}),Object(y.jsx)("td",{children:e.desc})]},t)}))})})});break;case"text":if(a&&e.props.filters.innerPlay.character){var i=a.acts[e.props.filters.innerPlay.act],r=i.scenes[e.props.filters.innerPlay.scene],n=[e.props.filters.innerPlay.search];t=Object(y.jsxs)("div",{id:"detailsContent",className:"textViewing",children:[Object(y.jsx)("h2",{children:a.title}),Object(y.jsxs)("h3",{children:[i.name,", ",r.name,": ",r.title]}),Object(y.jsx)("hr",{}),Object(y.jsx)("h4",{children:r.stageDirection}),r.speeches.map((function(t,s){return t.speaker===e.props.filters.innerPlay.character||"ALL PLAYERS"===e.props.filters.innerPlay.character?Object(y.jsxs)("div",{className:"speech",children:[Object(y.jsx)("h3",{children:t.speaker}),t.lines.map((function(e,t){return Object(y.jsx)("p",{children:Object(y.jsx)(E.a,{highlightClassName:"highightedData",className:"textData",searchWords:n,textToHighlight:e},"Line: "+t)})})),Object(y.jsx)("h4",{children:t.stagedir})]},"Speech: "+s):Object(y.jsxs)("div",{className:"speech",children:[Object(y.jsx)("h3",{children:t.speaker}),t.lines.map((function(e,t){return Object(y.jsxs)("p",{children:[e,Object(y.jsx)("br",{})]},"Line: "+t)}))]},"Speech: "+s)}))]})}else t=Object(y.jsx)("div",{id:"detailsContent",className:"textViewing",children:"Loading..."});break;default:t=Object(y.jsx)("p",{children:"Wow!"})}return t},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props.display.isDetailsOpen?"playDetails":"playDetailsClosed playDetails";return console.log(this.props.display.isDetailsOpen),e+=" rightTwix",this.props.playData.playsInfo&&this.props.playData.playData?Object(y.jsxs)("section",{className:e,children:[Object(y.jsxs)("div",{id:"playDetailsNavTabs",children:[this.makeTabSwitch("Details"),this.makeTabSwitch("Characters"),this.makeTabSwitch("Text")]}),this.formatContent()]}):Object(y.jsx)("section",{className:"playDetailsClosed playDetails rightTwix"})}}]),s}(i.a.Component),V=R,J=(s(41),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).createSelectMenu=function(t,s,a,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",n=r?Object(y.jsx)("option",{value:r,children:r}):"";if("character"===t){console.log(a);var c=Object(y.jsxs)("select",{name:t,value:i,onChange:e.props.updateFilters,children:[n,a.map((function(e,t){return Object(y.jsx)("option",{value:e[s],children:e[s]},e[s])}))]},t+"Select");return console.log(c),c}console.log(a);var l=Object(y.jsxs)("select",{name:t,value:i,onChange:e.props.updateFilters,children:[n,a.map((function(e,t){return Object(y.jsx)("option",{value:t,children:e[s]},e[s])}))]},t+"Select");return console.log(l),l},e}return Object(u.a)(s,[{key:"render",value:function(){console.log(this.props);var e=this.props.playData.playsInfo,t=this.props.playData.playData;if(e&&t){var s,a=this.props.display.isDetailsOpen?"playFocused tc5":"leftTwixClosed playFocused tc5";if(a+=" leftTwix","text"===this.props.display.detailsTabName){console.log(this.props.getActIndex(this.props.filters.innerPlay.act,t.acts));try{s=Object(y.jsxs)("div",{className:"indent",children:[this.createSelectMenu("act","name",t.acts,this.props.filters.innerPlay.act),Object(y.jsx)("br",{}),this.createSelectMenu("scene","name",t.acts[this.props.filters.innerPlay.act].scenes,this.props.filters.innerPlay.scene),Object(y.jsx)("br",{}),this.createSelectMenu("character","player",t.persona,this.props.filters.innerPlay.character,"ALL PLAYERS"),Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"text",name:"searchInPlay",value:this.props.filters.innerPlay.search,onChange:this.props.updateFilters})]})}catch(i){s=Object(y.jsx)("div",{className:"indent",children:"Loading..."})}}else s=Object(y.jsx)("div",{className:"indent",children:Object(y.jsx)("p",{children:e.synopsis})});return Object(y.jsxs)("section",{className:a,children:[Object(y.jsx)("h2",{className:"leftAlign",children:t.title}),s,Object(y.jsxs)("div",{className:"alignButtons",children:[Object(y.jsx)("button",{className:"button smallButton viewHome",children:Object(y.jsx)(O.b,{to:"/COMP-4513-Fall2021-Assignment1/home",value:e.id,name:"gotoHome",children:"Close"})}),Object(y.jsx)(F,{isFavorite:this.props.checkFavorite(e.id),id:e.id,updateFavorite:this.props.updateFavorites})]})]})}return Object(y.jsxs)("section",{className:"leftTwixClosed leftTwix playFocused tc5",children:[Object(y.jsx)("h2",{className:"leftAlign",children:"Loading..."}),Object(y.jsx)("div",{className:"indent",children:Object(y.jsx)("p",{children:"Loading..."})}),Object(y.jsx)("div",{className:"alignButtons",children:Object(y.jsx)("button",{className:"button smallButton viewHome",children:Object(y.jsx)(O.b,{to:"/home",children:"Close"})})})]})}}]),s}(i.a.Component)),U=J,Y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.display.isDetailsOpen?Object(y.jsxs)("div",{id:"defaultView",children:[Object(y.jsx)(D,{favorites:this.props.favorites,update:this.props.updateFavorites,setCurrentPlay:this.props.setCurrentPlay,display:this.props.display,show:this.props.updateDisplay}),Object(y.jsxs)("div",{id:"contentContainer",children:[Object(y.jsx)(T,{display:this.props.display,filters:this.props.filters,update:this.props.updateFilters}),Object(y.jsx)(B,{display:this.props.display,filteredPlays:this.props.plays,checkFavorite:this.props.playIsFavorite,updateFavorites:this.props.updateFavorites,setCurrentPlay:this.props.setCurrentPlay}),Object(y.jsx)(U,{display:this.props.display,playData:this.props.focusedPlay,getActIndex:this.props.getActIndex,checkFavorite:this.props.playIsFavorite,updateFavorites:this.props.updateFavorites,filters:this.props.filters,updateFilters:this.props.updateFilters,autofillFilters:this.props.autofillInnerPlayFilters}),Object(y.jsx)(V,{display:this.props.display,playData:this.props.focusedPlay,getActIndex:this.props.getActIndex,showTab:this.props.updateDisplay,filters:this.props.filters})]})]}):Object(y.jsxs)("div",{id:"defaultView",children:[Object(y.jsx)(D,{favorites:this.props.favorites,update:this.props.updateFavorites,setCurrentPlay:this.props.setCurrentPlay,display:this.props.display,show:this.props.updateDisplay}),Object(y.jsxs)("div",{id:"contentContainer",children:[Object(y.jsx)(U,{display:this.props.display,playData:this.props.focusedPlay,getActIndex:this.props.getActIndex,checkFavorite:this.props.playIsFavorite,updateFavorites:this.props.updateFavorites,filters:this.props.filters,updateFilters:this.props.updateFilters,autofillFilters:this.props.autofillInnerPlayFilters}),Object(y.jsx)(V,{display:this.props.display,playData:this.props.focusedPlay,getActIndex:this.props.getActIndex,showTab:this.props.updateDisplay,filters:this.props.filters}),Object(y.jsx)(T,{display:this.props.display,filters:this.props.filters,update:this.props.updateFilters}),Object(y.jsx)(B,{display:this.props.display,filteredPlays:this.props.plays,checkFavorite:this.props.playIsFavorite,updateFavorites:this.props.updateFavorites,setCurrentPlay:this.props.setCurrentPlay})]})]})}}]),s}(i.a.Component),G=Y,W=(s(42),s(13)),q=s.n(W),z=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return console.log("Header props: "),console.log(this.props),console.log("Header props Done"),Object(y.jsxs)("header",{className:"App-header tc1",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(O.b,{className:"logo",to:"/COMP-4513-Fall2021-Assignment1/",name:"home",onClick:this.props.update,children:Object(y.jsx)("img",{src:this.props.logo,alt:"Logo"})}),Object(y.jsx)("button",{className:"button",name:"aboutOpen",onClick:this.props.updateDisplay,children:"About"})]}),Object(y.jsxs)(q.a,{isOpen:this.props.isAboutOpen,children:[Object(y.jsx)("button",{className:"button",name:"aboutClose",onClick:this.props.updateDisplay,children:"Close About"}),Object(y.jsx)("h1",{children:"Built with React!"}),Object(y.jsx)("h2",{children:"React Components Used:"}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["react-modal: ",Object(y.jsx)("a",{href:"https://www.npmjs.com/package/react-modal",children:"https://www.npmjs.com/package/react-modal"})]}),Object(y.jsxs)("li",{children:["react-router-dom: ",Object(y.jsx)("a",{href:"https://www.npmjs.com/package/react-router",children:"https://www.npmjs.com/package/react-router"})]})]}),Object(y.jsx)("h2",{children:"Play Data from Randy's Server."})]})]})}}]),s}(i.a.Component),K=z,Q=s(2),X=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).mounted=!1,a.checkLocation=function(e){if(!e.display.isDetailsOpen===("/COMP-4513-Fall2021-Assignment1/details"===window.location.pathname)){var t=Object(h.a)({},a.state.display);t.isDetailsOpen="/COMP-4513-Fall2021-Assignment1/details"===window.location.pathname,t.isFavoriteOpen=!1,a.updateState("display",t)}},a.useLocalStorage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&window.localStorage.setItem(e,JSON.stringify(t)),JSON.parse(window.localStorage.getItem(e))},a.updateState=function(e,t){if(!0===a.mounted){var s=Object(h.a)({},a.state);Array.isArray(e)?e.forEach((function(e,i){s[e]=t[i],a.useLocalStorage(e,t[i])})):(s[e]=t,a.useLocalStorage(e,t)),a.setState(s),console.log("State updated to:"),console.log(s)}},a.modifyFavorite=function(e){var t=Object(p.a)(a.state.favorites);if(console.log(e),t.find((function(t){return t.id===e}))){console.log("isDeleting!");var s=t.findIndex((function(t){return t.id===e}));console.log(s),console.log(t[s]),t.splice(s,1),console.log(t),a.updateState("favorites",t)}else{console.log("Current faves:"),console.log(t);var i=a.state.allPlays.find((function(t){return t.id===e}));console.log("New fave:"),console.log(i),t.push(i),a.updateState("favorites",t)}},a.useFilters=function(e){var t=e.currentTarget.name,s=Object(h.a)({},a.state.filters),i=!0;switch(t){case"title":s.title=e.target.value;break;case"timeSelect":console.log("Updating timeSelect"),e.target.value?s.year.selected=e.target.value:s.year.selected=e.target.parentElement.value;break;case"before":s.year.before=e.target.value;break;case"after":s.year.after=e.target.value;break;case"genre":s.genre=e.target.value;break;case"search":a.updateMatching(s),i=!1;break;case"act":s.innerPlay.act=e.target.value;break;case"scene":s.innerPlay.scene=e.target.value;break;case"character":s.innerPlay.character=e.target.value;break;case"searchInPlay":s.innerPlay.search=e.target.value;break;default:console.log("Clearing filters!"),s={title:"",year:{before:"",after:"",selected:""},genre:"",innerPlay:{act:"",scene:"",character:"",search:""}},a.updateMatching(s),i=!1}i&&a.updateState("filters",s)},a.updateDisplay=function(e){var t=e.target.name;console.log("clicked updateDisplay: "+t);var s=Object(h.a)({},a.state.display);switch(console.log(s),t){case"favoriteToggle":s.isFavoriteOpen=!s.isFavoriteOpen;break;default:break;case"tabSwitch":s.detailsTabName=e.target.value;break;case"aboutOpen":console.log("Requesting open..."),s.isShowingAbout=!0;break;case"aboutClose":s.isShowingAbout=!1}a.updateState("display",s)},a.checkIfFavorite=function(e){return a.state.favorites.find((function(t){return t.id===e}))},a.updateMatching=function(e){if(a.state.allPlays){var t=Object(p.a)(a.state.allPlays);t=t.filter((function(t){return t.title.toLowerCase().includes(e.title.toLowerCase())})),e.year.selected&&("before"===e.year.selected&&e.year.before?t=t.filter((function(t){return t.likelyDate<e.year.before})):e.year.after&&(t=t.filter((function(t){return t.likelyDate>e.year.after})))),t=t.filter((function(t){return t.genre.toLowerCase().includes(e.genre.toLowerCase())})),a.updateState(["matchingPlays","filters"],[t,e])}},a.clickSetCurrentPlay=function(e){var t=e.currentTarget.getAttribute("value"),s=a.state.allPlays.find((function(e){return e.id===t}));console.log(t);var i="https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=".concat(t);console.log(i),fetch(i).then((function(e){return e.json()})).then((function(t){return a.hasReceivedPlay(t,s,e)})).catch((function(e){console.error(e)}))},a.hasReceivedPlay=function(e,t,s){if(console.log("Fetched this data:"),console.log(e),e.message)console.log("> "+e.message);else{var i=a.autofillInnerPlayFilters();a.updateState(["focusedPlay","filters"],[{playsInfo:t,playData:e},i]),a.updateDisplay(s)}},a.autofillInnerPlayFilters=function(){var e=Object(h.a)({},a.state.filters);return e.innerPlay={},e.innerPlay.act=0,e.innerPlay.scene=0,e.innerPlay.character="ALL PLAYERS",e.innerPlay.search="",e},a.getIndexOfAct=function(e,t){return t.findIndex((function(t){return t.name===e}))},a.state={favorites:a.useLocalStorage("favorites")||[],allPlays:a.useLocalStorage("allPlays")||[],filters:a.useLocalStorage("filters")||{title:"",year:{before:"",after:"",selected:"before"},genre:"",innerPlay:{act:"",scene:"",character:"",search:""}},matchingPlays:a.useLocalStorage("matchingPlays")||[],focusedPlay:a.useLocalStorage("focusedPlay")||{},display:a.useLocalStorage("display")||{isFavoriteOpen:!0,isDetailsOpen:!1,detailsTabName:"details",isShowingAbout:!1}},setInterval((function(){return a.checkLocation(a.state)}),500),setInterval((function(){console.log(a.state)}),5e3),a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mounted=!0,t=[{id:"hamlet",filename:"hamlet.json",title:"Hamlet"},{id:"hamlet1",filename:"hamletto.json",title:"Not Hamlet!"}],this.useLocalStorage("allPlays"))this.updateState("allPlays",this.useLocalStorage("allPlays"));else try{"https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php",fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php").then((function(e){return e.json()})).then((function(e){s.updateState("allPlays",e),s.useLocalStorage("allPlays",e)})).catch((function(e){return s.updateState("allPlays",[].concat(t))}))}catch(a){console.error("OH NO FETCH DIED!")}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(y.jsx)("div",{id:"App",children:Object(y.jsxs)(Q.c,{children:[Object(y.jsx)(Q.a,{path:"/COMP-4513-Fall2021-Assignment1/",element:Object(y.jsx)(x,{logo:f,text:this.state.filters.title,update:this.useFilters})}),Object(y.jsx)(Q.a,{path:"/COMP-4513-Fall2021-Assignment1/home",element:Object(y.jsxs)("div",{children:[Object(y.jsx)(K,{logo:f,updateDisplay:this.updateDisplay,isAboutOpen:this.state.display.isShowingAbout}),Object(y.jsx)(G,{logo:f,favorites:this.state.favorites,updateFavorites:this.modifyFavorite,filters:this.state.filters,updateFilters:this.useFilters,searching:this.state.searching,plays:this.state.matchingPlays,playIsFavorite:this.checkIfFavorite,update:this.updateInput,focusedPlay:this.state.focusedPlay,setCurrentPlay:this.clickSetCurrentPlay,autofillInnerPlayFilters:this.autofillInnerPlayFilters,getActIndex:this.getIndexOfAct,display:this.state.display,updateDisplay:this.updateDisplay})]})}),Object(y.jsx)(Q.a,{path:"/COMP-4513-Fall2021-Assignment1/details",element:Object(y.jsxs)("div",{children:[Object(y.jsx)(K,{logo:f,updateDisplay:this.updateDisplay,isAboutOpen:this.state.display.isShowingAbout}),Object(y.jsx)(G,{logo:f,favorites:this.state.favorites,updateFavorites:this.modifyFavorite,filters:this.state.filters,updateFilters:this.useFilters,searching:this.state.searching,plays:this.state.matchingPlays,playIsFavorite:this.checkIfFavorite,update:this.updateInput,focusedPlay:this.state.focusedPlay,setCurrentPlay:this.clickSetCurrentPlay,autofillInnerPlayFilters:this.autofillInnerPlayFilters,getActIndex:this.getIndexOfAct,display:this.state.display,updateDisplay:this.updateDisplay})]})})]})})}}]),s}(i.a.Component),Z=X,$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),r(e),n(e)}))};n.a.render(Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(Z,{})})}),document.getElementById("root")),q.a.setAppElement("#root"),$()}},[[54,1,2]]]);
//# sourceMappingURL=main.a8061f6f.chunk.js.map