"use strict";(self.webpackChunkcar_docs=self.webpackChunkcar_docs||[]).push([[4590],{5245:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var d=i(4848),r=i(8453);const s={sidebar_position:3},t="\uc0ac\uc6a9\uc790 API",c={id:"tutorial-basics/member",title:"\uc0ac\uc6a9\uc790 API",description:"\uba54\uc778\ud654\uba74",source:"@site/docs/tutorial-basics/member.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/member",permalink:"/docs/tutorial-basics/member",draft:!1,unlisted:!1,editUrl:"https://github.com/8721son/hmk-doc/tree/master/docs/tutorial-basics/member.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\uc544\ud30c\ud2b8 \uad00\ub9ac\uc790 API",permalink:"/docs/tutorial-basics/manager"},next:{title:"Markdown Features",permalink:"/docs/tutorial-basics/markdown-features"}},l={},h=[{value:"\uba54\uc778\ud654\uba74",id:"\uba54\uc778\ud654\uba74",level:2},{value:"\uc794\uc5ec \ud69f\uc218/\uc2dc\uac04",id:"\uc794\uc5ec-\ud69f\uc218\uc2dc\uac04",level:3},{value:"\uc138\ub300 \ucc28\ub7c9",id:"\uc138\ub300-\ucc28\ub7c9",level:3}];function j(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\uc0ac\uc6a9\uc790-api",children:"\uc0ac\uc6a9\uc790 API"}),"\n",(0,d.jsx)(n.h2,{id:"\uba54\uc778\ud654\uba74",children:"\uba54\uc778\ud654\uba74"}),"\n",(0,d.jsx)(n.h3,{id:"\uc794\uc5ec-\ud69f\uc218\uc2dc\uac04",children:"\uc794\uc5ec \ud69f\uc218/\uc2dc\uac04"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\uc694\uccad \uc815\ubcf4 [HTTP]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:"GET /member/remain HTTP/1.1\nAuthorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxMzgxLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.7DlZwMtUYN6QOg2K8KrQ30BHJiilqWQFf7t6Kf_JdCA\nHost: localhost:8080\n\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"\uc694\uccad \uc815\ubcf4 [Header]"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Authorization"})}),(0,d.jsx)(n.td,{children:"\ud1a0\ud070 \uc815\ubcf4"})]})})]}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [HTTP]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\nContent-Length: 443\n\n{"id":1,"apartment":{"id":1,"name":"\ud558\ub298\ucc44","region1DepthName":"\ubd80\uc0b0\uc2dc","region2DepthName":"\uc0ac\uc0c1\uad6c","region3DepthName":"\uc8fc\ub840\ub3d9","roadName":"\uc8fc\ub840\ub85c 15","address":"\ubd80\uc0b0 \uc0ac\uc0c1\uad6c \uc8fc\ub840\ub85c 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [Body]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{"id":1,"apartment":{"id":1,"name":"\ud558\ub298\ucc44","region1DepthName":"\ubd80\uc0b0\uc2dc","region2DepthName":"\uc0ac\uc0c1\uad6c","region3DepthName":"\uc8fc\ub840\ub3d9","roadName":"\uc8fc\ub840\ub85c 15","address":"\ubd80\uc0b0 \uc0ac\uc0c1\uad6c \uc8fc\ub840\ub85c 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [Field]"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Path"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc778\ub371\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dong"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\ub3d9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ho"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\ud638"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"limitType"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc81c\ud55c \ud0c0\uc785"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"remainTime"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc794\uc5ec \uc2dc\uac04(\ubd84 \ub2e8\uc704)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"remainCount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc794\uc5ec \ud69f\uc218"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc544\ud30c\ud2b8 \uc778\ub371\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc774\ub984"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.region1DepthName"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uace0\uac1d\uc0ac \uc9c0\uc5ed\uba85 1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.region2DepthName"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uace0\uac1d\uc0ac \uc9c0\uc5ed\uba85 2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.region3DepthName"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uace0\uac1d\uc0ac \uc9c0\uc5ed\uba85 3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.roadName"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\ub3c4\ub85c\uba85"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.address"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc8fc\uc18c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.zoneNo"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc6b0\ud3b8\ubc88\ud638"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.limitType"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc81c\ud55c \ud0c0\uc785"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.limitTime"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc81c\ud55c \uc2dc\uac04(\ubd84 \ub2e8\uc704)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.limitCount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc81c\ud55c \ud69f\uc218"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.networkCheckSecond"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\ub124\ud2b8\uc6cc\ud06c \uccb4\ud06c \uc2dc\uac04(\ucd08 \ub2e8\uc704)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.officetel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:"\uc624\ud53c\uc2a4\ud154 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.villa"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:"\ube4c\ub77c \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.qna"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:"qna \uc0ac\uc6a9 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.notice"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:"\uacf5\uc9c0 \uc0ac\uc6a9 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apartment.faq"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:"faq \uc0ac\uc6a9 \uc5ec\ubd80"})]})]})]}),"\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsx)(n.li,{children:"CURL"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ curl 'http://localhost:8080/member/remain' -i -X GET \\\n    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxMzgxLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.7DlZwMtUYN6QOg2K8KrQ30BHJiilqWQFf7t6Kf_JdCA'\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\uc138\ub300-\ucc28\ub7c9",children:"\uc138\ub300 \ucc28\ub7c9"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\uc694\uccad \uc815\ubcf4 [HTTP]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:"GET /member/unit/vehicle HTTP/1.1\nAuthorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxNDA2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.RXkuFBTvJ20VRXOKbRMIrPuoyEE_yHvFKbcKtdqNUv0\nHost: localhost:8080\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"\uc694\uccad \uc815\ubcf4 [Header]"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Authorization"})}),(0,d.jsx)(n.td,{children:"\ud1a0\ud070 \uc815\ubcf4"})]})})]}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [HTTP]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\nContent-Length: 87\n\n[{"member":{"id":2,"userId":"member"},"vehicleNumber":"128\uac701253","status":"CONFIRM"}]\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [Body]"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[{"member":{"id":2,"userId":"member"},"vehicleNumber":"128\uac701253","status":"CONFIRM"}]\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsx)(n.li,{children:"\uc751\ub2f5 \uc815\ubcf4 [Field]"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Path"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[].member.id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Number"})}),(0,d.jsx)(n.td,{children:"\uc0ac\uc6a9\uc790 \uc778\ub371\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[].member.userId"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc0ac\uc6a9\uc790 \uc544\uc774\ub514"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[].vehicleNumber"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\ucc28\ub7c9\ubc88\ud638"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[].status"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:"\uc138\ub300 \ucc28\ub7c9 \ub4f1\ub85d \uc0c1\ud0dc"})]})]})]}),"\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsx)(n.li,{children:"CURL"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ curl 'http://localhost:8080/member/unit/vehicle' -i -X GET \\\n    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxNDA2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.RXkuFBTvJ20VRXOKbRMIrPuoyEE_yHvFKbcKtdqNUv0'\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var d=i(6540);const r={},s=d.createContext(r);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);