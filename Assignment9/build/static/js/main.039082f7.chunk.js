(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(8),a=c.n(s),i=c(3),l=c(4),o=(c(13),c(7),c(0)),r=function(e){return Object(o.jsxs)("li",{className:"list",children:[e.element,Object(o.jsxs)("span",{className:"hel me-2",children:[Object(o.jsx)("i",{onClick:function(){e.deletee(e.id)},className:"t fas fa-trash-alt"}),Object(o.jsx)("i",{onClick:function(){e.editTask(e.id)},className:"t fas fa-user-edit"}),Object(o.jsx)("i",{onClick:function(){e.moveUp(e.id)},className:"t fas fa-caret-up"}),Object(o.jsx)("i",{onClick:function(){e.moveDown(e.id)},className:"t fas fa-angle-down"})]})]})},j=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),j=Object(l.a)(a,2),d=j[0],u=j[1],b=Object(n.useState)(!1),f=Object(l.a)(b,2),O=f[0],h=f[1],m=Object(n.useState)(null),x=Object(l.a)(m,2),v=x[0],p=x[1],g=function(e){u((function(t){return t.filter((function(t,c){return c!==e}))}))},k=function(e){h(!0),s(d[e]),p(e)},N=function(e){var t=Object(i.a)(d),c=t[e];t.length>1&&e-1>=0&&(t[e]=t[e-1],t[e-1]=c),u(t),console.log("move")},C=function(e){var t=Object(i.a)(d);if(t.length>1&&e+1<t.length){var c=t[e];t[e]=t[e+1],t[e+1]=c}u(t)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-md-12 col-12 p-3 main",children:Object(o.jsxs)("div",{class:"jii container text-center",children:[Object(o.jsx)("h1",{class:"text-center m-3 head",children:"Todo List"}),Object(o.jsxs)("div",{class:"internal",children:[Object(o.jsx)("input",{type:"text",className:"form-control me-2",id:"gg",onChange:function(e){s(e.target.value)},value:c,placeholder:"Enter The Value"}),O?Object(o.jsx)("button",{className:"btn btn-outline-dark",id:"add",onClick:function(){var e=Object(i.a)(d);e[v]=c,u(e),p(null),h(!1)},children:Object(o.jsx)("i",{class:"far fa-save"})}):Object(o.jsxs)("button",{className:"btn btn-outline-dark",id:"add",onClick:function(){""!==c?(u((function(e){return[].concat(Object(i.a)(e),[c])})),s("")):alert("please enter the value \u2714\ufe0f")},children:[" ",Object(o.jsx)("i",{class:"fas fa-plus"})]}),Object(o.jsx)("div",{class:"order",children:Object(o.jsx)("ol",{class:"ul",children:d.map((function(e,t){return Object(o.jsx)(r,{element:e,id:t,deletee:g,editTask:k,moveUp:N,moveDown:C})}))})})]})]})})})})})};a.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.039082f7.chunk.js.map