(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7SxbZAVtOTZi-D31gD5LxVo49gYqGruB0PNMI0rEbR5tH5WF_","clicked":false},{"id":2,"image":"https://media-exp1.licdn.com/dms/image/C4E03AQGedg7qx0Vbmw/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=DFwRkfPjTuj--7F1hhIu44Gc02o789lnTxjtahRnPd8","clicked":false},{"id":3,"image":"https://media-exp1.licdn.com/dms/image/C5603AQH1Yz9UYdkoNw/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=eKhyGc0uKSIUuvK9kHUvF3HCaUIfmAqkZI7un4EbWCE","clicked":false},{"id":4,"image":"https://pm1.narvii.com/5908/baa0e16a910934e66210a728845f9d06c3bf8324_00.jpg","clicked":false},{"id":5,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh3_fhzLiAqcdfrXJhiDr3jBFjIJ0XYaPLeJ4_iin7OtO5RU_1","clicked":false},{"id":6,"image":"https://swanpride.files.wordpress.com/2015/07/icon-hp-ginny.jpg?w=200","clicked":false},{"id":7,"image":"https://mumbaimirror.indiatimes.com/photo/15751576.cms","clicked":false},{"id":8,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqCbS8gctoj2uHj41obbqCZUYBMkN2MCowEPZnD-ThL3TNSrST","clicked":false},{"id":9,"image":"https://vignette.wikia.nocookie.net/jadensadventures/images/d/d9/Luna-Lovegood-Wallpaper-luna-lovegood-25518100-1024-768.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/491/window-height/491?cb=20140810050643","clicked":false},{"id":10,"image":"https://lh3.googleusercontent.com/proxy/PoHZyX-3_pBq-sKrYggMl8O658tlk_VeJQ-3oatrYRGahf-SvOVxsUdPpSAHr4y7IGBCaJaEZ5exeZX_M85KCUyuvCKHB5zIISrcrzHwo0f5vKpQ7iTcb4ve81YrV6UXHJB3","clicked":false},{"id":11,"image":"https://www.wheninmanila.com/wp-content/uploads/2017/02/WATCH-Someone-Made-a-Beauty-and-Lord-Voldemort-Movie-Trailer-Because-Why-Not-200x200.jpg","clicked":false},{"id":12,"image":"https://vignette.wikia.nocookie.net/evilbabes/images/3/31/Bellatrix-promo-bellatrix-lestrange-28967562-470-627.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/470/window-height/470?cb=20170411132245","clicked":false}]')},,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(3),i=n.n(r),o=n(4),l=n(5),s=n(7),d=n(6),m=n(8),u=(n(14),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),h=(n(15),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",{className:"brand animated lightSpeedIn"},a.a.createElement("a",{href:"/clicky-game"},e.title)),a.a.createElement("li",{id:"rw"},e.correctIncorrect),a.a.createElement("li",{class:"score-num"},"Current Score: ",e.score),a.a.createElement("li",{class:"score-num top"},"Top Score: ",e.topScore)))}),f=(n(16),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),p=(n(17),function(e){return a.a.createElement("h1",{className:"title"},e.children)}),g=function(e){return a.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return a.a.createElement("div",{className:t},e.children)},v=n(1);n(18);function S(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}var b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={friends:v,currentScore:0,topScore:0,correctIncorrect:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,correctIncorrect:"You guessed correctly!"}),e>=n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({correctIncorrect:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,correctIncorrect:"You guessed incorrectly!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=S(v);n.setState({friends:e})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(f,null,a.a.createElement(h,{title:"Harry Potter Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,correctIncorrect:this.state.correctIncorrect}),a.a.createElement(p,null,"Click on an image to earn points, but don't click on any more than once!"),a.a.createElement(g,null,a.a.createElement(k,null,this.state.friends.map((function(t){return a.a.createElement(w,{size:"md-3 sm-6"},a.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))})))))}}]),t}(c.Component);n(19);i.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6b80665d.chunk.js.map