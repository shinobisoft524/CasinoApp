(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"4Z32":function(t,e,a){"use strict";var i=a("o0o1"),n=a.n(i),s=a("vDqi"),r=a.n(s),o=a("/rcJ"),l=a("ZXch");function u(t,e,a,i,n,s,r){try{var o=t[s](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(i,n)}var c={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var e=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:Object(l.e)(this.data[this.name],t.value);return"boolean"==typeof e?e?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,e):e},format:function(t,e){return"function"==typeof o[t]?o[t](e):e},loadData:function(){var t,e=this;return(t=n.a.mark((function t(){var a,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.data=null,t.next=3,r.a.get(e.api);case 3:a=t.sent,i=a.data,e.data=i,i[e.name]&&e.$emit("load",{data:i[e.name]});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(i,n){var s=t.apply(e,a);function r(t){u(s,i,n,r,o,"next",t)}function o(t){u(s,i,n,r,o,"throw",t)}r(void 0)}))})()}}};e.a=c},"80sQ":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.show",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.approve",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-check")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Approve")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.reject",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-cancel")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)},n=[]},SEsc:function(t,e,a){"use strict";e.a={props:["id","small"]}},hzom:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[t._l(t.headers,(function(e){return a("tr",{key:e.value},[a("td",[t._v(t._s(e.text))]),t._v(" "),a("td",{staticClass:"text-right"},[t.data?t._t(e.value,[t._v("\n            "+t._s(t.value(e))+"\n          ")],{item:t.data[t.name]}):a("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})},n=[]},vpHb:function(t,e,a){"use strict";a.r(e);var i=a("TSrn"),n=a("har0"),s={middleware:["auth","verified","2fa_passed","admin"],components:{KeyValueTable:i.a,AffiliateCommissionMenu:n.a},props:["id"],metaInfo:function(){return{title:this.$t("Affiliate commission {0}",[this.id])}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("User"),value:"user"},{text:this.$t("Referral"),value:"referral"},{text:this.$t("Tier"),value:"tier"},{text:this.$t("Type"),value:"type"},{text:this.$t("Status"),value:"status"},{text:this.$t("Amount"),value:"amount",format:"decimal"},{text:this.$t("IP"),value:"ip"},{text:this.$t("Created at"),value:"created_at"},{text:this.$t("Updated at"),value:"updated_at"}]}},methods:{getStatusClass:function(t){return 1===t.status?"green--text":2===t.status?"error--text":void 0}}},r=a("KHd+"),o=a("ZUTo"),l=a.n(o),u=a("gzZi"),c=a("sK+t"),m=a("mdmw"),v=a("Yq0q"),d=a("pSOK"),f=a("Ey0z"),p=a("D9m0"),_=a("L6Q5"),h=a("cdmR"),y=a("Kn9U"),x=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),a("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Affiliate commission {0}",[t.id]))+"\n          ")]),t._v(" "),a("v-spacer"),t._v(" "),a("affiliate-commission-menu",{attrs:{id:t.id}})],1),t._v(" "),a("v-card-text",[a("key-value-table",{attrs:{name:"commission",api:"/api/admin/affiliate/commissions/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"user",fn:function(e){var i=e.item.account.user;return[a("router-link",{attrs:{to:{name:"admin.users.show",params:{id:i.id}}}},[t._v(t._s(i.name))])]}},{key:"referral",fn:function(e){var i=e.item.referral_account.user;return[a("router-link",{attrs:{to:{name:"admin.users.show",params:{id:i.id}}}},[t._v(t._s(i.name))])]}},{key:"type",fn:function(e){var a=e.item;return[t._v("\n              "+t._s(a.title)+" ("+t._s(a.commissionable.title||a.commissionable_type.replace("App\\Models\\",""))+" #"+t._s(a.commissionable.id)+")\n            ")]}},{key:"status",fn:function(e){var i=e.item;return[a("span",{class:t.getStatusClass(i)},[t._v(t._s(i.status_title))])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports;l()(x,{VBtn:u.a,VCard:c.a,VCardText:m.c,VCol:v.a,VContainer:d.a,VIcon:f.a,VRow:p.a,VSpacer:_.a,VToolbar:h.a,VToolbarTitle:y.a})}}]);
//# sourceMappingURL=admin-affiliate-commissions-show.js.map