(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),c=a(12),l=a(7),u=a(8),m=a(2),o=a(14),d=a(13),h=(a(20),a(21),a(9)),p=a(10);function v(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){return e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,i.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))}var f=a(4),I=a(11);f.b.add(I.a);var b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(m.a)(n)),n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.setUpdate=n.setUpdate.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(c.a)(this.state.items),[t]);console.log(a),this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"main"},i.a.createElement("header",null,"Things todo"),i.a.createElement("form",{className:"toDoForm",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Write in here!",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Add")),i.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(n.Component);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8b0a47e2.chunk.js.map