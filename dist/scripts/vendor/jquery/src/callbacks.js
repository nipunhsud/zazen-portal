define(["./core","./var/rnotwhite"],function(n,t){function r(r){var e={};return n.each(r.match(t)||[],function(n,t){e[t]=!0}),e}return n.Callbacks=function(t){t="string"==typeof t?r(t):n.extend({},t);var e,i,u,c,o=[],f=[],s=-1,h=function(){for(c=t.once,u=e=!0;f.length;s=-1)for(i=f.shift();++s<o.length;)o[s].apply(i[0],i[1])===!1&&t.stopOnFalse&&(s=o.length,i=!1);t.memory||(i=!1),e=!1,c&&(o=i?[]:"")},a={add:function(){return o&&(i&&!e&&(s=o.length-1,f.push(i)),function r(e){n.each(e,function(e,i){n.isFunction(i)?t.unique&&a.has(i)||o.push(i):i&&i.length&&"string"!==n.type(i)&&r(i)})}(arguments),i&&!e&&h()),this},remove:function(){return n.each(arguments,function(t,r){for(var e;(e=n.inArray(r,o,e))>-1;)o.splice(e,1),s>=e&&s--}),this},has:function(t){return t?n.inArray(t,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return c=f=[],o=i="",this},disabled:function(){return!o},lock:function(){return c=f=[],i||e||(o=i=""),this},locked:function(){return!!c},fireWith:function(n,t){return c||(t=t||[],t=[n,t.slice?t.slice():t],f.push(t),e||h()),this},fire:function(){return a.fireWith(this,arguments),this},fired:function(){return!!u}};return a},n});