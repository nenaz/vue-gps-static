(function(e){function n(n){for(var o,c,i=n[0],l=n[1],s=n[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},3929:function(e,n,t){"use strict";t("ffa4")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=t("ce5b"),a=t.n(r);t("bf40");o["default"].use(a.a);var c={},i=new a.a(c),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("v-app",[t("router-view")],1)],1)},s=[],u=(t("5c0b"),t("2877")),d={},f=Object(u["a"])(d,l,s,!1,null,null,null),p=f.exports,v=t("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=t("8c4f"),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",{attrs:{elevation:"2"},on:{click:e.wsSend}},[e._v(" Click me ")]),t("v-btn",{attrs:{elevation:"2"},on:{click:e.stopInterval}},[e._v(" Stop interval ")]),t("v-card",[t("yandex-map",{staticClass:"ymap-container",attrs:{coords:e.coords,zoom:e.mapOptions.zoom},on:{boundschange:e.handleZoom}},[t("ymap-marker",{attrs:{coords:e.coords,"marker-id":"123123","marker-type":"Placemark",icon:e.mapOptions.iconObj}})],1)],1)],1)},g=[],b=t("f5ce"),w=(t("8e27"),5e3),y=15,k={name:"MapPage",components:{yandexMap:b["a"],ymapMarker:b["b"]},data:function(){return{mapOptions:{zoom:y,iconObj:{color:"red"}},intervalId:null,drawer:!1,group:null,coords:[55.540157,37.491869],placemarks:[{coords:[54.82896654088406,39.831893822753905],properties:{balloonContentBody:"asdfd",balloonContentFooter:"1",balloonContentHeader:"1"},clusterName:"1",markerId:"1"}]}},created:function(){var e=this;this.intervalId=window.setInterval((function(){e.getCoordinates()}),w)},mounted:function(){console.log("mounted")},computed:{getSettings:function(){var e={apiKey:"",lang:"ru_RU",coordorder:"latlong",version:"2.1"};return e}},beforeDestroy:function(){this.stopInterval()},methods:{wsSend:function(){console.log("wsend"),this.socket.send("hello")},getCoordinates:function(){var e=this;console.log("getCoordinates");var n=!1;return window.navigator.geolocation.getCurrentPosition((function(t){var o=t.coords;e.coords=[o.latitude,o.longitude],n=!0}),(function(e){console.log("positionError",e)})),n},stopInterval:function(){window.clearInterval(this.intervalId)},handleZoom:function(e){console.log("value",e)}}},O=k,S=(t("3929"),Object(u["a"])(O,m,g,!1,null,null,null)),j=S.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",{attrs:{elevation:"2"},on:{click:e.handleStartClick}},[e._v("Войти")]),t("v-container",{staticClass:"px-0",attrs:{fluid:""}},[t("v-switch",{attrs:{label:"Switch 1: "+e.switch1.toString()},model:{value:e.switch1,callback:function(n){e.switch1=n},expression:"switch1"}})],1)],1)},x=[],C={name:"Start",data:function(){return{switch1:!0}},methods:{handleStartClick:function(){this.$router.push("/home")}}},P=C,I=Object(u["a"])(P,_,x,!1,null,null,null),M=I.exports;o["default"].use(h["a"]);var E=[{path:"/",name:"StartPage",component:M},{path:"/home",name:"Home",component:j}],$=new h["a"]({mode:"history",base:"/",routes:E}),N=$,z=t("2f62");o["default"].use(z["a"]);var A=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["default"].config.productionTip=!1,new o["default"]({router:N,store:A,vuetify:i,render:function(e){return e(p)}}).$mount("#app")},ffa4:function(e,n,t){}});
//# sourceMappingURL=app.8721e824.js.map