(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42c421b0"],{1148:function(e,t,s){"use strict";var n=s("da84"),r=s("5926"),a=s("577e"),i=s("1d80"),c=n.RangeError;e.exports=function(e){var t=a(i(this)),s="",n=r(e);if(n<0||n==1/0)throw c("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(s+=t);return s}},"46eb":function(e,t,s){},"5d58":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navPage iBg"},[s("navbar"),s("div",{staticClass:"row pt-5"},[s("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4"},[s("div",{staticClass:"col-24 text-bold pb-3"},[e._v("查询")]),s("div",{staticClass:"col-24 left pb-1 pt-3 row"},[s("div",{staticClass:"flex-1",staticStyle:{overflow:"hidden"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.AddressInput,expression:"AddressInput"}],staticClass:"flex-1 ball-solid lh-32 radius px-2 bg-transp",attrs:{type:"text",placeholder:"请输入要查询的地址"},domProps:{value:e.AddressInput},on:{input:function(t){t.target.composing||(e.AddressInput=t.target.value)}}})]),s("div",{},[s("button",{staticClass:"btn bg-gradual-purple ml-1",on:{click:function(t){return e.search()}}},[e._v("查询")])])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("邀请人数：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.inviteCount)+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("有效邀请：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.effectiveInviteCount)+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("LP：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.fixNumber(e.order.LP))+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("静态算力：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.fixNumber(e.power.Static))+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("静态加成：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.fixNumber(e.power.StaticAddition))+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("大区：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.bigLP)+" LP ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("大区地址：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.islice(e.bigLPAddress))+" ")])]),s("div",{staticClass:"col-24 left row py-2 align-center"},[s("div",{staticClass:"col-8"},[e._v("小区：")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.smallLP)+" LP ")])])]),s("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4 mt-3"},[s("div",{staticClass:"col-24 left py-1"},[e._v("父级递归：")]),e._l(e.inviteAddress,(function(t,n){return s("div",{key:n,staticClass:"col-24 left py-2"},[e._v(e._s(n+1)+" - "+e._s(t))])}))],2),s("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4 mt-3"},[s("div",{staticClass:"col-24 left py-1"},[e._v("给上级的动态奖励：")]),e._l(e.stakeRewards,(function(t,n){return s("div",{key:n,staticClass:"col-24 left py-2"},[e._v(e._s(n+1)+" - "+e._s(t))])}))],2),s("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4 mt-3"},[s("div",{staticClass:"col-24 left py-1"},[e._v("我的直推：")]),e._l(e.ztAddress,(function(t,n){return s("div",{key:n,staticClass:"col-24 left py-2"},[e._v(e._s(n+1)+" - "+e._s(t))])}))],2)])],1)},r=[],a=s("3835"),i=s("1da1"),c=(s("b680"),s("d3b7"),s("ac1f"),s("1276"),s("5319"),s("96cf"),s("fa7d")),o=s("c030"),u=s("780e"),d=s("d399"),l=s("403a"),f=s("9d8d"),v={components:{navbar:f["a"]},data:function(){return{myAddress:"",AddressInput:"",contractAddress:"0xabefCB5BcD2C1386efC237F6a418425689645Ebe",masTokenAddress:"0x625988B572332B73d0C08CB4CDCB74E21d64066E",uTokenAddress:"0x55d398326f99059ff775485246999027b3197955",decimals:18,config:l["a"],teamLP:0,bigLP:0,bigLPAddress:"",smallLP:0,level:0,gasLimit:382040,inviteCount:0,effectiveInviteCount:0,inviteAddress:[],stakeRewards:[],ztAddress:[],order:{USDT:0,Mas:0,LP:0,BasePower:0,FirstStake:0,Duration:0,Finish:0,LastUpdateTime:0,AddupBrunRatio:0,AddupBrun:0,Rewards:0},power:{Static:0,StaticAddition:0,Dynamic:0,DynamicBoost:0},min_gasprice:1}},mixins:[c["b"],c["c"],c["d"],c["e"],c["a"]],created:function(){this.init()},methods:{init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n,r,i,c,d,l,f,v,p,b,x,g,m,h,w,C,_,R,k,A,O,j,P,y,L,I,N,B,S,E,F;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=e.signer&&""!=e.AddressInput){t.next=2;break}return t.abrupt("return");case 2:return e.bus.$emit("loading",!0),t.next=5,e.provider.getGasPrice();case 5:return s=t.sent,s=o["a"].utils.formatUnits(s,"gwei"),s>e.min_gasprice&&(e.min_gasprice=s),n=new o["a"].Contract(e.contractAddress,u["a"],e.signer),e.contract=n,t.next=12,e.to(e.contract.inviteCount(e.AddressInput));case 12:if(r=t.sent,i=Object(a["a"])(r,2),c=i[0],d=i[1],!e.doResponse(c,d)){t.next=39;break}e.inviteCount=d,l=0;case 19:if(!(l<d)){t.next=39;break}return t.next=22,e.to(e.contract.myInvite(e.AddressInput,l));case 22:if(f=t.sent,v=Object(a["a"])(f,2),p=v[0],b=v[1],!e.doResponse(p,b)){t.next=36;break}return x={},t.next=30,e.to(e.contract._order2(b));case 30:g=t.sent,m=Object(a["a"])(g,2),h=m[0],w=m[1],e.doResponse(h,w)&&(x=w),e.ztAddress.push(e.islice(b)+",LP:"+e.fixNumber(x.LP));case 36:l++,t.next=19;break;case 39:return t.next=41,e.getinvite(e.AddressInput);case 41:return t.next=43,e.to(e.contract.getEffectiveInviteCount(e.AddressInput));case 43:return C=t.sent,_=Object(a["a"])(C,2),R=_[0],k=_[1],e.doResponse(R,k)&&(e.effectiveInviteCount=k),t.next=50,e.to(e.contract.getBig(e.AddressInput));case 50:return A=t.sent,O=Object(a["a"])(A,2),j=O[0],P=O[1],e.doResponse(j,P)&&(j||(e.teamLP=e.fixNumber(P[0]),e.bigLP=e.fixNumber(P[1]),e.smallLP=e.teamLP-e.bigLP,e.bigLPAddress=P[2])),t.next=57,e.to(e.contract._order2(e.AddressInput));case 57:return y=t.sent,L=Object(a["a"])(y,2),I=L[0],N=L[1],e.doResponse(I,N)&&(e.order=N),t.next=64,e.to(e.contract._power2(e.AddressInput));case 64:return B=t.sent,S=Object(a["a"])(B,2),E=S[0],F=S[1],e.doResponse(E,F)&&(e.power=F),t.next=71,e.getStakeBonus(e.AddressInput);case 71:e.bus.$emit("loading",!1);case 72:case"end":return t.stop()}}),t)})))()},search:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.inviteAddress=[],e.stakeRewards=[],e.ztAddress=[],e.init();case 4:case"end":return t.stop()}}),t)})))()},getinvite:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,r,i,c,o,u,d,l,f,v,p,b,x,g,m,h,w,C,_,R,k,A,O,j,P,y,L,I,N,B,S,E,F,D;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.to(t.contract.invite(e));case 2:if(n=s.sent,r=Object(a["a"])(n,2),i=r[0],c=r[1],!t.doResponse(i,c)){s.next=59;break}if("0x0000000000000000000000000000000000000000"==c){s.next=59;break}return o=!1,s.next=11,t.to(t.contract.isEffective(c));case 11:return u=s.sent,d=Object(a["a"])(u,2),l=d[0],f=d[1],t.doResponse(l,f)&&(o=f),v=0,s.next=19,t.to(t.contract.getEffectiveInviteCount(c));case 19:return p=s.sent,b=Object(a["a"])(p,2),x=b[0],g=b[1],t.doResponse(x,g)&&(v=g),m=0,s.next=27,t.to(t.contract._teamLP(c));case 27:return h=s.sent,w=Object(a["a"])(h,2),C=w[0],_=w[1],t.doResponse(C,_)&&(m=t.fixNumber(_)),R={},s.next=35,t.to(t.contract._power2(c));case 35:return k=s.sent,A=Object(a["a"])(k,2),O=A[0],j=A[1],t.doResponse(O,j)&&(R=j),P={},s.next=43,t.to(t.contract._order2(c));case 43:return y=s.sent,L=Object(a["a"])(y,2),I=L[0],N=L[1],t.doResponse(I,N)&&(P=N),B="",s.next=51,t.to(t.contract.getBig(c));case 51:return S=s.sent,E=Object(a["a"])(S,2),F=E[0],D=E[1],t.doResponse(F,D)&&(F||(B=t.fixNumber(D[1]))),t.inviteAddress.push(t.islice(c)+" "+(o?"√":"")+"(邀请:"+v+",团队LP:"+m.toFixed(3)+",大区LP:"+B.toFixed(3)+",算力:"+t.fixNumber(R.Static).toFixed(3)+",动态:"+t.fixNumber(R.Dynamic).toFixed(3)+","+R.DynamicBoost+"倍,Mas:"+t.fixNumber(P.Mas).toFixed(3)+",LP:"+t.fixNumber(P.LP).toFixed(3)+","+P.Duration+"天)"),s.next=59,t.getinvite(c);case 59:case"end":return s.stop()}}),s)})))()},getStakeBonus:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,r,i,c,o,u,d,l,f,v,p,b,x,g,m;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.to(t.contract._stakeRewardsCount2(e));case 2:if(n=s.sent,r=Object(a["a"])(n,2),i=r[0],c=r[1],!t.doResponse(i,c)){s.next=29;break}o=0;case 8:if(!(o<c)){s.next=29;break}return u="",s.next=12,t.to(t.contract._stakeRewardsAddress2(e,o));case 12:return d=s.sent,l=Object(a["a"])(d,2),f=l[0],v=l[1],t.doResponse(f,v)&&(u=v),p=0,s.next=20,t.to(t.contract._stakeRewardsPower2(e,o));case 20:b=s.sent,x=Object(a["a"])(b,2),g=x[0],m=x[1],t.doResponse(g,m)&&(p=t.fixNumber(m)),t.stakeRewards.push(t.islice(u)+"  获得算力:"+p);case 26:o++,s.next=8;break;case 29:case"end":return s.stop()}}),s)})))()},queryTransation:function(e,t,s){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.provider.waitForTransaction(e).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(d["a"])(n.$t("blockSuccess"),t),console.log(t),s&&s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()},fixNumber:function(e){if(0==e)return 0;var t=o["a"].utils.hexValue(e);return this.hex2int(t)/o["a"].BigNumber.from(10).pow(this.decimals)},hex2int:function(e){e.indexOf("0x")>=0&&(e=e.substring("2"));for(var t,s=e.length,n=new Array(s),r=0;r<s;r++)t=e.charCodeAt(r),48<=t&&t<58?t-=48:t=(223&t)-65+10,n[r]=t;return n.reduce((function(e,t){return e=16*e+t,e}),0)},doResponse:function(e,t,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18;if(null==e){if(s){var r=o["a"].utils.hexValue(t),a=this.hex2int(r)/o["a"].BigNumber.from(10).pow(n);this[s]=a}return!0}try{"UNPREDICTABLE_GAS_LIMIT"===e.code?Object(d["a"])("错误:"+e.error):"INSUFFICIENT_FUNDS"===e.code?Object(d["a"])("矿工费不足"):4001===e.code||"cancelled"===e?Object(d["a"])("交易取消"):e.data.message.indexOf("gas")>0?Object(d["a"])("矿工费不足"):e.data.message.indexOf("RPC")>0?Object(d["a"])("节点异常，请切换节点"):e.data.message.indexOf("reverted")>0&&Object(d["a"])("错误:"+e.data.message)}catch(i){}return!1},getEstimateGas:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,r,i,u,d,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.to(e());case 2:if(n=s.sent,r=Object(a["a"])(n,2),i=r[0],u=r[1],!t.doResponse(i,u)){s.next=13;break}return d=o["a"].utils.hexValue(u),l=t.hex2int(d),console.log("getEstimateGas========",l),s.abrupt("return",String(c["a"].mul(l,1.5)).split(".")[0]);case 13:return s.abrupt("return",0);case 14:case"end":return s.stop()}}),s)})))()},copyShareLink:function(e){var t=(window.location.href||"").split("#")[0],s=t.replace("?utm_source=tokenpocket","")+"#/home?address="+e;this.h5Copy(s)},changeEx:function(e){this.Expand=e},tabSelect:function(e){this.tabCur=e},modal:function(e){this.page1=e},hide:function(){this.page1="NaN"},lock:function(e){this.sel=e}}},p=v,b=(s("96ef"),s("2877")),x=Object(b["a"])(p,n,r,!1,null,null,null);t["default"]=x.exports},"96ef":function(e,t,s){"use strict";s("46eb")},b680:function(e,t,s){"use strict";var n=s("23e7"),r=s("da84"),a=s("e330"),i=s("5926"),c=s("408a"),o=s("1148"),u=s("d039"),d=r.RangeError,l=r.String,f=Math.floor,v=a(o),p=a("".slice),b=a(1..toFixed),x=function(e,t,s){return 0===t?s:t%2===1?x(e,t-1,s*e):x(e*e,t/2,s)},g=function(e){var t=0,s=e;while(s>=4096)t+=12,s/=4096;while(s>=2)t+=1,s/=2;return t},m=function(e,t,s){var n=-1,r=s;while(++n<6)r+=t*e[n],e[n]=r%1e7,r=f(r/1e7)},h=function(e,t){var s=6,n=0;while(--s>=0)n+=e[s],e[s]=f(n/t),n=n%t*1e7},w=function(e){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==e[t]){var n=l(e[t]);s=""===s?n:s+v("0",7-n.length)+n}return s},C=u((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!u((function(){b({})}));n({target:"Number",proto:!0,forced:C},{toFixed:function(e){var t,s,n,r,a=c(this),o=i(e),u=[0,0,0,0,0,0],f="",b="0";if(o<0||o>20)throw d("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return l(a);if(a<0&&(f="-",a=-a),a>1e-21)if(t=g(a*x(2,69,1))-69,s=t<0?a*x(2,-t,1):a/x(2,t,1),s*=4503599627370496,t=52-t,t>0){m(u,0,s),n=o;while(n>=7)m(u,1e7,0),n-=7;m(u,x(10,n,1),0),n=t-1;while(n>=23)h(u,1<<23),n-=23;h(u,1<<n),m(u,1,1),h(u,2),b=w(u)}else m(u,0,s),m(u,1<<-t,0),b=w(u)+v("0",o);return o>0?(r=b.length,b=f+(r<=o?"0."+v("0",o-r)+b:p(b,0,r-o)+"."+p(b,r-o))):b=f+b,b}})}}]);