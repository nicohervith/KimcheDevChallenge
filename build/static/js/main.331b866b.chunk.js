(this.webpackJsonpkimchechallenge=this.webpackJsonpkimchechallenge||[]).push([[0],{38:function(e,n,t){e.exports=t(48)},43:function(e,n,t){},44:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a,c=t(1),l=t.n(c),r=t(31),o=t.n(r),i=(t(43),t(44),t(25)),u=t(11),m=t(32),s=t(26),E=t(30),d=Object(E.a)(a||(a=Object(m.a)(["\n  query {\n    countries {\n      name\n      code\n      native\n      capital\n      continent {\n        name\n      }\n      languages {\n        code\n        name\n        native\n      }\n      emoji\n      emojiU\n      states {\n        name\n      }\n    }\n  }\n"]))),v=t(22),h=function(e){return l.a.createElement("div",null,0===e.country.length?l.a.createElement("div",{className:"container-text-card"},l.a.createElement("h4",{className:"text-container"},"Search something...",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):l.a.createElement("div",{className:"card-container"},e.country.map((function(n){return l.a.createElement("div",{className:"",key:n.code},l.a.createElement("div",{className:"card-container-box"},!0===e.continent?l.a.createElement("h2",null,n.continent.name,l.a.createElement("hr",null)):l.a.createElement("h2",null,n.languages.map((function(e){return l.a.createElement("p",{key:e.name},e.name)}))),l.a.createElement("div",null,l.a.createElement("h3",null,n.emoji," ",n.name),l.a.createElement("h4",null,n.native),!0===e.continent?l.a.createElement("ul",null,l.a.createElement("span",null,"Languages:"),n.languages.map((function(e){return l.a.createElement("li",{key:e.name},e.name)}))):l.a.createElement("p",null,"Continent:",l.a.createElement("span",null,n.continent.name)),l.a.createElement("p",null,"Capital: ",l.a.createElement("span",null,n.capital)))))}))))},b=function(e){var n=e.countries,t=Object(c.useState)([]),a=Object(v.a)(t,2),r=a[0],o=a[1],i=Object(c.useState)([]),u=Object(v.a)(i,2),m=u[0],s=u[1],E=Object(c.useState)(null),d=Object(v.a)(E,2),b=d[0],g=d[1],p=Object(c.useState)(null),f=Object(v.a)(p,2),N=f[0],j=f[1];Object(c.useEffect)((function(){null===b&&g(!0)}),[]);var y=function(e){var t=n.filter((function(n){if(n.name.toString().toLowerCase().startsWith(e.toLowerCase())&&n.name.toString().toLowerCase().includes(e.toLowerCase()))return n}));o(t)};return l.a.createElement("div",null,l.a.createElement("div",{className:"container-input",onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"input-search",placeholder:"Search",value:m,onChange:function(e){s(e.target.value),y(e.target.value)},autoFocus:!0}))),l.a.createElement("div",null,l.a.createElement("div",{className:"container-text"},l.a.createElement("h2",{className:"text-container"},"Group By: "),l.a.createElement("div",{className:"container-buttons"},l.a.createElement("button",{type:"button",className:"container-button",onClick:function(){g(!0),j(null)}},"Continent")),l.a.createElement("div",{className:"container-buttons"},l.a.createElement("button",{className:"container-button",type:"button",onClick:function(){j(!0),g(null)}},"Language")))),l.a.createElement("div",{className:"container-card"},l.a.createElement(h,{country:r,continent:b,language:N})))},g=function(){var e=Object(s.a)(d),n=e.data,t=e.loading;return l.a.createElement("div",{className:"container-main"},l.a.createElement("br",null),l.a.createElement("h1",{className:"container-title"},"Country Search"),l.a.createElement("div",{className:"container-text-title"},l.a.createElement("h2",{className:"text-container"},"Search by characters or words")),t?l.a.createElement("p",null,"Loading..."):l.a.createElement(b,{countries:null===n||void 0===n?void 0:n.countries}))},p=new i.a({uri:"https://countries.trevorblades.com/"}),f=function(){return l.a.createElement("div",{id:"mainPage"},l.a.createElement("br",null),l.a.createElement(u.a,{client:p},l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.331b866b.chunk.js.map