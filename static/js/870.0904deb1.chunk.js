"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[870],{830:function(r,e,a){a.d(e,{Z:function(){return n}});var o="FormSection_background__Fea63",t=a(184),n=function(r){var e=r.children;return(0,t.jsx)("div",{className:o,children:e})}},9198:function(r,e,a){var o=a(8174),t={showError:function(r){return o.Am.error(r)},showSuccess:function(r){return o.Am.success(r)},showWarning:function(r){return o.Am.warn(r)}};e.Z=t},6966:function(r,e,a){a.d(e,{Z:function(){return o.Z}});var o=a(9198)},5870:function(r,e,a){a.r(e),a.d(e,{default:function(){return Z}});var o=a(9439),t=a(2791),n=a(9434),s=a(1087),i=a(5705),l=a(9983),u=a(3853),c=a(4691),d=a(7103),m=a(3168),h=a(3535),p=a(4745),f=a(6966),_=a(184),x=function(){var r=(0,m.$)().t,e=(0,n.I0)(),a=(0,t.useState)(!1),x=(0,o.Z)(a,2),v=x[0],w=x[1],Z=(0,t.useState)(!1),g=(0,o.Z)(Z,2),j=g[0],b=g[1],k=d.Ry({email:d.Z_().email("auth.invalidEmail").required("auth.requiredValue"),password:d.Z_().matches(/^\S*$/,"auth.notWhitespace").min(7,"auth.passwordShort").max(32,"auth.passwordLong").required("auth.requiredValue")});return(0,_.jsxs)("div",{className:p.Z.formWrap,children:[(0,_.jsxs)("h1",{className:p.Z.title,children:[" ",r("auth.login")]}),(0,_.jsx)(i.J9,{initialValues:{email:"",password:""},validationSchema:k,onSubmit:function(r){var a=r.email,o=r.password;b(!0),e(h.r5.logIn({email:a,password:o})).unwrap().catch((function(r){b(!1),f.Z.showError(null===r||void 0===r?void 0:r.message)}))},children:function(e){var a=e.errors,o=e.touched;return(0,_.jsxs)(i.l0,{className:p.Z.form,children:[(0,_.jsxs)("label",{className:p.Z.formGroup,children:[(0,_.jsx)(i.gN,{type:"email",name:"email",className:p.Z.input,placeholder:r("auth.emailPlaceholder")}),a.email&&o.email&&(0,_.jsx)("div",{className:p.Z.errorMsg,children:r(a.email)})]}),(0,_.jsxs)("label",{className:p.Z.formGroup,children:[(0,_.jsx)(i.gN,{type:v?"text":"password",name:"password",className:p.Z.input,placeholder:r("auth.passwordPlaceholder")}),(0,_.jsxs)("span",{className:p.Z.icon,onClick:function(){return w(!v)},children:[v&&(0,_.jsx)(l.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,_.jsx)(u.rDJ,{})}),!v&&(0,_.jsx)(l.Pd.Provider,{value:{style:{verticalAlign:"middle"}},children:(0,_.jsx)(u.rzC,{})})]}),a.password&&o.password&&(0,_.jsx)("div",{className:p.Z.errorMsg,children:r(a.password)})]}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{type:"submit",className:p.Z.button,disabled:j,children:j?(0,_.jsx)(c.fe,{visible:!0,height:"40",width:"80",ariaLabel:"dna-loading",wrapperClass:"dna-wrapper",wrapperStyle:{verticalAlign:"middle"}}):r("auth.login")})})]})}}),(0,_.jsxs)("p",{className:p.Z.textHint,children:[r("auth.loginHint"),(0,_.jsx)(s.rU,{className:p.Z.link,to:"/register",children:r("auth.register")})]})]})},v=a(830),w=a(3409),Z=function(){return(0,_.jsx)("main",{children:(0,_.jsx)(v.Z,{children:(0,_.jsx)(w.Z,{children:(0,_.jsx)(x,{})})})})}},4745:function(r,e){e.Z={orangeColor:"#f59256",mainTextColor:"#111",backgroundColor:"#fdf7f2",prymaryTextColor:"#000",activeInputColor:"#fdf7f2",errorColor:"#d60202",secondaryTextColor:"#fff",hoverOrangeColor:"#e7884d",primaryGrayColor:"rgba(17,17,17,.6)",secondGrayColor:"#535353",formWrap:"AuthForm_formWrap__i1s5e",title:"AuthForm_title__WkPPr",form:"AuthForm_form__kV4hH",formGroup:"AuthForm_formGroup__FWdnw",input:"AuthForm_input__sMieH",icon:"AuthForm_icon__Z6Tyz",button:"AuthForm_button__B5dfz",backButton:"AuthForm_backButton__JGFqa",textHint:"AuthForm_textHint__hVame",link:"AuthForm_link__xk1HL",errorMsg:"AuthForm_errorMsg__JvpxU"}}}]);
//# sourceMappingURL=870.0904deb1.chunk.js.map