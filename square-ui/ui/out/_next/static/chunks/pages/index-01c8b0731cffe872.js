(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(4154);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4939:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ GradientBG; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3896);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
// @ts-nocheck



function GradientBG(param) {
    let { children } = param;
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [context, setContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [pixels, setPixels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function Color(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
        this.dir = Math.random() > 0.5 ? -1 : 1;
        this.toString = function() {
            return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
        };
    }
    function Pixel(x, y, w, h, color) {
        this.x = {
            c: x,
            min: 0,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.y = {
            c: y,
            min: 0,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.w = {
            c: w,
            min: 2,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.h = {
            c: h,
            min: 2,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.color = color;
        this.direction = Math.random() > 0.1 ? -1 : 1;
        this.velocity = (Math.random() * 100 + 100) * 0.01 * this.direction;
    }
    function updatePixel(pixel) {
        if (pixel.x.c <= pixel.x.min || pixel.x.c >= pixel.x.max) {
            pixel.x.dir *= -1;
        }
        if (pixel.y.c <= pixel.y.min || pixel.y.c >= pixel.y.max) {
            pixel.y.dir *= -1;
        }
        if (pixel.w.c <= pixel.w.min || pixel.w.c >= pixel.w.max) {
            pixel.w.dir *= -1;
        }
        if (pixel.h.c <= pixel.h.min || pixel.h.c >= pixel.h.max) {
            pixel.h.dir *= -1;
        }
        if (pixel.color.a <= 0 || pixel.color.a >= 0.75) {
            pixel.color.dir *= -1;
        }
        pixel.x.c += 0.005 * pixel.x.dir;
        pixel.y.c += 0.005 * pixel.y.dir;
        pixel.w.c += 0.005 * pixel.w.dir;
        pixel.h.c += 0.005 * pixel.h.dir;
    }
    function renderPixel(pixel) {
        context.restore();
        context.fillStyle = pixel.color.toString();
        context.fillRect(pixel.x.c, pixel.y.c, pixel.w.c, pixel.h.c);
    }
    function paint() {
        if (canvasRef.current) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            for(let i = 0; i < pixels.length; i++){
                updatePixel(pixels[i]);
                renderPixel(pixels[i]);
            }
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            const currentPixels = [
                new Pixel(1, 1, 3, 4, new Color(252, 70, 67, 0.8)),
                new Pixel(0, 0, 1, 1, new Color(0, 0, 98, 1)),
                new Pixel(0, 3, 2, 2, new Color(11, 100, 62, 0.8)),
                new Pixel(4, 0, 4, 3, new Color(190, 94, 75, 0.8)),
                new Pixel(3, 1, 1, 2, new Color(324, 98, 50, 0.1))
            ];
            setPixels(currentPixels);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let animationFrameId;
        if (context) {
            const animate = ()=>{
                paint();
                animationFrameId = window.requestAnimationFrame(animate);
            };
            animate();
        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [
        paint,
        pixels,
        context
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().background),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().backgroundGradients),
                    width: "6",
                    height: "6",
                    ref: canvasRef
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 4154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7594);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8155);
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9466);
/* harmony import */ var _components_GradientBG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4939);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3896);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__, o1js__WEBPACK_IMPORTED_MODULE_4__]);
([_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__, o1js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







let transactionFee = 0.1;
const ZKAPP_ADDRESS = "B62qpiRX8e25Jf9QJvTmtwEY7QdC9RbnNdv3QkGWkVNg7no4tGev8St";
function Home() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        currentNum: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false
    });
    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [transactionlink, setTransactionLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // -------------------------------------------------------
    // Do Setup
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function timeout(seconds) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, seconds * 1000);
            });
        }
        (async ()=>{
            if (!state.hasBeenSetup) {
                setDisplayText("Loading web worker...");
                console.log("Loading web worker...");
                const zkappWorkerClient = new _zkappWorkerClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
                await timeout(5);
                setDisplayText("Done loading web worker");
                console.log("Done loading web worker");
                await zkappWorkerClient.setActiveInstanceToBerkeley();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = o1js__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey */ .nh.fromBase58(publicKeyBase58);
                console.log("Using key:".concat(publicKey.toBase58()));
                setDisplayText("Using key:".concat(publicKey.toBase58()));
                setDisplayText("Checking if fee payer account exists...");
                console.log("Checking if fee payer account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                console.log("Compiling zkApp...");
                setDisplayText("Compiling zkApp...");
                await zkappWorkerClient.compileContract();
                console.log("zkApp compiled");
                setDisplayText("zkApp compiled...");
                const zkappPublicKey = o1js__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey */ .nh.fromBase58(ZKAPP_ADDRESS);
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                console.log("Getting zkApp state...");
                setDisplayText("Getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const currentNum = await zkappWorkerClient.getNum();
                console.log("Current state in zkApp: ".concat(currentNum.toString()));
                setDisplayText("");
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    currentNum
                });
            }
        })();
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (state.hasBeenSetup && !state.accountExists) {
                for(;;){
                    setDisplayText("Checking if fee payer account exists...");
                    console.log("Checking if fee payer account exists...");
                    const res = await state.zkappWorkerClient.fetchAccount({
                        publicKey: state.publicKey
                    });
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                }
                setState({
                    ...state,
                    accountExists: true
                });
            }
        })();
    }, [
        state.hasBeenSetup
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onSendTransaction = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        setDisplayText("Creating a transaction...");
        console.log("Creating a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        await state.zkappWorkerClient.createUpdateTransaction({
            num: Number(document.getElementById("num").value)
        });
        setDisplayText("Creating proof...");
        console.log("Creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("Requesting send transaction...");
        setDisplayText("Requesting send transaction...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        setDisplayText("Getting transaction JSON...");
        console.log("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        const transactionLink = "https://berkeley.minaexplorer.com/transaction/".concat(hash);
        console.log("View transaction at ".concat(transactionLink));
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentNum = async ()=>{
        console.log("Getting zkApp state...");
        setDisplayText("Getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getNum();
        setState({
            ...state,
            currentNum
        });
        console.log("Current state in zkApp: ".concat(currentNum.toString()));
        setDisplayText("");
    };
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            children: "Install Auro wallet here"
        });
        hasWallet = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Could not find a wallet. ",
                auroLinkElem
            ]
        });
    }
    const stepDisplay = transactionlink ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: displayText,
        target: "_blank",
        rel: "noreferrer",
        children: "View transaction"
    }) : displayText;
    let setup = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().start),
        style: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingBottom: "5rem"
        },
        children: [
            stepDisplay,
            hasWallet
        ]
    });
    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        paddingRight: "1rem"
                    },
                    children: "Account does not exist."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Visit the faucet to fund this fee payer account"
                })
            ]
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        mainContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    children: "Mina Ecosystem 101 - Square Demo"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().center),
                    style: {
                        padding: 0
                    },
                    children: [
                        "Current state in zkApp: ",
                        state.currentNum.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().center),
                    style: {
                        padding: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
                        onClick: onRefreshCurrentNum,
                        children: "Get Latest State"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().center),
                    style: {
                        padding: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
                        id: "num",
                        type: "text",
                        placeholder: "Enter square value"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().center),
                    style: {
                        padding: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
                        onClick: onSendTransaction,
                        disabled: state.creatingTransaction,
                        children: "Send Transaction"
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GradientBG_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
            style: {
                padding: 0
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().center),
                style: {
                    padding: 0
                },
                children: [
                    setup,
                    accountDoesNotExist,
                    mainContent
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ZkappWorkerClient; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([o1js__WEBPACK_IMPORTED_MODULE_0__]);
o1js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getNum() {
        const result = await this._call("getNum", {});
        return o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN.fromJSON(JSON.parse(result));
    }
    createUpdateTransaction(param) {
        let { num } = param;
        return this._call("createUpdateTransaction", {
            square: num
        });
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(419), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3896:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__2uIek","background":"Home_background__CTycG","backgroundGradients":"Home_backgroundGradients__VUGb4","container":"Home_container__9OuOz","tagline":"Home_tagline__Jw01K","start":"Home_start__ELciH","code":"Home_code__BZK8z","grid":"Home_grid__vo_ES","card":"Home_card__HIlp_","center":"Home_center__Y_rV4","logo":"Home_logo__ZEOng","content":"Home_content__Qnbja"};

/***/ }),

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [674,774,888,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);