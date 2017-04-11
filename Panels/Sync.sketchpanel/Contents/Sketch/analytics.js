// NOTES:
//  `< % = platform % >` evaluates to `sketch` or `photoshop`
//  `< % = version % >` evaluates to the current semver like `1.5.8`
//  `< % = channel % >` evaluates to the current build channel like `sync-internal`
//  `< % = location % >` evaluates to `http://sync-photoshop.craft.invisionapp.com`
//    or `http://sync-sketch.craft.invisionapp.com`
//  `< % = name % >` evaluates to the current panel name like `duplicate`,
//    `photos`, `type`, `sync`, or `library`

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// Segment
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";}}();

!function(n){"use strict";function r(){var r=n.crypto||n.msCrypto;if(!a&&r&&r.getRandomValues)try{var e=new Uint8Array(16);i=a=function(){return r.getRandomValues(e),e},a()}catch(o){}if(!a){var t=new Array(16);c=a=function(){for(var n,r=0;16>r;r++)0===(3&r)&&(n=4294967296*Math.random()),t[r]=n>>>((3&r)<<3)&255;return t},"undefined"!=typeof console&&console.warn&&console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")}}function e(n,r,e){var o=r&&e||0,t=0;for(r=r||[],n.toLowerCase().replace(/[0-9a-f]{2}/g,function(n){16>t&&(r[o+t++]=v[n])});16>t;)r[o+t++]=0;return r}function o(n,r){var e=r||0,o=d;return o[n[e++]]+o[n[e++]]+o[n[e++]]+o[n[e++]]+"-"+o[n[e++]]+o[n[e++]]+"-"+o[n[e++]]+o[n[e++]]+"-"+o[n[e++]]+o[n[e++]]+"-"+o[n[e++]]+o[n[e++]]+o[n[e++]]+o[n[e++]]+o[n[e++]]+o[n[e++]]}function t(n,r,e){var t=r&&e||0,u=r||[];n=n||{};var a=null!=n.clockseq?n.clockseq:g,c=null!=n.msecs?n.msecs:(new Date).getTime(),f=null!=n.nsecs?n.nsecs:h+1,i=c-p+(f-h)/1e4;if(0>i&&null==n.clockseq&&(a=a+1&16383),(0>i||c>p)&&null==n.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,h=f,g=a,c+=122192928e5;var s=(1e4*(268435455&c)+f)%4294967296;u[t++]=s>>>24&255,u[t++]=s>>>16&255,u[t++]=s>>>8&255,u[t++]=255&s;var l=c/4294967296*1e4&268435455;u[t++]=l>>>8&255,u[t++]=255&l,u[t++]=l>>>24&15|16,u[t++]=l>>>16&255,u[t++]=a>>>8|128,u[t++]=255&a;for(var d=n.node||m,v=0;6>v;v++)u[t+v]=d[v];return r?r:o(u)}function u(n,r,e){var t=r&&e||0;"string"==typeof n&&(r="binary"===n?new l(16):null,n=null),n=n||{};var u=n.random||(n.rng||a)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,r)for(var c=0;16>c;c++)r[t+c]=u[c];return r||o(u)}var a,c,f,i,s;r();for(var l="function"==typeof Buffer?Buffer:Array,d=[],v={},w=0;256>w;w++)d[w]=(w+256).toString(16).substr(1),v[d[w]]=w;var y=a(),m=[1|y[0],y[1],y[2],y[3],y[4],y[5]],g=16383&(y[6]<<8|y[7]),p=0,h=0,C=u;C.v1=t,C.v4=u,C.parse=e,C.unparse=o,C.BufferClass=l,C._rng=a,C._mathRNG=c,C._nodeRNG=f,C._whatwgRNG=i,s=n.uuid,C.noConflict=function(){return n.uuid=s,C},n.uuid=C}("undefined"!=typeof window?window:null);

if (!panel.getManagerSetting('gaClientId')) {
  panel.setManagerSetting('gaClientId', uuid.v4());
}

// set the cookie storage for google analytics to none, and provide your own client id
var clientId = panel.getManagerSetting('gaClientId');
var version = panel.getHostVersion().replace('sketch-', '');

var createOptions = {
  'storage': 'none',
  'clientId': clientId
};

ga('create', 'UA-73087121-1', createOptions);
// finally, disable the protocol check to allow file://
ga('set', 'checkProtocolTask', function(data) {
    data.set('location', 'http://sync-sketch.craft.invisionapp.com');
});
ga('set', 'campaignName', 'version');
ga('set', 'campaignSource', 'sketch');
ga('set', 'campaignMedium', version);
ga('send', 'pageview');

// Segment - craft-production
analytics.load('CdqOZdcl7nH2HQtHiSwTge7bbaWNKpBr');

panel.on('panel-will-appear', function() {
  analytics.track('Opened panel');
});

panel.on('user-signed-in', function (userData) {
  if (userData.hasAlias) {
    analytics.alias(userData.id);
  }

  analytics.identify(userData.id, {
    email: userData.email,
    product: 'sync',
    platform: 'sketch',
    name: userData.name,
    createdAt: new Date(),
    sketchVersion: version
  });

  analytics.track('CraftSync.signedIn');
});

analytics.ready(function() {
  panel.emitData('analytics-ready');

  analytics.identify({
    'product': 'sync',
    'platform': 'sketch',
    'createdAt': new Date(),
    'sketchVersion': version
  });

  analytics.track('Opened panel');
});
