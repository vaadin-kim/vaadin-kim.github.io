!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){function i(){return Array.prototype.slice.call(arguments,1)}function o(t){t.apply(this),this.drawBreaks()}var r=t.pick,e=t.wrap,s=t.each,n=t.extend,a=t.fireEvent,f=t.Axis,l=t.Series;n(f.prototype,{isInBreak:function(t,i){var o=t.repeat||1/0,r=t.from,e=t.to-t.from,o=i>=r?(i-r)%o:o-(r-i)%o;return t.inclusive?e>=o:e>o&&0!==o},isInAnyBreak:function(t,i){var o,e,s,n=this.options.breaks,a=n&&n.length;if(a){for(;a--;)this.isInBreak(n[a],t)&&(o=!0,e||(e=r(n[a].showPoints,!this.isXAxis)));s=o&&i?o&&!e:o}return s}}),e(f.prototype,"setTickPositions",function(t){if(t.apply(this,Array.prototype.slice.call(arguments,1)),this.options.breaks){var i,o=this.tickPositions,r=this.tickPositions.info,e=[];for(i=0;i<o.length;i++)this.isInAnyBreak(o[i])||e.push(o[i]);this.tickPositions=e,this.tickPositions.info=r}}),e(f.prototype,"init",function(t,i,o){if(o.breaks&&o.breaks.length&&(o.ordinal=!1),t.call(this,i,o),this.options.breaks){var r=this;r.doPostTranslate=!0,this.val2lin=function(t){var i,o,e=t;for(o=0;o<r.breakArray.length;o++)if(i=r.breakArray[o],i.to<=t)e-=i.len;else{if(i.from>=t)break;if(r.isInBreak(i,t)){e-=t-i.from;break}}return e},this.lin2val=function(t){var i,o;for(o=0;o<r.breakArray.length&&(i=r.breakArray[o],!(i.from>=t));o++)i.to<t?t+=i.len:r.isInBreak(i,t)&&(t+=i.len);return t},this.setExtremes=function(t,i,o,r,e){for(;this.isInAnyBreak(t);)t-=this.closestPointRange;for(;this.isInAnyBreak(i);)i-=this.closestPointRange;f.prototype.setExtremes.call(this,t,i,o,r,e)},this.setAxisTranslation=function(t){f.prototype.setAxisTranslation.call(this,t);var i,o,e,s,n=r.options.breaks,t=[],l=[],p=0,h=r.userMin||r.min,u=r.userMax||r.max;for(s in n)o=n[s],i=o.repeat||1/0,r.isInBreak(o,h)&&(h+=o.to%i-h%i),r.isInBreak(o,u)&&(u-=u%i-o.from%i);for(s in n){for(o=n[s],e=o.from,i=o.repeat||1/0;e-i>h;)e-=i;for(;h>e;)e+=i;for(;u>e;e+=i)t.push({value:e,move:"in"}),t.push({value:e+(o.to-o.from),move:"out",size:o.breakSize})}t.sort(function(t,i){return t.value===i.value?("in"===t.move?0:1)-("in"===i.move?0:1):t.value-i.value}),n=0,e=h;for(s in t)o=t[s],n+="in"===o.move?1:-1,1===n&&"in"===o.move&&(e=o.value),0===n&&(l.push({from:e,to:o.value,len:o.value-e-(o.size||0)}),p+=o.value-e-(o.size||0));r.breakArray=l,a(r,"afterBreaks"),r.transA*=(u-r.min)/(u-h-p),r.min=h,r.max=u}}}),e(l.prototype,"generatePoints",function(t){t.apply(this,i(arguments));var o,r,e=this.xAxis,s=this.yAxis,n=this.points,a=n.length,f=this.options.connectNulls;if(e&&s&&(e.options.breaks||s.options.breaks))for(;a--;)o=n[a],r=null===o.y&&f===!1,r||!e.isInAnyBreak(o.x,!0)&&!s.isInAnyBreak(o.y,!0)||(n.splice(a,1),this.data[a]&&this.data[a].destroyElements())}),t.Series.prototype.drawBreaks=function(){var t,i,o,e,n,f=this,l=f.points;s(["y","x"],function(p){t=f[p+"Axis"],i=t.breakArray||[],o=t.isXAxis?t.min:r(f.options.threshold,t.min),s(l,function(f){n=r(f["stack"+p.toUpperCase()],f[p]),s(i,function(i){e=!1,o<i.from&&n>i.to||o>i.from&&n<i.from?e="pointBreak":(o<i.from&&n>i.from&&n<i.to||o>i.from&&n>i.to&&n<i.from)&&(e="pointInBreak"),e&&a(t,e,{point:f,brk:i})})})})},e(t.seriesTypes.column.prototype,"drawPoints",o),e(t.Series.prototype,"drawPoints",o)});