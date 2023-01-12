"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{8270:function(n,e,t){t.d(e,{II:function(){return f},Wi:function(){return p},__:function(){return x},wp:function(){return h},yt:function(){return m},zx:function(){return b}});var r,i,o,a,c,s,d=t(168),u=t(6088),l=t(5705),p=(0,u.Z)(l.l0)(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 20px 0;\n"]))),x=u.Z.label(i||(i=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #000;\n  margin-bottom: 24px;\n"]))),f=u.Z.input(o||(o=(0,d.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: rgba(33, 33, 33, 0.2);\n  font-size: 18px;\n  font-weight: 500;\n"]))),m=(0,u.Z)(l.gN)(a||(a=(0,d.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: rgba(33, 33, 33, 0.2);\n  font-size: 18px;\n  font-weight: 500;\n"]))),b=u.Z.button(c||(c=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n\n  padding: 12px 12px;\n  margin-bottom: 20px;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  text-align: center;\n  letter-spacing: 0.06em;\n  background-color: #2196f3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 4px;\n  border-color: transparent;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #188ce8;\n  }\n"]))),h=u.Z.button(s||(s=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n\n  padding: 12px 12px;\n  margin-bottom: 20px;\n\n\n  font-weight: 700;\n  font-size: 20px;\n  text-align: center;\n  letter-spacing: 0.06em;\n  background-color: #2196f3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 8px;\n  border-color: transparent;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #188ce8;\n  }\n"])))},5329:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return an}});var r,i=t(2791),o=t(9434),a=t(5206),c=t(8966),s=t(9439),d=t(1413),u=t(5705),l=t(3634),p=t(4164),x=t(4324),f=t(8820),m=t(168),b=t(6088),h=b.Z.button(r||(r=(0,m.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 30px;\n  height: 30px;\n\n  border: transparent;\n  border-radius: 50%;\n  background-color: #fff;\n  color: #757575;\n\n  padding: 0;\n\n  transition-property: color, background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #188ce8;\n  }\n"]))),g=t(3329);function y(n){var e=n.children,t=n.onClick;return(0,g.jsx)(h,{className:"btn",type:"button",onClick:t,children:e})}y.defaultProps={onClick:function(){return null},children:null};var j,Z,w,v,k,z,C,_,A,E=t(539),I=(0,b.Z)(E.Z)(j||(j=(0,m.Z)(["\n overflow: auto;\n"]))),N=b.Z.div(Z||(Z=(0,m.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  width: 30vw;\n  height: 40vh;\n  max-height: 500px;\n\n  padding: 40px;\n  overflow-y: auto;\n \n\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n\n  transform: translate(-50%, -50%) scale(1);\n  transition-property: transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n"]))),S=document.querySelector("#modal-root"),F=function(n){var e=n.children,t=n.onClose,r=(0,i.useRef)(),o=(0,i.useCallback)((function(){(0,x.tG)(r.current),t()}),[t]);return(0,i.useEffect)((function(){var n=function(n){"Escape"===n.code&&o()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[o]),(0,i.useEffect)((function(){return(0,x.Qp)(r.current),function(){return(0,x.tP)()}}),[]),(0,p.createPortal)((0,g.jsx)(I,{open:!0,onClick:function(n){n.target===n.currentTarget&&o()},ref:r,children:(0,g.jsxs)(N,{children:[(0,g.jsx)(y,{onClick:o,children:(0,g.jsx)(f.SV5,{size:"30px"})}),e]})}),S)},L=b.Z.li(w||(w=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #000;\n"]))),P=b.Z.span(v||(v=(0,m.Z)(["\n  margin-right: auto;\n"]))),W=b.Z.span(k||(k=(0,m.Z)(["\ndisplay: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 400px;\n  font-weight: 400;\n"]))),q=b.Z.span(z||(z=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 65%;\n"]))),J=b.Z.div(C||(C=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),B=b.Z.button(_||(_=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 12px 12px;\n  max-width: 160px;\n  margin: 50px auto 0 auto;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.88;\n  text-align: center;\n  letter-spacing: 0.06em;\n  background-color: #2196f3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 4px;\n  border-color: transparent;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #188ce8;\n  }\n"]))),M=b.Z.button(A||(A=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 8px 40px;\n  max-width: 160px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.88;\n  text-align: center;\n  letter-spacing: 0.06em;\n  background-color: #2196f3;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 4px;\n  border-color: transparent;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #188ce8;\n  }\n"]))),T=t(8270);function V(n,e){switch(e.type){case"name":return(0,d.Z)((0,d.Z)({},n),{},{name:e.payload});case"number":return(0,d.Z)((0,d.Z)({},n),{},{number:e.payload});default:return n}}function D(n){var e=n.id,t=n.name,r=n.number,a={name:t,number:r},c=(0,i.useState)(!1),d=(0,s.Z)(c,2),p=d[0],x=d[1],f=(0,i.useState)(!1),m=(0,s.Z)(f,2),b=m[0],h=m[1],y=(0,i.useReducer)(V,a),j=(0,s.Z)(y,2),Z=j[0],w=j[1],v=(0,o.I0)(),k=function(){h(!1)},z=function(n){w({type:n.target.name,payload:n.target.value})};return(0,g.jsxs)(L,{id:e,children:[(0,g.jsxs)(q,{children:[(0,g.jsxs)(P,{children:[" ",t," "]})," ",(0,g.jsxs)(W,{children:[" ",r]})]}),(0,g.jsxs)(J,{children:[(0,g.jsx)(M,{variant:"contained",type:"button",onClick:function(){h(!0)},children:"Edit"}),(0,g.jsx)(M,{type:"button",onClick:function(){x(!0),v((0,l.GK)(e))},disabled:p,children:p?"Deleting...":"Delete"})]}),b&&(0,g.jsx)(F,{onClose:k,children:(0,g.jsx)(u.J9,{initialValues:Z,onSubmit:function(n,t){v((0,l.I1)({name:Z.name,number:Z.number,id:e})),t.resetForm(),k()},children:(0,g.jsxs)(T.Wi,{children:[(0,g.jsxs)(T.__,{children:["Name",(0,g.jsx)(T.yt,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:Z.name,onChange:z})]}),(0,g.jsxs)(T.__,{children:["Number",(0,g.jsx)(T.yt,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number. For example: 098-084-68-40",value:Z.number,onChange:z})]}),(0,g.jsx)(B,{type:"submit",children:"Save changes"})]})})})]})}var G,K=t(6916),R=function(n){return n.contacts},$=function(n){return n.contacts.isLoading},H=function(n){return n.contacts.error},Q=(0,K.P1)([R,function(n){return n.filter}],(function(n,e){return n.items.filter((function(n){return n.name.toLowerCase().includes(e)}))})),O=b.Z.ul(G||(G=(0,m.Z)(["\n  margin-top: 30px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n  padding: 24px 12px;\n  border: 1px solid #eee;\n"])));function U(){var n=(0,o.v9)(Q);return(0,g.jsx)(O,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,g.jsx)(D,{id:e,name:t,number:r},e)}))})}var X,Y={name:"",number:""},nn=function(){var n=(0,i.useState)(!1),e=(0,s.Z)(n,2),t=e[0],r=e[1],c=(0,o.I0)(),d=(0,o.v9)(R).items,p=function(){r(!1)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(T.wp,{Button:!0,type:"button",onClick:function(){r(!0)},children:[(0,g.jsx)(f.vM4,{}),"Add contact"]}),t&&(0,g.jsx)(F,{onClose:p,children:(0,g.jsx)(u.J9,{initialValues:Y,onSubmit:function(n,e){var t=n.name,r=n.number;d.find((function(n){return n.name===t.trim()}))?a.Am.warn("".concat(t," is already in contacts."),{autoClose:3e3,theme:"dark"}):(c((0,l.uK)({name:t,number:r})),e.resetForm(),p())},children:(0,g.jsxs)(T.Wi,{children:[(0,g.jsxs)(T.__,{children:["Name",(0,g.jsx)(T.yt,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name"})]}),(0,g.jsxs)(T.__,{children:["Number",(0,g.jsx)(T.yt,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number. For example: 098-084-68-40"})]}),(0,g.jsx)(T.zx,{type:"submit",children:"Add new contact"})]})})})]})},en=t(4808),tn=b.Z.div(X||(X=(0,m.Z)(["\n  margin-top: 24px;\n"])));function rn(){var n=(0,o.I0)();return(0,g.jsx)(tn,{children:(0,g.jsxs)(T.__,{children:["Find contacts by name:",(0,g.jsx)(T.II,{type:"text",onChange:function(e){n((0,en.W)(e.currentTarget.value.toLowerCase()))}})]})})}var on=t(9599);t(5462);function an(){var n=(0,o.v9)(H),e=(0,o.v9)($),t=(0,o.I0)();return(0,i.useEffect)((function(){t((0,l.yF)())}),[t]),(0,g.jsxs)("div",{className:on.Z.container,children:[(0,g.jsx)(nn,{}),(0,g.jsx)("p",{className:on.Z.sectionHeading,children:"Contacts"}),(0,g.jsx)(rn,{}),(0,g.jsx)(U,{}),e&&!n&&(0,g.jsx)(c.iT,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:5,strokeWidthSecondary:1,color:"blue",secondaryColor:"white",wrapperStyle:{display:"flex",justifyContent:"center"}}),(0,g.jsx)(a.Ix,{})]})}}}]);
//# sourceMappingURL=329.061a8298.chunk.js.map