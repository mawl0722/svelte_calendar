var Calendar=function(){"use strict";function t(t,e){return e[t]}function e(t,e,n){for(var o=[],i=new Date(t,e,1).getDay(),a=[],r=[31,t%100!=0&&t%4==0||t%400==0?29:28,31,30,31,30,31,31,30,31,30,31][e],c=0,l=0;l<i;l++)a.push({number:"",entries:[]});for(l=0;l<r;l++){var s=new Date(t,e,l+1),u=n.filter(function(t){return t.days.indexOf(s.toDateString())>-1});c+=u.length,a.push({number:l+1,date:s,entries:u})}for(l=0;l<a.length;l+=7)o.push(a.slice(l,l+7));for(var d=o[o.length-1],h=7-d.length,l=0;l<h;l++)d.push({number:"",entries:[]});return{weeks:o,numEntries:c}}function n(){var t=new Date(2017,9,1);return{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month:t.getMonth(),day:t.getDate(),year:t.getFullYear(),escape:!0,previousText:"Prev",nextText:"Next",calendarText:"Calendar",listText:"List",untitledText:"Untitled",emptyText:"No Events To Display",newText:"Add New",view:"calendar",defaultColor:"darkblue",showModal:!1,activeEntry:null,showNew:!1,entries:[],parsedEntries:[]}}function o(t,e,n){return t?t.length<=e?t:t.substr(0,e)+"...":n||" "}function i(){this.observe("showModal",function(t){t||(this.set({activeEntry:null}),this.refs.modalContent.innerHTML="")}),this.observe("entries",function(t){var e=t.map(function(t){if(t.hasStartTime=t.start.indexOf("T")>-1,t.startDate=new Date(Date.parse(t.start)),t.days=[t.startDate.toDateString()],t.end){t.hasEndTime=t.end.indexOf("T")>-1,t.endDate=new Date(Date.parse(t.end));var e=new Date(+t.startDate),n=new Date(+t.endDate);[e,n].forEach(function(t){t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)});for(var o=Math.round((n-e)/1e3/60/60/24),i=0;i<o;i++){var a=new Date(+t.startDate);a.setDate(a.getDate()+i+1),t.days.push(a.toDateString())}}return t});this.set({parsedEntries:e})})}function a(t){j(t,"svelte-3542641868","")}function r(){var t=L("style");t.id="svelte-3542641868-style",t.textContent='[svelte-3542641868]{font-family:Arial, Helvetica, sans-serif;box-sizing:border-box;-webkit-box-sizing:border-box;font-size:14px}#header[svelte-3542641868]{display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;margin-bottom:1rem}.title[svelte-3542641868]{font-weight:600;font-size:1.5rem}.modal-title[svelte-3542641868]{display:block;margin-bottom:2rem}table[svelte-3542641868]{width:100%;max-width:100%;border-collapse:collapse}tbody[svelte-3542641868] tr[svelte-3542641868]{height:150px}th[svelte-3542641868]{background:whitesmoke;min-width:14.25%;max-width:25%}td[svelte-3542641868]{text-align:right;vertical-align:top}th[svelte-3542641868],td[svelte-3542641868]{border:1px solid #ddd}button[svelte-3542641868]{border:1px solid #333;border-radius:3px;padding:0.3rem 0.6rem;background:white;color:black}button[svelte-3542641868]:hover{cursor:pointer;background:#ddd}button.is-active[svelte-3542641868]{background-color:#666;color:white}.event[svelte-3542641868]{display:block;background-color:darkblue;padding:0.1rem 0.3rem;width:100%;color:white;border-radius:3px;text-align:left;margin-bottom:3px;cursor:pointer}.filler[svelte-3542641868]{border:none}.time[svelte-3542641868]{text-decoration:underline}.add-new[svelte-3542641868]{background-color:whitesmoke;width:100%;padding:1rem 0;text-align:center;border:2px dashed #ccc;cursor:pointer;display:none}td[svelte-3542641868]:hover .add-new[svelte-3542641868]{display:block}.row-header[svelte-3542641868]{background-color:whitesmoke;padding:0.8rem 1rem;font-weight:600}.row-content[svelte-3542641868]{padding:0.8rem 1rem}.dot[svelte-3542641868]{display:inline-block;width:12px;height:12px;border-radius:6px}.row-entry-title[svelte-3542641868]:hover{text-decoration:underline;cursor:pointer}.row-entry-time[svelte-3542641868]{font-weight:600}.no-entries[svelte-3542641868]{text-align:center;padding:10rem 0;width:100%;background-color:whitesmoke}.modal[svelte-3542641868]{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:20}.modal.is-active[svelte-3542641868]{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background[svelte-3542641868]{bottom:0;left:0;position:absolute;right:0;top:0;background-color:rgba(10, 10, 10, 0.86)}.modal-content[svelte-3542641868],.modal-card[svelte-3542641868]{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px),\n  print{.modal-content[svelte-3542641868],.modal-card[svelte-3542641868]{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close[svelte-3542641868]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10, 10, 10, 0.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:1rem;height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px;outline:none;position:relative;vertical-align:top;background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-close[svelte-3542641868]:before,.modal-close[svelte-3542641868]:after{background-color:white;content:"";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close[svelte-3542641868]:before{height:2px;width:50%}.modal-close[svelte-3542641868]:after{height:50%;width:2px}.modal-close[svelte-3542641868]:hover,.modal-close[svelte-3542641868]:focus{background-color:rgba(10, 10, 10, 0.3)}.modal-close[svelte-3542641868]:active{background-color:rgba(10, 10, 10, 0.4)}.modal-container[svelte-3542641868]{padding:2rem;background-color:white;border-radius:3px}.event-meta[svelte-3542641868]{padding-bottom:1rem;border-bottom:1px solid #ddd;margin-bottom:1rem}',H(t,document.head)}function c(t,e){function n(t){var n=e.get();e.set({month:0===n.month?11:n.month-1,year:0===n.month?n.year-1:n.year})}function o(t){var n=e.get();e.set({month:(n.month+1)%12,year:11===n.month?n.year+1:n.year})}function i(t){e.set({view:"calendar"})}function r(t){e.set({view:"list"})}function c(t){e.set({showModal:!1})}function l(t){e.set({showModal:!1})}var s,u,d,h,f,m,v,p,g,x,b,y,w,_,k,D,T,N,S,C,M,A,O,X,I,U,W,q,G,K,Q,R,V=z(t),Z=V(t,e),$=t.activeEntry&&E(t,e);return{c:function(){s=L("div"),u=L("div"),d=L("div"),h=L("button"),f=F(t.previousText),m=F("\n      "),v=L("button"),p=F(t.nextText),g=F("\n    "),x=L("span"),b=F(t.year),y=F(" "),w=F(t.monthName),_=F("\n    "),k=L("div"),D=L("button"),N=F(t.calendarText),S=F("\n      "),C=L("button"),A=F(t.listText),O=F("\n  "),Z.c(),X=F("\n"),I=L("div"),W=L("div"),q=F("\n  "),G=L("div"),K=L("div"),$&&$.c(),Q=F("\n  "),R=L("button"),this.h()},h:function(){a(s),a(u),u.id="header",a(d),a(h),J(h,"click",n),a(v),J(v,"click",o),a(x),x.className="title",a(k),a(D),D.className=T="calendar"===t.view?"is-active":"",J(D,"click",i),a(C),C.className=M="list"===t.view?"is-active":"",J(C,"click",r),a(I),I.className=U="modal "+(t.showModal?"is-active":""),a(W),W.className="modal-background",J(W,"click",c),a(G),G.className="modal-content",a(K),K.className="modal-container",a(R),R.className="modal-close is-large",j(R,"aria-label","close"),J(R,"click",l)},m:function(t,n){Y(s,t,n),H(u,s),H(d,u),H(h,d),H(f,h),H(m,d),H(v,d),H(p,v),H(g,u),H(x,u),H(b,x),H(y,x),H(w,x),H(_,u),H(k,u),H(D,k),H(N,D),H(S,k),H(C,k),H(A,C),H(O,s),Z.m(s,null),Y(X,t,n),Y(I,t,n),H(W,I),H(q,I),H(G,I),H(K,G),e.refs.modalContent=K,$&&$.m(K,null),H(Q,I),H(R,I)},p:function(t,n){t.previousText&&(f.data=n.previousText),t.nextText&&(p.data=n.nextText),t.year&&(b.data=n.year),t.monthName&&(w.data=n.monthName),t.view&&T!==(T="calendar"===n.view?"is-active":"")&&(D.className=T),t.calendarText&&(N.data=n.calendarText),t.view&&M!==(M="list"===n.view?"is-active":"")&&(C.className=M),t.listText&&(A.data=n.listText),V===(V=z(n))&&Z?Z.p(t,n):(Z.u(),Z.d(),(Z=V(n,e)).c(),Z.m(s,null)),t.showModal&&U!==(U="modal "+(n.showModal?"is-active":""))&&(I.className=U),n.activeEntry?$?$.p(t,n):(($=E(n,e)).c(),$.m(K,null)):$&&($.u(),$.d(),$=null)},u:function(){B(s),Z.u(),B(X),B(I),$&&$.u()},d:function(){P(h,"click",n),P(v,"click",o),P(D,"click",i),P(C,"click",r),Z.d(),P(W,"click",c),e.refs.modalContent===K&&(e.refs.modalContent=null),$&&$.d(),P(R,"click",l)}}}function l(t,e,n,o,i){var r,c,l=n;return{c:function(){r=L("th"),c=F(l),this.h()},h:function(){a(r)},m:function(t,e){Y(r,t,e),H(c,r)},p:function(t,e,n,o,i){t.dayNames&&l!==(l=o)&&(c.data=l)},u:function(){B(r)},d:X}}function s(t,e,n,o,i){for(var r,c=n,l=[],s=0;s<c.length;s+=1)l[s]=u(t,e,n,o,c,c[s],s,i);return{c:function(){r=L("tr");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},h:function(){a(r)},m:function(t,e){Y(r,t,e);for(var n=0;n<l.length;n+=1)l[n].m(r,null)},p:function(t,e,n,o,a){var c=o;if(t.monthData||t.defaultColor||t.untitledText||t.showNew||t.newText){for(var s=0;s<c.length;s+=1)l[s]?l[s].p(t,e,n,o,a,c,c[s],s):(l[s]=u(e,n,o,a,c,c[s],s,i),l[s].c(),l[s].m(r,null));for(;s<l.length;s+=1)l[s].u(),l[s].d();l.length=c.length}},u:function(){B(r);for(var t=0;t<l.length;t+=1)l[t].u()},d:function(){I(l)}}}function u(t,e,n,o,i,r,c,l){for(var s,u,f,m,v,p,g=r.number,x=r.entries,b=[],y=0;y<x.length;y+=1)b[y]=d(t,e,n,o,i,r,c,x,x[y],y,l);var w=t.showNew&&h(t,e,n,o,i,r,c,l);return{c:function(){s=L("td"),f=L("span"),m=F(g),v=F("\n                ");for(var t=0;t<b.length;t+=1)b[t].c();p=F("\n                "),w&&w.c(),this.h()},h:function(){a(s),s.className=u=""===r.number?"filler":"",a(f),f.className="day-number"},m:function(t,e){Y(s,t,e),H(f,s),H(m,f),H(v,s);for(var n=0;n<b.length;n+=1)b[n].m(s,null);H(p,s),w&&w.m(s,null)},p:function(t,e,n,o,i,a,r,c){t.monthData&&u!==(u=""===r.number?"filler":"")&&(s.className=u),t.monthData&&g!==(g=r.number)&&(m.data=g);var f=r.entries;if(t.monthData||t.defaultColor||t.untitledText){for(var v=0;v<f.length;v+=1)b[v]?b[v].p(t,e,n,o,i,a,r,c,f,f[v],v):(b[v]=d(e,n,o,i,a,r,c,f,f[v],v,l),b[v].c(),b[v].m(s,p));for(;v<b.length;v+=1)b[v].u(),b[v].d();b.length=f.length}e.showNew?w?w.p(t,e,n,o,i,a,r,c):((w=h(e,n,o,i,a,r,c,l)).c(),w.m(s,null)):w&&(w.u(),w.d(),w=null)},u:function(){B(s);for(var t=0;t<b.length;t+=1)b[t].u();w&&w.u()},d:function(){I(b),w&&w.d()}}}function d(t,e,n,i,r,c,l,s,u,d,h){var f,m,v,p,g=o(u.title,30,t.untitledText);return{c:function(){f=L("span"),p=F(g),this.h()},h:function(){a(f),f.className=m="event "+(u.content?"has-content":""),U(f,"background-color",u.color||t.defaultColor),f.title=v=u.title,J(f,"click",S),f._svelte={component:h,entries:s,entry_index:d}},m:function(t,e){Y(f,t,e),H(p,f)},p:function(t,e,n,i,a,r,c,l,s,u,d){t.monthData&&m!==(m="event "+(u.content?"has-content":""))&&(f.className=m),(t.monthData||t.defaultColor)&&U(f,"background-color",u.color||e.defaultColor),t.monthData&&v!==(v=u.title)&&(f.title=v),f._svelte.entries=s,f._svelte.entry_index=d,(t.monthData||t.untitledText)&&g!==(g=o(u.title,30,e.untitledText))&&(p.data=g)},u:function(){B(f)},d:function(){P(f,"click",S)}}}function h(t,e,n,o,i,r,c,l){var s,u;return{c:function(){s=L("div"),u=F(t.newText),this.h()},h:function(){a(s),s.className="add-new",J(s,"click",C),s._svelte={component:l,weekdays_1:i,weekday_index:c}},m:function(t,e){Y(s,t,e),H(u,s)},p:function(t,e,n,o,i,a,r,c){s._svelte.weekdays_1=a,s._svelte.weekday_index=c,t.newText&&(u.data=e.newText)},u:function(){B(s)},d:function(){P(s,"click",C)}}}function f(t,e){var n,o;return{c:function(){n=L("div"),o=F(t.emptyText),this.h()},h:function(){a(n),n.className="no-entries"},m:function(t,e){Y(n,t,e),H(o,n)},p:function(t,e){t.emptyText&&(o.data=e.emptyText)},u:function(){B(n)},d:X}}function m(t,e,n,o,i){for(var a,r=n,c=[],l=0;l<r.length;l+=1)c[l]=v(t,e,n,o,r,r[l],l,i);return{c:function(){for(var t=0;t<c.length;t+=1)c[t].c();a=W()},m:function(t,e){for(var n=0;n<c.length;n+=1)c[n].m(t,e);Y(a,t,e)},p:function(t,e,n,o,r){var l=o;if(t.monthData||t.defaultColor||t.untitledText){for(var s=0;s<l.length;s+=1)c[s]?c[s].p(t,e,n,o,r,l,l[s],s):(c[s]=v(e,n,o,r,l,l[s],s,i),c[s].c(),c[s].m(a.parentNode,a));for(;s<c.length;s+=1)c[s].u(),c[s].d();c.length=l.length}},u:function(){for(var t=0;t<c.length;t+=1)c[t].u();B(a)},d:function(){I(c)}}}function v(t,e,n,o,i,a,r,c){var l,s=a.entries.length>0&&b(t,e,n,o,i,a,r,c);return{c:function(){s&&s.c(),l=W()},m:function(t,e){s&&s.m(t,e),Y(l,t,e)},p:function(t,e,n,o,i,a,r,u){r.entries.length>0?s?s.p(t,e,n,o,i,a,r,u):((s=b(e,n,o,i,a,r,u,c)).c(),s.m(l.parentNode,l)):s&&(s.u(),s.d(),s=null)},u:function(){s&&s.u(),B(l)},d:function(){s&&s.d()}}}function p(t,e,n,i,r,c,l,s,u,d,h){var f,m,v,p,b,y,w,_=o(u.title,70,t.untitledText),k=u.hasStartTime&&1===u.days.length&&g(t,e,n,i,r,c,l,s,u,d,h),D=u.hasEndTime&&1===u.days.length&&x(t,e,n,i,r,c,l,s,u,d,h);return{c:function(){f=L("p"),m=L("span"),v=F("\n                "),k&&k.c(),p=F("\n                "),D&&D.c(),b=F("\n\n                "),y=L("span"),w=F(_),this.h()},h:function(){a(f),a(m),m.className="dot",U(m,"background-color",u.color||t.defaultColor),a(y),y.className="row-entry-title",J(y,"click",M),y._svelte={component:h,entries:s,entry_index:d}},m:function(t,e){Y(f,t,e),H(m,f),H(v,f),k&&k.m(f,null),H(p,f),D&&D.m(f,null),H(b,f),H(y,f),H(w,y)},p:function(t,e,n,i,a,r,c,l,s,u,d){(t.monthData||t.defaultColor)&&U(m,"background-color",u.color||e.defaultColor),u.hasStartTime&&1===u.days.length?k?k.p(t,e,n,i,a,r,c,l,s,u,d):((k=g(e,n,i,a,r,c,l,s,u,d,h)).c(),k.m(f,p)):k&&(k.u(),k.d(),k=null),u.hasEndTime&&1===u.days.length?D?D.p(t,e,n,i,a,r,c,l,s,u,d):((D=x(e,n,i,a,r,c,l,s,u,d,h)).c(),D.m(f,b)):D&&(D.u(),D.d(),D=null),y._svelte.entries=s,y._svelte.entry_index=d,(t.monthData||t.untitledText)&&_!==(_=o(u.title,70,e.untitledText))&&(w.data=_)},u:function(){B(f),k&&k.u(),D&&D.u()},d:function(){k&&k.d(),D&&D.d(),P(y,"click",M)}}}function g(t,e,n,o,i,r,c,l,s,u,d){var h,f,m=s.startDate.toTimeString().slice(0,5);return{c:function(){h=L("span"),f=F(m),this.h()},h:function(){a(h),h.className="row-entry-time"},m:function(t,e){Y(h,t,e),H(f,h)},p:function(t,e,n,o,i,a,r,c,l,s,u){t.monthData&&m!==(m=s.startDate.toTimeString().slice(0,5))&&(f.data=m)},u:function(){B(h)},d:X}}function x(t,e,n,o,i,r,c,l,s,u,d){var h,f,m,v=s.endDate.toTimeString().slice(0,5);return{c:function(){h=L("span"),f=F("- "),m=F(v),this.h()},h:function(){a(h),h.className="row-entry-time"},m:function(t,e){Y(h,t,e),H(f,h),H(m,h)},p:function(t,e,n,o,i,a,r,c,l,s,u){t.monthData&&v!==(v=s.endDate.toTimeString().slice(0,5))&&(m.data=v)},u:function(){B(h)},d:X}}function b(t,e,n,o,i,r,c,l){for(var s,u,d,h,f=r.date.toDateString(),m=r.entries,v=[],g=0;g<m.length;g+=1)v[g]=p(t,e,n,o,i,r,c,m,m[g],g,l);return{c:function(){s=L("div"),u=F(f),d=F("\n          "),h=L("div");for(var t=0;t<v.length;t+=1)v[t].c();this.h()},h:function(){a(s),s.className="row-header",a(h),h.className="row-content"},m:function(t,e){Y(s,t,e),H(u,s),Y(d,t,e),Y(h,t,e);for(var n=0;n<v.length;n+=1)v[n].m(h,null)},p:function(t,e,n,o,i,a,r,c){t.monthData&&f!==(f=r.date.toDateString())&&(u.data=f);var s=r.entries;if(t.monthData||t.defaultColor||t.untitledText){for(var d=0;d<s.length;d+=1)v[d]?v[d].p(t,e,n,o,i,a,r,c,s,s[d],d):(v[d]=p(e,n,o,i,a,r,c,s,s[d],d,l),v[d].c(),v[d].m(h,null));for(;d<v.length;d+=1)v[d].u(),v[d].d();v.length=s.length}},u:function(){B(s),B(d),B(h);for(var t=0;t<v.length;t+=1)v[t].u()},d:function(){I(v)}}}function y(t,e){for(var n,o,i,r,c,u=t.dayNames,d=[],h=0;h<u.length;h+=1)d[h]=l(t,u,u[h],h,e);for(var f=t.monthData.weeks,m=[],h=0;h<f.length;h+=1)m[h]=s(t,f,f[h],h,e);return{c:function(){n=L("table"),o=L("thead"),i=L("tr");for(t=0;t<d.length;t+=1)d[t].c();r=F("\n      "),c=L("tbody");for(var t=0;t<m.length;t+=1)m[t].c();this.h()},h:function(){a(n),a(o),a(i),a(c)},m:function(t,e){Y(n,t,e),H(o,n),H(i,o);for(a=0;a<d.length;a+=1)d[a].m(i,null);H(r,n),H(c,n);for(var a=0;a<m.length;a+=1)m[a].m(c,null)},p:function(t,n){var o=n.dayNames;if(t.dayNames){for(r=0;r<o.length;r+=1)d[r]?d[r].p(t,n,o,o[r],r):(d[r]=l(n,o,o[r],r,e),d[r].c(),d[r].m(i,null));for(;r<d.length;r+=1)d[r].u(),d[r].d();d.length=o.length}var a=n.monthData.weeks;if(t.monthData||t.defaultColor||t.untitledText||t.showNew||t.newText){for(var r=0;r<a.length;r+=1)m[r]?m[r].p(t,n,a,a[r],r):(m[r]=s(n,a,a[r],r,e),m[r].c(),m[r].m(c,null));for(;r<m.length;r+=1)m[r].u(),m[r].d();m.length=a.length}},u:function(){B(n);for(t=0;t<d.length;t+=1)d[t].u();for(var t=0;t<m.length;t+=1)m[t].u()},d:function(){I(d),I(m)}}}function w(t,e){for(var n,o,i=0===t.monthData.numEntries&&f(t,e),a=t.monthData.weeks,r=[],c=0;c<a.length;c+=1)r[c]=m(t,a,a[c],c,e);return{c:function(){i&&i.c(),n=F("\n    ");for(var t=0;t<r.length;t+=1)r[t].c();o=W()},m:function(t,e){i&&i.m(t,e),Y(n,t,e);for(var a=0;a<r.length;a+=1)r[a].m(t,e);Y(o,t,e)},p:function(t,a){0===a.monthData.numEntries?i?i.p(t,a):((i=f(a,e)).c(),i.m(n.parentNode,n)):i&&(i.u(),i.d(),i=null);var c=a.monthData.weeks;if(t.monthData||t.defaultColor||t.untitledText){for(var l=0;l<c.length;l+=1)r[l]?r[l].p(t,a,c,c[l],l):(r[l]=m(a,c,c[l],l,e),r[l].c(),r[l].m(o.parentNode,o));for(;l<r.length;l+=1)r[l].u(),r[l].d();r.length=c.length}},u:function(){i&&i.u(),B(n);for(var t=0;t<r.length;t+=1)r[t].u();B(o)},d:function(){i&&i.d(),I(r)}}}function _(t,e){var n,o,i=t.activeEntry.startDate.toTimeString().slice(0,5);return{c:function(){n=L("span"),o=F(i),this.h()},h:function(){a(n),n.className="time"},m:function(t,e){Y(n,t,e),H(o,n)},p:function(t,e){t.activeEntry&&i!==(i=e.activeEntry.startDate.toTimeString().slice(0,5))&&(o.data=i)},u:function(){B(n)},d:X}}function k(t,e){var n,o,i=t.activeEntry.endDate.toTimeString().slice(0,5);return{c:function(){n=L("span"),o=F(i),this.h()},h:function(){a(n),n.className="time"},m:function(t,e){Y(n,t,e),H(o,n)},p:function(t,e){t.activeEntry&&i!==(i=e.activeEntry.endDate.toTimeString().slice(0,5))&&(o.data=i)},u:function(){B(n)},d:X}}function D(t,e){var n,o,i,r,c,l,s,u=t.activeEntry.endDate.toDateString(),d=t.activeEntry.hasEndTime&&k(t,e);return{c:function(){n=L("br"),o=F("\n            "),(i=L("strong")).textContent="End:",r=F(" "),c=F(u),l=F("\n            "),d&&d.c(),s=W(),this.h()},h:function(){a(n),a(i)},m:function(t,e){Y(n,t,e),Y(o,t,e),Y(i,t,e),Y(r,t,e),Y(c,t,e),Y(l,t,e),d&&d.m(t,e),Y(s,t,e)},p:function(t,n){t.activeEntry&&u!==(u=n.activeEntry.endDate.toDateString())&&(c.data=u),n.activeEntry.hasEndTime?d?d.p(t,n):((d=k(n,e)).c(),d.m(s.parentNode,s)):d&&(d.u(),d.d(),d=null)},u:function(){B(n),B(o),B(i),B(r),B(c),B(l),d&&d.u(),B(s)},d:function(){d&&d.d()}}}function T(t,e){var n,o=t.activeEntry.content;return{c:function(){n=F(o)},m:function(t,e){Y(n,t,e)},p:function(t,e){t.activeEntry&&o!==(o=e.activeEntry.content)&&(n.data=o)},u:function(){B(n)},d:X}}function N(t,e){var n,o,i=t.activeEntry.content;return{c:function(){n=L("noscript"),o=L("noscript")},m:function(t,e){Y(n,t,e),n.insertAdjacentHTML("afterend",i),Y(o,t,e)},p:function(t,e){t.activeEntry&&i!==(i=e.activeEntry.content)&&(q(n,o),n.insertAdjacentHTML("afterend",i))},u:function(){q(n,o),B(n),B(o)},d:X}}function E(t,e){var n,o,i,r,c,l,s,u,d,h,f,m=t.activeEntry.title||t.untitledText,v=t.activeEntry.startDate.toDateString(),p=t.activeEntry.hasStartTime&&_(t,e),g=t.activeEntry.end&&D(t,e),x=A(t),b=x(t,e);return{c:function(){n=L("span"),o=F(m),i=F("\n        "),r=L("div"),(c=L("strong")).textContent="Start:",l=F(" "),s=F(v),u=F("\n          "),p&&p.c(),d=F("\n          "),g&&g.c(),h=F("\n        "),b.c(),f=W(),this.h()},h:function(){a(n),n.className="title modal-title",a(r),r.className="event-meta",a(c)},m:function(t,e){Y(n,t,e),H(o,n),Y(i,t,e),Y(r,t,e),H(c,r),H(l,r),H(s,r),H(u,r),p&&p.m(r,null),H(d,r),g&&g.m(r,null),Y(h,t,e),b.m(t,e),Y(f,t,e)},p:function(t,n){(t.activeEntry||t.untitledText)&&m!==(m=n.activeEntry.title||n.untitledText)&&(o.data=m),t.activeEntry&&v!==(v=n.activeEntry.startDate.toDateString())&&(s.data=v),n.activeEntry.hasStartTime?p?p.p(t,n):((p=_(n,e)).c(),p.m(r,d)):p&&(p.u(),p.d(),p=null),n.activeEntry.end?g?g.p(t,n):((g=D(n,e)).c(),g.m(r,null)):g&&(g.u(),g.d(),g=null),x===(x=A(n))&&b?b.p(t,n):(b.u(),b.d(),(b=x(n,e)).c(),b.m(f.parentNode,f))},u:function(){B(n),B(i),B(r),p&&p.u(),g&&g.u(),B(h),b.u(),B(f)},d:function(){p&&p.d(),g&&g.d(),b.d()}}}function S(t){var e=this._svelte.component,n=this._svelte.entries[this._svelte.entry_index];e.loadEntry(n)}function C(t){var e=this._svelte.component,n=this._svelte.weekdays_1[this._svelte.weekday_index];e.fire("newClicked",{day:n})}function M(t){var e=this._svelte.component,n=this._svelte.entries[this._svelte.entry_index];e.loadEntry(n)}function z(t){return"calendar"===t.view?y:w}function A(t){return t.escape?T:N}function O(t){G(this,t),this.refs={},this._state=K(n(),t.data),this._recompute({month:1,monthNames:1,year:1,parsedEntries:1},this._state),document.getElementById("svelte-3542641868-style")||r();var e=i.bind(this);t._root?this._root._oncreate.push(e):this._oncreate=[e],this._fragment=c(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),Q(this._oncreate))}function j(t,e,n){t.setAttribute(e,n)}function L(t){return document.createElement(t)}function H(t,e){e.appendChild(t)}function F(t){return document.createTextNode(t)}function J(t,e,n){t.addEventListener(e,n,!1)}function Y(t,e,n){e.insertBefore(t,n)}function B(t){t.parentNode.removeChild(t)}function P(t,e,n){t.removeEventListener(e,n,!1)}function X(){}function I(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function U(t,e,n){t.style.setProperty(e,n)}function W(){return document.createComment("")}function q(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function G(t,e){t.options=e,t._observers={pre:Z(),post:Z()},t._handlers=Z(),t._root=e._root||t,t._yield=e._yield,t._bind=e._bind}function K(t){for(var e,n,o=1,i=arguments.length;o<i;o++){n=arguments[o];for(e in n)t[e]=n[e]}return t}function Q(t){for(;t&&t.length;)t.pop()()}function R(t){this.destroy=X,this.fire("destroy"),this.set=this.get=X,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function V(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function Z(){return Object.create(null)}function $(t,e,n,o,i){for(var a in e)if(n[a]){var r=o[a],c=i[a],l=e[a];if(l)for(var s=0;s<l.length;s+=1){var u=l[s];u.__calling||(u.__calling=!0,u.call(t,r,c),u.__calling=!1)}}}var tt={loadEntry:function(t){this.fire("entryClicked",{entry:t}),this.set({showModal:!0,activeEntry:t})}};return K(O.prototype,tt,{destroy:R,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(K({},t)),this._root._lock||(this._root._lock=!0,Q(this._root._beforecreate),Q(this._root._oncreate),Q(this._root._aftercreate),this._root._lock=!1)},teardown:R,_set:function(t){var e=this._state,n={},o=!1;for(var i in t)V(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=K({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),$(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),$(this,this._observers.post,n,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment.u()}}),O.prototype._recompute=function(n,o){(n.month||n.monthNames)&&V(o.monthName,o.monthName=t(o.month,o.monthNames))&&(n.monthName=!0),(n.year||n.month||n.parsedEntries)&&V(o.monthData,o.monthData=e(o.year,o.month,o.parsedEntries))&&(n.monthData=!0)},O}();