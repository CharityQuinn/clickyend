(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),i=t(1),l=t(4),m=t(5),d=t(8),s=t(6),u=t(9),g=t(7);var f=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark d-flex justify-space-between"},r.a.createElement("span",{className:"navbar-brand mb-0"},"Clicky Game"),r.a.createElement("span",{className:"scoreInfo text-light"},"Current Score: ",e.currentScore," || Top Score: ",e.topScore))};var p=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-warning text-dark text-center"},r.a.createElement("h1",null,"Welcome to the clicky game!"),r.a.createElement("p",null,"Click on a card to get started. Don't click on the same card twice."))},k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={cardData:Object(i.a)(g),currentScore:0,topScore:0},t.handleCardClick=function(e){var a=!1,n=Object(i.a)(t.state.cardData);n.forEach(function(t){t.id===e&&(t.clicked||(a=!0,t.clicked=!0))}),a?t.handleCorrect(n):t.handleIncorrect(n)},t.handleCorrect=function(e){var a=e.sort(function(){return.5-Math.random()}),n=t.state.currentScore+1,r=t.state.topScore;n>r&&(r=n),t.setState({cardData:a,currentScore:n,topScore:r})},t.handleIncorrect=function(e){var a=e.sort(function(){return.5-Math.random()});a.forEach(function(e){return e.clicked=!1}),t.setState({cardData:a,currentScore:0})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{currentScore:this.state.currentScore,topScore:this.state.topScore}),r.a.createElement(p,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row align-items-center justify-content-between"},this.state.cardData.map(function(a){return r.a.createElement("div",{className:"col-12 col-sm-3 col-md-2",key:a.id},r.a.createElement("img",{src:a.image,alt:a.name,className:"img-fluid img-thumbnail rounded",onClick:function(){return e.handleCardClick(a.id)}}))}))))}}]),a}(n.Component),w=function(){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{id:1,name:"flower-blossom",image:"./images/flower-blossom.jpeg",clicked:!1},{id:2,name:"Bromeliad",image:"./images/flower-bromeliad.jpg",clicked:!1},{id:3,name:"Rose",image:"./images/flower-rose-76141.jpeg",clicked:!1},{id:4,name:"RedPink",image:"./images/garden-rose-red-pink-56866.jpeg",clicked:!1},{id:5,name:"Spindle",image:"./images/pinkSpindle.jpeg",clicked:!1},{id:6,name:"RedRose",image:"./images/redRose.jpeg",clicked:!1},{id:7,name:"RobRoy",image:"./images/rob-roy-daisy-red-flower-88503.jpeg",clicked:!1},{id:8,name:"Snowflake",image:"./images/snowflake-flower-blossom-bloom-59836.jpeg",clicked:!1},{id:9,name:"Sukullente",image:"./images/sukullente-alpine-flora.jpeg",clicked:!1},{id:10,name:"twoFlower",image:"./images/twoFlowers.jpg",clicked:!1},{id:11,name:"WaterLily",image:"./images/water-lily.jpeg",clicked:!1},{id:12,name:"Dafodil",image:"./images/dafodil.jpg",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.710ea99f.chunk.js.map