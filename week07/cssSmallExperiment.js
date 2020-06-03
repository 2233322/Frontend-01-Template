// https://www.w3.org/TR/?tag=css 抓取css文档标题和路径

// let CSSList = []

// let list = document.getElementById('container').children

// list.forEach(item => {
//   if (item.getAttribute('data-tag').match(/css/)) {
//     CSSList.push({
//       name: item.children[1].innerText,
//       url: item.children[1].children[0].href
//     })
//   }
// })

let CSSStanardList = [{
    "title": "Requirements for Chinese Text Layout中文排版需求",
    "url": "https://www.w3.org/TR/2020/WD-clreq-20200601/"
  },
  {
    "title": "Requirements for Hangul Text Layout and Typography : 한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항",
    "url": "https://www.w3.org/TR/2020/NOTE-klreq-20200527/"
  },
  {
    "title": "CSS Box Sizing Module Level 4",
    "url": "https://www.w3.org/TR/2020/WD-css-sizing-4-20200526/"
  },
  {
    "title": "Ethiopic Layout Requirements",
    "url": "https://www.w3.org/TR/2020/WD-elreq-20200526/"
  },
  {
    "title": "CSS Positioned Layout Module Level 3",
    "url": "https://www.w3.org/TR/2020/WD-css-position-3-20200519/"
  },
  {
    "title": "CSS Display Module Level 3",
    "url": "https://www.w3.org/TR/2020/CR-css-display-3-20200519/"
  },
  {
    "title": "CSS Text Decoration Module Level 4",
    "url": "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/"
  },
  {
    "title": "CSS Text Module Level 3",
    "url": "https://www.w3.org/TR/2020/WD-css-text-3-20200429/"
  },
  {
    "title": "CSS Ruby Layout Module Level 1",
    "url": "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/"
  },
  {
    "title": "CSS Box Model Module Level 3",
    "url": "https://www.w3.org/TR/2020/WD-css-box-3-20200421/"
  },
  {
    "title": "CSS Box Model Module Level 4",
    "url": "https://www.w3.org/TR/2020/WD-css-box-4-20200421/"
  },
  {
    "title": "CSS Box Alignment Module Level 3",
    "url": "https://www.w3.org/TR/2020/WD-css-align-3-20200421/"
  },
  {
    "title": "CSS Color Adjustment Module Level 1",
    "url": "https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/"
  },
  {
    "title": "Media Queries Level 5",
    "url": "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200318/"
  },
  {
    "title": "CSS Speech Module",
    "url": "https://www.w3.org/TR/2020/CR-css-speech-1-20200310/"
  },
  {
    "title": "CSS Conditional Rules Module Level 4",
    "url": "https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/"
  },
  {
    "title": "CSS Transforms Module Level 2",
    "url": "https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/"
  },
  {
    "title": "CSS Color Module Level 5",
    "url": "https://www.w3.org/TR/2020/WD-css-color-5-20200303/"
  },
  {
    "title": "CSS Scroll Anchoring Module Level 1",
    "url": "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/"
  },
  {
    "title": "Resize Observer",
    "url": "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/"
  },
  {
    "title": "Timed Text Markup Language 2 (TTML2) (2nd Edition)",
    "url": "https://www.w3.org/TR/2020/CR-ttml2-20200128/"
  },
  {
    "title": "CSS Basic User Interface Module Level 4",
    "url": "https://www.w3.org/TR/2020/WD-css-ui-4-20200124/"
  },
  {
    "title": "CSS Writing Modes Level 3",
    "url": "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/"
  },
  {
    "title": "CSS Grid Layout Module Level 2",
    "url": "https://www.w3.org/TR/2019/WD-css-grid-2-20191203/"
  },
  {
    "title": "CSS Spatial Navigation Level 1",
    "url": "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/"
  },
  {
    "title": "CSS Containment Module Level 1",
    "url": "https://www.w3.org/TR/2019/REC-css-contain-1-20191121/"
  },
  {
    "title": "CSS Text Module Level 4",
    "url": "https://www.w3.org/TR/2019/WD-css-text-4-20191113/"
  },
  {
    "title": "CSS Fonts Module Level 4",
    "url": "https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/"
  },
  {
    "title": "CSS Containment Module Level 2",
    "url": "https://www.w3.org/TR/2019/WD-css-contain-2-20191111/"
  },
  {
    "title": "CSS Color Module Level 4",
    "url": "https://www.w3.org/TR/2019/WD-css-color-4-20191105/"
  },
  {
    "title": "CSS Properties and Values API Level 1",
    "url": "https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/"
  },
  {
    "title": "CSS Multi-column Layout Module Level 1",
    "url": "https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/"
  },
  {
    "title": "CSS Images Module Level 3",
    "url": "https://www.w3.org/TR/2019/CR-css-images-3-20191010/"
  },
  {
    "title": "CSS Lists Module Level 3",
    "url": "https://www.w3.org/TR/2019/WD-css-lists-3-20190817/"
  },
  {
    "title": "CSS Text Decoration Module Level 3",
    "url": "https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/"
  },
  {
    "title": "CSS Generated Content Module Level 3",
    "url": "https://www.w3.org/TR/2019/WD-css-content-3-20190802/"
  },
  {
    "title": "CSS Writing Modes Level 4",
    "url": "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/"
  },
  {
    "title": "CSS Table Module Level 3",
    "url": "https://www.w3.org/TR/2019/WD-css-tables-3-20190727/"
  },
  {
    "title": "CSS Syntax Module Level 3",
    "url": "https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/"
  },
  {
    "title": "CSS Animation Worklet API",
    "url": "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/"
  },
  {
    "title": "CSS Overscroll Behavior Module Level 1",
    "url": "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/"
  },
  {
    "title": "CSS Values and Units Module Level 3",
    "url": "https://www.w3.org/TR/2019/CR-css-values-3-20190606/"
  },
  {
    "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3",
    "url": "https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/"
  },
  {
    "title": "CSS Easing Functions Level 1",
    "url": "https://www.w3.org/TR/2019/CR-css-easing-1-20190430/"
  },
  {
    "title": "TTML Media Type Definition and Profile Registry",
    "url": "https://www.w3.org/TR/2019/NOTE-ttml-profile-registry-20190411/"
  },
  {
    "title": "WebVTT: The Web Video Text Tracks Format",
    "url": "https://www.w3.org/TR/2019/CR-webvtt1-20190404/"
  },
  {
    "title": "Non-element  Selectors  Module  Level 1",
    "url": "https://www.w3.org/TR/2019/NOTE-selectors-nonelement-1-20190402/"
  },
  {
    "title": "CSS Scroll Snap Module Level 1",
    "url": "https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/"
  },
  {
    "title": "CSS Pseudo-Elements Module Level 4",
    "url": "https://www.w3.org/TR/2019/WD-css-pseudo-4-20190225/"
  },
  {
    "title": "CSS Transforms Module Level 1",
    "url": "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/"
  },
  {
    "title": "CSS Values and Units Module Level 4",
    "url": "https://www.w3.org/TR/2019/WD-css-values-4-20190131/"
  },
  {
    "title": "CSS Snapshot 2018",
    "url": "https://www.w3.org/TR/2019/NOTE-css-2018-20190122/"
  },
  {
    "title": "CSS Fragmentation Module Level 4",
    "url": "https://www.w3.org/TR/2018/WD-css-break-4-20181218/"
  },
  {
    "title": "Motion Path Module Level 1",
    "url": "https://www.w3.org/TR/2018/WD-motion-1-20181218/"
  },
  {
    "title": "Filter Effects Module Level 1",
    "url": "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/"
  },
  {
    "title": "Geometry Interfaces Module Level 1",
    "url": "https://www.w3.org/TR/2018/CR-geometry-1-20181204/"
  },
  {
    "title": "CSS Fragmentation Module Level 3",
    "url": "https://www.w3.org/TR/2018/CR-css-break-3-20181204/"
  },
  {
    "title": "Selectors Level 4",
    "url": "https://www.w3.org/TR/2018/WD-selectors-4-20181121/"
  },
  {
    "title": "CSS Flexible Box Layout Module Level 1",
    "url": "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/"
  },
  {
    "title": "CSS Shadow Parts",
    "url": "https://www.w3.org/TR/2018/WD-css-shadow-parts-1-20181115/"
  },
  {
    "title": "Selectors Level 3",
    "url": "https://www.w3.org/TR/2018/REC-selectors-3-20181106/"
  },
  {
    "title": "CSS Paged Media Module Level 3",
    "url": "https://www.w3.org/TR/2018/WD-css-page-3-20181018/"
  },
  {
    "title": "CSS Animations Level 1",
    "url": "https://www.w3.org/TR/2018/WD-css-animations-1-20181011/"
  },
  {
    "title": "Web Animations",
    "url": "https://www.w3.org/TR/2018/WD-web-animations-1-20181011/"
  },
  {
    "title": "CSS Transitions",
    "url": "https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/"
  },
  {
    "title": "CSS Scrollbars Module Level 1",
    "url": "https://www.w3.org/TR/2018/WD-css-scrollbars-1-20180925/"
  },
  {
    "title": "CSS Fonts Module Level 3",
    "url": "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/"
  },
  {
    "title": "Cascading  Style  Sheets,  level 1",
    "url": "https://www.w3.org/TR/2018/SPSD-CSS1-20180913/"
  },
  {
    "title": "CSS Cascading and Inheritance Level 3",
    "url": "https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/"
  },
  {
    "title": "CSS Cascading and Inheritance Level 4",
    "url": "https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/"
  },
  {
    "title": "CSS Logical Properties and Values Level 1",
    "url": "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/"
  },
  {
    "title": "CSS Painting API Level 1",
    "url": "https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/"
  },
  {
    "title": "CSS Inline Layout Module Level 3",
    "url": "https://www.w3.org/TR/2018/WD-css-inline-3-20180808/"
  },
  {
    "title": "CSS Overflow Module Level 3",
    "url": "https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/"
  },
  {
    "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)",
    "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/"
  },
  {
    "title": "CSS Color Module Level 3",
    "url": "https://www.w3.org/TR/2018/REC-css-color-3-20180619/"
  },
  {
    "title": "CSS Layout API Level 1",
    "url": "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/"
  },
  {
    "title": "DOMMatrix interface",
    "url": "https://www.w3.org/TR/2018/NOTE-matrix-20180412/"
  },
  {
    "title": "CSS Typed OM Level 1",
    "url": "https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/"
  },
  {
    "title": "Encoding",
    "url": "https://www.w3.org/TR/2018/CR-encoding-20180327/"
  },
  {
    "title": "CSS Grid Layout Module Level 1",
    "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/"
  },
  {
    "title": "CSS Counter Styles Level 3",
    "url": "https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/"
  },
  {
    "title": "CSS Backgrounds and Borders Module Level 3",
    "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/"
  },
  {
    "title": "Media Queries Level 4",
    "url": "https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/"
  },
  {
    "title": "CSS Overflow Module Level 4",
    "url": "https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/"
  },
  {
    "title": "CSS Image Values and Replaced Content Module Level 4",
    "url": "https://www.w3.org/TR/2017/WD-css-images-4-20170413/"
  },
  {
    "title": "CSS Fill and Stroke Module Level 3",
    "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/"
  },
  {
    "title": "CSS Rhythmic Sizing",
    "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/"
  },
  {
    "title": "Ready-made Counter Styles",
    "url": "https://www.w3.org/TR/2017/NOTE-predefined-counter-styles-20170216/"
  },
  {
    "title": "CSS Snapshot 2017",
    "url": "https://www.w3.org/TR/2017/NOTE-css-2017-20170131/"
  },
  {
    "title": "CSS Round Display Level 1",
    "url": "https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/"
  },
  {
    "title": "Worklets Level 1",
    "url": "http://www.w3.org/TR/2016/WD-worklets-1-20160607/"
  },
  {
    "title": "Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification",
    "url": "http://www.w3.org/TR/2016/WD-CSS22-20160412/"
  },
  {
    "title": "CSS Device Adaptation Module Level 1",
    "url": "http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/"
  },
  {
    "title": "CSS Object Model (CSSOM)",
    "url": "http://www.w3.org/TR/2016/WD-cssom-1-20160317/"
  },
  {
    "title": "CSSOM View Module",
    "url": "http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/"
  },
  {
    "title": "CSS Custom Properties for Cascading Variables Module Level 1",
    "url": "http://www.w3.org/TR/2015/CR-css-variables-1-20151203/"
  },
  {
    "title": "CSS Will Change Module Level 1",
    "url": "http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/"
  },
  {
    "title": "CSS Snapshot 2015",
    "url": "http://www.w3.org/TR/2015/NOTE-css-2015-20151013/"
  },
  {
    "title": "CSS Page Floats",
    "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/"
  },
  {
    "title": "Priorities for CSS from the Digital Publishing Interest Group",
    "url": "http://www.w3.org/TR/2015/WD-dpub-css-priorities-20150820/"
  },
  {
    "title": "CSS Template Layout Module",
    "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/"
  },
  {
    "title": "CSS Exclusions Module Level 1",
    "url": "http://www.w3.org/TR/2015/WD-css3-exclusions-20150115/"
  },
  {
    "title": "Compositing and Blending Level 1",
    "url": "http://www.w3.org/TR/2015/CR-compositing-1-20150113/"
  },
  {
    "title": "Fullscreen",
    "url": "http://www.w3.org/TR/2014/NOTE-fullscreen-20141118/"
  },
  {
    "title": "CSS  Marquee  Module  Level 3",
    "url": "http://www.w3.org/TR/2014/NOTE-css3-marquee-20141014/"
  },
  {
    "title": "CSS  TV  Profile 1.0",
    "url": "http://www.w3.org/TR/2014/NOTE-css-tv-20141014/"
  },
  {
    "title": "The CSS ‘Reader’ Media Type",
    "url": "http://www.w3.org/TR/2014/NOTE-css3-reader-20141014/"
  },
  {
    "title": "Behavioral Extensions to CSS",
    "url": "http://www.w3.org/TR/2014/NOTE-becss-20141014/"
  },
  {
    "title": "CSS Presentation Levels Module",
    "url": "http://www.w3.org/TR/2014/NOTE-css3-preslev-20141014/"
  },
  {
    "title": "CSS  Mobile  Profile 2.0",
    "url": "http://www.w3.org/TR/2014/NOTE-css-mobile-20141014/"
  },
  {
    "title": "CSS3 Hyperlink Presentation Module",
    "url": "http://www.w3.org/TR/2014/NOTE-css3-hyperlinks-20141014/"
  },
  {
    "title": "CSS Regions Module Level 1",
    "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/"
  },
  {
    "title": "CSS Line Grid Module Level 1",
    "url": "http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/"
  },
  {
    "title": "CSS Masking Module Level 1",
    "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/"
  },
  {
    "title": "CSS Font Loading Module Level 3",
    "url": "http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/"
  },
  {
    "title": "CSS Generated Content for Paged Media Module",
    "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/"
  },
  {
    "title": "SVG Integration",
    "url": "http://www.w3.org/TR/2014/WD-svg-integration-20140417/"
  },
  {
    "title": "CSS Scoping Module Level 1",
    "url": "http://www.w3.org/TR/2014/WD-css-scoping-1-20140403/"
  },
  {
    "title": "CSS Shapes Module Level 1",
    "url": "http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/"
  },
  {
    "title": "CSS Namespaces Module Level 3",
    "url": "http://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/"
  },
  {
    "title": "CSS Style Attributes",
    "url": "http://www.w3.org/TR/2013/REC-css-style-attr-20131107/"
  },
  {
    "title": "Selectors  API  Level 2",
    "url": "http://www.w3.org/TR/2013/NOTE-selectors-api2-20131017/"
  },
  {
    "title": "CSS Conditional Rules Module Level 3",
    "url": "http://www.w3.org/TR/2013/CR-css3-conditional-20130404/"
  },
  {
    "title": "CSS Print Profile",
    "url": "http://www.w3.org/TR/2013/NOTE-css-print-20130314/"
  },
  {
    "title": "Selectors API Level 1",
    "url": "http://www.w3.org/TR/2013/REC-selectors-api-20130221/"
  },
  {
    "title": "Media Queries",
    "url": "http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/"
  },
  {
    "title": "Requirements for Japanese Text Layout",
    "url": "http://www.w3.org/TR/2012/NOTE-jlreq-20120403/"
  },
  {
    "title": "A MathML for CSS Profile",
    "url": "http://www.w3.org/TR/2011/REC-mathml-for-css-20110607/"
  },
  {
    "title": "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification",
    "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/"
  },
  {
    "title": "Cascading Style Sheets (CSS) Snapshot 2007",
    "url": "http://www.w3.org/TR/2011/NOTE-css-beijing-20110512/"
  },
  {
    "title": "Cascading Style Sheets (CSS) Snapshot 2010",
    "url": "http://www.w3.org/TR/2011/NOTE-css-2010-20110512/"
  },
  {
    "title": "Associating Style Sheets with XML documents 1.0 (Second Edition)",
    "url": "http://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/"
  },
  {
    "title": "Document Object Model (DOM) Level 2 Style Specification",
    "url": "http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/"
  },
  {
    "title": "CSS Techniques for Web Content Accessibility Guidelines 1.0",
    "url": "http://www.w3.org/TR/2000/NOTE-WCAG10-CSS-TECHS-20001106/"
  },
  {
    "title": "Positioning HTML Elements with Cascading Style Sheets",
    "url": "http://www.w3.org/TR/1999/WD-positioning-19990902"
  },
  {
    "title": "Aural Cascading Style Sheets (ACSS) Specification",
    "url": "http://www.w3.org/TR/1999/WD-acss-19990902"
  },
  {
    "title": "CSS Printing Extensions",
    "url": "http://www.w3.org/TR/1999/WD-print-19990902"
  },
  {
    "title": "List of suggested extensions to CSS",
    "url": "http://www.w3.org/TR/1998/NOTE-CSS-potential-19981210"
  }
]

let iframe = document.createElement('iframe')
document.body.innerHTML = ''
document.body.appendChild(iframe)

function happen(element, event) {
  return new Promise((resolve) => {
    let handler = () => {
      resolve()
      element.removeEventListener(event, handler)
    }
    element.addEventListener(event, handler)
  })
}

async function loadStandard() {
  for (let standard of CSSStanardList) {
    console.log(standard.title)
    iframe.src = standard.url
    await happen(iframe, 'load')
  }
}