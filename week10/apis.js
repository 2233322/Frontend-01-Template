let names = Object.getOwnPropertyNames(window);

// function filterOut(names, props) {
//   let set = new Set();
//   props.forEach(o => set.add(o));
//   return names.filter(e => !set.has(e));
// }

// Intl
{
  let js = new Set();
  let objects = [
    'Intl',
  ];
  objects.forEach(o => js.add(o));
  names = names.filter(e => !js.has(e));
}

names = names.filter(e => {
  try {
    return !(window[e].prototype instanceof Node);
  } catch (err) {
    return true;
  }
}).filter(e => e !== 'Node');

names = names.filter(e => !e.match(/^on/));

names = names.filter(e => !e.match(/^webkit/));

// webgl: https://www.khronos.org/registry/webgl/specs/latest/2.0/#3.6
{
  let webGl = new Set();
  let objects = [
    'WebGL2RenderingContext', 'WebGLActiveInfo', 'WebGLBuffer', 'WebGLContextEvent', 'WebGLFramebuffer',
    'WebGLProgram', 'WebGLQuery', 'WebGLRenderbuffer', 'WebGLRenderingContext', 'WebGLSampler', 'WebGLShader',
    'WebGLShaderPrecisionFormat', 'WebGLSync', 'WebGLTexture', 'WebGLTransformFeedback', 'WebGLUniformLocation',
    'WebGLVertexArrayObject', 'WebKitCSSMatrix'
  ];
  objects.forEach(o => webGl.add(o));
  names = names.filter(e => !webGl.has(e));
}

// webaudio: https://www.w3.org/TR/webaudio/
{
  let webAudio = new Set();
  let objects = ['BaseAudioContext', 'AudioContext', 'OfflineAudioContext', 'AudioBuffer', 'AudioNode', 'AudioParam',
    'AudioScheduledSourceNode', 'AnalyserNode', 'AudioBufferSourceNode', 'AudioDestinationNode', 'AudioListener',
    'AudioProcessingEvent', 'BiquadFilterNode', 'ChannelMergerNode', 'ChannelSplitterNode', 'ConstantSourceNode',
    'ConvolverNode', 'DelayNode', 'DynamicsCompressorNode', 'GainNode', 'IIRFilterNode',
    'MediaElementAudioSourceNode', 'MediaStreamAudioDestinationNode', 'MediaStreamAudioSourceNode',
    'MediaStreamTrackAudioSourceNode', 'OscillatorNode', 'PannerNode', 'PeriodicWave', 'ScriptProcessorNode',
    'StereoPannerNode', 'WaveShaperNode', 'AudioWorklet',
    'OfflineAudioCompletionEvent', 'AudioWorkletGlobalScope', 'AudioWorkletNode'
  ];
  objects.forEach(o => webAudio.add(o));
  names = names.filter(e => !webAudio.has(e));
}

// encoding: https://encoding.spec.whatwg.org/
{
  let encoding = new Set();
  let objects = [
    'TextDecoderCommon', 'TextDecoder', 'TextEncoderCommon', 'TextEncoder', 'GenericTransformStream',
    'TextDecoderStream', 'TextEncoderStream'
  ];
  objects.forEach(o => encoding.add(o));
  names = names.filter(e => !encoding.has(e));
}

// Web Background Synchronization: https://wicg.github.io/background-sync/spec/#sync-manager-interface
{
  let WBS = new Set();
  let objects = ['ServiceWorkerRegistration', 'SyncManager', 'SyncEvent']
  objects.forEach(o => WBS.add(o));
  names = names.filter(e => !WBS.has(e));
}

// storage: https://html.spec.whatwg.org/multipage/webstorage.html
{
  let storage = new Set();
  let objects = ['Storage', 'WindowSessionStorage', 'WindowLocalStorage', 'StorageEvent', 'StorageEventInit']
  objects.forEach(o => storage.add(o));
  names = names.filter(e => !storage.has(e));
}

