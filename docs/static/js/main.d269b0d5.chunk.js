(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a,o,r,i,c,l,s,u,d,h,f=n(0),p=n.n(f),b=n(11),m=n.n(b),g=(n(29),n(10)),v=n(13),w=n(7),k=(n(18),n(9)),O=n(12),j=n(17),y=n(14),E=n(16),T=n(2),A=n(15),C=(n(31),a=function e(t){Object(k.a)(this,e),this.id=Math.random(),Object(g.a)(this,"title",o,this),Object(g.a)(this,"finished",r,this),this.title=t},o=Object(w.a)(a.prototype,"title",[T.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),r=Object(w.a)(a.prototype,"finished",[T.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a),z=(i=function(){function e(){Object(k.a)(this,e),Object(g.a)(this,"todos",c,this)}return Object(O.a)(e,[{key:"addTodo",value:function(e){this.todos.push(new C(e))}},{key:"size",get:function(){return this.todos.length}},{key:"numRemaining",get:function(){return this.todos.filter(function(e){return!e.finished}).length}}]),e}(),c=Object(w.a)(i.prototype,"todos",[T.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(w.a)(i.prototype,"size",[T.d],Object.getOwnPropertyDescriptor(i.prototype,"size"),i.prototype),Object(w.a)(i.prototype,"numRemaining",[T.d],Object.getOwnPropertyDescriptor(i.prototype,"numRemaining"),i.prototype),i),S=n(37),R=n(43),W=n(41),x=n(38),N=n(39),P=n(40),B=n(42),L=Object(A.a)(l=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.todoStore;return p.a.createElement("div",null,e.todos.map(function(e,t){return p.a.createElement(U,{todo:e,key:"".concat(e.id,"_").concat(t)})}),"#Tasks: ",e.numRemaining," / ",e.size)}}]),t}(p.a.Component))||l,U=Object(A.a)(s=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.todo;return p.a.createElement("div",null,p.a.createElement(S.a,{className:"mb-3"},p.a.createElement(S.a.Prepend,null,p.a.createElement(S.a.Checkbox,{"aria-label":"Is todo completed",checked:e.finished,onChange:function(){return e.finished=!e.finished}})),p.a.createElement(R.a,{"aria-label":"Todo task title",disabled:e.finished,value:e.title,onChange:function(t){return e.title=t.currentTarget.value}})))}}]),t}(f.Component))||s,D=Object(A.a)((d=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o))),Object(g.a)(n,"task",h,Object(v.a)(n)),n.handleTaskChange=function(e){var t=e.currentTarget.value;n.task=t},n.handleAddTodo=function(){n.props.todoStore.addTodo(n.task),n.task=""},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement(S.a,{className:"mb-3"},p.a.createElement(R.a,{placeholder:"Add new task","aria-label":"Add new task","aria-describedby":"basic-addon2",value:this.task,onChange:function(t){return e.task=t.currentTarget.value}}),p.a.createElement(S.a.Append,null,p.a.createElement(W.a,{variant:"outline-secondary",onClick:this.handleAddTodo},"Add"))))}}]),t}(p.a.Component),h=Object(w.a)(d.prototype,"task",[T.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=d))||u,I=new z,J=function(){return p.a.createElement(x.a,{className:"App"},p.a.createElement(N.a,null,p.a.createElement(P.a,null,p.a.createElement(B.a,null,p.a.createElement(B.a.Body,null,p.a.createElement(B.a.Title,null,"Simple Todo List"),p.a.createElement(B.a.Text,null,"Feel free to add as many items as you like! :)"),p.a.createElement(N.a,null,p.a.createElement(P.a,null,p.a.createElement(D,{todoStore:I}))),p.a.createElement(N.a,null,p.a.createElement(P.a,null,p.a.createElement(L,{todoStore:I}))))))))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}m.a.render(p.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mobx-react-todo-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/mobx-react-todo-app","/service-worker.js");F?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):M(t,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.d269b0d5.chunk.js.map