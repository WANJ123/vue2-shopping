"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[899],{3899:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",clearable:""},scopedSlots:t._u([{key:"action",fn:function(){return[s("div",{on:{click:function(s){return t.goSearch(t.search)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.search,callback:function(s){t.search=s},expression:"search"}}),t.history.length>0?s("div",{staticClass:"search-history"},[s("div",{staticClass:"title"},[s("span",[t._v("最近搜索")]),s("van-icon",{attrs:{name:"delete-o",size:"16"},on:{click:t.removeHistory}})],1),s("div",{staticClass:"list"},t._l(t.history,(function(e){return s("div",{key:e,staticClass:"list-item",on:{click:function(s){return t.goSearch(e)}}},[t._v(t._s(e))])})),0)]):t._e()],1)},i=[],a=(e(4114),e(2272)),n={name:"SearchIndex",data(){return{search:"",history:(0,a.Lf)()}},methods:{goSearch(t){const s=this.history.indexOf(t);-1!==s&&this.history.splice(s,1),this.history.unshift(t),this.search="",(0,a.NG)(this.history),this.$router.push(`/searchlist?search=${t}`)},removeHistory(){this.history=[]}}},c=n,o=e(1656),h=(0,o.A)(c,r,i,!1,null,"4a49489b",null),l=h.exports}}]);
//# sourceMappingURL=899.cdbd20b5.js.map