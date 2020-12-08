(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),i=n.n(s),r=n(28),c=n.n(r),o=(n(36),n(23)),u=n.n(o),l=n(29),h=n(12),d=n(13),j=n(15),b=n(14),g=(n(38),i.a.createContext({})),m=function(){return Object(a.jsx)(g.Consumer,{children:function(e){return Object(a.jsxs)("form",{className:"formTweet",onSubmit:function(t){t.preventDefault();var n=new Date,a={content:e.tweet,dateR:n.toISOString(),date:n};e.setTweet(a),e.handleOnTweetChange("")},children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{type:"text",name:"tweet",id:"tweet",className:"textareaTweet",required:!0,placeholder:"What you have in mind...",value:e.tweet,onChange:function(t){e.handleOnTweetChange(t.target.value),t.target.value.length>140?e.setDisabled(!0):e.setDisabled(!1)}})}),Object(a.jsxs)("div",{className:"SubmitPart",children:[e.IsDisabled&&Object(a.jsx)("div",{className:"MessageError",children:"The tweet can't contain more than 140 chars."}),Object(a.jsx)("button",{className:"buttonTweet",type:"submit",disabled:e.IsDisabled,children:"Tweet"})]})]})}})},f=(n(39),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={content:a.props.content,date:a.props.date,userName:a.props.userName},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("li",{className:"tweet",children:[Object(a.jsxs)("div",{className:"top",children:[Object(a.jsx)("div",{children:this.state.userName}),Object(a.jsx)("div",{children:this.state.date})]}),Object(a.jsx)("div",{className:"bottom",children:this.state.content})]})}}]),n}(i.a.Component)),p=(n(40),function(){return Object(a.jsx)(g.Consumer,{children:function(e){return Object(a.jsx)("ul",{className:"tweets",children:e.tweets.map((function(e){return Object(a.jsx)(f,{content:e.content,date:e.dateR,userName:e.userName},e.date)}))})}})}),v=(n(41),n(16)),O=n(5),x=(n(42),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={userName:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({userName:this.props.username})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.userName;this.props.onChangeUser(t)}},{key:"handleUserNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Profile"}),Object(a.jsx)("p",{children:"User Name"}),Object(a.jsxs)("form",{className:"formUser",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{className:"textareaUser",type:"text",name:"userName",id:"userName",required:!0,value:this.state.userName,onChange:function(t){return e.handleUserNameChange(t)}})}),Object(a.jsx)("button",{className:"buttonUser",type:"submit",children:"Save"})]})]})}}]),n}(i.a.Component)),w=n(24);n(43),n(46);w.a.initializeApp({apiKey:"AIzaSyChgDlQ6sy5w4lizsBFKPIC02_ZPFXA15c",authDomain:"microbloggingapp-f3af3.firebaseapp.com",projectId:"microbloggingapp-f3af3",storageBucket:"microbloggingapp-f3af3.appspot.com",messagingSenderId:"741625542230",appId:"1:741625542230:web:3f1e6efbe9b77a4351adf7"});var I=w.a,S=(n(48),I.auth()),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={emailLogIn:"",passwordLogIn:"",emailSignIn:"",userNameSignIn:"",passwordSignIn:"",redirect:!1},a}return Object(d.a)(n,[{key:"emailLogInChange",value:function(e){this.setState({emailLogIn:e.target.value})}},{key:"passwordLogInChange",value:function(e){this.setState({passwordLogIn:e.target.value})}},{key:"emailSignInChange",value:function(e){this.setState({emailSignIn:e.target.value})}},{key:"passwordSignInChange",value:function(e){this.setState({passwordSignIn:e.target.value})}},{key:"userNameSignInChange",value:function(e){this.setState({userNameSignIn:e.target.value})}},{key:"handleLogIn",value:function(e){var t=this;e.preventDefault();var n=this.state.emailLogIn,a=this.state.passwordLogIn;S.signInWithEmailAndPassword(n,a).then((function(){t.setState({emailLogIn:"",passwordLogIn:"",redirect:!0})})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n)}))}},{key:"handleSignIn",value:function(e){var t=this;e.preventDefault();var n=this.state.emailSignIn,a=this.state.passwordSignIn,s=this.state.userNameSignIn;S.createUserWithEmailAndPassword(n,a).then((function(e){var a={email:n,username:s,photoURL:"",uid:e.user.uid};I.firestore().collection("users").add(a),t.setState({emailSignIn:"",passwordSignIn:"",redirect:!0})})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)}))}},{key:"logInWithGoogle",value:function(){var e=this,t=new I.auth.GoogleAuthProvider;I.auth().signInWithPopup(t).then((function(e){var t=e.user,n={email:t.email,username:t.displayName,photoURL:t.photoURL,uid:t.uid};I.firestore().collection("users").add(n)})).then((function(){e.setState({redirect:!0})}))}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(a.jsx)(O.a,{to:"/tweets"}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"LogIn",onSubmit:function(t){return e.handleLogIn(t)},children:[Object(a.jsx)("h1",{children:"Log In"}),Object(a.jsx)("input",{placeholder:"Email Address",value:this.state.emailLogIn,onChange:function(t){return e.emailLogInChange(t)}}),Object(a.jsx)("input",{placeholder:"PassWord",value:this.state.passwordLogIn,onChange:function(t){return e.passwordLogInChange(t)}}),Object(a.jsx)("button",{type:"submit",children:"Log In"})]}),Object(a.jsxs)("form",{className:"SignIn",onSubmit:function(t){return e.handleSignIn(t)},children:[Object(a.jsx)("h1",{children:"Doesn't have an account ? Sign up now !"}),Object(a.jsx)("input",{placeholder:"Email Address",value:this.state.emailSignIn,onChange:function(t){return e.emailSignInChange(t)}}),Object(a.jsx)("input",{placeholder:"PassWord",value:this.state.passwordSignIn,onChange:function(t){return e.passwordSignInChange(t)}}),Object(a.jsx)("input",{placeholder:"UserName",value:this.state.userNameSignIn,required:!0,onChange:function(t){return e.userNameSignInChange(t)}}),Object(a.jsx)("button",{type:"submit",children:"Sign In"})]}),Object(a.jsx)("button",{onClick:function(){e.logInWithGoogle()},children:"Or sign in with Google"})]})}}]),n}(i.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={tweets:[],isLoading:!1,error:"",userName:"",tweet:"",IsDisabled:!1,setDisabled:function(e){return a.setState({IsDisabled:e})},handleOnTweetChange:function(e){return a.setState({tweet:e})},setTweet:function(e){e.userName=a.state.userName,a.setState({isLoading:!0,error:""}),I.firestore().collection("tweets").add(e)}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.loadTweets();var t=I.auth().currentUser;t&&I.firestore().collection("users").where("uid","==",t.uid).get().then((function(t){t.forEach((function(t){console.log(t.data()),e.setState({userName:t.data().username})}))}))}},{key:"loadTweets",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.firestore().collection("tweets").onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(e.data())})),n.sort((function(e,t){return t.date-e.date})),t.setState({tweets:n,isLoading:!1})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleOnUserChange",value:function(e){this.setState({userName:e})}},{key:"isLoggedIn",value:function(){return!!I.auth().currentUser}},{key:"render",value:function(){var e=this;return Object(a.jsx)(g.Provider,{value:this.state,children:Object(a.jsxs)(v.a,{children:[!this.isLoggedIn()&&Object(a.jsx)(O.a,{to:"/"}),Object(a.jsxs)(O.d,{children:[Object(a.jsxs)(O.b,{path:"/user",children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"navbar",children:[Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/tweets",children:"Tweets"})}),Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/user",children:"User"})}),Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/",onClick:function(){I.auth().signOut().then((function(){return console.log("out")}))},children:"LogOut"})})]})}),Object(a.jsx)(x,{username:this.state.userName,onChangeUser:function(t){return e.handleOnUserChange(t)}})]}),Object(a.jsxs)(O.b,{path:"/tweets",children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"navbar",children:[Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/tweets",children:"Tweets"})}),Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/user",children:"User"})}),Object(a.jsx)("li",{className:"navLi",children:Object(a.jsx)(v.b,{to:"/",onClick:function(){I.auth().signOut().then((function(){return console.log("out")}))},children:"LogOut"})})]})}),this.state.isLoading&&Object(a.jsx)("p",{className:"loading",children:"Loading..."}),!this.state.isLoading&&Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),this.state.error&&Object(a.jsx)("div",{children:this.state.error}),Object(a.jsx)(p,{})]})]}),Object(a.jsx)(O.b,{path:"/",children:Object(a.jsx)(N,{})})]})]})})}}]),n}(i.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),L()}},[[53,1,2]]]);
//# sourceMappingURL=main.65bc25a9.chunk.js.map