(this["webpackJsonpthe-dojo"]=this["webpackJsonpthe-dojo"]||[]).push([[0],{42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(23),s=n.n(a),i=(n(42),n(16)),u=n(20),l=n(6),j=n(10),o=n(22);n(80),n(44),n(81);o.a.initializeApp({apiKey:"AIzaSyBwPKqowgFJDC-zO_cAiPgDXHgibvGWqv8",authDomain:"the-dojo-76b39.firebaseapp.com",projectId:"the-dojo-76b39",storageBucket:"the-dojo-76b39.appspot.com",messagingSenderId:"830539958632",appId:"1:830539958632:web:435ff56d7cf53273352edd"});var d=o.a.firestore(),b=o.a.auth(),O=o.a.storage(),p=o.a.firestore.Timestamp,h=n(2),x=Object(c.createContext)(),f=function(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});case"AUTH_IS_READY":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload,authIsReady:!0});default:return e}},m=function(e){var t=e.children,n=Object(c.useReducer)(f,{user:null,authIsReady:!1}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=b.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),Object(h.jsx)(x.Provider,{value:Object(j.a)(Object(j.a)({},a),{},{dispatch:s}),children:t})},v=function(){var e=Object(c.useContext)(x);if(!e)throw new Error("useAuthContext must used inside an AuthContextProvider");return e},g=(n(47),n(21)),y=function(e,t,n){var r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)(null),o=Object(l.a)(u,2),b=o[0],O=o[1],p=Object(c.useRef)(t).current,h=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=d.collection(e);p&&(c=(t=c).where.apply(t,Object(g.a)(p)));h&&(c=(n=c).orderBy.apply(n,Object(g.a)(h)));var r=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(j.a)({id:e.id},e.data()))})),i(t),O(null)}),(function(e){console.log(e),O("Could not fetch the data")}));return function(){return r()}}),[e,p,h]),{documents:s,error:b}};n(48);function N(e){var t=e.src,n=e.title;return Object(h.jsx)("div",{className:"avatar",children:Object(h.jsx)("img",{src:t,alt:"user avatar",title:n})})}n(49);function S(e){var t=e.projects;return Object(h.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(h.jsx)("p",{children:"No projects yet!"}),t.map((function(e){return Object(h.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(h.jsx)("h4",{children:e.name}),Object(h.jsxs)("p",{children:["Due by ",e.dueDate.toDate().toDateString()]}),Object(h.jsxs)("div",{className:"assigned-to",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Assigned to:"})}),Object(h.jsx)("ul",{children:e.assignedUsersList.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(N,{src:e.photoURL,title:e.displayName})},e.id)}))})]})]},e.id)}))]})}n(57);var D=function(){var e=y("projects"),t=e.documents,n=e.error;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"page-title",children:"Dashboard"}),n&&Object(h.jsx)("p",{className:"error",children:n}),t&&Object(h.jsx)(S,{projects:t})]})},w=n(17),E=n(8),P=n.n(E),R=n(33),L={document:null,isPending:!1,error:null,success:null},C=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},U=(n(59),[{value:"development",label:"Development"},{value:"design",label:"Design"},{value:"sales",label:"Sales"},{value:"marketing",label:"Marketing"}]);function k(){var e=v().user,t=y("users").documents,n=Object(c.useState)([]),r=Object(l.a)(n,2),a=r[0],s=r[1],i=function(e){var t=Object(c.useReducer)(C,L),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),u=i[0],o=i[1],b=d.collection(e),O=function(e){u||a(e)},h=function(){var e=Object(w.a)(P.a.mark((function e(t){var n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,n=p.fromDate(new Date),e.next=5,b.add(Object(j.a)(Object(j.a)({},t),{},{createdAt:n}));case 5:c=e.sent,O({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:O({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({type:"ERROR",payload:"Could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return o(!0)}}),[]),{addDocument:h,deleteDocument:x,response:r}}("projects"),o=i.addDocument,b=i.response,O=Object(u.g)(),x=Object(c.useState)(""),f=Object(l.a)(x,2),m=f[0],g=f[1],N=Object(c.useState)(""),S=Object(l.a)(N,2),D=S[0],E=S[1],k=Object(c.useState)(""),I=Object(l.a)(k,2),A=I[0],_=I[1],T=Object(c.useState)(""),q=Object(l.a)(T,2),G=q[0],M=q[1],B=Object(c.useState)([]),z=Object(l.a)(B,2),H=z[0],J=z[1],K=Object(c.useState)(null),W=Object(l.a)(K,2),F=W[0],Y=W[1];Object(c.useEffect)((function(){if(t){var e=t.map((function(e){return{value:e,label:e.displayName}}));s(e)}}),[t]);var X=function(){var t=Object(w.a)(P.a.mark((function t(n){var c,r,a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),Y(null),G){t.next=5;break}return Y("Please select a project category"),t.abrupt("return");case 5:if(!(H.length<1)){t.next=8;break}return Y("Please assign the project to atleast 1 user"),t.abrupt("return");case 8:return c=H.map((function(e){return{displayName:e.value.displayName,photoURL:e.value.photoURL,id:e.value.id}})),r={displayName:e.displayName,photoURL:e.photoURL,id:e.uid},a={name:m,details:D,category:G.value,dueDate:p.fromDate(new Date(A)),assignedUsersList:c,createdBy:r,comments:[]},t.next=13,o(a);case 13:b.error||O.push("/");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"create-form",children:[Object(h.jsx)("h2",{className:"page-title",children:"Create a new Project"}),Object(h.jsxs)("form",{onSubmit:X,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return g(e.target.value)},value:m})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project Details:"}),Object(h.jsx)("textarea",{required:!0,onChange:function(e){return E(e.target.value)},value:D})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Set due date:"}),Object(h.jsx)("input",{required:!0,type:"date",onChange:function(e){return _(e.target.value)},value:A})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project category:"}),Object(h.jsx)(R.a,{options:U,onChange:function(e){return M(e)}})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Assign to:"}),Object(h.jsx)(R.a,{options:a,onChange:function(e){return J(e)},isMulti:!0})]}),Object(h.jsx)("button",{className:"btn",children:"Add Project"}),F&&Object(h.jsx)("p",{className:"error",children:F})]})]})}n(73);var I=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],j=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],j=v().dispatch,o=Object(c.useState)(!1),O=Object(l.a)(o,2),p=O[0],h=O[1],x=function(){var e=Object(w.a)(P.a.mark((function e(t,n){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(null),u(!0),e.prev=2,e.next=5,b.signInWithEmailAndPassword(t,n);case 5:return c=e.sent,e.next=8,d.collection("users").doc(c.user.uid).update({online:!0});case 8:j({type:"LOGIN",payload:c.user}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),p||r(e.t0.message);case 14:p||u(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return h(!0)}}),[]),{login:x,error:n,isPending:i}}(),o=j.login,O=j.error,p=j.isPending;return Object(h.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),o(n,i)},children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),!p&&Object(h.jsx)("button",{className:"btn",children:"Login"}),p&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"Loading..."}),O&&Object(h.jsx)("div",{className:"error",children:O})]})},A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],j=v().dispatch,o=Object(c.useState)(!1),p=Object(l.a)(o,2),h=p[0],x=p[1],f=function(){var e=Object(w.a)(P.a.mark((function e(t,n,c,a){var s,i,l,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(null),u(!0),e.prev=2,e.next=5,b.createUserWithEmailAndPassword(t,n);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return i="thumbnails/".concat(s.user.uid,"/").concat(a.name),e.next=11,O.ref(i).put(a);case 11:return l=e.sent,e.next=14,l.ref.getDownloadURL();case 14:return o=e.sent,e.next=17,s.user.updateProfile({displayName:c,photoURL:o});case 17:return e.next=19,d.collection("users").doc(s.user.uid).set({online:!0,displayName:c,photoURL:o});case 19:j({type:"LOGIN",payload:s.user}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),h||r(e.t0.message);case 25:h||u(!1);case 26:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return x(!0)}}),[]),{signup:f,error:n,isPending:i}};n(74);function _(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),d=o[0],b=o[1],O=Object(c.useState)(null),p=Object(l.a)(O,2),x=p[0],f=p[1],m=Object(c.useState)(null),v=Object(l.a)(m,2),g=v[0],y=v[1],N=A(),S=N.signup,D=N.isPending,w=N.error;return Object(h.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),S(n,i,d,x)},children:[Object(h.jsx)("h2",{children:"Sign Up"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Display Name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return b(e.target.value)},value:d})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Profile Thumbnail:"}),Object(h.jsx)("input",{required:!0,type:"file",onChange:function(e){f(null);var t=e.target.files[0];t?t.type.includes("image")?t.size>1e5?y("Image file size must be less than 100KB"):(y(null),f(t)):y("Selected file must be an image"):y("Please select a file")}}),g&&Object(h.jsx)("div",{className:"error",children:g})]}),!D&&Object(h.jsx)("button",{className:"btn",children:"Sign up"}),D&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"Loading..."}),w&&Object(h.jsx)("div",{className:"error",children:w})]})}n(75);var T=function(){return Object(h.jsx)("div",{children:"Project"})},q=(n(76),n.p+"static/media/temple.c57f882d.svg");function G(){var e=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],j=v(),o=j.dispatch,O=j.user,p=Object(c.useState)(!1),h=Object(l.a)(p,2),x=h[0],f=h[1],m=function(){var e=Object(w.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(null),u(!0),e.prev=2,t=O.uid,e.next=6,d.collection("users").doc(t).update({online:!1});case 6:return e.next=8,b.signOut();case 8:o({type:"LOGOUT"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),x||r(e.t0.message);case 14:x||u(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return f(!0)}}),[]),{logout:m,error:n,isPending:i}}(),t=e.logout,n=e.isPending,r=v().user;return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:"logo",children:[Object(h.jsx)("img",{src:q,alt:"dojo logo"}),Object(h.jsx)("span",{children:"The Dojo"})]}),r?Object(h.jsxs)("li",{children:[!n&&Object(h.jsx)("button",{className:"btn",onClick:t,children:"Logout"}),n&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"Loggin out..."})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/signup",children:"Signup"})})]})]})})}n(77);var M=n.p+"static/media/dashboard_icon.bc800f3b.svg",B=n.p+"static/media/add_icon.376e9b6a.svg";function z(){var e=v().user;return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:"sidebar-content",children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)(N,{src:e.photoURL}),Object(h.jsxs)("p",{children:["Hey ",e.displayName]})]}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{exact:!0,to:"/",children:[Object(h.jsx)("img",{src:M,alt:"dashboard icon"}),Object(h.jsx)("span",{children:"Dashboard"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{to:"/create",children:[Object(h.jsx)("img",{src:B,alt:"add project icon"}),Object(h.jsx)("span",{children:"New Project"})]})})]})})]})})}n(78);function H(){var e=y("users"),t=e.isPending,n=e.error,c=e.documents;return Object(h.jsxs)("div",{className:"user-list",children:[Object(h.jsx)("h2",{children:"All Users"}),t&&Object(h.jsx)("div",{children:"Loading users..."}),n&&Object(h.jsx)("div",{children:n}),c&&c.map((function(e){return Object(h.jsxs)("div",{className:"user-list-item",children:[e.online&&Object(h.jsx)("span",{className:"online-user"}),Object(h.jsx)("span",{children:e.displayName}),Object(h.jsx)(N,{src:e.photoURL})]},e.id)}))]})}var J=function(){var e=v(),t=e.user,n=e.authIsReady;return Object(h.jsx)("div",{className:"App",children:n&&Object(h.jsxs)(i.a,{basename:"/the-dojo",children:[t&&Object(h.jsx)(z,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(G,{}),Object(h.jsxs)(u.d,{children:[Object(h.jsxs)(u.b,{exact:!0,path:"/",children:[!t&&Object(h.jsx)(u.a,{to:"/login"}),t&&Object(h.jsx)(D,{})]}),Object(h.jsxs)(u.b,{path:"/create",children:[!t&&Object(h.jsx)(u.a,{to:"/login"}),t&&Object(h.jsx)(k,{})]}),Object(h.jsxs)(u.b,{path:"/login",children:[!t&&Object(h.jsx)(I,{}),t&&Object(h.jsx)(u.a,{to:"/"})]}),Object(h.jsxs)(u.b,{path:"/signup",children:[!t&&Object(h.jsx)(_,{}),t&&Object(h.jsx)(u.a,{to:"/"})]}),Object(h.jsxs)(u.b,{path:"/project/:id",children:[!t&&Object(h.jsx)(u.a,{to:"/login"}),t&&Object(h.jsx)(T,{})]})]})]}),t&&Object(h.jsx)(H,{})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{children:Object(h.jsx)(J,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.ed24960e.chunk.js.map