(this.webpackJsonplewisweb=this.webpackJsonplewisweb||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(14),o=s.n(n),r=(s(25),s(26),s(8)),l=s(2),h=s(15),i=s(16),j=s(20),b=s(19),u=(s(27),s.p+"static/media/GithubIcon.9e3ff1f7.svg"),O=s.p+"static/media/TelegramIcon.66c2ba56.svg",m=s.p+"static/media/CubeSVG.16ff96c7.svg",d=s(1),w=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={showGithub:!1,showTelegram:!1,showProjects:!1},e.handleGithub=function(){return e.setState({showGithub:!0})},e.handleTelegram=function(){return e.setState({showTelegram:!0})},e.handleProjects=function(){return e.setState({showProjects:!0})},e.handleBoxToggleV2=function(){return e.setState({showGithub:!1,showTelegram:!1,showProjects:!1})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state.showGithub,t=this.state.showTelegram,s=this.state.showProjects;function a(e){var t=["Stop a python \ud83d\udc0d","Go to dream \ud83c\udf20","Open a window \ud83c\udf07"],s=t[Math.floor(Math.random()*t.length)];return Object(d.jsx)("h3",{className:"ChangeText",children:s})}function c(t){return e?Object(d.jsx)("span",{className:"NotifyGithub",children:"github.com/lewisforyou"}):Object(d.jsx)("span",{})}function n(e){return t?Object(d.jsx)("span",{className:"NotifyTelegram",children:"t.me/lewisdev"}):Object(d.jsx)("span",{})}function o(e){return s?Object(d.jsx)("span",{className:"NotifyProjects",children:"projects"}):Object(d.jsx)("span",{})}return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"MainBlock",children:[Object(d.jsx)("div",{className:"Logo",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"Img"})}),Object(d.jsxs)("div",{className:"TextBlock",children:[Object(d.jsxs)("h1",{className:"Header",children:["Lewis",Object(d.jsx)("span",{className:"Emoji",children:"\ud83c\udf06"})]}),Object(d.jsx)(a,{}),Object(d.jsxs)("div",{className:"Icons",children:[Object(d.jsx)("a",{href:"https://github.com/LewisForYou",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:u,alt:"githubicon",className:"Github",onMouseEnter:this.handleGithub,onMouseOut:this.handleBoxToggleV2})}),Object(d.jsx)("a",{href:"https://t.me/LewisDev",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:O,alt:"telegramicon",className:"Telegram",onMouseEnter:this.handleTelegram,onMouseOut:this.handleBoxToggleV2})}),Object(d.jsx)(r.b,{to:"/projects",children:Object(d.jsx)("img",{src:m,alt:"cubeicon",className:"Projects",onMouseEnter:this.handleProjects,onMouseOut:this.handleBoxToggleV2})})]})]}),Object(d.jsxs)("div",{className:"Notify",children:[Object(d.jsx)(c,{}),Object(d.jsx)(n,{}),Object(d.jsx)(o,{})]})]})})}}]),s}(c.a.Component),p=w,g=(s(34),s.p+"static/media/HomeIcon.91b6b16a.svg");var x=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{src:g,alt:"homeicon",className:"HomeIcon"})})})};var A=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)("div",{className:"App"}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,component:p}),Object(d.jsx)(l.a,{path:"/projects",component:x})]})]})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),a(e),c(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),G()}},[[35,1,2]]]);
//# sourceMappingURL=main.8e6783a3.chunk.js.map