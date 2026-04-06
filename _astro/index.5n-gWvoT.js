import{w as Yc,o as b,P as le,g as P,Z as Ea,a as Nn,F as tl,j as Ha,r as Gc,b as qc,f as Zc,T as de,k as Qc,H as od,x as ld,R as x,O as il}from"./index.QT77-Yrq.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="40369227-c2cd-49d0-a0d6-668341717353",e._sentryDebugIdIdentifier="sentry-dbid-40369227-c2cd-49d0-a0d6-668341717353")}catch{}})();const f={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},M={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},dd={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},ud=Object.entries(dd),s=ud.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),zc={USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Ft=ud.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...zc});Object.entries(Ft).reduce((e,[t,i])=>{const a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});const Xc=Object.entries(s).reduce((e,[t,i])=>{const a=Ft[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Ge={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Ei={DISABLED:"disabled",SHOWING:"showing"},al={MOUSE:"mouse",TOUCH:"touch"},be={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},tt={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Jc={FULLSCREEN:"fullscreen"},jc={2:"Network Error",3:"Decode Error",4:"Source Not Supported",5:"Encryption Error"},eh={2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."},cd=e=>{var t,i;return e.code===1?null:{title:(t=jc[e.code])!=null?t:`Error ${e.code}`,message:(i=eh[e.code])!=null?i:e.message}},W={ENTER_AIRPLAY:"Start airplay",EXIT_AIRPLAY:"Stop airplay",AUDIO_TRACK_MENU:"Audio",CAPTIONS:"Captions",ENABLE_CAPTIONS:"Enable captions",DISABLE_CAPTIONS:"Disable captions",START_CAST:"Start casting",STOP_CAST:"Stop casting",ENTER_FULLSCREEN:"Enter fullscreen mode",EXIT_FULLSCREEN:"Exit fullscreen mode",MUTE:"Mute",UNMUTE:"Unmute",ENTER_PIP:"Enter picture in picture mode",EXIT_PIP:"Enter picture in picture mode",PLAY:"Play",PAUSE:"Pause",PLAYBACK_RATE:"Playback rate",RENDITIONS:"Quality",SEEK_BACKWARD:"Seek backward",SEEK_FORWARD:"Seek forward",SETTINGS:"Settings"},ve={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},ne={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function th(e){return e?.map(ah).join(" ")}function ih(e){return e?.split(/\s+/).map(rh)}function ah(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function rh(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function nh(e){return e?.map(oh).join(" ")}function sh(e){return e?.split(/\s+/).map(lh)}function oh(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function lh(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function dh(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function zs(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function hd(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}const md=e=>new Promise(t=>setTimeout(t,e)),rl=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],uh=(e,t)=>{const i=e===1?rl[t].singular:rl[t].plural;return`${e} ${i}`},ba=e=>{if(!zs(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,u)=>l&&uh(l,u)).filter(l=>l).join(", ")}${i?" remaining":""}`};function Nt(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const o=Math.floor(t/60%60),l=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||l>0?n+":":"",r=((n||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}class pd{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class vd extends pd{}let nl=class extends vd{constructor(){super(...arguments),this.role=null}};class ch{observe(){}unobserve(){}disconnect(){}}const Ed={createElement:function(){return new ka.HTMLElement},createElementNS:function(){return new ka.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},ka={ResizeObserver:ch,document:Ed,Node:vd,Element:nl,HTMLElement:class extends nl{constructor(){super(...arguments),this.innerHTML=""}get content(){return new ka.DocumentFragment}},DocumentFragment:class extends pd{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}}},bd=typeof window>"u"||typeof window.customElements>"u",fd=Object.keys(ka).every(e=>e in globalThis),d=bd&&!fd?ka:globalThis,g=bd&&!fd?Ed:globalThis.document,sl=new WeakMap,Xs=e=>{let t=sl.get(e);return t||sl.set(e,t=new Set),t},gd=new d.ResizeObserver(e=>{for(const t of e)for(const i of Xs(t.target))i(t)});function yi(e,t){Xs(e).add(t),gd.observe(e)}function Ia(e,t){const i=Xs(e);i.delete(t),i.size||gd.unobserve(e)}function hh(e){const t={};for(const i of e)t[i.name]=i.value;return t}function _e(e){var t;return(t=Qn(e))!=null?t:wi(e,"media-controller")}function Qn(e){var t;const{MEDIA_CONTROLLER:i}=M,a=e.getAttribute(i);if(a)return(t=Tn(e))==null?void 0:t.getElementById(a)}const _d=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},mh=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},Ad=(e,t)=>mh(e,t)[0],rt=(e,t)=>!e||!t?!1:e?.contains(t)?!0:rt(e,t.getRootNode().host),wi=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||wi(e.getRootNode().host,t)};function Js(e=document){var t;const i=e?.activeElement;return i?(t=Js(i.shadowRoot))!=null?t:i:null}function Tn(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Td(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function ph(e,t,i,a){const r=Pn(i,a),n=Pn(i,{x:e,y:t}),o=Pn(a,{x:e,y:t});return n>r||o>r?n>o?1:0:n/r}function Pn(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function q(e,t){const i=vh(e,a=>a===t);return i||yd(e,t)}function vh(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(t(o.selectorText))return o}}function yd(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function U(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function V(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}U(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function Q(e,t){return e.hasAttribute(t)}function z(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}Q(e,t)!=i&&e.toggleAttribute(t,i)}function Y(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function G(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;Y(e,t,void 0)!==a&&e.setAttribute(t,a)}var kd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ot=(e,t,i)=>(kd(e,t,"read from private field"),i?i.call(e):t.get(e)),Eh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Fa=(e,t,i,a)=>(kd(e,t,"write to private field"),t.set(e,i),i),se;const Id=g.createElement("template");Id.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class bh extends d.HTMLElement{constructor(t={}){if(super(),Eh(this,se,void 0),!this.shadowRoot){const i=this.attachShadow({mode:"open"}),a=Id.content.cloneNode(!0);this.nativeEl=a;let r=t.slotTemplate;r||(r=g.createElement("template"),r.innerHTML=`<slot>${t.defaultContent||""}</slot>`),this.nativeEl.appendChild(r.content.cloneNode(!0)),i.appendChild(a)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===M.MEDIA_CONTROLLER&&(i&&((n=(r=ot(this,se))==null?void 0:r.unassociateElement)==null||n.call(r,this),Fa(this,se,null)),a&&this.isConnected&&(Fa(this,se,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=ot(this,se))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var t,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Fa(this,se,fh(this)),this.getAttribute(M.MEDIA_CONTROLLER)&&((i=(t=ot(this,se))==null?void 0:t.associateElement)==null||i.call(t,this)),(a=ot(this,se))==null||a.addEventListener("pointerdown",this),(r=ot(this,se))==null||r.addEventListener("click",this)}disconnectedCallback(){var t,i,a,r;this.getAttribute(M.MEDIA_CONTROLLER)&&((i=(t=ot(this,se))==null?void 0:t.unassociateElement)==null||i.call(t,this)),(a=ot(this,se))==null||a.removeEventListener("pointerdown",this),(r=ot(this,se))==null||r.removeEventListener("click",this),Fa(this,se,null)}handleEvent(t){var i;const a=(i=t.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(t.type==="pointerdown")this._pointerType=t.pointerType;else if(t.type==="click"){const{clientX:n,clientY:o}=t,{left:l,top:u,width:c,height:v}=this.getBoundingClientRect(),p=n-l,m=o-u;if(p<0||m<0||p>c||m>v||c===0&&v===0)return;const{pointerType:E=this._pointerType}=t;if(this._pointerType=void 0,E===al.TOUCH){this.handleTap(t);return}else if(E===al.MOUSE){this.handleMouseClick(t);return}}}}get mediaPaused(){return Q(this,s.MEDIA_PAUSED)}set mediaPaused(t){z(this,s.MEDIA_PAUSED,t)}handleTap(t){}handleMouseClick(t){const i=this.mediaPaused?f.MEDIA_PLAY_REQUEST:f.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(i,{composed:!0,bubbles:!0}))}}se=new WeakMap;function fh(e){var t;const i=e.getAttribute(M.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):wi(e,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",bh);var js=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ft=(e,t,i)=>(js(e,t,"read from private field"),i?i.call(e):t.get(e)),Qe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ta=(e,t,i,a)=>(js(e,t,"write to private field"),t.set(e,i),i),Ce=(e,t,i)=>(js(e,t,"access private method"),i),tn,Qt,Sa,mi,zn,Sd,Xn,Cd,Ca,yn,kn,eo,ki,wa;const S={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},wd=g.createElement("template");wd.innerHTML=`
  <style>
    
    :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${S.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${S.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${S.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${S.AUDIO}])[${S.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${S.AUDIO}])[${S.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${S.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${S.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${S.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${S.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${S.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${S.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${S.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${S.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${S.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${S.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${S.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;const gh=Object.values(s),_h="sm:384 md:576 lg:768 xl:960";function Ah(e){Th(e.target,e.contentRect.width)}function Th(e,t){var i;if(!e.isConnected)return;const a=(i=e.getAttribute(S.BREAKPOINTS))!=null?i:_h,r=yh(a),n=kh(r,t);let o=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),o=!0);return}e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(Ft.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(l)}}function yh(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function kh(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}class Rd extends d.HTMLElement{constructor(){super(),Qe(this,zn),Qe(this,Xn),Qe(this,Ca),Qe(this,kn),Qe(this,ki),Qe(this,tn,0),Qe(this,Qt,null),Qe(this,Sa,null),Qe(this,mi,void 0),this.breakpointsComputed=!1,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(wd.content.cloneNode(!0)));const t=o=>{const l=this.media;for(const u of o)u.type==="childList"&&(u.removedNodes.forEach(c=>{if(c.slot=="media"&&u.target==this){let v=u.previousSibling&&u.previousSibling.previousElementSibling;if(!v||!l)this.mediaUnsetCallback(c);else{let p=v.slot!=="media";for(;(v=v.previousSibling)!==null;)v.slot=="media"&&(p=!1);p&&this.mediaUnsetCallback(c)}}}),l&&u.addedNodes.forEach(c=>{c===l&&this.handleMediaUpdated(l)}))};new MutationObserver(t).observe(this,{childList:!0,subtree:!0});let a=!1;yi(this,o=>{a||(setTimeout(()=>{Ah(o),a=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(Ft.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),a=!0)});const n=this.querySelector(":scope > slot[slot=media]");n&&n.addEventListener("slotchange",()=>{if(!n.assignedElements({flatten:!0}).length){ft(this,Qt)&&this.mediaUnsetCallback(ft(this,Qt));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[S.AUTOHIDE,S.GESTURES_DISABLED].concat(gh).filter(t=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT,s.MEDIA_ERROR,s.MEDIA_ERROR_MESSAGE].includes(t))}attributeChangedCallback(t,i,a){t.toLowerCase()==S.AUTOHIDE&&(this.autohide=a)}get media(){let t=this.querySelector(":scope > [slot=media]");return t?.nodeName=="SLOT"&&(t=t.assignedElements({flatten:!0})[0]),t}async handleMediaUpdated(t){t&&(ta(this,Qt,t),t.localName.includes("-")&&await d.customElements.whenDefined(t.localName),this.mediaSetCallback(t))}connectedCallback(){var t;const a=this.getAttribute(S.AUDIO)!=null?ve.AUDIO_PLAYER():ve.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(S.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(t=d.window)==null||t.addEventListener("mouseup",this)}disconnectedCallback(){var t;this.media&&this.mediaUnsetCallback(this.media),(t=d.window)==null||t.removeEventListener("mouseup",this)}mediaSetCallback(t){}mediaUnsetCallback(t){ta(this,Qt,null)}handleEvent(t){switch(t.type){case"pointerdown":ta(this,tn,t.timeStamp);break;case"pointermove":Ce(this,zn,Sd).call(this,t);break;case"pointerup":Ce(this,Xn,Cd).call(this,t);break;case"mouseleave":Ce(this,Ca,yn).call(this);break;case"mouseup":this.removeAttribute(S.KEYBOARD_CONTROL);break;case"keyup":Ce(this,ki,wa).call(this),this.setAttribute(S.KEYBOARD_CONTROL,"");break}}set autohide(t){const i=Number(t);ta(this,mi,isNaN(i)?0:i)}get autohide(){return(ft(this,mi)===void 0?2:ft(this,mi)).toString()}}tn=new WeakMap;Qt=new WeakMap;Sa=new WeakMap;mi=new WeakMap;zn=new WeakSet;Sd=function(e){e.pointerType!=="mouse"&&e.timeStamp-ft(this,tn)<250||(Ce(this,kn,eo).call(this),clearTimeout(ft(this,Sa)),[this,this.media].includes(e.target)&&Ce(this,ki,wa).call(this))};Xn=new WeakSet;Cd=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(S.USER_INACTIVE);[this,this.media].includes(e.target)&&t?Ce(this,Ca,yn).call(this):Ce(this,ki,wa).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&Ce(this,ki,wa).call(this)};Ca=new WeakSet;yn=function(){if(ft(this,mi)<0||this.hasAttribute(S.USER_INACTIVE))return;this.setAttribute(S.USER_INACTIVE,"");const e=new d.CustomEvent(Ft.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};kn=new WeakSet;eo=function(){if(!this.hasAttribute(S.USER_INACTIVE))return;this.removeAttribute(S.USER_INACTIVE);const e=new d.CustomEvent(Ft.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};ki=new WeakSet;wa=function(){Ce(this,kn,eo).call(this),clearTimeout(ft(this,Sa));const e=parseInt(this.autohide);e<0||ta(this,Sa,setTimeout(()=>{Ce(this,Ca,yn).call(this)},e*1e3))};d.customElements.get("media-container")||d.customElements.define("media-container",Rd);var Md=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ee=(e,t,i)=>(Md(e,t,"read from private field"),i?i.call(e):t.get(e)),Ki=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ka=(e,t,i,a)=>(Md(e,t,"write to private field"),t.set(e,i),i),zt,Xt,an,Lt,je,dt;class In{constructor(t,i,{defaultValue:a}={defaultValue:void 0}){Ki(this,je),Ki(this,zt,void 0),Ki(this,Xt,void 0),Ki(this,an,void 0),Ki(this,Lt,new Set),Ka(this,zt,t),Ka(this,Xt,i),Ka(this,an,new Set(a))}[Symbol.iterator](){return ee(this,je,dt).values()}get length(){return ee(this,je,dt).size}get value(){var t;return(t=[...ee(this,je,dt)].join(" "))!=null?t:""}set value(t){var i;t!==this.value&&(Ka(this,Lt,new Set),this.add(...(i=t?.split(" "))!=null?i:[]))}toString(){return this.value}item(t){return[...ee(this,je,dt)][t]}values(){return ee(this,je,dt).values()}forEach(t,i){ee(this,je,dt).forEach(t,i)}add(...t){var i,a;t.forEach(r=>ee(this,Lt).add(r)),!(this.value===""&&!((i=ee(this,zt))!=null&&i.hasAttribute(`${ee(this,Xt)}`)))&&((a=ee(this,zt))==null||a.setAttribute(`${ee(this,Xt)}`,`${this.value}`))}remove(...t){var i;t.forEach(a=>ee(this,Lt).delete(a)),(i=ee(this,zt))==null||i.setAttribute(`${ee(this,Xt)}`,`${this.value}`)}contains(t){return ee(this,je,dt).has(t)}toggle(t,i){return typeof i<"u"?i?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,i){return this.remove(t),this.add(i),t===i}}zt=new WeakMap;Xt=new WeakMap;an=new WeakMap;Lt=new WeakMap;je=new WeakSet;dt=function(){return ee(this,Lt).size?ee(this,Lt):ee(this,an)};const Ih=(e="")=>e.split(/\s+/),Ld=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Ge.CAPTIONS:Ge.SUBTITLES,language:i,label:r}},Sn=(e="",t={})=>Ih(e).map(i=>{const a=Ld(i);return{...t,...a}}),Dd=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?Ld(t):t):typeof e=="string"?Sn(e):[e]:[],Jn=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,Ra=(e=[])=>Array.prototype.map.call(e,Jn).join(" "),Sh=(e,t)=>i=>i[e]===t,xd=e=>{const t=Object.entries(e).map(([i,a])=>Sh(i,a));return i=>t.every(a=>a(i))},fa=(e,t=[],i=[])=>{const a=Dd(i).map(xd),r=n=>a.some(o=>o(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},Cn=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const i=typeof t=="function"?t:xd(t);return Array.from(e.textTracks).filter(i)},Od=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},Ch=e=>{var t;const{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()},ol="exitFullscreen"in g?"exitFullscreen":"webkitExitFullscreen"in g?"webkitExitFullscreen":"webkitCancelFullScreen"in g?"webkitCancelFullScreen":void 0,wh=e=>{var t;const{documentElement:i}=e;if(ol){const a=(t=i?.[ol])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},ia="fullscreenElement"in g?"fullscreenElement":"webkitFullscreenElement"in g?"webkitFullscreenElement":void 0,Rh=e=>{const{documentElement:t,media:i}=e,a=t?.[ia];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Jc.FULLSCREEN?i:a},Mh=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=Rh(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(ia in o))return rt(n,r);for(;o?.[ia];){if(o[ia]===r)return!0;o=(t=o[ia])==null?void 0:t.shadowRoot}}return!1},Lh="fullscreenEnabled"in g?"fullscreenEnabled":"webkitFullscreenEnabled"in g?"webkitFullscreenEnabled":void 0,Dh=e=>{const{documentElement:t,media:i}=e;return!!t?.[Lh]||i&&"webkitSupportsFullscreen"in i};let Va;const to=()=>{var e,t;return Va||(Va=(t=(e=g)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Va)},xh=async(e=to())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([Oh(e,i.signal),Nh(e,t)]);return i.abort(),a},Oh=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),Nh=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await md(10)}return e.volume!==t},Ph=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),Nd=(e=to())=>d.matchMedia("(display-mode: standalone)").matches&&Ph?!1:typeof e?.requestPictureInPicture=="function",Pd=(e=to())=>Dh({documentElement:g,media:e}),Uh=Pd(),$h=Nd(),Bh=!!d.WebKitPlaybackTargetAvailabilityEvent,Wh=!!d.chrome,rn=e=>Cn(e.media,t=>[Ge.SUBTITLES,Ge.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),Ud=e=>Cn(e.media,t=>t.mode===Ei.SHOWING&&[Ge.SUBTITLES,Ge.CAPTIONS].includes(t.kind)),$d=(e,t)=>{const i=rn(e),a=Ud(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)fa(Ei.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:o}=e;if(!o?.noSubtitlesLangPref){const v=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=v?[v,...globalThis.navigator.languages]:globalThis.navigator.languages,m=i.filter(E=>p.some(k=>E.language.toLowerCase().startsWith(k.split("-")[0]))).sort((E,k)=>{const A=p.findIndex(w=>E.language.toLowerCase().startsWith(w.split("-")[0])),_=p.findIndex(w=>k.language.toLowerCase().startsWith(w.split("-")[0]));return A-_});m[0]&&(n=m[0])}const{language:l,label:u,kind:c}=n;fa(Ei.DISABLED,i,a),fa(Ei.SHOWING,i,[{language:l,label:u,kind:c}])}}},io=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?Hh(e,t):Object.entries(e).every(([i,a])=>i in t&&io(a,t[i])),Hh=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>io(r,t[n])):!0},Fh=Object.values(tt);let nn;const Kh=xh().then(e=>(nn=e,nn)),Vh=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof d.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&t instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(t))}))},or={mediaError:{get(e){const{media:t}=e;return t?.error},mediaEvents:["emptied","error"]},mediaErrorCode:{get(e){var t;const{media:i}=e;return(t=i?.error)==null?void 0:t.code},mediaEvents:["emptied","error"]},mediaErrorMessage:{get(e){var t,i;const{media:a}=e;return(i=(t=a?.error)==null?void 0:t.message)!=null?i:""},mediaEvents:["emptied","error"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i?.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i?.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i?.muted)!=null?t:!1},set(e,t){const{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i?.volume)!=null?t:1},set(e,t){const{media:i}=t;if(i){try{e==null?d.localStorage.removeItem("media-chrome-pref-volume"):d.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch{}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const a=d.localStorage.getItem("media-chrome-pref-volume");if(a==null)return;or.mediaVolume.set(+a,t),e(+a)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i?.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!zs(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t?.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i?.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i?.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[tt.LIVE,tt.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(Fh.includes(r))return r===tt.UNKNOWN?a:r;const n=t.duration;return n===1/0?tt.LIVE:Number.isFinite(n)?tt.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:i}=t,a=or.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===tt.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(or.mediaStreamType.get(e)===tt.LIVE))return!1;const r=t.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return rn(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return Ud(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const o=l=>{var u;!n.defaultSubtitles||l&&![Ge.CAPTIONS,Ge.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||$d(t,!0)};return(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),o(),()=>{var l,u;(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=Cn(i,{kind:Ge.CHAPTERS});return Array.from((t=a?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:o})=>({text:r,startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?rt(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!g.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else g.pictureInPictureElement&&g.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i?.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r?.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return Mh(e)},set(e,t){e?Ch(t):wh(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!i?.remote||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!Uh||!Pd(t))return be.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!$h||!Nd(t))return be.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(nn===!1||t?.volume==null)return be.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{nn==null&&Kh.then(t=>e(t?void 0:be.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!Wh||!((i=a?.remote)!=null&&i.state))return be.UNSUPPORTED;if(!(t==null||t==="available"))return be.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!Bh)return be.UNSUPPORTED;if(t?.availability==="not-available")return be.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!i?.videoRenditions)return be.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return be.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!a?.audioTracks)return be.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return be.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},Yh={[f.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:o}=t,l=i??void 0;let u,c;if(o&&l!=null){const[E]=Cn(o,{kind:Ge.METADATA,label:"thumbnails"}),k=Array.prototype.find.call((a=E?.cues)!=null?a:[],(A,_,w)=>_===0?A.endTime>l:_===w.length-1?A.startTime<=l:A.startTime<=l&&A.endTime>l);if(k){const A=/'^(?:[a-z]+:)?\/\//i.test(k.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(k.text,A);c=new URLSearchParams(_.hash).get("#xywh").split(",").map(ie=>+ie),u=_.href}}const v=e.mediaDuration.get(t);let m=(n=e.mediaChaptersCues.get(t).find((E,k,A)=>k===A.length-1&&v===E.endTime?E.startTime<=l&&E.endTime>=l:E.startTime<=l&&E.endTime>l))==null?void 0:n.text;return i!=null&&m==null&&(m=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:c,mediaPreviewChapter:m}},[f.MEDIA_PAUSE_REQUEST](e,t){e["mediaPaused"].set(!0,t)},[f.MEDIA_PLAY_REQUEST](e,t){var i;const a="mediaPaused";if(e.mediaStreamType.get(t)===tt.LIVE){const o=!(e.mediaTargetLiveWindow.get(t)>0),l=(i=e.mediaSeekable.get(t))==null?void 0:i[1];o&&l&&e.mediaCurrentTime.set(l,t)}e[a].set(!1,t)},[f.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[f.MEDIA_MUTE_REQUEST](e,t){e["mediaMuted"].set(!0,t)},[f.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[f.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[f.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[f.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;const a="mediaCurrentTime",r=(i=e.mediaSeekable.get(t))==null?void 0:i[1];Number.isNaN(Number(r))||e[a].set(r,t)},[f.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=rn(t),o=Dd(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),fa(Ei.SHOWING,n,o)},[f.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=rn(t),r=i??[];fa(Ei.DISABLED,a,r)},[f.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){$d(t,i)},[f.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[f.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[f.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[f.MEDIA_EXIT_PIP_REQUEST](e,t){e["mediaIsPip"].set(!1,t)},[f.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){const i="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[i].set(!0,t)},[f.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e["mediaIsFullscreen"].set(!1,t)},[f.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[f.MEDIA_EXIT_CAST_REQUEST](e,t){e["mediaIsCasting"].set(!1,t)},[f.MEDIA_AIRPLAY_REQUEST](e,t){e["mediaIsAirplaying"].set(!0,t)}},Gh=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=or,requestMap:r=Yh,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...n}};let c=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const v=A=>{A!=null&&(io(A,c)||(c=Object.freeze({...c,...A}),l.forEach(_=>_(c))))},p=()=>{const A=Object.entries(a).reduce((_,[w,{get:ie}])=>(_[w]=ie(u),_),{});v(A)},m={};let E;const k=async(A,_)=>{var w,ie,ue,st,Ze,Li,Di,xi,Oi,Ni,Pi,Ui,$i,Bi,Wi,Hi;const Wa=!!E;if(E={...u,...E??{},...A},Wa)return;await Vh(...Object.values(A));const Kt=l.length>0&&_===0&&o,Oo=u.media!==E.media,No=((w=u.media)==null?void 0:w.textTracks)!==((ie=E.media)==null?void 0:ie.textTracks),Po=((ue=u.media)==null?void 0:ue.videoRenditions)!==((st=E.media)==null?void 0:st.videoRenditions),Uo=((Ze=u.media)==null?void 0:Ze.audioTracks)!==((Li=E.media)==null?void 0:Li.audioTracks),$o=((Di=u.media)==null?void 0:Di.remote)!==((xi=E.media)==null?void 0:xi.remote),Bo=u.documentElement!==E.documentElement,Wo=!!u.media&&(Oo||Kt),Ho=!!((Oi=u.media)!=null&&Oi.textTracks)&&(No||Kt),Fo=!!((Ni=u.media)!=null&&Ni.videoRenditions)&&(Po||Kt),Ko=!!((Pi=u.media)!=null&&Pi.audioTracks)&&(Uo||Kt),Vo=!!((Ui=u.media)!=null&&Ui.remote)&&($o||Kt),Yo=!!u.documentElement&&(Bo||Kt),Go=Wo||Ho||Fo||Ko||Vo||Yo,Vt=l.length===0&&_===1&&o,qo=!!E.media&&(Oo||Vt),Zo=!!(($i=E.media)!=null&&$i.textTracks)&&(No||Vt),Qo=!!((Bi=E.media)!=null&&Bi.videoRenditions)&&(Po||Vt),zo=!!((Wi=E.media)!=null&&Wi.audioTracks)&&(Uo||Vt),Xo=!!((Hi=E.media)!=null&&Hi.remote)&&($o||Vt),Jo=!!E.documentElement&&(Bo||Vt),jo=qo||Zo||Qo||zo||Xo||Jo;if(!(Go||jo)){Object.entries(E).forEach(([L,Fi])=>{u[L]=Fi}),p(),E=void 0;return}Object.entries(a).forEach(([L,{get:Fi,mediaEvents:$c=[],textTracksEvents:Bc=[],videoRenditionsEvents:Wc=[],audioTracksEvents:Hc=[],remoteEvents:Fc=[],rootEvents:Kc=[],stateOwnersUpdateHandlers:Vc=[]}])=>{m[L]||(m[L]={});const ce=H=>{const he=Fi(u,H);v({[L]:he})};let X;X=m[L].mediaEvents,$c.forEach(H=>{X&&Wo&&(u.media.removeEventListener(H,X),m[L].mediaEvents=void 0),qo&&(E.media.addEventListener(H,ce),m[L].mediaEvents=ce)}),X=m[L].textTracksEvents,Bc.forEach(H=>{var he,Ae;X&&Ho&&((he=u.media.textTracks)==null||he.removeEventListener(H,X),m[L].textTracksEvents=void 0),Zo&&((Ae=E.media.textTracks)==null||Ae.addEventListener(H,ce),m[L].textTracksEvents=ce)}),X=m[L].videoRenditionsEvents,Wc.forEach(H=>{var he,Ae;X&&Fo&&((he=u.media.videoRenditions)==null||he.removeEventListener(H,X),m[L].videoRenditionsEvents=void 0),Qo&&((Ae=E.media.videoRenditions)==null||Ae.addEventListener(H,ce),m[L].videoRenditionsEvents=ce)}),X=m[L].audioTracksEvents,Hc.forEach(H=>{var he,Ae;X&&Ko&&((he=u.media.audioTracks)==null||he.removeEventListener(H,X),m[L].audioTracksEvents=void 0),zo&&((Ae=E.media.audioTracks)==null||Ae.addEventListener(H,ce),m[L].audioTracksEvents=ce)}),X=m[L].remoteEvents,Fc.forEach(H=>{var he,Ae;X&&Vo&&((he=u.media.remote)==null||he.removeEventListener(H,X),m[L].remoteEvents=void 0),Xo&&((Ae=E.media.remote)==null||Ae.addEventListener(H,ce),m[L].remoteEvents=ce)}),X=m[L].rootEvents,Kc.forEach(H=>{X&&Yo&&(u.documentElement.removeEventListener(H,X),m[L].rootEvents=void 0),Jo&&(E.documentElement.addEventListener(H,ce),m[L].rootEvents=ce)});const el=m[L].stateOwnersUpdateHandlers;Vc.forEach(H=>{el&&Go&&el(),jo&&(m[L].stateOwnersUpdateHandlers=H(ce,E))})}),Object.entries(E).forEach(([L,Fi])=>{u[L]=Fi}),p(),E=void 0};return k({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(A){const{type:_,detail:w}=A;if(r[_]&&c.mediaErrorCode==null){v(r[_](a,u,A));return}_==="mediaelementchangerequest"?k({media:w}):_==="fullscreenelementchangerequest"?k({fullscreenElement:w}):_==="documentelementchangerequest"?k({documentElement:w}):_==="optionschangerequest"&&Object.entries(w??{}).forEach(([ie,ue])=>{u.options[ie]=ue})},getState(){return c},subscribe(A){return k({},l.length+1),l.push(A),A(c),()=>{const _=l.indexOf(A);_>=0&&(k({},l.length-1),l.splice(_,1))}}}};var qh=Gh,ao=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},y=(e,t,i)=>(ao(e,t,"read from private field"),i?i.call(e):t.get(e)),ze=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lt=(e,t,i,a)=>(ao(e,t,"write to private field"),t.set(e,i),i),vt=(e,t,i)=>(ao(e,t,"access private method"),i),Et,aa,N,ra,De,lr,dr,jn,Ii,Ma,ur,es;const Bd=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ll=10,I={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class Wd extends Rd{constructor(){super(),ze(this,dr),ze(this,Ii),ze(this,ur),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ze(this,Et,new In(this,I.HOTKEYS)),ze(this,aa,void 0),ze(this,N,void 0),ze(this,ra,void 0),ze(this,De,void 0),ze(this,lr,i=>{var a;(a=y(this,N))==null||a.dispatch(i)}),this.associateElement(this);let t={};lt(this,ra,i=>{Object.entries(i).forEach(([a,r])=>{if(a in t&&t[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),o=new d.CustomEvent(Xc[n],{composed:!0,detail:r});this.dispatchEvent(o)}),t=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(I.NO_HOTKEYS,I.HOTKEYS,I.DEFAULT_STREAM_TYPE,I.DEFAULT_SUBTITLES,I.DEFAULT_DURATION)}get mediaStore(){return y(this,N)}set mediaStore(t){var i,a;if(y(this,N)&&((i=y(this,De))==null||i.call(this),lt(this,De,void 0)),lt(this,N,t),!y(this,N)&&!this.hasAttribute(I.NO_DEFAULT_STORE)){vt(this,dr,jn).call(this);return}lt(this,De,(a=y(this,N))==null?void 0:a.subscribe(y(this,ra)))}get fullscreenElement(){var t;return(t=y(this,aa))!=null?t:this}set fullscreenElement(t){var i;this.hasAttribute(I.FULLSCREEN_ELEMENT)&&this.removeAttribute(I.FULLSCREEN_ELEMENT),lt(this,aa,t),(i=y(this,N))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(t,i,a){var r,n,o,l,u,c;if(super.attributeChangedCallback(t,i,a),t===I.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(I.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(t===I.HOTKEYS)y(this,Et).value=a;else if(t===I.DEFAULT_SUBTITLES&&a!==i)(r=y(this,N))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(I.DEFAULT_SUBTITLES)}});else if(t===I.DEFAULT_STREAM_TYPE)(o=y(this,N))==null||o.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(I.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(t===I.LIVE_EDGE_OFFSET)(l=y(this,N))==null||l.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(I.LIVE_EDGE_OFFSET)?+this.getAttribute(I.LIVE_EDGE_OFFSET):void 0}});else if(t===I.FULLSCREEN_ELEMENT){const v=a?(u=this.getRootNode())==null?void 0:u.getElementById(a):void 0;lt(this,aa,v),(c=y(this,N))==null||c.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var t,i;!y(this,N)&&!this.hasAttribute(I.NO_DEFAULT_STORE)&&vt(this,dr,jn).call(this),(t=y(this,N))==null||t.dispatch({type:"documentelementchangerequest",detail:g}),super.connectedCallback(),y(this,N)&&!y(this,De)&&lt(this,De,(i=y(this,N))==null?void 0:i.subscribe(y(this,ra))),this.enableHotkeys()}disconnectedCallback(){var t,i,a,r;(t=super.disconnectedCallback)==null||t.call(this),y(this,N)&&((i=y(this,N))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=y(this,N))==null||a.dispatch({type:f.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),y(this,De)&&((r=y(this,De))==null||r.call(this),lt(this,De,void 0))}mediaSetCallback(t){var i;super.mediaSetCallback(t),(i=y(this,N))==null||i.dispatch({type:"mediaelementchangerequest",detail:t}),t.hasAttribute("tabindex")||(t.tabIndex=-1)}mediaUnsetCallback(t){var i;super.mediaUnsetCallback(t),(i=y(this,N))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(t,i){cl(this.mediaStateReceivers,t,i)}associateElement(t){if(!t)return;const{associatedElementSubscriptions:i}=this;if(i.has(t))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=jh(t,a,r);Object.values(f).forEach(o=>{t.addEventListener(o,y(this,lr))}),i.set(t,n)}unassociateElement(t){if(!t)return;const{associatedElementSubscriptions:i}=this;if(!i.has(t))return;i.get(t)(),i.delete(t),Object.values(f).forEach(r=>{t.removeEventListener(r,y(this,lr))})}registerMediaStateReceiver(t){if(!t)return;const i=this.mediaStateReceivers;i.indexOf(t)>-1||(i.push(t),y(this,N)&&Object.entries(y(this,N).getState()).forEach(([r,n])=>{cl([t],r,n)}))}unregisterMediaStateReceiver(t){const i=this.mediaStateReceivers,a=i.indexOf(t);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",vt(this,ur,es))}disableHotkeys(){this.removeEventListener("keydown",vt(this,ur,es)),this.removeEventListener("keyup",vt(this,Ii,Ma))}get hotkeys(){return y(this,Et)}keyboardShortcutHandler(t){var i,a,r,n,o;const l=t.target;if(((r=(a=(i=l.getAttribute(I.KEYS_USED))==null?void 0:i.split(" "))!=null?a:l?.keysUsed)!=null?r:[]).map(m=>m==="Space"?" ":m).filter(Boolean).includes(t.key))return;let c,v,p;if(!y(this,Et).contains(`no${t.key.toLowerCase()}`)&&!(t.key===" "&&y(this,Et).contains("nospace")))switch(t.key){case" ":case"k":c=y(this,N).getState().mediaPaused?f.MEDIA_PLAY_REQUEST:f.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"m":c=this.mediaStore.getState().mediaVolumeLevel==="off"?f.MEDIA_UNMUTE_REQUEST:f.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"f":c=this.mediaStore.getState().mediaIsFullscreen?f.MEDIA_EXIT_FULLSCREEN_REQUEST:f.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(f.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const m=this.hasAttribute(I.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(I.KEYBOARD_BACKWARD_SEEK_OFFSET):ll;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-m,0),p=new d.CustomEvent(f.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(p);break}case"ArrowRight":{const m=this.hasAttribute(I.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(I.KEYBOARD_FORWARD_SEEK_OFFSET):ll;v=Math.max(((o=this.mediaStore.getState().mediaCurrentTime)!=null?o:0)+m,0),p=new d.CustomEvent(f.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(p);break}}}}Et=new WeakMap;aa=new WeakMap;N=new WeakMap;ra=new WeakMap;De=new WeakMap;lr=new WeakMap;dr=new WeakSet;jn=function(){var e;this.mediaStore=qh({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(I.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(I.DEFAULT_DURATION)?+this.getAttribute(I.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(I.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(I.LIVE_EDGE_OFFSET)?+this.getAttribute(I.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(I.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(I.NO_SUBTITLES_LANG_PREF)}})};Ii=new WeakSet;Ma=function(e){const{key:t}=e;if(!Bd.includes(t)){this.removeEventListener("keyup",vt(this,Ii,Ma));return}this.keyboardShortcutHandler(e)};ur=new WeakSet;es=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!Bd.includes(a)){this.removeEventListener("keyup",vt(this,Ii,Ma));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(y(this,Et).contains(`no${a.toLowerCase()}`)||a===" "&&y(this,Et).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",vt(this,Ii,Ma),{once:!0})};const Zh=Object.values(s),Qh=Object.values(dd),Hd=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(d.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const o=(r=(a=(i=e?.getAttribute)==null?void 0:i.call(e,M.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(l=>Zh.includes(l)):[]},zh=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&d.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof d.customElements.get(e.nodeName.toLowerCase()))&&d.customElements.upgrade(e),Qh.some(a=>a in e)},ts=e=>zh(e)||!!Hd(e).length,dl=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},ul={[s.MEDIA_SUBTITLES_LIST]:Ra,[s.MEDIA_SUBTITLES_SHOWING]:Ra,[s.MEDIA_SEEKABLE]:dl,[s.MEDIA_BUFFERED]:e=>e?.map(dl).join(" "),[s.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[s.MEDIA_RENDITION_LIST]:th,[s.MEDIA_AUDIO_TRACK_LIST]:nh},Xh=async(e,t,i)=>{var a,r;if(e.isConnected||await md(0),typeof i=="boolean"||i==null)return z(e,t,i);if(typeof i=="number")return V(e,t,i);if(typeof i=="string")return G(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=ul[t])==null?void 0:a.call(ul,i))!=null?r:i;return e.setAttribute(t,n)},Jh=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},kt=(e,t)=>{if(Jh(e))return;const i=(r,n)=>{var o,l;ts(r)&&n(r);const{children:u=[]}=r??{},c=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...c].forEach(p=>kt(p,n))},a=e?.nodeName.toLowerCase();if(a.includes("-")&&!ts(e)){d.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},cl=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=Hd(a),n=t.toLowerCase();r.includes(n)&&Xh(a,n,i)})},jh=(e,t,i)=>{kt(e,t);const a=v=>{var p;const m=(p=v?.composedPath()[0])!=null?p:v.target;t(m)},r=v=>{var p;const m=(p=v?.composedPath()[0])!=null?p:v.target;i(m)};e.addEventListener(f.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(f.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=v=>{v.forEach(p=>{const{addedNodes:m=[],removedNodes:E=[],type:k,target:A,attributeName:_}=p;k==="childList"?(Array.prototype.forEach.call(m,w=>kt(w,t)),Array.prototype.forEach.call(E,w=>kt(w,i))):k==="attributes"&&_===M.MEDIA_CHROME_ATTRIBUTES&&(ts(A)?t(A):i(A))})};let o=[];const l=v=>{const p=v.target;p.name!=="media"&&(o.forEach(m=>kt(m,i)),o=[...p.assignedElements({flatten:!0})],o.forEach(m=>kt(m,t)))};e.addEventListener("slotchange",l);const u=new MutationObserver(n);return u.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{kt(e,i),e.removeEventListener("slotchange",l),u.disconnect(),e.removeEventListener(f.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(f.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",Wd);var em=Wd,ro=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},F=(e,t,i)=>(ro(e,t,"read from private field"),i?i.call(e):t.get(e)),Yt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ya=(e,t,i,a)=>(ro(e,t,"write to private field"),t.set(e,i),i),tm=(e,t,i)=>(ro(e,t,"access private method"),i),xe,pi,bt,Jt,cr,is,Fd;const Ga={TOOLTIP_PLACEMENT:"tooltipplacement"},Kd=g.createElement("template");Kd.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class Ee extends d.HTMLElement{constructor(t={}){var i;if(super(),Yt(this,is),Yt(this,xe,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",Yt(this,pi,a=>{this.preventClick||this.handleClick(a),setTimeout(F(this,bt),0)}),Yt(this,bt,()=>{var a,r;(r=(a=this.tooltipEl)==null?void 0:a.updateXOffset)==null||r.call(a)}),Yt(this,Jt,a=>{const{key:r}=a;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",F(this,Jt));return}this.preventClick||this.handleClick(a)}),Yt(this,cr,a=>{const{metaKey:r,altKey:n,key:o}=a;if(r||n||!this.keysUsed.includes(o)){this.removeEventListener("keyup",F(this,Jt));return}this.addEventListener("keyup",F(this,Jt),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});const a=Kd.content.cloneNode(!0);this.nativeEl=a;let r=t.slotTemplate;r||(r=g.createElement("template"),r.innerHTML=`<slot>${t.defaultContent||""}</slot>`),t.tooltipContent&&(a.querySelector('slot[name="tooltip-content"]').innerHTML=(i=t.tooltipContent)!=null?i:"",this.tooltipContent=t.tooltipContent),this.nativeEl.appendChild(r.content.cloneNode(!0)),this.shadowRoot.appendChild(a)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ga.TOOLTIP_PLACEMENT,M.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",F(this,pi)),this.addEventListener("keydown",F(this,cr)),this.tabIndex=0}disable(){this.removeEventListener("click",F(this,pi)),this.removeEventListener("keydown",F(this,cr)),this.removeEventListener("keyup",F(this,Jt)),this.tabIndex=-1}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===M.MEDIA_CONTROLLER?(i&&((n=(r=F(this,xe))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ya(this,xe,null)),a&&this.isConnected&&(Ya(this,xe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=F(this,xe))==null?void 0:l.associateElement)==null||u.call(l,this))):t==="disabled"&&a!==i?a==null?this.enable():this.disable():t===Ga.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i&&(this.tooltipEl.placement=a),F(this,bt).call(this)}connectedCallback(){var t,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(Ya(this,xe,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=F(this,xe))==null?void 0:i.associateElement)==null||a.call(i,this)),d.customElements.whenDefined("media-tooltip").then(()=>tm(this,is,Fd).call(this))}disconnectedCallback(){var t,i;this.disable(),(i=(t=F(this,xe))==null?void 0:t.unassociateElement)==null||i.call(t,this),Ya(this,xe,null),this.removeEventListener("mouseenter",F(this,bt)),this.removeEventListener("focus",F(this,bt)),this.removeEventListener("click",F(this,pi))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return Y(this,Ga.TOOLTIP_PLACEMENT)}set tooltipPlacement(t){G(this,Ga.TOOLTIP_PLACEMENT,t)}handleClick(t){}}xe=new WeakMap;pi=new WeakMap;bt=new WeakMap;Jt=new WeakMap;cr=new WeakMap;is=new WeakSet;Fd=function(){this.addEventListener("mouseenter",F(this,bt)),this.addEventListener("focus",F(this,bt)),this.addEventListener("click",F(this,pi));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",Ee);const hl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,Vd=g.createElement("template");Vd.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${hl}</slot>
    <slot name="exit">${hl}</slot>
  </slot>
`;const im=`
  <slot name="tooltip-enter">${W.ENTER_AIRPLAY}</slot>
  <slot name="tooltip-exit">${W.EXIT_AIRPLAY}</slot>
`,ml=e=>{const t=e.mediaIsAirplaying?ne.EXIT_AIRPLAY():ne.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class am extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Vd,tooltipContent:im,...t})}connectedCallback(){super.connectedCallback(),ml(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_IS_AIRPLAYING&&ml(this)}get mediaIsAirplaying(){return Q(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(t){z(this,s.MEDIA_IS_AIRPLAYING,t)}get mediaAirplayUnavailable(){return Y(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){G(this,s.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){const t=new d.CustomEvent(f.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}}d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",am);const rm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,Yd=g.createElement("template");Yd.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${rm}</slot>
    <slot name="off">${nm}</slot>
  </slot>
`;const sm=`
  <slot name="tooltip-enable">${W.ENABLE_CAPTIONS}</slot>
  <slot name="tooltip-disable">${W.DISABLE_CAPTIONS}</slot>
`,pl=e=>{e.setAttribute("aria-checked",Od(e).toString())};class om extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}constructor(t={}){super({slotTemplate:Yd,tooltipContent:sm,...t}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",ve.CLOSED_CAPTIONS()),pl(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_SUBTITLES_SHOWING&&pl(this)}get mediaSubtitlesList(){return vl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){El(this,s.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return vl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){El(this,s.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){this.dispatchEvent(new d.CustomEvent(f.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}const vl=(e,t)=>{const i=e.getAttribute(t);return i?Sn(i):[]},El=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ra(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",om);const lm='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',dm='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',Gd=g.createElement("template");Gd.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${lm}</slot>
    <slot name="exit">${dm}</slot>
  </slot>
`;const um=`
  <slot name="tooltip-enter">${W.START_CAST}</slot>
  <slot name="tooltip-exit">${W.STOP_CAST}</slot>
`,bl=e=>{const t=e.mediaIsCasting?ne.EXIT_CAST():ne.ENTER_CAST();e.setAttribute("aria-label",t)};class cm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Gd,tooltipContent:um,...t})}connectedCallback(){super.connectedCallback(),bl(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_IS_CASTING&&bl(this)}get mediaIsCasting(){return Q(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(t){z(this,s.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return Y(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){G(this,s.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){const t=this.mediaIsCasting?f.MEDIA_EXIT_CAST_REQUEST:f.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}}d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",cm);var no=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Pt=(e,t,i)=>(no(e,t,"read from private field"),t.get(e)),Xe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},so=(e,t,i,a)=>(no(e,t,"write to private field"),t.set(e,i),i),_t=(e,t,i)=>(no(e,t,"access private method"),i),sn,La,Ht,hr,as,rs,qd,ns,Zd,ss,Qd,os,zd,ls,Xd;function hm(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        transition: display .15s, opacity .15s ease-in, transform .15s ease-in;
        transition-behavior: allow-discrete;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, opacity .2s ease-out, transform .15s ease-out;
        transition-behavior: allow-discrete;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function mm(e){return`
    <slot id="content"></slot>
  `}const Vi={OPEN:"open",ANCHOR:"anchor"};class wn extends d.HTMLElement{constructor(){super(),Xe(this,hr),Xe(this,rs),Xe(this,ns),Xe(this,ss),Xe(this,os),Xe(this,ls),Xe(this,sn,!1),Xe(this,La,null),Xe(this,Ht,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[Vi.OPEN,Vi.ANCHOR]}get open(){return Q(this,Vi.OPEN)}set open(t){z(this,Vi.OPEN,t)}handleEvent(t){switch(t.type){case"invoke":_t(this,ss,Qd).call(this,t);break;case"focusout":_t(this,os,zd).call(this,t);break;case"keydown":_t(this,ls,Xd).call(this,t);break}}connectedCallback(){_t(this,hr,as).call(this),this.role||(this.role="dialog")}attributeChangedCallback(t,i,a){_t(this,hr,as).call(this),t===Vi.OPEN&&a!==i&&(this.open?_t(this,rs,qd).call(this):_t(this,ns,Zd).call(this))}focus(){so(this,La,Js());const t=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(t||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}sn=new WeakMap;La=new WeakMap;Ht=new WeakMap;hr=new WeakSet;as=function(){if(!Pt(this,sn)&&(so(this,sn,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});const e=hh(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(e)}
      `}};rs=new WeakSet;qd=function(){var e;(e=Pt(this,Ht))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};ns=new WeakSet;Zd=function(){var e;(e=Pt(this,Ht))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};ss=new WeakSet;Qd=function(e){so(this,Ht,e.relatedTarget),rt(this,e.relatedTarget)||(this.open=!this.open)};os=new WeakSet;zd=function(e){var t;rt(this,e.relatedTarget)||((t=Pt(this,La))==null||t.focus(),Pt(this,Ht)&&Pt(this,Ht)!==e.relatedTarget&&this.open&&(this.open=!1))};ls=new WeakSet;Xd=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=e;l||u||c||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((n=Pt(this,La))==null||n.focus(),this.open=!1))};wn.getTemplateHTML=hm;wn.getSlotTemplateHTML=mm;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",wn);var oo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},$=(e,t,i)=>(oo(e,t,"read from private field"),i?i.call(e):t.get(e)),te=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ut=(e,t,i,a)=>(oo(e,t,"write to private field"),t.set(e,i),i),ye=(e,t,i)=>(oo(e,t,"access private method"),i),Oe,Rn,mr,pr,ke,on,vr,Er,br,lo,Jd,fr,ds,gr,us,ln,uo,cs,jd,hs,eu,ms,tu,ps,iu;const au=g.createElement("template");au.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <div id="thumb" part="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class co extends d.HTMLElement{constructor(){super(),te(this,lo),te(this,fr),te(this,gr),te(this,ln),te(this,cs),te(this,hs),te(this,ms),te(this,ps),te(this,Oe,void 0),te(this,Rn,void 0),te(this,mr,void 0),te(this,pr,void 0),te(this,ke,{}),te(this,on,[]),te(this,vr,()=>{if(this.range.matches(":focus-visible")){const{style:t}=q(this.shadowRoot,":host");t.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),te(this,Er,()=>{const{style:t}=q(this.shadowRoot,":host");t.removeProperty("--_focus-visible-box-shadow")}),te(this,br,()=>{const t=this.shadowRoot.querySelector("#segments-clipping");t&&t.parentNode.append(t)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(au.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),ut(this,mr,this.shadowRoot.querySelector("#startpoint")),ut(this,pr,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",M.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===M.MEDIA_CONTROLLER?(i&&((n=(r=$(this,Oe))==null?void 0:r.unassociateElement)==null||n.call(r,this),ut(this,Oe,null)),a&&this.isConnected&&(ut(this,Oe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=$(this,Oe))==null?void 0:l.associateElement)==null||u.call(l,this))):(t==="disabled"||t==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(t),ye(this,fr,ds).call(this)):(this.range.setAttribute(t,a),ye(this,gr,us).call(this)))}connectedCallback(){var t,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),$(this,ke).pointer=q(this.shadowRoot,"#pointer"),$(this,ke).progress=q(this.shadowRoot,"#progress"),$(this,ke).thumb=q(this.shadowRoot,"#thumb"),$(this,ke).activeSegment=q(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(ut(this,Oe,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=$(this,Oe))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",$(this,vr)),this.shadowRoot.addEventListener("focusout",$(this,Er)),ye(this,fr,ds).call(this),yi(this.container,$(this,br))}disconnectedCallback(){var t,i;ye(this,gr,us).call(this),(i=(t=$(this,Oe))==null?void 0:t.unassociateElement)==null||i.call(t,this),ut(this,Oe,null),this.shadowRoot.removeEventListener("focusin",$(this,vr)),this.shadowRoot.removeEventListener("focusout",$(this,Er)),Ia(this.container,$(this,br))}updatePointerBar(t){var i;(i=$(this,ke).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(t)*100}%`)}updateBar(){var t,i;const a=this.range.valueAsNumber*100;(t=$(this,ke).progress)==null||t.style.setProperty("width",`${a}%`),(i=$(this,ke).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(t){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!t?.length),!t?.length)return;const a=[...new Set([+this.range.min,...t.flatMap(n=>[n.start,n.end]),+this.range.max])];ut(this,on,[...a]);const r=a.pop();for(const[n,o]of a.entries()){const[l,u]=[n===0,n===a.length-1],c=l?"calc(var(--segments-gap) / -1)":`${o*100}%`,p=`calc(${((u?r:a[n+1])-o)*100}%${l||u?"":" - var(--segments-gap)"})`,m=g.createElementNS("http://www.w3.org/2000/svg","rect"),E=q(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);E.style.setProperty("x",c),E.style.setProperty("width",p),i.append(m)}}getPointerRatio(t){const i=ph(t.clientX,t.clientY,$(this,mr).getBoundingClientRect(),$(this,pr).getBoundingClientRect());return Math.max(0,Math.min(1,i))}get dragging(){return this.hasAttribute("dragging")}handleEvent(t){switch(t.type){case"pointermove":ye(this,ps,iu).call(this,t);break;case"input":this.updateBar();break;case"pointerenter":ye(this,cs,jd).call(this,t);break;case"pointerdown":ye(this,ln,uo).call(this,t);break;case"pointerup":ye(this,hs,eu).call(this);break;case"pointerleave":ye(this,ms,tu).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Oe=new WeakMap;Rn=new WeakMap;mr=new WeakMap;pr=new WeakMap;ke=new WeakMap;on=new WeakMap;vr=new WeakMap;Er=new WeakMap;br=new WeakMap;lo=new WeakSet;Jd=function(e){const t=$(this,ke).activeSegment;if(!t)return;const i=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${$(this,on).findIndex((n,o,l)=>{const u=l[o+1];return u!=null&&i>=n&&i<=u})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};fr=new WeakSet;ds=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};gr=new WeakSet;us=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=d.window)==null||e.removeEventListener("pointerup",this),(t=d.window)==null||t.removeEventListener("pointermove",this)};ln=new WeakSet;uo=function(e){var t;ut(this,Rn,e.composedPath().includes(this.range)),(t=d.window)==null||t.addEventListener("pointerup",this)};cs=new WeakSet;jd=function(e){var t;e.pointerType!=="mouse"&&ye(this,ln,uo).call(this,e),this.addEventListener("pointerleave",this),(t=d.window)==null||t.addEventListener("pointermove",this)};hs=new WeakSet;eu=function(){var e;(e=d.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};ms=new WeakSet;tu=function(){var e,t;this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=$(this,ke).activeSegment)==null||t.style.removeProperty("transform")};ps=new WeakSet;iu=function(e){this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),ye(this,lo,Jd).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!$(this,Rn))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",co);var ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},qa=(e,t,i)=>(ru(e,t,"read from private field"),i?i.call(e):t.get(e)),pm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Za=(e,t,i,a)=>(ru(e,t,"write to private field"),t.set(e,i),i),Ne;const nu=g.createElement("template");nu.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class vm extends d.HTMLElement{constructor(){super(),pm(this,Ne,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(nu.content.cloneNode(!0)))}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===M.MEDIA_CONTROLLER&&(i&&((n=(r=qa(this,Ne))==null?void 0:r.unassociateElement)==null||n.call(r,this),Za(this,Ne,null)),a&&this.isConnected&&(Za(this,Ne,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=qa(this,Ne))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var t,i,a;const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(Za(this,Ne,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=qa(this,Ne))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=qa(this,Ne))==null?void 0:t.unassociateElement)==null||i.call(t,this),Za(this,Ne,null)}}Ne=new WeakMap;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",vm);var su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Qa=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),Em=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},za=(e,t,i,a)=>(su(e,t,"write to private field"),t.set(e,i),i),Pe;const ou=g.createElement("template");ou.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class Ba extends d.HTMLElement{constructor(){super(),Em(this,Pe,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ou.content.cloneNode(!0)))}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===M.MEDIA_CONTROLLER&&(i&&((n=(r=Qa(this,Pe))==null?void 0:r.unassociateElement)==null||n.call(r,this),za(this,Pe,null)),a&&this.isConnected&&(za(this,Pe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Qa(this,Pe))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var t,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(za(this,Pe,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=Qa(this,Pe))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=Qa(this,Pe))==null?void 0:t.unassociateElement)==null||i.call(t,this),za(this,Pe,null)}}Pe=new WeakMap;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",Ba);var lu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fl=(e,t,i)=>(lu(e,t,"read from private field"),i?i.call(e):t.get(e)),bm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fm=(e,t,i,a)=>(lu(e,t,"write to private field"),t.set(e,i),i),na;class gm extends Ba{constructor(){super(),bm(this,na,void 0),fm(this,na,this.shadowRoot.querySelector("slot")),fl(this,na).textContent=Nt(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(t,i,a){t===s.MEDIA_DURATION&&(fl(this,na).textContent=Nt(+a)),super.attributeChangedCallback(t,i,a)}get mediaDuration(){return U(this,s.MEDIA_DURATION)}set mediaDuration(t){V(this,s.MEDIA_DURATION,t)}}na=new WeakMap;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",gm);var du=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_m=(e,t,i)=>(du(e,t,"read from private field"),i?i.call(e):t.get(e)),Am=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Tm=(e,t,i,a)=>(du(e,t,"write to private field"),t.set(e,i),i),_r;function ym(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${uu({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function km(e){return e.code&&cd(e)!==null}function uu(e){var t;const{title:i,message:a}=(t=cd(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}const gl=[s.MEDIA_ERROR_CODE,s.MEDIA_ERROR_MESSAGE];class Mn extends wn{constructor(){super(...arguments),Am(this,_r,null)}static get observedAttributes(){return[...super.observedAttributes,...gl]}formatErrorMessage(t){return this.constructor.formatErrorMessage(t)}attributeChangedCallback(t,i,a){var r;if(super.attributeChangedCallback(t,i,a),!gl.includes(t))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=km(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return _m(this,_r)}set mediaError(t){Tm(this,_r,t)}get mediaErrorCode(){return U(this,"mediaerrorcode")}set mediaErrorCode(t){V(this,"mediaerrorcode",t)}get mediaErrorMessage(){return Y(this,"mediaerrormessage")}set mediaErrorMessage(t){G(this,"mediaerrormessage",t)}}_r=new WeakMap;Mn.getSlotTemplateHTML=ym;Mn.formatErrorMessage=uu;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",Mn);var cu=Mn;const Im=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Sm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,hu=g.createElement("template");hu.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${Im}</slot>
    <slot name="exit">${Sm}</slot>
  </slot>
`;const Cm=`
  <slot name="tooltip-enter">${W.ENTER_FULLSCREEN}</slot>
  <slot name="tooltip-exit">${W.EXIT_FULLSCREEN}</slot>
`,_l=e=>{const t=e.mediaIsFullscreen?ne.EXIT_FULLSCREEN():ne.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class wm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(t={}){super({slotTemplate:hu,tooltipContent:Cm,...t})}connectedCallback(){super.connectedCallback(),_l(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_IS_FULLSCREEN&&_l(this)}get mediaFullscreenUnavailable(){return Y(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){G(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return Q(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){z(this,s.MEDIA_IS_FULLSCREEN,t)}handleClick(){const t=this.mediaIsFullscreen?f.MEDIA_EXIT_FULLSCREEN_REQUEST:f.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}}d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",wm);const{MEDIA_TIME_IS_LIVE:Ar,MEDIA_PAUSED:ga}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:Rm,MEDIA_PLAY_REQUEST:Mm}=f,Lm='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',mu=g.createElement("template");mu.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${Ar}]:not([${ga}])) slot[name=indicator] > *,
  :host([${Ar}]:not([${ga}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${Ar}]:not([${ga}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${Lm}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;const Al=e=>{const t=e.mediaPaused||!e.mediaTimeIsLive,i=t?ne.SEEK_LIVE():ne.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class Dm extends Ee{static get observedAttributes(){return[...super.observedAttributes,ga,Ar]}constructor(t={}){super({slotTemplate:mu,...t})}connectedCallback(){Al(this),super.connectedCallback()}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),Al(this)}get mediaPaused(){return Q(this,s.MEDIA_PAUSED)}set mediaPaused(t){z(this,s.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return Q(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){z(this,s.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(Rm,{composed:!0,bubbles:!0})),this.hasAttribute(ga)&&this.dispatchEvent(new d.CustomEvent(Mm,{composed:!0,bubbles:!0})))}}d.customElements.get("media-live-button")||d.customElements.define("media-live-button",Dm);var pu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Yi=(e,t,i)=>(pu(e,t,"read from private field"),i?i.call(e):t.get(e)),Tl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Gi=(e,t,i,a)=>(pu(e,t,"write to private field"),t.set(e,i),i),Ue,Tr;const yl={LOADING_DELAY:"loadingdelay"},vu=500,Eu=g.createElement("template"),xm=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;Eu.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${vu}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${xm}</slot>
<div id="status" role="status" aria-live="polite">${ve.MEDIA_LOADING()}</div>
`;class Om extends d.HTMLElement{constructor(){if(super(),Tl(this,Ue,void 0),Tl(this,Tr,vu),!this.shadowRoot){const t=this.attachShadow({mode:"open"}),i=Eu.content.cloneNode(!0);t.appendChild(i)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,yl.LOADING_DELAY]}attributeChangedCallback(t,i,a){var r,n,o,l,u;t===yl.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):t===M.MEDIA_CONTROLLER&&(i&&((n=(r=Yi(this,Ue))==null?void 0:r.unassociateElement)==null||n.call(r,this),Gi(this,Ue,null)),a&&this.isConnected&&(Gi(this,Ue,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Yi(this,Ue))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var t,i,a;const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(Gi(this,Ue,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=Yi(this,Ue))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=Yi(this,Ue))==null?void 0:t.unassociateElement)==null||i.call(t,this),Gi(this,Ue,null)}get loadingDelay(){return Yi(this,Tr)}set loadingDelay(t){Gi(this,Tr,t);const{style:i}=q(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${t}ms)`)}get mediaPaused(){return Q(this,s.MEDIA_PAUSED)}set mediaPaused(t){z(this,s.MEDIA_PAUSED,t)}get mediaLoading(){return Q(this,s.MEDIA_LOADING)}set mediaLoading(t){z(this,s.MEDIA_LOADING,t)}}Ue=new WeakMap;Tr=new WeakMap;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",Om);const{MEDIA_VOLUME_LEVEL:At}=s,Nm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,kl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Pm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,bu=g.createElement("template");bu.innerHTML=`
  <style>
  
  :host(:not([${At}])) slot[name=icon] slot:not([name=high]), 
  :host([${At}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${At}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${At}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${At}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${At}=off])) slot[name=tooltip-unmute],
  :host([${At}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${Nm}</slot>
    <slot name="low">${kl}</slot>
    <slot name="medium">${kl}</slot>
    <slot name="high">${Pm}</slot>
  </slot>
`;const Um=`
  <slot name="tooltip-mute">${W.MUTE}</slot>
  <slot name="tooltip-unmute">${W.UNMUTE}</slot>
`,Il=e=>{const i=e.mediaVolumeLevel==="off"?ne.UNMUTE():ne.MUTE();e.setAttribute("aria-label",i)};class $m extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}constructor(t={}){super({slotTemplate:bu,tooltipContent:Um,...t})}connectedCallback(){Il(this),super.connectedCallback()}attributeChangedCallback(t,i,a){t===s.MEDIA_VOLUME_LEVEL&&Il(this),super.attributeChangedCallback(t,i,a)}get mediaVolumeLevel(){return Y(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){G(this,s.MEDIA_VOLUME_LEVEL,t)}handleClick(){const t=this.mediaVolumeLevel==="off"?f.MEDIA_UNMUTE_REQUEST:f.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}}d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",$m);const Sl=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,fu=g.createElement("template");fu.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${Sl}</slot>
    <slot name="exit">${Sl}</slot>
  </slot>
`;const Bm=`
  <slot name="tooltip-enter">${W.ENTER_PIP}</slot>
  <slot name="tooltip-exit">${W.EXIT_PIP}</slot>
`,Cl=e=>{const t=e.mediaIsPip?ne.EXIT_PIP():ne.ENTER_PIP();e.setAttribute("aria-label",t)};class Wm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}constructor(t={}){super({slotTemplate:fu,tooltipContent:Bm,...t})}connectedCallback(){Cl(this),super.connectedCallback()}attributeChangedCallback(t,i,a){t===s.MEDIA_IS_PIP&&Cl(this),super.attributeChangedCallback(t,i,a)}get mediaPipUnavailable(){return Y(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){G(this,s.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return Q(this,s.MEDIA_IS_PIP)}set mediaIsPip(t){z(this,s.MEDIA_IS_PIP,t)}handleClick(){const t=this.mediaIsPip?f.MEDIA_EXIT_PIP_REQUEST:f.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}}d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Wm);var Hm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xa=(e,t,i)=>(Hm(e,t,"read from private field"),i?i.call(e):t.get(e)),Fm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},jt;const Un={RATES:"rates"},gu=[1,1.2,1.5,1.7,2],sa=1,_u=g.createElement("template");_u.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class Km extends Ee{constructor(t={}){super({slotTemplate:_u,tooltipContent:W.PLAYBACK_RATE,...t}),Fm(this,jt,new In(this,Un.RATES,{defaultValue:gu})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${sa}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Un.RATES]}attributeChangedCallback(t,i,a){if(super.attributeChangedCallback(t,i,a),t===Un.RATES&&(Xa(this,jt).value=a),t===s.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?sa:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",ve.PLAYBACK_RATE({playbackRate:n}))}}get rates(){return Xa(this,jt)}set rates(t){t?Array.isArray(t)&&(Xa(this,jt).value=t.join(" ")):Xa(this,jt).value=""}get mediaPlaybackRate(){return U(this,s.MEDIA_PLAYBACK_RATE,sa)}set mediaPlaybackRate(t){V(this,s.MEDIA_PLAYBACK_RATE,t)}handleClick(){var t,i;const a=Array.from(this.rates.values(),o=>+o).sort((o,l)=>o-l),r=(i=(t=a.find(o=>o>this.mediaPlaybackRate))!=null?t:a[0])!=null?i:sa,n=new d.CustomEvent(f.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}jt=new WeakMap;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",Km);const Vm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Ym=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,Au=g.createElement("template");Au.innerHTML=`
  <style>
    :host([${s.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${Vm}</slot>
    <slot name="pause">${Ym}</slot>
  </slot>
`;const Gm=`
  <slot name="tooltip-play">${W.PLAY}</slot>
  <slot name="tooltip-pause">${W.PAUSE}</slot>
`,wl=e=>{const t=e.mediaPaused?ne.PLAY():ne.PAUSE();e.setAttribute("aria-label",t)};class qm extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}constructor(t={}){super({slotTemplate:Au,tooltipContent:Gm,...t})}connectedCallback(){wl(this),super.connectedCallback()}attributeChangedCallback(t,i,a){t===s.MEDIA_PAUSED&&wl(this),super.attributeChangedCallback(t,i,a)}get mediaPaused(){return Q(this,s.MEDIA_PAUSED)}set mediaPaused(t){z(this,s.MEDIA_PAUSED,t)}handleClick(){const t=this.mediaPaused?f.MEDIA_PLAY_REQUEST:f.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}}d.customElements.get("media-play-button")||d.customElements.define("media-play-button",qm);const Me={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},Tu=g.createElement("template");Tu.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;const Zm=e=>{e.style.removeProperty("background-image")},Qm=(e,t)=>{e.style["background-image"]=`url('${t}')`};class zm extends d.HTMLElement{static get observedAttributes(){return[Me.PLACEHOLDER_SRC,Me.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Tu.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,i,a){t===Me.SRC&&(a==null?this.image.removeAttribute(Me.SRC):this.image.setAttribute(Me.SRC,a)),t===Me.PLACEHOLDER_SRC&&(a==null?Zm(this.image):Qm(this.image,a))}get placeholderSrc(){return Y(this,Me.PLACEHOLDER_SRC)}set placeholderSrc(t){G(this,Me.SRC,t)}get src(){return Y(this,Me.SRC)}set src(t){G(this,Me.SRC,t)}}d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",zm);var yu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xm=(e,t,i)=>(yu(e,t,"read from private field"),i?i.call(e):t.get(e)),Jm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},jm=(e,t,i,a)=>(yu(e,t,"write to private field"),t.set(e,i),i),yr;class ep extends Ba{constructor(){super(),Jm(this,yr,void 0),jm(this,yr,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_PREVIEW_CHAPTER&&a!==i&&a!=null&&(Xm(this,yr).textContent=a,a!==""?this.setAttribute("aria-valuetext",`chapter: ${a}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return Y(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(t){G(this,s.MEDIA_PREVIEW_CHAPTER,t)}}yr=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",ep);var ku=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ja=(e,t,i)=>(ku(e,t,"read from private field"),i?i.call(e):t.get(e)),tp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ja=(e,t,i,a)=>(ku(e,t,"write to private field"),t.set(e,i),i),$e;const Iu=g.createElement("template");Iu.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class ip extends d.HTMLElement{constructor(){super(),tp(this,$e,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Iu.content.cloneNode(!0)))}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var t,i,a;const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(ja(this,$e,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=Ja(this,$e))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=Ja(this,$e))==null?void 0:t.unassociateElement)==null||i.call(t,this),ja(this,$e,null)}attributeChangedCallback(t,i,a){var r,n,o,l,u;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(t)&&this.update(),t===M.MEDIA_CONTROLLER&&(i&&((n=(r=Ja(this,$e))==null?void 0:r.unassociateElement)==null||n.call(r,this),ja(this,$e,null)),a&&this.isConnected&&(ja(this,$e,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Ja(this,$e))==null?void 0:l.associateElement)==null||u.call(l,this)))}get mediaPreviewImage(){return Y(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){G(this,s.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewCoords(){const t=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(t)return t.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(t){if(!t){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,t.join(" "))}update(){const t=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(t&&i))return;const[a,r,n,o]=t,l=i.split("#")[0],u=getComputedStyle(this),{maxWidth:c,maxHeight:v,minWidth:p,minHeight:m}=u,E=Math.min(parseInt(c)/n,parseInt(v)/o),k=Math.max(parseInt(p)/n,parseInt(m)/o),A=E<1,_=A?E:k>1?k:1,{style:w}=q(this.shadowRoot,":host"),ie=q(this.shadowRoot,"img").style,ue=this.shadowRoot.querySelector("img"),st=A?"min":"max";w.setProperty(`${st}-width`,"initial","important"),w.setProperty(`${st}-height`,"initial","important"),w.width=`${n*_}px`,w.height=`${o*_}px`;const Ze=()=>{ie.width=`${this.imgWidth*_}px`,ie.height=`${this.imgHeight*_}px`,ie.display="block"};ue.src!==l&&(ue.onload=()=>{this.imgWidth=ue.naturalWidth,this.imgHeight=ue.naturalHeight,Ze()},ue.src=l,Ze()),Ze(),ie.transform=`translate(-${a*_}px, -${r*_}px)`}}$e=new WeakMap;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",ip);var Su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Rl=(e,t,i)=>(Su(e,t,"read from private field"),i?i.call(e):t.get(e)),ap=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rp=(e,t,i,a)=>(Su(e,t,"write to private field"),t.set(e,i),i),oa;class np extends Ba{constructor(){super(),ap(this,oa,void 0),rp(this,oa,this.shadowRoot.querySelector("slot")),Rl(this,oa).textContent=Nt(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_PREVIEW_TIME&&a!=null&&(Rl(this,oa).textContent=Nt(parseFloat(a)))}get mediaPreviewTime(){return U(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){V(this,s.MEDIA_PREVIEW_TIME,t)}}oa=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",np);const Gt={SEEK_OFFSET:"seekoffset"},kr=30,sp=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${kr}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Cu=g.createElement("template");Cu.innerHTML=`
  <slot name="icon">${sp}</slot>
`;const op=0;class lp extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Gt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:Cu,tooltipContent:W.SEEK_BACKWARD,...t})}connectedCallback(){this.seekOffset=U(this,Gt.SEEK_OFFSET,kr),super.connectedCallback()}attributeChangedCallback(t,i,a){t===Gt.SEEK_OFFSET&&(this.seekOffset=U(this,Gt.SEEK_OFFSET,kr)),super.attributeChangedCallback(t,i,a)}get seekOffset(){return U(this,Gt.SEEK_OFFSET,kr)}set seekOffset(t){V(this,Gt.SEEK_OFFSET,t),this.setAttribute("aria-label",ne.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),_d(Ad(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return U(this,s.MEDIA_CURRENT_TIME,op)}set mediaCurrentTime(t){V(this,s.MEDIA_CURRENT_TIME,t)}handleClick(){const t=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new d.CustomEvent(f.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",lp);const qt={SEEK_OFFSET:"seekoffset"},Ir=30,dp=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${Ir}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,wu=g.createElement("template");wu.innerHTML=`
  <slot name="icon">${dp}</slot>
`;const up=0;class cp extends Ee{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,qt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:wu,tooltipContent:W.SEEK_FORWARD,...t})}connectedCallback(){this.seekOffset=U(this,qt.SEEK_OFFSET,Ir),super.connectedCallback()}attributeChangedCallback(t,i,a){t===qt.SEEK_OFFSET&&(this.seekOffset=U(this,qt.SEEK_OFFSET,Ir)),super.attributeChangedCallback(t,i,a)}get seekOffset(){return U(this,qt.SEEK_OFFSET,Ir)}set seekOffset(t){V(this,qt.SEEK_OFFSET,t),this.setAttribute("aria-label",ne.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),_d(Ad(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return U(this,s.MEDIA_CURRENT_TIME,up)}set mediaCurrentTime(t){V(this,s.MEDIA_CURRENT_TIME,t)}handleClick(){const t=this.mediaCurrentTime+this.seekOffset,i=new d.CustomEvent(f.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",cp);var Ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},$n=(e,t,i)=>(Ru(e,t,"read from private field"),i?i.call(e):t.get(e)),hp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mp=(e,t,i,a)=>(Ru(e,t,"write to private field"),t.set(e,i),i),ei;const Se={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Ml=[...Object.values(Se),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],Ll=["Enter"," "],pp="&nbsp;/&nbsp;",Dl=(e,{timesSep:t=pp}={})=>{var i,a;const r=e.hasAttribute(Se.REMAINING),n=e.hasAttribute(Se.SHOW_DURATION),o=(i=e.mediaCurrentTime)!=null?i:0,[,l]=(a=e.mediaSeekable)!=null?a:[];let u=0;Number.isFinite(e.mediaDuration)?u=e.mediaDuration:Number.isFinite(l)&&(u=l);const c=Nt(r?0-(u-o):o);return n?`${c}${t}${Nt(u)}`:c},vp="video not loaded, unknown time.",Ep=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",vp);return}const n=e.hasAttribute(Se.REMAINING),o=e.hasAttribute(Se.SHOW_DURATION),l=ba(n?0-(r-i):i);if(!o){e.setAttribute("aria-valuetext",l);return}const u=ba(r),c=`${l} of ${u}`;e.setAttribute("aria-valuetext",c)};class bp extends Ba{constructor(){super(),hp(this,ei,void 0),mp(this,ei,this.shadowRoot.querySelector("slot")),$n(this,ei).innerHTML=`${Dl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Ml,"disabled"]}connectedCallback(){const{style:t}=q(this.shadowRoot,":host(:hover:not([notoggle]))");t.setProperty("cursor","pointer"),t.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",ve.PLAYBACK_TIME());const i=a=>{const{key:r}=a;if(!Ll.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:o}=a;if(r||n||!Ll.includes(o)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(t,i,a){Ml.includes(t)?this.update():t==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(t,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return Q(this,Se.REMAINING)}set remaining(t){z(this,Se.REMAINING,t)}get showDuration(){return Q(this,Se.SHOW_DURATION)}set showDuration(t){z(this,Se.SHOW_DURATION,t)}get noToggle(){return Q(this,Se.NO_TOGGLE)}set noToggle(t){z(this,Se.NO_TOGGLE,t)}get mediaDuration(){return U(this,s.MEDIA_DURATION)}set mediaDuration(t){V(this,s.MEDIA_DURATION,t)}get mediaCurrentTime(){return U(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){V(this,s.MEDIA_CURRENT_TIME,t)}get mediaSeekable(){const t=this.getAttribute(s.MEDIA_SEEKABLE);if(t)return t.split(":").map(i=>+i)}set mediaSeekable(t){if(t==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,t.join(":"))}update(){const t=Dl(this);Ep(this),t!==$n(this,ei).innerHTML&&($n(this,ei).innerHTML=t)}}ei=new WeakMap;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",bp);var Mu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},j=(e,t,i)=>(Mu(e,t,"read from private field"),t.get(e)),Le=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},me=(e,t,i,a)=>(Mu(e,t,"write to private field"),t.set(e,i),i),fp=(e,t,i,a)=>({set _(r){me(e,t,r)},get _(){return j(e,t)}}),ti,Sr,ii,la,Cr,wr,Rr,ai,It,Mr;class gp{constructor(t,i,a){Le(this,ti,void 0),Le(this,Sr,void 0),Le(this,ii,void 0),Le(this,la,void 0),Le(this,Cr,void 0),Le(this,wr,void 0),Le(this,Rr,void 0),Le(this,ai,void 0),Le(this,It,0),Le(this,Mr,(r=performance.now())=>{me(this,It,requestAnimationFrame(j(this,Mr))),me(this,la,performance.now()-j(this,ii));const n=1e3/this.fps;if(j(this,la)>n){me(this,ii,r-j(this,la)%n);const o=1e3/((r-j(this,Sr))/++fp(this,Cr)._),l=(r-j(this,wr))/1e3/this.duration;let u=j(this,Rr)+l*this.playbackRate;u-j(this,ti).valueAsNumber>0?me(this,ai,this.playbackRate/this.duration/o):(me(this,ai,.995*j(this,ai)),u=j(this,ti).valueAsNumber+j(this,ai)),this.callback(u)}}),me(this,ti,t),this.callback=i,this.fps=a}start(){j(this,It)===0&&(me(this,ii,performance.now()),me(this,Sr,j(this,ii)),me(this,Cr,0),j(this,Mr).call(this))}stop(){j(this,It)!==0&&(cancelAnimationFrame(j(this,It)),me(this,It,0))}update({start:t,duration:i,playbackRate:a}){const r=t-j(this,ti).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(t),me(this,Rr,t),me(this,wr,performance.now()),this.duration=i,this.playbackRate=a}}ti=new WeakMap;Sr=new WeakMap;ii=new WeakMap;la=new WeakMap;Cr=new WeakMap;wr=new WeakMap;Rr=new WeakMap;ai=new WeakMap;It=new WeakMap;Mr=new WeakMap;var ho=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Z=(e,t,i)=>(ho(e,t,"read from private field"),i?i.call(e):t.get(e)),J=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Be=(e,t,i,a)=>(ho(e,t,"write to private field"),t.set(e,i),i),re=(e,t,i)=>(ho(e,t,"access private method"),i),ri,Ut,dn,_a,un,Lr,Da,xa,ni,si,da,mo,Lu,vs,cn,po,hn,vo,mn,Eo,Es,Du,Oa,pn,bs,xu;const _p="video not loaded, unknown time.",Ap=e=>{const t=e.range,i=ba(+Nu(e)),a=ba(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:_p;t.setAttribute("aria-valuetext",r)},Ou=g.createElement("template");Ou.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;const er=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},Nu=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class Tp extends co{constructor(){super(),J(this,si),J(this,mo),J(this,cn),J(this,hn),J(this,mn),J(this,Es),J(this,Oa),J(this,bs),J(this,ri,void 0),J(this,Ut,void 0),J(this,dn,void 0),J(this,_a,void 0),J(this,un,void 0),J(this,Lr,void 0),J(this,Da,void 0),J(this,xa,void 0),J(this,ni,void 0),J(this,vs,a=>{this.dragging||(zs(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.container.appendChild(Ou.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),Be(this,dn,this.shadowRoot.querySelectorAll('[part~="box"]')),Be(this,un,this.shadowRoot.querySelector('[part~="preview-box"]')),Be(this,Lr,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);Be(this,Da,parseInt(i.getPropertyValue("--media-box-padding-left"))),Be(this,xa,parseInt(i.getPropertyValue("--media-box-padding-right"))),Be(this,Ut,new gp(this.range,Z(this,vs),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var t;super.connectedCallback(),this.range.setAttribute("aria-label",ve.SEEK()),re(this,si,da).call(this),Be(this,ri,this.getRootNode()),(t=Z(this,ri))==null||t.addEventListener("transitionstart",this)}disconnectedCallback(){var t;super.disconnectedCallback(),re(this,si,da).call(this),(t=Z(this,ri))==null||t.removeEventListener("transitionstart",this),Be(this,ri,null)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),i!=a&&(t===s.MEDIA_CURRENT_TIME||t===s.MEDIA_PAUSED||t===s.MEDIA_ENDED||t===s.MEDIA_LOADING||t===s.MEDIA_DURATION||t===s.MEDIA_SEEKABLE?(Z(this,Ut).update({start:er(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),re(this,si,da).call(this),Ap(this)):t===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(t===s.MEDIA_DURATION||t===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=Z(this,ni),this.updateBar()))}get mediaChaptersCues(){return Z(this,ni)}set mediaChaptersCues(t){var i;Be(this,ni,t),this.updateSegments((i=Z(this,ni))==null?void 0:i.map(a=>({start:er(this,a.startTime),end:er(this,a.endTime)})))}get mediaPaused(){return Q(this,s.MEDIA_PAUSED)}set mediaPaused(t){z(this,s.MEDIA_PAUSED,t)}get mediaLoading(){return Q(this,s.MEDIA_LOADING)}set mediaLoading(t){z(this,s.MEDIA_LOADING,t)}get mediaDuration(){return U(this,s.MEDIA_DURATION)}set mediaDuration(t){V(this,s.MEDIA_DURATION,t)}get mediaCurrentTime(){return U(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){V(this,s.MEDIA_CURRENT_TIME,t)}get mediaPlaybackRate(){return U(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(t){V(this,s.MEDIA_PLAYBACK_RATE,t)}get mediaBuffered(){const t=this.getAttribute(s.MEDIA_BUFFERED);return t?t.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(t){if(!t){this.removeAttribute(s.MEDIA_BUFFERED);return}const i=t.map(a=>a.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,i)}get mediaSeekable(){const t=this.getAttribute(s.MEDIA_SEEKABLE);if(t)return t.split(":").map(i=>+i)}set mediaSeekable(t){if(t==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,t.join(":"))}get mediaSeekableEnd(){var t;const[,i=this.mediaDuration]=(t=this.mediaSeekable)!=null?t:[];return i}get mediaSeekableStart(){var t;const[i=0]=(t=this.mediaSeekable)!=null?t:[];return i}get mediaPreviewImage(){return Y(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){G(this,s.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewTime(){return U(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){V(this,s.MEDIA_PREVIEW_TIME,t)}get mediaEnded(){return Q(this,s.MEDIA_ENDED)}set mediaEnded(t){z(this,s.MEDIA_ENDED,t)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var t;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(t=i.find(([l,u])=>l<=n&&n<=u))!=null?t:[];a=er(this,o)}const{style:r}=q(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=q(this.shadowRoot,"#current-rail"),a=q(this.shadowRoot,'[part~="current-box"]'),r=re(this,cn,po).call(this,Z(this,Lr)),n=re(this,hn,vo).call(this,r,this.range.valueAsNumber),o=re(this,mn,Eo).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${o}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(t){switch(super.handleEvent(t),t.type){case"input":re(this,bs,xu).call(this);break;case"pointermove":re(this,Es,Du).call(this,t);break;case"pointerup":case"pointerleave":re(this,Oa,pn).call(this,null);break;case"transitionstart":rt(t.target,this)&&setTimeout(()=>re(this,si,da).call(this),0);break}}}ri=new WeakMap;Ut=new WeakMap;dn=new WeakMap;_a=new WeakMap;un=new WeakMap;Lr=new WeakMap;Da=new WeakMap;xa=new WeakMap;ni=new WeakMap;si=new WeakSet;da=function(){re(this,mo,Lu).call(this)?Z(this,Ut).start():Z(this,Ut).stop()};mo=new WeakSet;Lu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Td(this)};vs=new WeakMap;cn=new WeakSet;po=function(e){var t;const a=((t=this.getAttribute("bounds")?wi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=e.offsetWidth,o=-(r.left-a.left-n/2),l=a.right-r.left-n/2;return{box:{width:n,min:o,max:l},bounds:a,range:r}};hn=new WeakSet;vo=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const l=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};mn=new WeakSet;Eo=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+Z(this,Da)){const o=e.range.left-e.bounds.left-Z(this,Da);return`${n-i/2+o}px`}if(n>r-Z(this,xa)){const o=e.bounds.right-e.range.right-Z(this,xa);return`${n+i/2-o-e.range.width}px`}return 0};Es=new WeakSet;Du=function(e){const t=[...Z(this,dn)].some(v=>e.composedPath().includes(v));if(!this.dragging&&(t||!e.composedPath().includes(this))){re(this,Oa,pn).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=q(this.shadowRoot,"#preview-rail"),r=q(this.shadowRoot,'[part~="preview-box"]'),n=re(this,cn,po).call(this,Z(this,un));let o=(e.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const l=re(this,hn,vo).call(this,n,o),u=re(this,mn,Eo).call(this,n,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const c=Math.round(Z(this,_a))-Math.round(o*i);Math.abs(c)<1&&o>.01&&o<.99||(Be(this,_a,o*i),re(this,Oa,pn).call(this,Z(this,_a)))};Oa=new WeakSet;pn=function(e){this.dispatchEvent(new d.CustomEvent(f.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};bs=new WeakSet;xu=function(){Z(this,Ut).stop();const e=Nu(this);this.dispatchEvent(new d.CustomEvent(f.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};d.customElements.get("media-time-range")||d.customElements.define("media-time-range",Tp);const Zt={PLACEMENT:"placement",BOUNDS:"bounds"},Pu=g.createElement("template");Pu.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class yp extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var t;if(!Td(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(t=wi(this,"#"+this.bounds))!=null?t:_e(this);if(!r)return;const{x:n,width:o}=r.getBoundingClientRect(),{x:l,width:u}=this.getBoundingClientRect(),c=l+u,v=n+o,p=a.getPropertyValue("--media-tooltip-offset-x"),m=p?parseFloat(p.replace("px","")):0,E=a.getPropertyValue("--media-tooltip-container-margin"),k=E?parseFloat(E.replace("px","")):0,A=l-n+m-k,_=c-v+m+k;if(A<0){this.style.setProperty("--media-tooltip-offset-x",`${A}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Pu.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const t=this.placement;delete this.placement,this.placement=t}}static get observedAttributes(){return[Zt.PLACEMENT,Zt.BOUNDS]}get placement(){return Y(this,Zt.PLACEMENT)}set placement(t){G(this,Zt.PLACEMENT,t)}get bounds(){return Y(this,Zt.BOUNDS)}set bounds(t){G(this,Zt.BOUNDS,t)}}d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",yp);const kp=1,Ip=e=>e.mediaMuted?0:e.mediaVolume,Sp=e=>`${Math.round(e*100)}%`;class Cp extends co{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const t=this.range.value,i=new d.CustomEvent(f.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ve.VOLUME())}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),(t===s.MEDIA_VOLUME||t===s.MEDIA_MUTED)&&(this.range.valueAsNumber=Ip(this),this.range.setAttribute("aria-valuetext",Sp(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return U(this,s.MEDIA_VOLUME,kp)}set mediaVolume(t){V(this,s.MEDIA_VOLUME,t)}get mediaMuted(){return Q(this,s.MEDIA_MUTED)}set mediaMuted(t){z(this,s.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return Y(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){G(this,s.MEDIA_VOLUME_UNAVAILABLE,t)}}d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",Cp);var Uu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},T=(e,t,i)=>(Uu(e,t,"read from private field"),i?i.call(e):t.get(e)),Fe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},at=(e,t,i,a)=>(Uu(e,t,"write to private field"),t.set(e,i),i),oi,Dr,St,ua,ct,ht,mt,Ct,li,xr,Te;const xl=1,Ol=0,wp=1,Rp={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof we&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof we?r.element[r.attributeName]=n:r.value=n}}}};class Ln extends d.DocumentFragment{constructor(t,i,a=Rp){var r;super(),Fe(this,oi,void 0),Fe(this,Dr,void 0),this.append(t.content.cloneNode(!0)),at(this,oi,$u(this)),at(this,Dr,a),(r=a.createCallback)==null||r.call(a,this,T(this,oi),i),a.processCallback(this,T(this,oi),i)}update(t){T(this,Dr).processCallback(this,T(this,oi),t)}}oi=new WeakMap;Dr=new WeakMap;const $u=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new Lp;for([i,a]of Pl(r.value))if(!i)n.append(a);else{const o=new we(e,r.name,r.namespaceURI);n.append(o),t.push([a,o])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===xl&&!(r instanceof HTMLTemplateElement))$u(r,t);else{const n=r.data;if(r.nodeType===xl||n.includes("{{")){const o=[];if(n)for([i,a]of Pl(n))if(!i)o.push(new Text(a));else{const l=new Ri(e);o.push(l),t.push([a,l])}else if(r instanceof HTMLTemplateElement){const l=new Hu(e,r);o.push(l),t.push([l.expression,l])}r.replaceWith(...o.flatMap(l=>l.replacementNodes||[l]))}}return t},Nl={},Pl=e=>{let t="",i=0,a=Nl[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([Ol,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([wp,t.trim()]),t="",r++):t+=n||"";return t&&a.push([Ol,(i>0?"{{":"")+t]),Nl[e]=a},Mp=11;class Bu{get value(){return""}set value(t){}toString(){return this.value}}const Wu=new WeakMap;class Lp{constructor(){Fe(this,St,[])}[Symbol.iterator](){return T(this,St).values()}get length(){return T(this,St).length}item(t){return T(this,St)[t]}append(...t){for(const i of t)i instanceof we&&Wu.set(i,this),T(this,St).push(i)}toString(){return T(this,St).join("")}}St=new WeakMap;class we extends Bu{constructor(t,i,a){super(),Fe(this,Ct),Fe(this,ua,""),Fe(this,ct,void 0),Fe(this,ht,void 0),Fe(this,mt,void 0),at(this,ct,t),at(this,ht,i),at(this,mt,a)}get attributeName(){return T(this,ht)}get attributeNamespace(){return T(this,mt)}get element(){return T(this,ct)}get value(){return T(this,ua)}set value(t){T(this,ua)!==t&&(at(this,ua,t),!T(this,Ct,li)||T(this,Ct,li).length===1?t==null?T(this,ct).removeAttributeNS(T(this,mt),T(this,ht)):T(this,ct).setAttributeNS(T(this,mt),T(this,ht),t):T(this,ct).setAttributeNS(T(this,mt),T(this,ht),T(this,Ct,li).toString()))}get booleanValue(){return T(this,ct).hasAttributeNS(T(this,mt),T(this,ht))}set booleanValue(t){if(!T(this,Ct,li)||T(this,Ct,li).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}}ua=new WeakMap;ct=new WeakMap;ht=new WeakMap;mt=new WeakMap;Ct=new WeakSet;li=function(){return Wu.get(this)};class Ri extends Bu{constructor(t,i){super(),Fe(this,xr,void 0),Fe(this,Te,void 0),at(this,xr,t),at(this,Te,i?[...i]:[new Text])}get replacementNodes(){return T(this,Te)}get parentNode(){return T(this,xr)}get nextSibling(){return T(this,Te)[T(this,Te).length-1].nextSibling}get previousSibling(){return T(this,Te)[0].previousSibling}get value(){return T(this,Te).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const i=t.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===Mp?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),at(this,Te,Dp(T(this,Te)[0].parentNode,T(this,Te),i,this.nextSibling))}}xr=new WeakMap;Te=new WeakMap;class Hu extends Ri{constructor(t,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(t),this.expression=r,this.template=i,this.directive=a}}function Dp(e,t,i,a=null){let r=0,n,o,l,u=i.length,c=t.length;for(;r<u&&r<c&&t[r]==i[r];)r++;for(;r<u&&r<c&&i[u-1]==t[c-1];)a=i[--c,--u];if(r==c)for(;r<u;)e.insertBefore(i[r++],a);if(r==u)for(;r<c;)e.removeChild(t[r++]);else{for(n=t[r];r<u;)l=i[r++],o=n?n.nextSibling:a,n==l?n=o:r<u&&i[r]==o?(e.replaceChild(l,n),n=o):e.insertBefore(l,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}const Ul={string:e=>String(e)};class Fu{constructor(t){this.template=t,this.state=void 0}}const Dt=new WeakMap,xt=new WeakMap,fs={partial:(e,t)=>{t[e.expression]=new Fu(e.template)},if:(e,t)=>{var i;if(Ku(e.expression,t))if(Dt.get(e)!==e.template){Dt.set(e,e.template);const a=new Ln(e.template,t,bo);e.replace(a),xt.set(e,a)}else(i=xt.get(e))==null||i.update(t);else e.replace(""),Dt.delete(e),xt.delete(e)}},xp=Object.keys(fs),bo={processCallback(e,t,i){var a,r;if(i)for(const[n,o]of t){if(o instanceof Hu){if(!o.directive){const u=xp.find(c=>o.template.hasAttribute(c));u&&(o.directive=u,o.expression=o.template.getAttribute(u))}(a=fs[o.directive])==null||a.call(fs,o,i);continue}let l=Ku(n,i);if(l instanceof Fu){Dt.get(o)!==l.template?(Dt.set(o,l.template),l=new Ln(l.template,l.state,bo),o.value=l,xt.set(o,l)):(r=xt.get(o))==null||r.update(l.state);continue}l?(o instanceof we&&o.attributeName.startsWith("aria-")&&(l=String(l)),o instanceof we?typeof l=="boolean"?o.booleanValue=l:typeof l=="function"?o.element[o.attributeName]=l:o.value=l:(o.value=l,Dt.delete(o),xt.delete(o))):o instanceof we?o.value=void 0:(o.value=void 0,Dt.delete(o),xt.delete(o))}}},$l={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=Ul[t])==null?void 0:i.call(Ul,e)}};function Op(e){return Np(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Ku(e,t={}){var i,a,r,n,o,l,u;const c=Op(e);if(c.length===0||c.some(({type:v})=>!v))return qi(e);if(((i=c[0])==null?void 0:i.token)===">"){const v=t[(a=c[1])==null?void 0:a.token];if(!v)return qi(e);const p={...t};v.state=p;const m=c.slice(2);for(let E=0;E<m.length;E+=3){const k=(r=m[E])==null?void 0:r.token,A=(n=m[E+1])==null?void 0:n.token,_=(o=m[E+2])==null?void 0:o.token;k&&A==="="&&(p[k]=Zi(_,t))}return v}if(c.length===1)return tr(c[0])?Zi(c[0].token,t):qi(e);if(c.length===2){const v=(l=c[0])==null?void 0:l.token,p=$l[v];if(!p||!tr(c[1]))return qi(e);const m=Zi(c[1].token,t);return p(m)}if(c.length===3){const v=(u=c[1])==null?void 0:u.token,p=$l[v];if(!p||!tr(c[0])||!tr(c[2]))return qi(e);const m=Zi(c[0].token,t);if(v==="|")return p(m,c[2].token);const E=Zi(c[2].token,t);return p(m,E)}}function qi(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function tr({type:e}){return["number","boolean","string","param"].includes(e)}function Zi(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):hd(e)?parseFloat(e):t[e]}function Np(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const o in t)a=t[o].exec(e),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var fo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gs=(e,t,i)=>(fo(e,t,"read from private field"),i?i.call(e):t.get(e)),Qi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ot=(e,t,i,a)=>(fo(e,t,"write to private field"),t.set(e,i),i),Bn=(e,t,i)=>(fo(e,t,"access private method"),i),bi,Or,fi,_s,Vu,Nr,As;const Wn={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Yu=g.createElement("template");Yu.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Dn extends d.HTMLElement{constructor(){super(),Qi(this,_s),Qi(this,Nr),Qi(this,bi,void 0),Qi(this,Or,void 0),Qi(this,fi,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(Wn[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Ft.BREAKPOINTS_COMPUTED,this.render),Bn(this,_s,Vu).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=gs(this,bi))!=null?t:this.constructor.template}set template(t){Ot(this,fi,null),Ot(this,bi,t),this.createRenderer()}get props(){var t,i,a;const r=[...Array.from((i=(t=this.mediaController)==null?void 0:t.attributes)!=null?i:[]).filter(({name:o})=>Wn[o]||o.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const o of r){const l=(a=Wn[o.name])!=null?a:dh(o.name);let{value:u}=o;u!=null?(hd(u)&&(u=parseFloat(u)),n[l]=u===""?!0:u):n[l]=!1}return n}attributeChangedCallback(t,i,a){t==="template"&&i!=a&&Bn(this,Nr,As).call(this)}connectedCallback(){Bn(this,Nr,As).call(this)}createRenderer(){this.template&&this.template!==gs(this,Or)&&(Ot(this,Or,this.template),this.renderer=new Ln(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Yu.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}}bi=new WeakMap;Or=new WeakMap;fi=new WeakMap;_s=new WeakSet;Vu=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Nr=new WeakSet;As=function(){var e;const t=this.getAttribute("template");if(!t||t===gs(this,fi))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){Ot(this,fi,t),Ot(this,bi,a),this.createRenderer();return}Pp(t)&&(Ot(this,fi,t),Up(t).then(r=>{const n=g.createElement("template");n.innerHTML=r,Ot(this,bi,n),this.createRenderer()}).catch(console.error))};Dn.observedAttributes=["template"];Dn.processor=bo;function Pp(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function Up(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",Dn);function $p({anchor:e,floating:t,placement:i}){const a=Bp({anchor:e,floating:t}),{x:r,y:n}=Hp(a,i);return{x:r,y:n}}function Bp({anchor:e,floating:t}){return{anchor:Wp(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function Wp(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function Hp({anchor:e,floating:t},i){const a=Fp(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Gu(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,u=e[r]/2-t[r]/2;let c;switch(n){case"top":c={x:o,y:e.y-t.height};break;case"bottom":c={x:o,y:e.y+e.height};break;case"right":c={x:e.x+e.width,y:l};break;case"left":c={x:e.x-t.width,y:l};break;default:c={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":c[a]-=u;break;case"end":c[a]+=u;break}return c}function Gu(e){return e.split("-")[0]}function Fp(e){return["top","bottom"].includes(Gu(e))?"y":"x"}class go extends Event{constructor({action:t="auto",relatedTarget:i,...a}){super("invoke",a),this.action=t,this.relatedTarget=i}}class Kp extends Event{constructor({newState:t,oldState:i,...a}){super("toggle",a),this.newState=t,this.oldState=i}}var _o=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},C=(e,t,i)=>(_o(e,t,"read from private field"),i?i.call(e):t.get(e)),D=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},We=(e,t,i,a)=>(_o(e,t,"write to private field"),t.set(e,i),i),O=(e,t,i)=>(_o(e,t,"access private method"),i),He,$t,gt,Pr,Ur,Bt,Na,Ts,qu,vn,$r,ys,ks,Zu,Is,Qu,Ss,zu,gi,_i,Ai,Pa,En,Ao,Cs,Xu,To,Ju,ws,ju,yo,ec,Rs,tc,Ms,ic,Aa,bn,Ls,ac,Ta,fn,Br,Ds;function Si({type:e,text:t,value:i,checked:a}){const r=g.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=i,r.checked=a;const n=g.createElement("span");return n.textContent=t,r.append(n),r}function Wt(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}const rc=g.createElement("template");rc.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;const Tt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class nt extends d.HTMLElement{constructor(){super(),D(this,Ts),D(this,$r),D(this,ks),D(this,Is),D(this,Ss),D(this,Ai),D(this,En),D(this,Cs),D(this,To),D(this,ws),D(this,yo),D(this,Rs),D(this,Ms),D(this,Aa),D(this,Ls),D(this,Ta),D(this,Br),D(this,He,null),D(this,$t,null),D(this,gt,null),D(this,Pr,new Set),D(this,Ur,void 0),D(this,Bt,!1),D(this,Na,null),D(this,vn,()=>{const t=C(this,Pr),i=new Set(this.items);for(const a of t)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)t.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));We(this,Pr,i)}),D(this,gi,()=>{O(this,Ai,Pa).call(this),O(this,En,Ao).call(this,!1)}),D(this,_i,()=>{O(this,Ai,Pa).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),We(this,Ur,new MutationObserver(C(this,vn))),C(this,Ur).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Tt.DISABLED,Tt.HIDDEN,Tt.STYLE,Tt.ANCHOR,M.MEDIA_CONTROLLER]}static formatMenuItemText(t,i){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":O(this,Ts,qu).call(this,t);break;case"invoke":O(this,ks,Zu).call(this,t);break;case"click":O(this,Cs,Xu).call(this,t);break;case"toggle":O(this,ws,ju).call(this,t);break;case"focusout":O(this,Rs,tc).call(this,t);break;case"keydown":O(this,Ms,ic).call(this,t);break}}connectedCallback(){var t,i;We(this,Na,yd(this.shadowRoot,":host")),O(this,$r,ys).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),We(this,He,Qn(this)),(i=(t=C(this,He))==null?void 0:t.associateElement)==null||i.call(t,this),this.hidden||(yi(Ua(this),C(this,gi)),yi(this,C(this,_i)))}disconnectedCallback(){var t,i;Ia(Ua(this),C(this,gi)),Ia(this,C(this,_i)),this.disable(),(i=(t=C(this,He))==null?void 0:t.unassociateElement)==null||i.call(t,this),We(this,He,null)}attributeChangedCallback(t,i,a){var r,n,o,l;t===Tt.HIDDEN&&a!==i?(C(this,Bt)||We(this,Bt,!0),this.hidden?O(this,Ss,zu).call(this):O(this,Is,Qu).call(this),this.dispatchEvent(new Kp({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===M.MEDIA_CONTROLLER?(i&&((n=(r=C(this,He))==null?void 0:r.unassociateElement)==null||n.call(r,this),We(this,He,null)),a&&this.isConnected&&(We(this,He,Qn(this)),(l=(o=C(this,He))==null?void 0:o.associateElement)==null||l.call(o,this))):t===Tt.DISABLED&&a!==i?a==null?this.enable():this.disable():t===Tt.STYLE&&a!==i&&O(this,$r,ys).call(this)}formatMenuItemText(t,i){return this.constructor.formatMenuItemText(t,i)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=Tn(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Vp)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,i;return(i=(t=this.checkedItems[0])==null?void 0:t.value)!=null?i:""}set value(t){const i=this.items.find(a=>a.value===t);i&&O(this,Br,Ds).call(this,i)}focus(){if(We(this,$t,Js()),this.items.length){O(this,Ta,fn).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t?.focus()}handleSelect(t){var i;const a=O(this,Aa,bn).call(this,t);a&&(O(this,Br,Ds).call(this,a,a.type==="checkbox"),C(this,gt)&&!this.hidden&&((i=C(this,$t))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var i,a;const{key:r}=t,n=this.items,o=(a=(i=O(this,Aa,bn).call(this,t))!=null?i:O(this,Ls,ac).call(this))!=null?a:n[0],l=n.indexOf(o);let u=Math.max(0,l);r==="ArrowDown"?u++:r==="ArrowUp"?u--:t.key==="Home"?u=0:t.key==="End"&&(u=n.length-1),u<0&&(u=n.length-1),u>n.length-1&&(u=0),O(this,Ta,fn).call(this,n[u]),n[u].focus()}}He=new WeakMap;$t=new WeakMap;gt=new WeakMap;Pr=new WeakMap;Ur=new WeakMap;Bt=new WeakMap;Na=new WeakMap;Ts=new WeakSet;qu=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();if(["header","title"].includes(t.name)){const i=this.shadowRoot.querySelector('slot[name="header"]');i.hidden=t.assignedNodes().length===0}t.name||C(this,vn).call(this)};vn=new WeakMap;$r=new WeakSet;ys=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};ks=new WeakSet;Zu=function(e){We(this,gt,e.relatedTarget),rt(this,e.relatedTarget)||(this.hidden=!this.hidden)};Is=new WeakSet;Qu=function(){var e;(e=C(this,gt))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),yi(Ua(this),C(this,gi)),yi(this,C(this,_i))};Ss=new WeakSet;zu=function(){var e;(e=C(this,gt))==null||e.setAttribute("aria-expanded","false"),Ia(Ua(this),C(this,gi)),Ia(this,C(this,_i))};gi=new WeakMap;_i=new WeakMap;Ai=new WeakSet;Pa=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=$p({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=Ua(this).getBoundingClientRect(),n=r.width-t-e,o=r.height-i-this.offsetHeight,{style:l}=C(this,Na);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${o}px`);const u=getComputedStyle(this),v=l.getPropertyValue("--_menu-bottom")===u.bottom?o:parseFloat(u.bottom),p=r.height-v-parseFloat(u.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};En=new WeakSet;Ao=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=C(this,Na);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),O(this,Ai,Pa).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),O(this,Ai,Pa).call(this);a.removeProperty("--media-menu-transition-in")};Cs=new WeakSet;Xu=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(C(this,To,Ju))){(t=C(this,$t))==null||t.focus(),this.hidden=!0;return}const i=O(this,Aa,bn).call(this,e);!i||i.hasAttribute("disabled")||(O(this,Ta,fn).call(this,i),this.handleSelect(e))};To=new WeakSet;Ju=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};ws=new WeakSet;ju=function(e){if(e.target===this)return;O(this,yo,ec).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new go({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);O(this,En,Ao).call(this,!0)};yo=new WeakSet;ec=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};Rs=new WeakSet;tc=function(e){var t;rt(this,e.relatedTarget)||(C(this,Bt)&&((t=C(this,$t))==null||t.focus()),C(this,gt)&&C(this,gt)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Ms=new WeakSet;ic=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=e;if(!(l||u||c)&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),o==="Tab"){if(C(this,Bt)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=C(this,$t))==null||n.focus(),C(this,Bt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(e):this.handleMove(e)};Aa=new WeakSet;bn=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Ls=new WeakSet;ac=function(){return this.items.find(e=>e.tabIndex===0)};Ta=new WeakSet;fn=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Br=new WeakSet;Ds=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};nt.template=rc;function Vp(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function Ua(e){var t;return(t=e.getAttribute("bounds")?wi(e,`#${e.getAttribute("bounds")}`):_e(e)||e.parentElement)!=null?t:e}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",nt);var ko=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ve=(e,t,i)=>(ko(e,t,"read from private field"),i?i.call(e):t.get(e)),Je=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Hn=(e,t,i,a)=>(ko(e,t,"write to private field"),t.set(e,i),i),Ke=(e,t,i)=>(ko(e,t,"access private method"),i),Wr,ya,xs,nc,Io,sc,So,oc,Ye,Ci,$a,Os,lc,Hr,Ns;const dc=g.createElement("template");dc.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;const fe={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class xn extends d.HTMLElement{constructor(){super(),Je(this,xs),Je(this,Io),Je(this,So),Je(this,Ci),Je(this,Os),Je(this,Hr),Je(this,Wr,!1),Je(this,ya,void 0),Je(this,Ye,()=>{var t,i;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(i=r?.dataset.description)!=null?i:r?.text,o=g.createElement("span");o.textContent=n??"",a.replaceChildren(o)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[fe.TYPE,fe.DISABLED,fe.CHECKED,fe.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),zi(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":Ke(this,xs,nc).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":Ke(this,Os,lc).call(this,t);break;case"keyup":Ke(this,Ci,$a).call(this,t);break}}attributeChangedCallback(t,i,a){t===fe.CHECKED&&zi(this)&&!Ve(this,Wr)?this.setAttribute("aria-checked",a!=null?"true":"false"):t===fe.TYPE&&a!==i?this.role="menuitem"+a:t===fe.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(fe.DISABLED)||this.enable(),this.role="menuitem"+this.type,Hn(this,ya,Ps(this,this.parentNode)),Ke(this,Hr,Ns).call(this)}disconnectedCallback(){this.disable(),Ke(this,Hr,Ns).call(this),Hn(this,ya,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Tn(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(fe.TYPE))!=null?t:""}set type(t){this.setAttribute(fe.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(fe.VALUE))!=null?t:this.text}set value(t){this.setAttribute(fe.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(zi(this))return this.getAttribute("aria-checked")==="true"}set checked(t){zi(this)&&(Hn(this,Wr,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){zi(this)||this.invokeTargetElement&&rt(this,t.target)&&this.invokeTargetElement.dispatchEvent(new go({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Wr=new WeakMap;ya=new WeakMap;xs=new WeakSet;nc=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?Ke(this,Io,sc).call(this):Ke(this,So,oc).call(this))};Io=new WeakSet;sc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Ve(this,Ye)),this.submenuElement.addEventListener("addmenuitem",Ve(this,Ye)),this.submenuElement.addEventListener("removemenuitem",Ve(this,Ye)),Ve(this,Ye).call(this)};So=new WeakSet;oc=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Ve(this,Ye)),this.submenuElement.removeEventListener("addmenuitem",Ve(this,Ye)),this.submenuElement.removeEventListener("removemenuitem",Ve(this,Ye)),Ve(this,Ye).call(this)};Ye=new WeakMap;Ci=new WeakSet;$a=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",Ke(this,Ci,$a));return}this.handleClick(e)};Os=new WeakSet;lc=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",Ke(this,Ci,$a));return}this.addEventListener("keyup",Ke(this,Ci,$a),{once:!0})};Hr=new WeakSet;Ns=function(){var e;const t=(e=Ve(this,ya))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};xn.template=dc;function zi(e){return e.type==="radio"||e.type==="checkbox"}function Ps(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Ps(e,i):t?.items?t:Ps(t,t?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",xn);const uc=g.createElement("template");uc.innerHTML=nt.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class cc extends nt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-settings-menu-button")}}cc.template=uc;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",cc);var Bl;const gn=g.createElement("template");gn.innerHTML=xn.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`;(Bl=gn.content)!=null&&Bl.querySelector&&(gn.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class hc extends xn{}hc.template=gn;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",hc);class Mi extends Ee{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Tn(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new go({relatedTarget:this}))}}d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",Mi);const mc=g.createElement("template");mc.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class Yp extends Mi{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:mc,tooltipContent:W.SETTINGS})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ve.SETTINGS())}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-settings-menu")}}d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",Yp);var Co=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pc=(e,t,i)=>(Co(e,t,"read from private field"),i?i.call(e):t.get(e)),ir=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Us=(e,t,i,a)=>(Co(e,t,"write to private field"),t.set(e,i),i),ar=(e,t,i)=>(Co(e,t,"access private method"),i),ca,_n,Fr,$s,Kr,Bs;class Gp extends nt{constructor(){super(...arguments),ir(this,Fr),ir(this,Kr),ir(this,ca,[]),ir(this,_n,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:t===s.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(Us(this,ca,sh(a??"")),ar(this,Fr,$s).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ar(this,Kr,Bs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ar(this,Kr,Bs))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=_e(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return pc(this,ca)}set mediaAudioTrackList(t){Us(this,ca,t),ar(this,Fr,$s).call(this)}get mediaAudioTrackEnabled(){var t;return(t=Y(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){G(this,s.MEDIA_AUDIO_TRACK_ENABLED,t)}}ca=new WeakMap;_n=new WeakMap;Fr=new WeakSet;$s=function(){if(pc(this,_n)===JSON.stringify(this.mediaAudioTrackList))return;Us(this,_n,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const i=this.formatMenuItemText(t.label,t),a=Si({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(a)}};Kr=new WeakSet;Bs=function(){if(this.value==null)return;const e=new d.CustomEvent(f.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",Gp);const qp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,vc=g.createElement("template");vc.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${qp}</slot>
`;class Zp extends Mi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:vc,tooltipContent:W.AUDIO_TRACK_MENU})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ve.AUDIO_TRACKS())}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=_e(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=Y(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){G(this,s.MEDIA_AUDIO_TRACK_ENABLED,t)}}d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",Zp);var wo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Qp=(e,t,i)=>(wo(e,t,"read from private field"),t.get(e)),Fn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},zp=(e,t,i,a)=>(wo(e,t,"write to private field"),t.set(e,i),i),Kn=(e,t,i)=>(wo(e,t,"access private method"),i),An,Ws,Ec,Vr,Hs;const Xp=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,bc=g.createElement("template");bc.innerHTML=nt.template.innerHTML+`
  <slot name="captions-indicator" hidden>${Xp}</slot>`;class fc extends nt{constructor(){super(...arguments),Fn(this,Ws),Fn(this,Vr),Fn(this,An,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_SUBTITLES_LIST&&i!==a?Kn(this,Ws,Ec).call(this):t===s.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Kn(this,Vr,Hs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Kn(this,Vr,Hs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Wl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Hl(this,s.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Wl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Hl(this,s.MEDIA_SUBTITLES_SHOWING,t)}}An=new WeakMap;Ws=new WeakSet;Ec=function(){var e;if(Qp(this,An)===JSON.stringify(this.mediaSubtitlesList))return;zp(this,An,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,i=Si({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});i.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=Si({type:"radio",text:this.formatMenuItemText(r.label,r),value:Jn(r),checked:this.value==Jn(r)});n.prepend(Wt(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(Wt(this,"captions-indicator")),this.defaultSlot.append(n)}};Vr=new WeakSet;Hs=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(s.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new d.CustomEvent(f.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new d.CustomEvent(f.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};fc.template=bc;const Wl=(e,t)=>{const i=e.getAttribute(t);return i?Sn(i):[]},Hl=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ra(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",fc);var Jp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},jp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ev=(e,t,i,a)=>(Jp(e,t,"write to private field"),t.set(e,i),i),Fs;const tv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,iv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,gc=g.createElement("template");gc.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tv}</slot>
    <slot name="off">${iv}</slot>
  </slot>
`;const Fl=e=>{e.setAttribute("aria-checked",Od(e).toString())};class av extends Mi{constructor(t={}){super({slotTemplate:gc,tooltipContent:W.CAPTIONS,...t}),jp(this,Fs,void 0),ev(this,Fs,!1)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ve.CLOSED_CAPTIONS()),Fl(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_SUBTITLES_SHOWING&&Fl(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=_e(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Kl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Vl(this,s.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Kl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Vl(this,s.MEDIA_SUBTITLES_SHOWING,t)}}Fs=new WeakMap;const Kl=(e,t)=>{const i=e.getAttribute(t);return i?Sn(i):[]},Vl=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ra(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",av);var _c=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rr=(e,t,i)=>(_c(e,t,"read from private field"),i?i.call(e):t.get(e)),Vn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Xi=(e,t,i)=>(_c(e,t,"access private method"),i),di,ha,Yr,Gr,Ks;const Yn={RATES:"rates"};class rv extends nt{constructor(){super(),Vn(this,ha),Vn(this,Gr),Vn(this,di,new In(this,Yn.RATES,{defaultValue:gu})),Xi(this,ha,Yr).call(this)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Yn.RATES]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_PLAYBACK_RATE&&i!=a?this.value=a:t===Yn.RATES&&i!=a&&(rr(this,di).value=a,Xi(this,ha,Yr).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Xi(this,Gr,Ks))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Xi(this,Gr,Ks))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-playback-rate-menu-button")}get rates(){return rr(this,di)}set rates(t){t?Array.isArray(t)&&(rr(this,di).value=t.join(" ")):rr(this,di).value="",Xi(this,ha,Yr).call(this)}get mediaPlaybackRate(){return U(this,s.MEDIA_PLAYBACK_RATE,sa)}set mediaPlaybackRate(t){V(this,s.MEDIA_PLAYBACK_RATE,t)}}di=new WeakMap;ha=new WeakSet;Yr=function(){this.defaultSlot.textContent="";for(const e of this.rates){const t=Si({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(t)}};Gr=new WeakSet;Ks=function(){if(!this.value)return;const e=new d.CustomEvent(f.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",rv);var nv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nr=(e,t,i)=>(nv(e,t,"read from private field"),i?i.call(e):t.get(e)),sv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ui;const Gn={RATES:"rates"},ov=[1,1.2,1.5,1.7,2],qn=1,Ac=g.createElement("template");Ac.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class lv extends Mi{constructor(t={}){super({slotTemplate:Ac,tooltipContent:W.PLAYBACK_RATE,...t}),sv(this,ui,new In(this,Gn.RATES,{defaultValue:ov})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${qn}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Gn.RATES]}attributeChangedCallback(t,i,a){if(super.attributeChangedCallback(t,i,a),t===Gn.RATES&&(nr(this,ui).value=a),t===s.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?qn:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",ve.PLAYBACK_RATE({playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-playback-rate-menu")}get rates(){return nr(this,ui)}set rates(t){t?Array.isArray(t)&&(nr(this,ui).value=t.join(" ")):nr(this,ui).value=""}get mediaPlaybackRate(){return U(this,s.MEDIA_PLAYBACK_RATE,qn)}set mediaPlaybackRate(t){V(this,s.MEDIA_PLAYBACK_RATE,t)}}ui=new WeakMap;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",lv);var Ro=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ma=(e,t,i)=>(Ro(e,t,"read from private field"),i?i.call(e):t.get(e)),sr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Yl=(e,t,i,a)=>(Ro(e,t,"write to private field"),t.set(e,i),i),Ji=(e,t,i)=>(Ro(e,t,"access private method"),i),pa,vi,va,qr,Zr,Vs;class dv extends nt{constructor(){super(...arguments),sr(this,va),sr(this,Zr),sr(this,pa,[]),sr(this,vi,{})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_LIST,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===s.MEDIA_RENDITION_SELECTED&&i!==a?this.value=a??"auto":t===s.MEDIA_RENDITION_LIST&&i!==a?(Yl(this,pa,ih(a)),Ji(this,va,qr).call(this)):t===s.MEDIA_HEIGHT&&i!==a&&Ji(this,va,qr).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ji(this,Zr,Vs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ji(this,Zr,Vs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ma(this,pa)}set mediaRenditionList(t){Yl(this,pa,t),Ji(this,va,qr).call(this)}get mediaRenditionSelected(){return Y(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){G(this,s.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return U(this,s.MEDIA_HEIGHT)}set mediaHeight(t){V(this,s.MEDIA_HEIGHT,t)}}pa=new WeakMap;vi=new WeakMap;va=new WeakSet;qr=function(){if(ma(this,vi).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&ma(this,vi).mediaHeight===this.mediaHeight)return;ma(this,vi).mediaRenditionList=JSON.stringify(this.mediaRenditionList),ma(this,vi).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort((r,n)=>n.height-r.height);for(const r of e)r.selected=r.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const t=!this.mediaRenditionSelected;for(const r of e){const n=this.formatMenuItemText(`${Math.min(r.width,r.height)}p`,r),o=Si({type:"radio",text:n,value:`${r.id}`,checked:r.selected&&!t});o.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(o)}const i=Si({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(i)};Zr=new WeakSet;Vs=function(){if(this.value==null)return;const e=new d.CustomEvent(f.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",dv);const uv=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,Tc=g.createElement("template");Tc.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${uv}</slot>
`;class cv extends Mi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}constructor(){super({slotTemplate:Tc,tooltipContent:W.RENDITIONS})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ve.QUALITY())}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return Y(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){G(this,s.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return U(this,s.MEDIA_HEIGHT)}set mediaHeight(t){V(this,s.MEDIA_HEIGHT,t)}}d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",cv);var yc=e=>{throw TypeError(e)},Mo=(e,t,i)=>t.has(e)||yc("Cannot "+i),R=(e,t,i)=>(Mo(e,t,"read from private field"),i?i.call(e):t.get(e)),Ie=(e,t,i)=>t.has(e)?yc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),qe=(e,t,i,a)=>(Mo(e,t,"write to private field"),t.set(e,i),i),K=(e,t,i)=>(Mo(e,t,"access private method"),i),On=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends On{}globalThis.DocumentFragment=e}var Lo=class extends On{},hv=class extends On{},mv={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Lo)}},Qr,pv=class{constructor(e,t={}){Ie(this,Qr),qe(this,Qr,t?.detail)}get detail(){return R(this,Qr)}initCustomEvent(){}};Qr=new WeakMap;function vv(e,t){return new Lo}var kc={document:{createElement:vv},DocumentFragment,customElements:mv,CustomEvent:pv,EventTarget:On,HTMLElement:Lo,HTMLVideoElement:hv},Ic=typeof window>"u"||typeof globalThis.customElements>"u",Re=Ic?kc:globalThis,Do=Ic?kc.document:globalThis.document;function Ev(e){let t="";return Object.entries(e).forEach(([i,a])=>{a!=null&&(t+=`${Ys(i)}: ${a}; `)}),t?t.trim():void 0}function Ys(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Sc(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function pe(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Cc(e){let t=bv(e).toString();return t?"?"+t:""}function bv(e){let t={};for(let i in e)e[i]!=null&&(t[i]=e[i]);return new URLSearchParams(t)}var wc=(e,t)=>!e||!t?!1:e.contains(t)?!0:wc(e,t.getRootNode().host),Rc="mux.com",fv=()=>{try{return"3.2.4"}catch{}return"UNKNOWN"},gv=fv(),Mc=()=>gv,_v=(e,{token:t,customDomain:i=Rc,thumbnailTime:a,programTime:r}={})=>{var n;let o=t==null?a:void 0,{aud:l}=(n=Ea(t))!=null?n:{};if(!(t&&l!=="t"))return`https://image.${i}/${e}/thumbnail.webp${Cc({token:t,time:o,program_time:r})}`},Av=(e,{token:t,customDomain:i=Rc,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:o}=(n=Ea(t))!=null?n:{};if(!(t&&o!=="s"))return`https://image.${i}/${e}/storyboard.vtt${Cc({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},xo=e=>{if(e){if([le.LIVE,le.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return le.LIVE}},Tv={crossorigin:"crossOrigin",playsinline:"playsInline"};function yv(e){var t;return(t=Tv[e])!=null?t:Sc(e)}var ci,hi,oe,kv=class{constructor(e,t){Ie(this,ci),Ie(this,hi),Ie(this,oe,[]),qe(this,ci,e),qe(this,hi,t)}[Symbol.iterator](){return R(this,oe).values()}get length(){return R(this,oe).length}get value(){var e;return(e=R(this,oe).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(qe(this,oe,[]),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return R(this,oe)[e]}values(){return R(this,oe).values()}keys(){return R(this,oe).keys()}forEach(e){R(this,oe).forEach(e)}add(...e){var t,i;e.forEach(a=>{this.contains(a)||R(this,oe).push(a)}),!(this.value===""&&!((t=R(this,ci))!=null&&t.hasAttribute(`${R(this,hi)}`)))&&((i=R(this,ci))==null||i.setAttribute(`${R(this,hi)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>{R(this,oe).splice(R(this,oe).indexOf(i),1)}),(t=R(this,ci))==null||t.setAttribute(`${R(this,hi)}`,`${this.value}`)}contains(e){return R(this,oe).includes(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};ci=new WeakMap,hi=new WeakMap,oe=new WeakMap;var Lc=`[mux-player ${Mc()}]`;function it(...e){console.warn(Lc,...e)}function ge(...e){console.error(Lc,...e)}function Dc(e){var t;let i=(t=e.message)!=null?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${P("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),it(i)}var ae={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},wt={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Gl=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),Iv=Zc.filter(e=>e!=="error"),Sv=Object.values(ae).filter(e=>![ae.PLAYSINLINE].includes(e)),Cv=Object.values(wt),wv=class extends Re.HTMLElement{static get observedAttributes(){return[...Sv,...Cv]}constructor(){super()}init(){Iv.forEach(e=>{var t;(t=this.media)==null||t.addEventListener(e,i=>{this.dispatchEvent(new Event(i.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case wt.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case wt.VOLUME:{let n=(a=pe(i))!=null?a:1;this.media&&(this.media.volume=n);return}case wt.PLAYBACKRATE:{let n=(r=pe(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}requestCast(e){var t;return(t=this.media)==null?void 0:t.requestCast(e)}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:Gl}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:Gl}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=pe(this.getAttribute(wt.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(wt.PLAYBACKRATE,`${e}`):this.removeAttribute(wt.PLAYBACKRATE)}get crossOrigin(){return ji(this,ae.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(ae.CROSSORIGIN,`${e}`)}get autoplay(){return ji(this,ae.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(ae.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(ae.AUTOPLAY)}get loop(){return ji(this,ae.LOOP)!=null}set loop(e){e?this.setAttribute(ae.LOOP,""):this.removeAttribute(ae.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return ji(this,ae.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(ae.MUTED,""):this.removeAttribute(ae.MUTED)}get playsInline(){return ji(this,ae.PLAYSINLINE)!=null}set playsInline(e){ge("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(ae.PRELOAD,e):this.removeAttribute(ae.PRELOAD)}};function ji(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var ql=wv,Rv=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ea=new WeakMap,Mv=class xc{constructor(t,i){this.element=t,this.type=i,this.element.addEventListener(this.type,this);let a=ea.get(this.element);a&&a.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let i=ea.get(this.element);i&&i.delete(this.type)}}static for(t){ea.has(t.element)||ea.set(t.element,new Map);let i=t.attributeName.slice(2),a=ea.get(t.element);return a&&a.has(i)?a.get(i):new xc(t.element,i)}};function Lv(e,t){return e instanceof we&&e.attributeName.startsWith("on")?(Mv.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function Dv(e,t){return t instanceof Oc&&e instanceof Ri?(t.renderInto(e),!0):!1}function xv(e,t){return t instanceof DocumentFragment&&e instanceof Ri?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function Ov(e,t){if(e instanceof we){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t)),!0}return e.value=String(t),!0}function Nv(e,t){if(e instanceof we&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}function Pv(e,t){if(typeof t=="boolean"&&e instanceof we){let i=e.attributeNamespace,a=e.element.hasAttributeNS(i,e.attributeName);return t!==a&&(e.booleanValue=t),!0}return!1}function Uv(e,t){return t===!1&&e instanceof Ri?(e.replace(""),!0):!1}function $v(e,t){Nv(e,t)||Pv(e,t)||Lv(e,t)||Uv(e,t)||Dv(e,t)||xv(e,t)||Ov(e,t)}var Zn=new Map,Zl=new WeakMap,Ql=new WeakMap,Oc=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(Zn.has(this.stringsKey))return Zn.get(this.stringsKey);{let e=Do.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<t?`{{ ${r} }}`:""),""),Zn.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(Zl.get(e)!==i){Zl.set(e,i);let r=new Ln(i,this.values,this.processor);Ql.set(e,r),e instanceof Ri?e.replace(...r.children):e.appendChild(r);return}let a=Ql.get(e);(t=a?.update)==null||t.call(a,this.values)}},Bv={processCallback(e,t,i){var a;if(i){for(let[r,n]of t)if(r in i){let o=(a=i[r])!=null?a:"";$v(n,o)}}}};function zr(e,...t){return new Oc(e,t,Bv)}function Wv(e,t){e.renderInto(t)}var Hv=e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""},Fv=e=>zr`
  <style>
    ${Hv(e)}
    ${Rv}
  </style>
  ${Gv(e)}
`,Kv=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return xo(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},Vv={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},Yv=Object.values(Vv).join(", "),Gv=e=>{var t,i,a,r,n,o,l,u,c,v,p,m,E,k,A,_,w,ie,ue,st,Ze,Li,Di,xi,Oi,Ni,Pi,Ui,$i,Bi,Wi,Hi,Wa;return zr`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${Kv(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((i=e.streamType)!=null&&i.includes(le.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(a=e.audio)!=null?a:!1}"
    style="${(r=Ev({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(o=e.backwardSeekOffset)!=null?o:!1}"
    playbackrates="${(l=e.playbackRates)!=null?l:!1}"
    defaultshowremainingtime="${(u=e.defaultShowRemainingTime)!=null?u:!1}"
    defaultduration="${(c=e.defaultDuration)!=null?c:!1}"
    hideduration="${(v=e.hideDuration)!=null?v:!1}"
    title="${(p=e.title)!=null?p:!1}"
    exportparts="${Yv}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${(m=e.targetLiveWindow)!=null?m:!1}"
      stream-type="${(E=xo(e.streamType))!=null?E:!1}"
      crossorigin="${(k=e.crossOrigin)!=null?k:""}"
      playsinline
      autoplay="${(A=e.autoplay)!=null?A:!1}"
      muted="${(_=e.muted)!=null?_:!1}"
      loop="${(w=e.loop)!=null?w:!1}"
      preload="${(ie=e.preload)!=null?ie:!1}"
      debug="${(ue=e.debug)!=null?ue:!1}"
      prefer-cmcd="${(st=e.preferCmcd)!=null?st:!1}"
      disable-tracking="${(Ze=e.disableTracking)!=null?Ze:!1}"
      disable-cookies="${(Li=e.disableCookies)!=null?Li:!1}"
      prefer-playback="${(Di=e.preferPlayback)!=null?Di:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(xi=e.beaconCollectionDomain)!=null?xi:!1}"
      player-init-time="${(Oi=e.playerInitTime)!=null?Oi:!1}"
      player-software-name="${(Ni=e.playerSoftwareName)!=null?Ni:!1}"
      player-software-version="${(Pi=e.playerSoftwareVersion)!=null?Pi:!1}"
      env-key="${(Ui=e.envKey)!=null?Ui:!1}"
      custom-domain="${($i=e.customDomain)!=null?$i:!1}"
      src="${e.src?e.src:e.playbackId?il(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?il(e):!1}"
      cast-receiver="${(Bi=e.castReceiver)!=null?Bi:!1}"
      drm-token="${(Hi=(Wi=e.tokens)==null?void 0:Wi.drm)!=null?Hi:!1}"
      exportparts="video"
    >
      ${e.storyboard?zr`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:zr``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(Wa=e.placeholder)!=null?Wa:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Nc=e=>e.charAt(0).toUpperCase()+e.slice(1),qv=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Nc((i=e.errorCategory)!=null?i:"video"),n=od((a=e.errorCategory)!=null?a:ld.VIDEO);if(e.muxCode===x.NETWORK_OFFLINE)return P("Your device appears to be offline",t);if(e.muxCode===x.NETWORK_TOKEN_EXPIRED)return P("{category} URL has expired",t).format({category:r});if([x.NETWORK_TOKEN_SUB_MISMATCH,x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING,x.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return P("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===x.NETWORK_TOKEN_MISSING)return P("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===x.NETWORK_NOT_FOUND)return P("{category} does not exist",t).format({category:r});if(e.muxCode===x.NETWORK_NOT_READY)return P("{category} is not currently available",t).format({category:r})}if(e.code){if(e.code===de.MEDIA_ERR_NETWORK)return P("Network Error",t);if(e.code===de.MEDIA_ERR_DECODE)return P("Media Error",t);if(e.code===de.MEDIA_ERR_SRC_NOT_SUPPORTED)return P("Source Not Supported",t)}return P("Error",t)},Zv=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Nc((i=e.errorCategory)!=null?i:"video"),n=od((a=e.errorCategory)!=null?a:ld.VIDEO);return e.muxCode===x.NETWORK_OFFLINE?P("Check your internet connection and try reloading this video.",t):e.muxCode===x.NETWORK_TOKEN_EXPIRED?P("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH?P("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_TOKEN_MALFORMED?P("{category} URL is formatted incorrectly",t).format({category:r}):[x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?P("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[x.NETWORK_TOKEN_MISSING,x.NETWORK_INVALID_URL].includes(e.muxCode)?P("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_NOT_FOUND?"":e.muxCode===x.NETWORK_NOT_READY?P("The live stream or video file are not yet ready.",t):e.message}return e.code&&(e.code===de.MEDIA_ERR_NETWORK||e.code===de.MEDIA_ERR_DECODE||(e.code,de.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Qv=(e,t=!1)=>{let i=qv(e,t),a=Zv(e,t);return{title:i,message:a}},zv=e=>{if(e.muxCode){if(e.muxCode===x.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===x.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===x.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===x.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===x.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===de.MEDIA_ERR_NETWORK)return"";if(e.code===de.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===de.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},zl=(e,t)=>{let i=zv(e);return{message:e.message,context:e.context,file:i}},Xv=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Gs=Do.createElement("template");"innerHTML"in Gs&&(Gs.innerHTML=Xv);var Xl,Jl,Pc=class extends Dn{};Pc.template=(Jl=(Xl=Gs.content)==null?void 0:Xl.children)==null?void 0:Jl[0];Re.customElements.get("media-theme-gerwig")||Re.customElements.define("media-theme-gerwig",Pc);var Jv="gerwig",et={SRC:"src",POSTER:"poster"},h={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips"},qs=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function jv(e,t){var i;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.storyboard,storyboardSrc:e.getAttribute(h.STORYBOARD_SRC),placeholder:e.getAttribute("placeholder"),themeTemplate:t0(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(h.NOHOTKEYS),hotKeys:e.getAttribute(h.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(b.TARGET_LIVE_WINDOW),streamType:xo(e.getAttribute(b.STREAM_TYPE)),primaryColor:e.getAttribute(h.PRIMARY_COLOR),secondaryColor:e.getAttribute(h.SECONDARY_COLOR),accentColor:e.getAttribute(h.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:i0(e),playbackRates:e.getAttribute(h.PLAYBACK_RATES),customDomain:(i=e.getAttribute(b.CUSTOM_DOMAIN))!=null?i:void 0,title:e.getAttribute(h.TITLE),novolumepref:e.hasAttribute(h.NO_VOLUME_PREF),castReceiver:e.castReceiver,...t,extraSourceParams:e.extraSourceParams}}var e0=cu.formatErrorMessage;cu.formatErrorMessage=e=>{var t,i;if(e instanceof de){let a=Qv(e,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=a.linkText)!=null?t:""} ${P("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return e0(e)};function t0(e){var t,i;let a=e.theme;if(a){let r=(i=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Re.customElements.get(a);if(n!=null&&n.template)return n.template}}function i0(e){var t;let i=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function jl(e){let t=e.hasAttribute(h.TITLE)?{video_title:e.getAttribute(h.TITLE)}:{};return e.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=e.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},t)}var a0=Object.values(b),r0=Object.values(et),n0=Object.values(h),ed=Mc(),td="mux-player",id={isDialogOpen:!1},s0={redundant_streams:!0},Xr,Jr,jr,Rt,en,Ti,B,pt,Uc,Zs,Mt,ad,rd,nd,sd,Qs=class extends ql{constructor(){super(),Ie(this,B),Ie(this,Xr),Ie(this,Jr,!1),Ie(this,jr,{}),Ie(this,Rt,!0),Ie(this,en,new kv(this,"hotkeys")),Ie(this,Ti,{...id,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&K(this,B,Zs).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(wc(this,Do.activeElement)||e.preventDefault())}}),qe(this,Xr,Yc()),this.attachShadow({mode:"open"}),K(this,B,Uc).call(this),this.isConnected&&K(this,B,pt).call(this)}static get NAME(){return td}static get VERSION(){return ed}static get observedAttributes(){var e;return[...(e=ql.observedAttributes)!=null?e:[],...r0,...a0,...n0]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video");t&&(t.metadata=jl(this))}attributeChangedCallback(e,t,i){switch(K(this,B,pt).call(this),super.attributeChangedCallback(e,t,i),e){case h.HOTKEYS:R(this,en).value=i;break;case h.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&it(P("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time."));break}case h.THUMBNAIL_TOKEN:{if(i){let a=Ea(i);if(a){let{aud:r}=a,n=Nn.THUMBNAIL;r!==n&&it(P("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case h.STORYBOARD_TOKEN:{if(i){let a=Ea(i);if(a){let{aud:r}=a,n=Nn.STORYBOARD;r!==n&&it(P("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case h.DRM_TOKEN:{if(i){let a=Ea(i);if(a){let{aud:r}=a,n=Nn.DRM;r!==n&&it(P("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case b.PLAYBACK_ID:{i!=null&&i.includes("?token")&&ge(P("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case b.STREAM_TYPE:i&&![le.LIVE,le.ON_DEMAND,le.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Dc({file:"invalid-stream-type.md",message:P("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===le.LIVE?this.getAttribute(h.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[b.PLAYBACK_ID,et.SRC,h.PLAYBACK_TOKEN].includes(e)&&t!==i&&qe(this,Ti,{...R(this,Ti),...id}),K(this,B,Mt).call(this,{[yv(e)]:i})}get preferCmcd(){var e;return(e=this.getAttribute(b.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tl.includes(e)?this.setAttribute(b.PREFER_CMCD,e):it(`Invalid value for preferCmcd. Must be one of ${tl.join()}`):this.removeAttribute(b.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(s.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(s.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(h.THEME))!=null?e:Jv}set theme(e){this.setAttribute(h.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(qs.includes(i))continue;let a=e.getAttribute(i);t[Sc(i)]=a===""?!0:a}return t}set themeProps(e){var t,i;K(this,B,pt).call(this);let a={...this.themeProps,...e};for(let r in a){if(qs.includes(r))continue;let n=e?.[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(Ys(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(Ys(r),n)}}get playbackId(){var e;return(e=this.getAttribute(b.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(b.PLAYBACK_ID,e):this.removeAttribute(b.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=yt(this,et.SRC))!=null?e:void 0:(t=this.getAttribute(et.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(et.SRC,e):this.removeAttribute(et.SRC)}get poster(){var e;let t=this.getAttribute(et.POSTER);if(t!=null)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){it("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return _v(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||e===""?this.setAttribute(et.POSTER,e):this.removeAttribute(et.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(h.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(h.STORYBOARD_SRC,e):this.removeAttribute(h.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[le.LIVE,le.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return Av(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(h.AUDIO)}set audio(e){if(!e){this.removeAttribute(h.AUDIO);return}this.setAttribute(h.AUDIO,"")}get hotkeys(){return R(this,en)}get nohotkeys(){return this.hasAttribute(h.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(h.NOHOTKEYS);return}this.setAttribute(h.NOHOTKEYS,"")}get thumbnailTime(){return pe(this.getAttribute(h.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(h.THUMBNAIL_TIME,`${e}`)}get title(){var e;return(e=this.getAttribute(h.TITLE))!=null?e:""}set title(e){e!==this.title&&(e?this.setAttribute(h.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return(e=yt(this,h.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(h.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(h.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Re.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),i))return i}set primaryColor(e){this.setAttribute(h.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(h.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Re.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),i))return i}set secondaryColor(e){this.setAttribute(h.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(h.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Re.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),i))return i}set accentColor(e){this.setAttribute(h.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(h.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(h.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(h.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(h.PLAYBACK_RATES))return this.getAttribute(h.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(h.PLAYBACK_RATES);return}this.setAttribute(h.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=pe(this.getAttribute(h.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(h.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=pe(this.getAttribute(h.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(h.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(h.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(h.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(h.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return pe(this.getAttribute(h.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(h.DEFAULT_DURATION):this.setAttribute(h.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(b.PLAYER_INIT_TIME)?pe(this.getAttribute(b.PLAYER_INIT_TIME)):R(this,Xr)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(b.PLAYER_INIT_TIME):this.setAttribute(b.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(b.PLAYER_SOFTWARE_NAME))!=null?e:td}get playerSoftwareVersion(){var e;return(e=this.getAttribute(b.PLAYER_SOFTWARE_VERSION))!=null?e:ed}get beaconCollectionDomain(){var e;return(e=this.getAttribute(b.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(b.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(b.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(b.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(b.MAX_RESOLUTION,e):this.removeAttribute(b.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(b.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(b.MIN_RESOLUTION,e):this.removeAttribute(b.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(b.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(b.RENDITION_ORDER,e):this.removeAttribute(b.RENDITION_ORDER))}get programStartTime(){return pe(this.getAttribute(b.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(b.PROGRAM_START_TIME):this.setAttribute(b.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return pe(this.getAttribute(b.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(b.PROGRAM_END_TIME):this.setAttribute(b.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return pe(this.getAttribute(b.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(b.ASSET_START_TIME):this.setAttribute(b.ASSET_START_TIME,`${e}`)}get assetEndTime(){return pe(this.getAttribute(b.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(b.ASSET_END_TIME):this.setAttribute(b.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(h.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(h.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):s0}set extraSourceParams(e){e==null?this.removeAttribute(h.EXTRA_SOURCE_PARAMS):this.setAttribute(h.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(b.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(b.CUSTOM_DOMAIN,e):this.removeAttribute(b.CUSTOM_DOMAIN))}get envKey(){var e;return(e=yt(this,b.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(b.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(h.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(h.NO_VOLUME_PREF,""):this.removeAttribute(h.NO_VOLUME_PREF)}get debug(){return yt(this,b.DEBUG)!=null}set debug(e){e?this.setAttribute(b.DEBUG,""):this.removeAttribute(b.DEBUG)}get disableTracking(){return yt(this,b.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(b.DISABLE_TRACKING,!!e)}get disableCookies(){return yt(this,b.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(b.DISABLE_COOKIES,""):this.removeAttribute(b.DISABLE_COOKIES)}get streamType(){var e,t,i;return(i=(t=this.getAttribute(b.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?i:le.UNKNOWN}set streamType(e){this.setAttribute(b.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return(i=(t=this.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?i:le.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(h.DEFAULT_STREAM_TYPE,e):this.removeAttribute(h.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(h.TARGET_LIVE_WINDOW)?+this.getAttribute(h.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(h.TARGET_LIVE_WINDOW):this.setAttribute(h.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return pe(yt(this,b.START_TIME))}set startTime(e){this.setAttribute(b.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(b.PREFER_PLAYBACK);if(e===Ha.MSE||e===Ha.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Ha.MSE||e===Ha.NATIVE?this.setAttribute(b.PREFER_PLAYBACK,e):this.removeAttribute(b.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(K(this,B,pt).call(this),!this.media){ge("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...jl(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(K(this,B,pt).call(this),!this.media){ge("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(K(this,B,pt).call(this),!this.media){ge("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(K(this,B,pt).call(this),!this.media){ge("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(h.PLAYBACK_TOKEN),t=this.getAttribute(h.DRM_TOKEN),i=this.getAttribute(h.THUMBNAIL_TOKEN),a=this.getAttribute(h.STORYBOARD_TOKEN);return{...R(this,jr),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(e){qe(this,jr,e??{})}get playbackToken(){var e;return(e=this.getAttribute(h.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(h.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(h.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(h.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(h.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(h.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(h.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(h.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Gc(n,e,t,i,a)}removeTextTrack(e){var t;let i=(t=this.media)==null?void 0:t.nativeEl;if(i)return qc(i,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(h.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(h.CAST_RECEIVER,e):this.removeAttribute(h.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){ge("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(h.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(h.NO_TOOLTIPS);return}this.setAttribute(h.NO_TOOLTIPS,"")}};Xr=new WeakMap,Jr=new WeakMap,jr=new WeakMap,Rt=new WeakMap,en=new WeakMap,Ti=new WeakMap,B=new WeakSet,pt=function(){var e,t,i,a;if(!R(this,Jr)){qe(this,Jr,!0),K(this,B,Mt).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Re.HTMLElement))throw""}catch{ge("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof Qc))throw""}catch{ge("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof em))throw""}catch{ge("<media-controller> failed to upgrade!")}this.init(),K(this,B,ad).call(this),K(this,B,rd).call(this),K(this,B,nd).call(this),qe(this,Rt,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(S.USER_INACTIVE))!=null?t:!0),K(this,B,sd).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>K(this,B,Mt).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>K(this,B,Mt).call(this))}},Uc=function(){var e,t;try{(e=window?.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window?.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Zs=function(e){Object.assign(R(this,Ti),e),K(this,B,Mt).call(this)},Mt=function(e={}){Wv(Fv(jv(this,{...R(this,Ti),...e})),this.shadowRoot)},ad=function(){let e=t=>{var i,a;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(qs.includes(r))return;let n=this.getAttribute(t);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},rd=function(){var e;let t=i=>{let{detail:a}=i;if(a instanceof de||(a=new de(a.message,a.code,a.fatal)),!(a!=null&&a.fatal)){it(a),a.data&&it(`${a.name} data:`,a.data);return}let r=zl(a);r.message&&Dc(r),ge(a),a.data&&ge(`${a.name} data:`,a.data),K(this,B,Zs).call(this,{isDialogOpen:!0})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof de))return i;let o=zl((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:o.message?String(o.message):i.player_error_message,player_error_context:o.context?String(o.context):i.player_error_context}}),(e=this.media)==null||e.addEventListener("error",i=>{var a,r;let{detail:n}=i;if(!n){let{message:o,code:l}=(r=(a=this.media)==null?void 0:a.error)!=null?r:{};n=new de(o,l)}n!=null&&n.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:n}))})},nd=function(){var e,t,i,a;let r=()=>K(this,B,Mt).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},sd=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===le.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,c,v=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(p=>{if(!(!p.snapToLines||p.line<-5||p.line>=0&&p.line<10))if(!c||this.paused){let m=p.text.split(`
`).length,E=-3;this.streamType===le.LIVE&&(E=-2);let k=E-m;if(p.line===k&&!v)return;a.has(p)||a.set(p,p.line),p.line=k}else setTimeout(()=>{p.line=a.get(p)||"auto"},500)})},o=()=>{var u,c;n(i,(c=(u=this.mediaController)==null?void 0:u.hasAttribute(S.USER_INACTIVE))!=null?c:!1)},l=()=>{var u,c;let v=Array.from(((c=(u=this.mediaController)==null?void 0:u.media)==null?void 0:c.textTracks)||[]).filter(p=>["subtitles","captions"].includes(p.kind)&&p.mode==="showing")[0];v!==i&&i?.removeEventListener("cuechange",o),i=v,i?.addEventListener("cuechange",o),n(i,R(this,Rt))};l(),(e=this.textTracks)==null||e.addEventListener("change",l),(t=this.textTracks)==null||t.addEventListener("addtrack",l),this.addEventListener("userinactivechange",()=>{var u,c;let v=(c=(u=this.mediaController)==null?void 0:u.hasAttribute(S.USER_INACTIVE))!=null?c:!0;R(this,Rt)!==v&&(qe(this,Rt,v),n(i,R(this,Rt)))})};function yt(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}Re.customElements.get("mux-player")||(Re.customElements.define("mux-player",Qs),Re.MuxPlayerElement=Qs);var h0=Qs;export{de as MediaError,h0 as default,Yc as generatePlayerInitTime,yt as getVideoAttribute,td as playerSoftwareName,ed as playerSoftwareVersion};
//# sourceMappingURL=index.5n-gWvoT.js.map
