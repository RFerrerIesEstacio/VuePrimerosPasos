(function(){"use strict";var e={854:function(e,o,n){var a=n(963),r=n(252);const t={id:"app",class:"container"},s=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-12"},[(0,r._)("h1",null,"Personas")])],-1),i={class:"row"},l={class:"col-md-12"},d={key:0,class:"alert alert-info",role:"alert"},c={key:1};function p(e,o,n,a,p,u){const m=(0,r.up)("formulario-persona"),v=(0,r.up)("tabla-personas");return(0,r.wg)(),(0,r.iD)("div",t,[s,(0,r._)("div",i,[(0,r._)("div",l,[(0,r.Wm)(m,{onAddPersona:u.agregarPersona},null,8,["onAddPersona"]),p.personas.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",d," No se han agregado personas ")),p.personas.length?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(v,{personas:p.personas,onDeletePersona:u.eliminarPersona,onActualizarPersona:u.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])):(0,r.kq)("",!0)])])])}var u=n(577);const m={id:"tabla-personas"},v={class:"table"},h=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Nombre"),(0,r._)("th",null,"Apellido"),(0,r._)("th",null,"Email")])],-1),b={key:0},f=["onUpdate:modelValue"],g={key:1},_={key:2},y=["onUpdate:modelValue"],w={key:3},k={key:4},D=["onUpdate:modelValue"],P={key:5},E={key:6},C=["onClick"],O=["onClick"],I={key:7},j=["onClick"],x=["onClick"];function A(e,o,n,t,s,i){return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("table",v,[h,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.personas,(o=>((0,r.wg)(),(0,r.iD)("tr",{key:o.id},[s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",b,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e},null,8,f),[[a.nr,o.nombre]])])):((0,r.wg)(),(0,r.iD)("td",g,(0,u.zw)(o.nombre),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",_,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e},null,8,y),[[a.nr,o.apellido]])])):((0,r.wg)(),(0,r.iD)("td",w,(0,u.zw)(o.apellido),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",k,[(0,r.wy)((0,r._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e},null,8,D),[[a.nr,o.email]])])):((0,r.wg)(),(0,r.iD)("td",P,(0,u.zw)(o.email),1)),s.editando===o.id?((0,r.wg)(),(0,r.iD)("td",E,[(0,r._)("button",{class:"btn btn-success",onClick:e=>i.guardarPersona(o)},"💾 Guardar",8,C),(0,r._)("button",{class:"btn btn-secondary ml-2",onClick:e=>i.cancelarEdicion(o)},"❌ Cancelar",8,O)])):((0,r.wg)(),(0,r.iD)("td",I,[(0,r._)("button",{class:"btn btn-info",onClick:e=>i.editarPersona(o)},"✏️ Editar",8,j),(0,r._)("button",{class:"btn btn-danger ml-2",onClick:n=>e.$emit("delete-persona",o.id)},"🗑️ Eliminar",8,x)]))])))),128))])])])}var U={name:"tabla-personas",props:{personas:Array},data(){return{editando:null}},methods:{editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null}}},V=n(744);const z=(0,V.Z)(U,[["render",A]]);var F=z;const T=e=>((0,r.dD)("data-v-24191693"),e=e(),(0,r.Cn)(),e),q={id:"formulario-persona"},N={class:"container"},$={class:"row"},Z={class:"col-md-4"},K={class:"form-group"},L=T((()=>(0,r._)("label",null,"Nombre",-1))),W={class:"col-md-4"},G={class:"form-group"},H=T((()=>(0,r._)("label",null,"Apellido",-1))),J={class:"col-md-4"},M={class:"form-group"},S=T((()=>(0,r._)("label",null,"Email",-1))),Y=T((()=>(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-4"},[(0,r._)("div",{class:"form-group"},[(0,r._)("button",{style:{"margin-top":"10px"},class:"btn btn-primary"},"Añadir persona")])])],-1))),B={class:"container"},Q={class:"row"},R={class:"col-md-12"},X={key:0,class:"alert alert-danger",role:"alert"},ee={key:1,class:"alert alert-success",role:"alert"};function oe(e,o,n,t,s,i){return(0,r.wg)(),(0,r.iD)("div",q,[(0,r._)("form",{onSubmit:o[7]||(o[7]=(0,a.iM)(((...e)=>i.enviarFormulario&&i.enviarFormulario(...e)),["prevent"]))},[(0,r._)("div",N,[(0,r._)("div",$,[(0,r._)("div",Z,[(0,r._)("div",K,[L,(0,r.wy)((0,r._)("input",{ref:"nombre","onUpdate:modelValue":o[0]||(o[0]=e=>s.persona.nombre=e),type:"text",class:(0,u.C_)(["form-control",{"is-invalid":s.procesando&&i.nombreInvalido}]),onFocus:o[1]||(o[1]=(...e)=>i.resetEstado&&i.resetEstado(...e)),onKeypress:o[2]||(o[2]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[a.nr,s.persona.nombre]])])]),(0,r._)("div",W,[(0,r._)("div",G,[H,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>s.persona.apellido=e),type:"text",class:(0,u.C_)(["form-control",{"is-invalid":s.procesando&&i.apellidoInvalido}]),onFocus:o[4]||(o[4]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[a.nr,s.persona.apellido]])])]),(0,r._)("div",J,[(0,r._)("div",M,[S,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>s.persona.email=e),type:"email",class:(0,u.C_)(["form-control",{"is-invalid":s.procesando&&i.emailInvalido}]),onFocus:o[6]||(o[6]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[a.nr,s.persona.email]])])])]),Y]),(0,r._)("div",B,[(0,r._)("div",Q,[(0,r._)("div",R,[s.error&&s.procesando?((0,r.wg)(),(0,r.iD)("div",X," Debes rellenar todos los campos! ")):(0,r.kq)("",!0),s.correcto?((0,r.wg)(),(0,r.iD)("div",ee," La persona ha sido agregada correctamente! ")):(0,r.kq)("",!0)])])])],32)])}var ne={name:"formulario-persona",data(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",email:"",apellido:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido(){return this.persona.nombre.length<1},apellidoInvalido(){return this.persona.apellido.length<1},emailInvalido(){return this.persona.email.length<1}}};const ae=(0,V.Z)(ne,[["render",oe],["__scopeId","data-v-24191693"]]);var re=ae,te={name:"App",components:{TablaPersonas:F,FormularioPersona:re},data(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}},methods:{agregarPersona(e){let o=0;this.personas.length>0&&(o=this.personas[this.personas.length-1].id+1),this.personas=[...this.personas,{...e,id:o}]},eliminarPersona(e){this.personas=this.personas.filter((o=>o.id!==e))},actualizarPersona(e,o){this.personas=this.personas.map((n=>n.id===e?o:n))}}};const se=(0,V.Z)(te,[["render",p]]);var ie=se;(0,a.ri)(ie).mount("#app")}},o={};function n(a){var r=o[a];if(void 0!==r)return r.exports;var t=o[a]={exports:{}};return e[a](t,t.exports,n),t.exports}n.m=e,function(){var e=[];n.O=function(o,a,r,t){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],t=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&t||s>=t)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,t<s&&(s=t));if(i){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[a,r,t]}}(),function(){n.d=function(e,o){for(var a in o)n.o(o,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,a){var r,t,s=a[0],i=a[1],l=a[2],d=0;if(s.some((function(o){return 0!==e[o]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var c=l(n)}for(o&&o(a);d<s.length;d++)t=s[d],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(c)},a=self["webpackChunkproyecto_vue"]=self["webpackChunkproyecto_vue"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(854)}));a=n.O(a)})();
//# sourceMappingURL=app.bedad62a.js.map