(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{onlc:function(n,r,a){var t=a("t1N5");function e(n){var r=function(){for(var n={},r=Object.keys(t),a=r.length,e=0;e<a;e++)n[r[e]]={distance:-1,parent:null};return n}(),a=[n];for(r[n].distance=0;a.length;)for(var e=a.pop(),o=Object.keys(t[e]),h=o.length,c=0;c<h;c++){var u=o[c],s=r[u];-1===s.distance&&(s.distance=r[e].distance+1,s.parent=e,a.unshift(u))}return r}function o(n,r){return function(a){return r(n(a))}}function h(n,r){for(var a=[r[n].parent,n],e=t[r[n].parent][n],h=r[n].parent;r[h].parent;)a.unshift(r[h].parent),e=o(t[r[h].parent][h],e),h=r[h].parent;return e.conversion=a,e}n.exports=function(n){for(var r=e(n),a={},t=Object.keys(r),o=t.length,c=0;c<o;c++){var u=t[c];null!==r[u].parent&&(a[u]=h(u,r))}return a}},t1N5:function(n,r,a){var t=a("T016"),e={};for(var o in t)t.hasOwnProperty(o)&&(e[t[o]]=o);var h=n.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var c in h)if(h.hasOwnProperty(c)){if(!("channels"in h[c]))throw new Error("missing channels property: "+c);if(!("labels"in h[c]))throw new Error("missing channel labels property: "+c);if(h[c].labels.length!==h[c].channels)throw new Error("channel and label counts mismatch: "+c);var u=h[c].channels,s=h[c].labels;delete h[c].channels,delete h[c].labels,Object.defineProperty(h[c],"channels",{value:u}),Object.defineProperty(h[c],"labels",{value:s})}h.rgb.hsl=function(n){var r,a,t=n[0]/255,e=n[1]/255,o=n[2]/255,h=Math.min(t,e,o),c=Math.max(t,e,o),u=c-h;return c===h?r=0:t===c?r=(e-o)/u:e===c?r=2+(o-t)/u:o===c&&(r=4+(t-e)/u),(r=Math.min(60*r,360))<0&&(r+=360),a=(h+c)/2,[r,100*(c===h?0:a<=.5?u/(c+h):u/(2-c-h)),100*a]},h.rgb.hsv=function(n){var r,a,t,e,o,h=n[0]/255,c=n[1]/255,u=n[2]/255,s=Math.max(h,c,u),i=s-Math.min(h,c,u),l=function(n){return(s-n)/6/i+.5};return 0===i?e=o=0:(o=i/s,r=l(h),a=l(c),t=l(u),h===s?e=t-a:c===s?e=1/3+r-t:u===s&&(e=2/3+a-r),e<0?e+=1:e>1&&(e-=1)),[360*e,100*o,100*s]},h.rgb.hwb=function(n){var r=n[0],a=n[1],t=n[2];return[h.rgb.hsl(n)[0],100*(1/255*Math.min(r,Math.min(a,t))),100*(t=1-1/255*Math.max(r,Math.max(a,t)))]},h.rgb.cmyk=function(n){var r,a=n[0]/255,t=n[1]/255,e=n[2]/255;return[100*((1-a-(r=Math.min(1-a,1-t,1-e)))/(1-r)||0),100*((1-t-r)/(1-r)||0),100*((1-e-r)/(1-r)||0),100*r]},h.rgb.keyword=function(n){var r=e[n];if(r)return r;var a,o,h,c=1/0;for(var u in t)if(t.hasOwnProperty(u)){var s=t[u],i=(o=n,h=s,Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)+Math.pow(o[2]-h[2],2));i<c&&(c=i,a=u)}return a},h.keyword.rgb=function(n){return t[n]},h.rgb.xyz=function(n){var r=n[0]/255,a=n[1]/255,t=n[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*r+.7152*a+.0722*t),100*(.0193*r+.1192*a+.9505*t)]},h.rgb.lab=function(n){var r=h.rgb.xyz(n),a=r[0],t=r[1],e=r[2];return t/=100,e/=108.883,a=(a/=95.047)>.008856?Math.pow(a,1/3):7.787*a+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(a-t),200*(t-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},h.hsl.rgb=function(n){var r,a,t,e,o,h=n[0]/360,c=n[1]/100,u=n[2]/100;if(0===c)return[o=255*u,o,o];r=2*u-(a=u<.5?u*(1+c):u+c-u*c),e=[0,0,0];for(var s=0;s<3;s++)(t=h+1/3*-(s-1))<0&&t++,t>1&&t--,o=6*t<1?r+6*(a-r)*t:2*t<1?a:3*t<2?r+(a-r)*(2/3-t)*6:r,e[s]=255*o;return e},h.hsl.hsv=function(n){var r=n[0],a=n[1]/100,t=n[2]/100,e=a,o=Math.max(t,.01);return a*=(t*=2)<=1?t:2-t,e*=o<=1?o:2-o,[r,100*(0===t?2*e/(o+e):2*a/(t+a)),100*((t+a)/2)]},h.hsv.rgb=function(n){var r=n[0]/60,a=n[1]/100,t=n[2]/100,e=Math.floor(r)%6,o=r-Math.floor(r),h=255*t*(1-a),c=255*t*(1-a*o),u=255*t*(1-a*(1-o));switch(t*=255,e){case 0:return[t,u,h];case 1:return[c,t,h];case 2:return[h,t,u];case 3:return[h,c,t];case 4:return[u,h,t];case 5:return[t,h,c]}},h.hsv.hsl=function(n){var r,a,t,e=n[0],o=n[1]/100,h=n[2]/100,c=Math.max(h,.01);return t=(2-o)*h,a=o*c,[e,100*(a=(a/=(r=(2-o)*c)<=1?r:2-r)||0),100*(t/=2)]},h.hwb.rgb=function(n){var r,a,t,e,o,h,c,u=n[0]/360,s=n[1]/100,i=n[2]/100,l=s+i;switch(l>1&&(s/=l,i/=l),t=6*u-(r=Math.floor(6*u)),0!=(1&r)&&(t=1-t),e=s+t*((a=1-i)-s),r){default:case 6:case 0:o=a,h=e,c=s;break;case 1:o=e,h=a,c=s;break;case 2:o=s,h=a,c=e;break;case 3:o=s,h=e,c=a;break;case 4:o=e,h=s,c=a;break;case 5:o=a,h=s,c=e}return[255*o,255*h,255*c]},h.cmyk.rgb=function(n){var r=n[0]/100,a=n[1]/100,t=n[2]/100,e=n[3]/100;return[255*(1-Math.min(1,r*(1-e)+e)),255*(1-Math.min(1,a*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e))]},h.xyz.rgb=function(n){var r,a,t,e=n[0]/100,o=n[1]/100,h=n[2]/100;return a=-.9689*e+1.8758*o+.0415*h,t=.0557*e+-.204*o+1.057*h,r=(r=3.2406*e+-1.5372*o+-.4986*h)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(r=Math.min(Math.max(0,r),1)),255*(a=Math.min(Math.max(0,a),1)),255*(t=Math.min(Math.max(0,t),1))]},h.xyz.lab=function(n){var r=n[0],a=n[1],t=n[2];return a/=100,t/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116)-16,500*(r-a),200*(a-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},h.lab.xyz=function(n){var r,a,t,e=n[0];r=n[1]/500+(a=(e+16)/116),t=a-n[2]/200;var o=Math.pow(a,3),h=Math.pow(r,3),c=Math.pow(t,3);return a=o>.008856?o:(a-16/116)/7.787,r=h>.008856?h:(r-16/116)/7.787,t=c>.008856?c:(t-16/116)/7.787,[r*=95.047,a*=100,t*=108.883]},h.lab.lch=function(n){var r,a=n[0],t=n[1],e=n[2];return(r=360*Math.atan2(e,t)/2/Math.PI)<0&&(r+=360),[a,Math.sqrt(t*t+e*e),r]},h.lch.lab=function(n){var r,a=n[0],t=n[1];return r=n[2]/360*2*Math.PI,[a,t*Math.cos(r),t*Math.sin(r)]},h.rgb.ansi16=function(n){var r=n[0],a=n[1],t=n[2],e=1 in arguments?arguments[1]:h.rgb.hsv(n)[2];if(0===(e=Math.round(e/50)))return 30;var o=30+(Math.round(t/255)<<2|Math.round(a/255)<<1|Math.round(r/255));return 2===e&&(o+=60),o},h.hsv.ansi16=function(n){return h.rgb.ansi16(h.hsv.rgb(n),n[2])},h.rgb.ansi256=function(n){var r=n[0],a=n[1],t=n[2];return r===a&&a===t?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(a/255*5)+Math.round(t/255*5)},h.ansi16.rgb=function(n){var r=n%10;if(0===r||7===r)return n>50&&(r+=3.5),[r=r/10.5*255,r,r];var a=.5*(1+~~(n>50));return[(1&r)*a*255,(r>>1&1)*a*255,(r>>2&1)*a*255]},h.ansi256.rgb=function(n){if(n>=232){var r=10*(n-232)+8;return[r,r,r]}var a;return n-=16,[Math.floor(n/36)/5*255,Math.floor((a=n%36)/6)/5*255,a%6/5*255]},h.rgb.hex=function(n){var r=(((255&Math.round(n[0]))<<16)+((255&Math.round(n[1]))<<8)+(255&Math.round(n[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},h.hex.rgb=function(n){var r=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var a=r[0];3===r[0].length&&(a=a.split("").map((function(n){return n+n})).join(""));var t=parseInt(a,16);return[t>>16&255,t>>8&255,255&t]},h.rgb.hcg=function(n){var r,a=n[0]/255,t=n[1]/255,e=n[2]/255,o=Math.max(Math.max(a,t),e),h=Math.min(Math.min(a,t),e),c=o-h;return r=c<=0?0:o===a?(t-e)/c%6:o===t?2+(e-a)/c:4+(a-t)/c+4,r/=6,[360*(r%=1),100*c,100*(c<1?h/(1-c):0)]},h.hsl.hcg=function(n){var r=n[1]/100,a=n[2]/100,t=1,e=0;return(t=a<.5?2*r*a:2*r*(1-a))<1&&(e=(a-.5*t)/(1-t)),[n[0],100*t,100*e]},h.hsv.hcg=function(n){var r=n[1]/100,a=n[2]/100,t=r*a,e=0;return t<1&&(e=(a-t)/(1-t)),[n[0],100*t,100*e]},h.hcg.rgb=function(n){var r=n[0]/360,a=n[1]/100,t=n[2]/100;if(0===a)return[255*t,255*t,255*t];var e,o=[0,0,0],h=r%1*6,c=h%1,u=1-c;switch(Math.floor(h)){case 0:o[0]=1,o[1]=c,o[2]=0;break;case 1:o[0]=u,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=c;break;case 3:o[0]=0,o[1]=u,o[2]=1;break;case 4:o[0]=c,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=u}return e=(1-a)*t,[255*(a*o[0]+e),255*(a*o[1]+e),255*(a*o[2]+e)]},h.hcg.hsv=function(n){var r=n[1]/100,a=r+n[2]/100*(1-r),t=0;return a>0&&(t=r/a),[n[0],100*t,100*a]},h.hcg.hsl=function(n){var r=n[1]/100,a=n[2]/100*(1-r)+.5*r,t=0;return a>0&&a<.5?t=r/(2*a):a>=.5&&a<1&&(t=r/(2*(1-a))),[n[0],100*t,100*a]},h.hcg.hwb=function(n){var r=n[1]/100,a=r+n[2]/100*(1-r);return[n[0],100*(a-r),100*(1-a)]},h.hwb.hcg=function(n){var r=n[1]/100,a=1-n[2]/100,t=a-r,e=0;return t<1&&(e=(a-t)/(1-t)),[n[0],100*t,100*e]},h.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]},h.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]},h.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]},h.gray.hsl=h.gray.hsv=function(n){return[0,0,n[0]]},h.gray.hwb=function(n){return[0,100,n[0]]},h.gray.cmyk=function(n){return[0,0,0,n[0]]},h.gray.lab=function(n){return[n[0],0,0]},h.gray.hex=function(n){var r=255&Math.round(n[0]/100*255),a=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(a.length)+a},h.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]}},uxXc:function(n,r,a){var t=a("t1N5"),e=a("onlc"),o={};Object.keys(t).forEach((function(n){o[n]={},Object.defineProperty(o[n],"channels",{value:t[n].channels}),Object.defineProperty(o[n],"labels",{value:t[n].labels});var r=e(n);Object.keys(r).forEach((function(a){var t=r[a];o[n][a]=function(n){var r=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var a=n(r);if("object"==typeof a)for(var t=a.length,e=0;e<t;e++)a[e]=Math.round(a[e]);return a};return"conversion"in n&&(r.conversion=n.conversion),r}(t),o[n][a].raw=function(n){var r=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),n(r))};return"conversion"in n&&(r.conversion=n.conversion),r}(t)}))})),n.exports=o}}]);
//# sourceMappingURL=color-convert.js.map