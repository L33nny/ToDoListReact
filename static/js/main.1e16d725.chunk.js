(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=(n(14),n(3)),c=n(4),u=n(6),d=n(5),s=n(7),m=(n(15),function(e){return o.a.createElement("div",null,o.a.createElement("ul",null,e.shopCart.map(function(t){return o.a.createElement("li",{key:t.Uid},o.a.createElement("div",null,t.Name," - ",t.Qty," - ",t.Date," -"," ",o.a.createElement("input",{type:"checkbox",name:"checkDone",onChange:e.toDoDone.bind(e,t.Uid),checked:t.Done}),o.a.createElement("button",{onClick:e.deleteToDo.bind(e,t.Uid)},"Usu\u0144")))})))}),h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date,n=t.getDate(),a=n<10?"0"+n:n,o=t.getMonth()+1,r=o<10?"0"+o:o,i=t.getFullYear(),l=t.getHours(),c=l<10?"0"+l:l,u=t.getMinutes(),d=u<10?"0"+u:u,s=t.getSeconds(),m=s<10?"0"+s:s;return e?i+"-"+r+"-"+a+"T"+c+":"+d+":"+m:i+"-"+r+"-"+a+" "+c+":"+d+":"+m},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={shopCart:[]},a.addToList=function(e,t){if(0!==e.length&&0!==t.length){var o=a.state.shopCart,r=n(16),i={};i.Uid=r(),i.Name=e,i.Qty=t,i.Date=h(),i.Done=!1,o.push(i),document.getElementById("name").value="",document.getElementById("qty").value="",a.setState({shopCart:o})}},a.deleteToDo=function(e){var t=a.state.shopCart;t=t.filter(function(t){return t.Uid!==e}),a.setState({shopCart:t})},a.toDoDone=function(e){var t=a.state.shopCart,n=t.find(function(t){return t.Uid===e});n.Done=!n.Done,a.setState({shopCart:t})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",{id:"name"}),o.a.createElement("br",null),o.a.createElement("input",{type:"number",id:"qty"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return e.addToList(document.getElementById("name").value,document.getElementById("qty").value)}},"Dodaj do listy")),o.a.createElement(m,{shopCart:this.state.shopCart,deleteToDo:this.deleteToDo,toDoDone:this.toDoDone}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e16d725.chunk.js.map