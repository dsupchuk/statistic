(this.webpackJsonppractices=this.webpackJsonppractices||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(3),l=a.n(o),u=(a(9),a(10),a(4)),i=a(0),s=[{data:new Date(2021,1,24),meal:17,juice:33,soup:3,id:"1"},{data:new Date(2019,0,28),meal:33,juice:9,soup:64,id:"2"},{data:new Date(2021,10,2),meal:19,juice:100,soup:98,id:"3"},{data:new Date(2019,11,13),meal:23,juice:53,soup:42,id:"4"},{data:new Date(2021,9,24),meal:83,juice:43,soup:21,id:"5"},{data:new Date(2019,10,22),meal:28,juice:67,soup:3,id:"6"},{data:new Date(2020,1,14),meal:8,juice:97,soup:23,id:"7"},{data:new Date(2021,8,11),meal:91,juice:21,soup:5,id:"8"},{data:new Date(2019,7,1),meal:40,juice:88,soup:73,id:"9"},{data:new Date(2020,10,6),meal:5,juice:87,soup:72,id:"10"},{data:new Date(2018,11,4),meal:1,juice:10,soup:71,id:"11"},{data:new Date(2021,10,5),meal:84,juice:89,soup:50,id:"12"},{data:new Date(2021,1,24),meal:41,juice:48,soup:84,id:"13"},{data:new Date(2021,0,14),meal:7,juice:90,soup:74,id:"14"},{data:new Date(2021,11,21),meal:90,juice:81,soup:57,id:"15"}];var d=function(){return console.log(s),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("form",{className:"form-add",children:[Object(i.jsx)("input",{type:"date",min:"2018-01-01",max:"2021-12-31",id:"date",className:"styleInput",required:!0}),Object(i.jsxs)("select",{name:"option",className:"styleInput",required:!0,children:[Object(i.jsx)("option",{value:"meal",children:"Meal"}),Object(i.jsx)("option",{value:"juice",children:"Juice"}),Object(i.jsx)("option",{value:"soup",children:"Soup"})]}),Object(i.jsx)("input",{type:"number",id:"value",className:"styleInput",placeholder:"Waiting for value",required:!0}),Object(i.jsx)("button",{className:"btnAdd",type:"submit",onClick:function(e){document.getElementById("value").value&&function(e,t,a,n){e.preventDefault();var c=new Date(t);s.push(Object(u.a)({data:c},a,+n))}(e,document.getElementById("date").value,document.getElementById("option").value,document.getElementById("value").value)},children:"Press to add"})]}),Object(i.jsxs)("div",{className:"getInfo",children:[Object(i.jsxs)("form",{className:"statistic_day",children:[Object(i.jsx)("input",{type:"date",id:"findDay",className:"styleInput",required:!0}),Object(i.jsx)("button",{className:"btnFind",onClick:function(e){document.getElementById("findDay").value&&function(e,t){e.preventDefault();var a=new Date(t),n=0,c=0,o=0;s.forEach((function(e){a.getDate()===e.data.getDate()&&a.getMonth()===e.data.getMonth()&&a.getFullYear()===e.data.getFullYear()&&(e.juice&&(n+=e.juice),e.soup&&(c+=e.soup),e.meal&&(o+=e.meal))})),console.log("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ".concat(a)),console.log("juice -- ".concat(n||"Empty")),console.log("soup -- ".concat(c||"Empty")),console.log("meal -- ".concat(o||"Empty"))}(e,document.getElementById("findDay").value)},children:"Get statistic day"})]}),Object(i.jsxs)("form",{className:"statistic_mounth",children:[Object(i.jsx)("input",{type:"month",id:"findMounth",className:"styleInput",required:!0}),Object(i.jsx)("button",{className:"btnFind",onClick:function(e){document.getElementById("findMounth").value&&function(e,t){e.preventDefault();var a=new Date(t),n=0,c=0,o=0;s.forEach((function(e){a.getMonth()===e.data.getMonth()&&a.getFullYear()===e.data.getFullYear()&&(e.juice&&(n+=e.juice),e.soup&&(c+=e.soup),e.meal&&(o+=e.meal))})),console.log("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ".concat(a.getMonth()+1,"/").concat(a.getFullYear())),console.log("juice -- ".concat(n||"Empty")),console.log("soup -- ".concat(c||"Empty")),console.log("meal -- ".concat(o||"Empty"))}(e,document.getElementById("findMounth").value)},children:"Get statistic mounth"})]}),Object(i.jsxs)("form",{className:"statistic_year",children:[Object(i.jsx)("input",{type:"number",min:"2018",max:"2022",id:"findYear",defaultValue:"2018",className:"styleInput",required:!0}),Object(i.jsx)("button",{className:"btnFind",onClick:function(e){!function(e,t){e.preventDefault();var a=new Date(t),n=0,c=0,o=0;s.forEach((function(e){a.getFullYear()===e.data.getFullYear()&&(e.juice&&(n+=e.juice),e.soup&&(c+=e.soup),e.meal&&(o+=e.meal))})),console.log("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ".concat(a.getFullYear())),console.log("juice -- ".concat(n||"Empty")),console.log("soup -- ".concat(c||"Empty")),console.log("meal -- ".concat(o||"Empty"))}(e,document.getElementById("findYear").value)},children:"Get statistic year"})]})]})]})};var m=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})},r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),o(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),r()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e48bdde7.chunk.js.map