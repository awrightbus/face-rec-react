(this["webpackJsonpface-rec-react"]=this["webpackJsonpface-rec-react"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(46),l=t.n(c),s=(t(99),t(18));t(100);var i=function(e){return r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return e.signInOut("signin")}},"Sign Out"))};var m=function(e){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ",type:"submit",value:"Register",onClick:function(){return e.signInOut("home")}})))))};var o=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1],p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:o})};return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:function(e){l(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:function(e){u(e.target.value)},className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ",type:"submit",value:"Sign in",onClick:function(){fetch("/signin",p).then((function(e){return e.json()})).then((function(a){"success"===a&&(e.signInOut("home"),console.log(a))})).catch((function(e){return console.log(e)}))}})),r.a.createElement("div",{className:"lh-copy mt3 center"},r.a.createElement("p",{onClick:function(){return e.signInOut("register")},className:"f6 link dim black db  pointer"},"Register")))))};t(101);var u=function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:{color:"whiteSmoke"},className:"center"},"This magical app will detect faces in your pictures. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:" form center pa4 br3 shadow-s"},r.a.createElement("input",{onChange:e.inputChange,className:"f4 pa2 w-70 center",type:"text"}),r.a.createElement("button",{onClick:e.detect,className:"w-30 grow f4 link ph3 pv2 white bg-light-blue"},"Detect")),"wi"))};var p=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:" center white f3"},"Antonio your current rank is..."),r.a.createElement("div",{className:" center white f1"},"# 6"))},b=t(91),d=t.n(b),h=(t(102),t(92)),f=t.n(h);var g=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(d.a,{className:"Tilt",options:{max:25},style:{height:100,width:100}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{src:f.a,alt:"face"}))))};t(103);var E=function(e){return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputImage",src:e.imgUrl,alt:"/",width:"500px",height:"auto"}),r.a.createElement("div",{className:"boundingBox",style:{top:e.box.topRow,right:e.box.rightCol,bottom:e.box.bottomRow,left:e.box.leftCol}})))},w=t(93),v=t.n(w),N=t(47),y=t.n(N);var k=function(){var e=new y.a.App({apiKey:"863af534057246748dd9e9585aa06736"}),a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],l=t[1],b=Object(n.useState)(""),d=Object(s.a)(b,2),h=d[0],f=d[1],w=Object(n.useState)({}),N=Object(s.a)(w,2),k=N[0],O=N[1],C=Object(n.useState)("signin"),j=Object(s.a)(C,2),x=j[0],S=j[1],I=function(e){S(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{className:"particle"}),"home"===x?r.a.createElement("div",null,r.a.createElement(i,{signInOut:I}),r.a.createElement(g,null),r.a.createElement(p,null),r.a.createElement(u,{inputChange:function(e){l(e.target.value)},detect:function(){f(c),e.models.predict(y.a.FACE_DETECT_MODEL,c).then((function(e){return function(e){O(e)}(function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputImage"),n=Number(t.width),r=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*r,rightCol:n-a.right_col*n,bottomRow:r-a.bottom_row*r}}(e))})).catch((function(e){return console.log(e)}))}}),r.a.createElement(E,{box:k,imgUrl:h})):"signin"===x?r.a.createElement(o,{signInOut:I}):r.a.createElement(m,{signInOut:I}))};t(351);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},92:function(e,a,t){e.exports=t.p+"static/media/face.fbf92037.png"},94:function(e,a,t){e.exports=t(352)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.296b885e.chunk.js.map