"use strict";(self.webpackChunkcampers_rent=self.webpackChunkcampers_rent||[]).push([[8],{488:(e,a,n)=>{n.d(a,{_:()=>A});var t=n(3),i=n(43);const r={button:"Button_button__jGLC1",red:"Button_red__AGh6p",transparent:"Button_transparent__eNppa"};var s=n(579);const o=e=>{let{variant:a="red",className:n,onClick:t,children:i}=e;return(0,s.jsx)("button",{onClick:t,className:"".concat(r.button," ").concat(r[a]," ").concat(n),children:i})};var c=n(399),l=n(140);const d={modalContainer:"ModalWindow_modalContainer__qdKki",modalContent:"ModalWindow_modalContent__Yl7y4",modalCloseButton:"ModalWindow_modalCloseButton__Lbhpe","modal--entering":"ModalWindow_modal--entering__D1fB2","modal--entered":"ModalWindow_modal--entered__0I767","modal--exiting":"ModalWindow_modal--exiting__BURAm","modal--exited":"ModalWindow_modal--exited__9Tsgk"},m=e=>{let{isOpen:a,onClose:n,children:t}=e;const r=(0,i.useRef)(document);(0,i.useEffect)((()=>{const e=r.current,a=e=>{"Escape"===e.key&&n()};return e.addEventListener("keydown",a),()=>{e.removeEventListener("keydown",a)}}),[]);const o=e=>{e.target.classList.contains("backdrop")&&n()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.Ay,{in:a,timeout:350,unmountOnExit:!0,children:e=>(0,s.jsx)("div",{className:"".concat(d.modalContainer," ").concat(d["modal--".concat(e)]," backdrop"),onClick:o,children:(0,s.jsxs)("div",{className:d.modalContent,children:[(0,s.jsx)("button",{className:d.modalCloseButton,onClick:()=>n(),children:(0,s.jsx)("svg",{width:"32",height:"32",children:(0,s.jsx)("use",{xlinkHref:"".concat(l.A,"#close")})})}),t]})})})})};var _=n(847),p=n(475),h=n(216);const x="RatingLocationBlock_ratingLocationContainer__9pybu",C="RatingLocationBlock_ratingContainer__r-DO0",v="RatingLocationBlock_starIcon__zdmYW",j="RatingLocationBlock_rating__VQ8V8",u="RatingLocationBlock_locationContainer__HH4Y4",g="RatingLocationBlock_locationIcon__UtxrG",f=e=>{let{rating:a,reviewsQuantity:n,location:t}=e;return(0,s.jsxs)("div",{className:x,children:[(0,s.jsxs)("div",{className:C,children:[(0,s.jsx)("svg",{className:v,width:"16",height:"16",children:(0,s.jsx)("use",{xlinkHref:"".concat(l.A,"#star")})}),(0,s.jsxs)("span",{className:j,children:[a," (",n," Reviews)"]})]}),(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("svg",{className:g,width:"16",height:"16",children:(0,s.jsx)("use",{xlinkHref:"".concat(l.A,"#location")})}),(0,s.jsx)("span",{children:t.split(", ").reverse().join(", ")})]})]})},k=n.p+"static/media/default-camper-image.cabfc7c9ecf3705b64a0.png",N={title:"CamperInfoModal_title__Lrny9",price:"CamperInfoModal_price__cCb20",gallery:"CamperInfoModal_gallery__WJF22",imageContainer:"CamperInfoModal_imageContainer__uYh7J",image:"CamperInfoModal_image__vG-f9",description:"CamperInfoModal_description__i9tiE",tabLinksWrapper:"CamperInfoModal_tabLinksWrapper__9guWe",linksList:"CamperInfoModal_linksList__SDumJ",tabLink:"CamperInfoModal_tabLink__KuSIB",active:"CamperInfoModal_active__ESvVm",contentWrapper:"CamperInfoModal_contentWrapper__ms0nw",featuresReviewsWrapper:"CamperInfoModal_featuresReviewsWrapper__mzJT7",formWrapper:"CamperInfoModal_formWrapper__GOiCO"},w=e=>{let{camper:a}=e;const{_id:n,description:t,gallery:r,location:o,name:c,price:l,rating:d,reviews:m}=a;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:N.title,children:c}),(0,s.jsx)(f,{rating:d,reviewsQuantity:m.length,location:o}),(0,s.jsx)("div",{className:N.price,children:"\u20ac".concat(l.toFixed(2))}),(0,s.jsx)("div",{className:N.gallery,children:r.map(((e,a)=>(0,s.jsx)("div",{className:N.imageContainer,children:(0,s.jsx)("img",{src:e||k,alt:"Camper title",className:N.image})},"".concat(n,"_image_").concat(a))))}),(0,s.jsx)("div",{className:N.description,children:t}),(0,s.jsxs)("div",{className:N.modalBottom,children:[(0,s.jsx)("div",{className:N.tabLinksWrapper,children:(0,s.jsxs)("ul",{className:N.linksList,children:[(0,s.jsx)("li",{children:(0,s.jsx)(p.k2,{className:e=>{let{isActive:a}=e;return"".concat(N.tabLink," ").concat(a&&N.active)},to:"features/".concat(n),children:"Features"})}),(0,s.jsx)("li",{children:(0,s.jsx)(p.k2,{className:e=>{let{isActive:a}=e;return"".concat(N.tabLink," ").concat(a&&N.active)},to:"reviews/".concat(n),children:"Reviews"})})]})}),(0,s.jsxs)("div",{className:N.contentWrapper,children:[(0,s.jsx)("div",{className:N.featuresReviewsWrapper,children:(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(h.sv,{})})}),(0,s.jsx)("div",{className:N.formWrapper,children:(0,s.jsx)("form",{action:"bla",children:"Form"})})]})]})]})};var L=n(601),b=n(185),B=n(980);const M={card:"CamperCard_card__xp3NR",imageContainer:"CamperCard_imageContainer__i-E6O",image:"CamperCard_image__yPXtO",title:"CamperCard_title__jnn2-",priceFavoriteButtonContainer:"CamperCard_priceFavoriteButtonContainer__qlW0C",price:"CamperCard_price__3C1U+",fovoriteButton:"CamperCard_fovoriteButton__bFpdk",fovoriteButtonIcon:"CamperCard_fovoriteButtonIcon__oM2Pf",isFavorite:"CamperCard_isFavorite__5MXle",description:"CamperCard_description__6Tkb8",details:"CamperCard_details__avpOS"},W=e=>{let{camper:a}=e;const n=(0,t.wA)(),[r,c]=(0,i.useState)(!1),d=(0,t.d4)(B.qM),{_id:p,description:h,gallery:x,location:C,name:v,price:j,rating:u,reviews:g}=a,N=d.some((e=>e._id===p)),W=(0,L.H)(a);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:M.card,children:[(0,s.jsx)("div",{className:M.imageContainer,children:(0,s.jsx)("img",{src:x[0]||k,alt:"Camper title",className:M.image})}),(0,s.jsxs)("div",{className:M.textContainer,children:[(0,s.jsx)("h2",{className:M.title,children:v}),(0,s.jsxs)("div",{className:M.priceFavoriteButtonContainer,children:[(0,s.jsx)("span",{className:M.price,children:"\u20ac".concat(j.toFixed(2))}),(0,s.jsx)("button",{className:M.fovoriteButton,onClick:()=>{n(N?(0,b.Fy)(p):(0,b.Gm)(a))},children:(0,s.jsx)("svg",{className:"".concat(M.fovoriteButtonIcon," ").concat(N&&M.isFavorite),width:"24",height:"24",children:(0,s.jsx)("use",{xlinkHref:"".concat(l.A,"#favorite")})})})]}),(0,s.jsx)(f,{rating:u,reviewsQuantity:g.length,location:C}),(0,s.jsx)("div",{className:M.description,children:h}),(0,s.jsx)("div",{className:M.details,children:W.map((e=>{const[a,n]=e;return(0,s.jsx)(_.q,{iconId:a,title:n},a)}))}),(0,s.jsx)(o,{onClick:()=>c(!0),children:"Show more"})]})]}),(0,s.jsx)(m,{isOpen:r,onClose:()=>c(!1),children:(0,s.jsx)(w,{camper:a})})]})};var I=n(127);const F="CampersList_campersList__hnPLj",y="CampersList_camperItem__2rT5X",R="CampersList_loadMoreButton__45zav",A=e=>{let{campers:a}=e;const n=(0,t.wA)(),i=(0,t.d4)(B.NR),r=(0,t.d4)(B.WE);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ul",{className:F,children:a.map((e=>(0,s.jsx)("li",{className:y,children:(0,s.jsx)(W,{camper:e})},e._id)))}),i&&(0,s.jsx)(o,{className:R,variant:"transparent",onClick:()=>n((0,I.K)(r)),children:"Load more"})]})}},500:(e,a,n)=>{n.r(a),n.d(a,{default:()=>o});var t=n(3),i=n(980),r=n(488),s=n(579);const o=()=>{const e=(0,t.d4)(i.qM);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Favorites"}),!!e.length&&(0,s.jsx)(r._,{campers:e,favorites:e}),!e.length&&"It's empty here. Please, add some camper to favorites first."]})}}}]);
//# sourceMappingURL=8.926ce9ec.chunk.js.map