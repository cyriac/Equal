(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{225:function(e,t,n){var content=n(227);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("0f15e3b0",content,!0,{sourceMap:!1})},226:function(e,t,n){"use strict";var o=n(225);n.n(o).a},227:function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".it-box{background:#fff;border:1px solid #dfdfdf;border-radius:4px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:150px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;margin:40px 0;-webkit-box-sizing:border-box;box-sizing:border-box}.it-box-title{padding:17px 24px;line-height:1}.it-box-scene{width:100%;padding:48px 25px;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.it-box-scene>*{margin-left:15px}.it-box-code{border-bottom:1px solid #dfdfdf;border-top:1px solid #dfdfdf;-webkit-transition:all .4s;transition:all .4s;width:100%;position:relative;overflow:hidden}.it-box-code-copy{position:absolute!important;right:10px;top:10px}",""])},232:function(e,t,n){"use strict";n(53);var o=n(17),c=n(3),r=n(9),l=n(5),d=n(4),x=n(6),f=n(1),h=n(0),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).apply(this,arguments))).expandHeight="0px",e.copyText="Copy to clipboard",e.expanded=!1,e}var n;return Object(x.a)(t,e),Object(r.a)(t,[{key:"toggleExpand",value:function(){this.expandHeight="0px"===this.expandHeight?"1000px":"0px",this.expanded=!this.expanded}},{key:"clickCopy",value:(n=Object(o.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.copyText="Copied!",e.next=3,navigator.clipboard.writeText(this.code);case 3:this.$refs.tooltip.setPopoverPosition();case 4:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})}]),t}(h.f);Object(f.a)([Object(h.d)()],m.prototype,"code",void 0),Object(f.a)([Object(h.d)()],m.prototype,"title",void 0);var v=m=Object(f.a)([h.a],m),w=(n(226),n(2)),component=Object(w.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"it-box"},[n("h2",{staticClass:"it-box-title"},[e._v(e._s(e.title))]),e._v(" "),e._t("description"),e._v(" "),n("div",{staticClass:"it-box-scene"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"it-box-code",style:{"max-height":e.expandHeight}},[n("it-tooltip",{ref:"tooltip",staticClass:"it-box-code-copy",attrs:{content:e.copyText,placement:"left"}},[n("it-button",{attrs:{icon:"file_copy"},on:{click:e.clickCopy}})],1),e._v(" "),n("prism",{attrs:{language:"html"}},[e._v(e._s(e.code))])],1),e._v(" "),n("it-button",{staticStyle:{border:"none","border-radius":"0px"},attrs:{icon:"code",type:"neutral"},on:{click:e.toggleExpand}},[e._v(e._s(e.expanded?"Hide code":"Show code"))])],2)},[],!1,null,null,null);t.a=component.exports},256:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(9),r=n(5),l=n(4),d=n(6),x=n(1),f=n(0),h=n(232),m=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).apply(this,arguments))).messagesCode="<it-button @click=\"showMessage()\">Primary message</it-button>\n<it-button @click=\"showMessage('Success')\" type=\"success\">Success message</it-button>\n<it-button @click=\"showMessage('Danger')\" type=\"danger\">Danger message</it-button>\n<it-button @click=\"showMessage('Warning')\" type=\"warning\">Warning message</it-button>\n\n<script>\nexport default: {\n  methods: {\n    showMessage(type) {\n      switch (type) {\n        case 'success':\n          this.$Message.success({ text: 'Success message!' })\n          break\n        case 'danger':\n          this.$Message.danger({ text: 'Danger message!' })\n          break\n        case 'warning':\n          this.$Message.warning({ text: 'Success message!' })\n          break\n        default:\n          this.$Message({ text: 'Primary message!' })\n          break\n      }\n    }\n  }\n}\n<\/script>",e.durationCode="\n\n<it-button @click=\"$Message({duration: 4000, text: 'I have 4000ms left'})\">4000 ms</it-button>",e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"showMessage",value:function(e){switch(e){case"success":this.$Message.success({text:"Success message!"});break;case"danger":this.$Message.danger({text:"Danger message!"});break;case"warning":this.$Message.warning({text:"Success message!"});break;default:this.$Message({text:"Primary message!"})}}}]),t}(f.f),v=m=Object(x.a)([Object(f.a)({layout:"components",components:{Box:h.a}})],m),w=n(2),component=Object(w.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Message")]),e._v(" "),n("Box",{attrs:{code:e.messagesCode,title:"Message types"}},[n("it-button",{on:{click:e.showMessage}},[e._v("Primary message")]),e._v(" "),n("it-button",{attrs:{type:"success"},on:{click:function(t){return e.showMessage("success")}}},[e._v("Success message")]),e._v(" "),n("it-button",{attrs:{type:"danger"},on:{click:function(t){return e.showMessage("danger")}}},[e._v("Danger message")]),e._v(" "),n("it-button",{attrs:{type:"warning"},on:{click:function(t){return e.showMessage("warning")}}},[e._v("Warning message")])],1),e._v(" "),n("Box",{attrs:{code:e.durationCode,title:"Duration"}},[n("it-button",{on:{click:function(t){return e.$Message({duration:4e3,text:"I have 4000ms left"})}}},[e._v("4000 ms")])],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);