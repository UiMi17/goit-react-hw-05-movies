"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{534:function(n,e,r){r.d(e,{Fg:function(){return d},p0:function(){return u}});var t,o,a,c=r(168),i=r(87),s=r(444),u=(s.ZP.h1(t||(t=(0,c.Z)(["\n  \n"]))),s.ZP.li(o||(o=(0,c.Z)(["\n  margin-bottom: 10px;\n"])))),d=(0,s.ZP)(i.Link)(a||(a=(0,c.Z)(["\n  color: #333;\n  text-decoration: none;\n  transition: color 0.3s ease;\n  &:hover {\n    color: #0077ff;\n  }\n"])))},99:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t,o,a,c=r(439),i=r(791),s=r(318),u=r(87),d=r(689),f=r(534),l=r(168),p=r(444),x=p.ZP.form(t||(t=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 10px;\n"]))),g=p.ZP.input(o||(o=(0,l.Z)(["\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-right: 10px;\n  width: 200px;\n"]))),h=p.ZP.button(a||(a=(0,l.Z)(["\n  padding: 10px;\n  background-color: #0077ff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #0066cc;\n  }\n"]))),b=r(184),m=function(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],o=(0,u.useSearchParams)(),a=(0,c.Z)(o,2),l=a[0],p=a[1],m=l.get("query"),Z=(0,d.TH)();(0,i.useEffect)((function(){m&&s.default.getMoviesByQuery(m).then((function(n){t(n.data.results)})).catch((function(n){console.log(n.message)}))}),[m]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(x,{onSubmit:function(n){n.preventDefault(),p({query:n.currentTarget.search.value}),n.currentTarget.reset()},children:[(0,b.jsx)(g,{type:"text",name:"search"}),(0,b.jsx)(h,{type:"submit",children:"Search"})]}),(0,b.jsx)("ul",{children:r.map((function(n){var e=n.id,r=n.title;return(0,b.jsx)(f.p0,{children:(0,b.jsx)(f.Fg,{to:"".concat(e),state:{from:Z},children:r})},e)}))})]})}}}]);
//# sourceMappingURL=99.96d10c9d.chunk.js.map