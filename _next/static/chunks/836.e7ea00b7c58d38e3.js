"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{4836:(e,t,r)=>{r.r(t),r.d(t,{encodeIntoResult:()=>c,stegaEncodeSourceMap:()=>_,stegaEncodeSourceMap$1:()=>$});var n=r(758);let i=/_key\s*==\s*['"](.*)['"]/;function o(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let n=typeof t;if("number"===n)return`${e}[${t}]`;if("string"===n)return`${e}${0===r?"":"."}${t}`;if(("string"==typeof t?i.test(t.trim()):"object"==typeof t&&"_key"in t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){let[r,n]=t;return`${e}[${r}:${n}]`}throw Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}let s={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},l={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function a(e){let t;let r=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;for(;null!==(t=n.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>l[e]);r.push(e);continue}if(void 0!==t[2]){r.push(parseInt(t[2],10));continue}if(void 0!==t[3]){let e=t[3].replace(/\\(\\')/g,e=>l[e]);r.push({_key:e,_index:-1});continue}}return r}function u(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function p(e){return"object"==typeof e&&null!==e}function c(e,t,r){return function e(t,r,n=[]){if(null!==t&&Array.isArray(t))return t.map((t,i)=>{if(p(t)){let o=t._key;if("string"==typeof o)return e(t,r,n.concat({_key:o,_index:i}))}return e(t,r,n.concat(i))});if(p(t)){if("block"===t._type||"span"===t._type){let i={...t};return"block"===t._type?i.children=e(t.children,r,n.concat("children")):"span"===t._type&&(i.text=e(t.text,r,n.concat("text"))),i}return Object.fromEntries(Object.entries(t).map(([t,i])=>[t,e(i,r,n.concat(t))]))}return r(t,n)}(e,(e,n)=>{if("string"!=typeof e)return e;let i=function(e,t){var r;if(!t?.mappings)return;let n=(r=e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)}),`$${r.map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>s[e])}']`:"number"==typeof e?`[${e}]`:""!==e._key?`[?(@._key=='${e._key.replace(/['\\]/g,e=>s[e])}')]`:`[${e._index}]`).join("")}`);if(void 0!==t.mappings[n])return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};let i=Object.entries(t.mappings).filter(([e])=>n.startsWith(e)).sort(([e],[t])=>t.length-e.length);if(0==i.length)return;let[o,l]=i[0],a=n.substring(o.length);return{mapping:l,matchedPath:o,pathSuffix:a}}(n,t);if(!i)return e;let{mapping:o,matchedPath:l}=i;if("value"!==o.type||"documentValue"!==o.source.type)return e;let u=t.documents[o.source.document],p=t.paths[o.source.path],c=a(l);return r({sourcePath:a(p).concat(n.slice(c.length)),sourceDocument:u,resultPath:n,value:e})})}let f="drafts.";function d(e){return e.startsWith(f)}function h(e){return e.startsWith("versions.")}let g=({sourcePath:e,resultPath:t,value:r})=>{if(function(e){return!!/^\d{4}-\d{2}-\d{2}/.test(e)&&!!Date.parse(e)}(r)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(r))return!1;let n=e.at(-1);return!("slug"===e.at(-2)&&"current"===n||"string"==typeof n&&(n.startsWith("_")||n.endsWith("Id"))||e.some(e=>"meta"===e||"metadata"===e||"openGraph"===e||"seo"===e)||m(e)||m(t)||"string"==typeof n&&y.has(n))},y=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","textTheme","unit","url","username","variant","website"]);function m(e){return e.some(e=>"string"==typeof e&&null!==e.match(/type/i))}function _(e,t,r){let{filter:s,logger:l,enabled:a}=r;if(!a){let n="config.enabled must be true, don't call this function otherwise";throw l?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}if(!t)return l?.error?.("[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){let n="config.studioUrl must be defined";throw l?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}let p={encoded:[],skipped:[]},y=c(e,t,({sourcePath:e,sourceDocument:t,resultPath:i,value:a})=>{var c;let y;if(("function"==typeof s?s({sourcePath:e,resultPath:i,filterDefault:g,sourceDocument:t,value:a}):g({sourcePath:e,resultPath:i,value:a}))===!1)return l&&p.skipped.push({path:o(u(e)),value:`${a.slice(0,20)}${a.length>20?"...":""}`,length:a.length}),a;l&&p.encoded.push({path:o(u(e)),value:`${a.slice(0,20)}${a.length>20?"...":""}`,length:a.length});let{baseUrl:m,workspace:_,tool:$}=("/"!==(y="string"==typeof(c="function"==typeof r.studioUrl?r.studioUrl(t):r.studioUrl)?c:c.baseUrl)&&(y=y.replace(/\/$/,"")),"string"==typeof c?{baseUrl:y}:{...c,baseUrl:y});if(!m)return a;let{_id:k,_type:b,_projectId:v,_dataset:w}=t;return(0,n.C)(a,{origin:"sanity.io",href:function(e){let{baseUrl:t,workspace:r="default",tool:n="default",id:i,type:s,path:l,projectId:a,dataset:p}=e;if(!t)throw Error("baseUrl is required");if(!l)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let c="default"===r?void 0:r,g="default"===n?void 0:n,y=h(i)?i.split(".").slice(2).join("."):d(i)?i.slice(f.length):i,m=Array.isArray(l)?o(u(l)):l,_=new URLSearchParams({baseUrl:t,id:y,type:s,path:m});if(c&&_.set("workspace",c),g&&_.set("tool",g),a&&_.set("projectId",a),p&&_.set("dataset",p),d(i)||h(i)){if(h(i)){let e=function(e){if(!h(e))return;let[t,r,...n]=e.split(".");return r}(i);_.set("perspective",e)}}else _.set("perspective","published");let $=["/"===t?"":t];c&&$.push(c);let k=["mode=presentation",`id=${y}`,`type=${s}`,`path=${encodeURIComponent(m)}`];return g&&k.push(`tool=${g}`),$.push("intent","edit",`${k.join(";")}?${_}`),$.join("/")}({baseUrl:m,workspace:_,tool:$,id:k,type:b,path:e,...!r.omitCrossDatasetReferenceData&&{dataset:w,projectId:v}})},!1)});if(l){let e=p.skipped.length,t=p.encoded.length;if((e||t)&&((l?.groupCollapsed||l.log)?.("[@sanity/client]: Encoding source map into result"),l.log?.(`[@sanity/client]: Paths encoded: ${p.encoded.length}, skipped: ${p.skipped.length}`)),p.encoded.length>0&&(l?.log?.("[@sanity/client]: Table of encoded paths"),(l?.table||l.log)?.(p.encoded)),p.skipped.length>0){let e=new Set;for(let{path:t}of p.skipped)e.add(t.replace(i,"0").replace(/\[\d+\]/g,"[]"));l?.log?.("[@sanity/client]: List of skipped paths",[...e.values()])}(e||t)&&l?.groupEnd?.()}return y}var $=Object.freeze({__proto__:null,stegaEncodeSourceMap:_})}}]);