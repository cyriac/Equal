exports.ids=[14],exports.modules={115:function(e,t,o){"use strict";o.r(t);var l=o(1),r=o(81),n=o(0);let d=class extends n.Vue{constructor(){super(...arguments),this.sliderValue=14,this.sliderMin=0,this.sliderMax=42,this.sliderStep=1,this.sliderStepPoints=!1,this.sliderDisabled=!1}};var c=d=Object(l.__decorate)([Object(n.Component)({layout:"components",components:{Demobox:r.a}})],d),x=o(2);var component=Object(x.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._ssrNode("<h1>Slider</h1> "),o("Demobox",[o("div",{staticStyle:{width:"70%"}},[o("it-slider",{attrs:{stepPoints:e.sliderStepPoints,disabled:e.sliderDisabled,min:e.sliderMin,max:e.sliderMax,step:e.sliderStep},model:{value:e.sliderValue,callback:function(t){e.sliderValue=t},expression:"sliderValue"}})],1),e._v(" "),o("template",{slot:"props"},[o("it-number-input",{attrs:{labelTop:"Min"},model:{value:e.sliderMin,callback:function(t){e.sliderMin=t},expression:"sliderMin"}}),e._v(" "),o("it-number-input",{attrs:{labelTop:"Max"},model:{value:e.sliderMax,callback:function(t){e.sliderMax=t},expression:"sliderMax"}}),e._v(" "),o("it-number-input",{attrs:{labelTop:"Step"},model:{value:e.sliderStep,callback:function(t){e.sliderStep=t},expression:"sliderStep"}}),e._v(" "),o("it-checkbox",{attrs:{label:"Step points"},model:{value:e.sliderStepPoints,callback:function(t){e.sliderStepPoints=t},expression:"sliderStepPoints"}}),e._v(" "),o("it-checkbox",{attrs:{label:"Disabled"},model:{value:e.sliderDisabled,callback:function(t){e.sliderDisabled=t},expression:"sliderDisabled"}})],1)],2)],2)},[],!1,function(e){},null,"097361c7");t.default=component.exports},78:function(e,t,o){var content=o(80);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var l=o(5).default;e.exports.__inject__=function(e){l("33793baa",content,!0,e)}},79:function(e,t,o){"use strict";o.r(t);var l=o(78),r=o.n(l);for(var n in l)"default"!==n&&function(e){o.d(t,e,function(){return l[e]})}(n);t.default=r.a},80:function(e,t,o){(e.exports=o(4)(!1)).push([e.i,".it-demobox{background:#fff;border:1px solid #dfdfdf;border-radius:4px;width:100%;min-height:200px}.it-demobox,.it-demobox-scene{display:-webkit-box;display:-ms-flexbox;display:flex}.it-demobox-scene{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:5;-ms-flex:5;flex:5;overflow:scroll;overflow:hidden}.it-demobox-props{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 15px;-webkit-box-flex:2;-ms-flex:2;flex:2;border-left:1px solid #dfdfdf}.it-demobox-props>*{margin-bottom:12px}@media only screen and (max-width:600px){.it-demobox{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.it-demobox-scene{padding:20px 0}.it-demobox-props{border-top:1px solid #dfdfdf;border-left:none}}",""])},81:function(e,t,o){"use strict";var l={name:"demobox"},r=o(2);var component=Object(r.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"it-demobox"},[this._ssrNode('<div class="it-demobox-scene">',"</div>",[this._t("default")],2),this._ssrNode(" "),this._ssrNode('<div class="it-demobox-props">',"</div>",[this._ssrNode('<h3 style="margin-top: 0px;">Props</h3> '),this._t("props")],2)],2)},[],!1,function(e){var t=o(79);t.__inject__&&t.__inject__(e)},null,"6def95ac");t.a=component.exports}};
//# sourceMappingURL=e11f05efcf911818b9fc.js.map