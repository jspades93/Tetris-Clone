(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/bg.a66d5b7e.png"},15:function(n,e,t){n.exports=t(26)},20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=(t(20),t(1)),u=t(2),l=t(3);function f(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;  \n  font-size: 1rem;\n  outline: none;\n"]);return f=function(){return n},n}var s=l.a.div(f(),(function(n){return n.gameOver?"red":"#999"})),d=function(n){var e=n.text,t=n.gameOver;return o.a.createElement(s,{gameOver:t},e)};function p(){var n=Object(u.a)(["\n    box-sizing: border-box;\n    margin: 0 0 20px 0;\n    padding: 20px\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    border: none;\n    color: white;\n    background: #333;\n    font-family: Pixel, Arial, Helvetica, sans-seriff;\n    font-size: 1rem;\n    outline: none;\n    cursor: pointer;\n"]);return p=function(){return n},n}var b=l.a.button(p()),h=function(n){var e=n.callback;return o.a.createElement(b,{onClick:e},"Start Button")};function v(){var n=Object(u.a)(["\n    width: auto;\n    background: rgba(",", 0.8);\n    border: ",";\n    border-bottom-color: rgba(",", 0.1);\n    border-right-color: rgba(",", 1);\n    border-top-color: rgba(",", 1);\n    border-left-color: rgba(",", 0.3);\n"]);return v=function(){return n},n}var m=l.a.div(v(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),x={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 221, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},g=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return x[n]},O=o.a.memo((function(n){var e=n.type;return o.a.createElement(m,{type:e,color:x[e].color})}));function y(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-rows: repeat(\n        ",",\n        calc(25vw / ",")\n    );\n    grid-template-columns: repeat(",", 1fr);\n    grid-gap: 1px;\n    border: 2px solid #333;\n    width: 100%;\n    max-width: 25vw;\n    background: #111;\n\n "]);return y=function(){return n},n}var j=l.a.div(y(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),w=function(n){var e=n.stage;return o.a.createElement(j,{width:e[0].length,height:e.length},e.map((function(n){return n.map((function(n,e){return o.a.createElement(O,{key:e,type:n[0]})}))})))},E=t(11),k=t.n(E);function S(){var n=Object(u.a)(["\n    display: flex;\n    align-items: flex-start;\n    padding: 40px;\n    margin: 0 auto;\n    max-width: 900px;\n\n    aside {\n        width: 100%;\n        max-width: 200px;\n        display: block;\n        padding: 0 20px;\n    }\n\n\n"]);return S=function(){return n},n}function I(){var n=Object(u.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: url(",") #000;\n    backgroud-size: cover;\n    overflow: hidden;  \n"]);return I=function(){return n},n}var J=l.a.div(I(),k.a),L=l.a.div(S()),A=t(12),T=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},Z=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tech.length;a+=1)for(var c=0;c<n.tech[a].length;c+=1)if(0!==n.tech[a][c]&&(!e[a+n.position.y+o]||!e[a+n.position.y+o][c+n.position.x+r]||"clear"!==e[a+n.position.y+o][c+n.position.x+r][1]))return!0},z=function(n,e){var t=Object(r.useState)(T()),o=Object(i.a)(t,2),a=o[0],c=o[1],u=Object(r.useState)(0),l=Object(i.a)(u,2),f=l[0],s=l[1];return Object(r.useEffect)((function(){s(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tech.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.position.y][o+n.position.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(s((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[a,c,f]};var C=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),u=Object(i.a)(c,2),l=u[0],f=u[1],s=function(){var n=Object(r.useState)({position:{x:0,y:0},tech:x[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(r.useCallback)((function(){o({position:{x:4,y:0},tech:g().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o((function(n){return Object(A.a)({},n,{position:{x:n.position.x+=e,y:n.position.y+=t},collided:r})}))},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tech=a(r.tech,e);for(var c=r.position.x,i=1;Z(r,n,{x:0,y:0});)if(r.position.x+=i,(i=-(i+(i>0?1:-1)))>r.tech[0].length)return a(r.tech,-e),void(r.position.x=c);o(r)}]}(),p=Object(i.a)(s,4),b=p[0],v=p[1],m=p[2],O=p[3],y=z(b,m),j=Object(i.a)(y,3),E=j[0],k=j[1],S=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],h=[40,100,300,1200],v=Object(r.useCallback)((function(){n>0&&(a((function(e){return e+h[n-1]*(p+1)})),f((function(e){return e+n})))}),[p,h,n]);return Object(r.useEffect)((function(){v()}),[v,n,o]),[o,a,l,f,p,b]}(j[2]),I=Object(i.a)(S,6),C=I[0],B=I[1],K=I[2],N=I[3],G=I[4],H=I[5],M=function(n){Z(b,E,{x:n,y:0})||v({x:n,y:0})},P=function(){K>10*(G+1)&&(H((function(n){return n+1})),a(500/(G+1)+200)),Z(b,E,{x:0,y:1})?(b.position.y<1&&(console.log("Game Over!!!"),f(!0),a(null)),v({x:0,y:0,collided:!0})):v({x:0,y:1,collided:!1})},R=function(n){var e=n.keyCode;l||(37===e?M(-1):39===e?M(1):40===e?(a(null),P()):38===e&&O(E,1))};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){P()}),t),o.a.createElement(J,{role:"buttton",tabIndex:"0",onKeyDown:function(n){return R(n)},onKeyUp:function(n){var e=n.keyCode;l||40===e&&a(500/(G+1)+200)}},o.a.createElement(L,null,o.a.createElement(w,{stage:E}),o.a.createElement("aside",null,l?o.a.createElement(d,{gameOver:l,text:"Game Over Kiddo"}):o.a.createElement("div",null,o.a.createElement(d,{text:"Score: ".concat(C)}),o.a.createElement(d,{text:"Rows: ".concat(K)}),o.a.createElement(d,{text:"Level: ".concat(G)}))),o.a.createElement(h,{callback:function(){k(T()),a(500),m(),B(0),H(0),N(0),f(!1)}})))},B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.17b84ffd.chunk.js.map