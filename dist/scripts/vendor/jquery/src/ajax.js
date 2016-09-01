define(["./core","./var/document","./var/rnotwhite","./ajax/var/location","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseXML","./event/trigger","./deferred","./serialize"],function(e,t,a,r,o,n){function s(t){return function(r,o){"string"!=typeof r&&(o=r,r="*");var n,s=0,i=r.toLowerCase().match(a)||[];if(e.isFunction(o))for(;n=i[s++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(o)):(t[n]=t[n]||[]).push(o)}}function i(t,a,r,o){function n(c){var d;return s[c]=!0,e.each(t[c]||[],function(e,t){var c=t(a,r,o);return"string"!=typeof c||i||s[c]?i?!(d=c):void 0:(a.dataTypes.unshift(c),n(c),!1)}),d}var s={},i=t===g;return n(a.dataTypes[0])||!s["*"]&&n("*")}function c(t,a){var r,o,n=e.ajaxSettings.flatOptions||{};for(r in a)void 0!==a[r]&&((n[r]?t:o||(o={}))[r]=a[r]);return o&&e.extend(!0,t,o),t}function d(e,t,a){for(var r,o,n,s,i=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in i)if(i[o]&&i[o].test(r)){c.unshift(o);break}if(c[0]in a)n=c[0];else{for(o in a){if(!c[0]||e.converters[o+" "+c[0]]){n=o;break}s||(s=o)}n=n||s}return n?(n!==c[0]&&c.unshift(n),a[n]):void 0}function f(e,t,a,r){var o,n,s,i,c,d={},f=e.dataTypes.slice();if(f[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(n=f.shift();n;)if(e.responseFields[n]&&(a[e.responseFields[n]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=n,n=f.shift())if("*"===n)n=c;else if("*"!==c&&c!==n){if(s=d[c+" "+n]||d["* "+n],!s)for(o in d)if(i=o.split(" "),i[1]===n&&(s=d[c+" "+i[0]]||d["* "+i[0]])){s===!0?s=d[o]:d[o]!==!0&&(n=i[0],f.unshift(i[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+c+" to "+n}}}return{state:"success",data:t}}var p=/%20/g,u=/#.*$/,l=/([?&])_=[^&]*/,h=/^(.*?):[ \t]*([^\r\n]*)$/gm,x=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,y=/^(?:GET|HEAD)$/,m=/^\/\//,v={},g={},j="*/".concat("*"),T=t.createElement("a");return T.href=r.href,e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:x.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":j,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,a){return a?c(c(t,e.ajaxSettings),a):c(e.ajaxSettings,t)},ajaxPrefilter:s(v),ajaxTransport:s(g),ajax:function(s,c){function x(t,a,r,o){var n,s,i,c,p,u=a;L||(L=!0,H&&window.clearTimeout(H),w=void 0,S=o||"",X.readyState=t>0?4:0,n=t>=200&&300>t||304===t,r&&(c=d(F,X,r)),c=f(F,c,X,n),n?(F.ifModified&&(p=X.getResponseHeader("Last-Modified"),p&&(e.lastModified[b]=p),p=X.getResponseHeader("etag"),p&&(e.etag[b]=p)),204===t||"HEAD"===F.type?u="nocontent":304===t?u="notmodified":(u=c.state,s=c.data,i=c.error,n=!i)):(i=u,(t||!u)&&(u="error",0>t&&(t=0))),X.status=t,X.statusText=(a||u)+"",n?N.resolveWith(E,[s,u,X]):N.rejectWith(E,[X,u,i]),X.statusCode(A),A=void 0,R&&O.trigger(n?"ajaxSuccess":"ajaxError",[X,F,n?s:i]),k.fireWith(E,[X,u]),R&&(O.trigger("ajaxComplete",[X,F]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof s&&(c=s,s=void 0),c=c||{};var w,b,S,C,H,M,L,R,q,D,F=e.ajaxSetup({},c),E=F.context||F,O=F.context&&(E.nodeType||E.jquery)?e(E):e.event,N=e.Deferred(),k=e.Callbacks("once memory"),A=F.statusCode||{},$={},J={},W="canceled",X={readyState:0,getResponseHeader:function(e){var t;if(L){if(!C)for(C={};t=h.exec(S);)C[t[1].toLowerCase()]=t[2];t=C[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return L?S:null},setRequestHeader:function(e,t){return null==L&&(e=J[e.toLowerCase()]=J[e.toLowerCase()]||e,$[e]=t),this},overrideMimeType:function(e){return null==L&&(F.mimeType=e),this},statusCode:function(e){var t;if(e)if(L)X.always(e[X.status]);else for(t in e)A[t]=[A[t],e[t]];return this},abort:function(e){var t=e||W;return w&&w.abort(t),x(0,t),this}};if(N.promise(X),F.url=((s||F.url||r.href)+"").replace(m,r.protocol+"//"),F.type=c.method||c.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(a)||[""],null==F.crossDomain){M=t.createElement("a");try{M.href=F.url,M.href=M.href,F.crossDomain=T.protocol+"//"+T.host!=M.protocol+"//"+M.host}catch(G){F.crossDomain=!0}}if(F.data&&F.processData&&"string"!=typeof F.data&&(F.data=e.param(F.data,F.traditional)),i(v,F,c,X),L)return X;R=e.event&&F.global,R&&0===e.active++&&e.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!y.test(F.type),b=F.url.replace(u,""),F.hasContent?F.data&&F.processData&&0===(F.contentType||"").indexOf("application/x-www-form-urlencoded")&&(F.data=F.data.replace(p,"+")):(D=F.url.slice(b.length),F.data&&(b+=(n.test(b)?"&":"?")+F.data,delete F.data),F.cache===!1&&(b=b.replace(l,""),D=(n.test(b)?"&":"?")+"_="+o++ +D),F.url=b+D),F.ifModified&&(e.lastModified[b]&&X.setRequestHeader("If-Modified-Since",e.lastModified[b]),e.etag[b]&&X.setRequestHeader("If-None-Match",e.etag[b])),(F.data&&F.hasContent&&F.contentType!==!1||c.contentType)&&X.setRequestHeader("Content-Type",F.contentType),X.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+("*"!==F.dataTypes[0]?", "+j+"; q=0.01":""):F.accepts["*"]);for(q in F.headers)X.setRequestHeader(q,F.headers[q]);if(F.beforeSend&&(F.beforeSend.call(E,X,F)===!1||L))return X.abort();if(W="abort",k.add(F.complete),X.done(F.success),X.fail(F.error),w=i(g,F,c,X)){if(X.readyState=1,R&&O.trigger("ajaxSend",[X,F]),L)return X;F.async&&F.timeout>0&&(H=window.setTimeout(function(){X.abort("timeout")},F.timeout));try{L=!1,w.send($,x)}catch(G){if(L)throw G;x(-1,G)}}else x(-1,"No Transport");return X},getJSON:function(t,a,r){return e.get(t,a,r,"json")},getScript:function(t,a){return e.get(t,void 0,a,"script")}}),e.each(["get","post"],function(t,a){e[a]=function(t,r,o,n){return e.isFunction(r)&&(n=n||o,o=r,r=void 0),e.ajax(e.extend({url:t,type:a,dataType:n,data:r,success:o},e.isPlainObject(t)&&t))}}),e});