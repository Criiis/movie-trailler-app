(this["webpackJsonpmovie-trailler"]=this["webpackJsonpmovie-trailler"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),i=n(17),r=n.n(i),s=(n(29),n(2)),l=n(18),u=n(15),d=n(8),h=n.n(d);var f=function(e){var t=e.url;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1&rel=0"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})};function b(){var e=Object(l.a)(["\n    width: 100%;\n    padding: 0 20px;\n    .movieImage {\n        display: flex;\n        overflow-x: scroll;\n        padding: 15px 0;\n        min-height: 200px;\n        ::-webkit-scrollbar{\n            height: 10px;\n            width: 10px;\n            background: white;\n        }\n        ::-webkit-scrollbar-thumb:horizontal{\n            background: #333334;\n        }\n        img {\n            width: 200px;\n            padding: 5px;\n            transition: transform 0.2s  ;\n            &:hover {\n                transform: scale(1.05);\n            }\n        }\n    }\n    .traillerContainer {\n        width: 100%;\n\n        iframe {\n            width: 100%;\n            height: 400px;\n        }\n    }\n    .error {\n        text-align: center;\n        text-transform: uppercase;\n        font-weight: bold;\n    }\n"]);return b=function(){return e},e}var j=n(19).a.div(b());function v(e){var t=e.title,n=e.cat,o=e.fetchData,i=e.status,r=e.pageStatus,l=Object(c.useState)(""),d=Object(s.a)(l,2),b=d[0],v=d[1],p=Object(c.useState)(""),m=Object(s.a)(p,2),g=m[0],O=m[1],x=Object(c.useRef)(null),w=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=e.get("cat"),a=String(e.get("id"));if(n===t&&!0===i&&!0===r){var c=w.current,o=c.querySelector("#".concat(a));if(null!==o){var s=o.alt;h()(s,{id:!0}).then((function(e){v(e)})).catch((function(){v(""),O("unfortunately the trailler for ".concat(s," is not avaliable"))}))}c.querySelector(".movieImage").scrollTo({left:o.offsetLeft-25,behavior:"smooth"})}}),[n,i,r]),Object(a.jsxs)(j,{id:n,ref:w,children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("div",{className:"movieImage",children:o.map((function(e){return Object(a.jsx)(u.a,{children:Object(a.jsx)(u.b,{to:"?cat=".concat(n,"&id=mov_").concat(e.id,"&name=").concat(null==e.name?e.original_title:e.name),onClick:function(){!function(e){var t=x.current.offsetTop;window.scrollTo({top:t,behavior:"smooth"}),h()(null==e.name?e.original_title:e.name,{id:!0}).then((function(e){v(e),O(""),b===e&&v("")})).catch((function(t){v(""),O("unfortunately the trailler for ".concat(null==e.name?e.original_title:e.name," is not avaliable"))}))}(e)},children:Object(a.jsx)("img",{ref:x,id:"mov_".concat(e.id),src:"".concat("https://image.tmdb.org/t/p/w200/").concat(null===e.poster_path?e.backdrop_path:e.poster_path),alt:null==e.name?e.original_title:e.name},e.id)})},"".concat(e.id,"10"))}))}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"traillerContainer",children:[g&&Object(a.jsx)("p",{className:"error",children:g}),b&&Object(a.jsx)(f,{url:b})]})})]})}var p=n(4),m=n.n(p),g=n(10),O="https://api.themoviedb.org/3",x="d5f97f79b5eba255553c61fd70da79bb",w={fetchTrending:"/trending/all/week?api_key=".concat(x,"&language=en-UK"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(x,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(x,"&language=en-UK"),fetchActionMovies:"/discover/movie?api_key=".concat(x,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(x,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(x,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(x,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(x,"&with_genres=99"),fetchMoviesTrending:"/trending/movie/day?api_key=".concat(x,"&language=en-UK")},_=n(5),S=n.n(_),y=n(23);var k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),l=r[0],u=r[1],d=Object(c.useState)(""),f=Object(s.a)(d,2),b=f[0],j=f[1];return Object(c.useEffect)((function(){function e(){return(e=Object(g.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O).concat(w.fetchMoviesTrending));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,void 0===(a=n.results[Math.floor(Math.random()*n.results.length-1)])&&(a=n.results[0]),o(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){var e=function(e){27===e.keyCode&&u("")};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"".concat(S.a.hero," ").concat(S.a.backgroundPosition),style:{backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original").concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(a.jsxs)("div",{className:S.a.container,children:[Object(a.jsx)("h1",{children:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_name)}),Object(a.jsxs)("button",{onClick:function(){return function(e){h()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name),{id:!0}).then((function(e){u(e),j("")})).catch((function(){j("error"),u("")}))}(n)},children:[Object(a.jsx)(y.a,{})," Play Trailler"]}),b&&Object(a.jsx)("p",{className:S.a.error,children:"unfortunately the trailler is not avaliable"}),Object(a.jsx)("p",{children:null===n||void 0===n?void 0:n.overview})]})}),l&&Object(a.jsx)("div",{onClick:function(){u("")},className:S.a.mainMovieTrailler,children:Object(a.jsx)("div",{children:Object(a.jsx)("iframe",{title:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_name),src:"https://www.youtube.com/embed/".concat(l,"?autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),Object(a.jsx)("div",{})]})};function M(){return(M=Object(g.a)(m.a.mark((function e(t,n){var a,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O).concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,o=c.results,n(o),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("something went wrong!"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var T=function(e,t){return M.apply(this,arguments)};n(39);var E=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),r=Object(s.a)(i,2),l=r[0],u=r[1],d=Object(c.useState)([]),h=Object(s.a)(d,2),f=h[0],b=h[1],j=Object(c.useState)([]),p=Object(s.a)(j,2),m=p[0],g=p[1],O=Object(c.useState)([]),x=Object(s.a)(O,2),_=x[0],S=x[1],y=Object(c.useState)([]),M=Object(s.a)(y,2),E=M[0],I=M[1],N=Object(c.useState)([]),D=Object(s.a)(N,2),R=D[0],C=D[1],F=Object(c.useState)([]),L=Object(s.a)(F,2),P=L[0],A=L[1],H=Object(c.useState)([]),V=Object(s.a)(H,2),U=V[0],B=V[1],G=Object(c.useState)(!1),J=Object(s.a)(G,2),K=J[0],q=J[1],z=Object(c.useState)(!1),W=Object(s.a)(z,2),X=W[0],Y=W[1];return Object(c.useEffect)((function(){T("".concat(w.fetchNetflixOriginals),o),T("".concat(w.fetchActionMovies),B),T("".concat(w.fetchComedyMovies),A),T("".concat(w.fetchDocumentaries),C),T("".concat(w.fetchHorrorMovies),I),T("".concat(w.fetchMoviesTrending),S),T("".concat(w.fetchRomanceMovies),g),T("".concat(w.fetchTopRated),b),T("".concat(w.fetchTrending),u)}),[]),Object(c.useEffect)((function(){if(n.length&&l.length&&f.length&&m.length&&_.length&&E.length&&R.length&&P.length&&0!==U.length&&q(!0),window.onload=function(){Y(!0)},!0===K&&!0===X){var e=new URLSearchParams(window.location.search).get("cat");if(null!==e){var t=document.getElementById(e).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}}}),[n,l,f,m,_,E,R,P,U,K,X]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{}),n&&Object(a.jsx)(v,{title:"NETFLIX ORIGINALS",fetchData:n,cat:"netflix_originals",status:K,pageStatus:X}),_&&Object(a.jsx)(v,{title:"MOVIES TRENDING",fetchData:_,cat:"movies_trending",status:K,pageStatus:X}),f&&Object(a.jsx)(v,{title:"TOP RATED",fetchData:f,cat:"top_rated",status:K,pageStatus:X}),U&&Object(a.jsx)(v,{title:"ACTION MOVIES",fetchData:U,cat:"action_movies",status:K,pageStatus:X}),m&&Object(a.jsx)(v,{title:"ROMANCE MOVIES",fetchData:m,cat:"romance_movies",status:K,pageStatus:X}),l&&Object(a.jsx)(v,{title:"TRENDING NOW",fetchData:l,cat:"trending",status:K,pageStatus:X}),P&&Object(a.jsx)(v,{title:"COMEDY MOVIES",fetchData:P,cat:"comedy_movies",status:K,pageStatus:X}),E&&Object(a.jsx)(v,{title:"HORROR MOVIES",fetchData:E,cat:"horror_movies",status:K,pageStatus:X}),R&&Object(a.jsx)(v,{title:"DOCUMENTARIES",fetchData:R,cat:"documentaries",status:K,pageStatus:X})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),I()},5:function(e,t,n){e.exports={btn:"Hero_btn__paLVI",hero:"Hero_hero__3rPDJ",backgroundPosition:"Hero_backgroundPosition__193I0",container:"Hero_container__nuB-a",error:"Hero_error__1FVUV",mainMovieTrailler:"Hero_mainMovieTrailler__1hdAm"}}},[[40,1,2]]]);
//# sourceMappingURL=main.0a091875.chunk.js.map