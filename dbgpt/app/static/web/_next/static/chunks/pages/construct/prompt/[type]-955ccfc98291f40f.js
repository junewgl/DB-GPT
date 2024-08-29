(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4158],{33230:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/prompt/[type]",function(){return a(75376)}])},51310:function(e,t,a){"use strict";var l=a(88506);t.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(l.C9))&&void 0!==e?e:"")}},61977:function(e,t,a){"use strict";var l=a(96469),s=a(27250),n=a(23852),r=a.n(n),o=a(38497);t.Z=(0,o.memo)(e=>{let{width:t,height:a,model:n}=e,i=(0,o.useMemo)(()=>{let e=null==n?void 0:n.replaceAll("-","_").split("_")[0],t=Object.keys(s.Me);for(let a=0;a<t.length;a++){let l=t[a];if(null==e?void 0:e.includes(l))return s.Me[l]}return"/models/huggingface.svg"},[n]);return n?(0,l.jsx)(r(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:t||24,height:a||24,src:i,alt:"llm",priority:!0}):null})},75376:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return q}});var l=a(96469),s=a(61977),n=a(45277),r=a(27623),o=a(51310),i=a(7289),c=a(88506),u=a(72097),d=a(44875),p=a(59510),m=a(60855),_=a(95679),h=a(16602),f=a(28822),x=a(91103),g=a(95891),v=a(55360),y=a(10755),j=a(27691),b=a(67343),N=a(76914),w=a(39069),S=a(71841),Z=a(26869),E=a.n(Z),O=a(55945),C=a(28469),F=a.n(C),k=a(87313),V=a(38497),I=a(56841);a(86947);var P=a(9598),A=a.n(P),J=a(75299);let R=F()(()=>a.e(5397).then(a.bind(a,25397)),{loadableGenerated:{webpack:()=>[25397]},ssr:!1}),T=new O.Z,L=F()(()=>Promise.all([a.e(7521),a.e(5197),a.e(5851),a.e(2786),a.e(335),a.e(2818),a.e(1320),a.e(9223),a.e(5444),a.e(2476),a.e(4162),a.e(1657),a.e(9790),a.e(1766),a.e(8957),a.e(5883),a.e(5891),a.e(2061),a.e(9549),a.e(9620)]).then(a.bind(a,26657)),{loadableGenerated:{webpack:()=>[26657]},ssr:!1}),M=[{value:"Agent",label:"AGENT"},{value:"Scene",label:"SCENE"},{value:"Normal",label:"NORMAL"},{value:"Evaluate",label:"EVALUATE"}],G=e=>{let{value:t,onChange:a}=e,s=e=>{isNaN(e)||null==a||a(e)};return(0,l.jsxs)("div",{className:"flex items-center gap-8",children:[(0,l.jsx)(f.Z,{className:"w-40",min:0,max:1,step:.1,onChange:s,value:t}),(0,l.jsx)(x.Z,{className:"w-16",min:0,max:1,step:.1,value:t,onChange:s})]})};var q=!0;t.default=()=>{var e;let t=(0,k.useRouter)(),{type:a=""}=t.query,{t:f}=(0,I.$G)(),{modelList:x,model:Z,mode:O}=(0,V.useContext)(n.p),C="dark"===O?m.R:_.K,{message:F}=g.Z.useApp(),P=(0,o.Z)(),[q,U]=(0,V.useState)(""),[H,W]=(0,V.useState)([]),[D,K]=(0,V.useState)({}),[X,z]=(0,V.useState)([]),[B,Y]=(0,V.useState)(!1),[$]=v.default.useForm(),[Q]=v.default.useForm(),[ee]=v.default.useForm(),[et,ea]=(0,V.useState)(),el=v.default.useWatch("prompt_type",$),es=(0,V.useMemo)(()=>x.map(e=>({value:e,label:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(s.Z,{model:e}),(0,l.jsx)("span",{className:"ml-2",children:e})]})})),[x]),en=(0,V.useCallback)(e=>{U(e.text)},[]),{data:er,run:eo,loading:ei}=(0,h.Z)(async e=>await (0,r.pm)(e),{manual:!0}),{run:ec}=(0,h.Z)(async e=>await (0,r.GU)({prompt_type:el,target:null!=e?e:""}),{manual:!0,onSuccess:e=>{if(e){let{data:t}=e.data;U(t.template),W(t.input_variables);try{let e=JSON.parse(t.response_format);K(e||{})}catch(e){K({})}}}}),{run:eu,loading:ed}=(0,h.Z)(async e=>"add"===a?await (0,r.Vx)((0,r.Hy)(e)):await (0,r.Vx)((0,r.Fu)(e)),{manual:!0,onSuccess:()=>{F.success("".concat("add"===a?f("Add"):f("update")).concat(f("success"))),t.replace("/construct/prompt")}}),ep=async()=>{if(B)return;let e=Q.getFieldsValue();if(!Object.values(e).every(e=>!!e)){F.warning(f("Please_complete_the_input_parameters"));return}if(!ee.getFieldValue("user_input")){F.warning(f("Please_fill_in_the_user_input"));return}$.validateFields().then(async t=>{let a={sub_chat_scene:"",model:ee.getFieldValue("model"),chat_scene:t.target,prompt_name:t.prompt_name,prompt_type:t.prompt_type,content:q,response_schema:JSON.stringify(D),input_variables:JSON.stringify(H),prompt_language:ee.getFieldValue("prompt_language"),prompt_desc:"",prompt_code:t.prompt_code,temperature:ee.getFieldValue("temperature"),debug_model:ee.getFieldValue("model"),input_values:{...e},user_input:ee.getFieldValue("user_input")},l=[{role:"view",context:""}],s=l.length-1;try{var n,r;Y(!0),await (0,d.L)("".concat(null!==(n=J.env.API_BASE_URL)&&void 0!==n?n:"","/prompt/template/debug"),{method:"POST",headers:{"Content-Type":"application/json",[c.gp]:null!==(r=(0,i.n5)())&&void 0!==r?r:""},body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===d.a)return},onclose(){Y(!1)},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;if(t){try{t=JSON.parse(t).vis}catch(e){t.replaceAll("\\n","\n")}"[DONE]"===t?Y(!1):(null==t?void 0:t.startsWith("[ERROR]"))?(Y(!1),l[s].context=null==t?void 0:t.replace("[ERROR]","")):(l[s].context=t,z([...l]))}}})}catch(e){Y(!1),l[s].context="Sorry, we meet some error, please try again later",z([...l])}})},{run:em,loading:e_}=(0,h.Z)(async()=>await (0,r.Gn)({llm_out:X[0].context,prompt_type:$.getFieldValue("prompt_type"),chat_scene:$.getFieldValue("target")}),{manual:!0,onSuccess:e=>{var t,a;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.success)?ea({msg:"验证通过",status:"success"}):ea({msg:null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.err_msg,status:"error"})}});(0,V.useEffect)(()=>{Z&&ee.setFieldsValue({model:Z})},[ee,Z]),(0,V.useEffect)(()=>{el&&eo(el)},[eo,el]);let eh=(0,V.useMemo)(()=>{var e,t;return null==er?void 0:null===(e=er.data)||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.map(e=>({...e,value:e.name,label:e.name}))},[er]);return(0,V.useEffect)(()=>{if("edit"===a){var e;let t=JSON.parse(localStorage.getItem("edit_prompt_data")||"{}");W(JSON.parse(null!==(e=t.input_variables)&&void 0!==e?e:"[]")),U(null==t?void 0:t.content),$.setFieldsValue({prompt_type:t.prompt_type,prompt_name:t.prompt_name,prompt_code:t.prompt_code,target:t.chat_scene}),ee.setFieldsValue({model:t.model,prompt_language:t.prompt_language})}},[ee,$,a]),(0,l.jsxs)("div",{className:"flex flex-col w-full h-full justify-between dark:bg-gradient-dark ".concat(A()["prompt-operate-container"]),children:[(0,l.jsxs)("header",{className:"flex items-center justify-between px-6 py-2 h-14 border-b border-[#edeeef]",children:[(0,l.jsxs)(y.Z,{className:"flex items-center",children:[(0,l.jsx)(u.Z,{className:"text-base cursor-pointer hover:text-[#0c75fc]",onClick:()=>{localStorage.removeItem("edit_prompt_data"),t.replace("/construct/prompt")}}),(0,l.jsxs)("span",{className:"font-medium text-sm",children:["add"===a?f("Add"):f("Edit")," Prompt"]})]}),(0,l.jsx)(y.Z,{children:(0,l.jsx)(j.ZP,{type:"primary",onClick:()=>{$.validateFields().then(async e=>{let t={sub_chat_scene:"",model:ee.getFieldValue("model"),chat_scene:e.target,prompt_name:e.prompt_name,prompt_type:e.prompt_type,content:q,response_schema:JSON.stringify(D),input_variables:JSON.stringify(H),prompt_language:ee.getFieldValue("prompt_language"),prompt_desc:"",user_name:P.nick_name,..."edit"===a&&{prompt_code:e.prompt_code}};await eu(t)})},loading:ed,children:"add"===a?f("save"):f("update")})})]}),(0,l.jsxs)("section",{className:"flex h-full p-4 gap-4",children:[(0,l.jsxs)("div",{className:"flex flex-col flex-1 h-full overflow-y-auto pb-8 ",children:[(0,l.jsx)(R,{value:q,onChange:en,renderHTML:e=>T.render(e),view:{html:!1,md:!0,menu:!0}}),X.length>0&&(0,l.jsx)(b.Z,{title:(0,l.jsxs)(y.Z,{children:[(0,l.jsx)("span",{children:"LLM OUT"}),et&&(0,l.jsx)(N.Z,{message:et.msg,type:et.status,showIcon:!0})]}),className:"mt-2",children:(0,l.jsx)("div",{className:" max-h-[400px] overflow-y-auto",children:(0,l.jsx)(L,{children:null==X?void 0:null===(e=X[0])||void 0===e?void 0:e.context.replace(/\\n/gm,"\n")})})})]}),(0,l.jsxs)("div",{className:"flex flex-col w-2/5 pb-8 overflow-y-auto",children:[(0,l.jsx)(b.Z,{className:"mb-4",children:(0,l.jsxs)(v.default,{form:$,children:[(0,l.jsxs)("div",{className:"flex w-full gap-1 justify-between",children:[(0,l.jsx)(v.default.Item,{label:"Type",name:"prompt_type",className:"w-2/5",rules:[{required:!0,message:f("select_type")}],children:(0,l.jsx)(w.default,{options:M,placeholder:f("select_type"),allowClear:!0})}),(0,l.jsx)(v.default.Item,{name:"target",className:"w-3/5",rules:[{required:!0,message:f("select_scene")}],children:(0,l.jsx)(w.default,{loading:ei,placeholder:f("select_scene"),allowClear:!0,showSearch:!0,onChange:async e=>{await ec(e)},children:null==eh?void 0:eh.map(e=>(0,l.jsx)(w.default.Option,{title:e.desc,children:e.label},e.value))})})]}),"edit"===a&&(0,l.jsx)(v.default.Item,{label:"Code",name:"prompt_code",children:(0,l.jsx)(S.default,{disabled:!0})}),(0,l.jsx)(v.default.Item,{label:"Name",name:"prompt_name",className:"m-0",rules:[{required:!0,message:f("Please_input_prompt_name")}],children:(0,l.jsx)(S.default,{placeholder:f("Please_input_prompt_name")})})]})}),(0,l.jsx)(b.Z,{title:f("input_parameter"),className:"mb-4",children:(0,l.jsx)(v.default,{form:Q,children:H.length>0&&H.filter(e=>"out_schema"!==e).map(e=>(0,l.jsx)(v.default.Item,{label:e,name:e,rules:[{message:"".concat(f("Please_Input")).concat(e)}],children:(0,l.jsx)(S.default,{placeholder:f("Please_Input")})},e))})}),(0,l.jsxs)(b.Z,{title:f("output_structure"),className:"flex flex-col flex-1",children:[(0,l.jsx)(p.ZP,{style:{...C,width:"100%",padding:4},className:E()({"bg-[#fafafa]":"light"===O}),value:D,enableClipboard:!1,displayDataTypes:!1,objectSortKeys:!1}),(0,l.jsx)("div",{className:"flex flex-col mt-4",children:(0,l.jsxs)(v.default,{form:ee,initialValues:{model:Z,temperature:.5,prompt_language:"en"},children:[(0,l.jsx)(v.default.Item,{label:f("model"),name:"model",children:(0,l.jsx)(w.default,{className:"h-8 rounded-3xl",options:es,allowClear:!0,showSearch:!0})}),(0,l.jsx)(v.default.Item,{label:f("temperature"),name:"temperature",children:(0,l.jsx)(G,{})}),(0,l.jsx)(v.default.Item,{label:f("language"),name:"prompt_language",children:(0,l.jsx)(w.default,{options:[{label:f("English"),value:"en"},{label:f("Chinese"),value:"zh"}]})}),(0,l.jsx)(v.default.Item,{label:f("User_input"),name:"user_input",children:(0,l.jsx)(S.default,{placeholder:f("Please_Input")})})]})}),(0,l.jsxs)(y.Z,{className:"flex justify-between",children:[(0,l.jsx)(j.ZP,{type:"primary",onClick:ep,loading:B,children:f("LLM_test")}),(0,l.jsx)(j.ZP,{type:"primary",onClick:async()=>{var e;!e_&&(null===(e=X[0])||void 0===e?void 0:e.context)&&await em()},children:f("Output_verification")})]})]})]})]})]})}},9598:function(e){e.exports={"prompt-container":"styles_prompt-container__S6dYE","prompt-operate-container":"styles_prompt-operate-container__cpqq1"}}},function(e){e.O(0,[2394,2003,5677,1841,5722,9069,5360,5996,6779,8639,1103,3549,7343,2022,9774,2888,179],function(){return e(e.s=33230)}),_N_E=e.O()}]);