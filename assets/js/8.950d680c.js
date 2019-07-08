(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{242:function(t,a,r){t.exports=r.p+"assets/img/crf.c93b0ea6.png"},275:function(t,a,r){"use strict";r.r(a);var T=r(2),s=Object(T.a)({},function(){var t=this,a=t.$createElement,T=t._self._c||a;return T("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[T("h1",{attrs:{id:"bilstm-crf的命名实体识别"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#bilstm-crf的命名实体识别","aria-hidden":"true"}},[t._v("#")]),t._v(" BiLSTM + CRF的命名实体识别")]),t._v(" "),T("p",[t._v("命名实体识别，Named Entity Recognition, 是一种序列标注问题，即在文本中标注出人名、地名、机构名等实体。提及序列，做深度学习的朋友脑海中会闪现出RNN。而CRF是在给定的随机变量"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.873ex",height:"1.545ex",viewBox:"0 -683 828 683","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[T("defs",[T("path",{attrs:{id:"MJX-1-TEX-I-58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-1-TEX-I-58"}})])])])])]),t._v("（ 观测序列"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.439ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.813ex",height:"1.437ex",viewBox:"0 -441 3895.5 635","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[T("defs",[T("path",{attrs:{id:"MJX-2-TEX-I-6F",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}}),T("path",{attrs:{id:"MJX-2-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),T("path",{attrs:{id:"MJX-2-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),T("path",{attrs:{id:"MJX-2-TEX-N-22EF",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z"}}),T("path",{attrs:{id:"MJX-2-TEX-I-69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"msub"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-I-6F"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(485, -150) scale(0.707)"}},[T("g",{attrs:{"data-mml-node":"mn"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-N-31"}})])])]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(888.6, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-N-2C"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(1333.2, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-N-22EF"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(2671.9, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-N-2C"}})]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(3116.6, 0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-I-6F"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(485, -150) scale(0.707)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-2-TEX-I-69"}})])])])])])])]),t._v(" ）条件下，随机变量"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.726ex",height:"1.545ex",viewBox:"0 -683 763 683","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[T("defs",[T("path",{attrs:{id:"MJX-3-TEX-I-59",d:"M66 637Q54 637 49 637T39 638T32 641T30 647T33 664T42 682Q44 683 56 683Q104 680 165 680Q288 680 306 683H316Q322 677 322 674T320 656Q316 643 310 637H298Q242 637 242 624Q242 619 292 477T343 333L346 336Q350 340 358 349T379 373T411 410T454 461Q546 568 561 587T577 618Q577 634 545 637Q528 637 528 647Q528 649 530 661Q533 676 535 679T549 683Q551 683 578 682T657 680Q684 680 713 681T746 682Q763 682 763 673Q763 669 760 657T755 643Q753 637 734 637Q662 632 617 587Q608 578 477 424L348 273L322 169Q295 62 295 57Q295 46 363 46Q379 46 384 45T390 35Q390 33 388 23Q384 6 382 4T366 1Q361 1 324 1T232 2Q170 2 138 2T102 1Q84 1 84 9Q84 14 87 24Q88 27 89 30T90 35T91 39T93 42T96 44T101 45T107 45T116 46T129 46Q168 47 180 50T198 63Q201 68 227 171L252 274L129 623Q128 624 127 625T125 627T122 629T118 631T113 633T105 634T96 635T83 636T66 637Z"}})]),T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-3-TEX-I-59"}})])])])])]),t._v("（"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16.641ex",height:"2.262ex",viewBox:"0 -750 7355.3 1000","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[T("defs",[T("path",{attrs:{id:"MJX-4-TEX-I-68",d:"M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"}}),T("path",{attrs:{id:"MJX-4-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),T("path",{attrs:{id:"MJX-4-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),T("path",{attrs:{id:"MJX-4-TEX-N-22EF",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z"}}),T("path",{attrs:{id:"MJX-4-TEX-I-69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mo"}},[T("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("隐")]),T("text",{attrs:{"data-variant":"normal",transform:"translate(600, 0) matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("状")]),T("text",{attrs:{"data-variant":"normal",transform:"translate(1200, 0) matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("态")]),T("text",{attrs:{"data-variant":"normal",transform:"translate(1800, 0) matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("序")]),T("text",{attrs:{"data-variant":"normal",transform:"translate(2400, 0) matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("列")])]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(3277.8, 0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-I-68"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(576, -150) scale(0.707)"}},[T("g",{attrs:{"data-mml-node":"mn"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-N-31"}})])])]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(4257.3, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-N-2C"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(4702, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-N-22EF"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(6040.7, 0)"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-N-2C"}})]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(6485.3, 0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-I-68"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(576, -150) scale(0.707)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("use",{attrs:{"xlink:href":"#MJX-4-TEX-I-69"}})])])])])])])]),t._v("）的马尔科夫随机场，如下图所示。")],1),t._v(" "),T("img",{attrs:{src:r(242),width:"50%",height:"50%/"}}),t._v(" "),T("h1",{attrs:{id:"参考资料"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),T("p",[t._v("[1] "),T("a",{attrs:{href:"https://arxiv.org/abs/1508.01991",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bidirectional LSTM-CRF Models for Sequence Tagging"),T("OutboundLink")],1)])])},[],!1,null,null,null);a.default=s.exports}}]);