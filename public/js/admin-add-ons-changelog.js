(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4rk/":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".pre-wrap[data-v-638c1ba4] {\n  white-space: pre-wrap;\n}",""])},"7NXi":function(t,a,n){var r=n("4rk/");"string"==typeof r&&(r=[[t.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,e);r.locals&&(t.exports=r.locals)},"A/ri":function(t,a,n){"use strict";n.r(a);var r=n("o0o1"),e=n.n(r),o=n("vDqi"),i=n.n(o);function c(t,a,n,r,e,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?a(s):Promise.resolve(s).then(r,e)}var s={middleware:["auth","verified","2fa_passed","admin"],components:{Preloader:n("Rc+0").a},props:["id"],metaInfo:function(){return{title:this.$t("Changelog {0} add-on",[this.id])}},data:function(){return{data:null}},created:function(){var t,a=this;return(t=e.a.mark((function t(){var n,r;return e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/admin/add-ons/".concat(a.id,"/changelog"));case 2:n=t.sent,r=n.data,a.data=r.changelog;case 5:case"end":return t.stop()}}),t)})),function(){var a=this,n=arguments;return new Promise((function(r,e){var o=t.apply(a,n);function i(t){c(o,r,e,i,s,"next",t)}function s(t){c(o,r,e,i,s,"throw",t)}i(void 0)}))})()}},d=(n("r2wg"),n("KHd+")),l=n("ZUTo"),v=n.n(l),u=n("gzZi"),p=n("sK+t"),f=n("mdmw"),w=n("Yq0q"),h=n("pSOK"),m=n("Ey0z"),g=n("D9m0"),_=n("MSko"),b=n("cdmR"),k=n("Kn9U"),V=Object(d.a)(s,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Changelog {0} add-on",[t.id]))+"\n          ")]),t._v(" "),n("preloader",{attrs:{active:!t.data}})],1),t._v(" "),n("v-card-text",[t.data?n("pre",{staticClass:"pre-wrap"},[t._v(t._s(t.data))]):[n("v-skeleton-loader",{attrs:{type:"article"}}),t._v(" "),n("v-skeleton-loader",{attrs:{type:"list-item-two-line"}})]],2)],1)],1)],1)],1)}),[],!1,null,"638c1ba4",null);a.default=V.exports;v()(V,{VBtn:u.a,VCard:p.a,VCardText:f.c,VCol:w.a,VContainer:h.a,VIcon:m.a,VRow:g.a,VSkeletonLoader:_.a,VToolbar:b.a,VToolbarTitle:k.a})},r2wg:function(t,a,n){"use strict";n("7NXi")}}]);
//# sourceMappingURL=admin-add-ons-changelog.js.map