(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{221:function(e,t,o){var content=o(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("33793baa",content,!0,{sourceMap:!1})},222:function(e,t,o){"use strict";var l=o(221);o.n(l).a},223:function(e,t,o){(e.exports=o(10)(!1)).push([e.i,".it-demobox{background:#fff;border:1px solid #dfdfdf;border-radius:4px;width:100%;min-height:200px}.it-demobox,.it-demobox-scene{display:-webkit-box;display:-ms-flexbox;display:flex}.it-demobox-scene{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:5;-ms-flex:5;flex:5;overflow:scroll;overflow:hidden}.it-demobox-props{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 15px;-webkit-box-flex:2;-ms-flex:2;flex:2;border-left:1px solid #dfdfdf}.it-demobox-props>*{margin-bottom:12px}@media only screen and (max-width:600px){.it-demobox{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.it-demobox-scene{padding:20px 0}.it-demobox-props{border-top:1px solid #dfdfdf;border-left:none}}",""])},224:function(e,t,o){"use strict";var l={name:"demobox"},r=(o(222),o(2)),component=Object(r.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"it-demobox"},[t("div",{staticClass:"it-demobox-scene"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"it-demobox-props"},[t("h3",{staticStyle:{"margin-top":"0px"}},[this._v("Props")]),this._v(" "),this._t("props")],2)])},[],!1,null,null,null);t.a=component.exports},248:function(e,t,o){"use strict";o.r(t);var l=o(3),r=o(5),n=o(4),x=o(6),c=o(1),d=o(0),f=o(224),m=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(n.a)(t).apply(this,arguments))).textareaPlaceholder="Your text goes here",e.textareaResizable=!1,e.textareaPulse=!1,e.textareaDisabled=!1,e.textareaValue="",e}return Object(x.a)(t,e),t}(d.f),h=m=Object(c.a)([Object(d.a)({layout:"components",components:{Demobox:f.a}})],m),v=o(2),component=Object(v.a)(h,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Textarea")]),e._v(" "),o("Demobox",[o("it-textarea",{attrs:{resizable:e.textareaResizable,disabled:e.textareaDisabled,placeholder:e.textareaPlaceholder},model:{value:e.textareaValue,callback:function(t){e.textareaValue=t},expression:"textareaValue"}}),e._v(" "),o("template",{slot:"props"},[o("it-input",{attrs:{labelTop:"Tag text"},model:{value:e.textareaPlaceholder,callback:function(t){e.textareaPlaceholder=t},expression:"textareaPlaceholder"}}),e._v(" "),o("it-checkbox",{attrs:{label:"Resizable"},model:{value:e.textareaResizable,callback:function(t){e.textareaResizable=t},expression:"textareaResizable"}}),e._v(" "),o("it-checkbox",{attrs:{label:"Disabled"},model:{value:e.textareaDisabled,callback:function(t){e.textareaDisabled=t},expression:"textareaDisabled"}})],1)],2)],1)},[],!1,null,null,null);t.default=component.exports}}]);