(this["webpackJsonpmovie-trailler"]=this["webpackJsonpmovie-trailler"]||[]).push([[0],{24:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),o=a.n(n),i=a(16),r=a.n(i),s=(a(24),a(4)),l=a.n(s),u=a(9),d=a(2),h="https://api.themoviedb.org/3",j=a(8),b=a.n(j),f=a(14),v=a(7),m=a.n(v);var O=function(e){var t=e.url;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1&rel=0"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})};var g=function(e){var t=e.title,a=e.cat,o=e.fetchData,i=e.status,r=e.pageStatus,s=Object(n.useState)(""),l=Object(d.a)(s,2),u=l[0],h=l[1],j=Object(n.useState)(""),v=Object(d.a)(j,2),g=v[0],p=v[1],_=Object(n.useRef)(null),w=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=e.get("cat"),c=String(e.get("id"));if(a===t&&!0===i&&!0===r){var n=w.current.querySelector("#".concat(c));if(null!==n){console.log("success!");var o=n.alt;m()(o,{id:!0}).then((function(e){h(e)})).catch((function(){h(""),p("unfortunately the trailler for ".concat(o," is not avaliable"))}))}}}),[a,i,r]),Object(c.jsxs)("div",{className:b.a.row,id:a,ref:w,children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:b.a.movieImage,id:"merda",children:o.map((function(e){return Object(c.jsx)(f.a,{children:Object(c.jsx)(f.b,{ref:_,to:"?cat=".concat(a,"&id=mov_").concat(e.id,"&name=").concat(null==e.name?e.original_title:e.name),onClick:function(){!function(e){var t;m()(null==e.name?e.original_title:e.name,{id:!0}).then((function(e){h(e),t=e,p(""),u===t&&h("")})).catch((function(t){h(""),p("unfortunately the trailler for ".concat(null==e.name?e.original_title:e.name," is not avaliable"))}))}(e),function(){var e=_.current.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}()},children:Object(c.jsx)("img",{id:"mov_".concat(e.id),src:"".concat("https://image.tmdb.org/t/p/w200/").concat(null===e.poster_path?e.backdrop_path:e.poster_path),alt:null==e.name?e.original_title:e.name},e.id)})},"".concat(e.id,"10"))}))}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:b.a.traillerContainer,children:[g&&Object(c.jsx)("p",{className:b.a.error,children:g}),u&&Object(c.jsx)(O,{url:u})]})})]})},p="d5f97f79b5eba255553c61fd70da79bb",_={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-UK"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-UK"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99"),fetchMoviesTrending:"/trending/movie/day?api_key=".concat(p,"&language=en-UK")},w=a(5),x=a.n(w),S=a(18);var y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),s=r[0],j=r[1],b=Object(n.useState)(""),f=Object(d.a)(b,2),v=f[0],O=f[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat(_.fetchMoviesTrending));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,void 0===(c=a.results[Math.floor(Math.random()*a.results.length-1)])&&(c=a.results[0]),o(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){var e=function(e){27===e.keyCode&&j("")};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"".concat(x.a.hero," ").concat(x.a.backgroundPosition),style:{backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original").concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(c.jsxs)("div",{className:x.a.container,children:[Object(c.jsx)("h1",{children:(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name)}),Object(c.jsxs)("button",{onClick:function(){return function(e){m()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name),{id:!0}).then((function(e){j(e),O("")})).catch((function(){O("error"),j("")}))}(a)},children:[Object(c.jsx)(S.a,{})," Play Trailler"]}),v&&Object(c.jsx)("p",{className:x.a.error,children:"unfortunately the trailler is not avaliable"}),Object(c.jsx)("p",{children:null===a||void 0===a?void 0:a.overview})]})}),s&&Object(c.jsx)("div",{onClick:function(){j("")},className:x.a.mainMovieTrailler,children:Object(c.jsx)("div",{children:Object(c.jsx)("iframe",{title:(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),src:"https://www.youtube.com/embed/".concat(s,"?autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),Object(c.jsx)("div",{})]})};a(33);var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),s=r[0],j=r[1],b=Object(n.useState)([]),f=Object(d.a)(b,2),v=f[0],m=f[1],O=Object(n.useState)([]),p=Object(d.a)(O,2),w=p[0],x=p[1],S=Object(n.useState)([]),k=Object(d.a)(S,2),M=k[0],T=k[1],R=Object(n.useState)([]),N=Object(d.a)(R,2),E=N[0],I=N[1],D=Object(n.useState)([]),C=Object(d.a)(D,2),F=C[0],L=C[1],A=Object(n.useState)([]),H=Object(d.a)(A,2),P=H[0],U=H[1],V=Object(n.useState)([]),B=Object(d.a)(V,2),G=B[0],J=B[1],K=Object(n.useState)(!1),z=Object(d.a)(K,2),X=z[0],q=z[1],Q=Object(n.useState)(!1),W=Object(d.a)(Q,2),Y=W[0],Z=W[1];function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(u.a)(l.a.mark((function e(t,a){var c,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h).concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,o=n.results,a(o),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("something went wrong!"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){$("".concat(_.fetchNetflixOriginals),o),$("".concat(_.fetchActionMovies),J),$("".concat(_.fetchComedyMovies),U),$("".concat(_.fetchDocumentaries),L),$("".concat(_.fetchHorrorMovies),I),$("".concat(_.fetchMoviesTrending),T),$("".concat(_.fetchRomanceMovies),x),$("".concat(_.fetchTopRated),m),$("".concat(_.fetchTrending),j)}),[]),Object(n.useEffect)((function(){if(a.length&&s.length&&v.length&&w.length&&M.length&&E.length&&F.length&&P.length&&0!==G.length&&q(!0),window.onload=function(){Z(!0)},!0===X&&!0===Y){var e,t=new URLSearchParams(window.location.search).get("cat");null!==t&&(e=document.getElementById(t).offsetTop,window.scrollTo({top:e,behavior:"smooth"}),console.log("go!"))}}),[a,s,v,w,M,E,F,P,G,X,Y]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),a&&Object(c.jsx)(g,{title:"NETFLIX ORIGINALS",fetchData:a,cat:"netflix_originals",status:X,pageStatus:Y}),M&&Object(c.jsx)(g,{title:"MOVIES TRENDING",fetchData:M,cat:"movies_trending",status:X,pageStatus:Y}),v&&Object(c.jsx)(g,{title:"TOP RATED",fetchData:v,cat:"top_rated",status:X,pageStatus:Y}),G&&Object(c.jsx)(g,{title:"ACTION MOVIES",fetchData:G,cat:"action_movies",status:X,pageStatus:Y}),w&&Object(c.jsx)(g,{title:"ROMANCE MOVIES",fetchData:w,cat:"romance_movies",status:X,pageStatus:Y}),s&&Object(c.jsx)(g,{title:"TRENDING NOW",fetchData:s,cat:"trending",status:X,pageStatus:Y}),P&&Object(c.jsx)(g,{title:"COMEDY MOVIES",fetchData:P,cat:"comedy_movies",status:X,pageStatus:Y}),E&&Object(c.jsx)(g,{title:"HORROR MOVIES",fetchData:E,cat:"horror_movies",status:X,pageStatus:Y}),F&&Object(c.jsx)(g,{title:"DOCUMENTARIES",fetchData:F,cat:"documentaries",status:X,pageStatus:Y})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),o(e),i(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),M()},5:function(e,t,a){e.exports={btn:"Hero_btn__btJF6",hero:"Hero_hero__-8uLS",backgroundPosition:"Hero_backgroundPosition__3-aQS",container:"Hero_container__28IuV",error:"Hero_error__3LUCb",mainMovieTrailler:"Hero_mainMovieTrailler__KAhXu"}},8:function(e,t,a){e.exports={btn:"Row_btn__188mJ",row:"Row_row__RSzzd",movieImage:"Row_movieImage__11wTG",traillerContainer:"Row_traillerContainer__mNal-",error:"Row_error__2NpGh"}}},[[34,1,2]]]);
//# sourceMappingURL=main.43f6779a.chunk.js.map