// https://www.w3.org/TR/media-source/#sourcebufferlist
{
  let api = new Set();
  let objects = ['MediaSource', 'SourceBuffer', 'SourceBufferList', 'AudioTrack', 'VideoTrack', 'TextTrack', ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/screen-orientation/
{
  let api = new Set();
  let objects = ['Screen', 'ScreenOrientation']
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://w3c.github.io/webrtc-pc/
{
  let api = new Set();
  let objects = ['RTCAnswerOptions', 'RTCCertificate', 'RTCConfiguration', 'RTCDTMFSender', 'RTCDTMFToneChangeEvent',
    'RTCDataChannel', 'RTCDataChannelEvent', 'RTCDtlsTransport', 'RTCIceCandidate', 'RTCIceCandidateInit',
    'RTCIceCandidatePair', 'RTCIceCandidatePairStats', 'RTCIceCandidateStats', 'RTCIceCandidateType',
    'RTCIceComponent', 'RTCIceCredentialType', 'RTCIceGathererState', 'RTCIceParameters', 'RTCIceProtocol',
    'RTCIceRole', 'RTCIceServer', 'RTCIceTcpCandidateType', 'RTCIceTransport', 'RTCIceTransportState',
    'RTCIdentityAssertion', 'RTCIdentityErrorEvent', 'RTCIdentityEvent', 'RTCInboundRtpStreamStats',
    'RTCNetworkType', 'RTCOfferAnswerOptions', 'RTCOfferOptions', 'RTCOutboundRtpStreamStats', 'RTCPeerConnection',
    'RTCPeerConnectionIceEvent', 'RTCRtpCodecParameters', 'RTCRtpContributingSource', 'RTCRtpEncodingParameters',
    'RTCRtpReceiver', 'RTCRtpSendParameters', 'RTCRtpSender', 'RTCRtpStreamStats', 'RTCRtpSynchronizationSource',
    'RTCRtpTransceiver', 'RTCRtpTransceiverDirection', 'RTCRtpTransceiverInit', 'RTCSctpTransport',
    'RTCSessionDescription', 'RTCSessionDescriptionCallback', 'RTCStats', 'RTCStatsIceCandidatePairState',
    'RTCStatsReport', 'RTCStatsType', 'RTCTrackEvent', 'RTCTrackEventInit', 'RTCPeerConnectionIceErrorEvent',
    'RTCErrorEvent', 'RTCError'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/mediacapture-streams/
// https://w3c.github.io/mediacapture-main/
// https://w3c.github.io/media-capabilities
{
  let api = new Set();
  let objects = [
    'MediaCapabilitiesInfo', 'MediaConfiguration', 'MediaDecodingConfiguration', 'MediaDeviceInfo', 'MediaDevices',
    'MediaElementAudioSourceNode', 'MediaEncodingConfiguration', 'MediaError', 'MediaImage', 'MediaKeyMessageEvent',
    'MediaKeySession', 'MediaKeyStatusMap', 'MediaKeySystemAccess', 'MediaKeySystemConfiguration', 'MediaKeys',
    'MediaList', 'MediaMetadata', 'MediaPositionState', 'MediaQueryList', 'MediaQueryListEvent',
    'MediaQueryListListener', 'MediaRecorder', 'MediaRecorderErrorEvent', 'MediaSession',
    'MediaSessionActionDetails', 'MediaSource', 'MediaStream', 'MediaStreamAudioDestinationNode',
    'MediaStreamAudioSourceNode', 'MediaStreamAudioSourceOptions', 'MediaStreamConstraints', 'MediaStreamEvent',
    'MediaStreamTrack', 'MediaStreamTrackAudioSourceNode', 'MediaStreamTrackAudioSourceOptions',
    'MediaStreamTrackEvent', 'MediaTrackConstraints', 'MediaTrackSettings', 'MediaTrackSupportedConstraints',
    'NavigationPreloadManager', 'NavigatorConcurrentHardware', 'NavigatorLanguage', 'NavigatorOnLine',
    'NavigatorStorage',
    'InputDeviceInfo', 'OverconstrainedError',
    'WorkerNavigator', 'MediaCapabilities'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://html.spec.whatwg.org/multipage/system-state.html
{
  let api = new Set();
  let objects = [
    'NavigatorID', 'Navigator', 'NavigatorLanguage', 'NavigatorCookies', 'NavigatorPlugins'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/image-capture/
{
  let api = new Set();
  let objects = [
    'PhotoCapabilities', 'MediaSettingsRange', 'ImageCapture'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://html.spec.whatwg.org/multipage/canvas.html
{
  let api = new Set();
  let objects = [
    'HTMLCanvasElement', 'CanvasRenderingContext2D', 'CanvasState', 'CanvasTransform', 'CanvasCompositing',
    'CanvasImageSmoothing', 'CanvasFillStrokeStyles', 'CanvasShadowStyles', 'CanvasShadowStyles', 'CanvasFilters',
    'CanvasRect', 'CanvasDrawPath', 'CanvasDrawPath', 'CanvasUserInterface', 'CanvasText', 'CanvasDrawImage',
    'CanvasImageData', 'CanvasPathDrawingStyles', 'CanvasTextDrawingStyles', 'CanvasPath', 'CanvasGradient',
    'CanvasPattern', 'TextMetrics', 'ImageData', 'Path2D', 'ImageBitmapRenderingContext', 'OffscreenCanvas',
    'OffscreenCanvasRenderingContext2D'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://wicg.github.io/netinfo/
{
  let api = new Set();
  let objects = [
    'NetworkInformation', 'NavigatorNetworkInformation'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/IndexedDB/
{
  let api = new Set();
  let objects = [
    'indexedDB', 'IDBRequest', 'IDBOpenDBRequest', 'IDBVersionChangeEvent', 'WindowOrWorkerGlobalScope',
    'IDBFactory', 'IDBDatabase', 'IDBObjectStore', 'IDBIndex', 'IDBKeyRange', 'IDBCursor', 'IDBCursorWithValue',
    'IDBTransaction'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/SVG11/types.html
// https://www.w3.org/TR/SVG/coords.html
{
  let api = new Set();
  let objects = [
    'SVGElement', 'SVGAnimatedBoolean', 'SVGAnimatedString', 'SVGStringList', 'SVGAnimatedEnumeration',
    'SVGAnimatedInteger', 'SVGNumber', 'SVGAnimatedNumber', 'SVGNumberList', 'SVGAnimatedNumberList', 'SVGLength',
    'SVGAnimatedLength', 'SVGLengthList', 'SVGAnimatedLengthList', 'SVGAngle', 'SVGAnimatedAngle', 'SVGColor',
    'SVGICCColor', 'SVGRect', 'SVGAnimatedRect', 'SVGUnitTypes', 'SVGStylable', 'SVGLocatable', 'SVGTransformable',
    'SVGTests', 'SVGLangSpace', 'SVGExternalResourcesRequired', 'SVGFitToViewBox', 'SVGZoomAndPan', 'SVGViewSpec',
    'SVGURIReference', 'SVGCSSRule', 'SVGRenderingIntent',
    'SVGTransformList', 'SVGTransform', 'SVGPreserveAspectRatio', 'SVGPointList', 'SVGPoint', 'SVGMatrix',
    'SVGAnimatedTransformList', 'SVGAnimatedPreserveAspectRatio',
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://www.w3.org/TR/cssom-1/
// https://www.w3.org/TR/css-typed-om-1/
// https://drafts.csswg.org/css-conditional-3/
// https://www.w3.org/TR/css-animations-1/
// https://www.w3.org/TR/cssom-view-1/
{
  let cssom = new Set();
  let objects = [
    'CSS', 'CSSFontFaceRule', 'CSSStyleSheet', 'CSSStyleDeclaration', 'CSSRuleList', 'CSSRule', 'CSSStyleRule',
    'CSSImportRule', 'CSSGroupingRule', 'CSSMediaRule', 'CSSPageRule', 'CSSMarginRule', 'CSSNamespaceRule',
    'CSSStyleValue', 'StylePropertyMapReadOnly', 'StylePropertyMap', 'CSSUnparsedValue',
    'CSSVariableReferenceValue', 'CSSKeywordValue', 'CSSNumericValue', 'CSSUnitValue', 'CSSMathValue', 'CSSMathSum',
    'CSSMathProduct', 'CSSMathNegate', 'CSSMathInvert', 'CSSMathMin', 'CSSMathMax', 'CSSNumericArray',
    'CSSTransformValue', 'CSSTransformComponent', 'CSSTranslate', 'CSSRotate', 'CSSScale', 'CSSSkew', 'CSSSkewX',
    'CSSSkewY', 'CSSPerspective', 'CSSMatrixComponent', 'CSSPositionValue', 'CSSImageValue',
    'CSSConditionRule', 'CSSMediaRule', 'CSSSupportsRule',
    'AnimationEvent', 'CSSKeyframeRule', 'CSSKeyframesRule',
    'screen', 'innerWidth', 'innerHeight', 'scrollX', 'pageXOffset', 'scrollY', 'pageYOffset', 'visualViewport',
    'screenX', 'screenY', 'outerWidth', 'outerHeight', 'devicePixelRatio', 'clientInformation', 'event',
    'offscreenBuffering', 'screenLeft', 'screenTop',
  ]
  objects.forEach(o => cssom.add(o));
  names = names.filter(e => !cssom.has(e));
}

// https://dom.spec.whatwg.org/
{
  let dom = new Set();
  let objects = [
    'Event', 'Window', 'CustomEvent', 'EventTarget', 'AbortController', 'AbortSingal', 'NodeList', 'HTMLCollection',
    'MutationObserver', 'MutationRecord', 'Node', 'Document', 'DOMImplementation', 'DomcumentType',
    'DocumentFragment', 'ShadowRoot', 'Element', 'NamedNodeMap', 'Attr', 'CharacterData', 'Text', 'CDATASection',
    'ProcessingInstruction', 'Comment', 'AbstractRange', 'StaticRange', 'Range', 'NodeIterator', 'TreeWalker',
    'NodeFilter', 'DOMTokenList', 'XPathResult', 'XPathExpression', 'XPathEvaluator'
  ]
  objects.forEach(o => dom.add(o));
  names = names.filter(e => !dom.has(e));
}

// https://html.spec.whatwg.org/
{
  let html = new Set();
  let objects = [
    'HTMLAllCollection', 'HTMLOptionsCollection', 'HTMLFormControlsCollection', 'DOMStringMap', 'DOMStringList',
    'DOMRectReadOnly', 'DOMRectList', 'DOMRect', 'DOMQuad', 'DOMPointReadOnly', 'DOMPoint', 'DOMParser',
    'DOMMatrixReadOnly', 'DOMMatrix', 'DOMException', 'TrackEvent', 'SubmitEvent', 'FormDataEvent',
    'ImageBitmapRenderingContext', 'OffscreenCanvas', 'CustomElementRegistry', 'ElementInternals', 'DataTransfer',
    'DataTransferItemList', 'DataTransferItem', 'DragEvent', 'History', 'Location', 'PopStateEvent',
    'HashChangeEvent', 'PageTransitionEvent', 'BeforeUnloadEvent', 'ErrorEvent', 'PromiseRejectionEvent',
    'MessageEvent', 'EventSource', 'WebSocket', 'CloseEvent', 'Worker', 'WorkerNavigator', 'WorkerLocation',
    'Storage', 'sessionStorage', 'localStorage',
    'ApplicationCache', 'AudioTrack', 'AudioTrackList', 'BarProp', 'BeforeUnloadEvent', 'BroadcastChannel',
    'CanvasGradient', 'CanvasPattern', 'CanvasRenderingContext2D', 'CloseEvent', 'CustomElementRegistry',
    'DOMParser', 'DOMStringList', 'DOMStringMap', 'DataTransfer', 'DataTransferItem', 'DataTransferItemList',
    'DedicatedWorkerGlobalScope', 'Document', 'DragEvent', 'ElementInternals', 'ErrorEvent', 'EventSource',
    'External', 'FormDataEvent', 'HTMLAllCollection', 'HTMLAnchorElement', 'HTMLAreaElement', 'HTMLAudioElement',
    'HTMLBRElement', 'HTMLBaseElement', 'HTMLBodyElement', 'HTMLButtonElement', 'HTMLCanvasElement',
    'HTMLDListElement', 'HTMLDataElement', 'HTMLDataListElement', 'HTMLDetailsElement', 'HTMLDialogElement',
    'HTMLDirectoryElement', 'HTMLDivElement', 'HTMLElement', 'HTMLEmbedElement', 'HTMLFieldSetElement',
    'HTMLFontElement', 'HTMLFormControlsCollection', 'HTMLFormElement', 'HTMLFrameElement', 'HTMLFrameSetElement',
    'HTMLHRElement', 'HTMLHeadElement', 'HTMLHeadingElement', 'HTMLHtmlElement', 'HTMLIFrameElement',
    'HTMLImageElement', 'HTMLInputElement', 'HTMLLIElement', 'HTMLLabelElement', 'HTMLLegendElement',
    'HTMLLinkElement', 'HTMLMapElement', 'HTMLMarqueeElement', 'HTMLMediaElement', 'HTMLMenuElement',
    'HTMLMetaElement', 'HTMLMeterElement', 'HTMLModElement', 'HTMLOListElement', 'HTMLObjectElement',
    'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOptionsCollection', 'HTMLOutputElement',
    'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPictureElement', 'HTMLPreElement', 'HTMLProgressElement',
    'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement', 'HTMLSlotElement', 'HTMLSourceElement',
    'HTMLSpanElement', 'HTMLStyleElement', 'HTMLTableCaptionElement', 'HTMLTableCellElement', 'HTMLTableColElement',
    'HTMLTableElement', 'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTemplateElement',
    'HTMLTextAreaElement', 'HTMLTimeElement', 'HTMLTitleElement', 'HTMLTrackElement', 'HTMLUListElement',
    'HTMLUnknownElement', 'HTMLVideoElement', 'HashChangeEvent', 'History', 'ImageBitmap',
    'ImageBitmapRenderingContext', 'ImageData', 'Location', 'MediaError', 'MessageChannel', 'MessageEvent',
    'MessagePort', 'MimeType', 'MimeTypeArray', 'Navigator', 'OffscreenCanvas', 'OffscreenCanvasRenderingContext2D',
    'PageTransitionEvent', 'Path2D', 'Plugin', 'PluginArray', 'PopStateEvent', 'PromiseRejectionEvent',
    'RadioNodeList', 'SharedWorker', 'SharedWorkerGlobalScope', 'Storage', 'StorageEvent', 'SubmitEvent',
    'TextMetrics', 'TextTrack', 'TextTrackCue', 'TextTrackCueList', 'TextTrackList', 'TimeRanges', 'TrackEvent',
    'ValidityState', 'VideoTrack', 'VideoTrackList', 'WebSocket', 'Window', 'Worker', 'WorkerGlobalScope',
    'WorkerLocation', 'WorkerNavigator',
    'parent', 'frameElement'
  ]
  objects.forEach(o => html.add(o));
  names = names.filter(e => !html.has(e));
}

// https://fetch.spec.whatwg.org/
{
  let fetch = new Set();
  let objects = [
    'Headers', 'Body', 'Request'
  ]
  objects.forEach(o => fetch.add(o));
  names = names.filter(e => !fetch.has(e));
}

// https://storage.spec.whatwg.org/
{
  let api = new Set();
  let objects = [
    'StorageManager'
  ]
  objects.forEach(o => api.add(o));
  names = names.filter(e => !api.has(e));
}

// https://url.spec.whatwg.org/
{
  let url = new Set();
  let objects = [
    'URL', 'URLSearchParams',
  ]
  objects.forEach(o => url.add(o));
  names = names.filter(e => !url.has(e));
}

// https://streams.spec.whatwg.org/
{
  let streams = new Set();
  let objects = [
    'ReadableStream', 'ReadableStreamDefaultReader', 'ReadableStreamBYOBReader', 'ReadableStreamDefaultController',
    'ReadableByteStreamController', 'ReadableStreamBYOBRequest', 'WritableStream', 'WritableStreamDefaultWriter',
    'WritableStreamDefaultController', 'TransformStream', 'TransformStreamDefaultController',
    'ByteLengthQueuingStrategy', 'CountQueuingStrategy'
  ]
  objects.forEach(o => streams.add(o));
  names = names.filter(e => !streams.has(e));
}

// https://notifications.spec.whatwg.org/
{
  let notifications = new Set();
  let objects = [
    'Notification', 'NotificationEvent'
  ]
  objects.forEach(o => notifications.add(o));
  names = names.filter(e => !notifications.has(e));
}

// https://xhr.spec.whatwg.org/
{
  let xhr = new Set();
  let objects = [
    'XMLHttpRequestUpload', 'XMLHttpRequestEventTarget', 'XMLHttpRequest', 'FormData', 'ProgressEvent'
  ]
  objects.forEach(o => xhr.add(o));
  names = names.filter(e => !xhr.has(e));
}

// ECMA 262
{
  let js = new Set();
  let objects = ['BigInt', 'BigInt64Array', 'BigUint64Array', 'Infinity', 'NaN', 'undefined', 'eval', 'isFinite',
    'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent',
    'Array', 'Date', 'RegExp', 'Promise', 'Proxy', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Function', 'Boolean',
    'String', 'Number', 'Symbol', 'Object', 'Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError',
    'TypeError', 'URIError', 'ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'Float32Array', 'Float64Array',
    'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint16Array', 'Uint32Array', 'Uint8ClampedArray',
    'Atomics', 'JSON', 'Math', 'Reflect', 'escape', 'unescape', 'globalThis'
  ];
  objects.forEach(o => js.add(o));
  names = names.filter(e => !js.has(e));
}

// Node
{
  names = names.filter(e => {
    try {
      return !(window[e].prototype instanceof Node)
    } catch (err) {
      return true;
    }
  }).filter(e => e != 'Node')
}

//https://html.spec.whatwg.org/#window
{
  let windowprops = new Set();
  objects = ['window', 'self', 'document', 'name', 'location', 'history', 'customElements', 'locationbar', 'menubar',
    ' personalbar', 'scrollbars', 'statusbar', 'toolbar', 'status', 'close', 'closed', 'stop', 'focus', ' blur',
    'frames', 'length', 'top', 'opener', 'parent', 'frameElement', 'open', 'navigator', 'applicationCache', 'alert',
    'confirm', 'prompt', 'print', 'postMessage', 'console'
  ];
  objects.forEach(o => windowprops.add(o));
  names = names.filter(e => !windowprops.has(e));
}

console.log(names);
document.write(names.join('\', \''));