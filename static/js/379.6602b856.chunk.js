"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{821:function(t,e,n){n.d(e,{Bt:function(){return _},Me:function(){return o},Xd:function(){return l},nE:function(){return h},z1:function(){return g}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="https://api.themoviedb.org/3",s="963109e7e79ebe88fb21387185fe2d50";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),t.next=3,u.Z.get("".concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},379:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(439),a=n(791),c=n(87),u=n(689),i=n(821),s="Home_list__title__frXqi",o="Home_film_list__C57bp",p="Home_list__item_title__RpKWu",l="Home_list__item__vTeOw",f=n(184);function h(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],h=e[1],m=(0,u.TH)();return(0,a.useEffect)((function(){n.length<1&&(0,i.nE)().then((function(t){return h(t.data.results)}))}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:s,children:"Most popular movies of the last day"}),(0,f.jsx)("ul",{className:o,children:n.map((function(t){return(0,f.jsx)(c.rU,{state:{from:m},to:"/movies/".concat(t.id),children:(0,f.jsxs)("li",{className:l,children:[(0,f.jsx)("p",{className:p,children:t.title}),(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:"detailMovie.original_title",width:250,height:350})]})},t.id)}))})]})}}}]);
//# sourceMappingURL=379.6602b856.chunk.js.map