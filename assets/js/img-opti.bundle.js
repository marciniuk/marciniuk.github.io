var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) =>
  typeof require !== "undefined"
    ? require
    : typeof Proxy !== "undefined"
      ? new Proxy(x, {
          get: (a, b) => (typeof require !== "undefined" ? require : a)[b],
        })
      : x)(function (x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res, err) =>
  function __init() {
    if (err) throw err[0];
    try {
      return (fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res);
    } catch (e) {
      throw ((err = [e]), e);
    }
  };
var __commonJS = (cb, mod) =>
  function __require2() {
    try {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod,
          ),
        mod.exports
      );
    } catch (e) {
      throw ((mod = 0), e);
    }
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod,
  )
);

// node_modules/@jsquash/webp/codec/enc/webp_enc_simd.js
var webp_enc_simd_exports = {};
__export(webp_enc_simd_exports, {
  default: () => webp_enc_simd_default,
});
var Module, webp_enc_simd_default;
var init_webp_enc_simd = __esm({
  "node_modules/@jsquash/webp/codec/enc/webp_enc_simd.js"() {
    Module = (() => {
      var _scriptDir = import.meta.url;
      return function (Module9 = {}) {
        var Module9 = typeof Module9 != "undefined" ? Module9 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module9["ready"] = new Promise(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          caches.default !== void 0;
        if (isRunningInCloudFlareWorkers3) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => (document.title = title);
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.warn.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var noExitRuntime = Module9["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap2, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module9["onAbort"]) {
            Module9["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "webp_enc_simd.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("webp_enc_simd.wasm", import.meta.url).href;
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                .catch(function () {
                  return getBinary(binaryFile);
                });
            }
          }
          return Promise.resolve().then(function () {
            return getBinary(binaryFile);
          });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module9["asm"] = exports;
            wasmMemory = Module9["asm"]["x"];
            updateMemoryViews();
            wasmTable = Module9["asm"]["D"];
            addOnInit(Module9["asm"]["y"]);
            removeRunDependency("wasm-instantiate");
            return exports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            HEAPU32[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return HEAPU32[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            HEAPU32[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return HEAPU32[(this.ptr + 8) >> 2];
          };
          this.set_refcount = function (refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            HEAP8[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return HEAP8[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return HEAP8[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function () {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function () {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return HEAPU32[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return {
            [name]: function () {
              return body.apply(this, arguments);
            },
          }[name];
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) => {
                    return getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    );
                  },
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: function (ptr) {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: function (destructors, o) {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(
                          'Missing field:  "' + fieldName + '"',
                        );
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: simpleReadValueFromPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        }
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (pointer) {
              var heap2;
              if (size === 1) {
                heap2 = HEAP8;
              } else if (size === 2) {
                heap2 = HEAP16;
              } else if (size === 4) {
                heap2 = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap2[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: void 0 },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module9["count_emval_handles"] = count_emval_handles;
          Module9["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          },
        };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function (destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function () {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(
                  arguments.length,
                )
              ) {
                throwBindingError(
                  "Function '" +
                    humanName +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    proto[methodName].overloadTable +
                    ")!",
                );
              }
              return proto[methodName].overloadTable[arguments.length].apply(
                this,
                arguments,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(
                "Cannot register public name '" + name + "' twice",
              );
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                "Cannot register multiple overloads of a function with the same number of arguments (" +
                  numArguments +
                  ")!",
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        }
        function enumReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return function (pointer) {
                var heap2 = signed ? HEAP8 : HEAPU8;
                return this["fromWireType"](heap2[pointer]);
              };
            case 1:
              return function (pointer) {
                var heap2 = signed ? HEAP16 : HEAPU16;
                return this["fromWireType"](heap2[pointer >> 1]);
              };
            case 2:
              return function (pointer) {
                var heap2 = signed ? HEAP32 : HEAPU32;
                return this["fromWireType"](heap2[pointer >> 2]);
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_enum(rawType, name, size, isSigned) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          function ctor() {}
          ctor.values = {};
          registerType(rawType, {
            name,
            constructor: ctor,
            fromWireType: function (c) {
              return this.constructor.values[c];
            },
            toWireType: function (destructors, c) {
              return c.value;
            },
            argPackAdvance: 8,
            readValueFromPointer: enumReadValueFromPointer(
              name,
              shift,
              isSigned,
            ),
            destructorFunction: null,
          });
          exposePublicSymbol(name, ctor);
        }
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              humanName + " has unknown type " + getTypeName(rawType),
            );
          }
          return impl;
        }
        function __embind_register_enum_value(rawEnumType, name, enumValue) {
          var enumType = requireRegisteredType(rawEnumType, "enum");
          name = readLatin1String(name);
          var Enum = enumType.constructor;
          var Value = Object.create(enumType.constructor.prototype, {
            value: { value: enumValue },
            constructor: {
              value: createNamedFunction(
                enumType.name + "_" + name,
                function () {},
              ),
            },
          });
          Enum.values[enumValue] = Value;
          Enum[name] = Value;
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              return value;
            },
            toWireType: function (destructors, value) {
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          return function () {
            if (arguments.length !== expectedArgCount) {
              throwBindingError(
                "function " +
                  humanName +
                  " called with " +
                  arguments.length +
                  " arguments, expected " +
                  expectedArgCount +
                  " args!",
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i2 = 0; i2 < expectedArgCount; ++i2) {
              argsWired[i2] = argTypes[i2 + 2]["toWireType"](
                destructors,
                arguments[i2],
              );
              invokerFuncArgs.push(argsWired[i2]);
            }
            var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i3 = isClassMethodFunc ? 1 : 2;
                  i3 < argTypes.length;
                  i3++
                ) {
                  var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                  if (argTypes[i3].destructorFunction !== null) {
                    argTypes[i3].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[(firstElement + i * 4) >> 2]);
          }
          return array;
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module9["dynCall_" + sig];
          return args && args.length
            ? f.apply(null, [ptr].concat(args))
            : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function () {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              "unknown function pointer with signature " +
                signature +
                ": " +
                rawFunction,
            );
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            message + ": " + unboundTypes.map(getTypeName).join([", "]),
          );
        }
        function __embind_register_function(
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                "Cannot call " + name + " due to unbound types",
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, function (argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return HEAP8[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return HEAPU8[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return HEAP16[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return HEAPU16[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return HEAP32[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return HEAPU32[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap2 = HEAPU32;
            var size = heap2[handle];
            var data = heap2[handle + 1];
            return new TA(heap2.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function UTF16ToString(ptr, maxBytesToRead) {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError(
                  "Cannot pass non-string to C++ string type " + name,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function __embind_register_value_object(
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        }
        function __embind_register_value_object_field(
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: function () {
              return void 0;
            },
            toWireType: function (destructors, o) {
              return void 0;
            },
          });
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function craftEmvalAllocator(argCount) {
          var argsList = new Array(argCount + 1);
          return function (constructor, argTypes, args) {
            argsList[0] = constructor;
            for (var i = 0; i < argCount; ++i) {
              var argType = requireRegisteredType(
                HEAPU32[(argTypes + i * 4) >> 2],
                "parameter " + i,
              );
              argsList[i + 1] = argType["readValueFromPointer"](args);
              args += argType["argPackAdvance"];
            }
            var obj = new (constructor.bind.apply(constructor, argsList))();
            return Emval.toHandle(obj);
          };
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          try {
            wasmMemory.grow((size - b.byteLength + 65535) >>> 16);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        InternalError = Module9["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var wasmImports = {
          k: ___cxa_throw,
          m: __embind_finalize_value_object,
          o: __embind_register_bigint,
          t: __embind_register_bool,
          s: __embind_register_emval,
          q: __embind_register_enum,
          d: __embind_register_enum_value,
          h: __embind_register_float,
          f: __embind_register_function,
          c: __embind_register_integer,
          b: __embind_register_memory_view,
          i: __embind_register_std_string,
          e: __embind_register_std_wstring,
          n: __embind_register_value_object,
          a: __embind_register_value_object_field,
          u: __embind_register_void,
          j: __emval_decref,
          w: __emval_get_global,
          l: __emval_incref,
          v: __emval_new,
          g: _abort,
          r: _emscripten_memcpy_big,
          p: _emscripten_resize_heap,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = function () {
          return (___wasm_call_ctors = Module9["asm"]["y"]).apply(
            null,
            arguments,
          );
        };
        var _malloc = function () {
          return (_malloc = Module9["asm"]["z"]).apply(null, arguments);
        };
        var _free = function () {
          return (_free = Module9["asm"]["A"]).apply(null, arguments);
        };
        var ___getTypeName = (Module9["___getTypeName"] = function () {
          return (___getTypeName = Module9["___getTypeName"] =
            Module9["asm"]["B"]).apply(null, arguments);
        });
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = function () {
          return (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            Module9["asm"]["C"]).apply(null, arguments);
        });
        var ___errno_location = function () {
          return (___errno_location = Module9["asm"]["__errno_location"]).apply(
            null,
            arguments,
          );
        };
        var ___cxa_is_pointer_type = function () {
          return (___cxa_is_pointer_type = Module9["asm"]["E"]).apply(
            null,
            arguments,
          );
        };
        var dynCall_jiiii = (Module9["dynCall_jiiii"] = function () {
          return (dynCall_jiiii = Module9["dynCall_jiiii"] =
            Module9["asm"]["F"]).apply(null, arguments);
        });
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return Module9.ready;
      };
    })();
    webp_enc_simd_default = Module;
  },
});

// node_modules/@jsquash/webp/codec/enc/webp_enc.js
var webp_enc_exports = {};
__export(webp_enc_exports, {
  default: () => webp_enc_default,
});
var Module2, webp_enc_default;
var init_webp_enc = __esm({
  "node_modules/@jsquash/webp/codec/enc/webp_enc.js"() {
    Module2 = (() => {
      var _scriptDir = import.meta.url;
      return function (Module9 = {}) {
        var Module9 = typeof Module9 != "undefined" ? Module9 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module9["ready"] = new Promise(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          globalThis.caches &&
          globalThis.caches.default !== void 0;
        const isRunningInNode5 =
          typeof process === "object" &&
          process.release &&
          process.release.name === "node";
        if (isRunningInCloudFlareWorkers3 || isRunningInNode5) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (typeof self !== "undefined" && self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => (document.title = title);
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.warn.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var noExitRuntime = Module9["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap2, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module9["onAbort"]) {
            Module9["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "webp_enc.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("webp_enc.wasm", import.meta.url).href;
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                .catch(function () {
                  return getBinary(binaryFile);
                });
            }
          }
          return Promise.resolve().then(function () {
            return getBinary(binaryFile);
          });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module9["asm"] = exports;
            wasmMemory = Module9["asm"]["x"];
            updateMemoryViews();
            wasmTable = Module9["asm"]["D"];
            addOnInit(Module9["asm"]["y"]);
            removeRunDependency("wasm-instantiate");
            return exports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            HEAPU32[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return HEAPU32[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            HEAPU32[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return HEAPU32[(this.ptr + 8) >> 2];
          };
          this.set_refcount = function (refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            HEAP8[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return HEAP8[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return HEAP8[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function () {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function () {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return HEAPU32[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return {
            [name]: function () {
              return body.apply(this, arguments);
            },
          }[name];
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) => {
                    return getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    );
                  },
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: function (ptr) {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: function (destructors, o) {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(
                          'Missing field:  "' + fieldName + '"',
                        );
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: simpleReadValueFromPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        }
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (pointer) {
              var heap2;
              if (size === 1) {
                heap2 = HEAP8;
              } else if (size === 2) {
                heap2 = HEAP16;
              } else if (size === 4) {
                heap2 = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap2[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: void 0 },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module9["count_emval_handles"] = count_emval_handles;
          Module9["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          },
        };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function (destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function () {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(
                  arguments.length,
                )
              ) {
                throwBindingError(
                  "Function '" +
                    humanName +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    proto[methodName].overloadTable +
                    ")!",
                );
              }
              return proto[methodName].overloadTable[arguments.length].apply(
                this,
                arguments,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(
                "Cannot register public name '" + name + "' twice",
              );
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                "Cannot register multiple overloads of a function with the same number of arguments (" +
                  numArguments +
                  ")!",
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        }
        function enumReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return function (pointer) {
                var heap2 = signed ? HEAP8 : HEAPU8;
                return this["fromWireType"](heap2[pointer]);
              };
            case 1:
              return function (pointer) {
                var heap2 = signed ? HEAP16 : HEAPU16;
                return this["fromWireType"](heap2[pointer >> 1]);
              };
            case 2:
              return function (pointer) {
                var heap2 = signed ? HEAP32 : HEAPU32;
                return this["fromWireType"](heap2[pointer >> 2]);
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_enum(rawType, name, size, isSigned) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          function ctor() {}
          ctor.values = {};
          registerType(rawType, {
            name,
            constructor: ctor,
            fromWireType: function (c) {
              return this.constructor.values[c];
            },
            toWireType: function (destructors, c) {
              return c.value;
            },
            argPackAdvance: 8,
            readValueFromPointer: enumReadValueFromPointer(
              name,
              shift,
              isSigned,
            ),
            destructorFunction: null,
          });
          exposePublicSymbol(name, ctor);
        }
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              humanName + " has unknown type " + getTypeName(rawType),
            );
          }
          return impl;
        }
        function __embind_register_enum_value(rawEnumType, name, enumValue) {
          var enumType = requireRegisteredType(rawEnumType, "enum");
          name = readLatin1String(name);
          var Enum = enumType.constructor;
          var Value = Object.create(enumType.constructor.prototype, {
            value: { value: enumValue },
            constructor: {
              value: createNamedFunction(
                enumType.name + "_" + name,
                function () {},
              ),
            },
          });
          Enum.values[enumValue] = Value;
          Enum[name] = Value;
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              return value;
            },
            toWireType: function (destructors, value) {
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          return function () {
            if (arguments.length !== expectedArgCount) {
              throwBindingError(
                "function " +
                  humanName +
                  " called with " +
                  arguments.length +
                  " arguments, expected " +
                  expectedArgCount +
                  " args!",
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i2 = 0; i2 < expectedArgCount; ++i2) {
              argsWired[i2] = argTypes[i2 + 2]["toWireType"](
                destructors,
                arguments[i2],
              );
              invokerFuncArgs.push(argsWired[i2]);
            }
            var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i3 = isClassMethodFunc ? 1 : 2;
                  i3 < argTypes.length;
                  i3++
                ) {
                  var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                  if (argTypes[i3].destructorFunction !== null) {
                    argTypes[i3].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[(firstElement + i * 4) >> 2]);
          }
          return array;
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module9["dynCall_" + sig];
          return args && args.length
            ? f.apply(null, [ptr].concat(args))
            : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function () {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              "unknown function pointer with signature " +
                signature +
                ": " +
                rawFunction,
            );
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            message + ": " + unboundTypes.map(getTypeName).join([", "]),
          );
        }
        function __embind_register_function(
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                "Cannot call " + name + " due to unbound types",
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, function (argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return HEAP8[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return HEAPU8[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return HEAP16[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return HEAPU16[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return HEAP32[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return HEAPU32[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap2 = HEAPU32;
            var size = heap2[handle];
            var data = heap2[handle + 1];
            return new TA(heap2.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function UTF16ToString(ptr, maxBytesToRead) {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError(
                  "Cannot pass non-string to C++ string type " + name,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function __embind_register_value_object(
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        }
        function __embind_register_value_object_field(
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: function () {
              return void 0;
            },
            toWireType: function (destructors, o) {
              return void 0;
            },
          });
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function craftEmvalAllocator(argCount) {
          var argsList = new Array(argCount + 1);
          return function (constructor, argTypes, args) {
            argsList[0] = constructor;
            for (var i = 0; i < argCount; ++i) {
              var argType = requireRegisteredType(
                HEAPU32[(argTypes + i * 4) >> 2],
                "parameter " + i,
              );
              argsList[i + 1] = argType["readValueFromPointer"](args);
              args += argType["argPackAdvance"];
            }
            var obj = new (constructor.bind.apply(constructor, argsList))();
            return Emval.toHandle(obj);
          };
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          try {
            wasmMemory.grow((size - b.byteLength + 65535) >>> 16);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        InternalError = Module9["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var wasmImports = {
          k: ___cxa_throw,
          m: __embind_finalize_value_object,
          o: __embind_register_bigint,
          t: __embind_register_bool,
          s: __embind_register_emval,
          q: __embind_register_enum,
          d: __embind_register_enum_value,
          h: __embind_register_float,
          f: __embind_register_function,
          c: __embind_register_integer,
          b: __embind_register_memory_view,
          i: __embind_register_std_string,
          e: __embind_register_std_wstring,
          n: __embind_register_value_object,
          a: __embind_register_value_object_field,
          u: __embind_register_void,
          j: __emval_decref,
          w: __emval_get_global,
          l: __emval_incref,
          v: __emval_new,
          g: _abort,
          r: _emscripten_memcpy_big,
          p: _emscripten_resize_heap,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = function () {
          return (___wasm_call_ctors = Module9["asm"]["y"]).apply(
            null,
            arguments,
          );
        };
        var _malloc = function () {
          return (_malloc = Module9["asm"]["z"]).apply(null, arguments);
        };
        var _free = function () {
          return (_free = Module9["asm"]["A"]).apply(null, arguments);
        };
        var ___getTypeName = (Module9["___getTypeName"] = function () {
          return (___getTypeName = Module9["___getTypeName"] =
            Module9["asm"]["B"]).apply(null, arguments);
        });
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = function () {
          return (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            Module9["asm"]["C"]).apply(null, arguments);
        });
        var ___errno_location = function () {
          return (___errno_location = Module9["asm"]["__errno_location"]).apply(
            null,
            arguments,
          );
        };
        var ___cxa_is_pointer_type = function () {
          return (___cxa_is_pointer_type = Module9["asm"]["E"]).apply(
            null,
            arguments,
          );
        };
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return Module9.ready;
      };
    })();
    webp_enc_default = Module2;
  },
});

// node_modules/@jsquash/avif/codec/enc/avif_enc_mt.js
var avif_enc_mt_exports = {};
__export(avif_enc_mt_exports, {
  default: () => avif_enc_mt_default,
});
var Module3, avif_enc_mt_default;
var init_avif_enc_mt = __esm({
  "node_modules/@jsquash/avif/codec/enc/avif_enc_mt.js"() {
    Module3 = (() => {
      var _scriptDir = import.meta.url;
      return function (moduleArg = {}) {
        function GROWABLE_HEAP_I8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP16;
        }
        function GROWABLE_HEAP_U16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU16;
        }
        function GROWABLE_HEAP_I32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP32;
        }
        function GROWABLE_HEAP_U32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU32;
        }
        function GROWABLE_HEAP_F32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF64;
        }
        var Module9 = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          globalThis.caches &&
          globalThis.caches.default !== void 0;
        const isRunningInNode5 =
          typeof process === "object" &&
          process.release &&
          process.release.name === "node";
        if (isRunningInCloudFlareWorkers3 || isRunningInNode5) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (typeof self !== "undefined" && self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var ENVIRONMENT_IS_PTHREAD = Module9["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.startsWith("blob:")) {
            scriptDirectory = "";
          } else {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.error.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var INITIAL_MEMORY = Module9["INITIAL_MEMORY"] || 16777216;
        if (ENVIRONMENT_IS_PTHREAD) {
          wasmMemory = Module9["wasmMemory"];
        } else {
          if (Module9["wasmMemory"]) {
            wasmMemory = Module9["wasmMemory"];
          } else {
            wasmMemory = new WebAssembly.Memory({
              initial: INITIAL_MEMORY / 65536,
              maximum: 2147483648 / 65536,
              shared: true,
            });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
              err(
                "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
              );
              if (ENVIRONMENT_IS_NODE) {
                err(
                  "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
                );
              }
              throw Error("bad memory");
            }
          }
        }
        updateMemoryViews();
        INITIAL_MEMORY = wasmMemory.buffer.byteLength;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD) return;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (ENVIRONMENT_IS_PTHREAD) return;
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          Module9["monitorRunDependencies"]?.(runDependencies);
        }
        function removeRunDependency(id) {
          runDependencies--;
          Module9["monitorRunDependencies"]?.(runDependencies);
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          Module9["onAbort"]?.(what);
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "avif_enc_mt.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("avif_enc_mt.wasm", import.meta.url).href;
        }
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then((response) => {
                  if (!response["ok"]) {
                    throw `failed to load wasm binary file at '${binaryFile}'`;
                  }
                  return response["arrayBuffer"]();
                })
                .catch(() => getBinarySync(binaryFile));
            }
          }
          return Promise.resolve().then(() => getBinarySync(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then((binary) => WebAssembly.instantiate(binary, imports))
            .then(receiver, (reason) => {
              err(`failed to asynchronously prepare wasm: ${reason}`);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              (response) => {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          }
          return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            wasmExports = instance.exports;
            registerTLSInit(wasmExports["ia"]);
            wasmTable = wasmExports["ka"];
            addOnInit(wasmExports["ca"]);
            wasmModule = module;
            removeRunDependency("wasm-instantiate");
            return wasmExports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"], result["module"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err(`Module.instantiateWasm callback failed with error: ${e}`);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        var ASM_CONSTS = {
          618220: () => {
            throw new Error(
              "Invalid bit depth. Supported values are 8, 10, or 12.",
            );
          },
        };
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = `Program terminated with exit(${status})`;
          this.status = status;
        }
        var terminateWorker = (worker) => {
          worker.terminate();
          worker.onmessage = (e) => {};
        };
        var killThread = (pthread_ptr) => {
          var worker = PThread.pthreads[pthread_ptr];
          delete PThread.pthreads[pthread_ptr];
          terminateWorker(worker);
          __emscripten_thread_free_data(pthread_ptr);
          PThread.runningWorkers.splice(
            PThread.runningWorkers.indexOf(worker),
            1,
          );
          worker.pthread_ptr = 0;
        };
        var cancelThread = (pthread_ptr) => {
          var worker = PThread.pthreads[pthread_ptr];
          worker.postMessage({ cmd: "cancel" });
        };
        var cleanupThread = (pthread_ptr) => {
          var worker = PThread.pthreads[pthread_ptr];
          PThread.returnWorkerToPool(worker);
        };
        var spawnThread = (threadParams) => {
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          PThread.runningWorkers.push(worker);
          PThread.pthreads[threadParams.pthread_ptr] = worker;
          worker.pthread_ptr = threadParams.pthread_ptr;
          var msg = {
            cmd: "run",
            start_routine: threadParams.startRoutine,
            arg: threadParams.arg,
            pthread_ptr: threadParams.pthread_ptr,
          };
          worker.postMessage(msg, threadParams.transferList);
          return 0;
        };
        var runtimeKeepaliveCounter = 0;
        var keepRuntimeAlive = () =>
          noExitRuntime || runtimeKeepaliveCounter > 0;
        var stackSave = () => _emscripten_stack_get_current();
        var stackRestore = (val) => __emscripten_stack_restore(val);
        var withStackSave = (f) => {
          var stack = stackSave();
          var ret = f();
          stackRestore(stack);
          return ret;
        };
        var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
        var convertI32PairToI53Checked = (lo, hi) =>
          (hi + 2097152) >>> 0 < 4194305 - !!lo
            ? (lo >>> 0) + hi * 4294967296
            : NaN;
        var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) =>
          withStackSave(() => {
            var serializedNumCallArgs = callArgs.length;
            var args = stackAlloc(serializedNumCallArgs * 8);
            var b = args >> 3;
            for (var i = 0; i < callArgs.length; i++) {
              var arg = callArgs[i];
              GROWABLE_HEAP_F64()[b + i] = arg;
            }
            return __emscripten_run_on_main_thread_js(
              funcIndex,
              emAsmAddr,
              serializedNumCallArgs,
              args,
              sync,
            );
          });
        function _proc_exit(code) {
          if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(0, 0, 1, code);
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            Module9["onExit"]?.(code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        var exitJS = (status, implicit) => {
          EXITSTATUS = status;
          if (ENVIRONMENT_IS_PTHREAD) {
            exitOnMainThread(status);
            throw "unwind";
          }
          _proc_exit(status);
        };
        var _exit = exitJS;
        var handleException = (e) => {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        };
        var PThread = {
          unusedWorkers: [],
          runningWorkers: [],
          tlsInitFunctions: [],
          pthreads: {},
          init() {
            if (ENVIRONMENT_IS_PTHREAD) {
              PThread.initWorker();
            } else {
              PThread.initMainThread();
            }
          },
          initMainThread() {
            var pthreadPoolSize = navigator.hardwareConcurrency;
            while (pthreadPoolSize--) {
              PThread.allocateUnusedWorker();
            }
            addOnPreRun(() => {
              addRunDependency("loading-workers");
              PThread.loadWasmModuleToAllWorkers(() =>
                removeRunDependency("loading-workers"),
              );
            });
          },
          initWorker() {
            noExitRuntime = false;
          },
          setExitStatus: (status) => (EXITSTATUS = status),
          terminateAllThreads__deps: ["$terminateWorker"],
          terminateAllThreads: () => {
            for (var worker of PThread.runningWorkers) {
              terminateWorker(worker);
            }
            for (var worker of PThread.unusedWorkers) {
              terminateWorker(worker);
            }
            PThread.unusedWorkers = [];
            PThread.runningWorkers = [];
            PThread.pthreads = [];
          },
          returnWorkerToPool: (worker) => {
            var pthread_ptr = worker.pthread_ptr;
            delete PThread.pthreads[pthread_ptr];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(
              PThread.runningWorkers.indexOf(worker),
              1,
            );
            worker.pthread_ptr = 0;
            __emscripten_thread_free_data(pthread_ptr);
          },
          receiveObjectTransfer(data) {},
          threadInitTLS() {
            PThread.tlsInitFunctions.forEach((f) => f());
          },
          loadWasmModuleToWorker: (worker) =>
            new Promise((onFinishedLoading) => {
              worker.onmessage = (e) => {
                var d = e["data"];
                var cmd = d["cmd"];
                if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                  var targetWorker = PThread.pthreads[d["targetThread"]];
                  if (targetWorker) {
                    targetWorker.postMessage(d, d["transferList"]);
                  } else {
                    err(
                      `Internal error! Worker sent a message "${cmd}" to target pthread ${d["targetThread"]}, but that thread no longer exists!`,
                    );
                  }
                  return;
                }
                if (cmd === "checkMailbox") {
                  checkMailbox();
                } else if (cmd === "spawnThread") {
                  spawnThread(d);
                } else if (cmd === "cleanupThread") {
                  cleanupThread(d["thread"]);
                } else if (cmd === "killThread") {
                  killThread(d["thread"]);
                } else if (cmd === "cancelThread") {
                  cancelThread(d["thread"]);
                } else if (cmd === "loaded") {
                  worker.loaded = true;
                  onFinishedLoading(worker);
                } else if (cmd === "alert") {
                  alert(`Thread ${d["threadId"]}: ${d["text"]}`);
                } else if (d.target === "setimmediate") {
                  worker.postMessage(d);
                } else if (cmd === "callHandler") {
                  Module9[d["handler"]](...d["args"]);
                } else if (cmd) {
                  err(`worker sent an unknown command ${cmd}`);
                }
              };
              worker.onerror = (e) => {
                var message = "worker sent an error!";
                err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);
                throw e;
              };
              var handlers = [];
              var knownHandlers = ["onExit", "onAbort", "print", "printErr"];
              for (var handler of knownHandlers) {
                if (Module9.hasOwnProperty(handler)) {
                  handlers.push(handler);
                }
              }
              worker.postMessage({
                cmd: "load",
                handlers: handlers,
                urlOrBlob: Module9["mainScriptUrlOrBlob"],
                wasmMemory: wasmMemory,
                wasmModule: wasmModule,
              });
            }),
          loadWasmModuleToAllWorkers(onMaybeReady) {
            if (ENVIRONMENT_IS_PTHREAD) {
              return onMaybeReady();
            }
            let pthreadPoolReady = Promise.all(
              PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker),
            );
            pthreadPoolReady.then(onMaybeReady);
          },
          allocateUnusedWorker() {
            var worker;
            if (!Module9["locateFile"]) {
              worker = new Worker(
                new URL("avif_enc_mt.worker.mjs", import.meta.url),
                { type: "module" },
              );
            } else {
              var pthreadMainJs = locateFile("avif_enc_mt.worker.mjs");
              worker = new Worker(pthreadMainJs, { type: "module" });
            }
            PThread.unusedWorkers.push(worker);
          },
          getNewWorker() {
            if (PThread.unusedWorkers.length == 0) {
              PThread.allocateUnusedWorker();
              PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
            }
            return PThread.unusedWorkers.pop();
          },
        };
        Module9["PThread"] = PThread;
        var callRuntimeCallbacks = (callbacks) => {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        };
        var establishStackSpace = () => {
          var pthread_ptr = _pthread_self();
          var stackHigh = GROWABLE_HEAP_U32()[(pthread_ptr + 52) >> 2];
          var stackSize = GROWABLE_HEAP_U32()[(pthread_ptr + 56) >> 2];
          var stackLow = stackHigh - stackSize;
          _emscripten_stack_set_limits(stackHigh, stackLow);
          stackRestore(stackHigh);
        };
        Module9["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(1, 0, 0, returnCode);
          _exit(returnCode);
        }
        var wasmTable;
        var getWasmTableEntry = (funcPtr) => wasmTable.get(funcPtr);
        var invokeEntryPoint = (ptr, arg) => {
          runtimeKeepaliveCounter = 0;
          var result = getWasmTableEntry(ptr)(arg);
          function finish(result2) {
            if (keepRuntimeAlive()) {
              PThread.setExitStatus(result2);
            } else {
              __emscripten_thread_exit(result2);
            }
          }
          finish(result);
        };
        Module9["invokeEntryPoint"] = invokeEntryPoint;
        var noExitRuntime = Module9["noExitRuntime"] || true;
        var registerTLSInit = (tlsInitFunc) =>
          PThread.tlsInitFunctions.push(tlsInitFunc);
        var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        };
        var UTF8ToString = (ptr, maxBytesToRead) =>
          ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
        var ___assert_fail = (condition, filename, line, func) => {
          abort(
            `Assertion failed: ${UTF8ToString(condition)}, at: ` +
              [
                filename ? UTF8ToString(filename) : "unknown filename",
                line,
                func ? UTF8ToString(func) : "unknown function",
              ],
          );
        };
        var ___emscripten_init_main_thread_js = (tb) => {
          __emscripten_thread_init(
            tb,
            !ENVIRONMENT_IS_WORKER,
            1,
            !ENVIRONMENT_IS_WEB,
            5242880,
            false,
          );
          PThread.threadInitTLS();
        };
        var ___emscripten_thread_cleanup = (thread) => {
          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
          else postMessage({ cmd: "cleanupThread", thread: thread });
        };
        function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(
              2,
              0,
              1,
              pthread_ptr,
              attr,
              startRoutine,
              arg,
            );
          return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
        }
        var ___pthread_create_js = (pthread_ptr, attr, startRoutine, arg) => {
          if (typeof SharedArrayBuffer == "undefined") {
            err(
              "Current environment does not support SharedArrayBuffer, pthreads are not available!",
            );
            return 6;
          }
          var transferList = [];
          var error = 0;
          if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
            return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
          }
          if (error) return error;
          var threadParams = { startRoutine, pthread_ptr, arg, transferList };
          if (ENVIRONMENT_IS_PTHREAD) {
            threadParams.cmd = "spawnThread";
            postMessage(threadParams, transferList);
            return 0;
          }
          return spawnThread(threadParams);
        };
        var SYSCALLS = {
          varargs: void 0,
          getStr(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        function ___syscall_fcntl64(fd, cmd, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(3, 0, 1, fd, cmd, varargs);
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_ioctl(fd, op, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(4, 0, 1, fd, op, varargs);
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(5, 0, 1, dirfd, path, flags, varargs);
          SYSCALLS.varargs = varargs;
        }
        var structRegistrations = {};
        var runDestructors = (destructors) => {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        };
        function readPointer(pointer) {
          return this["fromWireType"](GROWABLE_HEAP_U32()[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var InternalError;
        var throwInternalError = (message) => {
          throw new InternalError(message);
        };
        var whenDependentTypesAreResolved = (
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) => {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        };
        var __embind_finalize_value_object = (structType) => {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) =>
                    getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    ),
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: (ptr) => {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: (destructors, o) => {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(`Missing field: "${fieldName}"`);
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: GenericWireTypeSize,
                  readValueFromPointer: readPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        };
        var __embind_register_bigint = (
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) => {};
        var embind_init_charCodes = () => {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        };
        var embind_charCodes;
        var readLatin1String = (ptr) => {
          var ret = "";
          var c = ptr;
          while (GROWABLE_HEAP_U8()[c]) {
            ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]];
          }
          return ret;
        };
        var BindingError;
        var throwBindingError = (message) => {
          throw new BindingError(message);
        };
        function sharedRegisterType(rawType, registeredInstance, options = {}) {
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              `type "${name}" must have a positive integer typeid pointer`,
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError(`Cannot register type '${name}' twice`);
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          return sharedRegisterType(rawType, registeredInstance, options);
        }
        var GenericWireTypeSize = 8;
        var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: function (pointer) {
              return this["fromWireType"](GROWABLE_HEAP_U8()[pointer]);
            },
            destructorFunction: null,
          });
        };
        var emval_freelist = [];
        var emval_handles = [];
        var __emval_decref = (handle) => {
          if (handle > 9 && 0 === --emval_handles[handle + 1]) {
            emval_handles[handle] = void 0;
            emval_freelist.push(handle);
          }
        };
        var count_emval_handles = () =>
          emval_handles.length / 2 - 5 - emval_freelist.length;
        var init_emval = () => {
          emval_handles.push(0, 1, void 0, 1, null, 1, true, 1, false, 1);
          Module9["count_emval_handles"] = count_emval_handles;
        };
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handles[handle];
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 2;
              case null:
                return 4;
              case true:
                return 6;
              case false:
                return 8;
              default: {
                const handle = emval_freelist.pop() || emval_handles.length;
                emval_handles[handle] = value;
                emval_handles[handle + 1] = 1;
                return handle;
              }
            }
          },
        };
        var EmValType = {
          name: "emscripten::val",
          fromWireType: (handle) => {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv;
          },
          toWireType: (destructors, value) => Emval.toHandle(value),
          argPackAdvance: GenericWireTypeSize,
          readValueFromPointer: readPointer,
          destructorFunction: null,
        };
        var __embind_register_emval = (rawType) =>
          registerType(rawType, EmValType);
        var floatReadValueFromPointer = (name, width) => {
          switch (width) {
            case 4:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >> 2]);
              };
            case 8:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >> 3]);
              };
            default:
              throw new TypeError(`invalid float width (${width}): ${name}`);
          }
        };
        var __embind_register_float = (rawType, name, size) => {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: (value) => value,
            toWireType: (destructors, value) => value,
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: floatReadValueFromPointer(name, size),
            destructorFunction: null,
          });
        };
        var createNamedFunction = (name, body) =>
          Object.defineProperty(body, "name", { value: name });
        function usesDestructorStack(argTypes) {
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = usesDestructorStack(argTypes);
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          var invokerFn = function (...args) {
            if (args.length !== expectedArgCount) {
              throwBindingError(
                `function ${humanName} called with ${args.length} arguments, expected ${expectedArgCount}`,
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i = 0; i < expectedArgCount; ++i) {
              argsWired[i] = argTypes[i + 2]["toWireType"](
                destructors,
                args[i],
              );
              invokerFuncArgs.push(argsWired[i]);
            }
            var rv = cppInvokerFunc(...invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i2 = isClassMethodFunc ? 1 : 2;
                  i2 < argTypes.length;
                  i2++
                ) {
                  var param = i2 === 1 ? thisWired : argsWired[i2 - 2];
                  if (argTypes[i2].destructorFunction !== null) {
                    argTypes[i2].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
          return createNamedFunction(humanName, invokerFn);
        }
        var ensureOverloadTable = (proto, methodName, humanName) => {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function (...args) {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(args.length)
              ) {
                throwBindingError(
                  `Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`,
                );
              }
              return proto[methodName].overloadTable[args.length].apply(
                this,
                args,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        };
        var exposePublicSymbol = (name, value, numArguments) => {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(`Cannot register public name '${name}' twice`);
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`,
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        };
        var heap32VectorToArray = (count, firstElement) => {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(GROWABLE_HEAP_U32()[(firstElement + i * 4) >> 2]);
          }
          return array;
        };
        var replacePublicSymbol = (name, value, numArguments) => {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistent public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        };
        var dynCallLegacy = (sig, ptr, args) => {
          sig = sig.replace(/p/g, "i");
          var f = Module9["dynCall_" + sig];
          return f(ptr, ...args);
        };
        var dynCall = (sig, ptr, args = []) => {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr)(...args);
          return rtn;
        };
        var getDynCaller =
          (sig, ptr) =>
          (...args) =>
            dynCall(sig, ptr, args);
        var embind__requireFunction = (signature, rawFunction) => {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              `unknown function pointer with signature ${signature}: ${rawFunction}`,
            );
          }
          return fp;
        };
        var extendError = (baseErrorType, errorName) => {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return `${this.name}: ${this.message}`;
            }
          };
          return errorClass;
        };
        var UnboundTypeError;
        var getTypeName = (type) => {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        };
        var throwUnboundTypeError = (message, types) => {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            `${message}: ` + unboundTypes.map(getTypeName).join([", "]),
          );
        };
        var getFunctionName = (signature) => {
          signature = signature.trim();
          const argsIndex = signature.indexOf("(");
          if (argsIndex !== -1) {
            return signature.substr(0, argsIndex);
          } else {
            return signature;
          }
        };
        var __embind_register_function = (
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) => {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          name = getFunctionName(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                `Cannot call ${name} due to unbound types`,
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, (argTypes2) => {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        };
        var integerReadValueFromPointer = (name, width, signed) => {
          switch (width) {
            case 1:
              return signed
                ? (pointer) => GROWABLE_HEAP_I8()[pointer]
                : (pointer) => GROWABLE_HEAP_U8()[pointer];
            case 2:
              return signed
                ? (pointer) => GROWABLE_HEAP_I16()[pointer >> 1]
                : (pointer) => GROWABLE_HEAP_U16()[pointer >> 1];
            case 4:
              return signed
                ? (pointer) => GROWABLE_HEAP_I32()[pointer >> 2]
                : (pointer) => GROWABLE_HEAP_U32()[pointer >> 2];
            default:
              throw new TypeError(`invalid integer width (${width}): ${name}`);
          }
        };
        var __embind_register_integer = (
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) => {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              size,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        };
        var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            var size = GROWABLE_HEAP_U32()[handle >> 2];
            var data = GROWABLE_HEAP_U32()[(handle + 4) >> 2];
            return new TA(GROWABLE_HEAP_I8().buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: GenericWireTypeSize,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        };
        var stringToUTF8Array = (str, heap2, outIdx, maxBytesToWrite) => {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        };
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
          stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
        var lengthBytesUTF8 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        };
        var __embind_register_std_string = (rawType, name) => {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType(value) {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType(destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              GROWABLE_HEAP_U32()[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    GROWABLE_HEAP_U8()[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    GROWABLE_HEAP_U8()[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: readPointer,
            destructorFunction(ptr) {
              _free(ptr);
            },
          });
        };
        var UTF16ToString = (ptr, maxBytesToRead) => {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = GROWABLE_HEAP_I16()[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        };
        var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
          maxBytesToWrite ??= 2147483647;
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF16 = (str) => str.length * 2;
        var UTF32ToString = (ptr, maxBytesToRead) => {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = GROWABLE_HEAP_I32()[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        };
        var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
          maxBytesToWrite ??= 2147483647;
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF32 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        };
        var __embind_register_std_wstring = (rawType, charSize, name) => {
          name = readLatin1String(name);
          var decodeString, encodeString, readCharAt, lengthBytesUTF;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            readCharAt = (pointer) => GROWABLE_HEAP_U16()[pointer >> 1];
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            readCharAt = (pointer) => GROWABLE_HEAP_U32()[pointer >> 2];
          }
          registerType(rawType, {
            name,
            fromWireType: (value) => {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || readCharAt(currentBytePtr) == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: (destructors, value) => {
              if (!(typeof value == "string")) {
                throwBindingError(
                  `Cannot pass non-string to C++ string type ${name}`,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              GROWABLE_HEAP_U32()[ptr >> 2] = length / charSize;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: readPointer,
            destructorFunction(ptr) {
              _free(ptr);
            },
          });
        };
        var __embind_register_value_object = (
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) => {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        };
        var __embind_register_value_object_field = (
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) => {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        };
        var __embind_register_void = (rawType, name) => {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: () => void 0,
            toWireType: (destructors, o) => void 0,
          });
        };
        var maybeExit = () => {
          if (!keepRuntimeAlive()) {
            try {
              if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS);
              else _exit(EXITSTATUS);
            } catch (e) {
              handleException(e);
            }
          }
        };
        var callUserCallback = (func) => {
          if (ABORT) {
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e) {
            handleException(e);
          }
        };
        var __emscripten_thread_mailbox_await = (pthread_ptr) => {
          if (typeof Atomics.waitAsync === "function") {
            var wait = Atomics.waitAsync(
              GROWABLE_HEAP_I32(),
              pthread_ptr >> 2,
              pthread_ptr,
            );
            wait.value.then(checkMailbox);
            var waitingAsync = pthread_ptr + 128;
            Atomics.store(GROWABLE_HEAP_I32(), waitingAsync >> 2, 1);
          }
        };
        Module9["__emscripten_thread_mailbox_await"] =
          __emscripten_thread_mailbox_await;
        var checkMailbox = () => {
          var pthread_ptr = _pthread_self();
          if (pthread_ptr) {
            __emscripten_thread_mailbox_await(pthread_ptr);
            callUserCallback(__emscripten_check_mailbox);
          }
        };
        Module9["checkMailbox"] = checkMailbox;
        var __emscripten_notify_mailbox_postmessage = (
          targetThreadId,
          currThreadId,
          mainThreadId,
        ) => {
          if (targetThreadId == currThreadId) {
            setTimeout(checkMailbox);
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ targetThread: targetThreadId, cmd: "checkMailbox" });
          } else {
            var worker = PThread.pthreads[targetThreadId];
            if (!worker) {
              return;
            }
            worker.postMessage({ cmd: "checkMailbox" });
          }
        };
        var proxiedJSCallArgs = [];
        var __emscripten_receive_on_main_thread_js = (
          funcIndex,
          emAsmAddr,
          callingThread,
          numCallArgs,
          args,
        ) => {
          proxiedJSCallArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            proxiedJSCallArgs[i] = GROWABLE_HEAP_F64()[b + i];
          }
          var func = emAsmAddr
            ? ASM_CONSTS[emAsmAddr]
            : proxiedFunctionTable[funcIndex];
          PThread.currentProxiedOperationCallerThread = callingThread;
          var rtn = func(...proxiedJSCallArgs);
          PThread.currentProxiedOperationCallerThread = 0;
          return rtn;
        };
        var __emscripten_thread_set_strongref = (thread) => {};
        var __emscripten_throw_longjmp = () => {
          throw Infinity;
        };
        var emval_methodCallers = [];
        var __emval_call = (caller, handle, destructorsRef, args) => {
          caller = emval_methodCallers[caller];
          handle = Emval.toValue(handle);
          return caller(null, handle, destructorsRef, args);
        };
        var emval_symbols = {};
        var getStringOrSymbol = (address) => {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        };
        var emval_get_global = () => {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        };
        var __emval_get_global = (name) => {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        };
        var emval_addMethodCaller = (caller) => {
          var id = emval_methodCallers.length;
          emval_methodCallers.push(caller);
          return id;
        };
        var requireRegisteredType = (rawType, humanName) => {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              `${humanName} has unknown type ${getTypeName(rawType)}`,
            );
          }
          return impl;
        };
        var emval_lookupTypes = (argCount, argTypes) => {
          var a = new Array(argCount);
          for (var i = 0; i < argCount; ++i) {
            a[i] = requireRegisteredType(
              GROWABLE_HEAP_U32()[(argTypes + i * 4) >> 2],
              "parameter " + i,
            );
          }
          return a;
        };
        var reflectConstruct = Reflect.construct;
        var emval_returnValue = (returnType, destructorsRef, handle) => {
          var destructors = [];
          var result = returnType["toWireType"](destructors, handle);
          if (destructors.length) {
            GROWABLE_HEAP_U32()[destructorsRef >> 2] =
              Emval.toHandle(destructors);
          }
          return result;
        };
        var __emval_get_method_caller = (argCount, argTypes, kind) => {
          var types = emval_lookupTypes(argCount, argTypes);
          var retType = types.shift();
          argCount--;
          var argN = new Array(argCount);
          var invokerFunction = (obj, func, destructorsRef, args) => {
            var offset = 0;
            for (var i = 0; i < argCount; ++i) {
              argN[i] = types[i]["readValueFromPointer"](args + offset);
              offset += types[i]["argPackAdvance"];
            }
            var rv =
              kind === 1 ? reflectConstruct(func, argN) : func.apply(obj, argN);
            return emval_returnValue(retType, destructorsRef, rv);
          };
          var functionName = `methodCaller<(${types.map((t) => t.name).join(", ")}) => ${retType.name}>`;
          return emval_addMethodCaller(
            createNamedFunction(functionName, invokerFunction),
          );
        };
        var __emval_run_destructors = (handle) => {
          var destructors = Emval.toValue(handle);
          runDestructors(destructors);
          __emval_decref(handle);
        };
        var _abort = () => {
          abort("");
        };
        var readEmAsmArgsArray = [];
        var readEmAsmArgs = (sigPtr, buf) => {
          readEmAsmArgsArray.length = 0;
          var ch;
          while ((ch = GROWABLE_HEAP_U8()[sigPtr++])) {
            var wide = ch != 105;
            wide &= ch != 112;
            buf += wide && buf % 8 ? 4 : 0;
            readEmAsmArgsArray.push(
              ch == 112
                ? GROWABLE_HEAP_U32()[buf >> 2]
                : ch == 105
                  ? GROWABLE_HEAP_I32()[buf >> 2]
                  : GROWABLE_HEAP_F64()[buf >> 3],
            );
            buf += wide ? 8 : 4;
          }
          return readEmAsmArgsArray;
        };
        var runEmAsmFunction = (code, sigPtr, argbuf) => {
          var args = readEmAsmArgs(sigPtr, argbuf);
          return ASM_CONSTS[code](...args);
        };
        var _emscripten_asm_const_int = (code, sigPtr, argbuf) =>
          runEmAsmFunction(code, sigPtr, argbuf);
        var warnOnce = (text) => {
          warnOnce.shown ||= {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err(text);
          }
        };
        var _emscripten_check_blocking_allowed = () => {};
        var _emscripten_date_now = () => Date.now();
        var runtimeKeepalivePush = () => {
          runtimeKeepaliveCounter += 1;
        };
        var _emscripten_exit_with_live_runtime = () => {
          runtimeKeepalivePush();
          throw "unwind";
        };
        var _emscripten_get_now;
        _emscripten_get_now = () => performance.timeOrigin + performance.now();
        var _emscripten_num_logical_cores = () =>
          navigator["hardwareConcurrency"];
        var getHeapMax = () => 2147483648;
        var growMemory = (size) => {
          var b = wasmMemory.buffer;
          var pages = (size - b.byteLength + 65535) / 65536;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        };
        var _emscripten_resize_heap = (requestedSize) => {
          var oldSize = GROWABLE_HEAP_U8().length;
          requestedSize >>>= 0;
          if (requestedSize <= oldSize) {
            return false;
          }
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          var alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = growMemory(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        };
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(6, 0, 1, fd);
          return 52;
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(7, 0, 1, fd, iov, iovcnt, pnum);
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(
              8,
              0,
              1,
              fd,
              offset_low,
              offset_high,
              whence,
              newOffset,
            );
          var offset = convertI32PairToI53Checked(offset_low, offset_high);
          return 70;
        }
        var printCharBuffers = [null, [], []];
        var printChar = (stream, curr) => {
          var buffer = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(9, 0, 1, fd, iov, iovcnt, pnum);
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = GROWABLE_HEAP_U32()[iov >> 2];
            var len = GROWABLE_HEAP_U32()[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, GROWABLE_HEAP_U8()[ptr + j]);
            }
            num += len;
          }
          GROWABLE_HEAP_U32()[pnum >> 2] = num;
          return 0;
        }
        PThread.init();
        InternalError = Module9["InternalError"] = class InternalError extends (
          Error
        ) {
          constructor(message) {
            super(message);
            this.name = "InternalError";
          }
        };
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = class BindingError extends (
          Error
        ) {
          constructor(message) {
            super(message);
            this.name = "BindingError";
          }
        };
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var proxiedFunctionTable = [
          _proc_exit,
          exitOnMainThread,
          pthreadCreateProxied,
          ___syscall_fcntl64,
          ___syscall_ioctl,
          ___syscall_openat,
          _fd_close,
          _fd_read,
          _fd_seek,
          _fd_write,
        ];
        var wasmImports = {
          G: ___assert_fail,
          N: ___emscripten_init_main_thread_js,
          q: ___emscripten_thread_cleanup,
          K: ___pthread_create_js,
          t: ___syscall_fcntl64,
          R: ___syscall_ioctl,
          S: ___syscall_openat,
          y: __embind_finalize_value_object,
          A: __embind_register_bigint,
          $: __embind_register_bool,
          _: __embind_register_emval,
          u: __embind_register_float,
          x: __embind_register_function,
          h: __embind_register_integer,
          d: __embind_register_memory_view,
          v: __embind_register_std_string,
          l: __embind_register_std_wstring,
          C: __embind_register_value_object,
          m: __embind_register_value_object_field,
          w: __embind_register_void,
          I: __emscripten_notify_mailbox_postmessage,
          L: __emscripten_receive_on_main_thread_js,
          M: __emscripten_thread_mailbox_await,
          U: __emscripten_thread_set_strongref,
          F: __emscripten_throw_longjmp,
          Z: __emval_call,
          O: __emval_decref,
          W: __emval_get_global,
          Y: __emval_get_method_caller,
          X: __emval_run_destructors,
          e: _abort,
          ba: _emscripten_asm_const_int,
          r: _emscripten_check_blocking_allowed,
          V: _emscripten_date_now,
          T: _emscripten_exit_with_live_runtime,
          k: _emscripten_get_now,
          aa: _emscripten_num_logical_cores,
          H: _emscripten_resize_heap,
          J: _exit,
          s: _fd_close,
          Q: _fd_read,
          z: _fd_seek,
          P: _fd_write,
          g: invoke_ii,
          i: invoke_iii,
          j: invoke_iiiii,
          B: invoke_iiiiiiiiii,
          D: invoke_iiiiiiiiiii,
          E: invoke_iiiiiiiiiiii,
          f: invoke_vi,
          c: invoke_vii,
          n: invoke_viii,
          b: invoke_viiii,
          o: invoke_viiiii,
          p: invoke_viiiiii,
          a: wasmMemory || Module9["wasmMemory"],
        };
        var wasmExports = createWasm();
        var ___wasm_call_ctors = () =>
          (___wasm_call_ctors = wasmExports["ca"])();
        var ___getTypeName = (a0) => (___getTypeName = wasmExports["da"])(a0);
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = () =>
          (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            wasmExports["ea"])());
        var _pthread_self = (Module9["_pthread_self"] = () =>
          (_pthread_self = Module9["_pthread_self"] = wasmExports["fa"])());
        var _malloc = (a0) => (_malloc = wasmExports["ga"])(a0);
        var _free = (a0) => (_free = wasmExports["ha"])(a0);
        var __emscripten_tls_init = (Module9["__emscripten_tls_init"] = () =>
          (__emscripten_tls_init = Module9["__emscripten_tls_init"] =
            wasmExports["ia"])());
        var __emscripten_thread_init = (Module9["__emscripten_thread_init"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
        ) =>
          (__emscripten_thread_init = Module9["__emscripten_thread_init"] =
            wasmExports["ja"])(a0, a1, a2, a3, a4, a5));
        var __emscripten_thread_crashed = (Module9[
          "__emscripten_thread_crashed"
        ] = () =>
          (__emscripten_thread_crashed = Module9[
            "__emscripten_thread_crashed"
          ] =
            wasmExports["la"])());
        var _emscripten_main_thread_process_queued_calls = () =>
          (_emscripten_main_thread_process_queued_calls =
            wasmExports["emscripten_main_thread_process_queued_calls"])();
        var _emscripten_main_runtime_thread_id = () =>
          (_emscripten_main_runtime_thread_id =
            wasmExports["emscripten_main_runtime_thread_id"])();
        var __emscripten_run_on_main_thread_js = (a0, a1, a2, a3, a4) =>
          (__emscripten_run_on_main_thread_js = wasmExports["ma"])(
            a0,
            a1,
            a2,
            a3,
            a4,
          );
        var __emscripten_thread_free_data = (a0) =>
          (__emscripten_thread_free_data = wasmExports["na"])(a0);
        var __emscripten_thread_exit = (Module9["__emscripten_thread_exit"] = (
          a0,
        ) =>
          (__emscripten_thread_exit = Module9["__emscripten_thread_exit"] =
            wasmExports["oa"])(a0));
        var __emscripten_check_mailbox = () =>
          (__emscripten_check_mailbox = wasmExports["pa"])();
        var _setThrew = (a0, a1) => (_setThrew = wasmExports["qa"])(a0, a1);
        var _emscripten_stack_set_limits = (a0, a1) =>
          (_emscripten_stack_set_limits = wasmExports["ra"])(a0, a1);
        var __emscripten_stack_restore = (a0) =>
          (__emscripten_stack_restore = wasmExports["sa"])(a0);
        var __emscripten_stack_alloc = (a0) =>
          (__emscripten_stack_alloc = wasmExports["ta"])(a0);
        var _emscripten_stack_get_current = () =>
          (_emscripten_stack_get_current = wasmExports["ua"])();
        var ___cxa_increment_exception_refcount = (a0) =>
          (___cxa_increment_exception_refcount =
            wasmExports["__cxa_increment_exception_refcount"])(a0);
        var ___cxa_is_pointer_type = (a0) =>
          (___cxa_is_pointer_type = wasmExports["__cxa_is_pointer_type"])(a0);
        var dynCall_jiiiiiiiii = (Module9["dynCall_jiiiiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
        ) =>
          (dynCall_jiiiiiiiii = Module9["dynCall_jiiiiiiiii"] =
            wasmExports["va"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9));
        var dynCall_jiji = (Module9["dynCall_jiji"] = (a0, a1, a2, a3, a4) =>
          (dynCall_jiji = Module9["dynCall_jiji"] = wasmExports["wa"])(
            a0,
            a1,
            a2,
            a3,
            a4,
          ));
        var dynCall_iiijii = (Module9["dynCall_iiijii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
        ) =>
          (dynCall_iiijii = Module9["dynCall_iiijii"] = wasmExports["xa"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
          ));
        var dynCall_jiiiiiiii = (Module9["dynCall_jiiiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
        ) =>
          (dynCall_jiiiiiiii = Module9["dynCall_jiiiiiiii"] =
            wasmExports["ya"])(a0, a1, a2, a3, a4, a5, a6, a7, a8));
        var dynCall_jiiiiii = (Module9["dynCall_jiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
        ) =>
          (dynCall_jiiiiii = Module9["dynCall_jiiiiii"] = wasmExports["za"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
          ));
        var dynCall_jiiiii = (Module9["dynCall_jiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
        ) =>
          (dynCall_jiiiii = Module9["dynCall_jiiiii"] = wasmExports["Aa"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
          ));
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vii(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiiii(
          index,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
        ) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7,
              a8,
              a9,
              a10,
              a11,
            );
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiii(
          index,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
        ) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7,
              a8,
              a9,
              a10,
            );
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiii(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_ii(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        Module9["wasmMemory"] = wasmMemory;
        Module9["keepRuntimeAlive"] = keepRuntimeAlive;
        Module9["ExitStatus"] = ExitStatus;
        Module9["PThread"] = PThread;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module9);
            initRuntime();
            startWorker(Module9);
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return readyPromise;
      };
    })();
    avif_enc_mt_default = Module3;
  },
});

// node_modules/@jsquash/avif/codec/enc/avif_enc.js
var avif_enc_exports = {};
__export(avif_enc_exports, {
  default: () => avif_enc_default,
});
var Module4, avif_enc_default;
var init_avif_enc = __esm({
  "node_modules/@jsquash/avif/codec/enc/avif_enc.js"() {
    Module4 = (() => {
      var _scriptDir = import.meta.url;
      return function (moduleArg = {}) {
        var Module9 = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          globalThis.caches &&
          globalThis.caches.default !== void 0;
        const isRunningInNode5 =
          typeof process === "object" &&
          process.release &&
          process.release.name === "node";
        if (isRunningInCloudFlareWorkers3 || isRunningInNode5) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (typeof self !== "undefined" && self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.startsWith("blob:")) {
            scriptDirectory = "";
          } else {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.error.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          Module9["monitorRunDependencies"]?.(runDependencies);
        }
        function removeRunDependency(id) {
          runDependencies--;
          Module9["monitorRunDependencies"]?.(runDependencies);
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          Module9["onAbort"]?.(what);
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "avif_enc.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("avif_enc.wasm", import.meta.url).href;
        }
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then((response) => {
                  if (!response["ok"]) {
                    throw `failed to load wasm binary file at '${binaryFile}'`;
                  }
                  return response["arrayBuffer"]();
                })
                .catch(() => getBinarySync(binaryFile));
            }
          }
          return Promise.resolve().then(() => getBinarySync(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then((binary) => WebAssembly.instantiate(binary, imports))
            .then(receiver, (reason) => {
              err(`failed to asynchronously prepare wasm: ${reason}`);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              (response) => {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          }
          return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            wasmExports = instance.exports;
            wasmMemory = wasmExports["P"];
            updateMemoryViews();
            wasmTable = wasmExports["U"];
            addOnInit(wasmExports["Q"]);
            removeRunDependency("wasm-instantiate");
            return wasmExports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err(`Module.instantiateWasm callback failed with error: ${e}`);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        var ASM_CONSTS = {
          617256: () => {
            throw new Error(
              "Invalid bit depth. Supported values are 8, 10, or 12.",
            );
          },
        };
        var callRuntimeCallbacks = (callbacks) => {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        };
        var noExitRuntime = Module9["noExitRuntime"] || true;
        var stackRestore = (val) => __emscripten_stack_restore(val);
        var stackSave = () => _emscripten_stack_get_current();
        var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        };
        var UTF8ToString = (ptr, maxBytesToRead) =>
          ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        var SYSCALLS = {
          varargs: void 0,
          getStr(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        function ___syscall_fcntl64(fd, cmd, varargs) {
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_ioctl(fd, op, varargs) {
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          SYSCALLS.varargs = varargs;
        }
        var structRegistrations = {};
        var runDestructors = (destructors) => {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        };
        function readPointer(pointer) {
          return this["fromWireType"](HEAPU32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var InternalError;
        var throwInternalError = (message) => {
          throw new InternalError(message);
        };
        var whenDependentTypesAreResolved = (
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) => {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        };
        var __embind_finalize_value_object = (structType) => {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) =>
                    getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    ),
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: (ptr) => {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: (destructors, o) => {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(`Missing field: "${fieldName}"`);
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: GenericWireTypeSize,
                  readValueFromPointer: readPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        };
        var __embind_register_bigint = (
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) => {};
        var embind_init_charCodes = () => {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        };
        var embind_charCodes;
        var readLatin1String = (ptr) => {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        };
        var BindingError;
        var throwBindingError = (message) => {
          throw new BindingError(message);
        };
        function sharedRegisterType(rawType, registeredInstance, options = {}) {
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              `type "${name}" must have a positive integer typeid pointer`,
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError(`Cannot register type '${name}' twice`);
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          return sharedRegisterType(rawType, registeredInstance, options);
        }
        var GenericWireTypeSize = 8;
        var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: function (pointer) {
              return this["fromWireType"](HEAPU8[pointer]);
            },
            destructorFunction: null,
          });
        };
        var emval_freelist = [];
        var emval_handles = [];
        var __emval_decref = (handle) => {
          if (handle > 9 && 0 === --emval_handles[handle + 1]) {
            emval_handles[handle] = void 0;
            emval_freelist.push(handle);
          }
        };
        var count_emval_handles = () =>
          emval_handles.length / 2 - 5 - emval_freelist.length;
        var init_emval = () => {
          emval_handles.push(0, 1, void 0, 1, null, 1, true, 1, false, 1);
          Module9["count_emval_handles"] = count_emval_handles;
        };
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handles[handle];
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 2;
              case null:
                return 4;
              case true:
                return 6;
              case false:
                return 8;
              default: {
                const handle = emval_freelist.pop() || emval_handles.length;
                emval_handles[handle] = value;
                emval_handles[handle + 1] = 1;
                return handle;
              }
            }
          },
        };
        var EmValType = {
          name: "emscripten::val",
          fromWireType: (handle) => {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv;
          },
          toWireType: (destructors, value) => Emval.toHandle(value),
          argPackAdvance: GenericWireTypeSize,
          readValueFromPointer: readPointer,
          destructorFunction: null,
        };
        var __embind_register_emval = (rawType) =>
          registerType(rawType, EmValType);
        var floatReadValueFromPointer = (name, width) => {
          switch (width) {
            case 4:
              return function (pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 8:
              return function (pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError(`invalid float width (${width}): ${name}`);
          }
        };
        var __embind_register_float = (rawType, name, size) => {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: (value) => value,
            toWireType: (destructors, value) => value,
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: floatReadValueFromPointer(name, size),
            destructorFunction: null,
          });
        };
        var createNamedFunction = (name, body) =>
          Object.defineProperty(body, "name", { value: name });
        function usesDestructorStack(argTypes) {
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = usesDestructorStack(argTypes);
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          var invokerFn = function (...args) {
            if (args.length !== expectedArgCount) {
              throwBindingError(
                `function ${humanName} called with ${args.length} arguments, expected ${expectedArgCount}`,
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i = 0; i < expectedArgCount; ++i) {
              argsWired[i] = argTypes[i + 2]["toWireType"](
                destructors,
                args[i],
              );
              invokerFuncArgs.push(argsWired[i]);
            }
            var rv = cppInvokerFunc(...invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i2 = isClassMethodFunc ? 1 : 2;
                  i2 < argTypes.length;
                  i2++
                ) {
                  var param = i2 === 1 ? thisWired : argsWired[i2 - 2];
                  if (argTypes[i2].destructorFunction !== null) {
                    argTypes[i2].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
          return createNamedFunction(humanName, invokerFn);
        }
        var ensureOverloadTable = (proto, methodName, humanName) => {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function (...args) {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(args.length)
              ) {
                throwBindingError(
                  `Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`,
                );
              }
              return proto[methodName].overloadTable[args.length].apply(
                this,
                args,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        };
        var exposePublicSymbol = (name, value, numArguments) => {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(`Cannot register public name '${name}' twice`);
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`,
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        };
        var heap32VectorToArray = (count, firstElement) => {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[(firstElement + i * 4) >> 2]);
          }
          return array;
        };
        var replacePublicSymbol = (name, value, numArguments) => {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistent public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        };
        var dynCallLegacy = (sig, ptr, args) => {
          sig = sig.replace(/p/g, "i");
          var f = Module9["dynCall_" + sig];
          return f(ptr, ...args);
        };
        var wasmTable;
        var getWasmTableEntry = (funcPtr) => wasmTable.get(funcPtr);
        var dynCall = (sig, ptr, args = []) => {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr)(...args);
          return rtn;
        };
        var getDynCaller =
          (sig, ptr) =>
          (...args) =>
            dynCall(sig, ptr, args);
        var embind__requireFunction = (signature, rawFunction) => {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              `unknown function pointer with signature ${signature}: ${rawFunction}`,
            );
          }
          return fp;
        };
        var extendError = (baseErrorType, errorName) => {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return `${this.name}: ${this.message}`;
            }
          };
          return errorClass;
        };
        var UnboundTypeError;
        var getTypeName = (type) => {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        };
        var throwUnboundTypeError = (message, types) => {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            `${message}: ` + unboundTypes.map(getTypeName).join([", "]),
          );
        };
        var getFunctionName = (signature) => {
          signature = signature.trim();
          const argsIndex = signature.indexOf("(");
          if (argsIndex !== -1) {
            return signature.substr(0, argsIndex);
          } else {
            return signature;
          }
        };
        var __embind_register_function = (
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) => {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          name = getFunctionName(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                `Cannot call ${name} due to unbound types`,
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, (argTypes2) => {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        };
        var integerReadValueFromPointer = (name, width, signed) => {
          switch (width) {
            case 1:
              return signed
                ? (pointer) => HEAP8[pointer]
                : (pointer) => HEAPU8[pointer];
            case 2:
              return signed
                ? (pointer) => HEAP16[pointer >> 1]
                : (pointer) => HEAPU16[pointer >> 1];
            case 4:
              return signed
                ? (pointer) => HEAP32[pointer >> 2]
                : (pointer) => HEAPU32[pointer >> 2];
            default:
              throw new TypeError(`invalid integer width (${width}): ${name}`);
          }
        };
        var __embind_register_integer = (
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) => {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              size,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        };
        var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            var size = HEAPU32[handle >> 2];
            var data = HEAPU32[(handle + 4) >> 2];
            return new TA(HEAP8.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: GenericWireTypeSize,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        };
        var stringToUTF8Array = (str, heap2, outIdx, maxBytesToWrite) => {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        };
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
          stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        var lengthBytesUTF8 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        };
        var __embind_register_std_string = (rawType, name) => {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType(value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType(destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: readPointer,
            destructorFunction(ptr) {
              _free(ptr);
            },
          });
        };
        var UTF16ToString = (ptr, maxBytesToRead) => {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        };
        var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
          maxBytesToWrite ??= 2147483647;
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF16 = (str) => str.length * 2;
        var UTF32ToString = (ptr, maxBytesToRead) => {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        };
        var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
          maxBytesToWrite ??= 2147483647;
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        };
        var lengthBytesUTF32 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        };
        var __embind_register_std_wstring = (rawType, charSize, name) => {
          name = readLatin1String(name);
          var decodeString, encodeString, readCharAt, lengthBytesUTF;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            readCharAt = (pointer) => HEAPU16[pointer >> 1];
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            readCharAt = (pointer) => HEAPU32[pointer >> 2];
          }
          registerType(rawType, {
            name,
            fromWireType: (value) => {
              var length = HEAPU32[value >> 2];
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || readCharAt(currentBytePtr) == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: (destructors, value) => {
              if (!(typeof value == "string")) {
                throwBindingError(
                  `Cannot pass non-string to C++ string type ${name}`,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length / charSize;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: readPointer,
            destructorFunction(ptr) {
              _free(ptr);
            },
          });
        };
        var __embind_register_value_object = (
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) => {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        };
        var __embind_register_value_object_field = (
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) => {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        };
        var __embind_register_void = (rawType, name) => {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: () => void 0,
            toWireType: (destructors, o) => void 0,
          });
        };
        var __emscripten_throw_longjmp = () => {
          throw Infinity;
        };
        var emval_methodCallers = [];
        var __emval_call = (caller, handle, destructorsRef, args) => {
          caller = emval_methodCallers[caller];
          handle = Emval.toValue(handle);
          return caller(null, handle, destructorsRef, args);
        };
        var emval_symbols = {};
        var getStringOrSymbol = (address) => {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        };
        var emval_get_global = () => {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        };
        var __emval_get_global = (name) => {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        };
        var emval_addMethodCaller = (caller) => {
          var id = emval_methodCallers.length;
          emval_methodCallers.push(caller);
          return id;
        };
        var requireRegisteredType = (rawType, humanName) => {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              `${humanName} has unknown type ${getTypeName(rawType)}`,
            );
          }
          return impl;
        };
        var emval_lookupTypes = (argCount, argTypes) => {
          var a = new Array(argCount);
          for (var i = 0; i < argCount; ++i) {
            a[i] = requireRegisteredType(
              HEAPU32[(argTypes + i * 4) >> 2],
              "parameter " + i,
            );
          }
          return a;
        };
        var reflectConstruct = Reflect.construct;
        var emval_returnValue = (returnType, destructorsRef, handle) => {
          var destructors = [];
          var result = returnType["toWireType"](destructors, handle);
          if (destructors.length) {
            HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
          }
          return result;
        };
        var __emval_get_method_caller = (argCount, argTypes, kind) => {
          var types = emval_lookupTypes(argCount, argTypes);
          var retType = types.shift();
          argCount--;
          var argN = new Array(argCount);
          var invokerFunction = (obj, func, destructorsRef, args) => {
            var offset = 0;
            for (var i = 0; i < argCount; ++i) {
              argN[i] = types[i]["readValueFromPointer"](args + offset);
              offset += types[i]["argPackAdvance"];
            }
            var rv =
              kind === 1 ? reflectConstruct(func, argN) : func.apply(obj, argN);
            return emval_returnValue(retType, destructorsRef, rv);
          };
          var functionName = `methodCaller<(${types.map((t) => t.name).join(", ")}) => ${retType.name}>`;
          return emval_addMethodCaller(
            createNamedFunction(functionName, invokerFunction),
          );
        };
        var __emval_run_destructors = (handle) => {
          var destructors = Emval.toValue(handle);
          runDestructors(destructors);
          __emval_decref(handle);
        };
        var _abort = () => {
          abort("");
        };
        var readEmAsmArgsArray = [];
        var readEmAsmArgs = (sigPtr, buf) => {
          readEmAsmArgsArray.length = 0;
          var ch;
          while ((ch = HEAPU8[sigPtr++])) {
            var wide = ch != 105;
            wide &= ch != 112;
            buf += wide && buf % 8 ? 4 : 0;
            readEmAsmArgsArray.push(
              ch == 112
                ? HEAPU32[buf >> 2]
                : ch == 105
                  ? HEAP32[buf >> 2]
                  : HEAPF64[buf >> 3],
            );
            buf += wide ? 8 : 4;
          }
          return readEmAsmArgsArray;
        };
        var runEmAsmFunction = (code, sigPtr, argbuf) => {
          var args = readEmAsmArgs(sigPtr, argbuf);
          return ASM_CONSTS[code](...args);
        };
        var _emscripten_asm_const_int = (code, sigPtr, argbuf) =>
          runEmAsmFunction(code, sigPtr, argbuf);
        var _emscripten_date_now = () => Date.now();
        var getHeapMax = () => 2147483648;
        var growMemory = (size) => {
          var b = wasmMemory.buffer;
          var pages = (size - b.byteLength + 65535) / 65536;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        };
        var _emscripten_resize_heap = (requestedSize) => {
          var oldSize = HEAPU8.length;
          requestedSize >>>= 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          var alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = growMemory(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        };
        var _fd_close = (fd) => 52;
        var _fd_read = (fd, iov, iovcnt, pnum) => 52;
        var convertI32PairToI53Checked = (lo, hi) =>
          (hi + 2097152) >>> 0 < 4194305 - !!lo
            ? (lo >>> 0) + hi * 4294967296
            : NaN;
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          var offset = convertI32PairToI53Checked(offset_low, offset_high);
          return 70;
        }
        var printCharBuffers = [null, [], []];
        var printChar = (stream, curr) => {
          var buffer = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
        var _fd_write = (fd, iov, iovcnt, pnum) => {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        };
        InternalError = Module9["InternalError"] = class InternalError extends (
          Error
        ) {
          constructor(message) {
            super(message);
            this.name = "InternalError";
          }
        };
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = class BindingError extends (
          Error
        ) {
          constructor(message) {
            super(message);
            this.name = "BindingError";
          }
        };
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var wasmImports = {
          p: ___syscall_fcntl64,
          F: ___syscall_ioctl,
          G: ___syscall_openat,
          u: __embind_finalize_value_object,
          w: __embind_register_bigint,
          r: __embind_register_bool,
          M: __embind_register_emval,
          q: __embind_register_float,
          t: __embind_register_function,
          f: __embind_register_integer,
          b: __embind_register_memory_view,
          j: __embind_register_std_string,
          i: __embind_register_std_wstring,
          A: __embind_register_value_object,
          k: __embind_register_value_object_field,
          s: __embind_register_void,
          B: __emscripten_throw_longjmp,
          L: __emval_call,
          H: __emval_decref,
          N: __emval_get_global,
          K: __emval_get_method_caller,
          J: __emval_run_destructors,
          c: _abort,
          O: _emscripten_asm_const_int,
          I: _emscripten_date_now,
          C: _emscripten_resize_heap,
          o: _fd_close,
          E: _fd_read,
          v: _fd_seek,
          D: _fd_write,
          e: invoke_iii,
          g: invoke_iiiii,
          x: invoke_iiiiiiiiii,
          y: invoke_iiiiiiiiiii,
          z: invoke_iiiiiiiiiiii,
          h: invoke_vi,
          d: invoke_vii,
          l: invoke_viii,
          a: invoke_viiii,
          m: invoke_viiiii,
          n: invoke_viiiiii,
        };
        var wasmExports = createWasm();
        var ___wasm_call_ctors = () =>
          (___wasm_call_ctors = wasmExports["Q"])();
        var ___getTypeName = (a0) => (___getTypeName = wasmExports["R"])(a0);
        var _malloc = (a0) => (_malloc = wasmExports["S"])(a0);
        var _free = (a0) => (_free = wasmExports["T"])(a0);
        var _setThrew = (a0, a1) => (_setThrew = wasmExports["V"])(a0, a1);
        var __emscripten_stack_restore = (a0) =>
          (__emscripten_stack_restore = wasmExports["W"])(a0);
        var __emscripten_stack_alloc = (a0) =>
          (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(
            a0,
          );
        var _emscripten_stack_get_current = () =>
          (_emscripten_stack_get_current = wasmExports["X"])();
        var ___cxa_increment_exception_refcount = (a0) =>
          (___cxa_increment_exception_refcount =
            wasmExports["__cxa_increment_exception_refcount"])(a0);
        var ___cxa_is_pointer_type = (a0) =>
          (___cxa_is_pointer_type = wasmExports["__cxa_is_pointer_type"])(a0);
        var dynCall_jiiiiiiiii = (Module9["dynCall_jiiiiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
        ) =>
          (dynCall_jiiiiiiiii = Module9["dynCall_jiiiiiiiii"] =
            wasmExports["Y"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9));
        var dynCall_jiji = (Module9["dynCall_jiji"] = (a0, a1, a2, a3, a4) =>
          (dynCall_jiji = Module9["dynCall_jiji"] = wasmExports["Z"])(
            a0,
            a1,
            a2,
            a3,
            a4,
          ));
        var dynCall_iiijii = (Module9["dynCall_iiijii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
        ) =>
          (dynCall_iiijii = Module9["dynCall_iiijii"] = wasmExports["_"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
          ));
        var dynCall_jiiiiiiii = (Module9["dynCall_jiiiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
        ) =>
          (dynCall_jiiiiiiii = Module9["dynCall_jiiiiiiii"] = wasmExports["$"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7,
            a8,
          ));
        var dynCall_jiiiiii = (Module9["dynCall_jiiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
        ) =>
          (dynCall_jiiiiii = Module9["dynCall_jiiiiii"] = wasmExports["aa"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
          ));
        var dynCall_jiiiii = (Module9["dynCall_jiiiii"] = (
          a0,
          a1,
          a2,
          a3,
          a4,
          a5,
        ) =>
          (dynCall_jiiiii = Module9["dynCall_jiiiii"] = wasmExports["ba"])(
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
          ));
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vii(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiiii(
          index,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
        ) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7,
              a8,
              a9,
              a10,
              a11,
            );
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiii(
          index,
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
        ) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7,
              a8,
              a9,
              a10,
            );
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiii(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return readyPromise;
      };
    })();
    avif_enc_default = Module4;
  },
});

// node_modules/@jsquash/jxl/codec/enc/jxl_enc_mt_simd.js
var jxl_enc_mt_simd_exports = {};
__export(jxl_enc_mt_simd_exports, {
  default: () => jxl_enc_mt_simd_default,
});
var Module6, jxl_enc_mt_simd_default;
var init_jxl_enc_mt_simd = __esm({
  "node_modules/@jsquash/jxl/codec/enc/jxl_enc_mt_simd.js"() {
    Module6 = (() => {
      var _scriptDir = import.meta.url;
      return function (Module9 = {}) {
        function GROWABLE_HEAP_I8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP16;
        }
        function GROWABLE_HEAP_U16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU16;
        }
        function GROWABLE_HEAP_I32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP32;
        }
        function GROWABLE_HEAP_U32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU32;
        }
        function GROWABLE_HEAP_F32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF64;
        }
        var Module9 = typeof Module9 != "undefined" ? Module9 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module9["ready"] = new Promise(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          caches.default !== void 0;
        if (isRunningInCloudFlareWorkers3) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var ENVIRONMENT_IS_PTHREAD = Module9["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => (document.title = title);
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.warn.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var noExitRuntime = Module9["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr
            ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead)
            : "";
        }
        function stringToUTF8Array(str, heap2, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(
            str,
            GROWABLE_HEAP_U8(),
            outPtr,
            maxBytesToWrite,
          );
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var INITIAL_MEMORY = Module9["INITIAL_MEMORY"] || 16777216;
        assert(
          INITIAL_MEMORY >= 65536,
          "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
            INITIAL_MEMORY +
            "! (STACK_SIZE=65536)",
        );
        if (ENVIRONMENT_IS_PTHREAD) {
          wasmMemory = Module9["wasmMemory"];
        } else {
          if (Module9["wasmMemory"]) {
            wasmMemory = Module9["wasmMemory"];
          } else {
            wasmMemory = new WebAssembly.Memory({
              initial: INITIAL_MEMORY / 65536,
              maximum: 2147483648 / 65536,
              shared: true,
            });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
              err(
                "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
              );
              if (ENVIRONMENT_IS_NODE) {
                err(
                  "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
                );
              }
              throw Error("bad memory");
            }
          }
        }
        updateMemoryViews();
        INITIAL_MEMORY = wasmMemory.buffer.byteLength;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD) return;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (ENVIRONMENT_IS_PTHREAD) return;
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module9["onAbort"]) {
            Module9["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "jxl_enc_mt_simd.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("jxl_enc_mt_simd.wasm", import.meta.url)
            .href;
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                .catch(function () {
                  return getBinary(binaryFile);
                });
            }
          }
          return Promise.resolve().then(function () {
            return getBinary(binaryFile);
          });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module9["asm"] = exports;
            registerTLSInit(Module9["asm"]["U"]);
            wasmTable = Module9["asm"]["aa"];
            addOnInit(Module9["asm"]["R"]);
            wasmModule = module;
            PThread.loadWasmModuleToAllWorkers(() =>
              removeRunDependency("wasm-instantiate"),
            );
            return exports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"], result["module"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function terminateWorker(worker) {
          worker.terminate();
          worker.onmessage = (e) => {};
        }
        function killThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          delete PThread.pthreads[pthread_ptr];
          terminateWorker(worker);
          __emscripten_thread_free_data(pthread_ptr);
          PThread.runningWorkers.splice(
            PThread.runningWorkers.indexOf(worker),
            1,
          );
          worker.pthread_ptr = 0;
        }
        function cancelThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          worker.postMessage({ cmd: "cancel" });
        }
        function cleanupThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          assert(worker);
          PThread.returnWorkerToPool(worker);
        }
        function spawnThread(threadParams) {
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          PThread.runningWorkers.push(worker);
          PThread.pthreads[threadParams.pthread_ptr] = worker;
          worker.pthread_ptr = threadParams.pthread_ptr;
          var msg = {
            cmd: "run",
            start_routine: threadParams.startRoutine,
            arg: threadParams.arg,
            pthread_ptr: threadParams.pthread_ptr,
          };
          worker.postMessage(msg, threadParams.transferList);
          return 0;
        }
        var SYSCALLS = {
          varargs: void 0,
          get: function () {
            SYSCALLS.varargs += 4;
            var ret = GROWABLE_HEAP_I32()[(SYSCALLS.varargs - 4) >> 2];
            return ret;
          },
          getStr: function (ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        function _proc_exit(code) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(1, 1, code);
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            if (Module9["onExit"]) Module9["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          if (ENVIRONMENT_IS_PTHREAD) {
            exitOnMainThread(status);
            throw "unwind";
          }
          _proc_exit(status);
        }
        var _exit = exitJS;
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        var PThread = {
          unusedWorkers: [],
          runningWorkers: [],
          tlsInitFunctions: [],
          pthreads: {},
          init: function () {
            if (ENVIRONMENT_IS_PTHREAD) {
              PThread.initWorker();
            } else {
              PThread.initMainThread();
            }
          },
          initMainThread: function () {
            var pthreadPoolSize = navigator.hardwareConcurrency;
            while (pthreadPoolSize--) {
              PThread.allocateUnusedWorker();
            }
          },
          initWorker: function () {
            noExitRuntime = false;
          },
          setExitStatus: function (status) {
            EXITSTATUS = status;
          },
          terminateAllThreads__deps: ["$terminateWorker"],
          terminateAllThreads: function () {
            for (var worker of PThread.runningWorkers) {
              terminateWorker(worker);
            }
            for (var worker of PThread.unusedWorkers) {
              terminateWorker(worker);
            }
            PThread.unusedWorkers = [];
            PThread.runningWorkers = [];
            PThread.pthreads = [];
          },
          returnWorkerToPool: function (worker) {
            var pthread_ptr = worker.pthread_ptr;
            delete PThread.pthreads[pthread_ptr];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(
              PThread.runningWorkers.indexOf(worker),
              1,
            );
            worker.pthread_ptr = 0;
            __emscripten_thread_free_data(pthread_ptr);
          },
          receiveObjectTransfer: function (data) {},
          threadInitTLS: function () {
            PThread.tlsInitFunctions.forEach((f) => f());
          },
          loadWasmModuleToWorker: (worker) =>
            new Promise((onFinishedLoading) => {
              worker.onmessage = (e) => {
                var d = e["data"];
                var cmd = d["cmd"];
                if (worker.pthread_ptr)
                  PThread.currentProxiedOperationCallerThread =
                    worker.pthread_ptr;
                if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                  var targetWorker = PThread.pthreads[d.targetThread];
                  if (targetWorker) {
                    targetWorker.postMessage(d, d["transferList"]);
                  } else {
                    err(
                      'Internal error! Worker sent a message "' +
                        cmd +
                        '" to target pthread ' +
                        d["targetThread"] +
                        ", but that thread no longer exists!",
                    );
                  }
                  PThread.currentProxiedOperationCallerThread = void 0;
                  return;
                }
                if (cmd === "checkMailbox") {
                  checkMailbox();
                } else if (cmd === "spawnThread") {
                  spawnThread(d);
                } else if (cmd === "cleanupThread") {
                  cleanupThread(d["thread"]);
                } else if (cmd === "killThread") {
                  killThread(d["thread"]);
                } else if (cmd === "cancelThread") {
                  cancelThread(d["thread"]);
                } else if (cmd === "loaded") {
                  worker.loaded = true;
                  onFinishedLoading(worker);
                } else if (cmd === "print") {
                  out("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (cmd === "printErr") {
                  err("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (cmd === "alert") {
                  alert("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (d.target === "setimmediate") {
                  worker.postMessage(d);
                } else if (cmd === "callHandler") {
                  Module9[d["handler"]](...d["args"]);
                } else if (cmd) {
                  err("worker sent an unknown command " + cmd);
                }
                PThread.currentProxiedOperationCallerThread = void 0;
              };
              worker.onerror = (e) => {
                var message = "worker sent an error!";
                err(
                  message +
                    " " +
                    e.filename +
                    ":" +
                    e.lineno +
                    ": " +
                    e.message,
                );
                throw e;
              };
              var handlers = [];
              var knownHandlers = ["onExit", "onAbort", "print", "printErr"];
              for (var handler of knownHandlers) {
                if (Module9.hasOwnProperty(handler)) {
                  handlers.push(handler);
                }
              }
              worker.postMessage({
                cmd: "load",
                handlers: handlers,
                urlOrBlob: Module9["mainScriptUrlOrBlob"],
                wasmMemory: wasmMemory,
                wasmModule: wasmModule,
              });
            }),
          loadWasmModuleToAllWorkers: function (onMaybeReady) {
            if (ENVIRONMENT_IS_PTHREAD) {
              return onMaybeReady();
            }
            let pthreadPoolReady = Promise.all(
              PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker),
            );
            pthreadPoolReady.then(onMaybeReady);
          },
          allocateUnusedWorker: function () {
            var worker;
            if (!Module9["locateFile"]) {
              worker = new Worker(
                new URL("jxl_enc_mt_simd.worker.js", import.meta.url),
              );
            } else {
              var pthreadMainJs = locateFile("jxl_enc_mt_simd.worker.js");
              worker = new Worker(pthreadMainJs);
            }
            PThread.unusedWorkers.push(worker);
          },
          getNewWorker: function () {
            if (PThread.unusedWorkers.length == 0) {
              PThread.allocateUnusedWorker();
              PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
            }
            return PThread.unusedWorkers.pop();
          },
        };
        Module9["PThread"] = PThread;
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        }
        function establishStackSpace() {
          var pthread_ptr = _pthread_self();
          var stackTop = GROWABLE_HEAP_I32()[(pthread_ptr + 52) >> 2];
          var stackSize = GROWABLE_HEAP_I32()[(pthread_ptr + 56) >> 2];
          var stackMax = stackTop - stackSize;
          _emscripten_stack_set_limits(stackTop, stackMax);
          stackRestore(stackTop);
        }
        Module9["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(2, 0, returnCode);
          _exit(returnCode);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function invokeEntryPoint(ptr, arg) {
          var result = getWasmTableEntry(ptr)(arg);
          if (keepRuntimeAlive()) {
            PThread.setExitStatus(result);
          } else {
            __emscripten_thread_exit(result);
          }
        }
        Module9["invokeEntryPoint"] = invokeEntryPoint;
        function registerTLSInit(tlsInitFunc) {
          PThread.tlsInitFunctions.push(tlsInitFunc);
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            GROWABLE_HEAP_U32()[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            GROWABLE_HEAP_U32()[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 8) >> 2];
          };
          this.set_refcount = function (refcount) {
            GROWABLE_HEAP_I32()[this.ptr >> 2] = refcount;
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            GROWABLE_HEAP_I8()[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return GROWABLE_HEAP_I8()[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            GROWABLE_HEAP_I8()[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return GROWABLE_HEAP_I8()[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function () {
            Atomics.add(GROWABLE_HEAP_I32(), (this.ptr + 0) >> 2, 1);
          };
          this.release_ref = function () {
            var prev = Atomics.sub(GROWABLE_HEAP_I32(), (this.ptr + 0) >> 2, 1);
            return prev === 1;
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            GROWABLE_HEAP_U32()[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return GROWABLE_HEAP_U32()[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        function ___emscripten_init_main_thread_js(tb) {
          __emscripten_thread_init(
            tb,
            !ENVIRONMENT_IS_WORKER,
            1,
            !ENVIRONMENT_IS_WEB,
          );
          PThread.threadInitTLS();
        }
        function ___emscripten_thread_cleanup(thread) {
          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
          else postMessage({ cmd: "cleanupThread", thread: thread });
        }
        function ___syscall_ioctl(fd, op, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(3, 1, fd, op, varargs);
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              4,
              1,
              dirfd,
              path,
              flags,
              varargs,
            );
          SYSCALLS.varargs = varargs;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](GROWABLE_HEAP_I32()[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return {
            [name]: function () {
              return body.apply(this, arguments);
            },
          }[name];
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) => {
                    return getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    );
                  },
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: function (ptr) {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: function (destructors, o) {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(
                          'Missing field:  "' + fieldName + '"',
                        );
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: simpleReadValueFromPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        }
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (GROWABLE_HEAP_U8()[c]) {
            ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (pointer) {
              var heap2;
              if (size === 1) {
                heap2 = GROWABLE_HEAP_I8();
              } else if (size === 2) {
                heap2 = GROWABLE_HEAP_I16();
              } else if (size === 4) {
                heap2 = GROWABLE_HEAP_I32();
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap2[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: void 0 },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module9["count_emval_handles"] = count_emval_handles;
          Module9["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          },
        };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function (destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              return value;
            },
            toWireType: function (destructors, value) {
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          return function () {
            if (arguments.length !== expectedArgCount) {
              throwBindingError(
                "function " +
                  humanName +
                  " called with " +
                  arguments.length +
                  " arguments, expected " +
                  expectedArgCount +
                  " args!",
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i2 = 0; i2 < expectedArgCount; ++i2) {
              argsWired[i2] = argTypes[i2 + 2]["toWireType"](
                destructors,
                arguments[i2],
              );
              invokerFuncArgs.push(argsWired[i2]);
            }
            var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i3 = isClassMethodFunc ? 1 : 2;
                  i3 < argTypes.length;
                  i3++
                ) {
                  var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                  if (argTypes[i3].destructorFunction !== null) {
                    argTypes[i3].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function () {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(
                  arguments.length,
                )
              ) {
                throwBindingError(
                  "Function '" +
                    humanName +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    proto[methodName].overloadTable +
                    ")!",
                );
              }
              return proto[methodName].overloadTable[arguments.length].apply(
                this,
                arguments,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(
                "Cannot register public name '" + name + "' twice",
              );
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                "Cannot register multiple overloads of a function with the same number of arguments (" +
                  numArguments +
                  ")!",
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(GROWABLE_HEAP_U32()[(firstElement + i * 4) >> 2]);
          }
          return array;
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module9["dynCall_" + sig];
          return args && args.length
            ? f.apply(null, [ptr].concat(args))
            : f.call(null, ptr);
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function () {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              "unknown function pointer with signature " +
                signature +
                ": " +
                rawFunction,
            );
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            message + ": " + unboundTypes.map(getTypeName).join([", "]),
          );
        }
        function __embind_register_function(
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                "Cannot call " + name + " due to unbound types",
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, function (argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return GROWABLE_HEAP_I8()[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return GROWABLE_HEAP_U8()[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return GROWABLE_HEAP_I16()[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return GROWABLE_HEAP_U16()[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return GROWABLE_HEAP_I32()[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return GROWABLE_HEAP_U32()[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap2 = GROWABLE_HEAP_U32();
            var size = heap2[handle];
            var data = heap2[handle + 1];
            return new TA(heap2.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              GROWABLE_HEAP_U32()[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    GROWABLE_HEAP_U8()[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    GROWABLE_HEAP_U8()[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function UTF16ToString(ptr, maxBytesToRead) {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = GROWABLE_HEAP_I16()[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = GROWABLE_HEAP_I32()[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => GROWABLE_HEAP_U16();
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => GROWABLE_HEAP_U32();
            shift = 2;
          }
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError(
                  "Cannot pass non-string to C++ string type " + name,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              GROWABLE_HEAP_U32()[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function __embind_register_value_object(
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        }
        function __embind_register_value_object_field(
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: function () {
              return void 0;
            },
            toWireType: function (destructors, o) {
              return void 0;
            },
          });
        }
        function maybeExit() {
          if (!keepRuntimeAlive()) {
            try {
              if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS);
              else _exit(EXITSTATUS);
            } catch (e) {
              handleException(e);
            }
          }
        }
        function callUserCallback(func) {
          if (ABORT) {
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e) {
            handleException(e);
          }
        }
        function __emscripten_thread_mailbox_await(pthread_ptr) {
          if (typeof Atomics.waitAsync === "function") {
            var wait = Atomics.waitAsync(
              GROWABLE_HEAP_I32(),
              pthread_ptr >> 2,
              pthread_ptr,
            );
            wait.value.then(checkMailbox);
            var waitingAsync = pthread_ptr + 128;
            Atomics.store(GROWABLE_HEAP_I32(), waitingAsync >> 2, 1);
          }
        }
        Module9["__emscripten_thread_mailbox_await"] =
          __emscripten_thread_mailbox_await;
        function checkMailbox() {
          var pthread_ptr = _pthread_self();
          if (pthread_ptr) {
            __emscripten_thread_mailbox_await(pthread_ptr);
            callUserCallback(() => __emscripten_check_mailbox());
          }
        }
        Module9["checkMailbox"] = checkMailbox;
        function __emscripten_notify_mailbox_postmessage(
          targetThreadId,
          currThreadId,
          mainThreadId,
        ) {
          if (targetThreadId == currThreadId) {
            setTimeout(() => checkMailbox());
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ targetThread: targetThreadId, cmd: "checkMailbox" });
          } else {
            var worker = PThread.pthreads[targetThreadId];
            if (!worker) {
              return;
            }
            worker.postMessage({ cmd: "checkMailbox" });
          }
        }
        function __emscripten_set_offscreencanvas_size(target, width, height) {
          return -1;
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              humanName + " has unknown type " + getTypeName(rawType),
            );
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = new Array(argCount + 1);
          return function (constructor, argTypes, args) {
            argsList[0] = constructor;
            for (var i = 0; i < argCount; ++i) {
              var argType = requireRegisteredType(
                GROWABLE_HEAP_U32()[(argTypes + i * 4) >> 2],
                "parameter " + i,
              );
              argsList[i + 1] = argType["readValueFromPointer"](args);
              args += argType["argPackAdvance"];
            }
            var obj = new (constructor.bind.apply(constructor, argsList))();
            return Emval.toHandle(obj);
          };
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_check_blocking_allowed() {}
        function runtimeKeepalivePush() {
          runtimeKeepaliveCounter += 1;
        }
        function _emscripten_exit_with_live_runtime() {
          runtimeKeepalivePush();
          throw "unwind";
        }
        var _emscripten_get_now;
        _emscripten_get_now = () => performance.timeOrigin + performance.now();
        function _emscripten_memcpy_big(dest, src, num) {
          GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
        }
        function _emscripten_num_logical_cores() {
          return navigator["hardwareConcurrency"];
        }
        function withStackSave(f) {
          var stack = stackSave();
          var ret = f();
          stackRestore(stack);
          return ret;
        }
        function _emscripten_proxy_to_main_thread_js(index, sync) {
          var numCallArgs = arguments.length - 2;
          var outerArgs = arguments;
          return withStackSave(() => {
            var serializedNumCallArgs = numCallArgs;
            var args = stackAlloc(serializedNumCallArgs * 8);
            var b = args >> 3;
            for (var i = 0; i < numCallArgs; i++) {
              var arg = outerArgs[2 + i];
              GROWABLE_HEAP_F64()[b + i] = arg;
            }
            return __emscripten_run_in_main_runtime_thread_js(
              index,
              serializedNumCallArgs,
              args,
              sync,
            );
          });
        }
        var _emscripten_receive_on_main_thread_js_callArgs = [];
        function _emscripten_receive_on_main_thread_js(
          index,
          numCallArgs,
          args,
        ) {
          _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            _emscripten_receive_on_main_thread_js_callArgs[i] =
              GROWABLE_HEAP_F64()[b + i];
          }
          var func = proxiedFunctionTable[index];
          return func.apply(
            null,
            _emscripten_receive_on_main_thread_js_callArgs,
          );
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          try {
            wasmMemory.grow((size - b.byteLength + 65535) >>> 16);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = GROWABLE_HEAP_U8().length;
          requestedSize = requestedSize >>> 0;
          if (requestedSize <= oldSize) {
            return false;
          }
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang =
              (
                (typeof navigator == "object" &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8";
            var env = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG: lang,
              _: getExecutableName(),
            };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function writeAsciiToMemory(str, buffer, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0;
        }
        function _environ_get(__environ, environ_buf) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              5,
              1,
              __environ,
              environ_buf,
            );
          var bufSize = 0;
          getEnvStrings().forEach(function (string, i) {
            var ptr = environ_buf + bufSize;
            GROWABLE_HEAP_U32()[(__environ + i * 4) >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              6,
              1,
              penviron_count,
              penviron_buf_size,
            );
          var strings = getEnvStrings();
          GROWABLE_HEAP_U32()[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function (string) {
            bufSize += string.length + 1;
          });
          GROWABLE_HEAP_U32()[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(7, 1, fd);
          return 52;
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              8,
              1,
              fd,
              iov,
              iovcnt,
              pnum,
            );
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              9,
              1,
              fd,
              offset_low,
              offset_high,
              whence,
              newOffset,
            );
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              10,
              1,
              fd,
              iov,
              iovcnt,
              pnum,
            );
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = GROWABLE_HEAP_U32()[iov >> 2];
            var len = GROWABLE_HEAP_U32()[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, GROWABLE_HEAP_U8()[ptr + j]);
            }
            num += len;
          }
          GROWABLE_HEAP_U32()[pnum >> 2] = num;
          return 0;
        }
        function __isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        function __arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {}
          return sum;
        }
        var __MONTH_DAYS_LEAP = [
          31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        var __MONTH_DAYS_REGULAR = [
          31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        function __addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = __isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (
              leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR
            )[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(
            stringy,
            u8array,
            0,
            u8array.length,
          );
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        }
        function writeArrayToMemory(array, buffer) {
          GROWABLE_HEAP_I8().set(array, buffer);
        }
        function _strftime(s, maxsize, format2, tm) {
          var tm_zone = GROWABLE_HEAP_I32()[(tm + 40) >> 2];
          var date = {
            tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
            tm_min: GROWABLE_HEAP_I32()[(tm + 4) >> 2],
            tm_hour: GROWABLE_HEAP_I32()[(tm + 8) >> 2],
            tm_mday: GROWABLE_HEAP_I32()[(tm + 12) >> 2],
            tm_mon: GROWABLE_HEAP_I32()[(tm + 16) >> 2],
            tm_year: GROWABLE_HEAP_I32()[(tm + 20) >> 2],
            tm_wday: GROWABLE_HEAP_I32()[(tm + 24) >> 2],
            tm_yday: GROWABLE_HEAP_I32()[(tm + 28) >> 2],
            tm_isdst: GROWABLE_HEAP_I32()[(tm + 32) >> 2],
            tm_gmtoff: GROWABLE_HEAP_I32()[(tm + 36) >> 2],
            tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
          };
          var pattern = UTF8ToString(format2);
          var EXPANSION_RULES_1 = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y",
          };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(
              new RegExp(rule, "g"),
              EXPANSION_RULES_1[rule],
            );
          }
          var WEEKDAYS = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          var MONTHS = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          function leadingSomething(value, digits, character) {
            var str = typeof value == "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if (
              (compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0
            ) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = __addDays(
              new Date(date2.tm_year + 1900, 0, 1),
              date2.tm_yday,
            );
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear =
              getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear =
              getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear() - 1;
          }
          var EXPANSION_RULES_2 = {
            "%a": function (date2) {
              return WEEKDAYS[date2.tm_wday].substring(0, 3);
            },
            "%A": function (date2) {
              return WEEKDAYS[date2.tm_wday];
            },
            "%b": function (date2) {
              return MONTHS[date2.tm_mon].substring(0, 3);
            },
            "%B": function (date2) {
              return MONTHS[date2.tm_mon];
            },
            "%C": function (date2) {
              var year = date2.tm_year + 1900;
              return leadingNulls((year / 100) | 0, 2);
            },
            "%d": function (date2) {
              return leadingNulls(date2.tm_mday, 2);
            },
            "%e": function (date2) {
              return leadingSomething(date2.tm_mday, 2, " ");
            },
            "%g": function (date2) {
              return getWeekBasedYear(date2).toString().substring(2);
            },
            "%G": function (date2) {
              return getWeekBasedYear(date2);
            },
            "%H": function (date2) {
              return leadingNulls(date2.tm_hour, 2);
            },
            "%I": function (date2) {
              var twelveHour = date2.tm_hour;
              if (twelveHour == 0) twelveHour = 12;
              else if (twelveHour > 12) twelveHour -= 12;
              return leadingNulls(twelveHour, 2);
            },
            "%j": function (date2) {
              return leadingNulls(
                date2.tm_mday +
                  __arraySum(
                    __isLeapYear(date2.tm_year + 1900)
                      ? __MONTH_DAYS_LEAP
                      : __MONTH_DAYS_REGULAR,
                    date2.tm_mon - 1,
                  ),
                3,
              );
            },
            "%m": function (date2) {
              return leadingNulls(date2.tm_mon + 1, 2);
            },
            "%M": function (date2) {
              return leadingNulls(date2.tm_min, 2);
            },
            "%n": function () {
              return "\n";
            },
            "%p": function (date2) {
              if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
                return "AM";
              }
              return "PM";
            },
            "%S": function (date2) {
              return leadingNulls(date2.tm_sec, 2);
            },
            "%t": function () {
              return "	";
            },
            "%u": function (date2) {
              return date2.tm_wday || 7;
            },
            "%U": function (date2) {
              var days = date2.tm_yday + 7 - date2.tm_wday;
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%V": function (date2) {
              var val = Math.floor(
                (date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7)) / 7,
              );
              if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
                val++;
              }
              if (!val) {
                val = 52;
                var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
                if (
                  dec31 == 4 ||
                  (dec31 == 5 && __isLeapYear((date2.tm_year % 400) - 1))
                ) {
                  val++;
                }
              } else if (val == 53) {
                var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date2.tm_year)))
                  val = 1;
              }
              return leadingNulls(val, 2);
            },
            "%w": function (date2) {
              return date2.tm_wday;
            },
            "%W": function (date2) {
              var days = date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7);
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%y": function (date2) {
              return (date2.tm_year + 1900).toString().substring(2);
            },
            "%Y": function (date2) {
              return date2.tm_year + 1900;
            },
            "%z": function (date2) {
              var off = date2.tm_gmtoff;
              var ahead = off >= 0;
              off = Math.abs(off) / 60;
              off = (off / 60) * 100 + (off % 60);
              return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
            },
            "%Z": function (date2) {
              return date2.tm_zone;
            },
            "%%": function () {
              return "%";
            },
          };
          pattern = pattern.replace(/%%/g, "\0\0");
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.includes(rule)) {
              pattern = pattern.replace(
                new RegExp(rule, "g"),
                EXPANSION_RULES_2[rule](date),
              );
            }
          }
          pattern = pattern.replace(/\0\0/g, "%");
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format2, tm, loc) {
          return _strftime(s, maxsize, format2, tm);
        }
        function setErrNo(value) {
          GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
          return value;
        }
        function _system(command) {
          if (!command) return 0;
          setErrNo(52);
          return -1;
        }
        PThread.init();
        InternalError = Module9["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var proxiedFunctionTable = [
          null,
          _proc_exit,
          exitOnMainThread,
          ___syscall_ioctl,
          ___syscall_openat,
          _environ_get,
          _environ_sizes_get,
          _fd_close,
          _fd_read,
          _fd_seek,
          _fd_write,
        ];
        var wasmImports = {
          l: ___cxa_throw,
          G: ___emscripten_init_main_thread_js,
          i: ___emscripten_thread_cleanup,
          J: ___syscall_ioctl,
          K: ___syscall_openat,
          r: __embind_finalize_value_object,
          t: __embind_register_bigint,
          N: __embind_register_bool,
          M: __embind_register_emval,
          m: __embind_register_float,
          q: __embind_register_function,
          d: __embind_register_integer,
          c: __embind_register_memory_view,
          n: __embind_register_std_string,
          h: __embind_register_std_wstring,
          C: __embind_register_value_object,
          e: __embind_register_value_object_field,
          O: __embind_register_void,
          z: __emscripten_notify_mailbox_postmessage,
          E: __emscripten_set_offscreencanvas_size,
          F: __emscripten_thread_mailbox_await,
          g: __emval_decref,
          Q: __emval_get_global,
          p: __emval_incref,
          o: __emval_new,
          b: _abort,
          j: _emscripten_check_blocking_allowed,
          L: _emscripten_exit_with_live_runtime,
          f: _emscripten_get_now,
          B: _emscripten_memcpy_big,
          u: _emscripten_num_logical_cores,
          D: _emscripten_receive_on_main_thread_js,
          y: _emscripten_resize_heap,
          w: _environ_get,
          x: _environ_sizes_get,
          A: _exit,
          k: _fd_close,
          I: _fd_read,
          s: _fd_seek,
          H: _fd_write,
          a: wasmMemory || Module9["wasmMemory"],
          v: _strftime_l,
          P: _system,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = function () {
          return (___wasm_call_ctors = Module9["asm"]["R"]).apply(
            null,
            arguments,
          );
        };
        var _malloc = function () {
          return (_malloc = Module9["asm"]["S"]).apply(null, arguments);
        };
        var _free = function () {
          return (_free = Module9["asm"]["T"]).apply(null, arguments);
        };
        var __emscripten_tls_init = (Module9["__emscripten_tls_init"] =
          function () {
            return (__emscripten_tls_init = Module9["__emscripten_tls_init"] =
              Module9["asm"]["U"]).apply(null, arguments);
          });
        var _pthread_self = (Module9["_pthread_self"] = function () {
          return (_pthread_self = Module9["_pthread_self"] =
            Module9["asm"]["V"]).apply(null, arguments);
        });
        var ___getTypeName = (Module9["___getTypeName"] = function () {
          return (___getTypeName = Module9["___getTypeName"] =
            Module9["asm"]["W"]).apply(null, arguments);
        });
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = function () {
          return (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            Module9["asm"]["X"]).apply(null, arguments);
        });
        var ___errno_location = function () {
          return (___errno_location = Module9["asm"]["Y"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_init = (Module9["__emscripten_thread_init"] =
          function () {
            return (__emscripten_thread_init = Module9[
              "__emscripten_thread_init"
            ] =
              Module9["asm"]["Z"]).apply(null, arguments);
          });
        var __emscripten_thread_crashed = (Module9[
          "__emscripten_thread_crashed"
        ] = function () {
          return (__emscripten_thread_crashed = Module9[
            "__emscripten_thread_crashed"
          ] =
            Module9["asm"]["_"]).apply(null, arguments);
        });
        var _emscripten_main_thread_process_queued_calls = function () {
          return (_emscripten_main_thread_process_queued_calls =
            Module9["asm"][
              "emscripten_main_thread_process_queued_calls"
            ]).apply(null, arguments);
        };
        var _emscripten_main_runtime_thread_id = function () {
          return (_emscripten_main_runtime_thread_id =
            Module9["asm"]["emscripten_main_runtime_thread_id"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_run_in_main_runtime_thread_js = function () {
          return (__emscripten_run_in_main_runtime_thread_js =
            Module9["asm"]["$"]).apply(null, arguments);
        };
        var _emscripten_dispatch_to_thread_ = function () {
          return (_emscripten_dispatch_to_thread_ =
            Module9["asm"]["emscripten_dispatch_to_thread_"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_free_data = function () {
          return (__emscripten_thread_free_data = Module9["asm"]["ba"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_exit = (Module9["__emscripten_thread_exit"] =
          function () {
            return (__emscripten_thread_exit = Module9[
              "__emscripten_thread_exit"
            ] =
              Module9["asm"]["ca"]).apply(null, arguments);
          });
        var __emscripten_check_mailbox = (Module9[
          "__emscripten_check_mailbox"
        ] = function () {
          return (__emscripten_check_mailbox = Module9[
            "__emscripten_check_mailbox"
          ] =
            Module9["asm"]["da"]).apply(null, arguments);
        });
        var _emscripten_stack_set_limits = function () {
          return (_emscripten_stack_set_limits = Module9["asm"]["ea"]).apply(
            null,
            arguments,
          );
        };
        var stackSave = function () {
          return (stackSave = Module9["asm"]["fa"]).apply(null, arguments);
        };
        var stackRestore = function () {
          return (stackRestore = Module9["asm"]["ga"]).apply(null, arguments);
        };
        var stackAlloc = function () {
          return (stackAlloc = Module9["asm"]["ha"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = function () {
          return (___cxa_is_pointer_type = Module9["asm"]["ia"]).apply(
            null,
            arguments,
          );
        };
        var dynCall_jiji = (Module9["dynCall_jiji"] = function () {
          return (dynCall_jiji = Module9["dynCall_jiji"] =
            Module9["asm"]["ja"]).apply(null, arguments);
        });
        var dynCall_iiji = (Module9["dynCall_iiji"] = function () {
          return (dynCall_iiji = Module9["dynCall_iiji"] =
            Module9["asm"]["ka"]).apply(null, arguments);
        });
        var dynCall_viijii = (Module9["dynCall_viijii"] = function () {
          return (dynCall_viijii = Module9["dynCall_viijii"] =
            Module9["asm"]["la"]).apply(null, arguments);
        });
        var dynCall_iiiiij = (Module9["dynCall_iiiiij"] = function () {
          return (dynCall_iiiiij = Module9["dynCall_iiiiij"] =
            Module9["asm"]["ma"]).apply(null, arguments);
        });
        var dynCall_iiiiijj = (Module9["dynCall_iiiiijj"] = function () {
          return (dynCall_iiiiijj = Module9["dynCall_iiiiijj"] =
            Module9["asm"]["na"]).apply(null, arguments);
        });
        var dynCall_iiiiiijj = (Module9["dynCall_iiiiiijj"] = function () {
          return (dynCall_iiiiiijj = Module9["dynCall_iiiiiijj"] =
            Module9["asm"]["oa"]).apply(null, arguments);
        });
        Module9["keepRuntimeAlive"] = keepRuntimeAlive;
        Module9["wasmMemory"] = wasmMemory;
        Module9["ExitStatus"] = ExitStatus;
        Module9["PThread"] = PThread;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module9);
            initRuntime();
            startWorker(Module9);
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return Module9.ready;
      };
    })();
    jxl_enc_mt_simd_default = Module6;
  },
});

// node_modules/@jsquash/jxl/codec/enc/jxl_enc_mt.js
var jxl_enc_mt_exports = {};
__export(jxl_enc_mt_exports, {
  default: () => jxl_enc_mt_default,
});
var Module7, jxl_enc_mt_default;
var init_jxl_enc_mt = __esm({
  "node_modules/@jsquash/jxl/codec/enc/jxl_enc_mt.js"() {
    Module7 = (() => {
      var _scriptDir = import.meta.url;
      return function (Module9 = {}) {
        function GROWABLE_HEAP_I8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP16;
        }
        function GROWABLE_HEAP_U16() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU16;
        }
        function GROWABLE_HEAP_I32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAP32;
        }
        function GROWABLE_HEAP_U32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPU32;
        }
        function GROWABLE_HEAP_F32() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
          if (wasmMemory.buffer != HEAP8.buffer) {
            updateMemoryViews();
          }
          return HEAPF64;
        }
        var Module9 = typeof Module9 != "undefined" ? Module9 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module9["ready"] = new Promise(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          globalThis.caches &&
          globalThis.caches.default !== void 0;
        if (isRunningInCloudFlareWorkers3) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var ENVIRONMENT_IS_PTHREAD = Module9["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => (document.title = title);
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.warn.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var noExitRuntime = Module9["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr
            ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead)
            : "";
        }
        function stringToUTF8Array(str, heap2, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(
            str,
            GROWABLE_HEAP_U8(),
            outPtr,
            maxBytesToWrite,
          );
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var INITIAL_MEMORY = Module9["INITIAL_MEMORY"] || 16777216;
        assert(
          INITIAL_MEMORY >= 65536,
          "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
            INITIAL_MEMORY +
            "! (STACK_SIZE=65536)",
        );
        if (ENVIRONMENT_IS_PTHREAD) {
          wasmMemory = Module9["wasmMemory"];
        } else {
          if (Module9["wasmMemory"]) {
            wasmMemory = Module9["wasmMemory"];
          } else {
            wasmMemory = new WebAssembly.Memory({
              initial: INITIAL_MEMORY / 65536,
              maximum: 2147483648 / 65536,
              shared: true,
            });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
              err(
                "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
              );
              if (ENVIRONMENT_IS_NODE) {
                err(
                  "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)",
                );
              }
              throw Error("bad memory");
            }
          }
        }
        updateMemoryViews();
        INITIAL_MEMORY = wasmMemory.buffer.byteLength;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD) return;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (ENVIRONMENT_IS_PTHREAD) return;
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module9["onAbort"]) {
            Module9["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "jxl_enc_mt.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("jxl_enc_mt.wasm", import.meta.url).href;
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                .catch(function () {
                  return getBinary(binaryFile);
                });
            }
          }
          return Promise.resolve().then(function () {
            return getBinary(binaryFile);
          });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module9["asm"] = exports;
            registerTLSInit(Module9["asm"]["U"]);
            wasmTable = Module9["asm"]["aa"];
            addOnInit(Module9["asm"]["R"]);
            wasmModule = module;
            PThread.loadWasmModuleToAllWorkers(() =>
              removeRunDependency("wasm-instantiate"),
            );
            return exports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"], result["module"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function terminateWorker(worker) {
          worker.terminate();
          worker.onmessage = (e) => {};
        }
        function killThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          delete PThread.pthreads[pthread_ptr];
          terminateWorker(worker);
          __emscripten_thread_free_data(pthread_ptr);
          PThread.runningWorkers.splice(
            PThread.runningWorkers.indexOf(worker),
            1,
          );
          worker.pthread_ptr = 0;
        }
        function cancelThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          worker.postMessage({ cmd: "cancel" });
        }
        function cleanupThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          assert(worker);
          PThread.returnWorkerToPool(worker);
        }
        function spawnThread(threadParams) {
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          PThread.runningWorkers.push(worker);
          PThread.pthreads[threadParams.pthread_ptr] = worker;
          worker.pthread_ptr = threadParams.pthread_ptr;
          var msg = {
            cmd: "run",
            start_routine: threadParams.startRoutine,
            arg: threadParams.arg,
            pthread_ptr: threadParams.pthread_ptr,
          };
          worker.postMessage(msg, threadParams.transferList);
          return 0;
        }
        var SYSCALLS = {
          varargs: void 0,
          get: function () {
            SYSCALLS.varargs += 4;
            var ret = GROWABLE_HEAP_I32()[(SYSCALLS.varargs - 4) >> 2];
            return ret;
          },
          getStr: function (ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        function _proc_exit(code) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(1, 1, code);
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            if (Module9["onExit"]) Module9["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          if (ENVIRONMENT_IS_PTHREAD) {
            exitOnMainThread(status);
            throw "unwind";
          }
          _proc_exit(status);
        }
        var _exit = exitJS;
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        var PThread = {
          unusedWorkers: [],
          runningWorkers: [],
          tlsInitFunctions: [],
          pthreads: {},
          init: function () {
            if (ENVIRONMENT_IS_PTHREAD) {
              PThread.initWorker();
            } else {
              PThread.initMainThread();
            }
          },
          initMainThread: function () {
            var pthreadPoolSize = navigator.hardwareConcurrency;
            while (pthreadPoolSize--) {
              PThread.allocateUnusedWorker();
            }
          },
          initWorker: function () {
            noExitRuntime = false;
          },
          setExitStatus: function (status) {
            EXITSTATUS = status;
          },
          terminateAllThreads__deps: ["$terminateWorker"],
          terminateAllThreads: function () {
            for (var worker of PThread.runningWorkers) {
              terminateWorker(worker);
            }
            for (var worker of PThread.unusedWorkers) {
              terminateWorker(worker);
            }
            PThread.unusedWorkers = [];
            PThread.runningWorkers = [];
            PThread.pthreads = [];
          },
          returnWorkerToPool: function (worker) {
            var pthread_ptr = worker.pthread_ptr;
            delete PThread.pthreads[pthread_ptr];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(
              PThread.runningWorkers.indexOf(worker),
              1,
            );
            worker.pthread_ptr = 0;
            __emscripten_thread_free_data(pthread_ptr);
          },
          receiveObjectTransfer: function (data) {},
          threadInitTLS: function () {
            PThread.tlsInitFunctions.forEach((f) => f());
          },
          loadWasmModuleToWorker: (worker) =>
            new Promise((onFinishedLoading) => {
              worker.onmessage = (e) => {
                var d = e["data"];
                var cmd = d["cmd"];
                if (worker.pthread_ptr)
                  PThread.currentProxiedOperationCallerThread =
                    worker.pthread_ptr;
                if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                  var targetWorker = PThread.pthreads[d.targetThread];
                  if (targetWorker) {
                    targetWorker.postMessage(d, d["transferList"]);
                  } else {
                    err(
                      'Internal error! Worker sent a message "' +
                        cmd +
                        '" to target pthread ' +
                        d["targetThread"] +
                        ", but that thread no longer exists!",
                    );
                  }
                  PThread.currentProxiedOperationCallerThread = void 0;
                  return;
                }
                if (cmd === "checkMailbox") {
                  checkMailbox();
                } else if (cmd === "spawnThread") {
                  spawnThread(d);
                } else if (cmd === "cleanupThread") {
                  cleanupThread(d["thread"]);
                } else if (cmd === "killThread") {
                  killThread(d["thread"]);
                } else if (cmd === "cancelThread") {
                  cancelThread(d["thread"]);
                } else if (cmd === "loaded") {
                  worker.loaded = true;
                  onFinishedLoading(worker);
                } else if (cmd === "print") {
                  out("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (cmd === "printErr") {
                  err("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (cmd === "alert") {
                  alert("Thread " + d["threadId"] + ": " + d["text"]);
                } else if (d.target === "setimmediate") {
                  worker.postMessage(d);
                } else if (cmd === "callHandler") {
                  Module9[d["handler"]](...d["args"]);
                } else if (cmd) {
                  err("worker sent an unknown command " + cmd);
                }
                PThread.currentProxiedOperationCallerThread = void 0;
              };
              worker.onerror = (e) => {
                var message = "worker sent an error!";
                err(
                  message +
                    " " +
                    e.filename +
                    ":" +
                    e.lineno +
                    ": " +
                    e.message,
                );
                throw e;
              };
              var handlers = [];
              var knownHandlers = ["onExit", "onAbort", "print", "printErr"];
              for (var handler of knownHandlers) {
                if (Module9.hasOwnProperty(handler)) {
                  handlers.push(handler);
                }
              }
              worker.postMessage({
                cmd: "load",
                handlers: handlers,
                urlOrBlob: Module9["mainScriptUrlOrBlob"],
                wasmMemory: wasmMemory,
                wasmModule: wasmModule,
              });
            }),
          loadWasmModuleToAllWorkers: function (onMaybeReady) {
            if (ENVIRONMENT_IS_PTHREAD) {
              return onMaybeReady();
            }
            let pthreadPoolReady = Promise.all(
              PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker),
            );
            pthreadPoolReady.then(onMaybeReady);
          },
          allocateUnusedWorker: function () {
            var worker;
            if (!Module9["locateFile"]) {
              worker = new Worker(
                new URL("jxl_enc_mt.worker.js", import.meta.url),
              );
            } else {
              var pthreadMainJs = locateFile("jxl_enc_mt.worker.js");
              worker = new Worker(pthreadMainJs);
            }
            PThread.unusedWorkers.push(worker);
          },
          getNewWorker: function () {
            if (PThread.unusedWorkers.length == 0) {
              PThread.allocateUnusedWorker();
              PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
            }
            return PThread.unusedWorkers.pop();
          },
        };
        Module9["PThread"] = PThread;
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        }
        function establishStackSpace() {
          var pthread_ptr = _pthread_self();
          var stackTop = GROWABLE_HEAP_I32()[(pthread_ptr + 52) >> 2];
          var stackSize = GROWABLE_HEAP_I32()[(pthread_ptr + 56) >> 2];
          var stackMax = stackTop - stackSize;
          _emscripten_stack_set_limits(stackTop, stackMax);
          stackRestore(stackTop);
        }
        Module9["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(2, 0, returnCode);
          _exit(returnCode);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function invokeEntryPoint(ptr, arg) {
          var result = getWasmTableEntry(ptr)(arg);
          if (keepRuntimeAlive()) {
            PThread.setExitStatus(result);
          } else {
            __emscripten_thread_exit(result);
          }
        }
        Module9["invokeEntryPoint"] = invokeEntryPoint;
        function registerTLSInit(tlsInitFunc) {
          PThread.tlsInitFunctions.push(tlsInitFunc);
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            GROWABLE_HEAP_U32()[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            GROWABLE_HEAP_U32()[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 8) >> 2];
          };
          this.set_refcount = function (refcount) {
            GROWABLE_HEAP_I32()[this.ptr >> 2] = refcount;
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            GROWABLE_HEAP_I8()[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return GROWABLE_HEAP_I8()[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            GROWABLE_HEAP_I8()[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return GROWABLE_HEAP_I8()[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function () {
            Atomics.add(GROWABLE_HEAP_I32(), (this.ptr + 0) >> 2, 1);
          };
          this.release_ref = function () {
            var prev = Atomics.sub(GROWABLE_HEAP_I32(), (this.ptr + 0) >> 2, 1);
            return prev === 1;
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            GROWABLE_HEAP_U32()[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return GROWABLE_HEAP_U32()[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return GROWABLE_HEAP_U32()[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        function ___emscripten_init_main_thread_js(tb) {
          __emscripten_thread_init(
            tb,
            !ENVIRONMENT_IS_WORKER,
            1,
            !ENVIRONMENT_IS_WEB,
          );
          PThread.threadInitTLS();
        }
        function ___emscripten_thread_cleanup(thread) {
          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
          else postMessage({ cmd: "cleanupThread", thread: thread });
        }
        function ___syscall_ioctl(fd, op, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(3, 1, fd, op, varargs);
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              4,
              1,
              dirfd,
              path,
              flags,
              varargs,
            );
          SYSCALLS.varargs = varargs;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](GROWABLE_HEAP_I32()[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return {
            [name]: function () {
              return body.apply(this, arguments);
            },
          }[name];
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) => {
                    return getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    );
                  },
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: function (ptr) {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: function (destructors, o) {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(
                          'Missing field:  "' + fieldName + '"',
                        );
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: simpleReadValueFromPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        }
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (GROWABLE_HEAP_U8()[c]) {
            ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (pointer) {
              var heap2;
              if (size === 1) {
                heap2 = GROWABLE_HEAP_I8();
              } else if (size === 2) {
                heap2 = GROWABLE_HEAP_I16();
              } else if (size === 4) {
                heap2 = GROWABLE_HEAP_I32();
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap2[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: void 0 },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module9["count_emval_handles"] = count_emval_handles;
          Module9["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          },
        };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function (destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              return value;
            },
            toWireType: function (destructors, value) {
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          return function () {
            if (arguments.length !== expectedArgCount) {
              throwBindingError(
                "function " +
                  humanName +
                  " called with " +
                  arguments.length +
                  " arguments, expected " +
                  expectedArgCount +
                  " args!",
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i2 = 0; i2 < expectedArgCount; ++i2) {
              argsWired[i2] = argTypes[i2 + 2]["toWireType"](
                destructors,
                arguments[i2],
              );
              invokerFuncArgs.push(argsWired[i2]);
            }
            var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i3 = isClassMethodFunc ? 1 : 2;
                  i3 < argTypes.length;
                  i3++
                ) {
                  var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                  if (argTypes[i3].destructorFunction !== null) {
                    argTypes[i3].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function () {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(
                  arguments.length,
                )
              ) {
                throwBindingError(
                  "Function '" +
                    humanName +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    proto[methodName].overloadTable +
                    ")!",
                );
              }
              return proto[methodName].overloadTable[arguments.length].apply(
                this,
                arguments,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(
                "Cannot register public name '" + name + "' twice",
              );
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                "Cannot register multiple overloads of a function with the same number of arguments (" +
                  numArguments +
                  ")!",
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(GROWABLE_HEAP_U32()[(firstElement + i * 4) >> 2]);
          }
          return array;
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module9["dynCall_" + sig];
          return args && args.length
            ? f.apply(null, [ptr].concat(args))
            : f.call(null, ptr);
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function () {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              "unknown function pointer with signature " +
                signature +
                ": " +
                rawFunction,
            );
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            message + ": " + unboundTypes.map(getTypeName).join([", "]),
          );
        }
        function __embind_register_function(
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                "Cannot call " + name + " due to unbound types",
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, function (argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return GROWABLE_HEAP_I8()[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return GROWABLE_HEAP_U8()[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return GROWABLE_HEAP_I16()[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return GROWABLE_HEAP_U16()[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return GROWABLE_HEAP_I32()[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return GROWABLE_HEAP_U32()[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap2 = GROWABLE_HEAP_U32();
            var size = heap2[handle];
            var data = heap2[handle + 1];
            return new TA(heap2.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              GROWABLE_HEAP_U32()[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    GROWABLE_HEAP_U8()[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    GROWABLE_HEAP_U8()[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function UTF16ToString(ptr, maxBytesToRead) {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = GROWABLE_HEAP_I16()[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = GROWABLE_HEAP_I32()[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => GROWABLE_HEAP_U16();
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => GROWABLE_HEAP_U32();
            shift = 2;
          }
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = GROWABLE_HEAP_U32()[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError(
                  "Cannot pass non-string to C++ string type " + name,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              GROWABLE_HEAP_U32()[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function __embind_register_value_object(
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        }
        function __embind_register_value_object_field(
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: function () {
              return void 0;
            },
            toWireType: function (destructors, o) {
              return void 0;
            },
          });
        }
        function maybeExit() {
          if (!keepRuntimeAlive()) {
            try {
              if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS);
              else _exit(EXITSTATUS);
            } catch (e) {
              handleException(e);
            }
          }
        }
        function callUserCallback(func) {
          if (ABORT) {
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e) {
            handleException(e);
          }
        }
        function __emscripten_thread_mailbox_await(pthread_ptr) {
          if (typeof Atomics.waitAsync === "function") {
            var wait = Atomics.waitAsync(
              GROWABLE_HEAP_I32(),
              pthread_ptr >> 2,
              pthread_ptr,
            );
            wait.value.then(checkMailbox);
            var waitingAsync = pthread_ptr + 128;
            Atomics.store(GROWABLE_HEAP_I32(), waitingAsync >> 2, 1);
          }
        }
        Module9["__emscripten_thread_mailbox_await"] =
          __emscripten_thread_mailbox_await;
        function checkMailbox() {
          var pthread_ptr = _pthread_self();
          if (pthread_ptr) {
            __emscripten_thread_mailbox_await(pthread_ptr);
            callUserCallback(() => __emscripten_check_mailbox());
          }
        }
        Module9["checkMailbox"] = checkMailbox;
        function __emscripten_notify_mailbox_postmessage(
          targetThreadId,
          currThreadId,
          mainThreadId,
        ) {
          if (targetThreadId == currThreadId) {
            setTimeout(() => checkMailbox());
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ targetThread: targetThreadId, cmd: "checkMailbox" });
          } else {
            var worker = PThread.pthreads[targetThreadId];
            if (!worker) {
              return;
            }
            worker.postMessage({ cmd: "checkMailbox" });
          }
        }
        function __emscripten_set_offscreencanvas_size(target, width, height) {
          return -1;
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              humanName + " has unknown type " + getTypeName(rawType),
            );
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = new Array(argCount + 1);
          return function (constructor, argTypes, args) {
            argsList[0] = constructor;
            for (var i = 0; i < argCount; ++i) {
              var argType = requireRegisteredType(
                GROWABLE_HEAP_U32()[(argTypes + i * 4) >> 2],
                "parameter " + i,
              );
              argsList[i + 1] = argType["readValueFromPointer"](args);
              args += argType["argPackAdvance"];
            }
            var obj = new (constructor.bind.apply(constructor, argsList))();
            return Emval.toHandle(obj);
          };
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_check_blocking_allowed() {}
        function runtimeKeepalivePush() {
          runtimeKeepaliveCounter += 1;
        }
        function _emscripten_exit_with_live_runtime() {
          runtimeKeepalivePush();
          throw "unwind";
        }
        var _emscripten_get_now;
        _emscripten_get_now = () => performance.timeOrigin + performance.now();
        function _emscripten_memcpy_big(dest, src, num) {
          GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
        }
        function _emscripten_num_logical_cores() {
          return navigator["hardwareConcurrency"];
        }
        function withStackSave(f) {
          var stack = stackSave();
          var ret = f();
          stackRestore(stack);
          return ret;
        }
        function _emscripten_proxy_to_main_thread_js(index, sync) {
          var numCallArgs = arguments.length - 2;
          var outerArgs = arguments;
          return withStackSave(() => {
            var serializedNumCallArgs = numCallArgs;
            var args = stackAlloc(serializedNumCallArgs * 8);
            var b = args >> 3;
            for (var i = 0; i < numCallArgs; i++) {
              var arg = outerArgs[2 + i];
              GROWABLE_HEAP_F64()[b + i] = arg;
            }
            return __emscripten_run_in_main_runtime_thread_js(
              index,
              serializedNumCallArgs,
              args,
              sync,
            );
          });
        }
        var _emscripten_receive_on_main_thread_js_callArgs = [];
        function _emscripten_receive_on_main_thread_js(
          index,
          numCallArgs,
          args,
        ) {
          _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            _emscripten_receive_on_main_thread_js_callArgs[i] =
              GROWABLE_HEAP_F64()[b + i];
          }
          var func = proxiedFunctionTable[index];
          return func.apply(
            null,
            _emscripten_receive_on_main_thread_js_callArgs,
          );
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          try {
            wasmMemory.grow((size - b.byteLength + 65535) >>> 16);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = GROWABLE_HEAP_U8().length;
          requestedSize = requestedSize >>> 0;
          if (requestedSize <= oldSize) {
            return false;
          }
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang =
              (
                (typeof navigator == "object" &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8";
            var env = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG: lang,
              _: getExecutableName(),
            };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function writeAsciiToMemory(str, buffer, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0;
        }
        function _environ_get(__environ, environ_buf) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              5,
              1,
              __environ,
              environ_buf,
            );
          var bufSize = 0;
          getEnvStrings().forEach(function (string, i) {
            var ptr = environ_buf + bufSize;
            GROWABLE_HEAP_U32()[(__environ + i * 4) >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              6,
              1,
              penviron_count,
              penviron_buf_size,
            );
          var strings = getEnvStrings();
          GROWABLE_HEAP_U32()[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function (string) {
            bufSize += string.length + 1;
          });
          GROWABLE_HEAP_U32()[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(7, 1, fd);
          return 52;
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              8,
              1,
              fd,
              iov,
              iovcnt,
              pnum,
            );
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              9,
              1,
              fd,
              offset_low,
              offset_high,
              whence,
              newOffset,
            );
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(
              10,
              1,
              fd,
              iov,
              iovcnt,
              pnum,
            );
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = GROWABLE_HEAP_U32()[iov >> 2];
            var len = GROWABLE_HEAP_U32()[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, GROWABLE_HEAP_U8()[ptr + j]);
            }
            num += len;
          }
          GROWABLE_HEAP_U32()[pnum >> 2] = num;
          return 0;
        }
        function __isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        function __arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {}
          return sum;
        }
        var __MONTH_DAYS_LEAP = [
          31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        var __MONTH_DAYS_REGULAR = [
          31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        function __addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = __isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (
              leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR
            )[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(
            stringy,
            u8array,
            0,
            u8array.length,
          );
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        }
        function writeArrayToMemory(array, buffer) {
          GROWABLE_HEAP_I8().set(array, buffer);
        }
        function _strftime(s, maxsize, format2, tm) {
          var tm_zone = GROWABLE_HEAP_I32()[(tm + 40) >> 2];
          var date = {
            tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
            tm_min: GROWABLE_HEAP_I32()[(tm + 4) >> 2],
            tm_hour: GROWABLE_HEAP_I32()[(tm + 8) >> 2],
            tm_mday: GROWABLE_HEAP_I32()[(tm + 12) >> 2],
            tm_mon: GROWABLE_HEAP_I32()[(tm + 16) >> 2],
            tm_year: GROWABLE_HEAP_I32()[(tm + 20) >> 2],
            tm_wday: GROWABLE_HEAP_I32()[(tm + 24) >> 2],
            tm_yday: GROWABLE_HEAP_I32()[(tm + 28) >> 2],
            tm_isdst: GROWABLE_HEAP_I32()[(tm + 32) >> 2],
            tm_gmtoff: GROWABLE_HEAP_I32()[(tm + 36) >> 2],
            tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
          };
          var pattern = UTF8ToString(format2);
          var EXPANSION_RULES_1 = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y",
          };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(
              new RegExp(rule, "g"),
              EXPANSION_RULES_1[rule],
            );
          }
          var WEEKDAYS = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          var MONTHS = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          function leadingSomething(value, digits, character) {
            var str = typeof value == "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if (
              (compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0
            ) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = __addDays(
              new Date(date2.tm_year + 1900, 0, 1),
              date2.tm_yday,
            );
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear =
              getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear =
              getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear() - 1;
          }
          var EXPANSION_RULES_2 = {
            "%a": function (date2) {
              return WEEKDAYS[date2.tm_wday].substring(0, 3);
            },
            "%A": function (date2) {
              return WEEKDAYS[date2.tm_wday];
            },
            "%b": function (date2) {
              return MONTHS[date2.tm_mon].substring(0, 3);
            },
            "%B": function (date2) {
              return MONTHS[date2.tm_mon];
            },
            "%C": function (date2) {
              var year = date2.tm_year + 1900;
              return leadingNulls((year / 100) | 0, 2);
            },
            "%d": function (date2) {
              return leadingNulls(date2.tm_mday, 2);
            },
            "%e": function (date2) {
              return leadingSomething(date2.tm_mday, 2, " ");
            },
            "%g": function (date2) {
              return getWeekBasedYear(date2).toString().substring(2);
            },
            "%G": function (date2) {
              return getWeekBasedYear(date2);
            },
            "%H": function (date2) {
              return leadingNulls(date2.tm_hour, 2);
            },
            "%I": function (date2) {
              var twelveHour = date2.tm_hour;
              if (twelveHour == 0) twelveHour = 12;
              else if (twelveHour > 12) twelveHour -= 12;
              return leadingNulls(twelveHour, 2);
            },
            "%j": function (date2) {
              return leadingNulls(
                date2.tm_mday +
                  __arraySum(
                    __isLeapYear(date2.tm_year + 1900)
                      ? __MONTH_DAYS_LEAP
                      : __MONTH_DAYS_REGULAR,
                    date2.tm_mon - 1,
                  ),
                3,
              );
            },
            "%m": function (date2) {
              return leadingNulls(date2.tm_mon + 1, 2);
            },
            "%M": function (date2) {
              return leadingNulls(date2.tm_min, 2);
            },
            "%n": function () {
              return "\n";
            },
            "%p": function (date2) {
              if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
                return "AM";
              }
              return "PM";
            },
            "%S": function (date2) {
              return leadingNulls(date2.tm_sec, 2);
            },
            "%t": function () {
              return "	";
            },
            "%u": function (date2) {
              return date2.tm_wday || 7;
            },
            "%U": function (date2) {
              var days = date2.tm_yday + 7 - date2.tm_wday;
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%V": function (date2) {
              var val = Math.floor(
                (date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7)) / 7,
              );
              if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
                val++;
              }
              if (!val) {
                val = 52;
                var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
                if (
                  dec31 == 4 ||
                  (dec31 == 5 && __isLeapYear((date2.tm_year % 400) - 1))
                ) {
                  val++;
                }
              } else if (val == 53) {
                var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date2.tm_year)))
                  val = 1;
              }
              return leadingNulls(val, 2);
            },
            "%w": function (date2) {
              return date2.tm_wday;
            },
            "%W": function (date2) {
              var days = date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7);
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%y": function (date2) {
              return (date2.tm_year + 1900).toString().substring(2);
            },
            "%Y": function (date2) {
              return date2.tm_year + 1900;
            },
            "%z": function (date2) {
              var off = date2.tm_gmtoff;
              var ahead = off >= 0;
              off = Math.abs(off) / 60;
              off = (off / 60) * 100 + (off % 60);
              return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
            },
            "%Z": function (date2) {
              return date2.tm_zone;
            },
            "%%": function () {
              return "%";
            },
          };
          pattern = pattern.replace(/%%/g, "\0\0");
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.includes(rule)) {
              pattern = pattern.replace(
                new RegExp(rule, "g"),
                EXPANSION_RULES_2[rule](date),
              );
            }
          }
          pattern = pattern.replace(/\0\0/g, "%");
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format2, tm, loc) {
          return _strftime(s, maxsize, format2, tm);
        }
        function setErrNo(value) {
          GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
          return value;
        }
        function _system(command) {
          if (!command) return 0;
          setErrNo(52);
          return -1;
        }
        PThread.init();
        InternalError = Module9["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var proxiedFunctionTable = [
          null,
          _proc_exit,
          exitOnMainThread,
          ___syscall_ioctl,
          ___syscall_openat,
          _environ_get,
          _environ_sizes_get,
          _fd_close,
          _fd_read,
          _fd_seek,
          _fd_write,
        ];
        var wasmImports = {
          l: ___cxa_throw,
          G: ___emscripten_init_main_thread_js,
          i: ___emscripten_thread_cleanup,
          J: ___syscall_ioctl,
          K: ___syscall_openat,
          r: __embind_finalize_value_object,
          t: __embind_register_bigint,
          N: __embind_register_bool,
          M: __embind_register_emval,
          m: __embind_register_float,
          q: __embind_register_function,
          d: __embind_register_integer,
          c: __embind_register_memory_view,
          n: __embind_register_std_string,
          h: __embind_register_std_wstring,
          C: __embind_register_value_object,
          e: __embind_register_value_object_field,
          O: __embind_register_void,
          z: __emscripten_notify_mailbox_postmessage,
          E: __emscripten_set_offscreencanvas_size,
          F: __emscripten_thread_mailbox_await,
          g: __emval_decref,
          Q: __emval_get_global,
          p: __emval_incref,
          o: __emval_new,
          b: _abort,
          j: _emscripten_check_blocking_allowed,
          L: _emscripten_exit_with_live_runtime,
          f: _emscripten_get_now,
          B: _emscripten_memcpy_big,
          u: _emscripten_num_logical_cores,
          D: _emscripten_receive_on_main_thread_js,
          y: _emscripten_resize_heap,
          w: _environ_get,
          x: _environ_sizes_get,
          A: _exit,
          k: _fd_close,
          I: _fd_read,
          s: _fd_seek,
          H: _fd_write,
          a: wasmMemory || Module9["wasmMemory"],
          v: _strftime_l,
          P: _system,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = function () {
          return (___wasm_call_ctors = Module9["asm"]["R"]).apply(
            null,
            arguments,
          );
        };
        var _malloc = function () {
          return (_malloc = Module9["asm"]["S"]).apply(null, arguments);
        };
        var _free = function () {
          return (_free = Module9["asm"]["T"]).apply(null, arguments);
        };
        var __emscripten_tls_init = (Module9["__emscripten_tls_init"] =
          function () {
            return (__emscripten_tls_init = Module9["__emscripten_tls_init"] =
              Module9["asm"]["U"]).apply(null, arguments);
          });
        var _pthread_self = (Module9["_pthread_self"] = function () {
          return (_pthread_self = Module9["_pthread_self"] =
            Module9["asm"]["V"]).apply(null, arguments);
        });
        var ___getTypeName = (Module9["___getTypeName"] = function () {
          return (___getTypeName = Module9["___getTypeName"] =
            Module9["asm"]["W"]).apply(null, arguments);
        });
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = function () {
          return (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            Module9["asm"]["X"]).apply(null, arguments);
        });
        var ___errno_location = function () {
          return (___errno_location = Module9["asm"]["Y"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_init = (Module9["__emscripten_thread_init"] =
          function () {
            return (__emscripten_thread_init = Module9[
              "__emscripten_thread_init"
            ] =
              Module9["asm"]["Z"]).apply(null, arguments);
          });
        var __emscripten_thread_crashed = (Module9[
          "__emscripten_thread_crashed"
        ] = function () {
          return (__emscripten_thread_crashed = Module9[
            "__emscripten_thread_crashed"
          ] =
            Module9["asm"]["_"]).apply(null, arguments);
        });
        var _emscripten_main_thread_process_queued_calls = function () {
          return (_emscripten_main_thread_process_queued_calls =
            Module9["asm"][
              "emscripten_main_thread_process_queued_calls"
            ]).apply(null, arguments);
        };
        var _emscripten_main_runtime_thread_id = function () {
          return (_emscripten_main_runtime_thread_id =
            Module9["asm"]["emscripten_main_runtime_thread_id"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_run_in_main_runtime_thread_js = function () {
          return (__emscripten_run_in_main_runtime_thread_js =
            Module9["asm"]["$"]).apply(null, arguments);
        };
        var _emscripten_dispatch_to_thread_ = function () {
          return (_emscripten_dispatch_to_thread_ =
            Module9["asm"]["emscripten_dispatch_to_thread_"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_free_data = function () {
          return (__emscripten_thread_free_data = Module9["asm"]["ba"]).apply(
            null,
            arguments,
          );
        };
        var __emscripten_thread_exit = (Module9["__emscripten_thread_exit"] =
          function () {
            return (__emscripten_thread_exit = Module9[
              "__emscripten_thread_exit"
            ] =
              Module9["asm"]["ca"]).apply(null, arguments);
          });
        var __emscripten_check_mailbox = (Module9[
          "__emscripten_check_mailbox"
        ] = function () {
          return (__emscripten_check_mailbox = Module9[
            "__emscripten_check_mailbox"
          ] =
            Module9["asm"]["da"]).apply(null, arguments);
        });
        var _emscripten_stack_set_limits = function () {
          return (_emscripten_stack_set_limits = Module9["asm"]["ea"]).apply(
            null,
            arguments,
          );
        };
        var stackSave = function () {
          return (stackSave = Module9["asm"]["fa"]).apply(null, arguments);
        };
        var stackRestore = function () {
          return (stackRestore = Module9["asm"]["ga"]).apply(null, arguments);
        };
        var stackAlloc = function () {
          return (stackAlloc = Module9["asm"]["ha"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = function () {
          return (___cxa_is_pointer_type = Module9["asm"]["ia"]).apply(
            null,
            arguments,
          );
        };
        var dynCall_jiji = (Module9["dynCall_jiji"] = function () {
          return (dynCall_jiji = Module9["dynCall_jiji"] =
            Module9["asm"]["ja"]).apply(null, arguments);
        });
        var dynCall_iiji = (Module9["dynCall_iiji"] = function () {
          return (dynCall_iiji = Module9["dynCall_iiji"] =
            Module9["asm"]["ka"]).apply(null, arguments);
        });
        var dynCall_viijii = (Module9["dynCall_viijii"] = function () {
          return (dynCall_viijii = Module9["dynCall_viijii"] =
            Module9["asm"]["la"]).apply(null, arguments);
        });
        var dynCall_iiiiij = (Module9["dynCall_iiiiij"] = function () {
          return (dynCall_iiiiij = Module9["dynCall_iiiiij"] =
            Module9["asm"]["ma"]).apply(null, arguments);
        });
        var dynCall_iiiiijj = (Module9["dynCall_iiiiijj"] = function () {
          return (dynCall_iiiiijj = Module9["dynCall_iiiiijj"] =
            Module9["asm"]["na"]).apply(null, arguments);
        });
        var dynCall_iiiiiijj = (Module9["dynCall_iiiiiijj"] = function () {
          return (dynCall_iiiiiijj = Module9["dynCall_iiiiiijj"] =
            Module9["asm"]["oa"]).apply(null, arguments);
        });
        Module9["keepRuntimeAlive"] = keepRuntimeAlive;
        Module9["wasmMemory"] = wasmMemory;
        Module9["ExitStatus"] = ExitStatus;
        Module9["PThread"] = PThread;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module9);
            initRuntime();
            startWorker(Module9);
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return Module9.ready;
      };
    })();
    jxl_enc_mt_default = Module7;
  },
});

// node_modules/@jsquash/jxl/codec/enc/jxl_enc.js
var jxl_enc_exports = {};
__export(jxl_enc_exports, {
  default: () => jxl_enc_default,
});
var Module8, jxl_enc_default;
var init_jxl_enc = __esm({
  "node_modules/@jsquash/jxl/codec/enc/jxl_enc.js"() {
    Module8 = (() => {
      var _scriptDir = import.meta.url;
      return function (Module9 = {}) {
        var Module9 = typeof Module9 != "undefined" ? Module9 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module9["ready"] = new Promise(function (resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
        const isRunningInCloudFlareWorkers3 =
          isServiceWorker3 &&
          typeof self !== "undefined" &&
          globalThis.caches &&
          globalThis.caches.default !== void 0;
        const isRunningInNode5 =
          typeof process === "object" &&
          process.release &&
          process.release.name === "node";
        if (isRunningInCloudFlareWorkers3 || isRunningInNode5) {
          if (!globalThis.ImageData) {
            globalThis.ImageData = class ImageData {
              constructor(data, width, height) {
                this.data = data;
                this.width = width;
                this.height = height;
              }
            };
          }
          if (import.meta.url === void 0) {
            import.meta.url = "https://localhost";
          }
          if (typeof self !== "undefined" && self.location === void 0) {
            self.location = { href: "" };
          }
        }
        var moduleOverrides = Object.assign({}, Module9);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module9["locateFile"]) {
            return Module9["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
            );
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => (document.title = title);
        } else {
        }
        var out = Module9["print"] || console.log.bind(console);
        var err = Module9["printErr"] || console.warn.bind(console);
        Object.assign(Module9, moduleOverrides);
        moduleOverrides = null;
        if (Module9["arguments"]) arguments_ = Module9["arguments"];
        if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
        if (Module9["quit"]) quit_ = Module9["quit"];
        var wasmBinary;
        if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
        var noExitRuntime = Module9["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var str = "";
          while (!(idx >= endIdx)) {
            var u0 = heapOrArray[idx++];
            if (!u0) return str;
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode(((u0 & 31) << 6) | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            } else {
              u0 =
                ((u0 & 7) << 18) |
                (u1 << 12) |
                (u2 << 6) |
                (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap2, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap2[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap2[outIdx++] = 192 | (u >> 6);
              heap2[outIdx++] = 128 | (u & 63);
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap2[outIdx++] = 224 | (u >> 12);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap2[outIdx++] = 240 | (u >> 18);
              heap2[outIdx++] = 128 | ((u >> 12) & 63);
              heap2[outIdx++] = 128 | ((u >> 6) & 63);
              heap2[outIdx++] = 128 | (u & 63);
            }
          }
          heap2[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module9["HEAP8"] = HEAP8 = new Int8Array(b);
          Module9["HEAP16"] = HEAP16 = new Int16Array(b);
          Module9["HEAP32"] = HEAP32 = new Int32Array(b);
          Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          if (Module9["preRun"]) {
            if (typeof Module9["preRun"] == "function")
              Module9["preRun"] = [Module9["preRun"]];
            while (Module9["preRun"].length) {
              addOnPreRun(Module9["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module9["postRun"]) {
            if (typeof Module9["postRun"] == "function")
              Module9["postRun"] = [Module9["postRun"]];
            while (Module9["postRun"].length) {
              addOnPostRun(Module9["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module9["monitorRunDependencies"]) {
            Module9["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module9["onAbort"]) {
            Module9["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        if (Module9["locateFile"]) {
          wasmBinaryFile = "jxl_enc.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
        } else {
          wasmBinaryFile = new URL("jxl_enc.wasm", import.meta.url).href;
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" })
                .then(function (response) {
                  if (!response["ok"]) {
                    throw (
                      "failed to load wasm binary file at '" + binaryFile + "'"
                    );
                  }
                  return response["arrayBuffer"]();
                })
                .catch(function () {
                  return getBinary(binaryFile);
                });
            }
          }
          return Promise.resolve().then(function () {
            return getBinary(binaryFile);
          });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile)
            .then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            })
            .then(function (instance) {
              return instance;
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (
            !binary &&
            typeof WebAssembly.instantiateStreaming == "function" &&
            !isDataURI(binaryFile) &&
            typeof fetch == "function"
          ) {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              function (response) {
                var result = WebAssembly.instantiateStreaming(
                  response,
                  imports,
                );
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              },
            );
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { a: wasmImports };
          function receiveInstance(instance, module) {
            var exports = instance.exports;
            Module9["asm"] = exports;
            wasmMemory = Module9["asm"]["F"];
            updateMemoryViews();
            wasmTable = Module9["asm"]["M"];
            addOnInit(Module9["asm"]["G"]);
            removeRunDependency("wasm-instantiate");
            return exports;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module9["instantiateWasm"]) {
            try {
              return Module9["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult,
          ).catch(readyPromiseReject);
          return {};
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module9);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function (type) {
            HEAPU32[(this.ptr + 4) >> 2] = type;
          };
          this.get_type = function () {
            return HEAPU32[(this.ptr + 4) >> 2];
          };
          this.set_destructor = function (destructor) {
            HEAPU32[(this.ptr + 8) >> 2] = destructor;
          };
          this.get_destructor = function () {
            return HEAPU32[(this.ptr + 8) >> 2];
          };
          this.set_refcount = function (refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function (caught) {
            caught = caught ? 1 : 0;
            HEAP8[(this.ptr + 12) >> 0] = caught;
          };
          this.get_caught = function () {
            return HEAP8[(this.ptr + 12) >> 0] != 0;
          };
          this.set_rethrown = function (rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[(this.ptr + 13) >> 0] = rethrown;
          };
          this.get_rethrown = function () {
            return HEAP8[(this.ptr + 13) >> 0] != 0;
          };
          this.init = function (type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function () {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function () {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function (adjustedPtr) {
            HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function () {
            return HEAPU32[(this.ptr + 16) >> 2];
          };
          this.get_exception_ptr = function () {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var SYSCALLS = {
          varargs: void 0,
          get: function () {
            SYSCALLS.varargs += 4;
            var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
            return ret;
          },
          getStr: function (ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          },
        };
        function ___syscall_ioctl(fd, op, varargs) {
          SYSCALLS.varargs = varargs;
          return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          SYSCALLS.varargs = varargs;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return {
            [name]: function () {
              return body.apply(this, arguments);
            },
          }[name];
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function (message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack =
                this.toString() +
                "\n" +
                stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function () {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(
          myTypes,
          dependentTypes,
          getTypeConverters,
        ) {
          myTypes.forEach(function (type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords
            .map((field) => field.getterReturnType)
            .concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved(
            [structType],
            fieldTypes,
            (fieldTypes2) => {
              var fields = {};
              fieldRecords.forEach((field, i) => {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes2[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes2[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                  read: (ptr) => {
                    return getterReturnType["fromWireType"](
                      getter(getterContext, ptr),
                    );
                  },
                  write: (ptr, o) => {
                    var destructors = [];
                    setter(
                      setterContext,
                      ptr,
                      setterArgumentType["toWireType"](destructors, o),
                    );
                    runDestructors(destructors);
                  },
                };
              });
              return [
                {
                  name: reg.name,
                  fromWireType: function (ptr) {
                    var rv = {};
                    for (var i in fields) {
                      rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                  },
                  toWireType: function (destructors, o) {
                    for (var fieldName in fields) {
                      if (!(fieldName in o)) {
                        throw new TypeError(
                          'Missing field:  "' + fieldName + '"',
                        );
                      }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                      fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                      destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: simpleReadValueFromPointer,
                  destructorFunction: rawDestructor,
                },
              ];
            },
          );
        }
        function __embind_register_bigint(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {}
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError(
              'type "' + name + '" must have a positive integer typeid pointer',
            );
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(
          rawType,
          name,
          size,
          trueValue,
          falseValue,
        ) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (wt) {
              return !!wt;
            },
            toWireType: function (destructors, o) {
              return o ? trueValue : falseValue;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (pointer) {
              var heap2;
              if (size === 1) {
                heap2 = HEAP8;
              } else if (size === 2) {
                heap2 = HEAP16;
              } else if (size === 4) {
                heap2 = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap2[pointer >> shift]);
            },
            destructorFunction: null,
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [
          {},
          { value: void 0 },
          { value: null },
          { value: true },
          { value: false },
        ];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module9["count_emval_handles"] = count_emval_handles;
          Module9["get_first_emval"] = get_first_emval;
        }
        var Emval = {
          toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          },
          toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length
                  ? emval_free_list.pop()
                  : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          },
        };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            toWireType: function (destructors, value) {
              return Emval.toHandle(value);
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: null,
          });
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function (pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function (pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              return value;
            },
            toWireType: function (destructors, value) {
              return value;
            },
            argPackAdvance: 8,
            readValueFromPointer: floatReadValueFromPointer(name, shift),
            destructorFunction: null,
          });
        }
        function craftInvokerFunction(
          humanName,
          argTypes,
          classType,
          cppInvokerFunc,
          cppTargetFunc,
          isAsync,
        ) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (
              argTypes[i] !== null &&
              argTypes[i].destructorFunction === void 0
            ) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var expectedArgCount = argCount - 2;
          var argsWired = new Array(expectedArgCount);
          var invokerFuncArgs = [];
          var destructors = [];
          return function () {
            if (arguments.length !== expectedArgCount) {
              throwBindingError(
                "function " +
                  humanName +
                  " called with " +
                  arguments.length +
                  " arguments, expected " +
                  expectedArgCount +
                  " args!",
              );
            }
            destructors.length = 0;
            var thisWired;
            invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
            invokerFuncArgs[0] = cppTargetFunc;
            if (isClassMethodFunc) {
              thisWired = argTypes[1]["toWireType"](destructors, this);
              invokerFuncArgs[1] = thisWired;
            }
            for (var i2 = 0; i2 < expectedArgCount; ++i2) {
              argsWired[i2] = argTypes[i2 + 2]["toWireType"](
                destructors,
                arguments[i2],
              );
              invokerFuncArgs.push(argsWired[i2]);
            }
            var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
            function onDone(rv2) {
              if (needsDestructorStack) {
                runDestructors(destructors);
              } else {
                for (
                  var i3 = isClassMethodFunc ? 1 : 2;
                  i3 < argTypes.length;
                  i3++
                ) {
                  var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                  if (argTypes[i3].destructorFunction !== null) {
                    argTypes[i3].destructorFunction(param);
                  }
                }
              }
              if (returns) {
                return argTypes[0]["fromWireType"](rv2);
              }
            }
            return onDone(rv);
          };
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function () {
              if (
                !proto[methodName].overloadTable.hasOwnProperty(
                  arguments.length,
                )
              ) {
                throwBindingError(
                  "Function '" +
                    humanName +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    proto[methodName].overloadTable +
                    ")!",
                );
              }
              return proto[methodName].overloadTable[arguments.length].apply(
                this,
                arguments,
              );
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module9.hasOwnProperty(name)) {
            if (
              void 0 === numArguments ||
              (void 0 !== Module9[name].overloadTable &&
                void 0 !== Module9[name].overloadTable[numArguments])
            ) {
              throwBindingError(
                "Cannot register public name '" + name + "' twice",
              );
            }
            ensureOverloadTable(Module9, name, name);
            if (Module9.hasOwnProperty(numArguments)) {
              throwBindingError(
                "Cannot register multiple overloads of a function with the same number of arguments (" +
                  numArguments +
                  ")!",
              );
            }
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            if (void 0 !== numArguments) {
              Module9[name].numArguments = numArguments;
            }
          }
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[(firstElement + i * 4) >> 2]);
          }
          return array;
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module9.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (
            void 0 !== Module9[name].overloadTable &&
            void 0 !== numArguments
          ) {
            Module9[name].overloadTable[numArguments] = value;
          } else {
            Module9[name] = value;
            Module9[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module9["dynCall_" + sig];
          return args && args.length
            ? f.apply(null, [ptr].concat(args))
            : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function () {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError(
              "unknown function pointer with signature " +
                signature +
                ": " +
                rawFunction,
            );
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(
            message + ": " + unboundTypes.map(getTypeName).join([", "]),
          );
        }
        function __embind_register_function(
          name,
          argCount,
          rawArgTypesAddr,
          signature,
          rawInvoker,
          fn,
          isAsync,
        ) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(
            name,
            function () {
              throwUnboundTypeError(
                "Cannot call " + name + " due to unbound types",
                argTypes,
              );
            },
            argCount - 1,
          );
          whenDependentTypesAreResolved([], argTypes, function (argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(
              argTypes2.slice(1),
            );
            replacePublicSymbol(
              name,
              craftInvokerFunction(
                name,
                invokerArgsArray,
                null,
                rawInvoker,
                fn,
                isAsync,
              ),
              argCount - 1,
            );
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed
                ? function readS8FromPointer(pointer) {
                    return HEAP8[pointer];
                  }
                : function readU8FromPointer(pointer) {
                    return HEAPU8[pointer];
                  };
            case 1:
              return signed
                ? function readS16FromPointer(pointer) {
                    return HEAP16[pointer >> 1];
                  }
                : function readU16FromPointer(pointer) {
                    return HEAPU16[pointer >> 1];
                  };
            case 2:
              return signed
                ? function readS32FromPointer(pointer) {
                    return HEAP32[pointer >> 2];
                  }
                : function readU32FromPointer(pointer) {
                    return HEAPU32[pointer >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(
          primitiveType,
          name,
          size,
          minRange,
          maxRange,
        ) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => (value << bitshift) >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {};
          var toWireType;
          if (isUnsignedType) {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function (destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            fromWireType: fromWireType,
            toWireType: toWireType,
            argPackAdvance: 8,
            readValueFromPointer: integerReadValueFromPointer(
              name,
              shift,
              minRange !== 0,
            ),
            destructorFunction: null,
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap2 = HEAPU32;
            var size = heap2[handle];
            var data = heap2[handle + 1];
            return new TA(heap2.buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(
            rawType,
            {
              name,
              fromWireType: decodeMemoryView,
              argPackAdvance: 8,
              readValueFromPointer: decodeMemoryView,
            },
            { ignoreDuplicateRegistrations: true },
          );
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (
                !(
                  valueIsOfTypeString ||
                  value instanceof Uint8Array ||
                  value instanceof Uint8ClampedArray ||
                  value instanceof Int8Array
                )
              ) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      );
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function UTF16ToString(ptr, maxBytesToRead) {
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(ptr + i * 2) >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite =
            maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[(ptr + i * 4) >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(
                55296 | (ch >> 10),
                56320 | (ch & 1023),
              );
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit =
                (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, {
            name,
            fromWireType: function (value) {
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(
                    decodeStartPtr,
                    maxReadBytes,
                  );
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            toWireType: function (destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError(
                  "Cannot pass non-string to C++ string type " + name,
                );
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            argPackAdvance: 8,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: function (ptr) {
              _free(ptr);
            },
          });
        }
        function __embind_register_value_object(
          rawType,
          name,
          constructorSignature,
          rawConstructor,
          destructorSignature,
          rawDestructor,
        ) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(
              constructorSignature,
              rawConstructor,
            ),
            rawDestructor: embind__requireFunction(
              destructorSignature,
              rawDestructor,
            ),
            fields: [],
          };
        }
        function __embind_register_value_object_field(
          structType,
          fieldName,
          getterReturnType,
          getterSignature,
          getter,
          getterContext,
          setterArgumentType,
          setterSignature,
          setter,
          setterContext,
        ) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext,
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            name,
            argPackAdvance: 0,
            fromWireType: function () {
              return void 0;
            },
            toWireType: function (destructors, o) {
              return void 0;
            },
          });
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          function testGlobal(obj) {
            obj["$$$embind_global$$$"] = obj;
            var success =
              typeof $$$embind_global$$$ == "object" &&
              obj["$$$embind_global$$$"] == obj;
            if (!success) {
              delete obj["$$$embind_global$$$"];
            }
            return success;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          if (typeof global == "object" && testGlobal(global)) {
            $$$embind_global$$$ = global;
          } else if (typeof self == "object" && testGlobal(self)) {
            $$$embind_global$$$ = self;
          }
          if (typeof $$$embind_global$$$ == "object") {
            return $$$embind_global$$$;
          }
          throw Error("unable to get global object.");
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(
              humanName + " has unknown type " + getTypeName(rawType),
            );
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = new Array(argCount + 1);
          return function (constructor, argTypes, args) {
            argsList[0] = constructor;
            for (var i = 0; i < argCount; ++i) {
              var argType = requireRegisteredType(
                HEAPU32[(argTypes + i * 4) >> 2],
                "parameter " + i,
              );
              argsList[i + 1] = argType["readValueFromPointer"](args);
              args += argType["argPackAdvance"];
            }
            var obj = new (constructor.bind.apply(constructor, argsList))();
            return Emval.toHandle(obj);
          };
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          try {
            wasmMemory.grow((size - b.byteLength + 65535) >>> 16);
            updateMemoryViews();
            return 1;
          } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) =>
            x + ((multiple - (x % multiple)) % multiple);
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296,
            );
            var newSize = Math.min(
              maxHeapSize,
              alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
            );
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang =
              (
                (typeof navigator == "object" &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8";
            var env = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG: lang,
              _: getExecutableName(),
            };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function writeAsciiToMemory(str, buffer, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) HEAP8[buffer >> 0] = 0;
        }
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function (string, i) {
            var ptr = environ_buf + bufSize;
            HEAPU32[(__environ + i * 4) >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function (string) {
            bufSize += string.length + 1;
          });
          HEAPU32[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          return 52;
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[(iov + 4) >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        }
        function __isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        function __arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {}
          return sum;
        }
        var __MONTH_DAYS_LEAP = [
          31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        var __MONTH_DAYS_REGULAR = [
          31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        function __addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = __isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (
              leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR
            )[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(
            stringy,
            u8array,
            0,
            u8array.length,
          );
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        }
        function writeArrayToMemory(array, buffer) {
          HEAP8.set(array, buffer);
        }
        function _strftime(s, maxsize, format2, tm) {
          var tm_zone = HEAP32[(tm + 40) >> 2];
          var date = {
            tm_sec: HEAP32[tm >> 2],
            tm_min: HEAP32[(tm + 4) >> 2],
            tm_hour: HEAP32[(tm + 8) >> 2],
            tm_mday: HEAP32[(tm + 12) >> 2],
            tm_mon: HEAP32[(tm + 16) >> 2],
            tm_year: HEAP32[(tm + 20) >> 2],
            tm_wday: HEAP32[(tm + 24) >> 2],
            tm_yday: HEAP32[(tm + 28) >> 2],
            tm_isdst: HEAP32[(tm + 32) >> 2],
            tm_gmtoff: HEAP32[(tm + 36) >> 2],
            tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
          };
          var pattern = UTF8ToString(format2);
          var EXPANSION_RULES_1 = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y",
          };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(
              new RegExp(rule, "g"),
              EXPANSION_RULES_1[rule],
            );
          }
          var WEEKDAYS = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          var MONTHS = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          function leadingSomething(value, digits, character) {
            var str = typeof value == "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if (
              (compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0
            ) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = __addDays(
              new Date(date2.tm_year + 1900, 0, 1),
              date2.tm_yday,
            );
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear =
              getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear =
              getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear() - 1;
          }
          var EXPANSION_RULES_2 = {
            "%a": function (date2) {
              return WEEKDAYS[date2.tm_wday].substring(0, 3);
            },
            "%A": function (date2) {
              return WEEKDAYS[date2.tm_wday];
            },
            "%b": function (date2) {
              return MONTHS[date2.tm_mon].substring(0, 3);
            },
            "%B": function (date2) {
              return MONTHS[date2.tm_mon];
            },
            "%C": function (date2) {
              var year = date2.tm_year + 1900;
              return leadingNulls((year / 100) | 0, 2);
            },
            "%d": function (date2) {
              return leadingNulls(date2.tm_mday, 2);
            },
            "%e": function (date2) {
              return leadingSomething(date2.tm_mday, 2, " ");
            },
            "%g": function (date2) {
              return getWeekBasedYear(date2).toString().substring(2);
            },
            "%G": function (date2) {
              return getWeekBasedYear(date2);
            },
            "%H": function (date2) {
              return leadingNulls(date2.tm_hour, 2);
            },
            "%I": function (date2) {
              var twelveHour = date2.tm_hour;
              if (twelveHour == 0) twelveHour = 12;
              else if (twelveHour > 12) twelveHour -= 12;
              return leadingNulls(twelveHour, 2);
            },
            "%j": function (date2) {
              return leadingNulls(
                date2.tm_mday +
                  __arraySum(
                    __isLeapYear(date2.tm_year + 1900)
                      ? __MONTH_DAYS_LEAP
                      : __MONTH_DAYS_REGULAR,
                    date2.tm_mon - 1,
                  ),
                3,
              );
            },
            "%m": function (date2) {
              return leadingNulls(date2.tm_mon + 1, 2);
            },
            "%M": function (date2) {
              return leadingNulls(date2.tm_min, 2);
            },
            "%n": function () {
              return "\n";
            },
            "%p": function (date2) {
              if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
                return "AM";
              }
              return "PM";
            },
            "%S": function (date2) {
              return leadingNulls(date2.tm_sec, 2);
            },
            "%t": function () {
              return "	";
            },
            "%u": function (date2) {
              return date2.tm_wday || 7;
            },
            "%U": function (date2) {
              var days = date2.tm_yday + 7 - date2.tm_wday;
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%V": function (date2) {
              var val = Math.floor(
                (date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7)) / 7,
              );
              if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
                val++;
              }
              if (!val) {
                val = 52;
                var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
                if (
                  dec31 == 4 ||
                  (dec31 == 5 && __isLeapYear((date2.tm_year % 400) - 1))
                ) {
                  val++;
                }
              } else if (val == 53) {
                var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date2.tm_year)))
                  val = 1;
              }
              return leadingNulls(val, 2);
            },
            "%w": function (date2) {
              return date2.tm_wday;
            },
            "%W": function (date2) {
              var days = date2.tm_yday + 7 - ((date2.tm_wday + 6) % 7);
              return leadingNulls(Math.floor(days / 7), 2);
            },
            "%y": function (date2) {
              return (date2.tm_year + 1900).toString().substring(2);
            },
            "%Y": function (date2) {
              return date2.tm_year + 1900;
            },
            "%z": function (date2) {
              var off = date2.tm_gmtoff;
              var ahead = off >= 0;
              off = Math.abs(off) / 60;
              off = (off / 60) * 100 + (off % 60);
              return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
            },
            "%Z": function (date2) {
              return date2.tm_zone;
            },
            "%%": function () {
              return "%";
            },
          };
          pattern = pattern.replace(/%%/g, "\0\0");
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.includes(rule)) {
              pattern = pattern.replace(
                new RegExp(rule, "g"),
                EXPANSION_RULES_2[rule](date),
              );
            }
          }
          pattern = pattern.replace(/\0\0/g, "%");
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format2, tm, loc) {
          return _strftime(s, maxsize, format2, tm);
        }
        function setErrNo(value) {
          HEAP32[___errno_location() >> 2] = value;
          return value;
        }
        function _system(command) {
          if (!command) return 0;
          setErrNo(52);
          return -1;
        }
        InternalError = Module9["InternalError"] = extendError(
          Error,
          "InternalError",
        );
        embind_init_charCodes();
        BindingError = Module9["BindingError"] = extendError(
          Error,
          "BindingError",
        );
        init_emval();
        UnboundTypeError = Module9["UnboundTypeError"] = extendError(
          Error,
          "UnboundTypeError",
        );
        var wasmImports = {
          h: ___cxa_throw,
          y: ___syscall_ioctl,
          z: ___syscall_openat,
          n: __embind_finalize_value_object,
          q: __embind_register_bigint,
          B: __embind_register_bool,
          A: __embind_register_emval,
          i: __embind_register_float,
          m: __embind_register_function,
          c: __embind_register_integer,
          b: __embind_register_memory_view,
          j: __embind_register_std_string,
          f: __embind_register_std_wstring,
          p: __embind_register_value_object,
          d: __embind_register_value_object_field,
          C: __embind_register_void,
          e: __emval_decref,
          E: __emval_get_global,
          l: __emval_incref,
          k: __emval_new,
          a: _abort,
          v: _emscripten_memcpy_big,
          u: _emscripten_resize_heap,
          s: _environ_get,
          t: _environ_sizes_get,
          g: _fd_close,
          x: _fd_read,
          o: _fd_seek,
          w: _fd_write,
          r: _strftime_l,
          D: _system,
        };
        var asm = createWasm();
        var ___wasm_call_ctors = function () {
          return (___wasm_call_ctors = Module9["asm"]["G"]).apply(
            null,
            arguments,
          );
        };
        var _malloc = function () {
          return (_malloc = Module9["asm"]["H"]).apply(null, arguments);
        };
        var _free = function () {
          return (_free = Module9["asm"]["I"]).apply(null, arguments);
        };
        var ___getTypeName = (Module9["___getTypeName"] = function () {
          return (___getTypeName = Module9["___getTypeName"] =
            Module9["asm"]["J"]).apply(null, arguments);
        });
        var __embind_initialize_bindings = (Module9[
          "__embind_initialize_bindings"
        ] = function () {
          return (__embind_initialize_bindings = Module9[
            "__embind_initialize_bindings"
          ] =
            Module9["asm"]["K"]).apply(null, arguments);
        });
        var ___errno_location = function () {
          return (___errno_location = Module9["asm"]["L"]).apply(
            null,
            arguments,
          );
        };
        var ___cxa_is_pointer_type = function () {
          return (___cxa_is_pointer_type = Module9["asm"]["N"]).apply(
            null,
            arguments,
          );
        };
        var dynCall_jiji = (Module9["dynCall_jiji"] = function () {
          return (dynCall_jiji = Module9["dynCall_jiji"] =
            Module9["asm"]["O"]).apply(null, arguments);
        });
        var dynCall_iiji = (Module9["dynCall_iiji"] = function () {
          return (dynCall_iiji = Module9["dynCall_iiji"] =
            Module9["asm"]["P"]).apply(null, arguments);
        });
        var dynCall_viijii = (Module9["dynCall_viijii"] = function () {
          return (dynCall_viijii = Module9["dynCall_viijii"] =
            Module9["asm"]["Q"]).apply(null, arguments);
        });
        var dynCall_iiiiij = (Module9["dynCall_iiiiij"] = function () {
          return (dynCall_iiiiij = Module9["dynCall_iiiiij"] =
            Module9["asm"]["R"]).apply(null, arguments);
        });
        var dynCall_iiiiijj = (Module9["dynCall_iiiiijj"] = function () {
          return (dynCall_iiiiijj = Module9["dynCall_iiiiijj"] =
            Module9["asm"]["S"]).apply(null, arguments);
        });
        var dynCall_iiiiiijj = (Module9["dynCall_iiiiiijj"] = function () {
          return (dynCall_iiiiiijj = Module9["dynCall_iiiiiijj"] =
            Module9["asm"]["T"]).apply(null, arguments);
        });
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module9["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module9);
            if (Module9["onRuntimeInitialized"])
              Module9["onRuntimeInitialized"]();
            postRun();
          }
          if (Module9["setStatus"]) {
            Module9["setStatus"]("Running...");
            setTimeout(function () {
              setTimeout(function () {
                Module9["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module9["preInit"]) {
          if (typeof Module9["preInit"] == "function")
            Module9["preInit"] = [Module9["preInit"]];
          while (Module9["preInit"].length > 0) {
            Module9["preInit"].pop()();
          }
        }
        run();
        return Module9.ready;
      };
    })();
    jxl_enc_default = Module8;
  },
});

// node_modules/@jsquash/oxipng/codec/pkg-parallel/snippets/wasm-bindgen-rayon-3e04391371ad0a8e/src/workerHelpers.js
async function startWorkers(module, memory, builder) {
  if (builder.numThreads() === 0) {
    throw new Error(`num_threads must be > 0.`);
  }
  const workerInit = {
    module,
    memory,
    receiver: builder.receiver(),
  };
  _workers = await Promise.all(
    Array.from({ length: builder.numThreads() }, async () => {
      const worker = new Worker(
        new URL("./workerHelpers.worker.js", import.meta.url),
        {
          type: "module",
        },
      );
      worker.postMessage(workerInit);
      await new Promise((resolve) =>
        worker.addEventListener("message", resolve, { once: true }),
      );
      return worker;
    }),
  );
  builder.build();
}
var _workers;
var init_workerHelpers = __esm({
  "node_modules/@jsquash/oxipng/codec/pkg-parallel/snippets/wasm-bindgen-rayon-3e04391371ad0a8e/src/workerHelpers.js"() {},
});

// node_modules/@jsquash/oxipng/codec/pkg-parallel/squoosh_oxipng.js
var squoosh_oxipng_exports = {};
__export(squoosh_oxipng_exports, {
  default: () => squoosh_oxipng_default,
  initSync: () => initSync,
  initThreadPool: () => initThreadPool,
  optimise: () => optimise,
  optimise_raw: () => optimise_raw,
  wbg_rayon_PoolBuilder: () => wbg_rayon_PoolBuilder,
  wbg_rayon_start_worker: () => wbg_rayon_start_worker,
});
function getObject(idx) {
  return heap[idx];
}
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function getUint8Memory0() {
  if (
    cachedUint8Memory0 === null ||
    cachedUint8Memory0.buffer !== wasm.memory.buffer
  ) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function getInt32Memory0() {
  if (
    cachedInt32Memory0 === null ||
    cachedInt32Memory0.buffer !== wasm.memory.buffer
  ) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function optimise(data, level, interlace, optimize_alpha) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.optimise(retptr, ptr0, len0, level, interlace, optimize_alpha);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v2 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1, 1);
    return v2;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function optimise_raw(data, width, height, level, interlace, optimize_alpha) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.optimise_raw(
      retptr,
      ptr0,
      len0,
      width,
      height,
      level,
      interlace,
      optimize_alpha,
    );
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v2 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1, 1);
    return v2;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function initThreadPool(num_threads) {
  const ret = wasm.initThreadPool(num_threads);
  return takeObject(ret);
}
function wbg_rayon_start_worker(receiver) {
  wasm.wbg_rayon_start_worker(receiver);
}
async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e,
          );
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_self_ce0dbfc45cf2f5be = function () {
    return handleError(function () {
      const ret = self.self;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_window_c6fb939a7f436783 = function () {
    return handleError(function () {
      const ret = window.window;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbg_globalThis_d1e6af4856ba331b = function () {
    return handleError(function () {
      const ret = globalThis.globalThis;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_global_207b558942527489 = function () {
    return handleError(function () {
      const ret = global.global;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_is_undefined = function (arg0) {
    const ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbg_newnoargs_e258087cd0daa0ea = function (arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_call_27c0f87801dedf93 = function () {
    return handleError(function (arg0, arg1) {
      const ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_module = function () {
    const ret = __wbg_init.__wbindgen_wasm_module;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_memory = function () {
    const ret = wasm.memory;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_startWorkers_2ee336a9694dda13 = function (
    arg0,
    arg1,
    arg2,
  ) {
    const ret = startWorkers(
      takeObject(arg0),
      takeObject(arg1),
      wbg_rayon_PoolBuilder.__wrap(arg2),
    );
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_clone_ref = function (arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_instanceof_Window_f401953a2cf86220 = function (arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Window;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  return imports;
}
function __wbg_init_memory(imports, maybe_memory) {
  imports.wbg.memory =
    maybe_memory ||
    new WebAssembly.Memory({ initial: 18, maximum: 16384, shared: true });
}
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module;
  cachedInt32Memory0 = null;
  cachedUint8Memory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
function initSync(module, maybe_memory) {
  if (wasm !== void 0) return wasm;
  const imports = __wbg_get_imports();
  __wbg_init_memory(imports, maybe_memory);
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}
async function __wbg_init(input, maybe_memory) {
  if (wasm !== void 0) return wasm;
  if (typeof input === "undefined") {
    input = new URL("squoosh_oxipng_bg.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (
    typeof input === "string" ||
    (typeof Request === "function" && input instanceof Request) ||
    (typeof URL === "function" && input instanceof URL)
  ) {
    input = fetch(input);
  }
  __wbg_init_memory(imports, maybe_memory);
  const { instance, module } = await __wbg_load(await input, imports);
  return __wbg_finalize_init(instance, module);
}
var wasm,
  heap,
  heap_next,
  cachedTextDecoder,
  cachedUint8Memory0,
  WASM_VECTOR_LEN,
  cachedInt32Memory0,
  wbg_rayon_PoolBuilderFinalization,
  wbg_rayon_PoolBuilder,
  squoosh_oxipng_default,
  isServiceWorker,
  isRunningInCloudFlareWorkers,
  isRunningInNode3;
var init_squoosh_oxipng = __esm({
  "node_modules/@jsquash/oxipng/codec/pkg-parallel/squoosh_oxipng.js"() {
    init_workerHelpers();
    heap = new Array(128).fill(void 0);
    heap.push(void 0, null, true, false);
    heap_next = heap.length;
    cachedTextDecoder =
      typeof TextDecoder !== "undefined"
        ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true })
        : {
            decode: () => {
              throw Error("TextDecoder not available");
            },
          };
    if (typeof TextDecoder !== "undefined") {
      cachedTextDecoder.decode();
    }
    cachedUint8Memory0 = null;
    WASM_VECTOR_LEN = 0;
    cachedInt32Memory0 = null;
    wbg_rayon_PoolBuilderFinalization =
      typeof FinalizationRegistry === "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((ptr) =>
            wasm.__wbg_wbg_rayon_poolbuilder_free(ptr >>> 0),
          );
    wbg_rayon_PoolBuilder = class _wbg_rayon_PoolBuilder {
      static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(_wbg_rayon_PoolBuilder.prototype);
        obj.__wbg_ptr = ptr;
        wbg_rayon_PoolBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        wbg_rayon_PoolBuilderFinalization.unregister(this);
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wbg_rayon_poolbuilder_free(ptr);
      }
      /**
       * @returns {number}
       */
      numThreads() {
        const ret = wasm.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr);
        return ret >>> 0;
      }
      /**
       * @returns {number}
       */
      receiver() {
        const ret = wasm.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr);
        return ret >>> 0;
      }
      /**
       */
      build() {
        wasm.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
      }
    };
    squoosh_oxipng_default = __wbg_init;
    isServiceWorker = globalThis.ServiceWorkerGlobalScope !== void 0;
    isRunningInCloudFlareWorkers =
      isServiceWorker &&
      typeof self !== "undefined" &&
      globalThis.caches &&
      globalThis.caches.default !== void 0;
    isRunningInNode3 =
      typeof process === "object" &&
      process.release &&
      process.release.name === "node";
    if (isRunningInCloudFlareWorkers || isRunningInNode3) {
      if (!globalThis.ImageData) {
        globalThis.ImageData = class ImageData {
          constructor(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
          }
        };
      }
      if (import.meta.url === void 0) {
        import.meta.url = "https://localhost";
      }
      if (typeof self !== "undefined" && self.location === void 0) {
        self.location = { href: "" };
      }
    }
  },
});

// node_modules/@jsquash/oxipng/codec/pkg/squoosh_oxipng.js
var squoosh_oxipng_exports2 = {};
__export(squoosh_oxipng_exports2, {
  default: () => squoosh_oxipng_default2,
  initSync: () => initSync2,
  optimise: () => optimise2,
  optimise_raw: () => optimise_raw2,
});
function getUint8Memory02() {
  if (cachedUint8Memory02 === null || cachedUint8Memory02.byteLength === 0) {
    cachedUint8Memory02 = new Uint8Array(wasm2.memory.buffer);
  }
  return cachedUint8Memory02;
}
function getStringFromWasm02(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder2.decode(getUint8Memory02().subarray(ptr, ptr + len));
}
function passArray8ToWasm02(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8Memory02().set(arg, ptr / 1);
  WASM_VECTOR_LEN2 = arg.length;
  return ptr;
}
function getInt32Memory02() {
  if (cachedInt32Memory02 === null || cachedInt32Memory02.byteLength === 0) {
    cachedInt32Memory02 = new Int32Array(wasm2.memory.buffer);
  }
  return cachedInt32Memory02;
}
function getArrayU8FromWasm02(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8Memory02().subarray(ptr / 1, ptr / 1 + len);
}
function optimise2(data, level, interlace, optimize_alpha) {
  try {
    const retptr = wasm2.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm02(data, wasm2.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN2;
    wasm2.optimise(retptr, ptr0, len0, level, interlace, optimize_alpha);
    var r0 = getInt32Memory02()[retptr / 4 + 0];
    var r1 = getInt32Memory02()[retptr / 4 + 1];
    var v2 = getArrayU8FromWasm02(r0, r1).slice();
    wasm2.__wbindgen_free(r0, r1 * 1, 1);
    return v2;
  } finally {
    wasm2.__wbindgen_add_to_stack_pointer(16);
  }
}
function optimise_raw2(data, width, height, level, interlace, optimize_alpha) {
  try {
    const retptr = wasm2.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm02(data, wasm2.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN2;
    wasm2.optimise_raw(
      retptr,
      ptr0,
      len0,
      width,
      height,
      level,
      interlace,
      optimize_alpha,
    );
    var r0 = getInt32Memory02()[retptr / 4 + 0];
    var r1 = getInt32Memory02()[retptr / 4 + 1];
    var v2 = getArrayU8FromWasm02(r0, r1).slice();
    wasm2.__wbindgen_free(r0, r1 * 1, 1);
    return v2;
  } finally {
    wasm2.__wbindgen_add_to_stack_pointer(16);
  }
}
async function __wbg_load2(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e,
          );
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports2() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm02(arg0, arg1));
  };
  return imports;
}
function __wbg_init_memory2(imports, maybe_memory) {}
function __wbg_finalize_init2(instance, module) {
  wasm2 = instance.exports;
  __wbg_init2.__wbindgen_wasm_module = module;
  cachedInt32Memory02 = null;
  cachedUint8Memory02 = null;
  return wasm2;
}
function initSync2(module) {
  if (wasm2 !== void 0) return wasm2;
  const imports = __wbg_get_imports2();
  __wbg_init_memory2(imports);
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init2(instance, module);
}
async function __wbg_init2(input) {
  if (wasm2 !== void 0) return wasm2;
  if (typeof input === "undefined") {
    input = new URL("squoosh_oxipng_bg.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports2();
  if (
    typeof input === "string" ||
    (typeof Request === "function" && input instanceof Request) ||
    (typeof URL === "function" && input instanceof URL)
  ) {
    input = fetch(input);
  }
  __wbg_init_memory2(imports);
  const { instance, module } = await __wbg_load2(await input, imports);
  return __wbg_finalize_init2(instance, module);
}
var wasm2,
  cachedTextDecoder2,
  cachedUint8Memory02,
  WASM_VECTOR_LEN2,
  cachedInt32Memory02,
  squoosh_oxipng_default2,
  isServiceWorker2,
  isRunningInCloudFlareWorkers2,
  isRunningInNode4;
var init_squoosh_oxipng2 = __esm({
  "node_modules/@jsquash/oxipng/codec/pkg/squoosh_oxipng.js"() {
    cachedTextDecoder2 =
      typeof TextDecoder !== "undefined"
        ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true })
        : {
            decode: () => {
              throw Error("TextDecoder not available");
            },
          };
    if (typeof TextDecoder !== "undefined") {
      cachedTextDecoder2.decode();
    }
    cachedUint8Memory02 = null;
    WASM_VECTOR_LEN2 = 0;
    cachedInt32Memory02 = null;
    squoosh_oxipng_default2 = __wbg_init2;
    isServiceWorker2 = globalThis.ServiceWorkerGlobalScope !== void 0;
    isRunningInCloudFlareWorkers2 =
      isServiceWorker2 &&
      typeof self !== "undefined" &&
      globalThis.caches &&
      globalThis.caches.default !== void 0;
    isRunningInNode4 =
      typeof process === "object" &&
      process.release &&
      process.release.name === "node";
    if (isRunningInCloudFlareWorkers2 || isRunningInNode4) {
      if (!globalThis.ImageData) {
        globalThis.ImageData = class ImageData {
          constructor(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
          }
        };
      }
      if (import.meta.url === void 0) {
        import.meta.url = "https://localhost";
      }
      if (typeof self !== "undefined" && self.location === void 0) {
        self.location = { href: "" };
      }
    }
  },
});

// node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "node_modules/jszip/dist/jszip.min.js"(exports, module) {
    !(function (e) {
      if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : this
        ).JSZip = e();
      }
    })(function () {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            var i = (o[r] = { exports: {} });
            a[r][0].call(
              i.exports,
              function (e3) {
                var t2 = a[r][1][e3];
                return u(t2 || e3);
              },
              i,
              i.exports,
              s,
              a,
              o,
              h,
            );
          }
          return o[r].exports;
        }
        for (
          var l = "function" == typeof __require && __require, e = 0;
          e < h.length;
          e++
        )
          u(h[e]);
        return u;
      })(
        {
          1: [
            function (e, t, r) {
              "use strict";
              var d = e("./utils"),
                c = e("./support"),
                p =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              ((r.encode = function (e2) {
                for (
                  var t2,
                    r2,
                    n,
                    i,
                    s,
                    a,
                    o,
                    h = [],
                    u = 0,
                    l = e2.length,
                    f = l,
                    c2 = "string" !== d.getTypeOf(e2);
                  u < e2.length;
                )
                  ((f = l - u),
                    (n = c2
                      ? ((t2 = e2[u++]),
                        (r2 = u < l ? e2[u++] : 0),
                        u < l ? e2[u++] : 0)
                      : ((t2 = e2.charCodeAt(u++)),
                        (r2 = u < l ? e2.charCodeAt(u++) : 0),
                        u < l ? e2.charCodeAt(u++) : 0)),
                    (i = t2 >> 2),
                    (s = ((3 & t2) << 4) | (r2 >> 4)),
                    (a = 1 < f ? ((15 & r2) << 2) | (n >> 6) : 64),
                    (o = 2 < f ? 63 & n : 64),
                    h.push(
                      p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o),
                    ));
                return h.join("");
              }),
                (r.decode = function (e2) {
                  var t2,
                    r2,
                    n,
                    i,
                    s,
                    a,
                    o = 0,
                    h = 0,
                    u = "data:";
                  if (e2.substr(0, u.length) === u)
                    throw new Error(
                      "Invalid base64 input, it looks like a data url.",
                    );
                  var l,
                    f =
                      (3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length) /
                      4;
                  if (
                    (e2.charAt(e2.length - 1) === p.charAt(64) && f--,
                    e2.charAt(e2.length - 2) === p.charAt(64) && f--,
                    f % 1 != 0)
                  )
                    throw new Error(
                      "Invalid base64 input, bad content length.",
                    );
                  for (
                    l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f);
                    o < e2.length;
                  )
                    ((t2 =
                      (p.indexOf(e2.charAt(o++)) << 2) |
                      ((i = p.indexOf(e2.charAt(o++))) >> 4)),
                      (r2 =
                        ((15 & i) << 4) |
                        ((s = p.indexOf(e2.charAt(o++))) >> 2)),
                      (n = ((3 & s) << 6) | (a = p.indexOf(e2.charAt(o++)))),
                      (l[h++] = t2),
                      64 !== s && (l[h++] = r2),
                      64 !== a && (l[h++] = n));
                  return l;
                }));
            },
            { "./support": 30, "./utils": 32 },
          ],
          2: [
            function (e, t, r) {
              "use strict";
              var n = e("./external"),
                i = e("./stream/DataWorker"),
                s = e("./stream/Crc32Probe"),
                a = e("./stream/DataLengthProbe");
              function o(e2, t2, r2, n2, i2) {
                ((this.compressedSize = e2),
                  (this.uncompressedSize = t2),
                  (this.crc32 = r2),
                  (this.compression = n2),
                  (this.compressedContent = i2));
              }
              ((o.prototype = {
                getContentWorker: function () {
                  var e2 = new i(n.Promise.resolve(this.compressedContent))
                      .pipe(this.compression.uncompressWorker())
                      .pipe(new a("data_length")),
                    t2 = this;
                  return (
                    e2.on("end", function () {
                      if (this.streamInfo.data_length !== t2.uncompressedSize)
                        throw new Error(
                          "Bug : uncompressed data size mismatch",
                        );
                    }),
                    e2
                  );
                },
                getCompressedWorker: function () {
                  return new i(n.Promise.resolve(this.compressedContent))
                    .withStreamInfo("compressedSize", this.compressedSize)
                    .withStreamInfo("uncompressedSize", this.uncompressedSize)
                    .withStreamInfo("crc32", this.crc32)
                    .withStreamInfo("compression", this.compression);
                },
              }),
                (o.createWorkerFrom = function (e2, t2, r2) {
                  return e2
                    .pipe(new s())
                    .pipe(new a("uncompressedSize"))
                    .pipe(t2.compressWorker(r2))
                    .pipe(new a("compressedSize"))
                    .withStreamInfo("compression", t2);
                }),
                (t.exports = o));
            },
            {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27,
            },
          ],
          3: [
            function (e, t, r) {
              "use strict";
              var n = e("./stream/GenericWorker");
              ((r.STORE = {
                magic: "\0\0",
                compressWorker: function () {
                  return new n("STORE compression");
                },
                uncompressWorker: function () {
                  return new n("STORE decompression");
                },
              }),
                (r.DEFLATE = e("./flate")));
            },
            { "./flate": 7, "./stream/GenericWorker": 28 },
          ],
          4: [
            function (e, t, r) {
              "use strict";
              var n = e("./utils");
              var o = (function () {
                for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
                  e2 = r2;
                  for (var n2 = 0; n2 < 8; n2++)
                    e2 = 1 & e2 ? 3988292384 ^ (e2 >>> 1) : e2 >>> 1;
                  t2[r2] = e2;
                }
                return t2;
              })();
              t.exports = function (e2, t2) {
                return void 0 !== e2 && e2.length
                  ? "string" !== n.getTypeOf(e2)
                    ? (function (e3, t3, r2, n2) {
                        var i = o,
                          s = n2 + r2;
                        e3 ^= -1;
                        for (var a = n2; a < s; a++)
                          e3 = (e3 >>> 8) ^ i[255 & (e3 ^ t3[a])];
                        return -1 ^ e3;
                      })(0 | t2, e2, e2.length, 0)
                    : (function (e3, t3, r2, n2) {
                        var i = o,
                          s = n2 + r2;
                        e3 ^= -1;
                        for (var a = n2; a < s; a++)
                          e3 = (e3 >>> 8) ^ i[255 & (e3 ^ t3.charCodeAt(a))];
                        return -1 ^ e3;
                      })(0 | t2, e2, e2.length, 0)
                  : 0;
              };
            },
            { "./utils": 32 },
          ],
          5: [
            function (e, t, r) {
              "use strict";
              ((r.base64 = false),
                (r.binary = false),
                (r.dir = false),
                (r.createFolders = true),
                (r.date = null),
                (r.compression = null),
                (r.compressionOptions = null),
                (r.comment = null),
                (r.unixPermissions = null),
                (r.dosPermissions = null));
            },
            {},
          ],
          6: [
            function (e, t, r) {
              "use strict";
              var n = null;
              ((n = "undefined" != typeof Promise ? Promise : e("lie")),
                (t.exports = { Promise: n }));
            },
            { lie: 37 },
          ],
          7: [
            function (e, t, r) {
              "use strict";
              var n =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Uint32Array,
                i = e("pako"),
                s = e("./utils"),
                a = e("./stream/GenericWorker"),
                o = n ? "uint8array" : "array";
              function h(e2, t2) {
                (a.call(this, "FlateWorker/" + e2),
                  (this._pako = null),
                  (this._pakoAction = e2),
                  (this._pakoOptions = t2),
                  (this.meta = {}));
              }
              ((r.magic = "\b\0"),
                s.inherits(h, a),
                (h.prototype.processChunk = function (e2) {
                  ((this.meta = e2.meta),
                    null === this._pako && this._createPako(),
                    this._pako.push(s.transformTo(o, e2.data), false));
                }),
                (h.prototype.flush = function () {
                  (a.prototype.flush.call(this),
                    null === this._pako && this._createPako(),
                    this._pako.push([], true));
                }),
                (h.prototype.cleanUp = function () {
                  (a.prototype.cleanUp.call(this), (this._pako = null));
                }),
                (h.prototype._createPako = function () {
                  this._pako = new i[this._pakoAction]({
                    raw: true,
                    level: this._pakoOptions.level || -1,
                  });
                  var t2 = this;
                  this._pako.onData = function (e2) {
                    t2.push({ data: e2, meta: t2.meta });
                  };
                }),
                (r.compressWorker = function (e2) {
                  return new h("Deflate", e2);
                }),
                (r.uncompressWorker = function () {
                  return new h("Inflate", {});
                }));
            },
            { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
          ],
          8: [
            function (e, t, r) {
              "use strict";
              function A(e2, t2) {
                var r2,
                  n2 = "";
                for (r2 = 0; r2 < t2; r2++)
                  ((n2 += String.fromCharCode(255 & e2)), (e2 >>>= 8));
                return n2;
              }
              function n(e2, t2, r2, n2, i2, s2) {
                var a,
                  o,
                  h = e2.file,
                  u = e2.compression,
                  l = s2 !== O.utf8encode,
                  f = I.transformTo("string", s2(h.name)),
                  c = I.transformTo("string", O.utf8encode(h.name)),
                  d = h.comment,
                  p = I.transformTo("string", s2(d)),
                  m = I.transformTo("string", O.utf8encode(d)),
                  _ = c.length !== h.name.length,
                  g = m.length !== d.length,
                  b = "",
                  v = "",
                  y = "",
                  w = h.dir,
                  k = h.date,
                  x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                (t2 && !r2) ||
                  ((x.crc32 = e2.crc32),
                  (x.compressedSize = e2.compressedSize),
                  (x.uncompressedSize = e2.uncompressedSize));
                var S = 0;
                (t2 && (S |= 8), l || (!_ && !g) || (S |= 2048));
                var z = 0,
                  C = 0;
                (w && (z |= 16),
                  "UNIX" === i2
                    ? ((C = 798),
                      (z |= (function (e3, t3) {
                        var r3 = e3;
                        return (
                          e3 || (r3 = t3 ? 16893 : 33204),
                          (65535 & r3) << 16
                        );
                      })(h.unixPermissions, w)))
                    : ((C = 20),
                      (z |= (function (e3) {
                        return 63 & (e3 || 0);
                      })(h.dosPermissions))),
                  (a = k.getUTCHours()),
                  (a <<= 6),
                  (a |= k.getUTCMinutes()),
                  (a <<= 5),
                  (a |= k.getUTCSeconds() / 2),
                  (o = k.getUTCFullYear() - 1980),
                  (o <<= 4),
                  (o |= k.getUTCMonth() + 1),
                  (o <<= 5),
                  (o |= k.getUTCDate()),
                  _ &&
                    ((v = A(1, 1) + A(B(f), 4) + c),
                    (b += "up" + A(v.length, 2) + v)),
                  g &&
                    ((y = A(1, 1) + A(B(p), 4) + m),
                    (b += "uc" + A(y.length, 2) + y)));
                var E = "";
                return (
                  (E += "\n\0"),
                  (E += A(S, 2)),
                  (E += u.magic),
                  (E += A(a, 2)),
                  (E += A(o, 2)),
                  (E += A(x.crc32, 4)),
                  (E += A(x.compressedSize, 4)),
                  (E += A(x.uncompressedSize, 4)),
                  (E += A(f.length, 2)),
                  (E += A(b.length, 2)),
                  {
                    fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                    dirRecord:
                      R.CENTRAL_FILE_HEADER +
                      A(C, 2) +
                      E +
                      A(p.length, 2) +
                      "\0\0\0\0" +
                      A(z, 4) +
                      A(n2, 4) +
                      f +
                      b +
                      p,
                  }
                );
              }
              var I = e("../utils"),
                i = e("../stream/GenericWorker"),
                O = e("../utf8"),
                B = e("../crc32"),
                R = e("../signature");
              function s(e2, t2, r2, n2) {
                (i.call(this, "ZipFileWorker"),
                  (this.bytesWritten = 0),
                  (this.zipComment = t2),
                  (this.zipPlatform = r2),
                  (this.encodeFileName = n2),
                  (this.streamFiles = e2),
                  (this.accumulate = false),
                  (this.contentBuffer = []),
                  (this.dirRecords = []),
                  (this.currentSourceOffset = 0),
                  (this.entriesCount = 0),
                  (this.currentFile = null),
                  (this._sources = []));
              }
              (I.inherits(s, i),
                (s.prototype.push = function (e2) {
                  var t2 = e2.meta.percent || 0,
                    r2 = this.entriesCount,
                    n2 = this._sources.length;
                  this.accumulate
                    ? this.contentBuffer.push(e2)
                    : ((this.bytesWritten += e2.data.length),
                      i.prototype.push.call(this, {
                        data: e2.data,
                        meta: {
                          currentFile: this.currentFile,
                          percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100,
                        },
                      }));
                }),
                (s.prototype.openedSource = function (e2) {
                  ((this.currentSourceOffset = this.bytesWritten),
                    (this.currentFile = e2.file.name));
                  var t2 = this.streamFiles && !e2.file.dir;
                  if (t2) {
                    var r2 = n(
                      e2,
                      t2,
                      false,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName,
                    );
                    this.push({ data: r2.fileRecord, meta: { percent: 0 } });
                  } else this.accumulate = true;
                }),
                (s.prototype.closedSource = function (e2) {
                  this.accumulate = false;
                  var t2 = this.streamFiles && !e2.file.dir,
                    r2 = n(
                      e2,
                      t2,
                      true,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName,
                    );
                  if ((this.dirRecords.push(r2.dirRecord), t2))
                    this.push({
                      data: (function (e3) {
                        return (
                          R.DATA_DESCRIPTOR +
                          A(e3.crc32, 4) +
                          A(e3.compressedSize, 4) +
                          A(e3.uncompressedSize, 4)
                        );
                      })(e2),
                      meta: { percent: 100 },
                    });
                  else
                    for (
                      this.push({ data: r2.fileRecord, meta: { percent: 0 } });
                      this.contentBuffer.length;
                    )
                      this.push(this.contentBuffer.shift());
                  this.currentFile = null;
                }),
                (s.prototype.flush = function () {
                  for (
                    var e2 = this.bytesWritten, t2 = 0;
                    t2 < this.dirRecords.length;
                    t2++
                  )
                    this.push({
                      data: this.dirRecords[t2],
                      meta: { percent: 100 },
                    });
                  var r2 = this.bytesWritten - e2,
                    n2 = (function (e3, t3, r3, n3, i2) {
                      var s2 = I.transformTo("string", i2(n3));
                      return (
                        R.CENTRAL_DIRECTORY_END +
                        "\0\0\0\0" +
                        A(e3, 2) +
                        A(e3, 2) +
                        A(t3, 4) +
                        A(r3, 4) +
                        A(s2.length, 2) +
                        s2
                      );
                    })(
                      this.dirRecords.length,
                      r2,
                      e2,
                      this.zipComment,
                      this.encodeFileName,
                    );
                  this.push({ data: n2, meta: { percent: 100 } });
                }),
                (s.prototype.prepareNextSource = function () {
                  ((this.previous = this._sources.shift()),
                    this.openedSource(this.previous.streamInfo),
                    this.isPaused
                      ? this.previous.pause()
                      : this.previous.resume());
                }),
                (s.prototype.registerPrevious = function (e2) {
                  this._sources.push(e2);
                  var t2 = this;
                  return (
                    e2.on("data", function (e3) {
                      t2.processChunk(e3);
                    }),
                    e2.on("end", function () {
                      (t2.closedSource(t2.previous.streamInfo),
                        t2._sources.length ? t2.prepareNextSource() : t2.end());
                    }),
                    e2.on("error", function (e3) {
                      t2.error(e3);
                    }),
                    this
                  );
                }),
                (s.prototype.resume = function () {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (!this.previous && this._sources.length
                      ? (this.prepareNextSource(), true)
                      : this.previous ||
                          this._sources.length ||
                          this.generatedError
                        ? void 0
                        : (this.end(), true))
                  );
                }),
                (s.prototype.error = function (e2) {
                  var t2 = this._sources;
                  if (!i.prototype.error.call(this, e2)) return false;
                  for (var r2 = 0; r2 < t2.length; r2++)
                    try {
                      t2[r2].error(e2);
                    } catch (e3) {}
                  return true;
                }),
                (s.prototype.lock = function () {
                  i.prototype.lock.call(this);
                  for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++)
                    e2[t2].lock();
                }),
                (t.exports = s));
            },
            {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32,
            },
          ],
          9: [
            function (e, t, r) {
              "use strict";
              var u = e("../compressions"),
                n = e("./ZipFileWorker");
              r.generateWorker = function (e2, a, t2) {
                var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName),
                  h = 0;
                try {
                  (e2.forEach(function (e3, t3) {
                    h++;
                    var r2 = (function (e4, t4) {
                        var r3 = e4 || t4,
                          n3 = u[r3];
                        if (!n3)
                          throw new Error(
                            r3 + " is not a valid compression method !",
                          );
                        return n3;
                      })(t3.options.compression, a.compression),
                      n2 =
                        t3.options.compressionOptions ||
                        a.compressionOptions ||
                        {},
                      i = t3.dir,
                      s = t3.date;
                    t3._compressWorker(r2, n2)
                      .withStreamInfo("file", {
                        name: e3,
                        dir: i,
                        date: s,
                        comment: t3.comment || "",
                        unixPermissions: t3.unixPermissions,
                        dosPermissions: t3.dosPermissions,
                      })
                      .pipe(o);
                  }),
                    (o.entriesCount = h));
                } catch (e3) {
                  o.error(e3);
                }
                return o;
              };
            },
            { "../compressions": 3, "./ZipFileWorker": 8 },
          ],
          10: [
            function (e, t, r) {
              "use strict";
              function n() {
                if (!(this instanceof n)) return new n();
                if (arguments.length)
                  throw new Error(
                    "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.",
                  );
                ((this.files = /* @__PURE__ */ Object.create(null)),
                  (this.comment = null),
                  (this.root = ""),
                  (this.clone = function () {
                    var e2 = new n();
                    for (var t2 in this)
                      "function" != typeof this[t2] && (e2[t2] = this[t2]);
                    return e2;
                  }));
              }
              (((n.prototype = e("./object")).loadAsync = e("./load")),
                (n.support = e("./support")),
                (n.defaults = e("./defaults")),
                (n.version = "3.10.1"),
                (n.loadAsync = function (e2, t2) {
                  return new n().loadAsync(e2, t2);
                }),
                (n.external = e("./external")),
                (t.exports = n));
            },
            {
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30,
            },
          ],
          11: [
            function (e, t, r) {
              "use strict";
              var u = e("./utils"),
                i = e("./external"),
                n = e("./utf8"),
                s = e("./zipEntries"),
                a = e("./stream/Crc32Probe"),
                l = e("./nodejsUtils");
              function f(n2) {
                return new i.Promise(function (e2, t2) {
                  var r2 = n2.decompressed.getContentWorker().pipe(new a());
                  r2.on("error", function (e3) {
                    t2(e3);
                  })
                    .on("end", function () {
                      r2.streamInfo.crc32 !== n2.decompressed.crc32
                        ? t2(new Error("Corrupted zip : CRC32 mismatch"))
                        : e2();
                    })
                    .resume();
                });
              }
              t.exports = function (e2, o) {
                var h = this;
                return (
                  (o = u.extend(o || {}, {
                    base64: false,
                    checkCRC32: false,
                    optimizedBinaryString: false,
                    createFolders: false,
                    decodeFileName: n.utf8decode,
                  })),
                  l.isNode && l.isStream(e2)
                    ? i.Promise.reject(
                        new Error(
                          "JSZip can't accept a stream when loading a zip file.",
                        ),
                      )
                    : u
                        .prepareContent(
                          "the loaded zip file",
                          e2,
                          true,
                          o.optimizedBinaryString,
                          o.base64,
                        )
                        .then(function (e3) {
                          var t2 = new s(o);
                          return (t2.load(e3), t2);
                        })
                        .then(function (e3) {
                          var t2 = [i.Promise.resolve(e3)],
                            r2 = e3.files;
                          if (o.checkCRC32)
                            for (var n2 = 0; n2 < r2.length; n2++)
                              t2.push(f(r2[n2]));
                          return i.Promise.all(t2);
                        })
                        .then(function (e3) {
                          for (
                            var t2 = e3.shift(), r2 = t2.files, n2 = 0;
                            n2 < r2.length;
                            n2++
                          ) {
                            var i2 = r2[n2],
                              s2 = i2.fileNameStr,
                              a2 = u.resolve(i2.fileNameStr);
                            (h.file(a2, i2.decompressed, {
                              binary: true,
                              optimizedBinaryString: true,
                              date: i2.date,
                              dir: i2.dir,
                              comment: i2.fileCommentStr.length
                                ? i2.fileCommentStr
                                : null,
                              unixPermissions: i2.unixPermissions,
                              dosPermissions: i2.dosPermissions,
                              createFolders: o.createFolders,
                            }),
                              i2.dir || (h.file(a2).unsafeOriginalName = s2));
                          }
                          return (
                            t2.zipComment.length && (h.comment = t2.zipComment),
                            h
                          );
                        })
                );
              };
            },
            {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33,
            },
          ],
          12: [
            function (e, t, r) {
              "use strict";
              var n = e("../utils"),
                i = e("../stream/GenericWorker");
              function s(e2, t2) {
                (i.call(this, "Nodejs stream input adapter for " + e2),
                  (this._upstreamEnded = false),
                  this._bindStream(t2));
              }
              (n.inherits(s, i),
                (s.prototype._bindStream = function (e2) {
                  var t2 = this;
                  ((this._stream = e2).pause(),
                    e2
                      .on("data", function (e3) {
                        t2.push({ data: e3, meta: { percent: 0 } });
                      })
                      .on("error", function (e3) {
                        t2.isPaused ? (this.generatedError = e3) : t2.error(e3);
                      })
                      .on("end", function () {
                        t2.isPaused ? (t2._upstreamEnded = true) : t2.end();
                      }));
                }),
                (s.prototype.pause = function () {
                  return (
                    !!i.prototype.pause.call(this) &&
                    (this._stream.pause(), true)
                  );
                }),
                (s.prototype.resume = function () {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (this._upstreamEnded ? this.end() : this._stream.resume(),
                    true)
                  );
                }),
                (t.exports = s));
            },
            { "../stream/GenericWorker": 28, "../utils": 32 },
          ],
          13: [
            function (e, t, r) {
              "use strict";
              var i = e("readable-stream").Readable;
              function n(e2, t2, r2) {
                (i.call(this, t2), (this._helper = e2));
                var n2 = this;
                e2.on("data", function (e3, t3) {
                  (n2.push(e3) || n2._helper.pause(), r2 && r2(t3));
                })
                  .on("error", function (e3) {
                    n2.emit("error", e3);
                  })
                  .on("end", function () {
                    n2.push(null);
                  });
              }
              (e("../utils").inherits(n, i),
                (n.prototype._read = function () {
                  this._helper.resume();
                }),
                (t.exports = n));
            },
            { "../utils": 32, "readable-stream": 16 },
          ],
          14: [
            function (e, t, r) {
              "use strict";
              t.exports = {
                isNode: "undefined" != typeof Buffer,
                newBufferFrom: function (e2, t2) {
                  if (Buffer.from && Buffer.from !== Uint8Array.from)
                    return Buffer.from(e2, t2);
                  if ("number" == typeof e2)
                    throw new Error('The "data" argument must not be a number');
                  return new Buffer(e2, t2);
                },
                allocBuffer: function (e2) {
                  if (Buffer.alloc) return Buffer.alloc(e2);
                  var t2 = new Buffer(e2);
                  return (t2.fill(0), t2);
                },
                isBuffer: function (e2) {
                  return Buffer.isBuffer(e2);
                },
                isStream: function (e2) {
                  return (
                    e2 &&
                    "function" == typeof e2.on &&
                    "function" == typeof e2.pause &&
                    "function" == typeof e2.resume
                  );
                },
              };
            },
            {},
          ],
          15: [
            function (e, t, r) {
              "use strict";
              function s(e2, t2, r2) {
                var n2,
                  i2 = u.getTypeOf(t2),
                  s2 = u.extend(r2 || {}, f);
                ((s2.date = s2.date || /* @__PURE__ */ new Date()),
                  null !== s2.compression &&
                    (s2.compression = s2.compression.toUpperCase()),
                  "string" == typeof s2.unixPermissions &&
                    (s2.unixPermissions = parseInt(s2.unixPermissions, 8)),
                  s2.unixPermissions &&
                    16384 & s2.unixPermissions &&
                    (s2.dir = true),
                  s2.dosPermissions &&
                    16 & s2.dosPermissions &&
                    (s2.dir = true),
                  s2.dir && (e2 = g(e2)),
                  s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true));
                var a2 =
                  "string" === i2 && false === s2.binary && false === s2.base64;
                ((r2 && void 0 !== r2.binary) || (s2.binary = !a2),
                  ((t2 instanceof c && 0 === t2.uncompressedSize) ||
                    s2.dir ||
                    !t2 ||
                    0 === t2.length) &&
                    ((s2.base64 = false),
                    (s2.binary = true),
                    (t2 = ""),
                    (s2.compression = "STORE"),
                    (i2 = "string")));
                var o2 = null;
                o2 =
                  t2 instanceof c || t2 instanceof l
                    ? t2
                    : p.isNode && p.isStream(t2)
                      ? new m(e2, t2)
                      : u.prepareContent(
                          e2,
                          t2,
                          s2.binary,
                          s2.optimizedBinaryString,
                          s2.base64,
                        );
                var h2 = new d(e2, o2, s2);
                this.files[e2] = h2;
              }
              var i = e("./utf8"),
                u = e("./utils"),
                l = e("./stream/GenericWorker"),
                a = e("./stream/StreamHelper"),
                f = e("./defaults"),
                c = e("./compressedObject"),
                d = e("./zipObject"),
                o = e("./generate"),
                p = e("./nodejsUtils"),
                m = e("./nodejs/NodejsStreamInputAdapter"),
                _ = function (e2) {
                  "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
                  var t2 = e2.lastIndexOf("/");
                  return 0 < t2 ? e2.substring(0, t2) : "";
                },
                g = function (e2) {
                  return ("/" !== e2.slice(-1) && (e2 += "/"), e2);
                },
                b = function (e2, t2) {
                  return (
                    (t2 = void 0 !== t2 ? t2 : f.createFolders),
                    (e2 = g(e2)),
                    this.files[e2] ||
                      s.call(this, e2, null, { dir: true, createFolders: t2 }),
                    this.files[e2]
                  );
                };
              function h(e2) {
                return "[object RegExp]" === Object.prototype.toString.call(e2);
              }
              var n = {
                load: function () {
                  throw new Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                  );
                },
                forEach: function (e2) {
                  var t2, r2, n2;
                  for (t2 in this.files)
                    ((n2 = this.files[t2]),
                      (r2 = t2.slice(this.root.length, t2.length)) &&
                        t2.slice(0, this.root.length) === this.root &&
                        e2(r2, n2));
                },
                filter: function (r2) {
                  var n2 = [];
                  return (
                    this.forEach(function (e2, t2) {
                      r2(e2, t2) && n2.push(t2);
                    }),
                    n2
                  );
                },
                file: function (e2, t2, r2) {
                  if (1 !== arguments.length)
                    return (
                      (e2 = this.root + e2),
                      s.call(this, e2, t2, r2),
                      this
                    );
                  if (h(e2)) {
                    var n2 = e2;
                    return this.filter(function (e3, t3) {
                      return !t3.dir && n2.test(e3);
                    });
                  }
                  var i2 = this.files[this.root + e2];
                  return i2 && !i2.dir ? i2 : null;
                },
                folder: function (r2) {
                  if (!r2) return this;
                  if (h(r2))
                    return this.filter(function (e3, t3) {
                      return t3.dir && r2.test(e3);
                    });
                  var e2 = this.root + r2,
                    t2 = b.call(this, e2),
                    n2 = this.clone();
                  return ((n2.root = t2.name), n2);
                },
                remove: function (r2) {
                  r2 = this.root + r2;
                  var e2 = this.files[r2];
                  if (
                    (e2 ||
                      ("/" !== r2.slice(-1) && (r2 += "/"),
                      (e2 = this.files[r2])),
                    e2 && !e2.dir)
                  )
                    delete this.files[r2];
                  else
                    for (
                      var t2 = this.filter(function (e3, t3) {
                          return t3.name.slice(0, r2.length) === r2;
                        }),
                        n2 = 0;
                      n2 < t2.length;
                      n2++
                    )
                      delete this.files[t2[n2].name];
                  return this;
                },
                generate: function () {
                  throw new Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                  );
                },
                generateInternalStream: function (e2) {
                  var t2,
                    r2 = {};
                  try {
                    if (
                      (((r2 = u.extend(e2 || {}, {
                        streamFiles: false,
                        compression: "STORE",
                        compressionOptions: null,
                        type: "",
                        platform: "DOS",
                        comment: null,
                        mimeType: "application/zip",
                        encodeFileName: i.utf8encode,
                      })).type = r2.type.toLowerCase()),
                      (r2.compression = r2.compression.toUpperCase()),
                      "binarystring" === r2.type && (r2.type = "string"),
                      !r2.type)
                    )
                      throw new Error("No output type specified.");
                    (u.checkSupport(r2.type),
                      ("darwin" !== r2.platform &&
                        "freebsd" !== r2.platform &&
                        "linux" !== r2.platform &&
                        "sunos" !== r2.platform) ||
                        (r2.platform = "UNIX"),
                      "win32" === r2.platform && (r2.platform = "DOS"));
                    var n2 = r2.comment || this.comment || "";
                    t2 = o.generateWorker(this, r2, n2);
                  } catch (e3) {
                    (t2 = new l("error")).error(e3);
                  }
                  return new a(t2, r2.type || "string", r2.mimeType);
                },
                generateAsync: function (e2, t2) {
                  return this.generateInternalStream(e2).accumulate(t2);
                },
                generateNodeStream: function (e2, t2) {
                  return (
                    (e2 = e2 || {}).type || (e2.type = "nodebuffer"),
                    this.generateInternalStream(e2).toNodejsStream(t2)
                  );
                },
              };
              t.exports = n;
            },
            {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35,
            },
          ],
          16: [
            function (e, t, r) {
              "use strict";
              t.exports = e("stream");
            },
            { stream: void 0 },
          ],
          17: [
            function (e, t, r) {
              "use strict";
              var n = e("./DataReader");
              function i(e2) {
                n.call(this, e2);
                for (var t2 = 0; t2 < this.data.length; t2++)
                  e2[t2] = 255 & e2[t2];
              }
              (e("../utils").inherits(i, n),
                (i.prototype.byteAt = function (e2) {
                  return this.data[this.zero + e2];
                }),
                (i.prototype.lastIndexOfSignature = function (e2) {
                  for (
                    var t2 = e2.charCodeAt(0),
                      r2 = e2.charCodeAt(1),
                      n2 = e2.charCodeAt(2),
                      i2 = e2.charCodeAt(3),
                      s = this.length - 4;
                    0 <= s;
                    --s
                  )
                    if (
                      this.data[s] === t2 &&
                      this.data[s + 1] === r2 &&
                      this.data[s + 2] === n2 &&
                      this.data[s + 3] === i2
                    )
                      return s - this.zero;
                  return -1;
                }),
                (i.prototype.readAndCheckSignature = function (e2) {
                  var t2 = e2.charCodeAt(0),
                    r2 = e2.charCodeAt(1),
                    n2 = e2.charCodeAt(2),
                    i2 = e2.charCodeAt(3),
                    s = this.readData(4);
                  return (
                    t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3]
                  );
                }),
                (i.prototype.readData = function (e2) {
                  if ((this.checkOffset(e2), 0 === e2)) return [];
                  var t2 = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + e2,
                  );
                  return ((this.index += e2), t2);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          18: [
            function (e, t, r) {
              "use strict";
              var n = e("../utils");
              function i(e2) {
                ((this.data = e2),
                  (this.length = e2.length),
                  (this.index = 0),
                  (this.zero = 0));
              }
              ((i.prototype = {
                checkOffset: function (e2) {
                  this.checkIndex(this.index + e2);
                },
                checkIndex: function (e2) {
                  if (this.length < this.zero + e2 || e2 < 0)
                    throw new Error(
                      "End of data reached (data length = " +
                        this.length +
                        ", asked index = " +
                        e2 +
                        "). Corrupted zip ?",
                    );
                },
                setIndex: function (e2) {
                  (this.checkIndex(e2), (this.index = e2));
                },
                skip: function (e2) {
                  this.setIndex(this.index + e2);
                },
                byteAt: function () {},
                readInt: function (e2) {
                  var t2,
                    r2 = 0;
                  for (
                    this.checkOffset(e2), t2 = this.index + e2 - 1;
                    t2 >= this.index;
                    t2--
                  )
                    r2 = (r2 << 8) + this.byteAt(t2);
                  return ((this.index += e2), r2);
                },
                readString: function (e2) {
                  return n.transformTo("string", this.readData(e2));
                },
                readData: function () {},
                lastIndexOfSignature: function () {},
                readAndCheckSignature: function () {},
                readDate: function () {
                  var e2 = this.readInt(4);
                  return new Date(
                    Date.UTC(
                      1980 + ((e2 >> 25) & 127),
                      ((e2 >> 21) & 15) - 1,
                      (e2 >> 16) & 31,
                      (e2 >> 11) & 31,
                      (e2 >> 5) & 63,
                      (31 & e2) << 1,
                    ),
                  );
                },
              }),
                (t.exports = i));
            },
            { "../utils": 32 },
          ],
          19: [
            function (e, t, r) {
              "use strict";
              var n = e("./Uint8ArrayReader");
              function i(e2) {
                n.call(this, e2);
              }
              (e("../utils").inherits(i, n),
                (i.prototype.readData = function (e2) {
                  this.checkOffset(e2);
                  var t2 = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + e2,
                  );
                  return ((this.index += e2), t2);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./Uint8ArrayReader": 21 },
          ],
          20: [
            function (e, t, r) {
              "use strict";
              var n = e("./DataReader");
              function i(e2) {
                n.call(this, e2);
              }
              (e("../utils").inherits(i, n),
                (i.prototype.byteAt = function (e2) {
                  return this.data.charCodeAt(this.zero + e2);
                }),
                (i.prototype.lastIndexOfSignature = function (e2) {
                  return this.data.lastIndexOf(e2) - this.zero;
                }),
                (i.prototype.readAndCheckSignature = function (e2) {
                  return e2 === this.readData(4);
                }),
                (i.prototype.readData = function (e2) {
                  this.checkOffset(e2);
                  var t2 = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + e2,
                  );
                  return ((this.index += e2), t2);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          21: [
            function (e, t, r) {
              "use strict";
              var n = e("./ArrayReader");
              function i(e2) {
                n.call(this, e2);
              }
              (e("../utils").inherits(i, n),
                (i.prototype.readData = function (e2) {
                  if ((this.checkOffset(e2), 0 === e2))
                    return new Uint8Array(0);
                  var t2 = this.data.subarray(
                    this.zero + this.index,
                    this.zero + this.index + e2,
                  );
                  return ((this.index += e2), t2);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./ArrayReader": 17 },
          ],
          22: [
            function (e, t, r) {
              "use strict";
              var n = e("../utils"),
                i = e("../support"),
                s = e("./ArrayReader"),
                a = e("./StringReader"),
                o = e("./NodeBufferReader"),
                h = e("./Uint8ArrayReader");
              t.exports = function (e2) {
                var t2 = n.getTypeOf(e2);
                return (
                  n.checkSupport(t2),
                  "string" !== t2 || i.uint8array
                    ? "nodebuffer" === t2
                      ? new o(e2)
                      : i.uint8array
                        ? new h(n.transformTo("uint8array", e2))
                        : new s(n.transformTo("array", e2))
                    : new a(e2)
                );
              };
            },
            {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21,
            },
          ],
          23: [
            function (e, t, r) {
              "use strict";
              ((r.LOCAL_FILE_HEADER = "PK"),
                (r.CENTRAL_FILE_HEADER = "PK"),
                (r.CENTRAL_DIRECTORY_END = "PK"),
                (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07"),
                (r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                (r.DATA_DESCRIPTOR = "PK\x07\b"));
            },
            {},
          ],
          24: [
            function (e, t, r) {
              "use strict";
              var n = e("./GenericWorker"),
                i = e("../utils");
              function s(e2) {
                (n.call(this, "ConvertWorker to " + e2), (this.destType = e2));
              }
              (i.inherits(s, n),
                (s.prototype.processChunk = function (e2) {
                  this.push({
                    data: i.transformTo(this.destType, e2.data),
                    meta: e2.meta,
                  });
                }),
                (t.exports = s));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          25: [
            function (e, t, r) {
              "use strict";
              var n = e("./GenericWorker"),
                i = e("../crc32");
              function s() {
                (n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0));
              }
              (e("../utils").inherits(s, n),
                (s.prototype.processChunk = function (e2) {
                  ((this.streamInfo.crc32 = i(
                    e2.data,
                    this.streamInfo.crc32 || 0,
                  )),
                    this.push(e2));
                }),
                (t.exports = s));
            },
            { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
          ],
          26: [
            function (e, t, r) {
              "use strict";
              var n = e("../utils"),
                i = e("./GenericWorker");
              function s(e2) {
                (i.call(this, "DataLengthProbe for " + e2),
                  (this.propName = e2),
                  this.withStreamInfo(e2, 0));
              }
              (n.inherits(s, i),
                (s.prototype.processChunk = function (e2) {
                  if (e2) {
                    var t2 = this.streamInfo[this.propName] || 0;
                    this.streamInfo[this.propName] = t2 + e2.data.length;
                  }
                  i.prototype.processChunk.call(this, e2);
                }),
                (t.exports = s));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          27: [
            function (e, t, r) {
              "use strict";
              var n = e("../utils"),
                i = e("./GenericWorker");
              function s(e2) {
                i.call(this, "DataWorker");
                var t2 = this;
                ((this.dataIsReady = false),
                  (this.index = 0),
                  (this.max = 0),
                  (this.data = null),
                  (this.type = ""),
                  (this._tickScheduled = false),
                  e2.then(
                    function (e3) {
                      ((t2.dataIsReady = true),
                        (t2.data = e3),
                        (t2.max = (e3 && e3.length) || 0),
                        (t2.type = n.getTypeOf(e3)),
                        t2.isPaused || t2._tickAndRepeat());
                    },
                    function (e3) {
                      t2.error(e3);
                    },
                  ));
              }
              (n.inherits(s, i),
                (s.prototype.cleanUp = function () {
                  (i.prototype.cleanUp.call(this), (this.data = null));
                }),
                (s.prototype.resume = function () {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (!this._tickScheduled &&
                      this.dataIsReady &&
                      ((this._tickScheduled = true),
                      n.delay(this._tickAndRepeat, [], this)),
                    true)
                  );
                }),
                (s.prototype._tickAndRepeat = function () {
                  ((this._tickScheduled = false),
                    this.isPaused ||
                      this.isFinished ||
                      (this._tick(),
                      this.isFinished ||
                        (n.delay(this._tickAndRepeat, [], this),
                        (this._tickScheduled = true))));
                }),
                (s.prototype._tick = function () {
                  if (this.isPaused || this.isFinished) return false;
                  var e2 = null,
                    t2 = Math.min(this.max, this.index + 16384);
                  if (this.index >= this.max) return this.end();
                  switch (this.type) {
                    case "string":
                      e2 = this.data.substring(this.index, t2);
                      break;
                    case "uint8array":
                      e2 = this.data.subarray(this.index, t2);
                      break;
                    case "array":
                    case "nodebuffer":
                      e2 = this.data.slice(this.index, t2);
                  }
                  return (
                    (this.index = t2),
                    this.push({
                      data: e2,
                      meta: {
                        percent: this.max ? (this.index / this.max) * 100 : 0,
                      },
                    })
                  );
                }),
                (t.exports = s));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          28: [
            function (e, t, r) {
              "use strict";
              function n(e2) {
                ((this.name = e2 || "default"),
                  (this.streamInfo = {}),
                  (this.generatedError = null),
                  (this.extraStreamInfo = {}),
                  (this.isPaused = true),
                  (this.isFinished = false),
                  (this.isLocked = false),
                  (this._listeners = { data: [], end: [], error: [] }),
                  (this.previous = null));
              }
              ((n.prototype = {
                push: function (e2) {
                  this.emit("data", e2);
                },
                end: function () {
                  if (this.isFinished) return false;
                  this.flush();
                  try {
                    (this.emit("end"),
                      this.cleanUp(),
                      (this.isFinished = true));
                  } catch (e2) {
                    this.emit("error", e2);
                  }
                  return true;
                },
                error: function (e2) {
                  return (
                    !this.isFinished &&
                    (this.isPaused
                      ? (this.generatedError = e2)
                      : ((this.isFinished = true),
                        this.emit("error", e2),
                        this.previous && this.previous.error(e2),
                        this.cleanUp()),
                    true)
                  );
                },
                on: function (e2, t2) {
                  return (this._listeners[e2].push(t2), this);
                },
                cleanUp: function () {
                  ((this.streamInfo =
                    this.generatedError =
                    this.extraStreamInfo =
                      null),
                    (this._listeners = []));
                },
                emit: function (e2, t2) {
                  if (this._listeners[e2])
                    for (var r2 = 0; r2 < this._listeners[e2].length; r2++)
                      this._listeners[e2][r2].call(this, t2);
                },
                pipe: function (e2) {
                  return e2.registerPrevious(this);
                },
                registerPrevious: function (e2) {
                  if (this.isLocked)
                    throw new Error(
                      "The stream '" + this + "' has already been used.",
                    );
                  ((this.streamInfo = e2.streamInfo),
                    this.mergeStreamInfo(),
                    (this.previous = e2));
                  var t2 = this;
                  return (
                    e2.on("data", function (e3) {
                      t2.processChunk(e3);
                    }),
                    e2.on("end", function () {
                      t2.end();
                    }),
                    e2.on("error", function (e3) {
                      t2.error(e3);
                    }),
                    this
                  );
                },
                pause: function () {
                  return (
                    !this.isPaused &&
                    !this.isFinished &&
                    ((this.isPaused = true),
                    this.previous && this.previous.pause(),
                    true)
                  );
                },
                resume: function () {
                  if (!this.isPaused || this.isFinished) return false;
                  var e2 = (this.isPaused = false);
                  return (
                    this.generatedError &&
                      (this.error(this.generatedError), (e2 = true)),
                    this.previous && this.previous.resume(),
                    !e2
                  );
                },
                flush: function () {},
                processChunk: function (e2) {
                  this.push(e2);
                },
                withStreamInfo: function (e2, t2) {
                  return (
                    (this.extraStreamInfo[e2] = t2),
                    this.mergeStreamInfo(),
                    this
                  );
                },
                mergeStreamInfo: function () {
                  for (var e2 in this.extraStreamInfo)
                    Object.prototype.hasOwnProperty.call(
                      this.extraStreamInfo,
                      e2,
                    ) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
                },
                lock: function () {
                  if (this.isLocked)
                    throw new Error(
                      "The stream '" + this + "' has already been used.",
                    );
                  ((this.isLocked = true),
                    this.previous && this.previous.lock());
                },
                toString: function () {
                  var e2 = "Worker " + this.name;
                  return this.previous ? this.previous + " -> " + e2 : e2;
                },
              }),
                (t.exports = n));
            },
            {},
          ],
          29: [
            function (e, t, r) {
              "use strict";
              var h = e("../utils"),
                i = e("./ConvertWorker"),
                s = e("./GenericWorker"),
                u = e("../base64"),
                n = e("../support"),
                a = e("../external"),
                o = null;
              if (n.nodestream)
                try {
                  o = e("../nodejs/NodejsStreamOutputAdapter");
                } catch (e2) {}
              function l(e2, o2) {
                return new a.Promise(function (t2, r2) {
                  var n2 = [],
                    i2 = e2._internalType,
                    s2 = e2._outputType,
                    a2 = e2._mimeType;
                  e2.on("data", function (e3, t3) {
                    (n2.push(e3), o2 && o2(t3));
                  })
                    .on("error", function (e3) {
                      ((n2 = []), r2(e3));
                    })
                    .on("end", function () {
                      try {
                        var e3 = (function (e4, t3, r3) {
                          switch (e4) {
                            case "blob":
                              return h.newBlob(
                                h.transformTo("arraybuffer", t3),
                                r3,
                              );
                            case "base64":
                              return u.encode(t3);
                            default:
                              return h.transformTo(e4, t3);
                          }
                        })(
                          s2,
                          (function (e4, t3) {
                            var r3,
                              n3 = 0,
                              i3 = null,
                              s3 = 0;
                            for (r3 = 0; r3 < t3.length; r3++)
                              s3 += t3[r3].length;
                            switch (e4) {
                              case "string":
                                return t3.join("");
                              case "array":
                                return Array.prototype.concat.apply([], t3);
                              case "uint8array":
                                for (
                                  i3 = new Uint8Array(s3), r3 = 0;
                                  r3 < t3.length;
                                  r3++
                                )
                                  (i3.set(t3[r3], n3), (n3 += t3[r3].length));
                                return i3;
                              case "nodebuffer":
                                return Buffer.concat(t3);
                              default:
                                throw new Error(
                                  "concat : unsupported type '" + e4 + "'",
                                );
                            }
                          })(i2, n2),
                          a2,
                        );
                        t2(e3);
                      } catch (e4) {
                        r2(e4);
                      }
                      n2 = [];
                    })
                    .resume();
                });
              }
              function f(e2, t2, r2) {
                var n2 = t2;
                switch (t2) {
                  case "blob":
                  case "arraybuffer":
                    n2 = "uint8array";
                    break;
                  case "base64":
                    n2 = "string";
                }
                try {
                  ((this._internalType = n2),
                    (this._outputType = t2),
                    (this._mimeType = r2),
                    h.checkSupport(n2),
                    (this._worker = e2.pipe(new i(n2))),
                    e2.lock());
                } catch (e3) {
                  ((this._worker = new s("error")), this._worker.error(e3));
                }
              }
              ((f.prototype = {
                accumulate: function (e2) {
                  return l(this, e2);
                },
                on: function (e2, t2) {
                  var r2 = this;
                  return (
                    "data" === e2
                      ? this._worker.on(e2, function (e3) {
                          t2.call(r2, e3.data, e3.meta);
                        })
                      : this._worker.on(e2, function () {
                          h.delay(t2, arguments, r2);
                        }),
                    this
                  );
                },
                resume: function () {
                  return (h.delay(this._worker.resume, [], this._worker), this);
                },
                pause: function () {
                  return (this._worker.pause(), this);
                },
                toNodejsStream: function (e2) {
                  if (
                    (h.checkSupport("nodestream"),
                    "nodebuffer" !== this._outputType)
                  )
                    throw new Error(
                      this._outputType + " is not supported by this method",
                    );
                  return new o(
                    this,
                    { objectMode: "nodebuffer" !== this._outputType },
                    e2,
                  );
                },
              }),
                (t.exports = f));
            },
            {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28,
            },
          ],
          30: [
            function (e, t, r) {
              "use strict";
              if (
                ((r.base64 = true),
                (r.array = true),
                (r.string = true),
                (r.arraybuffer =
                  "undefined" != typeof ArrayBuffer &&
                  "undefined" != typeof Uint8Array),
                (r.nodebuffer = "undefined" != typeof Buffer),
                (r.uint8array = "undefined" != typeof Uint8Array),
                "undefined" == typeof ArrayBuffer)
              )
                r.blob = false;
              else {
                var n = new ArrayBuffer(0);
                try {
                  r.blob =
                    0 === new Blob([n], { type: "application/zip" }).size;
                } catch (e2) {
                  try {
                    var i = new (
                      self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder
                    )();
                    (i.append(n),
                      (r.blob = 0 === i.getBlob("application/zip").size));
                  } catch (e3) {
                    r.blob = false;
                  }
                }
              }
              try {
                r.nodestream = !!e("readable-stream").Readable;
              } catch (e2) {
                r.nodestream = false;
              }
            },
            { "readable-stream": 16 },
          ],
          31: [
            function (e, t, s) {
              "use strict";
              for (
                var o = e("./utils"),
                  h = e("./support"),
                  r = e("./nodejsUtils"),
                  n = e("./stream/GenericWorker"),
                  u = new Array(256),
                  i = 0;
                i < 256;
                i++
              )
                u[i] =
                  252 <= i
                    ? 6
                    : 248 <= i
                      ? 5
                      : 240 <= i
                        ? 4
                        : 224 <= i
                          ? 3
                          : 192 <= i
                            ? 2
                            : 1;
              u[254] = u[254] = 1;
              function a() {
                (n.call(this, "utf-8 decode"), (this.leftOver = null));
              }
              function l() {
                n.call(this, "utf-8 encode");
              }
              ((s.utf8encode = function (e2) {
                return h.nodebuffer
                  ? r.newBufferFrom(e2, "utf-8")
                  : (function (e3) {
                      var t2,
                        r2,
                        n2,
                        i2,
                        s2,
                        a2 = e3.length,
                        o2 = 0;
                      for (i2 = 0; i2 < a2; i2++)
                        (55296 == (64512 & (r2 = e3.charCodeAt(i2))) &&
                          i2 + 1 < a2 &&
                          56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) &&
                          ((r2 = 65536 + ((r2 - 55296) << 10) + (n2 - 56320)),
                          i2++),
                          (o2 +=
                            r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4));
                      for (
                        t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2),
                          i2 = s2 = 0;
                        s2 < o2;
                        i2++
                      )
                        (55296 == (64512 & (r2 = e3.charCodeAt(i2))) &&
                          i2 + 1 < a2 &&
                          56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) &&
                          ((r2 = 65536 + ((r2 - 55296) << 10) + (n2 - 56320)),
                          i2++),
                          r2 < 128
                            ? (t2[s2++] = r2)
                            : (r2 < 2048
                                ? (t2[s2++] = 192 | (r2 >>> 6))
                                : (r2 < 65536
                                    ? (t2[s2++] = 224 | (r2 >>> 12))
                                    : ((t2[s2++] = 240 | (r2 >>> 18)),
                                      (t2[s2++] = 128 | ((r2 >>> 12) & 63))),
                                  (t2[s2++] = 128 | ((r2 >>> 6) & 63))),
                              (t2[s2++] = 128 | (63 & r2))));
                      return t2;
                    })(e2);
              }),
                (s.utf8decode = function (e2) {
                  return h.nodebuffer
                    ? o.transformTo("nodebuffer", e2).toString("utf-8")
                    : (function (e3) {
                        var t2,
                          r2,
                          n2,
                          i2,
                          s2 = e3.length,
                          a2 = new Array(2 * s2);
                        for (t2 = r2 = 0; t2 < s2; )
                          if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
                          else if (4 < (i2 = u[n2]))
                            ((a2[r2++] = 65533), (t2 += i2 - 1));
                          else {
                            for (
                              n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7;
                              1 < i2 && t2 < s2;
                            )
                              ((n2 = (n2 << 6) | (63 & e3[t2++])), i2--);
                            1 < i2
                              ? (a2[r2++] = 65533)
                              : n2 < 65536
                                ? (a2[r2++] = n2)
                                : ((n2 -= 65536),
                                  (a2[r2++] = 55296 | ((n2 >> 10) & 1023)),
                                  (a2[r2++] = 56320 | (1023 & n2)));
                          }
                        return (
                          a2.length !== r2 &&
                            (a2.subarray
                              ? (a2 = a2.subarray(0, r2))
                              : (a2.length = r2)),
                          o.applyFromCharCode(a2)
                        );
                      })(
                        (e2 = o.transformTo(
                          h.uint8array ? "uint8array" : "array",
                          e2,
                        )),
                      );
                }),
                o.inherits(a, n),
                (a.prototype.processChunk = function (e2) {
                  var t2 = o.transformTo(
                    h.uint8array ? "uint8array" : "array",
                    e2.data,
                  );
                  if (this.leftOver && this.leftOver.length) {
                    if (h.uint8array) {
                      var r2 = t2;
                      ((t2 = new Uint8Array(
                        r2.length + this.leftOver.length,
                      )).set(this.leftOver, 0),
                        t2.set(r2, this.leftOver.length));
                    } else t2 = this.leftOver.concat(t2);
                    this.leftOver = null;
                  }
                  var n2 = (function (e3, t3) {
                      var r3;
                      for (
                        (t3 = t3 || e3.length) > e3.length && (t3 = e3.length),
                          r3 = t3 - 1;
                        0 <= r3 && 128 == (192 & e3[r3]);
                      )
                        r3--;
                      return r3 < 0
                        ? t3
                        : 0 === r3
                          ? t3
                          : r3 + u[e3[r3]] > t3
                            ? r3
                            : t3;
                    })(t2),
                    i2 = t2;
                  (n2 !== t2.length &&
                    (h.uint8array
                      ? ((i2 = t2.subarray(0, n2)),
                        (this.leftOver = t2.subarray(n2, t2.length)))
                      : ((i2 = t2.slice(0, n2)),
                        (this.leftOver = t2.slice(n2, t2.length)))),
                    this.push({ data: s.utf8decode(i2), meta: e2.meta }));
                }),
                (a.prototype.flush = function () {
                  this.leftOver &&
                    this.leftOver.length &&
                    (this.push({ data: s.utf8decode(this.leftOver), meta: {} }),
                    (this.leftOver = null));
                }),
                (s.Utf8DecodeWorker = a),
                o.inherits(l, n),
                (l.prototype.processChunk = function (e2) {
                  this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
                }),
                (s.Utf8EncodeWorker = l));
            },
            {
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32,
            },
          ],
          32: [
            function (e, t, a) {
              "use strict";
              var o = e("./support"),
                h = e("./base64"),
                r = e("./nodejsUtils"),
                u = e("./external");
              function n(e2) {
                return e2;
              }
              function l(e2, t2) {
                for (var r2 = 0; r2 < e2.length; ++r2)
                  t2[r2] = 255 & e2.charCodeAt(r2);
                return t2;
              }
              (e("setimmediate"),
                (a.newBlob = function (t2, r2) {
                  a.checkSupport("blob");
                  try {
                    return new Blob([t2], { type: r2 });
                  } catch (e2) {
                    try {
                      var n2 = new (
                        self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder
                      )();
                      return (n2.append(t2), n2.getBlob(r2));
                    } catch (e3) {
                      throw new Error("Bug : can't construct the Blob.");
                    }
                  }
                }));
              var i = {
                stringifyByChunk: function (e2, t2, r2) {
                  var n2 = [],
                    i2 = 0,
                    s2 = e2.length;
                  if (s2 <= r2) return String.fromCharCode.apply(null, e2);
                  for (; i2 < s2; )
                    ("array" === t2 || "nodebuffer" === t2
                      ? n2.push(
                          String.fromCharCode.apply(
                            null,
                            e2.slice(i2, Math.min(i2 + r2, s2)),
                          ),
                        )
                      : n2.push(
                          String.fromCharCode.apply(
                            null,
                            e2.subarray(i2, Math.min(i2 + r2, s2)),
                          ),
                        ),
                      (i2 += r2));
                  return n2.join("");
                },
                stringifyByChar: function (e2) {
                  for (var t2 = "", r2 = 0; r2 < e2.length; r2++)
                    t2 += String.fromCharCode(e2[r2]);
                  return t2;
                },
                applyCanBeUsed: {
                  uint8array: (function () {
                    try {
                      return (
                        o.uint8array &&
                        1 ===
                          String.fromCharCode.apply(null, new Uint8Array(1))
                            .length
                      );
                    } catch (e2) {
                      return false;
                    }
                  })(),
                  nodebuffer: (function () {
                    try {
                      return (
                        o.nodebuffer &&
                        1 ===
                          String.fromCharCode.apply(null, r.allocBuffer(1))
                            .length
                      );
                    } catch (e2) {
                      return false;
                    }
                  })(),
                },
              };
              function s(e2) {
                var t2 = 65536,
                  r2 = a.getTypeOf(e2),
                  n2 = true;
                if (
                  ("uint8array" === r2
                    ? (n2 = i.applyCanBeUsed.uint8array)
                    : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer),
                  n2)
                )
                  for (; 1 < t2; )
                    try {
                      return i.stringifyByChunk(e2, r2, t2);
                    } catch (e3) {
                      t2 = Math.floor(t2 / 2);
                    }
                return i.stringifyByChar(e2);
              }
              function f(e2, t2) {
                for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
                return t2;
              }
              a.applyFromCharCode = s;
              var c = {};
              ((c.string = {
                string: n,
                array: function (e2) {
                  return l(e2, new Array(e2.length));
                },
                arraybuffer: function (e2) {
                  return c.string.uint8array(e2).buffer;
                },
                uint8array: function (e2) {
                  return l(e2, new Uint8Array(e2.length));
                },
                nodebuffer: function (e2) {
                  return l(e2, r.allocBuffer(e2.length));
                },
              }),
                (c.array = {
                  string: s,
                  array: n,
                  arraybuffer: function (e2) {
                    return new Uint8Array(e2).buffer;
                  },
                  uint8array: function (e2) {
                    return new Uint8Array(e2);
                  },
                  nodebuffer: function (e2) {
                    return r.newBufferFrom(e2);
                  },
                }),
                (c.arraybuffer = {
                  string: function (e2) {
                    return s(new Uint8Array(e2));
                  },
                  array: function (e2) {
                    return f(new Uint8Array(e2), new Array(e2.byteLength));
                  },
                  arraybuffer: n,
                  uint8array: function (e2) {
                    return new Uint8Array(e2);
                  },
                  nodebuffer: function (e2) {
                    return r.newBufferFrom(new Uint8Array(e2));
                  },
                }),
                (c.uint8array = {
                  string: s,
                  array: function (e2) {
                    return f(e2, new Array(e2.length));
                  },
                  arraybuffer: function (e2) {
                    return e2.buffer;
                  },
                  uint8array: n,
                  nodebuffer: function (e2) {
                    return r.newBufferFrom(e2);
                  },
                }),
                (c.nodebuffer = {
                  string: s,
                  array: function (e2) {
                    return f(e2, new Array(e2.length));
                  },
                  arraybuffer: function (e2) {
                    return c.nodebuffer.uint8array(e2).buffer;
                  },
                  uint8array: function (e2) {
                    return f(e2, new Uint8Array(e2.length));
                  },
                  nodebuffer: n,
                }),
                (a.transformTo = function (e2, t2) {
                  if (((t2 = t2 || ""), !e2)) return t2;
                  a.checkSupport(e2);
                  var r2 = a.getTypeOf(t2);
                  return c[r2][e2](t2);
                }),
                (a.resolve = function (e2) {
                  for (
                    var t2 = e2.split("/"), r2 = [], n2 = 0;
                    n2 < t2.length;
                    n2++
                  ) {
                    var i2 = t2[n2];
                    "." === i2 ||
                      ("" === i2 && 0 !== n2 && n2 !== t2.length - 1) ||
                      (".." === i2 ? r2.pop() : r2.push(i2));
                  }
                  return r2.join("/");
                }),
                (a.getTypeOf = function (e2) {
                  return "string" == typeof e2
                    ? "string"
                    : "[object Array]" === Object.prototype.toString.call(e2)
                      ? "array"
                      : o.nodebuffer && r.isBuffer(e2)
                        ? "nodebuffer"
                        : o.uint8array && e2 instanceof Uint8Array
                          ? "uint8array"
                          : o.arraybuffer && e2 instanceof ArrayBuffer
                            ? "arraybuffer"
                            : void 0;
                }),
                (a.checkSupport = function (e2) {
                  if (!o[e2.toLowerCase()])
                    throw new Error(e2 + " is not supported by this platform");
                }),
                (a.MAX_VALUE_16BITS = 65535),
                (a.MAX_VALUE_32BITS = -1),
                (a.pretty = function (e2) {
                  var t2,
                    r2,
                    n2 = "";
                  for (r2 = 0; r2 < (e2 || "").length; r2++)
                    n2 +=
                      "\\x" +
                      ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") +
                      t2.toString(16).toUpperCase();
                  return n2;
                }),
                (a.delay = function (e2, t2, r2) {
                  setImmediate(function () {
                    e2.apply(r2 || null, t2 || []);
                  });
                }),
                (a.inherits = function (e2, t2) {
                  function r2() {}
                  ((r2.prototype = t2.prototype), (e2.prototype = new r2()));
                }),
                (a.extend = function () {
                  var e2,
                    t2,
                    r2 = {};
                  for (e2 = 0; e2 < arguments.length; e2++)
                    for (t2 in arguments[e2])
                      Object.prototype.hasOwnProperty.call(arguments[e2], t2) &&
                        void 0 === r2[t2] &&
                        (r2[t2] = arguments[e2][t2]);
                  return r2;
                }),
                (a.prepareContent = function (r2, e2, n2, i2, s2) {
                  return u.Promise.resolve(e2)
                    .then(function (n3) {
                      return o.blob &&
                        (n3 instanceof Blob ||
                          -1 !==
                            ["[object File]", "[object Blob]"].indexOf(
                              Object.prototype.toString.call(n3),
                            )) &&
                        "undefined" != typeof FileReader
                        ? new u.Promise(function (t2, r3) {
                            var e3 = new FileReader();
                            ((e3.onload = function (e4) {
                              t2(e4.target.result);
                            }),
                              (e3.onerror = function (e4) {
                                r3(e4.target.error);
                              }),
                              e3.readAsArrayBuffer(n3));
                          })
                        : n3;
                    })
                    .then(function (e3) {
                      var t2 = a.getTypeOf(e3);
                      return t2
                        ? ("arraybuffer" === t2
                            ? (e3 = a.transformTo("uint8array", e3))
                            : "string" === t2 &&
                              (s2
                                ? (e3 = h.decode(e3))
                                : n2 &&
                                  true !== i2 &&
                                  (e3 = (function (e4) {
                                    return l(
                                      e4,
                                      o.uint8array
                                        ? new Uint8Array(e4.length)
                                        : new Array(e4.length),
                                    );
                                  })(e3))),
                          e3)
                        : u.Promise.reject(
                            new Error(
                              "Can't read the data of '" +
                                r2 +
                                "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                            ),
                          );
                    });
                }));
            },
            {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54,
            },
          ],
          33: [
            function (e, t, r) {
              "use strict";
              var n = e("./reader/readerFor"),
                i = e("./utils"),
                s = e("./signature"),
                a = e("./zipEntry"),
                o = e("./support");
              function h(e2) {
                ((this.files = []), (this.loadOptions = e2));
              }
              ((h.prototype = {
                checkSignature: function (e2) {
                  if (!this.reader.readAndCheckSignature(e2)) {
                    this.reader.index -= 4;
                    var t2 = this.reader.readString(4);
                    throw new Error(
                      "Corrupted zip or bug: unexpected signature (" +
                        i.pretty(t2) +
                        ", expected " +
                        i.pretty(e2) +
                        ")",
                    );
                  }
                },
                isSignature: function (e2, t2) {
                  var r2 = this.reader.index;
                  this.reader.setIndex(e2);
                  var n2 = this.reader.readString(4) === t2;
                  return (this.reader.setIndex(r2), n2);
                },
                readBlockEndOfCentral: function () {
                  ((this.diskNumber = this.reader.readInt(2)),
                    (this.diskWithCentralDirStart = this.reader.readInt(2)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                    (this.centralDirRecords = this.reader.readInt(2)),
                    (this.centralDirSize = this.reader.readInt(4)),
                    (this.centralDirOffset = this.reader.readInt(4)),
                    (this.zipCommentLength = this.reader.readInt(2)));
                  var e2 = this.reader.readData(this.zipCommentLength),
                    t2 = o.uint8array ? "uint8array" : "array",
                    r2 = i.transformTo(t2, e2);
                  this.zipComment = this.loadOptions.decodeFileName(r2);
                },
                readBlockZip64EndOfCentral: function () {
                  ((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                    this.reader.skip(4),
                    (this.diskNumber = this.reader.readInt(4)),
                    (this.diskWithCentralDirStart = this.reader.readInt(4)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                    (this.centralDirRecords = this.reader.readInt(8)),
                    (this.centralDirSize = this.reader.readInt(8)),
                    (this.centralDirOffset = this.reader.readInt(8)),
                    (this.zip64ExtensibleData = {}));
                  for (
                    var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44;
                    0 < n2;
                  )
                    ((e2 = this.reader.readInt(2)),
                      (t2 = this.reader.readInt(4)),
                      (r2 = this.reader.readData(t2)),
                      (this.zip64ExtensibleData[e2] = {
                        id: e2,
                        length: t2,
                        value: r2,
                      }));
                },
                readBlockZip64EndOfCentralLocator: function () {
                  if (
                    ((this.diskWithZip64CentralDirStart =
                      this.reader.readInt(4)),
                    (this.relativeOffsetEndOfZip64CentralDir =
                      this.reader.readInt(8)),
                    (this.disksCount = this.reader.readInt(4)),
                    1 < this.disksCount)
                  )
                    throw new Error("Multi-volumes zip are not supported");
                },
                readLocalFiles: function () {
                  var e2, t2;
                  for (e2 = 0; e2 < this.files.length; e2++)
                    ((t2 = this.files[e2]),
                      this.reader.setIndex(t2.localHeaderOffset),
                      this.checkSignature(s.LOCAL_FILE_HEADER),
                      t2.readLocalPart(this.reader),
                      t2.handleUTF8(),
                      t2.processAttributes());
                },
                readCentralDir: function () {
                  var e2;
                  for (
                    this.reader.setIndex(this.centralDirOffset);
                    this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);
                  )
                    ((e2 = new a(
                      { zip64: this.zip64 },
                      this.loadOptions,
                    )).readCentralPart(this.reader),
                      this.files.push(e2));
                  if (
                    this.centralDirRecords !== this.files.length &&
                    0 !== this.centralDirRecords &&
                    0 === this.files.length
                  )
                    throw new Error(
                      "Corrupted zip or bug: expected " +
                        this.centralDirRecords +
                        " records in central dir, got " +
                        this.files.length,
                    );
                },
                readEndOfCentral: function () {
                  var e2 = this.reader.lastIndexOfSignature(
                    s.CENTRAL_DIRECTORY_END,
                  );
                  if (e2 < 0)
                    throw !this.isSignature(0, s.LOCAL_FILE_HEADER)
                      ? new Error(
                          "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                        )
                      : new Error(
                          "Corrupted zip: can't find end of central directory",
                        );
                  this.reader.setIndex(e2);
                  var t2 = e2;
                  if (
                    (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                    this.readBlockEndOfCentral(),
                    this.diskNumber === i.MAX_VALUE_16BITS ||
                      this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
                      this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS ||
                      this.centralDirRecords === i.MAX_VALUE_16BITS ||
                      this.centralDirSize === i.MAX_VALUE_32BITS ||
                      this.centralDirOffset === i.MAX_VALUE_32BITS)
                  ) {
                    if (
                      ((this.zip64 = true),
                      (e2 = this.reader.lastIndexOfSignature(
                        s.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                      )) < 0)
                    )
                      throw new Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory locator",
                      );
                    if (
                      (this.reader.setIndex(e2),
                      this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                      this.readBlockZip64EndOfCentralLocator(),
                      !this.isSignature(
                        this.relativeOffsetEndOfZip64CentralDir,
                        s.ZIP64_CENTRAL_DIRECTORY_END,
                      ) &&
                        ((this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.lastIndexOfSignature(
                            s.ZIP64_CENTRAL_DIRECTORY_END,
                          )),
                        this.relativeOffsetEndOfZip64CentralDir < 0))
                    )
                      throw new Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory",
                      );
                    (this.reader.setIndex(
                      this.relativeOffsetEndOfZip64CentralDir,
                    ),
                      this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                      this.readBlockZip64EndOfCentral());
                  }
                  var r2 = this.centralDirOffset + this.centralDirSize;
                  this.zip64 &&
                    ((r2 += 20), (r2 += 12 + this.zip64EndOfCentralSize));
                  var n2 = t2 - r2;
                  if (0 < n2)
                    this.isSignature(t2, s.CENTRAL_FILE_HEADER) ||
                      (this.reader.zero = n2);
                  else if (n2 < 0)
                    throw new Error(
                      "Corrupted zip: missing " + Math.abs(n2) + " bytes.",
                    );
                },
                prepareReader: function (e2) {
                  this.reader = n(e2);
                },
                load: function (e2) {
                  (this.prepareReader(e2),
                    this.readEndOfCentral(),
                    this.readCentralDir(),
                    this.readLocalFiles());
                },
              }),
                (t.exports = h));
            },
            {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34,
            },
          ],
          34: [
            function (e, t, r) {
              "use strict";
              var n = e("./reader/readerFor"),
                s = e("./utils"),
                i = e("./compressedObject"),
                a = e("./crc32"),
                o = e("./utf8"),
                h = e("./compressions"),
                u = e("./support");
              function l(e2, t2) {
                ((this.options = e2), (this.loadOptions = t2));
              }
              ((l.prototype = {
                isEncrypted: function () {
                  return 1 == (1 & this.bitFlag);
                },
                useUTF8: function () {
                  return 2048 == (2048 & this.bitFlag);
                },
                readLocalPart: function (e2) {
                  var t2, r2;
                  if (
                    (e2.skip(22),
                    (this.fileNameLength = e2.readInt(2)),
                    (r2 = e2.readInt(2)),
                    (this.fileName = e2.readData(this.fileNameLength)),
                    e2.skip(r2),
                    -1 === this.compressedSize || -1 === this.uncompressedSize)
                  )
                    throw new Error(
                      "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                    );
                  if (
                    null ===
                    (t2 = (function (e3) {
                      for (var t3 in h)
                        if (
                          Object.prototype.hasOwnProperty.call(h, t3) &&
                          h[t3].magic === e3
                        )
                          return h[t3];
                      return null;
                    })(this.compressionMethod))
                  )
                    throw new Error(
                      "Corrupted zip : compression " +
                        s.pretty(this.compressionMethod) +
                        " unknown (inner file : " +
                        s.transformTo("string", this.fileName) +
                        ")",
                    );
                  this.decompressed = new i(
                    this.compressedSize,
                    this.uncompressedSize,
                    this.crc32,
                    t2,
                    e2.readData(this.compressedSize),
                  );
                },
                readCentralPart: function (e2) {
                  ((this.versionMadeBy = e2.readInt(2)),
                    e2.skip(2),
                    (this.bitFlag = e2.readInt(2)),
                    (this.compressionMethod = e2.readString(2)),
                    (this.date = e2.readDate()),
                    (this.crc32 = e2.readInt(4)),
                    (this.compressedSize = e2.readInt(4)),
                    (this.uncompressedSize = e2.readInt(4)));
                  var t2 = e2.readInt(2);
                  if (
                    ((this.extraFieldsLength = e2.readInt(2)),
                    (this.fileCommentLength = e2.readInt(2)),
                    (this.diskNumberStart = e2.readInt(2)),
                    (this.internalFileAttributes = e2.readInt(2)),
                    (this.externalFileAttributes = e2.readInt(4)),
                    (this.localHeaderOffset = e2.readInt(4)),
                    this.isEncrypted())
                  )
                    throw new Error("Encrypted zip are not supported");
                  (e2.skip(t2),
                    this.readExtraFields(e2),
                    this.parseZIP64ExtraField(e2),
                    (this.fileComment = e2.readData(this.fileCommentLength)));
                },
                processAttributes: function () {
                  ((this.unixPermissions = null), (this.dosPermissions = null));
                  var e2 = this.versionMadeBy >> 8;
                  ((this.dir = !!(16 & this.externalFileAttributes)),
                    0 == e2 &&
                      (this.dosPermissions = 63 & this.externalFileAttributes),
                    3 == e2 &&
                      (this.unixPermissions =
                        (this.externalFileAttributes >> 16) & 65535),
                    this.dir ||
                      "/" !== this.fileNameStr.slice(-1) ||
                      (this.dir = true));
                },
                parseZIP64ExtraField: function () {
                  if (this.extraFields[1]) {
                    var e2 = n(this.extraFields[1].value);
                    (this.uncompressedSize === s.MAX_VALUE_32BITS &&
                      (this.uncompressedSize = e2.readInt(8)),
                      this.compressedSize === s.MAX_VALUE_32BITS &&
                        (this.compressedSize = e2.readInt(8)),
                      this.localHeaderOffset === s.MAX_VALUE_32BITS &&
                        (this.localHeaderOffset = e2.readInt(8)),
                      this.diskNumberStart === s.MAX_VALUE_32BITS &&
                        (this.diskNumberStart = e2.readInt(4)));
                  }
                },
                readExtraFields: function (e2) {
                  var t2,
                    r2,
                    n2,
                    i2 = e2.index + this.extraFieldsLength;
                  for (
                    this.extraFields || (this.extraFields = {});
                    e2.index + 4 < i2;
                  )
                    ((t2 = e2.readInt(2)),
                      (r2 = e2.readInt(2)),
                      (n2 = e2.readData(r2)),
                      (this.extraFields[t2] = {
                        id: t2,
                        length: r2,
                        value: n2,
                      }));
                  e2.setIndex(i2);
                },
                handleUTF8: function () {
                  var e2 = u.uint8array ? "uint8array" : "array";
                  if (this.useUTF8())
                    ((this.fileNameStr = o.utf8decode(this.fileName)),
                      (this.fileCommentStr = o.utf8decode(this.fileComment)));
                  else {
                    var t2 = this.findExtraFieldUnicodePath();
                    if (null !== t2) this.fileNameStr = t2;
                    else {
                      var r2 = s.transformTo(e2, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(r2);
                    }
                    var n2 = this.findExtraFieldUnicodeComment();
                    if (null !== n2) this.fileCommentStr = n2;
                    else {
                      var i2 = s.transformTo(e2, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(i2);
                    }
                  }
                },
                findExtraFieldUnicodePath: function () {
                  var e2 = this.extraFields[28789];
                  if (e2) {
                    var t2 = n(e2.value);
                    return 1 !== t2.readInt(1)
                      ? null
                      : a(this.fileName) !== t2.readInt(4)
                        ? null
                        : o.utf8decode(t2.readData(e2.length - 5));
                  }
                  return null;
                },
                findExtraFieldUnicodeComment: function () {
                  var e2 = this.extraFields[25461];
                  if (e2) {
                    var t2 = n(e2.value);
                    return 1 !== t2.readInt(1)
                      ? null
                      : a(this.fileComment) !== t2.readInt(4)
                        ? null
                        : o.utf8decode(t2.readData(e2.length - 5));
                  }
                  return null;
                },
              }),
                (t.exports = l));
            },
            {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32,
            },
          ],
          35: [
            function (e, t, r) {
              "use strict";
              function n(e2, t2, r2) {
                ((this.name = e2),
                  (this.dir = r2.dir),
                  (this.date = r2.date),
                  (this.comment = r2.comment),
                  (this.unixPermissions = r2.unixPermissions),
                  (this.dosPermissions = r2.dosPermissions),
                  (this._data = t2),
                  (this._dataBinary = r2.binary),
                  (this.options = {
                    compression: r2.compression,
                    compressionOptions: r2.compressionOptions,
                  }));
              }
              var s = e("./stream/StreamHelper"),
                i = e("./stream/DataWorker"),
                a = e("./utf8"),
                o = e("./compressedObject"),
                h = e("./stream/GenericWorker");
              n.prototype = {
                internalStream: function (e2) {
                  var t2 = null,
                    r2 = "string";
                  try {
                    if (!e2) throw new Error("No output type specified.");
                    var n2 =
                      "string" === (r2 = e2.toLowerCase()) || "text" === r2;
                    (("binarystring" !== r2 && "text" !== r2) ||
                      (r2 = "string"),
                      (t2 = this._decompressWorker()));
                    var i2 = !this._dataBinary;
                    (i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())),
                      !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker())));
                  } catch (e3) {
                    (t2 = new h("error")).error(e3);
                  }
                  return new s(t2, r2, "");
                },
                async: function (e2, t2) {
                  return this.internalStream(e2).accumulate(t2);
                },
                nodeStream: function (e2, t2) {
                  return this.internalStream(e2 || "nodebuffer").toNodejsStream(
                    t2,
                  );
                },
                _compressWorker: function (e2, t2) {
                  if (
                    this._data instanceof o &&
                    this._data.compression.magic === e2.magic
                  )
                    return this._data.getCompressedWorker();
                  var r2 = this._decompressWorker();
                  return (
                    this._dataBinary ||
                      (r2 = r2.pipe(new a.Utf8EncodeWorker())),
                    o.createWorkerFrom(r2, e2, t2)
                  );
                },
                _decompressWorker: function () {
                  return this._data instanceof o
                    ? this._data.getContentWorker()
                    : this._data instanceof h
                      ? this._data
                      : new i(this._data);
                },
              };
              for (
                var u = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer",
                  ],
                  l = function () {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                    );
                  },
                  f = 0;
                f < u.length;
                f++
              )
                n.prototype[u[f]] = l;
              t.exports = n;
            },
            {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
            },
          ],
          36: [
            function (e, l, t) {
              (function (t2) {
                "use strict";
                var r,
                  n,
                  e2 = t2.MutationObserver || t2.WebKitMutationObserver;
                if (e2) {
                  var i = 0,
                    s = new e2(u),
                    a = t2.document.createTextNode("");
                  (s.observe(a, { characterData: true }),
                    (r = function () {
                      a.data = i = ++i % 2;
                    }));
                } else if (t2.setImmediate || void 0 === t2.MessageChannel)
                  r =
                    "document" in t2 &&
                    "onreadystatechange" in t2.document.createElement("script")
                      ? function () {
                          var e3 = t2.document.createElement("script");
                          ((e3.onreadystatechange = function () {
                            (u(),
                              (e3.onreadystatechange = null),
                              e3.parentNode.removeChild(e3),
                              (e3 = null));
                          }),
                            t2.document.documentElement.appendChild(e3));
                        }
                      : function () {
                          setTimeout(u, 0);
                        };
                else {
                  var o = new t2.MessageChannel();
                  ((o.port1.onmessage = u),
                    (r = function () {
                      o.port2.postMessage(0);
                    }));
                }
                var h = [];
                function u() {
                  var e3, t3;
                  n = true;
                  for (var r2 = h.length; r2; ) {
                    for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
                    r2 = h.length;
                  }
                  n = false;
                }
                l.exports = function (e3) {
                  1 !== h.push(e3) || n || r();
                };
              }).call(
                this,
                "undefined" != typeof global
                  ? global
                  : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                      ? window
                      : {},
              );
            },
            {},
          ],
          37: [
            function (e, t, r) {
              "use strict";
              var i = e("immediate");
              function u() {}
              var l = {},
                s = ["REJECTED"],
                a = ["FULFILLED"],
                n = ["PENDING"];
              function o(e2) {
                if ("function" != typeof e2)
                  throw new TypeError("resolver must be a function");
                ((this.state = n),
                  (this.queue = []),
                  (this.outcome = void 0),
                  e2 !== u && d(this, e2));
              }
              function h(e2, t2, r2) {
                ((this.promise = e2),
                  "function" == typeof t2 &&
                    ((this.onFulfilled = t2),
                    (this.callFulfilled = this.otherCallFulfilled)),
                  "function" == typeof r2 &&
                    ((this.onRejected = r2),
                    (this.callRejected = this.otherCallRejected)));
              }
              function f(t2, r2, n2) {
                i(function () {
                  var e2;
                  try {
                    e2 = r2(n2);
                  } catch (e3) {
                    return l.reject(t2, e3);
                  }
                  e2 === t2
                    ? l.reject(
                        t2,
                        new TypeError("Cannot resolve promise with itself"),
                      )
                    : l.resolve(t2, e2);
                });
              }
              function c(e2) {
                var t2 = e2 && e2.then;
                if (
                  e2 &&
                  ("object" == typeof e2 || "function" == typeof e2) &&
                  "function" == typeof t2
                )
                  return function () {
                    t2.apply(e2, arguments);
                  };
              }
              function d(t2, e2) {
                var r2 = false;
                function n2(e3) {
                  r2 || ((r2 = true), l.reject(t2, e3));
                }
                function i2(e3) {
                  r2 || ((r2 = true), l.resolve(t2, e3));
                }
                var s2 = p(function () {
                  e2(i2, n2);
                });
                "error" === s2.status && n2(s2.value);
              }
              function p(e2, t2) {
                var r2 = {};
                try {
                  ((r2.value = e2(t2)), (r2.status = "success"));
                } catch (e3) {
                  ((r2.status = "error"), (r2.value = e3));
                }
                return r2;
              }
              (((t.exports = o).prototype.finally = function (t2) {
                if ("function" != typeof t2) return this;
                var r2 = this.constructor;
                return this.then(
                  function (e2) {
                    return r2.resolve(t2()).then(function () {
                      return e2;
                    });
                  },
                  function (e2) {
                    return r2.resolve(t2()).then(function () {
                      throw e2;
                    });
                  },
                );
              }),
                (o.prototype.catch = function (e2) {
                  return this.then(null, e2);
                }),
                (o.prototype.then = function (e2, t2) {
                  if (
                    ("function" != typeof e2 && this.state === a) ||
                    ("function" != typeof t2 && this.state === s)
                  )
                    return this;
                  var r2 = new this.constructor(u);
                  this.state !== n
                    ? f(r2, this.state === a ? e2 : t2, this.outcome)
                    : this.queue.push(new h(r2, e2, t2));
                  return r2;
                }),
                (h.prototype.callFulfilled = function (e2) {
                  l.resolve(this.promise, e2);
                }),
                (h.prototype.otherCallFulfilled = function (e2) {
                  f(this.promise, this.onFulfilled, e2);
                }),
                (h.prototype.callRejected = function (e2) {
                  l.reject(this.promise, e2);
                }),
                (h.prototype.otherCallRejected = function (e2) {
                  f(this.promise, this.onRejected, e2);
                }),
                (l.resolve = function (e2, t2) {
                  var r2 = p(c, t2);
                  if ("error" === r2.status) return l.reject(e2, r2.value);
                  var n2 = r2.value;
                  if (n2) d(e2, n2);
                  else {
                    ((e2.state = a), (e2.outcome = t2));
                    for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; )
                      e2.queue[i2].callFulfilled(t2);
                  }
                  return e2;
                }),
                (l.reject = function (e2, t2) {
                  ((e2.state = s), (e2.outcome = t2));
                  for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; )
                    e2.queue[r2].callRejected(t2);
                  return e2;
                }),
                (o.resolve = function (e2) {
                  if (e2 instanceof this) return e2;
                  return l.resolve(new this(u), e2);
                }),
                (o.reject = function (e2) {
                  var t2 = new this(u);
                  return l.reject(t2, e2);
                }),
                (o.all = function (e2) {
                  var r2 = this;
                  if ("[object Array]" !== Object.prototype.toString.call(e2))
                    return this.reject(new TypeError("must be an array"));
                  var n2 = e2.length,
                    i2 = false;
                  if (!n2) return this.resolve([]);
                  var s2 = new Array(n2),
                    a2 = 0,
                    t2 = -1,
                    o2 = new this(u);
                  for (; ++t2 < n2; ) h2(e2[t2], t2);
                  return o2;
                  function h2(e3, t3) {
                    r2.resolve(e3).then(
                      function (e4) {
                        ((s2[t3] = e4),
                          ++a2 !== n2 ||
                            i2 ||
                            ((i2 = true), l.resolve(o2, s2)));
                      },
                      function (e4) {
                        i2 || ((i2 = true), l.reject(o2, e4));
                      },
                    );
                  }
                }),
                (o.race = function (e2) {
                  var t2 = this;
                  if ("[object Array]" !== Object.prototype.toString.call(e2))
                    return this.reject(new TypeError("must be an array"));
                  var r2 = e2.length,
                    n2 = false;
                  if (!r2) return this.resolve([]);
                  var i2 = -1,
                    s2 = new this(u);
                  for (; ++i2 < r2; )
                    ((a2 = e2[i2]),
                      t2.resolve(a2).then(
                        function (e3) {
                          n2 || ((n2 = true), l.resolve(s2, e3));
                        },
                        function (e3) {
                          n2 || ((n2 = true), l.reject(s2, e3));
                        },
                      ));
                  var a2;
                  return s2;
                }));
            },
            { immediate: 36 },
          ],
          38: [
            function (e, t, r) {
              "use strict";
              var n = {};
              ((0, e("./lib/utils/common").assign)(
                n,
                e("./lib/deflate"),
                e("./lib/inflate"),
                e("./lib/zlib/constants"),
              ),
                (t.exports = n));
            },
            {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44,
            },
          ],
          39: [
            function (e, t, r) {
              "use strict";
              var a = e("./zlib/deflate"),
                o = e("./utils/common"),
                h = e("./utils/strings"),
                i = e("./zlib/messages"),
                s = e("./zlib/zstream"),
                u = Object.prototype.toString,
                l = 0,
                f = -1,
                c = 0,
                d = 8;
              function p(e2) {
                if (!(this instanceof p)) return new p(e2);
                this.options = o.assign(
                  {
                    level: f,
                    method: d,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: c,
                    to: "",
                  },
                  e2 || {},
                );
                var t2 = this.options;
                (t2.raw && 0 < t2.windowBits
                  ? (t2.windowBits = -t2.windowBits)
                  : t2.gzip &&
                    0 < t2.windowBits &&
                    t2.windowBits < 16 &&
                    (t2.windowBits += 16),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = false),
                  (this.chunks = []),
                  (this.strm = new s()),
                  (this.strm.avail_out = 0));
                var r2 = a.deflateInit2(
                  this.strm,
                  t2.level,
                  t2.method,
                  t2.windowBits,
                  t2.memLevel,
                  t2.strategy,
                );
                if (r2 !== l) throw new Error(i[r2]);
                if (
                  (t2.header && a.deflateSetHeader(this.strm, t2.header),
                  t2.dictionary)
                ) {
                  var n2;
                  if (
                    ((n2 =
                      "string" == typeof t2.dictionary
                        ? h.string2buf(t2.dictionary)
                        : "[object ArrayBuffer]" === u.call(t2.dictionary)
                          ? new Uint8Array(t2.dictionary)
                          : t2.dictionary),
                    (r2 = a.deflateSetDictionary(this.strm, n2)) !== l)
                  )
                    throw new Error(i[r2]);
                  this._dict_set = true;
                }
              }
              function n(e2, t2) {
                var r2 = new p(t2);
                if ((r2.push(e2, true), r2.err)) throw r2.msg || i[r2.err];
                return r2.result;
              }
              ((p.prototype.push = function (e2, t2) {
                var r2,
                  n2,
                  i2 = this.strm,
                  s2 = this.options.chunkSize;
                if (this.ended) return false;
                ((n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0),
                  "string" == typeof e2
                    ? (i2.input = h.string2buf(e2))
                    : "[object ArrayBuffer]" === u.call(e2)
                      ? (i2.input = new Uint8Array(e2))
                      : (i2.input = e2),
                  (i2.next_in = 0),
                  (i2.avail_in = i2.input.length));
                do {
                  if (
                    (0 === i2.avail_out &&
                      ((i2.output = new o.Buf8(s2)),
                      (i2.next_out = 0),
                      (i2.avail_out = s2)),
                    1 !== (r2 = a.deflate(i2, n2)) && r2 !== l)
                  )
                    return (this.onEnd(r2), !(this.ended = true));
                  (0 !== i2.avail_out &&
                    (0 !== i2.avail_in || (4 !== n2 && 2 !== n2))) ||
                    ("string" === this.options.to
                      ? this.onData(
                          h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out)),
                        )
                      : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
                } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
                return 4 === n2
                  ? ((r2 = a.deflateEnd(this.strm)),
                    this.onEnd(r2),
                    (this.ended = true),
                    r2 === l)
                  : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
              }),
                (p.prototype.onData = function (e2) {
                  this.chunks.push(e2);
                }),
                (p.prototype.onEnd = function (e2) {
                  (e2 === l &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = o.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = e2),
                    (this.msg = this.strm.msg));
                }),
                (r.Deflate = p),
                (r.deflate = n),
                (r.deflateRaw = function (e2, t2) {
                  return (((t2 = t2 || {}).raw = true), n(e2, t2));
                }),
                (r.gzip = function (e2, t2) {
                  return (((t2 = t2 || {}).gzip = true), n(e2, t2));
                }));
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          40: [
            function (e, t, r) {
              "use strict";
              var c = e("./zlib/inflate"),
                d = e("./utils/common"),
                p = e("./utils/strings"),
                m = e("./zlib/constants"),
                n = e("./zlib/messages"),
                i = e("./zlib/zstream"),
                s = e("./zlib/gzheader"),
                _ = Object.prototype.toString;
              function a(e2) {
                if (!(this instanceof a)) return new a(e2);
                this.options = d.assign(
                  { chunkSize: 16384, windowBits: 0, to: "" },
                  e2 || {},
                );
                var t2 = this.options;
                (t2.raw &&
                  0 <= t2.windowBits &&
                  t2.windowBits < 16 &&
                  ((t2.windowBits = -t2.windowBits),
                  0 === t2.windowBits && (t2.windowBits = -15)),
                  !(0 <= t2.windowBits && t2.windowBits < 16) ||
                    (e2 && e2.windowBits) ||
                    (t2.windowBits += 32),
                  15 < t2.windowBits &&
                    t2.windowBits < 48 &&
                    0 == (15 & t2.windowBits) &&
                    (t2.windowBits |= 15),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = false),
                  (this.chunks = []),
                  (this.strm = new i()),
                  (this.strm.avail_out = 0));
                var r2 = c.inflateInit2(this.strm, t2.windowBits);
                if (r2 !== m.Z_OK) throw new Error(n[r2]);
                ((this.header = new s()),
                  c.inflateGetHeader(this.strm, this.header));
              }
              function o(e2, t2) {
                var r2 = new a(t2);
                if ((r2.push(e2, true), r2.err)) throw r2.msg || n[r2.err];
                return r2.result;
              }
              ((a.prototype.push = function (e2, t2) {
                var r2,
                  n2,
                  i2,
                  s2,
                  a2,
                  o2,
                  h = this.strm,
                  u = this.options.chunkSize,
                  l = this.options.dictionary,
                  f = false;
                if (this.ended) return false;
                ((n2 =
                  t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH),
                  "string" == typeof e2
                    ? (h.input = p.binstring2buf(e2))
                    : "[object ArrayBuffer]" === _.call(e2)
                      ? (h.input = new Uint8Array(e2))
                      : (h.input = e2),
                  (h.next_in = 0),
                  (h.avail_in = h.input.length));
                do {
                  if (
                    (0 === h.avail_out &&
                      ((h.output = new d.Buf8(u)),
                      (h.next_out = 0),
                      (h.avail_out = u)),
                    (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT &&
                      l &&
                      ((o2 =
                        "string" == typeof l
                          ? p.string2buf(l)
                          : "[object ArrayBuffer]" === _.call(l)
                            ? new Uint8Array(l)
                            : l),
                      (r2 = c.inflateSetDictionary(this.strm, o2))),
                    r2 === m.Z_BUF_ERROR &&
                      true === f &&
                      ((r2 = m.Z_OK), (f = false)),
                    r2 !== m.Z_STREAM_END && r2 !== m.Z_OK)
                  )
                    return (this.onEnd(r2), !(this.ended = true));
                  (h.next_out &&
                    ((0 !== h.avail_out &&
                      r2 !== m.Z_STREAM_END &&
                      (0 !== h.avail_in ||
                        (n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH))) ||
                      ("string" === this.options.to
                        ? ((i2 = p.utf8border(h.output, h.next_out)),
                          (s2 = h.next_out - i2),
                          (a2 = p.buf2string(h.output, i2)),
                          (h.next_out = s2),
                          (h.avail_out = u - s2),
                          s2 && d.arraySet(h.output, h.output, i2, s2, 0),
                          this.onData(a2))
                        : this.onData(d.shrinkBuf(h.output, h.next_out)))),
                    0 === h.avail_in && 0 === h.avail_out && (f = true));
                } while (
                  (0 < h.avail_in || 0 === h.avail_out) &&
                  r2 !== m.Z_STREAM_END
                );
                return (
                  r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH),
                  n2 === m.Z_FINISH
                    ? ((r2 = c.inflateEnd(this.strm)),
                      this.onEnd(r2),
                      (this.ended = true),
                      r2 === m.Z_OK)
                    : n2 !== m.Z_SYNC_FLUSH ||
                      (this.onEnd(m.Z_OK), !(h.avail_out = 0))
                );
              }),
                (a.prototype.onData = function (e2) {
                  this.chunks.push(e2);
                }),
                (a.prototype.onEnd = function (e2) {
                  (e2 === m.Z_OK &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = d.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = e2),
                    (this.msg = this.strm.msg));
                }),
                (r.Inflate = a),
                (r.inflate = o),
                (r.inflateRaw = function (e2, t2) {
                  return (((t2 = t2 || {}).raw = true), o(e2, t2));
                }),
                (r.ungzip = o));
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          41: [
            function (e, t, r) {
              "use strict";
              var n =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Int32Array;
              ((r.assign = function (e2) {
                for (
                  var t2 = Array.prototype.slice.call(arguments, 1);
                  t2.length;
                ) {
                  var r2 = t2.shift();
                  if (r2) {
                    if ("object" != typeof r2)
                      throw new TypeError(r2 + "must be non-object");
                    for (var n2 in r2)
                      r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
                  }
                }
                return e2;
              }),
                (r.shrinkBuf = function (e2, t2) {
                  return e2.length === t2
                    ? e2
                    : e2.subarray
                      ? e2.subarray(0, t2)
                      : ((e2.length = t2), e2);
                }));
              var i = {
                  arraySet: function (e2, t2, r2, n2, i2) {
                    if (t2.subarray && e2.subarray)
                      e2.set(t2.subarray(r2, r2 + n2), i2);
                    else
                      for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
                  },
                  flattenChunks: function (e2) {
                    var t2, r2, n2, i2, s2, a;
                    for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++)
                      n2 += e2[t2].length;
                    for (
                      a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length;
                      t2 < r2;
                      t2++
                    )
                      ((s2 = e2[t2]), a.set(s2, i2), (i2 += s2.length));
                    return a;
                  },
                },
                s = {
                  arraySet: function (e2, t2, r2, n2, i2) {
                    for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
                  },
                  flattenChunks: function (e2) {
                    return [].concat.apply([], e2);
                  },
                };
              ((r.setTyped = function (e2) {
                e2
                  ? ((r.Buf8 = Uint8Array),
                    (r.Buf16 = Uint16Array),
                    (r.Buf32 = Int32Array),
                    r.assign(r, i))
                  : ((r.Buf8 = Array),
                    (r.Buf16 = Array),
                    (r.Buf32 = Array),
                    r.assign(r, s));
              }),
                r.setTyped(n));
            },
            {},
          ],
          42: [
            function (e, t, r) {
              "use strict";
              var h = e("./common"),
                i = true,
                s = true;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (e2) {
                i = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (e2) {
                s = false;
              }
              for (var u = new h.Buf8(256), n = 0; n < 256; n++)
                u[n] =
                  252 <= n
                    ? 6
                    : 248 <= n
                      ? 5
                      : 240 <= n
                        ? 4
                        : 224 <= n
                          ? 3
                          : 192 <= n
                            ? 2
                            : 1;
              function l(e2, t2) {
                if (t2 < 65537 && ((e2.subarray && s) || (!e2.subarray && i)))
                  return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
                for (var r2 = "", n2 = 0; n2 < t2; n2++)
                  r2 += String.fromCharCode(e2[n2]);
                return r2;
              }
              ((u[254] = u[254] = 1),
                (r.string2buf = function (e2) {
                  var t2,
                    r2,
                    n2,
                    i2,
                    s2,
                    a = e2.length,
                    o = 0;
                  for (i2 = 0; i2 < a; i2++)
                    (55296 == (64512 & (r2 = e2.charCodeAt(i2))) &&
                      i2 + 1 < a &&
                      56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) &&
                      ((r2 = 65536 + ((r2 - 55296) << 10) + (n2 - 56320)),
                      i2++),
                      (o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4));
                  for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++)
                    (55296 == (64512 & (r2 = e2.charCodeAt(i2))) &&
                      i2 + 1 < a &&
                      56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) &&
                      ((r2 = 65536 + ((r2 - 55296) << 10) + (n2 - 56320)),
                      i2++),
                      r2 < 128
                        ? (t2[s2++] = r2)
                        : (r2 < 2048
                            ? (t2[s2++] = 192 | (r2 >>> 6))
                            : (r2 < 65536
                                ? (t2[s2++] = 224 | (r2 >>> 12))
                                : ((t2[s2++] = 240 | (r2 >>> 18)),
                                  (t2[s2++] = 128 | ((r2 >>> 12) & 63))),
                              (t2[s2++] = 128 | ((r2 >>> 6) & 63))),
                          (t2[s2++] = 128 | (63 & r2))));
                  return t2;
                }),
                (r.buf2binstring = function (e2) {
                  return l(e2, e2.length);
                }),
                (r.binstring2buf = function (e2) {
                  for (
                    var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length;
                    r2 < n2;
                    r2++
                  )
                    t2[r2] = e2.charCodeAt(r2);
                  return t2;
                }),
                (r.buf2string = function (e2, t2) {
                  var r2,
                    n2,
                    i2,
                    s2,
                    a = t2 || e2.length,
                    o = new Array(2 * a);
                  for (r2 = n2 = 0; r2 < a; )
                    if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
                    else if (4 < (s2 = u[i2]))
                      ((o[n2++] = 65533), (r2 += s2 - 1));
                    else {
                      for (
                        i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7;
                        1 < s2 && r2 < a;
                      )
                        ((i2 = (i2 << 6) | (63 & e2[r2++])), s2--);
                      1 < s2
                        ? (o[n2++] = 65533)
                        : i2 < 65536
                          ? (o[n2++] = i2)
                          : ((i2 -= 65536),
                            (o[n2++] = 55296 | ((i2 >> 10) & 1023)),
                            (o[n2++] = 56320 | (1023 & i2)));
                    }
                  return l(o, n2);
                }),
                (r.utf8border = function (e2, t2) {
                  var r2;
                  for (
                    (t2 = t2 || e2.length) > e2.length && (t2 = e2.length),
                      r2 = t2 - 1;
                    0 <= r2 && 128 == (192 & e2[r2]);
                  )
                    r2--;
                  return r2 < 0
                    ? t2
                    : 0 === r2
                      ? t2
                      : r2 + u[e2[r2]] > t2
                        ? r2
                        : t2;
                }));
            },
            { "./common": 41 },
          ],
          43: [
            function (e, t, r) {
              "use strict";
              t.exports = function (e2, t2, r2, n) {
                for (
                  var i = (65535 & e2) | 0,
                    s = ((e2 >>> 16) & 65535) | 0,
                    a = 0;
                  0 !== r2;
                ) {
                  for (
                    r2 -= a = 2e3 < r2 ? 2e3 : r2;
                    (s = (s + (i = (i + t2[n++]) | 0)) | 0), --a;
                  );
                  ((i %= 65521), (s %= 65521));
                }
                return i | (s << 16) | 0;
              };
            },
            {},
          ],
          44: [
            function (e, t, r) {
              "use strict";
              t.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8,
              };
            },
            {},
          ],
          45: [
            function (e, t, r) {
              "use strict";
              var o = (function () {
                for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
                  e2 = r2;
                  for (var n = 0; n < 8; n++)
                    e2 = 1 & e2 ? 3988292384 ^ (e2 >>> 1) : e2 >>> 1;
                  t2[r2] = e2;
                }
                return t2;
              })();
              t.exports = function (e2, t2, r2, n) {
                var i = o,
                  s = n + r2;
                e2 ^= -1;
                for (var a = n; a < s; a++)
                  e2 = (e2 >>> 8) ^ i[255 & (e2 ^ t2[a])];
                return -1 ^ e2;
              };
            },
            {},
          ],
          46: [
            function (e, t, r) {
              "use strict";
              var h,
                c = e("../utils/common"),
                u = e("./trees"),
                d = e("./adler32"),
                p = e("./crc32"),
                n = e("./messages"),
                l = 0,
                f = 4,
                m = 0,
                _ = -2,
                g = -1,
                b = 4,
                i = 2,
                v = 8,
                y = 9,
                s = 286,
                a = 30,
                o = 19,
                w = 2 * s + 1,
                k = 15,
                x = 3,
                S = 258,
                z = S + x + 1,
                C = 42,
                E = 113,
                A = 1,
                I = 2,
                O = 3,
                B = 4;
              function R(e2, t2) {
                return ((e2.msg = n[t2]), t2);
              }
              function T(e2) {
                return (e2 << 1) - (4 < e2 ? 9 : 0);
              }
              function D(e2) {
                for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
              }
              function F(e2) {
                var t2 = e2.state,
                  r2 = t2.pending;
                (r2 > e2.avail_out && (r2 = e2.avail_out),
                  0 !== r2 &&
                    (c.arraySet(
                      e2.output,
                      t2.pending_buf,
                      t2.pending_out,
                      r2,
                      e2.next_out,
                    ),
                    (e2.next_out += r2),
                    (t2.pending_out += r2),
                    (e2.total_out += r2),
                    (e2.avail_out -= r2),
                    (t2.pending -= r2),
                    0 === t2.pending && (t2.pending_out = 0)));
              }
              function N(e2, t2) {
                (u._tr_flush_block(
                  e2,
                  0 <= e2.block_start ? e2.block_start : -1,
                  e2.strstart - e2.block_start,
                  t2,
                ),
                  (e2.block_start = e2.strstart),
                  F(e2.strm));
              }
              function U(e2, t2) {
                e2.pending_buf[e2.pending++] = t2;
              }
              function P(e2, t2) {
                ((e2.pending_buf[e2.pending++] = (t2 >>> 8) & 255),
                  (e2.pending_buf[e2.pending++] = 255 & t2));
              }
              function L(e2, t2) {
                var r2,
                  n2,
                  i2 = e2.max_chain_length,
                  s2 = e2.strstart,
                  a2 = e2.prev_length,
                  o2 = e2.nice_match,
                  h2 =
                    e2.strstart > e2.w_size - z
                      ? e2.strstart - (e2.w_size - z)
                      : 0,
                  u2 = e2.window,
                  l2 = e2.w_mask,
                  f2 = e2.prev,
                  c2 = e2.strstart + S,
                  d2 = u2[s2 + a2 - 1],
                  p2 = u2[s2 + a2];
                (e2.prev_length >= e2.good_match && (i2 >>= 2),
                  o2 > e2.lookahead && (o2 = e2.lookahead));
                do {
                  if (
                    u2[(r2 = t2) + a2] === p2 &&
                    u2[r2 + a2 - 1] === d2 &&
                    u2[r2] === u2[s2] &&
                    u2[++r2] === u2[s2 + 1]
                  ) {
                    ((s2 += 2), r2++);
                    do {} while (
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      u2[++s2] === u2[++r2] &&
                      s2 < c2
                    );
                    if (((n2 = S - (c2 - s2)), (s2 = c2 - S), a2 < n2)) {
                      if (((e2.match_start = t2), o2 <= (a2 = n2))) break;
                      ((d2 = u2[s2 + a2 - 1]), (p2 = u2[s2 + a2]));
                    }
                  }
                } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
                return a2 <= e2.lookahead ? a2 : e2.lookahead;
              }
              function j(e2) {
                var t2,
                  r2,
                  n2,
                  i2,
                  s2,
                  a2,
                  o2,
                  h2,
                  u2,
                  l2,
                  f2 = e2.w_size;
                do {
                  if (
                    ((i2 = e2.window_size - e2.lookahead - e2.strstart),
                    e2.strstart >= f2 + (f2 - z))
                  ) {
                    for (
                      c.arraySet(e2.window, e2.window, f2, f2, 0),
                        e2.match_start -= f2,
                        e2.strstart -= f2,
                        e2.block_start -= f2,
                        t2 = r2 = e2.hash_size;
                      (n2 = e2.head[--t2]),
                        (e2.head[t2] = f2 <= n2 ? n2 - f2 : 0),
                        --r2;
                    );
                    for (
                      t2 = r2 = f2;
                      (n2 = e2.prev[--t2]),
                        (e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0),
                        --r2;
                    );
                    i2 += f2;
                  }
                  if (0 === e2.strm.avail_in) break;
                  if (
                    ((a2 = e2.strm),
                    (o2 = e2.window),
                    (h2 = e2.strstart + e2.lookahead),
                    (u2 = i2),
                    (l2 = void 0),
                    (l2 = a2.avail_in),
                    u2 < l2 && (l2 = u2),
                    (r2 =
                      0 === l2
                        ? 0
                        : ((a2.avail_in -= l2),
                          c.arraySet(o2, a2.input, a2.next_in, l2, h2),
                          1 === a2.state.wrap
                            ? (a2.adler = d(a2.adler, o2, l2, h2))
                            : 2 === a2.state.wrap &&
                              (a2.adler = p(a2.adler, o2, l2, h2)),
                          (a2.next_in += l2),
                          (a2.total_in += l2),
                          l2)),
                    (e2.lookahead += r2),
                    e2.lookahead + e2.insert >= x)
                  )
                    for (
                      s2 = e2.strstart - e2.insert,
                        e2.ins_h = e2.window[s2],
                        e2.ins_h =
                          ((e2.ins_h << e2.hash_shift) ^ e2.window[s2 + 1]) &
                          e2.hash_mask;
                      e2.insert &&
                      ((e2.ins_h =
                        ((e2.ins_h << e2.hash_shift) ^ e2.window[s2 + x - 1]) &
                        e2.hash_mask),
                      (e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h]),
                      (e2.head[e2.ins_h] = s2),
                      s2++,
                      e2.insert--,
                      !(e2.lookahead + e2.insert < x));
                    );
                } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
              }
              function Z(e2, t2) {
                for (var r2, n2; ; ) {
                  if (e2.lookahead < z) {
                    if ((j(e2), e2.lookahead < z && t2 === l)) return A;
                    if (0 === e2.lookahead) break;
                  }
                  if (
                    ((r2 = 0),
                    e2.lookahead >= x &&
                      ((e2.ins_h =
                        ((e2.ins_h << e2.hash_shift) ^
                          e2.window[e2.strstart + x - 1]) &
                        e2.hash_mask),
                      (r2 = e2.prev[e2.strstart & e2.w_mask] =
                        e2.head[e2.ins_h]),
                      (e2.head[e2.ins_h] = e2.strstart)),
                    0 !== r2 &&
                      e2.strstart - r2 <= e2.w_size - z &&
                      (e2.match_length = L(e2, r2)),
                    e2.match_length >= x)
                  )
                    if (
                      ((n2 = u._tr_tally(
                        e2,
                        e2.strstart - e2.match_start,
                        e2.match_length - x,
                      )),
                      (e2.lookahead -= e2.match_length),
                      e2.match_length <= e2.max_lazy_match && e2.lookahead >= x)
                    ) {
                      for (
                        e2.match_length--;
                        e2.strstart++,
                          (e2.ins_h =
                            ((e2.ins_h << e2.hash_shift) ^
                              e2.window[e2.strstart + x - 1]) &
                            e2.hash_mask),
                          (r2 = e2.prev[e2.strstart & e2.w_mask] =
                            e2.head[e2.ins_h]),
                          (e2.head[e2.ins_h] = e2.strstart),
                          0 != --e2.match_length;
                      );
                      e2.strstart++;
                    } else
                      ((e2.strstart += e2.match_length),
                        (e2.match_length = 0),
                        (e2.ins_h = e2.window[e2.strstart]),
                        (e2.ins_h =
                          ((e2.ins_h << e2.hash_shift) ^
                            e2.window[e2.strstart + 1]) &
                          e2.hash_mask));
                  else
                    ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart])),
                      e2.lookahead--,
                      e2.strstart++);
                  if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
                }
                return (
                  (e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1),
                  t2 === f
                    ? (N(e2, true), 0 === e2.strm.avail_out ? O : B)
                    : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out)
                      ? A
                      : I
                );
              }
              function W(e2, t2) {
                for (var r2, n2, i2; ; ) {
                  if (e2.lookahead < z) {
                    if ((j(e2), e2.lookahead < z && t2 === l)) return A;
                    if (0 === e2.lookahead) break;
                  }
                  if (
                    ((r2 = 0),
                    e2.lookahead >= x &&
                      ((e2.ins_h =
                        ((e2.ins_h << e2.hash_shift) ^
                          e2.window[e2.strstart + x - 1]) &
                        e2.hash_mask),
                      (r2 = e2.prev[e2.strstart & e2.w_mask] =
                        e2.head[e2.ins_h]),
                      (e2.head[e2.ins_h] = e2.strstart)),
                    (e2.prev_length = e2.match_length),
                    (e2.prev_match = e2.match_start),
                    (e2.match_length = x - 1),
                    0 !== r2 &&
                      e2.prev_length < e2.max_lazy_match &&
                      e2.strstart - r2 <= e2.w_size - z &&
                      ((e2.match_length = L(e2, r2)),
                      e2.match_length <= 5 &&
                        (1 === e2.strategy ||
                          (e2.match_length === x &&
                            4096 < e2.strstart - e2.match_start)) &&
                        (e2.match_length = x - 1)),
                    e2.prev_length >= x && e2.match_length <= e2.prev_length)
                  ) {
                    for (
                      i2 = e2.strstart + e2.lookahead - x,
                        n2 = u._tr_tally(
                          e2,
                          e2.strstart - 1 - e2.prev_match,
                          e2.prev_length - x,
                        ),
                        e2.lookahead -= e2.prev_length - 1,
                        e2.prev_length -= 2;
                      ++e2.strstart <= i2 &&
                        ((e2.ins_h =
                          ((e2.ins_h << e2.hash_shift) ^
                            e2.window[e2.strstart + x - 1]) &
                          e2.hash_mask),
                        (r2 = e2.prev[e2.strstart & e2.w_mask] =
                          e2.head[e2.ins_h]),
                        (e2.head[e2.ins_h] = e2.strstart)),
                        0 != --e2.prev_length;
                    );
                    if (
                      ((e2.match_available = 0),
                      (e2.match_length = x - 1),
                      e2.strstart++,
                      n2 && (N(e2, false), 0 === e2.strm.avail_out))
                    )
                      return A;
                  } else if (e2.match_available) {
                    if (
                      ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) &&
                        N(e2, false),
                      e2.strstart++,
                      e2.lookahead--,
                      0 === e2.strm.avail_out)
                    )
                      return A;
                  } else
                    ((e2.match_available = 1), e2.strstart++, e2.lookahead--);
                }
                return (
                  e2.match_available &&
                    ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])),
                    (e2.match_available = 0)),
                  (e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1),
                  t2 === f
                    ? (N(e2, true), 0 === e2.strm.avail_out ? O : B)
                    : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out)
                      ? A
                      : I
                );
              }
              function M(e2, t2, r2, n2, i2) {
                ((this.good_length = e2),
                  (this.max_lazy = t2),
                  (this.nice_length = r2),
                  (this.max_chain = n2),
                  (this.func = i2));
              }
              function H() {
                ((this.strm = null),
                  (this.status = 0),
                  (this.pending_buf = null),
                  (this.pending_buf_size = 0),
                  (this.pending_out = 0),
                  (this.pending = 0),
                  (this.wrap = 0),
                  (this.gzhead = null),
                  (this.gzindex = 0),
                  (this.method = v),
                  (this.last_flush = -1),
                  (this.w_size = 0),
                  (this.w_bits = 0),
                  (this.w_mask = 0),
                  (this.window = null),
                  (this.window_size = 0),
                  (this.prev = null),
                  (this.head = null),
                  (this.ins_h = 0),
                  (this.hash_size = 0),
                  (this.hash_bits = 0),
                  (this.hash_mask = 0),
                  (this.hash_shift = 0),
                  (this.block_start = 0),
                  (this.match_length = 0),
                  (this.prev_match = 0),
                  (this.match_available = 0),
                  (this.strstart = 0),
                  (this.match_start = 0),
                  (this.lookahead = 0),
                  (this.prev_length = 0),
                  (this.max_chain_length = 0),
                  (this.max_lazy_match = 0),
                  (this.level = 0),
                  (this.strategy = 0),
                  (this.good_match = 0),
                  (this.nice_match = 0),
                  (this.dyn_ltree = new c.Buf16(2 * w)),
                  (this.dyn_dtree = new c.Buf16(2 * (2 * a + 1))),
                  (this.bl_tree = new c.Buf16(2 * (2 * o + 1))),
                  D(this.dyn_ltree),
                  D(this.dyn_dtree),
                  D(this.bl_tree),
                  (this.l_desc = null),
                  (this.d_desc = null),
                  (this.bl_desc = null),
                  (this.bl_count = new c.Buf16(k + 1)),
                  (this.heap = new c.Buf16(2 * s + 1)),
                  D(this.heap),
                  (this.heap_len = 0),
                  (this.heap_max = 0),
                  (this.depth = new c.Buf16(2 * s + 1)),
                  D(this.depth),
                  (this.l_buf = 0),
                  (this.lit_bufsize = 0),
                  (this.last_lit = 0),
                  (this.d_buf = 0),
                  (this.opt_len = 0),
                  (this.static_len = 0),
                  (this.matches = 0),
                  (this.insert = 0),
                  (this.bi_buf = 0),
                  (this.bi_valid = 0));
              }
              function G(e2) {
                var t2;
                return e2 && e2.state
                  ? ((e2.total_in = e2.total_out = 0),
                    (e2.data_type = i),
                    ((t2 = e2.state).pending = 0),
                    (t2.pending_out = 0),
                    t2.wrap < 0 && (t2.wrap = -t2.wrap),
                    (t2.status = t2.wrap ? C : E),
                    (e2.adler = 2 === t2.wrap ? 0 : 1),
                    (t2.last_flush = l),
                    u._tr_init(t2),
                    m)
                  : R(e2, _);
              }
              function K(e2) {
                var t2 = G(e2);
                return (
                  t2 === m &&
                    (function (e3) {
                      ((e3.window_size = 2 * e3.w_size),
                        D(e3.head),
                        (e3.max_lazy_match = h[e3.level].max_lazy),
                        (e3.good_match = h[e3.level].good_length),
                        (e3.nice_match = h[e3.level].nice_length),
                        (e3.max_chain_length = h[e3.level].max_chain),
                        (e3.strstart = 0),
                        (e3.block_start = 0),
                        (e3.lookahead = 0),
                        (e3.insert = 0),
                        (e3.match_length = e3.prev_length = x - 1),
                        (e3.match_available = 0),
                        (e3.ins_h = 0));
                    })(e2.state),
                  t2
                );
              }
              function Y(e2, t2, r2, n2, i2, s2) {
                if (!e2) return _;
                var a2 = 1;
                if (
                  (t2 === g && (t2 = 6),
                  n2 < 0
                    ? ((a2 = 0), (n2 = -n2))
                    : 15 < n2 && ((a2 = 2), (n2 -= 16)),
                  i2 < 1 ||
                    y < i2 ||
                    r2 !== v ||
                    n2 < 8 ||
                    15 < n2 ||
                    t2 < 0 ||
                    9 < t2 ||
                    s2 < 0 ||
                    b < s2)
                )
                  return R(e2, _);
                8 === n2 && (n2 = 9);
                var o2 = new H();
                return (
                  ((e2.state = o2).strm = e2),
                  (o2.wrap = a2),
                  (o2.gzhead = null),
                  (o2.w_bits = n2),
                  (o2.w_size = 1 << o2.w_bits),
                  (o2.w_mask = o2.w_size - 1),
                  (o2.hash_bits = i2 + 7),
                  (o2.hash_size = 1 << o2.hash_bits),
                  (o2.hash_mask = o2.hash_size - 1),
                  (o2.hash_shift = ~~((o2.hash_bits + x - 1) / x)),
                  (o2.window = new c.Buf8(2 * o2.w_size)),
                  (o2.head = new c.Buf16(o2.hash_size)),
                  (o2.prev = new c.Buf16(o2.w_size)),
                  (o2.lit_bufsize = 1 << (i2 + 6)),
                  (o2.pending_buf_size = 4 * o2.lit_bufsize),
                  (o2.pending_buf = new c.Buf8(o2.pending_buf_size)),
                  (o2.d_buf = 1 * o2.lit_bufsize),
                  (o2.l_buf = 3 * o2.lit_bufsize),
                  (o2.level = t2),
                  (o2.strategy = s2),
                  (o2.method = r2),
                  K(e2)
                );
              }
              ((h = [
                new M(0, 0, 0, 0, function (e2, t2) {
                  var r2 = 65535;
                  for (
                    r2 > e2.pending_buf_size - 5 &&
                    (r2 = e2.pending_buf_size - 5);
                    ;
                  ) {
                    if (e2.lookahead <= 1) {
                      if ((j(e2), 0 === e2.lookahead && t2 === l)) return A;
                      if (0 === e2.lookahead) break;
                    }
                    ((e2.strstart += e2.lookahead), (e2.lookahead = 0));
                    var n2 = e2.block_start + r2;
                    if (
                      (0 === e2.strstart || e2.strstart >= n2) &&
                      ((e2.lookahead = e2.strstart - n2),
                      (e2.strstart = n2),
                      N(e2, false),
                      0 === e2.strm.avail_out)
                    )
                      return A;
                    if (
                      e2.strstart - e2.block_start >= e2.w_size - z &&
                      (N(e2, false), 0 === e2.strm.avail_out)
                    )
                      return A;
                  }
                  return (
                    (e2.insert = 0),
                    t2 === f
                      ? (N(e2, true), 0 === e2.strm.avail_out ? O : B)
                      : (e2.strstart > e2.block_start &&
                          (N(e2, false), e2.strm.avail_out),
                        A)
                  );
                }),
                new M(4, 4, 8, 4, Z),
                new M(4, 5, 16, 8, Z),
                new M(4, 6, 32, 32, Z),
                new M(4, 4, 16, 16, W),
                new M(8, 16, 32, 32, W),
                new M(8, 16, 128, 128, W),
                new M(8, 32, 128, 256, W),
                new M(32, 128, 258, 1024, W),
                new M(32, 258, 258, 4096, W),
              ]),
                (r.deflateInit = function (e2, t2) {
                  return Y(e2, t2, v, 15, 8, 0);
                }),
                (r.deflateInit2 = Y),
                (r.deflateReset = K),
                (r.deflateResetKeep = G),
                (r.deflateSetHeader = function (e2, t2) {
                  return e2 && e2.state
                    ? 2 !== e2.state.wrap
                      ? _
                      : ((e2.state.gzhead = t2), m)
                    : _;
                }),
                (r.deflate = function (e2, t2) {
                  var r2, n2, i2, s2;
                  if (!e2 || !e2.state || 5 < t2 || t2 < 0)
                    return e2 ? R(e2, _) : _;
                  if (
                    ((n2 = e2.state),
                    !e2.output ||
                      (!e2.input && 0 !== e2.avail_in) ||
                      (666 === n2.status && t2 !== f))
                  )
                    return R(e2, 0 === e2.avail_out ? -5 : _);
                  if (
                    ((n2.strm = e2),
                    (r2 = n2.last_flush),
                    (n2.last_flush = t2),
                    n2.status === C)
                  )
                    if (2 === n2.wrap)
                      ((e2.adler = 0),
                        U(n2, 31),
                        U(n2, 139),
                        U(n2, 8),
                        n2.gzhead
                          ? (U(
                              n2,
                              (n2.gzhead.text ? 1 : 0) +
                                (n2.gzhead.hcrc ? 2 : 0) +
                                (n2.gzhead.extra ? 4 : 0) +
                                (n2.gzhead.name ? 8 : 0) +
                                (n2.gzhead.comment ? 16 : 0),
                            ),
                            U(n2, 255 & n2.gzhead.time),
                            U(n2, (n2.gzhead.time >> 8) & 255),
                            U(n2, (n2.gzhead.time >> 16) & 255),
                            U(n2, (n2.gzhead.time >> 24) & 255),
                            U(
                              n2,
                              9 === n2.level
                                ? 2
                                : 2 <= n2.strategy || n2.level < 2
                                  ? 4
                                  : 0,
                            ),
                            U(n2, 255 & n2.gzhead.os),
                            n2.gzhead.extra &&
                              n2.gzhead.extra.length &&
                              (U(n2, 255 & n2.gzhead.extra.length),
                              U(n2, (n2.gzhead.extra.length >> 8) & 255)),
                            n2.gzhead.hcrc &&
                              (e2.adler = p(
                                e2.adler,
                                n2.pending_buf,
                                n2.pending,
                                0,
                              )),
                            (n2.gzindex = 0),
                            (n2.status = 69))
                          : (U(n2, 0),
                            U(n2, 0),
                            U(n2, 0),
                            U(n2, 0),
                            U(n2, 0),
                            U(
                              n2,
                              9 === n2.level
                                ? 2
                                : 2 <= n2.strategy || n2.level < 2
                                  ? 4
                                  : 0,
                            ),
                            U(n2, 3),
                            (n2.status = E)));
                    else {
                      var a2 = (v + ((n2.w_bits - 8) << 4)) << 8;
                      ((a2 |=
                        (2 <= n2.strategy || n2.level < 2
                          ? 0
                          : n2.level < 6
                            ? 1
                            : 6 === n2.level
                              ? 2
                              : 3) << 6),
                        0 !== n2.strstart && (a2 |= 32),
                        (a2 += 31 - (a2 % 31)),
                        (n2.status = E),
                        P(n2, a2),
                        0 !== n2.strstart &&
                          (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)),
                        (e2.adler = 1));
                    }
                  if (69 === n2.status)
                    if (n2.gzhead.extra) {
                      for (
                        i2 = n2.pending;
                        n2.gzindex < (65535 & n2.gzhead.extra.length) &&
                        (n2.pending !== n2.pending_buf_size ||
                          (n2.gzhead.hcrc &&
                            n2.pending > i2 &&
                            (e2.adler = p(
                              e2.adler,
                              n2.pending_buf,
                              n2.pending - i2,
                              i2,
                            )),
                          F(e2),
                          (i2 = n2.pending),
                          n2.pending !== n2.pending_buf_size));
                      )
                        (U(n2, 255 & n2.gzhead.extra[n2.gzindex]),
                          n2.gzindex++);
                      (n2.gzhead.hcrc &&
                        n2.pending > i2 &&
                        (e2.adler = p(
                          e2.adler,
                          n2.pending_buf,
                          n2.pending - i2,
                          i2,
                        )),
                        n2.gzindex === n2.gzhead.extra.length &&
                          ((n2.gzindex = 0), (n2.status = 73)));
                    } else n2.status = 73;
                  if (73 === n2.status)
                    if (n2.gzhead.name) {
                      i2 = n2.pending;
                      do {
                        if (
                          n2.pending === n2.pending_buf_size &&
                          (n2.gzhead.hcrc &&
                            n2.pending > i2 &&
                            (e2.adler = p(
                              e2.adler,
                              n2.pending_buf,
                              n2.pending - i2,
                              i2,
                            )),
                          F(e2),
                          (i2 = n2.pending),
                          n2.pending === n2.pending_buf_size)
                        ) {
                          s2 = 1;
                          break;
                        }
                        ((s2 =
                          n2.gzindex < n2.gzhead.name.length
                            ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++)
                            : 0),
                          U(n2, s2));
                      } while (0 !== s2);
                      (n2.gzhead.hcrc &&
                        n2.pending > i2 &&
                        (e2.adler = p(
                          e2.adler,
                          n2.pending_buf,
                          n2.pending - i2,
                          i2,
                        )),
                        0 === s2 && ((n2.gzindex = 0), (n2.status = 91)));
                    } else n2.status = 91;
                  if (91 === n2.status)
                    if (n2.gzhead.comment) {
                      i2 = n2.pending;
                      do {
                        if (
                          n2.pending === n2.pending_buf_size &&
                          (n2.gzhead.hcrc &&
                            n2.pending > i2 &&
                            (e2.adler = p(
                              e2.adler,
                              n2.pending_buf,
                              n2.pending - i2,
                              i2,
                            )),
                          F(e2),
                          (i2 = n2.pending),
                          n2.pending === n2.pending_buf_size)
                        ) {
                          s2 = 1;
                          break;
                        }
                        ((s2 =
                          n2.gzindex < n2.gzhead.comment.length
                            ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++)
                            : 0),
                          U(n2, s2));
                      } while (0 !== s2);
                      (n2.gzhead.hcrc &&
                        n2.pending > i2 &&
                        (e2.adler = p(
                          e2.adler,
                          n2.pending_buf,
                          n2.pending - i2,
                          i2,
                        )),
                        0 === s2 && (n2.status = 103));
                    } else n2.status = 103;
                  if (
                    (103 === n2.status &&
                      (n2.gzhead.hcrc
                        ? (n2.pending + 2 > n2.pending_buf_size && F(e2),
                          n2.pending + 2 <= n2.pending_buf_size &&
                            (U(n2, 255 & e2.adler),
                            U(n2, (e2.adler >> 8) & 255),
                            (e2.adler = 0),
                            (n2.status = E)))
                        : (n2.status = E)),
                    0 !== n2.pending)
                  ) {
                    if ((F(e2), 0 === e2.avail_out))
                      return ((n2.last_flush = -1), m);
                  } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f)
                    return R(e2, -5);
                  if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
                  if (
                    0 !== e2.avail_in ||
                    0 !== n2.lookahead ||
                    (t2 !== l && 666 !== n2.status)
                  ) {
                    var o2 =
                      2 === n2.strategy
                        ? (function (e3, t3) {
                            for (var r3; ; ) {
                              if (
                                0 === e3.lookahead &&
                                (j(e3), 0 === e3.lookahead)
                              ) {
                                if (t3 === l) return A;
                                break;
                              }
                              if (
                                ((e3.match_length = 0),
                                (r3 = u._tr_tally(
                                  e3,
                                  0,
                                  e3.window[e3.strstart],
                                )),
                                e3.lookahead--,
                                e3.strstart++,
                                r3 && (N(e3, false), 0 === e3.strm.avail_out))
                              )
                                return A;
                            }
                            return (
                              (e3.insert = 0),
                              t3 === f
                                ? (N(e3, true), 0 === e3.strm.avail_out ? O : B)
                                : e3.last_lit &&
                                    (N(e3, false), 0 === e3.strm.avail_out)
                                  ? A
                                  : I
                            );
                          })(n2, t2)
                        : 3 === n2.strategy
                          ? (function (e3, t3) {
                              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                                if (e3.lookahead <= S) {
                                  if ((j(e3), e3.lookahead <= S && t3 === l))
                                    return A;
                                  if (0 === e3.lookahead) break;
                                }
                                if (
                                  ((e3.match_length = 0),
                                  e3.lookahead >= x &&
                                    0 < e3.strstart &&
                                    (n3 = a3[(i3 = e3.strstart - 1)]) ===
                                      a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3])
                                ) {
                                  s3 = e3.strstart + S;
                                  do {} while (
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    n3 === a3[++i3] &&
                                    i3 < s3
                                  );
                                  ((e3.match_length = S - (s3 - i3)),
                                    e3.match_length > e3.lookahead &&
                                      (e3.match_length = e3.lookahead));
                                }
                                if (
                                  (e3.match_length >= x
                                    ? ((r3 = u._tr_tally(
                                        e3,
                                        1,
                                        e3.match_length - x,
                                      )),
                                      (e3.lookahead -= e3.match_length),
                                      (e3.strstart += e3.match_length),
                                      (e3.match_length = 0))
                                    : ((r3 = u._tr_tally(
                                        e3,
                                        0,
                                        e3.window[e3.strstart],
                                      )),
                                      e3.lookahead--,
                                      e3.strstart++),
                                  r3 && (N(e3, false), 0 === e3.strm.avail_out))
                                )
                                  return A;
                              }
                              return (
                                (e3.insert = 0),
                                t3 === f
                                  ? (N(e3, true),
                                    0 === e3.strm.avail_out ? O : B)
                                  : e3.last_lit &&
                                      (N(e3, false), 0 === e3.strm.avail_out)
                                    ? A
                                    : I
                              );
                            })(n2, t2)
                          : h[n2.level].func(n2, t2);
                    if (
                      ((o2 !== O && o2 !== B) || (n2.status = 666),
                      o2 === A || o2 === O)
                    )
                      return (0 === e2.avail_out && (n2.last_flush = -1), m);
                    if (
                      o2 === I &&
                      (1 === t2
                        ? u._tr_align(n2)
                        : 5 !== t2 &&
                          (u._tr_stored_block(n2, 0, 0, false),
                          3 === t2 &&
                            (D(n2.head),
                            0 === n2.lookahead &&
                              ((n2.strstart = 0),
                              (n2.block_start = 0),
                              (n2.insert = 0)))),
                      F(e2),
                      0 === e2.avail_out)
                    )
                      return ((n2.last_flush = -1), m);
                  }
                  return t2 !== f
                    ? m
                    : n2.wrap <= 0
                      ? 1
                      : (2 === n2.wrap
                          ? (U(n2, 255 & e2.adler),
                            U(n2, (e2.adler >> 8) & 255),
                            U(n2, (e2.adler >> 16) & 255),
                            U(n2, (e2.adler >> 24) & 255),
                            U(n2, 255 & e2.total_in),
                            U(n2, (e2.total_in >> 8) & 255),
                            U(n2, (e2.total_in >> 16) & 255),
                            U(n2, (e2.total_in >> 24) & 255))
                          : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)),
                        F(e2),
                        0 < n2.wrap && (n2.wrap = -n2.wrap),
                        0 !== n2.pending ? m : 1);
                }),
                (r.deflateEnd = function (e2) {
                  var t2;
                  return e2 && e2.state
                    ? (t2 = e2.state.status) !== C &&
                      69 !== t2 &&
                      73 !== t2 &&
                      91 !== t2 &&
                      103 !== t2 &&
                      t2 !== E &&
                      666 !== t2
                      ? R(e2, _)
                      : ((e2.state = null), t2 === E ? R(e2, -3) : m)
                    : _;
                }),
                (r.deflateSetDictionary = function (e2, t2) {
                  var r2,
                    n2,
                    i2,
                    s2,
                    a2,
                    o2,
                    h2,
                    u2,
                    l2 = t2.length;
                  if (!e2 || !e2.state) return _;
                  if (
                    2 === (s2 = (r2 = e2.state).wrap) ||
                    (1 === s2 && r2.status !== C) ||
                    r2.lookahead
                  )
                    return _;
                  for (
                    1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)),
                      r2.wrap = 0,
                      l2 >= r2.w_size &&
                        (0 === s2 &&
                          (D(r2.head),
                          (r2.strstart = 0),
                          (r2.block_start = 0),
                          (r2.insert = 0)),
                        (u2 = new c.Buf8(r2.w_size)),
                        c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0),
                        (t2 = u2),
                        (l2 = r2.w_size)),
                      a2 = e2.avail_in,
                      o2 = e2.next_in,
                      h2 = e2.input,
                      e2.avail_in = l2,
                      e2.next_in = 0,
                      e2.input = t2,
                      j(r2);
                    r2.lookahead >= x;
                  ) {
                    for (
                      n2 = r2.strstart, i2 = r2.lookahead - (x - 1);
                      (r2.ins_h =
                        ((r2.ins_h << r2.hash_shift) ^ r2.window[n2 + x - 1]) &
                        r2.hash_mask),
                        (r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h]),
                        (r2.head[r2.ins_h] = n2),
                        n2++,
                        --i2;
                    );
                    ((r2.strstart = n2), (r2.lookahead = x - 1), j(r2));
                  }
                  return (
                    (r2.strstart += r2.lookahead),
                    (r2.block_start = r2.strstart),
                    (r2.insert = r2.lookahead),
                    (r2.lookahead = 0),
                    (r2.match_length = r2.prev_length = x - 1),
                    (r2.match_available = 0),
                    (e2.next_in = o2),
                    (e2.input = h2),
                    (e2.avail_in = a2),
                    (r2.wrap = s2),
                    m
                  );
                }),
                (r.deflateInfo = "pako deflate (from Nodeca project)"));
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52,
            },
          ],
          47: [
            function (e, t, r) {
              "use strict";
              t.exports = function () {
                ((this.text = 0),
                  (this.time = 0),
                  (this.xflags = 0),
                  (this.os = 0),
                  (this.extra = null),
                  (this.extra_len = 0),
                  (this.name = ""),
                  (this.comment = ""),
                  (this.hcrc = 0),
                  (this.done = false));
              };
            },
            {},
          ],
          48: [
            function (e, t, r) {
              "use strict";
              t.exports = function (e2, t2) {
                var r2,
                  n,
                  i,
                  s,
                  a,
                  o,
                  h,
                  u,
                  l,
                  f,
                  c,
                  d,
                  p,
                  m,
                  _,
                  g,
                  b,
                  v,
                  y,
                  w,
                  k,
                  x,
                  S,
                  z,
                  C;
                ((r2 = e2.state),
                  (n = e2.next_in),
                  (z = e2.input),
                  (i = n + (e2.avail_in - 5)),
                  (s = e2.next_out),
                  (C = e2.output),
                  (a = s - (t2 - e2.avail_out)),
                  (o = s + (e2.avail_out - 257)),
                  (h = r2.dmax),
                  (u = r2.wsize),
                  (l = r2.whave),
                  (f = r2.wnext),
                  (c = r2.window),
                  (d = r2.hold),
                  (p = r2.bits),
                  (m = r2.lencode),
                  (_ = r2.distcode),
                  (g = (1 << r2.lenbits) - 1),
                  (b = (1 << r2.distbits) - 1));
                e: do {
                  (p < 15 &&
                    ((d += z[n++] << p),
                    (p += 8),
                    (d += z[n++] << p),
                    (p += 8)),
                    (v = m[d & g]));
                  t: for (;;) {
                    if (
                      ((d >>>= y = v >>> 24),
                      (p -= y),
                      0 === (y = (v >>> 16) & 255))
                    )
                      C[s++] = 65535 & v;
                    else {
                      if (!(16 & y)) {
                        if (0 == (64 & y)) {
                          v = m[(65535 & v) + (d & ((1 << y) - 1))];
                          continue t;
                        }
                        if (32 & y) {
                          r2.mode = 12;
                          break e;
                        }
                        ((e2.msg = "invalid literal/length code"),
                          (r2.mode = 30));
                        break e;
                      }
                      ((w = 65535 & v),
                        (y &= 15) &&
                          (p < y && ((d += z[n++] << p), (p += 8)),
                          (w += d & ((1 << y) - 1)),
                          (d >>>= y),
                          (p -= y)),
                        p < 15 &&
                          ((d += z[n++] << p),
                          (p += 8),
                          (d += z[n++] << p),
                          (p += 8)),
                        (v = _[d & b]));
                      r: for (;;) {
                        if (
                          ((d >>>= y = v >>> 24),
                          (p -= y),
                          !(16 & (y = (v >>> 16) & 255)))
                        ) {
                          if (0 == (64 & y)) {
                            v = _[(65535 & v) + (d & ((1 << y) - 1))];
                            continue r;
                          }
                          ((e2.msg = "invalid distance code"), (r2.mode = 30));
                          break e;
                        }
                        if (
                          ((k = 65535 & v),
                          p < (y &= 15) &&
                            ((d += z[n++] << p),
                            (p += 8) < y && ((d += z[n++] << p), (p += 8))),
                          h < (k += d & ((1 << y) - 1)))
                        ) {
                          ((e2.msg = "invalid distance too far back"),
                            (r2.mode = 30));
                          break e;
                        }
                        if (((d >>>= y), (p -= y), (y = s - a) < k)) {
                          if (l < (y = k - y) && r2.sane) {
                            ((e2.msg = "invalid distance too far back"),
                              (r2.mode = 30));
                            break e;
                          }
                          if (((S = c), (x = 0) === f)) {
                            if (((x += u - y), y < w)) {
                              for (w -= y; (C[s++] = c[x++]), --y; );
                              ((x = s - k), (S = C));
                            }
                          } else if (f < y) {
                            if (((x += u + f - y), (y -= f) < w)) {
                              for (w -= y; (C[s++] = c[x++]), --y; );
                              if (((x = 0), f < w)) {
                                for (w -= y = f; (C[s++] = c[x++]), --y; );
                                ((x = s - k), (S = C));
                              }
                            }
                          } else if (((x += f - y), y < w)) {
                            for (w -= y; (C[s++] = c[x++]), --y; );
                            ((x = s - k), (S = C));
                          }
                          for (; 2 < w; )
                            ((C[s++] = S[x++]),
                              (C[s++] = S[x++]),
                              (C[s++] = S[x++]),
                              (w -= 3));
                          w && ((C[s++] = S[x++]), 1 < w && (C[s++] = S[x++]));
                        } else {
                          for (
                            x = s - k;
                            (C[s++] = C[x++]),
                              (C[s++] = C[x++]),
                              (C[s++] = C[x++]),
                              2 < (w -= 3);
                          );
                          w && ((C[s++] = C[x++]), 1 < w && (C[s++] = C[x++]));
                        }
                        break;
                      }
                    }
                    break;
                  }
                } while (n < i && s < o);
                ((n -= w = p >> 3),
                  (d &= (1 << (p -= w << 3)) - 1),
                  (e2.next_in = n),
                  (e2.next_out = s),
                  (e2.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                  (e2.avail_out = s < o ? o - s + 257 : 257 - (s - o)),
                  (r2.hold = d),
                  (r2.bits = p));
              };
            },
            {},
          ],
          49: [
            function (e, t, r) {
              "use strict";
              var I = e("../utils/common"),
                O = e("./adler32"),
                B = e("./crc32"),
                R = e("./inffast"),
                T = e("./inftrees"),
                D = 1,
                F = 2,
                N = 0,
                U = -2,
                P = 1,
                n = 852,
                i = 592;
              function L(e2) {
                return (
                  ((e2 >>> 24) & 255) +
                  ((e2 >>> 8) & 65280) +
                  ((65280 & e2) << 8) +
                  ((255 & e2) << 24)
                );
              }
              function s() {
                ((this.mode = 0),
                  (this.last = false),
                  (this.wrap = 0),
                  (this.havedict = false),
                  (this.flags = 0),
                  (this.dmax = 0),
                  (this.check = 0),
                  (this.total = 0),
                  (this.head = null),
                  (this.wbits = 0),
                  (this.wsize = 0),
                  (this.whave = 0),
                  (this.wnext = 0),
                  (this.window = null),
                  (this.hold = 0),
                  (this.bits = 0),
                  (this.length = 0),
                  (this.offset = 0),
                  (this.extra = 0),
                  (this.lencode = null),
                  (this.distcode = null),
                  (this.lenbits = 0),
                  (this.distbits = 0),
                  (this.ncode = 0),
                  (this.nlen = 0),
                  (this.ndist = 0),
                  (this.have = 0),
                  (this.next = null),
                  (this.lens = new I.Buf16(320)),
                  (this.work = new I.Buf16(288)),
                  (this.lendyn = null),
                  (this.distdyn = null),
                  (this.sane = 0),
                  (this.back = 0),
                  (this.was = 0));
              }
              function a(e2) {
                var t2;
                return e2 && e2.state
                  ? ((t2 = e2.state),
                    (e2.total_in = e2.total_out = t2.total = 0),
                    (e2.msg = ""),
                    t2.wrap && (e2.adler = 1 & t2.wrap),
                    (t2.mode = P),
                    (t2.last = 0),
                    (t2.havedict = 0),
                    (t2.dmax = 32768),
                    (t2.head = null),
                    (t2.hold = 0),
                    (t2.bits = 0),
                    (t2.lencode = t2.lendyn = new I.Buf32(n)),
                    (t2.distcode = t2.distdyn = new I.Buf32(i)),
                    (t2.sane = 1),
                    (t2.back = -1),
                    N)
                  : U;
              }
              function o(e2) {
                var t2;
                return e2 && e2.state
                  ? (((t2 = e2.state).wsize = 0),
                    (t2.whave = 0),
                    (t2.wnext = 0),
                    a(e2))
                  : U;
              }
              function h(e2, t2) {
                var r2, n2;
                return e2 && e2.state
                  ? ((n2 = e2.state),
                    t2 < 0
                      ? ((r2 = 0), (t2 = -t2))
                      : ((r2 = 1 + (t2 >> 4)), t2 < 48 && (t2 &= 15)),
                    t2 && (t2 < 8 || 15 < t2)
                      ? U
                      : (null !== n2.window &&
                          n2.wbits !== t2 &&
                          (n2.window = null),
                        (n2.wrap = r2),
                        (n2.wbits = t2),
                        o(e2)))
                  : U;
              }
              function u(e2, t2) {
                var r2, n2;
                return e2
                  ? ((n2 = new s()),
                    ((e2.state = n2).window = null),
                    (r2 = h(e2, t2)) !== N && (e2.state = null),
                    r2)
                  : U;
              }
              var l,
                f,
                c = true;
              function j(e2) {
                if (c) {
                  var t2;
                  for (
                    l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0;
                    t2 < 144;
                  )
                    e2.lens[t2++] = 8;
                  for (; t2 < 256; ) e2.lens[t2++] = 9;
                  for (; t2 < 280; ) e2.lens[t2++] = 7;
                  for (; t2 < 288; ) e2.lens[t2++] = 8;
                  for (
                    T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0;
                    t2 < 32;
                  )
                    e2.lens[t2++] = 5;
                  (T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }),
                    (c = false));
                }
                ((e2.lencode = l),
                  (e2.lenbits = 9),
                  (e2.distcode = f),
                  (e2.distbits = 5));
              }
              function Z(e2, t2, r2, n2) {
                var i2,
                  s2 = e2.state;
                return (
                  null === s2.window &&
                    ((s2.wsize = 1 << s2.wbits),
                    (s2.wnext = 0),
                    (s2.whave = 0),
                    (s2.window = new I.Buf8(s2.wsize))),
                  n2 >= s2.wsize
                    ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0),
                      (s2.wnext = 0),
                      (s2.whave = s2.wsize))
                    : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2),
                      I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext),
                      (n2 -= i2)
                        ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0),
                          (s2.wnext = n2),
                          (s2.whave = s2.wsize))
                        : ((s2.wnext += i2),
                          s2.wnext === s2.wsize && (s2.wnext = 0),
                          s2.whave < s2.wsize && (s2.whave += i2))),
                  0
                );
              }
              ((r.inflateReset = o),
                (r.inflateReset2 = h),
                (r.inflateResetKeep = a),
                (r.inflateInit = function (e2) {
                  return u(e2, 15);
                }),
                (r.inflateInit2 = u),
                (r.inflate = function (e2, t2) {
                  var r2,
                    n2,
                    i2,
                    s2,
                    a2,
                    o2,
                    h2,
                    u2,
                    l2,
                    f2,
                    c2,
                    d,
                    p,
                    m,
                    _,
                    g,
                    b,
                    v,
                    y,
                    w,
                    k,
                    x,
                    S,
                    z,
                    C = 0,
                    E = new I.Buf8(4),
                    A = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ];
                  if (
                    !e2 ||
                    !e2.state ||
                    !e2.output ||
                    (!e2.input && 0 !== e2.avail_in)
                  )
                    return U;
                  (12 === (r2 = e2.state).mode && (r2.mode = 13),
                    (a2 = e2.next_out),
                    (i2 = e2.output),
                    (h2 = e2.avail_out),
                    (s2 = e2.next_in),
                    (n2 = e2.input),
                    (o2 = e2.avail_in),
                    (u2 = r2.hold),
                    (l2 = r2.bits),
                    (f2 = o2),
                    (c2 = h2),
                    (x = N));
                  e: for (;;)
                    switch (r2.mode) {
                      case P:
                        if (0 === r2.wrap) {
                          r2.mode = 13;
                          break;
                        }
                        for (; l2 < 16; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if (2 & r2.wrap && 35615 === u2) {
                          ((E[(r2.check = 0)] = 255 & u2),
                            (E[1] = (u2 >>> 8) & 255),
                            (r2.check = B(r2.check, E, 2, 0)),
                            (l2 = u2 = 0),
                            (r2.mode = 2));
                          break;
                        }
                        if (
                          ((r2.flags = 0),
                          r2.head && (r2.head.done = false),
                          !(1 & r2.wrap) ||
                            (((255 & u2) << 8) + (u2 >> 8)) % 31)
                        ) {
                          ((e2.msg = "incorrect header check"), (r2.mode = 30));
                          break;
                        }
                        if (8 != (15 & u2)) {
                          ((e2.msg = "unknown compression method"),
                            (r2.mode = 30));
                          break;
                        }
                        if (
                          ((l2 -= 4),
                          (k = 8 + (15 & (u2 >>>= 4))),
                          0 === r2.wbits)
                        )
                          r2.wbits = k;
                        else if (k > r2.wbits) {
                          ((e2.msg = "invalid window size"), (r2.mode = 30));
                          break;
                        }
                        ((r2.dmax = 1 << k),
                          (e2.adler = r2.check = 1),
                          (r2.mode = 512 & u2 ? 10 : 12),
                          (l2 = u2 = 0));
                        break;
                      case 2:
                        for (; l2 < 16; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if (((r2.flags = u2), 8 != (255 & r2.flags))) {
                          ((e2.msg = "unknown compression method"),
                            (r2.mode = 30));
                          break;
                        }
                        if (57344 & r2.flags) {
                          ((e2.msg = "unknown header flags set"),
                            (r2.mode = 30));
                          break;
                        }
                        (r2.head && (r2.head.text = (u2 >> 8) & 1),
                          512 & r2.flags &&
                            ((E[0] = 255 & u2),
                            (E[1] = (u2 >>> 8) & 255),
                            (r2.check = B(r2.check, E, 2, 0))),
                          (l2 = u2 = 0),
                          (r2.mode = 3));
                      case 3:
                        for (; l2 < 32; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        (r2.head && (r2.head.time = u2),
                          512 & r2.flags &&
                            ((E[0] = 255 & u2),
                            (E[1] = (u2 >>> 8) & 255),
                            (E[2] = (u2 >>> 16) & 255),
                            (E[3] = (u2 >>> 24) & 255),
                            (r2.check = B(r2.check, E, 4, 0))),
                          (l2 = u2 = 0),
                          (r2.mode = 4));
                      case 4:
                        for (; l2 < 16; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        (r2.head &&
                          ((r2.head.xflags = 255 & u2), (r2.head.os = u2 >> 8)),
                          512 & r2.flags &&
                            ((E[0] = 255 & u2),
                            (E[1] = (u2 >>> 8) & 255),
                            (r2.check = B(r2.check, E, 2, 0))),
                          (l2 = u2 = 0),
                          (r2.mode = 5));
                      case 5:
                        if (1024 & r2.flags) {
                          for (; l2 < 16; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((r2.length = u2),
                            r2.head && (r2.head.extra_len = u2),
                            512 & r2.flags &&
                              ((E[0] = 255 & u2),
                              (E[1] = (u2 >>> 8) & 255),
                              (r2.check = B(r2.check, E, 2, 0))),
                            (l2 = u2 = 0));
                        } else r2.head && (r2.head.extra = null);
                        r2.mode = 6;
                      case 6:
                        if (
                          1024 & r2.flags &&
                          (o2 < (d = r2.length) && (d = o2),
                          d &&
                            (r2.head &&
                              ((k = r2.head.extra_len - r2.length),
                              r2.head.extra ||
                                (r2.head.extra = new Array(r2.head.extra_len)),
                              I.arraySet(r2.head.extra, n2, s2, d, k)),
                            512 & r2.flags &&
                              (r2.check = B(r2.check, n2, d, s2)),
                            (o2 -= d),
                            (s2 += d),
                            (r2.length -= d)),
                          r2.length)
                        )
                          break e;
                        ((r2.length = 0), (r2.mode = 7));
                      case 7:
                        if (2048 & r2.flags) {
                          if (0 === o2) break e;
                          for (
                            d = 0;
                            (k = n2[s2 + d++]),
                              r2.head &&
                                k &&
                                r2.length < 65536 &&
                                (r2.head.name += String.fromCharCode(k)),
                              k && d < o2;
                          );
                          if (
                            (512 & r2.flags &&
                              (r2.check = B(r2.check, n2, d, s2)),
                            (o2 -= d),
                            (s2 += d),
                            k)
                          )
                            break e;
                        } else r2.head && (r2.head.name = null);
                        ((r2.length = 0), (r2.mode = 8));
                      case 8:
                        if (4096 & r2.flags) {
                          if (0 === o2) break e;
                          for (
                            d = 0;
                            (k = n2[s2 + d++]),
                              r2.head &&
                                k &&
                                r2.length < 65536 &&
                                (r2.head.comment += String.fromCharCode(k)),
                              k && d < o2;
                          );
                          if (
                            (512 & r2.flags &&
                              (r2.check = B(r2.check, n2, d, s2)),
                            (o2 -= d),
                            (s2 += d),
                            k)
                          )
                            break e;
                        } else r2.head && (r2.head.comment = null);
                        r2.mode = 9;
                      case 9:
                        if (512 & r2.flags) {
                          for (; l2 < 16; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          if (u2 !== (65535 & r2.check)) {
                            ((e2.msg = "header crc mismatch"), (r2.mode = 30));
                            break;
                          }
                          l2 = u2 = 0;
                        }
                        (r2.head &&
                          ((r2.head.hcrc = (r2.flags >> 9) & 1),
                          (r2.head.done = true)),
                          (e2.adler = r2.check = 0),
                          (r2.mode = 12));
                        break;
                      case 10:
                        for (; l2 < 32; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        ((e2.adler = r2.check = L(u2)),
                          (l2 = u2 = 0),
                          (r2.mode = 11));
                      case 11:
                        if (0 === r2.havedict)
                          return (
                            (e2.next_out = a2),
                            (e2.avail_out = h2),
                            (e2.next_in = s2),
                            (e2.avail_in = o2),
                            (r2.hold = u2),
                            (r2.bits = l2),
                            2
                          );
                        ((e2.adler = r2.check = 1), (r2.mode = 12));
                      case 12:
                        if (5 === t2 || 6 === t2) break e;
                      case 13:
                        if (r2.last) {
                          ((u2 >>>= 7 & l2), (l2 -= 7 & l2), (r2.mode = 27));
                          break;
                        }
                        for (; l2 < 3; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        switch (
                          ((r2.last = 1 & u2), (l2 -= 1), 3 & (u2 >>>= 1))
                        ) {
                          case 0:
                            r2.mode = 14;
                            break;
                          case 1:
                            if ((j(r2), (r2.mode = 20), 6 !== t2)) break;
                            ((u2 >>>= 2), (l2 -= 2));
                            break e;
                          case 2:
                            r2.mode = 17;
                            break;
                          case 3:
                            ((e2.msg = "invalid block type"), (r2.mode = 30));
                        }
                        ((u2 >>>= 2), (l2 -= 2));
                        break;
                      case 14:
                        for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if ((65535 & u2) != ((u2 >>> 16) ^ 65535)) {
                          ((e2.msg = "invalid stored block lengths"),
                            (r2.mode = 30));
                          break;
                        }
                        if (
                          ((r2.length = 65535 & u2),
                          (l2 = u2 = 0),
                          (r2.mode = 15),
                          6 === t2)
                        )
                          break e;
                      case 15:
                        r2.mode = 16;
                      case 16:
                        if ((d = r2.length)) {
                          if ((o2 < d && (d = o2), h2 < d && (d = h2), 0 === d))
                            break e;
                          (I.arraySet(i2, n2, s2, d, a2),
                            (o2 -= d),
                            (s2 += d),
                            (h2 -= d),
                            (a2 += d),
                            (r2.length -= d));
                          break;
                        }
                        r2.mode = 12;
                        break;
                      case 17:
                        for (; l2 < 14; ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if (
                          ((r2.nlen = 257 + (31 & u2)),
                          (u2 >>>= 5),
                          (l2 -= 5),
                          (r2.ndist = 1 + (31 & u2)),
                          (u2 >>>= 5),
                          (l2 -= 5),
                          (r2.ncode = 4 + (15 & u2)),
                          (u2 >>>= 4),
                          (l2 -= 4),
                          286 < r2.nlen || 30 < r2.ndist)
                        ) {
                          ((e2.msg = "too many length or distance symbols"),
                            (r2.mode = 30));
                          break;
                        }
                        ((r2.have = 0), (r2.mode = 18));
                      case 18:
                        for (; r2.have < r2.ncode; ) {
                          for (; l2 < 3; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((r2.lens[A[r2.have++]] = 7 & u2),
                            (u2 >>>= 3),
                            (l2 -= 3));
                        }
                        for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
                        if (
                          ((r2.lencode = r2.lendyn),
                          (r2.lenbits = 7),
                          (S = { bits: r2.lenbits }),
                          (x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S)),
                          (r2.lenbits = S.bits),
                          x)
                        ) {
                          ((e2.msg = "invalid code lengths set"),
                            (r2.mode = 30));
                          break;
                        }
                        ((r2.have = 0), (r2.mode = 19));
                      case 19:
                        for (; r2.have < r2.nlen + r2.ndist; ) {
                          for (
                            ;
                            (g =
                              ((C =
                                r2.lencode[u2 & ((1 << r2.lenbits) - 1)]) >>>
                                16) &
                              255),
                              (b = 65535 & C),
                              !((_ = C >>> 24) <= l2);
                          ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          if (b < 16)
                            ((u2 >>>= _), (l2 -= _), (r2.lens[r2.have++] = b));
                          else {
                            if (16 === b) {
                              for (z = _ + 2; l2 < z; ) {
                                if (0 === o2) break e;
                                (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                              }
                              if (((u2 >>>= _), (l2 -= _), 0 === r2.have)) {
                                ((e2.msg = "invalid bit length repeat"),
                                  (r2.mode = 30));
                                break;
                              }
                              ((k = r2.lens[r2.have - 1]),
                                (d = 3 + (3 & u2)),
                                (u2 >>>= 2),
                                (l2 -= 2));
                            } else if (17 === b) {
                              for (z = _ + 3; l2 < z; ) {
                                if (0 === o2) break e;
                                (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                              }
                              ((l2 -= _),
                                (k = 0),
                                (d = 3 + (7 & (u2 >>>= _))),
                                (u2 >>>= 3),
                                (l2 -= 3));
                            } else {
                              for (z = _ + 7; l2 < z; ) {
                                if (0 === o2) break e;
                                (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                              }
                              ((l2 -= _),
                                (k = 0),
                                (d = 11 + (127 & (u2 >>>= _))),
                                (u2 >>>= 7),
                                (l2 -= 7));
                            }
                            if (r2.have + d > r2.nlen + r2.ndist) {
                              ((e2.msg = "invalid bit length repeat"),
                                (r2.mode = 30));
                              break;
                            }
                            for (; d--; ) r2.lens[r2.have++] = k;
                          }
                        }
                        if (30 === r2.mode) break;
                        if (0 === r2.lens[256]) {
                          ((e2.msg = "invalid code -- missing end-of-block"),
                            (r2.mode = 30));
                          break;
                        }
                        if (
                          ((r2.lenbits = 9),
                          (S = { bits: r2.lenbits }),
                          (x = T(
                            D,
                            r2.lens,
                            0,
                            r2.nlen,
                            r2.lencode,
                            0,
                            r2.work,
                            S,
                          )),
                          (r2.lenbits = S.bits),
                          x)
                        ) {
                          ((e2.msg = "invalid literal/lengths set"),
                            (r2.mode = 30));
                          break;
                        }
                        if (
                          ((r2.distbits = 6),
                          (r2.distcode = r2.distdyn),
                          (S = { bits: r2.distbits }),
                          (x = T(
                            F,
                            r2.lens,
                            r2.nlen,
                            r2.ndist,
                            r2.distcode,
                            0,
                            r2.work,
                            S,
                          )),
                          (r2.distbits = S.bits),
                          x)
                        ) {
                          ((e2.msg = "invalid distances set"), (r2.mode = 30));
                          break;
                        }
                        if (((r2.mode = 20), 6 === t2)) break e;
                      case 20:
                        r2.mode = 21;
                      case 21:
                        if (6 <= o2 && 258 <= h2) {
                          ((e2.next_out = a2),
                            (e2.avail_out = h2),
                            (e2.next_in = s2),
                            (e2.avail_in = o2),
                            (r2.hold = u2),
                            (r2.bits = l2),
                            R(e2, c2),
                            (a2 = e2.next_out),
                            (i2 = e2.output),
                            (h2 = e2.avail_out),
                            (s2 = e2.next_in),
                            (n2 = e2.input),
                            (o2 = e2.avail_in),
                            (u2 = r2.hold),
                            (l2 = r2.bits),
                            12 === r2.mode && (r2.back = -1));
                          break;
                        }
                        for (
                          r2.back = 0;
                          (g =
                            ((C = r2.lencode[u2 & ((1 << r2.lenbits) - 1)]) >>>
                              16) &
                            255),
                            (b = 65535 & C),
                            !((_ = C >>> 24) <= l2);
                        ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if (g && 0 == (240 & g)) {
                          for (
                            v = _, y = g, w = b;
                            (g =
                              ((C =
                                r2.lencode[
                                  w + ((u2 & ((1 << (v + y)) - 1)) >> v)
                                ]) >>>
                                16) &
                              255),
                              (b = 65535 & C),
                              !(v + (_ = C >>> 24) <= l2);
                          ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((u2 >>>= v), (l2 -= v), (r2.back += v));
                        }
                        if (
                          ((u2 >>>= _),
                          (l2 -= _),
                          (r2.back += _),
                          (r2.length = b),
                          0 === g)
                        ) {
                          r2.mode = 26;
                          break;
                        }
                        if (32 & g) {
                          ((r2.back = -1), (r2.mode = 12));
                          break;
                        }
                        if (64 & g) {
                          ((e2.msg = "invalid literal/length code"),
                            (r2.mode = 30));
                          break;
                        }
                        ((r2.extra = 15 & g), (r2.mode = 22));
                      case 22:
                        if (r2.extra) {
                          for (z = r2.extra; l2 < z; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((r2.length += u2 & ((1 << r2.extra) - 1)),
                            (u2 >>>= r2.extra),
                            (l2 -= r2.extra),
                            (r2.back += r2.extra));
                        }
                        ((r2.was = r2.length), (r2.mode = 23));
                      case 23:
                        for (
                          ;
                          (g =
                            ((C =
                              r2.distcode[u2 & ((1 << r2.distbits) - 1)]) >>>
                              16) &
                            255),
                            (b = 65535 & C),
                            !((_ = C >>> 24) <= l2);
                        ) {
                          if (0 === o2) break e;
                          (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                        }
                        if (0 == (240 & g)) {
                          for (
                            v = _, y = g, w = b;
                            (g =
                              ((C =
                                r2.distcode[
                                  w + ((u2 & ((1 << (v + y)) - 1)) >> v)
                                ]) >>>
                                16) &
                              255),
                              (b = 65535 & C),
                              !(v + (_ = C >>> 24) <= l2);
                          ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((u2 >>>= v), (l2 -= v), (r2.back += v));
                        }
                        if (((u2 >>>= _), (l2 -= _), (r2.back += _), 64 & g)) {
                          ((e2.msg = "invalid distance code"), (r2.mode = 30));
                          break;
                        }
                        ((r2.offset = b), (r2.extra = 15 & g), (r2.mode = 24));
                      case 24:
                        if (r2.extra) {
                          for (z = r2.extra; l2 < z; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          ((r2.offset += u2 & ((1 << r2.extra) - 1)),
                            (u2 >>>= r2.extra),
                            (l2 -= r2.extra),
                            (r2.back += r2.extra));
                        }
                        if (r2.offset > r2.dmax) {
                          ((e2.msg = "invalid distance too far back"),
                            (r2.mode = 30));
                          break;
                        }
                        r2.mode = 25;
                      case 25:
                        if (0 === h2) break e;
                        if (((d = c2 - h2), r2.offset > d)) {
                          if ((d = r2.offset - d) > r2.whave && r2.sane) {
                            ((e2.msg = "invalid distance too far back"),
                              (r2.mode = 30));
                            break;
                          }
                          ((p =
                            d > r2.wnext
                              ? ((d -= r2.wnext), r2.wsize - d)
                              : r2.wnext - d),
                            d > r2.length && (d = r2.length),
                            (m = r2.window));
                        } else
                          ((m = i2), (p = a2 - r2.offset), (d = r2.length));
                        for (
                          h2 < d && (d = h2), h2 -= d, r2.length -= d;
                          (i2[a2++] = m[p++]), --d;
                        );
                        0 === r2.length && (r2.mode = 21);
                        break;
                      case 26:
                        if (0 === h2) break e;
                        ((i2[a2++] = r2.length), h2--, (r2.mode = 21));
                        break;
                      case 27:
                        if (r2.wrap) {
                          for (; l2 < 32; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 |= n2[s2++] << l2), (l2 += 8));
                          }
                          if (
                            ((c2 -= h2),
                            (e2.total_out += c2),
                            (r2.total += c2),
                            c2 &&
                              (e2.adler = r2.check =
                                r2.flags
                                  ? B(r2.check, i2, c2, a2 - c2)
                                  : O(r2.check, i2, c2, a2 - c2)),
                            (c2 = h2),
                            (r2.flags ? u2 : L(u2)) !== r2.check)
                          ) {
                            ((e2.msg = "incorrect data check"), (r2.mode = 30));
                            break;
                          }
                          l2 = u2 = 0;
                        }
                        r2.mode = 28;
                      case 28:
                        if (r2.wrap && r2.flags) {
                          for (; l2 < 32; ) {
                            if (0 === o2) break e;
                            (o2--, (u2 += n2[s2++] << l2), (l2 += 8));
                          }
                          if (u2 !== (4294967295 & r2.total)) {
                            ((e2.msg = "incorrect length check"),
                              (r2.mode = 30));
                            break;
                          }
                          l2 = u2 = 0;
                        }
                        r2.mode = 29;
                      case 29:
                        x = 1;
                        break e;
                      case 30:
                        x = -3;
                        break e;
                      case 31:
                        return -4;
                      case 32:
                      default:
                        return U;
                    }
                  return (
                    (e2.next_out = a2),
                    (e2.avail_out = h2),
                    (e2.next_in = s2),
                    (e2.avail_in = o2),
                    (r2.hold = u2),
                    (r2.bits = l2),
                    (r2.wsize ||
                      (c2 !== e2.avail_out &&
                        r2.mode < 30 &&
                        (r2.mode < 27 || 4 !== t2))) &&
                    Z(e2, e2.output, e2.next_out, c2 - e2.avail_out)
                      ? ((r2.mode = 31), -4)
                      : ((f2 -= e2.avail_in),
                        (c2 -= e2.avail_out),
                        (e2.total_in += f2),
                        (e2.total_out += c2),
                        (r2.total += c2),
                        r2.wrap &&
                          c2 &&
                          (e2.adler = r2.check =
                            r2.flags
                              ? B(r2.check, i2, c2, e2.next_out - c2)
                              : O(r2.check, i2, c2, e2.next_out - c2)),
                        (e2.data_type =
                          r2.bits +
                          (r2.last ? 64 : 0) +
                          (12 === r2.mode ? 128 : 0) +
                          (20 === r2.mode || 15 === r2.mode ? 256 : 0)),
                        ((0 == f2 && 0 === c2) || 4 === t2) &&
                          x === N &&
                          (x = -5),
                        x)
                  );
                }),
                (r.inflateEnd = function (e2) {
                  if (!e2 || !e2.state) return U;
                  var t2 = e2.state;
                  return (
                    t2.window && (t2.window = null),
                    (e2.state = null),
                    N
                  );
                }),
                (r.inflateGetHeader = function (e2, t2) {
                  var r2;
                  return e2 && e2.state
                    ? 0 == (2 & (r2 = e2.state).wrap)
                      ? U
                      : (((r2.head = t2).done = false), N)
                    : U;
                }),
                (r.inflateSetDictionary = function (e2, t2) {
                  var r2,
                    n2 = t2.length;
                  return e2 && e2.state
                    ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode
                      ? U
                      : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check
                        ? -3
                        : Z(e2, t2, n2, n2)
                          ? ((r2.mode = 31), -4)
                          : ((r2.havedict = 1), N)
                    : U;
                }),
                (r.inflateInfo = "pako inflate (from Nodeca project)"));
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50,
            },
          ],
          50: [
            function (e, t, r) {
              "use strict";
              var D = e("../utils/common"),
                F = [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                ],
                N = [
                  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18,
                  18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72,
                  78,
                ],
                U = [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577, 0, 0,
                ],
                P = [
                  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22,
                  22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
                  64, 64,
                ];
              t.exports = function (e2, t2, r2, n, i, s, a, o) {
                var h,
                  u,
                  l,
                  f,
                  c,
                  d,
                  p,
                  m,
                  _,
                  g = o.bits,
                  b = 0,
                  v = 0,
                  y = 0,
                  w = 0,
                  k = 0,
                  x = 0,
                  S = 0,
                  z = 0,
                  C = 0,
                  E = 0,
                  A = null,
                  I = 0,
                  O = new D.Buf16(16),
                  B = new D.Buf16(16),
                  R = null,
                  T = 0;
                for (b = 0; b <= 15; b++) O[b] = 0;
                for (v = 0; v < n; v++) O[t2[r2 + v]]++;
                for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);
                if ((w < k && (k = w), 0 === w))
                  return (
                    (i[s++] = 20971520),
                    (i[s++] = 20971520),
                    (o.bits = 1),
                    0
                  );
                for (y = 1; y < w && 0 === O[y]; y++);
                for (k < y && (k = y), b = z = 1; b <= 15; b++)
                  if (((z <<= 1), (z -= O[b]) < 0)) return -1;
                if (0 < z && (0 === e2 || 1 !== w)) return -1;
                for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
                for (v = 0; v < n; v++)
                  0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
                if (
                  ((d =
                    0 === e2
                      ? ((A = R = a), 19)
                      : 1 === e2
                        ? ((A = F), (I -= 257), (R = N), (T -= 257), 256)
                        : ((A = U), (R = P), -1)),
                  (b = y),
                  (c = s),
                  (S = v = E = 0),
                  (l = -1),
                  (f = (C = 1 << (x = k)) - 1),
                  (1 === e2 && 852 < C) || (2 === e2 && 592 < C))
                )
                  return 1;
                for (;;) {
                  for (
                    p = b - S,
                      _ =
                        a[v] < d
                          ? ((m = 0), a[v])
                          : a[v] > d
                            ? ((m = R[T + a[v]]), A[I + a[v]])
                            : ((m = 96), 0),
                      h = 1 << (b - S),
                      y = u = 1 << x;
                    (i[c + (E >> S) + (u -= h)] =
                      (p << 24) | (m << 16) | _ | 0),
                      0 !== u;
                  );
                  for (h = 1 << (b - 1); E & h; ) h >>= 1;
                  if (
                    (0 !== h ? ((E &= h - 1), (E += h)) : (E = 0),
                    v++,
                    0 == --O[b])
                  ) {
                    if (b === w) break;
                    b = t2[r2 + a[v]];
                  }
                  if (k < b && (E & f) !== l) {
                    for (
                      0 === S && (S = k), c += y, z = 1 << (x = b - S);
                      x + S < w && !((z -= O[x + S]) <= 0);
                    )
                      (x++, (z <<= 1));
                    if (
                      ((C += 1 << x),
                      (1 === e2 && 852 < C) || (2 === e2 && 592 < C))
                    )
                      return 1;
                    i[(l = E & f)] = (k << 24) | (x << 16) | (c - s) | 0;
                  }
                }
                return (
                  0 !== E && (i[c + E] = ((b - S) << 24) | (64 << 16) | 0),
                  (o.bits = k),
                  0
                );
              };
            },
            { "../utils/common": 41 },
          ],
          51: [
            function (e, t, r) {
              "use strict";
              t.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version",
              };
            },
            {},
          ],
          52: [
            function (e, t, r) {
              "use strict";
              var i = e("../utils/common"),
                o = 0,
                h = 1;
              function n(e2) {
                for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
              }
              var s = 0,
                a = 29,
                u = 256,
                l = u + 1 + a,
                f = 30,
                c = 19,
                _ = 2 * l + 1,
                g = 15,
                d = 16,
                p = 7,
                m = 256,
                b = 16,
                v = 17,
                y = 18,
                w = [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0,
                ],
                k = [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13,
                ],
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                S = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                z = new Array(2 * (l + 2));
              n(z);
              var C = new Array(2 * f);
              n(C);
              var E = new Array(512);
              n(E);
              var A = new Array(256);
              n(A);
              var I = new Array(a);
              n(I);
              var O,
                B,
                R,
                T = new Array(f);
              function D(e2, t2, r2, n2, i2) {
                ((this.static_tree = e2),
                  (this.extra_bits = t2),
                  (this.extra_base = r2),
                  (this.elems = n2),
                  (this.max_length = i2),
                  (this.has_stree = e2 && e2.length));
              }
              function F(e2, t2) {
                ((this.dyn_tree = e2),
                  (this.max_code = 0),
                  (this.stat_desc = t2));
              }
              function N(e2) {
                return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
              }
              function U(e2, t2) {
                ((e2.pending_buf[e2.pending++] = 255 & t2),
                  (e2.pending_buf[e2.pending++] = (t2 >>> 8) & 255));
              }
              function P(e2, t2, r2) {
                e2.bi_valid > d - r2
                  ? ((e2.bi_buf |= (t2 << e2.bi_valid) & 65535),
                    U(e2, e2.bi_buf),
                    (e2.bi_buf = t2 >> (d - e2.bi_valid)),
                    (e2.bi_valid += r2 - d))
                  : ((e2.bi_buf |= (t2 << e2.bi_valid) & 65535),
                    (e2.bi_valid += r2));
              }
              function L(e2, t2, r2) {
                P(e2, r2[2 * t2], r2[2 * t2 + 1]);
              }
              function j(e2, t2) {
                for (
                  var r2 = 0;
                  (r2 |= 1 & e2), (e2 >>>= 1), (r2 <<= 1), 0 < --t2;
                );
                return r2 >>> 1;
              }
              function Z(e2, t2, r2) {
                var n2,
                  i2,
                  s2 = new Array(g + 1),
                  a2 = 0;
                for (n2 = 1; n2 <= g; n2++)
                  s2[n2] = a2 = (a2 + r2[n2 - 1]) << 1;
                for (i2 = 0; i2 <= t2; i2++) {
                  var o2 = e2[2 * i2 + 1];
                  0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
                }
              }
              function W(e2) {
                var t2;
                for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
                for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
                for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
                ((e2.dyn_ltree[2 * m] = 1),
                  (e2.opt_len = e2.static_len = 0),
                  (e2.last_lit = e2.matches = 0));
              }
              function M(e2) {
                (8 < e2.bi_valid
                  ? U(e2, e2.bi_buf)
                  : 0 < e2.bi_valid &&
                    (e2.pending_buf[e2.pending++] = e2.bi_buf),
                  (e2.bi_buf = 0),
                  (e2.bi_valid = 0));
              }
              function H(e2, t2, r2, n2) {
                var i2 = 2 * t2,
                  s2 = 2 * r2;
                return (
                  e2[i2] < e2[s2] || (e2[i2] === e2[s2] && n2[t2] <= n2[r2])
                );
              }
              function G(e2, t2, r2) {
                for (
                  var n2 = e2.heap[r2], i2 = r2 << 1;
                  i2 <= e2.heap_len &&
                  (i2 < e2.heap_len &&
                    H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) &&
                    i2++,
                  !H(t2, n2, e2.heap[i2], e2.depth));
                )
                  ((e2.heap[r2] = e2.heap[i2]), (r2 = i2), (i2 <<= 1));
                e2.heap[r2] = n2;
              }
              function K(e2, t2, r2) {
                var n2,
                  i2,
                  s2,
                  a2,
                  o2 = 0;
                if (0 !== e2.last_lit)
                  for (
                    ;
                    (n2 =
                      (e2.pending_buf[e2.d_buf + 2 * o2] << 8) |
                      e2.pending_buf[e2.d_buf + 2 * o2 + 1]),
                      (i2 = e2.pending_buf[e2.l_buf + o2]),
                      o2++,
                      0 === n2
                        ? L(e2, i2, t2)
                        : (L(e2, (s2 = A[i2]) + u + 1, t2),
                          0 !== (a2 = w[s2]) && P(e2, (i2 -= I[s2]), a2),
                          L(e2, (s2 = N(--n2)), r2),
                          0 !== (a2 = k[s2]) && P(e2, (n2 -= T[s2]), a2)),
                      o2 < e2.last_lit;
                  );
                L(e2, m, t2);
              }
              function Y(e2, t2) {
                var r2,
                  n2,
                  i2,
                  s2 = t2.dyn_tree,
                  a2 = t2.stat_desc.static_tree,
                  o2 = t2.stat_desc.has_stree,
                  h2 = t2.stat_desc.elems,
                  u2 = -1;
                for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++)
                  0 !== s2[2 * r2]
                    ? ((e2.heap[++e2.heap_len] = u2 = r2), (e2.depth[r2] = 0))
                    : (s2[2 * r2 + 1] = 0);
                for (; e2.heap_len < 2; )
                  ((s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] =
                    1),
                    (e2.depth[i2] = 0),
                    e2.opt_len--,
                    o2 && (e2.static_len -= a2[2 * i2 + 1]));
                for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--)
                  G(e2, s2, r2);
                for (
                  i2 = h2;
                  (r2 = e2.heap[1]),
                    (e2.heap[1] = e2.heap[e2.heap_len--]),
                    G(e2, s2, 1),
                    (n2 = e2.heap[1]),
                    (e2.heap[--e2.heap_max] = r2),
                    (e2.heap[--e2.heap_max] = n2),
                    (s2[2 * i2] = s2[2 * r2] + s2[2 * n2]),
                    (e2.depth[i2] =
                      (e2.depth[r2] >= e2.depth[n2]
                        ? e2.depth[r2]
                        : e2.depth[n2]) + 1),
                    (s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2),
                    (e2.heap[1] = i2++),
                    G(e2, s2, 1),
                    2 <= e2.heap_len;
                );
                ((e2.heap[--e2.heap_max] = e2.heap[1]),
                  (function (e3, t3) {
                    var r3,
                      n3,
                      i3,
                      s3,
                      a3,
                      o3,
                      h3 = t3.dyn_tree,
                      u3 = t3.max_code,
                      l2 = t3.stat_desc.static_tree,
                      f2 = t3.stat_desc.has_stree,
                      c2 = t3.stat_desc.extra_bits,
                      d2 = t3.stat_desc.extra_base,
                      p2 = t3.stat_desc.max_length,
                      m2 = 0;
                    for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
                    for (
                      h3[2 * e3.heap[e3.heap_max] + 1] = 0,
                        r3 = e3.heap_max + 1;
                      r3 < _;
                      r3++
                    )
                      (p2 <
                        (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) &&
                        ((s3 = p2), m2++),
                        (h3[2 * n3 + 1] = s3),
                        u3 < n3 ||
                          (e3.bl_count[s3]++,
                          (a3 = 0),
                          d2 <= n3 && (a3 = c2[n3 - d2]),
                          (o3 = h3[2 * n3]),
                          (e3.opt_len += o3 * (s3 + a3)),
                          f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3))));
                    if (0 !== m2) {
                      do {
                        for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                        (e3.bl_count[s3]--,
                          (e3.bl_count[s3 + 1] += 2),
                          e3.bl_count[p2]--,
                          (m2 -= 2));
                      } while (0 < m2);
                      for (s3 = p2; 0 !== s3; s3--)
                        for (n3 = e3.bl_count[s3]; 0 !== n3; )
                          u3 < (i3 = e3.heap[--r3]) ||
                            (h3[2 * i3 + 1] !== s3 &&
                              ((e3.opt_len +=
                                (s3 - h3[2 * i3 + 1]) * h3[2 * i3]),
                              (h3[2 * i3 + 1] = s3)),
                            n3--);
                    }
                  })(e2, t2),
                  Z(s2, u2, e2.bl_count));
              }
              function X(e2, t2, r2) {
                var n2,
                  i2,
                  s2 = -1,
                  a2 = t2[1],
                  o2 = 0,
                  h2 = 7,
                  u2 = 4;
                for (
                  0 === a2 && ((h2 = 138), (u2 = 3)),
                    t2[2 * (r2 + 1) + 1] = 65535,
                    n2 = 0;
                  n2 <= r2;
                  n2++
                )
                  ((i2 = a2),
                    (a2 = t2[2 * (n2 + 1) + 1]),
                    (++o2 < h2 && i2 === a2) ||
                      (o2 < u2
                        ? (e2.bl_tree[2 * i2] += o2)
                        : 0 !== i2
                          ? (i2 !== s2 && e2.bl_tree[2 * i2]++,
                            e2.bl_tree[2 * b]++)
                          : o2 <= 10
                            ? e2.bl_tree[2 * v]++
                            : e2.bl_tree[2 * y]++,
                      (s2 = i2),
                      (u2 =
                        (o2 = 0) === a2
                          ? ((h2 = 138), 3)
                          : i2 === a2
                            ? ((h2 = 6), 3)
                            : ((h2 = 7), 4))));
              }
              function V(e2, t2, r2) {
                var n2,
                  i2,
                  s2 = -1,
                  a2 = t2[1],
                  o2 = 0,
                  h2 = 7,
                  u2 = 4;
                for (0 === a2 && ((h2 = 138), (u2 = 3)), n2 = 0; n2 <= r2; n2++)
                  if (
                    ((i2 = a2),
                    (a2 = t2[2 * (n2 + 1) + 1]),
                    !(++o2 < h2 && i2 === a2))
                  ) {
                    if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; );
                    else
                      0 !== i2
                        ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--),
                          L(e2, b, e2.bl_tree),
                          P(e2, o2 - 3, 2))
                        : o2 <= 10
                          ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3))
                          : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
                    ((s2 = i2),
                      (u2 =
                        (o2 = 0) === a2
                          ? ((h2 = 138), 3)
                          : i2 === a2
                            ? ((h2 = 6), 3)
                            : ((h2 = 7), 4)));
                  }
              }
              n(T);
              var q = false;
              function J(e2, t2, r2, n2) {
                (P(e2, (s << 1) + (n2 ? 1 : 0), 3),
                  (function (e3, t3, r3, n3) {
                    (M(e3),
                      n3 && (U(e3, r3), U(e3, ~r3)),
                      i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending),
                      (e3.pending += r3));
                  })(e2, t2, r2, true));
              }
              ((r._tr_init = function (e2) {
                (q ||
                  ((function () {
                    var e3,
                      t2,
                      r2,
                      n2,
                      i2,
                      s2 = new Array(g + 1);
                    for (n2 = r2 = 0; n2 < a - 1; n2++)
                      for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++)
                        A[r2++] = n2;
                    for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++)
                      for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++)
                        E[i2++] = n2;
                    for (i2 >>= 7; n2 < f; n2++)
                      for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << (k[n2] - 7); e3++)
                        E[256 + i2++] = n2;
                    for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
                    for (e3 = 0; e3 <= 143; )
                      ((z[2 * e3 + 1] = 8), e3++, s2[8]++);
                    for (; e3 <= 255; ) ((z[2 * e3 + 1] = 9), e3++, s2[9]++);
                    for (; e3 <= 279; ) ((z[2 * e3 + 1] = 7), e3++, s2[7]++);
                    for (; e3 <= 287; ) ((z[2 * e3 + 1] = 8), e3++, s2[8]++);
                    for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++)
                      ((C[2 * e3 + 1] = 5), (C[2 * e3] = j(e3, 5)));
                    ((O = new D(z, w, u + 1, l, g)),
                      (B = new D(C, k, 0, f, g)),
                      (R = new D(new Array(0), x, 0, c, p)));
                  })(),
                  (q = true)),
                  (e2.l_desc = new F(e2.dyn_ltree, O)),
                  (e2.d_desc = new F(e2.dyn_dtree, B)),
                  (e2.bl_desc = new F(e2.bl_tree, R)),
                  (e2.bi_buf = 0),
                  (e2.bi_valid = 0),
                  W(e2));
              }),
                (r._tr_stored_block = J),
                (r._tr_flush_block = function (e2, t2, r2, n2) {
                  var i2,
                    s2,
                    a2 = 0;
                  (0 < e2.level
                    ? (2 === e2.strm.data_type &&
                        (e2.strm.data_type = (function (e3) {
                          var t3,
                            r3 = 4093624447;
                          for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1)
                            if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
                          if (
                            0 !== e3.dyn_ltree[18] ||
                            0 !== e3.dyn_ltree[20] ||
                            0 !== e3.dyn_ltree[26]
                          )
                            return h;
                          for (t3 = 32; t3 < u; t3++)
                            if (0 !== e3.dyn_ltree[2 * t3]) return h;
                          return o;
                        })(e2)),
                      Y(e2, e2.l_desc),
                      Y(e2, e2.d_desc),
                      (a2 = (function (e3) {
                        var t3;
                        for (
                          X(e3, e3.dyn_ltree, e3.l_desc.max_code),
                            X(e3, e3.dyn_dtree, e3.d_desc.max_code),
                            Y(e3, e3.bl_desc),
                            t3 = c - 1;
                          3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1];
                          t3--
                        );
                        return ((e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4), t3);
                      })(e2)),
                      (i2 = (e2.opt_len + 3 + 7) >>> 3),
                      (s2 = (e2.static_len + 3 + 7) >>> 3) <= i2 && (i2 = s2))
                    : (i2 = s2 = r2 + 5),
                    r2 + 4 <= i2 && -1 !== t2
                      ? J(e2, t2, r2, n2)
                      : 4 === e2.strategy || s2 === i2
                        ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C))
                        : (P(e2, 4 + (n2 ? 1 : 0), 3),
                          (function (e3, t3, r3, n3) {
                            var i3;
                            for (
                              P(e3, t3 - 257, 5),
                                P(e3, r3 - 1, 5),
                                P(e3, n3 - 4, 4),
                                i3 = 0;
                              i3 < n3;
                              i3++
                            )
                              P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
                            (V(e3, e3.dyn_ltree, t3 - 1),
                              V(e3, e3.dyn_dtree, r3 - 1));
                          })(
                            e2,
                            e2.l_desc.max_code + 1,
                            e2.d_desc.max_code + 1,
                            a2 + 1,
                          ),
                          K(e2, e2.dyn_ltree, e2.dyn_dtree)),
                    W(e2),
                    n2 && M(e2));
                }),
                (r._tr_tally = function (e2, t2, r2) {
                  return (
                    (e2.pending_buf[e2.d_buf + 2 * e2.last_lit] =
                      (t2 >>> 8) & 255),
                    (e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2),
                    (e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2),
                    e2.last_lit++,
                    0 === t2
                      ? e2.dyn_ltree[2 * r2]++
                      : (e2.matches++,
                        t2--,
                        e2.dyn_ltree[2 * (A[r2] + u + 1)]++,
                        e2.dyn_dtree[2 * N(t2)]++),
                    e2.last_lit === e2.lit_bufsize - 1
                  );
                }),
                (r._tr_align = function (e2) {
                  (P(e2, 2, 3),
                    L(e2, m, z),
                    (function (e3) {
                      16 === e3.bi_valid
                        ? (U(e3, e3.bi_buf), (e3.bi_buf = 0), (e3.bi_valid = 0))
                        : 8 <= e3.bi_valid &&
                          ((e3.pending_buf[e3.pending++] = 255 & e3.bi_buf),
                          (e3.bi_buf >>= 8),
                          (e3.bi_valid -= 8));
                    })(e2));
                }));
            },
            { "../utils/common": 41 },
          ],
          53: [
            function (e, t, r) {
              "use strict";
              t.exports = function () {
                ((this.input = null),
                  (this.next_in = 0),
                  (this.avail_in = 0),
                  (this.total_in = 0),
                  (this.output = null),
                  (this.next_out = 0),
                  (this.avail_out = 0),
                  (this.total_out = 0),
                  (this.msg = ""),
                  (this.state = null),
                  (this.data_type = 2),
                  (this.adler = 0));
              };
            },
            {},
          ],
          54: [
            function (e, t, r) {
              (function (e2) {
                !(function (r2, n) {
                  "use strict";
                  if (!r2.setImmediate) {
                    var i,
                      s,
                      t2,
                      a,
                      o = 1,
                      h = {},
                      u = false,
                      l = r2.document,
                      e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
                    ((e3 = e3 && e3.setTimeout ? e3 : r2),
                      (i =
                        "[object process]" === {}.toString.call(r2.process)
                          ? function (e4) {
                              process.nextTick(function () {
                                c(e4);
                              });
                            }
                          : (function () {
                                if (r2.postMessage && !r2.importScripts) {
                                  var e4 = true,
                                    t3 = r2.onmessage;
                                  return (
                                    (r2.onmessage = function () {
                                      e4 = false;
                                    }),
                                    r2.postMessage("", "*"),
                                    (r2.onmessage = t3),
                                    e4
                                  );
                                }
                              })()
                            ? ((a = "setImmediate$" + Math.random() + "$"),
                              r2.addEventListener
                                ? r2.addEventListener("message", d, false)
                                : r2.attachEvent("onmessage", d),
                              function (e4) {
                                r2.postMessage(a + e4, "*");
                              })
                            : r2.MessageChannel
                              ? (((t2 = new MessageChannel()).port1.onmessage =
                                  function (e4) {
                                    c(e4.data);
                                  }),
                                function (e4) {
                                  t2.port2.postMessage(e4);
                                })
                              : l &&
                                  "onreadystatechange" in
                                    l.createElement("script")
                                ? ((s = l.documentElement),
                                  function (e4) {
                                    var t3 = l.createElement("script");
                                    ((t3.onreadystatechange = function () {
                                      (c(e4),
                                        (t3.onreadystatechange = null),
                                        s.removeChild(t3),
                                        (t3 = null));
                                    }),
                                      s.appendChild(t3));
                                  })
                                : function (e4) {
                                    setTimeout(c, 0, e4);
                                  }),
                      (e3.setImmediate = function (e4) {
                        "function" != typeof e4 && (e4 = new Function("" + e4));
                        for (
                          var t3 = new Array(arguments.length - 1), r3 = 0;
                          r3 < t3.length;
                          r3++
                        )
                          t3[r3] = arguments[r3 + 1];
                        var n2 = { callback: e4, args: t3 };
                        return ((h[o] = n2), i(o), o++);
                      }),
                      (e3.clearImmediate = f));
                  }
                  function f(e4) {
                    delete h[e4];
                  }
                  function c(e4) {
                    if (u) setTimeout(c, 0, e4);
                    else {
                      var t3 = h[e4];
                      if (t3) {
                        u = true;
                        try {
                          !(function (e5) {
                            var t4 = e5.callback,
                              r3 = e5.args;
                            switch (r3.length) {
                              case 0:
                                t4();
                                break;
                              case 1:
                                t4(r3[0]);
                                break;
                              case 2:
                                t4(r3[0], r3[1]);
                                break;
                              case 3:
                                t4(r3[0], r3[1], r3[2]);
                                break;
                              default:
                                t4.apply(n, r3);
                            }
                          })(t3);
                        } finally {
                          (f(e4), (u = false));
                        }
                      }
                    }
                  }
                  function d(e4) {
                    e4.source === r2 &&
                      "string" == typeof e4.data &&
                      0 === e4.data.indexOf(a) &&
                      c(+e4.data.slice(a.length));
                  }
                })(
                  "undefined" == typeof self
                    ? void 0 === e2
                      ? this
                      : e2
                    : self,
                );
              }).call(
                this,
                "undefined" != typeof global
                  ? global
                  : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                      ? window
                      : {},
              );
            },
            {},
          ],
        },
        {},
        [10],
      )(10);
    });
  },
});

// node_modules/@jsquash/webp/meta.js
var defaultOptions = {
  quality: 75,
  target_size: 0,
  target_PSNR: 0,
  method: 4,
  sns_strength: 50,
  filter_strength: 60,
  filter_sharpness: 0,
  filter_type: 1,
  partitions: 0,
  segments: 4,
  pass: 1,
  show_compressed: 0,
  preprocessing: 0,
  autofilter: 0,
  partition_limit: 0,
  alpha_compression: 1,
  alpha_filtering: 1,
  alpha_quality: 100,
  lossless: 0,
  exact: 0,
  image_hint: 0,
  emulate_jpeg_size: 0,
  thread_level: 0,
  low_memory: 0,
  near_lossless: 100,
  use_delta_palette: 0,
  use_sharp_yuv: 0,
};

// node_modules/@jsquash/webp/utils.js
function initEmscriptenModule(
  moduleFactory,
  wasmModule,
  moduleOptionOverrides = {},
) {
  let instantiateWasm;
  if (wasmModule) {
    instantiateWasm = (imports, callback) => {
      const instance = new WebAssembly.Instance(wasmModule, imports);
      callback(instance);
      return instance.exports;
    };
  }
  return moduleFactory({
    // Just to be safe, don't automatically invoke any wasm functions
    noInitialRun: true,
    instantiateWasm,
    ...moduleOptionOverrides,
  });
}

// node_modules/wasm-feature-detect/dist/esm/index.js
var simd = async () =>
  WebAssembly.validate(
    new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10,
      1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
    ]),
  );
var threads = () =>
  (async (e) => {
    try {
      return (
        "undefined" != typeof MessageChannel &&
          new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),
        WebAssembly.validate(e)
      );
    } catch (e2) {
      return false;
    }
  })(
    new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1,
      1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11,
    ]),
  );

// node_modules/@jsquash/webp/encode.js
var emscriptenModule;
async function init(module, moduleOptionOverrides) {
  let actualModule = module;
  let actualOptions = moduleOptionOverrides;
  if (arguments.length === 1 && !(module instanceof WebAssembly.Module)) {
    actualModule = void 0;
    actualOptions = module;
  }
  if (await simd()) {
    const webpEncoder2 = await Promise.resolve().then(
      () => (init_webp_enc_simd(), webp_enc_simd_exports),
    );
    emscriptenModule = initEmscriptenModule(
      webpEncoder2.default,
      actualModule,
      actualOptions,
    );
    return emscriptenModule;
  }
  const webpEncoder = await Promise.resolve().then(
    () => (init_webp_enc(), webp_enc_exports),
  );
  emscriptenModule = initEmscriptenModule(
    webpEncoder.default,
    actualModule,
    actualOptions,
  );
  return emscriptenModule;
}
async function encode(data, options = {}) {
  if (!emscriptenModule) emscriptenModule = init();
  const _options = { ...defaultOptions, ...options };
  const module = await emscriptenModule;
  const result = module.encode(data.data, data.width, data.height, _options);
  if (!result) throw new Error("Encoding error.");
  return result.buffer;
}

// node_modules/@jsquash/avif/meta.js
var defaultOptions2 = {
  quality: 50,
  qualityAlpha: -1,
  denoiseLevel: 0,
  tileColsLog2: 0,
  tileRowsLog2: 0,
  speed: 6,
  subsample: 1,
  chromaDeltaQ: false,
  sharpness: 0,
  tune: 0,
  enableSharpYUV: false,
  bitDepth: 8,
  lossless: false,
};

// node_modules/@jsquash/avif/utils.js
function initEmscriptenModule2(
  moduleFactory,
  wasmModule,
  moduleOptionOverrides = {},
) {
  let instantiateWasm;
  if (wasmModule) {
    instantiateWasm = (imports, callback) => {
      const instance = new WebAssembly.Instance(wasmModule, imports);
      callback(instance);
      return instance.exports;
    };
  }
  return moduleFactory({
    // Just to be safe, don't automatically invoke any wasm functions
    noInitialRun: true,
    instantiateWasm,
    ...moduleOptionOverrides,
  });
}

// node_modules/@jsquash/avif/encode.js
var emscriptenModule2;
var isRunningInNode = () =>
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node";
var isRunningInCloudflareWorker = () => {
  var _a;
  return (
    ((_a = globalThis.caches) === null || _a === void 0
      ? void 0
      : _a.default) !== void 0
  );
};
async function init2(module, moduleOptionOverrides) {
  let actualModule = module;
  let actualOptions = moduleOptionOverrides;
  if (arguments.length === 1 && !(module instanceof WebAssembly.Module)) {
    actualModule = void 0;
    actualOptions = module;
  }
  if (
    !isRunningInNode() &&
    !isRunningInCloudflareWorker() &&
    (await threads())
  ) {
    const avifEncoder2 = await Promise.resolve().then(
      () => (init_avif_enc_mt(), avif_enc_mt_exports),
    );
    emscriptenModule2 = initEmscriptenModule2(
      avifEncoder2.default,
      actualModule,
      actualOptions,
    );
    return emscriptenModule2;
  }
  const avifEncoder = await Promise.resolve().then(
    () => (init_avif_enc(), avif_enc_exports),
  );
  emscriptenModule2 = initEmscriptenModule2(
    avifEncoder.default,
    actualModule,
    actualOptions,
  );
  return emscriptenModule2;
}
async function encode2(data, options = {}) {
  if (!emscriptenModule2) emscriptenModule2 = init2();
  const _options = { ...defaultOptions2, ...options };
  if (
    _options.bitDepth !== 8 &&
    _options.bitDepth !== 10 &&
    _options.bitDepth !== 12
  ) {
    throw new Error("Invalid bit depth. Supported values are 8, 10, or 12.");
  }
  if (!(data.data instanceof Uint16Array) && _options.bitDepth !== 8) {
    throw new Error(
      "Invalid image data for bit depth. Must use Uint16Array for bit depths greater than 8.",
    );
  }
  if (_options.lossless) {
    if (options.quality !== void 0 && options.quality !== 100) {
      console.warn(
        "AVIF lossless: Quality setting is ignored when lossless is enabled (quality must be 100).",
      );
    }
    if (
      options.qualityAlpha !== void 0 &&
      options.qualityAlpha !== 100 &&
      options.qualityAlpha !== -1
    ) {
      console.warn(
        "AVIF lossless: QualityAlpha setting is ignored when lossless is enabled (qualityAlpha must be 100 or -1).",
      );
    }
    if (options.subsample !== void 0 && options.subsample !== 3) {
      console.warn(
        "AVIF lossless: Subsample setting is ignored when lossless is enabled (subsample must be 3 for YUV444).",
      );
    }
    _options.quality = 100;
    _options.qualityAlpha = -1;
    _options.subsample = 3;
  }
  const module = await emscriptenModule2;
  const output = module.encode(
    new Uint8Array(data.data.buffer),
    data.width,
    data.height,
    _options,
  );
  if (!output) {
    throw new Error("Encoding error.");
  }
  return output.buffer;
}

// node_modules/@jsquash/jpeg/codec/enc/mozjpeg_enc.js
var Module5 = (() => {
  var _scriptDir = import.meta.url;
  return function (moduleArg = {}) {
    var Module9 = moduleArg;
    var readyPromiseResolve, readyPromiseReject;
    var readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    const isServiceWorker3 = globalThis.ServiceWorkerGlobalScope !== void 0;
    const isRunningInCloudFlareWorkers3 =
      isServiceWorker3 &&
      typeof self !== "undefined" &&
      globalThis.caches &&
      globalThis.caches.default !== void 0;
    const isRunningInNode5 =
      typeof process === "object" &&
      process.release &&
      process.release.name === "node";
    if (isRunningInCloudFlareWorkers3 || isRunningInNode5) {
      if (!globalThis.ImageData) {
        globalThis.ImageData = class ImageData {
          constructor(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
          }
        };
      }
      if (import.meta.url === void 0) {
        import.meta.url = "https://localhost";
      }
      if (typeof self !== "undefined" && self.location === void 0) {
        self.location = { href: "" };
      }
    }
    var moduleOverrides = Object.assign({}, Module9);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = typeof window == "object";
    var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
    var ENVIRONMENT_IS_NODE =
      typeof process == "object" &&
      typeof process.versions == "object" &&
      typeof process.versions.node == "string";
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module9["locateFile"]) {
        return Module9["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary;
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.startsWith("blob:")) {
        scriptDirectory = "";
      } else {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
        );
      }
      {
        read_ = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = (url, onload, onerror) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
    } else {
    }
    var out = Module9["print"] || console.log.bind(console);
    var err = Module9["printErr"] || console.error.bind(console);
    Object.assign(Module9, moduleOverrides);
    moduleOverrides = null;
    if (Module9["arguments"]) arguments_ = Module9["arguments"];
    if (Module9["thisProgram"]) thisProgram = Module9["thisProgram"];
    if (Module9["quit"]) quit_ = Module9["quit"];
    var wasmBinary;
    if (Module9["wasmBinary"]) wasmBinary = Module9["wasmBinary"];
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module9["HEAP8"] = HEAP8 = new Int8Array(b);
      Module9["HEAP16"] = HEAP16 = new Int16Array(b);
      Module9["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module9["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module9["HEAP32"] = HEAP32 = new Int32Array(b);
      Module9["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module9["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module9["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    function preRun() {
      if (Module9["preRun"]) {
        if (typeof Module9["preRun"] == "function")
          Module9["preRun"] = [Module9["preRun"]];
        while (Module9["preRun"].length) {
          addOnPreRun(Module9["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      if (Module9["postRun"]) {
        if (typeof Module9["postRun"] == "function")
          Module9["postRun"] = [Module9["postRun"]];
        while (Module9["postRun"].length) {
          addOnPostRun(Module9["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      Module9["monitorRunDependencies"]?.(runDependencies);
    }
    function removeRunDependency(id) {
      runDependencies--;
      Module9["monitorRunDependencies"]?.(runDependencies);
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      Module9["onAbort"]?.(what);
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
    var wasmBinaryFile;
    if (Module9["locateFile"]) {
      wasmBinaryFile = "mozjpeg_enc.wasm";
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }
    } else {
      wasmBinaryFile = new URL("mozjpeg_enc.wasm", import.meta.url).href;
    }
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(binaryFile) {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function") {
          return fetch(binaryFile, { credentials: "same-origin" })
            .then((response) => {
              if (!response["ok"]) {
                throw `failed to load wasm binary file at '${binaryFile}'`;
              }
              return response["arrayBuffer"]();
            })
            .catch(() => getBinarySync(binaryFile));
        }
      }
      return Promise.resolve().then(() => getBinarySync(binaryFile));
    }
    function instantiateArrayBuffer(binaryFile, imports, receiver) {
      return getBinaryPromise(binaryFile)
        .then((binary) => WebAssembly.instantiate(binary, imports))
        .then(receiver, (reason) => {
          err(`failed to asynchronously prepare wasm: ${reason}`);
          abort(reason);
        });
    }
    function instantiateAsync(binary, binaryFile, imports, callback) {
      if (
        !binary &&
        typeof WebAssembly.instantiateStreaming == "function" &&
        !isDataURI(binaryFile) &&
        typeof fetch == "function"
      ) {
        return fetch(binaryFile, { credentials: "same-origin" }).then(
          (response) => {
            var result = WebAssembly.instantiateStreaming(response, imports);
            return result.then(callback, function (reason) {
              err(`wasm streaming compile failed: ${reason}`);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(binaryFile, imports, callback);
            });
          },
        );
      }
      return instantiateArrayBuffer(binaryFile, imports, callback);
    }
    function createWasm() {
      var info = { a: wasmImports };
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["C"];
        updateMemoryViews();
        wasmTable = wasmExports["H"];
        addOnInit(wasmExports["D"]);
        removeRunDependency("wasm-instantiate");
        return wasmExports;
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      if (Module9["instantiateWasm"]) {
        try {
          return Module9["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          readyPromiseReject(e);
        }
      }
      instantiateAsync(
        wasmBinary,
        wasmBinaryFile,
        info,
        receiveInstantiationResult,
      ).catch(readyPromiseReject);
      return {};
    }
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
    var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module9);
      }
    };
    var noExitRuntime = Module9["noExitRuntime"] || true;
    class ExceptionInfo {
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }
      set_type(type) {
        HEAPU32[(this.ptr + 4) >> 2] = type;
      }
      get_type() {
        return HEAPU32[(this.ptr + 4) >> 2];
      }
      set_destructor(destructor) {
        HEAPU32[(this.ptr + 8) >> 2] = destructor;
      }
      get_destructor() {
        return HEAPU32[(this.ptr + 8) >> 2];
      }
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + 12] = caught;
      }
      get_caught() {
        return HEAP8[this.ptr + 12] != 0;
      }
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + 13] = rethrown;
      }
      get_rethrown() {
        return HEAP8[this.ptr + 13] != 0;
      }
      init(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
      }
      get_adjusted_ptr() {
        return HEAPU32[(this.ptr + 16) >> 2];
      }
      get_exception_ptr() {
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[this.excPtr >> 2];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      }
    }
    var exceptionLast = 0;
    var uncaughtExceptionCount = 0;
    var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw exceptionLast;
    };
    var structRegistrations = {};
    var runDestructors = (destructors) => {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    };
    function readPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var InternalError;
    var throwInternalError = (message) => {
      throw new InternalError(message);
    };
    var whenDependentTypesAreResolved = (
      myTypes,
      dependentTypes,
      getTypeConverters,
    ) => {
      myTypes.forEach(function (type) {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters2) {
        var myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(() => {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    };
    var __embind_finalize_value_object = (structType) => {
      var reg = structRegistrations[structType];
      delete structRegistrations[structType];
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      var fieldRecords = reg.fields;
      var fieldTypes = fieldRecords
        .map((field) => field.getterReturnType)
        .concat(fieldRecords.map((field) => field.setterArgumentType));
      whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes2) => {
        var fields = {};
        fieldRecords.forEach((field, i) => {
          var fieldName = field.fieldName;
          var getterReturnType = fieldTypes2[i];
          var getter = field.getter;
          var getterContext = field.getterContext;
          var setterArgumentType = fieldTypes2[i + fieldRecords.length];
          var setter = field.setter;
          var setterContext = field.setterContext;
          fields[fieldName] = {
            read: (ptr) =>
              getterReturnType["fromWireType"](getter(getterContext, ptr)),
            write: (ptr, o) => {
              var destructors = [];
              setter(
                setterContext,
                ptr,
                setterArgumentType["toWireType"](destructors, o),
              );
              runDestructors(destructors);
            },
          };
        });
        return [
          {
            name: reg.name,
            fromWireType: (ptr) => {
              var rv = {};
              for (var i in fields) {
                rv[i] = fields[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            },
            toWireType: (destructors, o) => {
              for (var fieldName in fields) {
                if (!(fieldName in o)) {
                  throw new TypeError(`Missing field: "${fieldName}"`);
                }
              }
              var ptr = rawConstructor();
              for (fieldName in fields) {
                fields[fieldName].write(ptr, o[fieldName]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: readPointer,
            destructorFunction: rawDestructor,
          },
        ];
      });
    };
    var __embind_register_bigint = (
      primitiveType,
      name,
      size,
      minRange,
      maxRange,
    ) => {};
    var embind_init_charCodes = () => {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    };
    var embind_charCodes;
    var readLatin1String = (ptr) => {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    };
    var BindingError;
    var throwBindingError = (message) => {
      throw new BindingError(message);
    };
    function sharedRegisterType(rawType, registeredInstance, options = {}) {
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(
          `type "${name}" must have a positive integer typeid pointer`,
        );
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError(`Cannot register type '${name}' twice`);
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach((cb) => cb());
      }
    }
    function registerType(rawType, registeredInstance, options = {}) {
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      }
      return sharedRegisterType(rawType, registeredInstance, options);
    }
    var GenericWireTypeSize = 8;
    var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function (wt) {
          return !!wt;
        },
        toWireType: function (destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: function (pointer) {
          return this["fromWireType"](HEAPU8[pointer]);
        },
        destructorFunction: null,
      });
    };
    var emval_freelist = [];
    var emval_handles = [];
    var __emval_decref = (handle) => {
      if (handle > 9 && 0 === --emval_handles[handle + 1]) {
        emval_handles[handle] = void 0;
        emval_freelist.push(handle);
      }
    };
    var count_emval_handles = () =>
      emval_handles.length / 2 - 5 - emval_freelist.length;
    var init_emval = () => {
      emval_handles.push(0, 1, void 0, 1, null, 1, true, 1, false, 1);
      Module9["count_emval_handles"] = count_emval_handles;
    };
    var Emval = {
      toValue: (handle) => {
        if (!handle) {
          throwBindingError("Cannot use deleted val. handle = " + handle);
        }
        return emval_handles[handle];
      },
      toHandle: (value) => {
        switch (value) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            const handle = emval_freelist.pop() || emval_handles.length;
            emval_handles[handle] = value;
            emval_handles[handle + 1] = 1;
            return handle;
          }
        }
      },
    };
    var EmValType = {
      name: "emscripten::val",
      fromWireType: (handle) => {
        var rv = Emval.toValue(handle);
        __emval_decref(handle);
        return rv;
      },
      toWireType: (destructors, value) => Emval.toHandle(value),
      argPackAdvance: GenericWireTypeSize,
      readValueFromPointer: readPointer,
      destructorFunction: null,
    };
    var __embind_register_emval = (rawType) => registerType(rawType, EmValType);
    var floatReadValueFromPointer = (name, width) => {
      switch (width) {
        case 4:
          return function (pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 8:
          return function (pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${width}): ${name}`);
      }
    };
    var __embind_register_float = (rawType, name, size) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: (value) => value,
        toWireType: (destructors, value) => value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: floatReadValueFromPointer(name, size),
        destructorFunction: null,
      });
    };
    var createNamedFunction = (name, body) =>
      Object.defineProperty(body, "name", { value: name });
    function usesDestructorStack(argTypes) {
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          return true;
        }
      }
      return false;
    }
    function craftInvokerFunction(
      humanName,
      argTypes,
      classType,
      cppInvokerFunc,
      cppTargetFunc,
      isAsync,
    ) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = usesDestructorStack(argTypes);
      var returns = argTypes[0].name !== "void";
      var expectedArgCount = argCount - 2;
      var argsWired = new Array(expectedArgCount);
      var invokerFuncArgs = [];
      var destructors = [];
      var invokerFn = function (...args) {
        if (args.length !== expectedArgCount) {
          throwBindingError(
            `function ${humanName} called with ${args.length} arguments, expected ${expectedArgCount}`,
          );
        }
        destructors.length = 0;
        var thisWired;
        invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
        invokerFuncArgs[0] = cppTargetFunc;
        if (isClassMethodFunc) {
          thisWired = argTypes[1]["toWireType"](destructors, this);
          invokerFuncArgs[1] = thisWired;
        }
        for (var i = 0; i < expectedArgCount; ++i) {
          argsWired[i] = argTypes[i + 2]["toWireType"](destructors, args[i]);
          invokerFuncArgs.push(argsWired[i]);
        }
        var rv = cppInvokerFunc(...invokerFuncArgs);
        function onDone(rv2) {
          if (needsDestructorStack) {
            runDestructors(destructors);
          } else {
            for (
              var i2 = isClassMethodFunc ? 1 : 2;
              i2 < argTypes.length;
              i2++
            ) {
              var param = i2 === 1 ? thisWired : argsWired[i2 - 2];
              if (argTypes[i2].destructorFunction !== null) {
                argTypes[i2].destructorFunction(param);
              }
            }
          }
          if (returns) {
            return argTypes[0]["fromWireType"](rv2);
          }
        }
        return onDone(rv);
      };
      return createNamedFunction(humanName, invokerFn);
    }
    var ensureOverloadTable = (proto, methodName, humanName) => {
      if (void 0 === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function (...args) {
          if (!proto[methodName].overloadTable.hasOwnProperty(args.length)) {
            throwBindingError(
              `Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`,
            );
          }
          return proto[methodName].overloadTable[args.length].apply(this, args);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    };
    var exposePublicSymbol = (name, value, numArguments) => {
      if (Module9.hasOwnProperty(name)) {
        if (
          void 0 === numArguments ||
          (void 0 !== Module9[name].overloadTable &&
            void 0 !== Module9[name].overloadTable[numArguments])
        ) {
          throwBindingError(`Cannot register public name '${name}' twice`);
        }
        ensureOverloadTable(Module9, name, name);
        if (Module9.hasOwnProperty(numArguments)) {
          throwBindingError(
            `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`,
          );
        }
        Module9[name].overloadTable[numArguments] = value;
      } else {
        Module9[name] = value;
        if (void 0 !== numArguments) {
          Module9[name].numArguments = numArguments;
        }
      }
    };
    var heap32VectorToArray = (count, firstElement) => {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAPU32[(firstElement + i * 4) >> 2]);
      }
      return array;
    };
    var replacePublicSymbol = (name, value, numArguments) => {
      if (!Module9.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistent public symbol");
      }
      if (void 0 !== Module9[name].overloadTable && void 0 !== numArguments) {
        Module9[name].overloadTable[numArguments] = value;
      } else {
        Module9[name] = value;
        Module9[name].argCount = numArguments;
      }
    };
    var dynCallLegacy = (sig, ptr, args) => {
      sig = sig.replace(/p/g, "i");
      var f = Module9["dynCall_" + sig];
      return f(ptr, ...args);
    };
    var wasmTableMirror = [];
    var wasmTable;
    var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length)
          wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };
    var dynCall = (sig, ptr, args = []) => {
      if (sig.includes("j")) {
        return dynCallLegacy(sig, ptr, args);
      }
      var rtn = getWasmTableEntry(ptr)(...args);
      return rtn;
    };
    var getDynCaller =
      (sig, ptr) =>
      (...args) =>
        dynCall(sig, ptr, args);
    var embind__requireFunction = (signature, rawFunction) => {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        if (signature.includes("j")) {
          return getDynCaller(signature, rawFunction);
        }
        return getWasmTableEntry(rawFunction);
      }
      var fp = makeDynCaller();
      if (typeof fp != "function") {
        throwBindingError(
          `unknown function pointer with signature ${signature}: ${rawFunction}`,
        );
      }
      return fp;
    };
    var extendError = (baseErrorType, errorName) => {
      var errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack =
            this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function () {
        if (this.message === void 0) {
          return this.name;
        } else {
          return `${this.name}: ${this.message}`;
        }
      };
      return errorClass;
    };
    var UnboundTypeError;
    var getTypeName = (type) => {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    };
    var throwUnboundTypeError = (message, types) => {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(
        `${message}: ` + unboundTypes.map(getTypeName).join([", "]),
      );
    };
    var getFunctionName = (signature) => {
      signature = signature.trim();
      const argsIndex = signature.indexOf("(");
      if (argsIndex !== -1) {
        return signature.substr(0, argsIndex);
      } else {
        return signature;
      }
    };
    var __embind_register_function = (
      name,
      argCount,
      rawArgTypesAddr,
      signature,
      rawInvoker,
      fn,
      isAsync,
    ) => {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      name = getFunctionName(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        function () {
          throwUnboundTypeError(
            `Cannot call ${name} due to unbound types`,
            argTypes,
          );
        },
        argCount - 1,
      );
      whenDependentTypesAreResolved([], argTypes, (argTypes2) => {
        var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(
          name,
          craftInvokerFunction(
            name,
            invokerArgsArray,
            null,
            rawInvoker,
            fn,
            isAsync,
          ),
          argCount - 1,
        );
        return [];
      });
    };
    var integerReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed
            ? (pointer) => HEAP8[pointer]
            : (pointer) => HEAPU8[pointer];
        case 2:
          return signed
            ? (pointer) => HEAP16[pointer >> 1]
            : (pointer) => HEAPU16[pointer >> 1];
        case 4:
          return signed
            ? (pointer) => HEAP32[pointer >> 2]
            : (pointer) => HEAPU32[pointer >> 2];
        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
    var __embind_register_integer = (
      primitiveType,
      name,
      size,
      minRange,
      maxRange,
    ) => {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      var fromWireType = (value) => value;
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = (value) => (value << bitshift) >>> bitshift;
      }
      var isUnsignedType = name.includes("unsigned");
      var checkAssertions = (value, toTypeName) => {};
      var toWireType;
      if (isUnsignedType) {
        toWireType = function (destructors, value) {
          checkAssertions(value, this.name);
          return value >>> 0;
        };
      } else {
        toWireType = function (destructors, value) {
          checkAssertions(value, this.name);
          return value;
        };
      }
      registerType(primitiveType, {
        name,
        fromWireType: fromWireType,
        toWireType: toWireType,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: integerReadValueFromPointer(
          name,
          size,
          minRange !== 0,
        ),
        destructorFunction: null,
      });
    };
    var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        var size = HEAPU32[handle >> 2];
        var data = HEAPU32[(handle + 4) >> 2];
        return new TA(HEAP8.buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        {
          name,
          fromWireType: decodeMemoryView,
          argPackAdvance: GenericWireTypeSize,
          readValueFromPointer: decodeMemoryView,
        },
        { ignoreDuplicateRegistrations: true },
      );
    };
    var stringToUTF8Array = (str, heap2, outIdx, maxBytesToWrite) => {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap2[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap2[outIdx++] = 192 | (u >> 6);
          heap2[outIdx++] = 128 | (u & 63);
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap2[outIdx++] = 224 | (u >> 12);
          heap2[outIdx++] = 128 | ((u >> 6) & 63);
          heap2[outIdx++] = 128 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap2[outIdx++] = 240 | (u >> 18);
          heap2[outIdx++] = 128 | ((u >> 12) & 63);
          heap2[outIdx++] = 128 | ((u >> 6) & 63);
          heap2[outIdx++] = 128 | (u & 63);
        }
      }
      heap2[outIdx] = 0;
      return outIdx - startIdx;
    };
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) =>
      stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
    var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var str = "";
      while (!(idx >= endIdx)) {
        var u0 = heapOrArray[idx++];
        if (!u0) return str;
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode(((u0 & 31) << 6) | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 =
            ((u0 & 7) << 18) |
            (u1 << 12) |
            (u2 << 6) |
            (heapOrArray[idx++] & 63);
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        }
      }
      return str;
    };
    var UTF8ToString = (ptr, maxBytesToRead) =>
      ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    var __embind_register_std_string = (rawType, name) => {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name,
        fromWireType(value) {
          var length = HEAPU32[value >> 2];
          var payload = value + 4;
          var str;
          if (stdStringIsUTF8) {
            var decodeStartPtr = payload;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = payload + i;
              if (i == length || HEAPU8[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[payload + i]);
            }
            str = a.join("");
          }
          _free(value);
          return str;
        },
        toWireType(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var length;
          var valueIsOfTypeString = typeof value == "string";
          if (
            !(
              valueIsOfTypeString ||
              value instanceof Uint8Array ||
              value instanceof Uint8ClampedArray ||
              value instanceof Int8Array
            )
          ) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            length = lengthBytesUTF8(value);
          } else {
            length = value.length;
          }
          var base = _malloc(4 + length + 1);
          var ptr = base + 4;
          HEAPU32[base >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError(
                    "String has UTF-16 code units that do not fit in 8 bits",
                  );
                }
                HEAPU8[ptr + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, base);
          }
          return base;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        },
      });
    };
    var UTF16ToString = (ptr, maxBytesToRead) => {
      var str = "";
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[(ptr + i * 2) >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };
    var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      maxBytesToWrite ??= 2147483647;
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite =
        maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    };
    var lengthBytesUTF16 = (str) => str.length * 2;
    var UTF32ToString = (ptr, maxBytesToRead) => {
      var i = 0;
      var str = "";
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[(ptr + i * 4) >> 2];
        if (utf32 == 0) break;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        } else {
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    };
    var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
      maxBytesToWrite ??= 2147483647;
      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit =
            (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    };
    var lengthBytesUTF32 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4;
      }
      return len;
    };
    var __embind_register_std_wstring = (rawType, charSize, name) => {
      name = readLatin1String(name);
      var decodeString, encodeString, readCharAt, lengthBytesUTF;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        readCharAt = (pointer) => HEAPU16[pointer >> 1];
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        readCharAt = (pointer) => HEAPU32[pointer >> 2];
      }
      registerType(rawType, {
        name,
        fromWireType: (value) => {
          var length = HEAPU32[value >> 2];
          var str;
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || readCharAt(currentBytePtr) == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === void 0) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          _free(value);
          return str;
        },
        toWireType: (destructors, value) => {
          if (!(typeof value == "string")) {
            throwBindingError(
              `Cannot pass non-string to C++ string type ${name}`,
            );
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length / charSize;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        },
      });
    };
    var __embind_register_value_object = (
      rawType,
      name,
      constructorSignature,
      rawConstructor,
      destructorSignature,
      rawDestructor,
    ) => {
      structRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(
          constructorSignature,
          rawConstructor,
        ),
        rawDestructor: embind__requireFunction(
          destructorSignature,
          rawDestructor,
        ),
        fields: [],
      };
    };
    var __embind_register_value_object_field = (
      structType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext,
    ) => {
      structRegistrations[structType].fields.push({
        fieldName: readLatin1String(fieldName),
        getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext,
        setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext,
      });
    };
    var __embind_register_void = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType: () => void 0,
        toWireType: (destructors, o) => void 0,
      });
    };
    var __emscripten_memcpy_js = (dest, src, num) =>
      HEAPU8.copyWithin(dest, src, src + num);
    var emval_methodCallers = [];
    var __emval_call = (caller, handle, destructorsRef, args) => {
      caller = emval_methodCallers[caller];
      handle = Emval.toValue(handle);
      return caller(null, handle, destructorsRef, args);
    };
    var emval_symbols = {};
    var getStringOrSymbol = (address) => {
      var symbol = emval_symbols[address];
      if (symbol === void 0) {
        return readLatin1String(address);
      }
      return symbol;
    };
    var emval_get_global = () => {
      if (typeof globalThis == "object") {
        return globalThis;
      }
      function testGlobal(obj) {
        obj["$$$embind_global$$$"] = obj;
        var success =
          typeof $$$embind_global$$$ == "object" &&
          obj["$$$embind_global$$$"] == obj;
        if (!success) {
          delete obj["$$$embind_global$$$"];
        }
        return success;
      }
      if (typeof $$$embind_global$$$ == "object") {
        return $$$embind_global$$$;
      }
      if (typeof global == "object" && testGlobal(global)) {
        $$$embind_global$$$ = global;
      } else if (typeof self == "object" && testGlobal(self)) {
        $$$embind_global$$$ = self;
      }
      if (typeof $$$embind_global$$$ == "object") {
        return $$$embind_global$$$;
      }
      throw Error("unable to get global object.");
    };
    var __emval_get_global = (name) => {
      if (name === 0) {
        return Emval.toHandle(emval_get_global());
      } else {
        name = getStringOrSymbol(name);
        return Emval.toHandle(emval_get_global()[name]);
      }
    };
    var emval_addMethodCaller = (caller) => {
      var id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    };
    var requireRegisteredType = (rawType, humanName) => {
      var impl = registeredTypes[rawType];
      if (void 0 === impl) {
        throwBindingError(
          `${humanName} has unknown type ${getTypeName(rawType)}`,
        );
      }
      return impl;
    };
    var emval_lookupTypes = (argCount, argTypes) => {
      var a = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(
          HEAPU32[(argTypes + i * 4) >> 2],
          "parameter " + i,
        );
      }
      return a;
    };
    var reflectConstruct = Reflect.construct;
    var emval_returnValue = (returnType, destructorsRef, handle) => {
      var destructors = [];
      var result = returnType["toWireType"](destructors, handle);
      if (destructors.length) {
        HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
      }
      return result;
    };
    var __emval_get_method_caller = (argCount, argTypes, kind) => {
      var types = emval_lookupTypes(argCount, argTypes);
      var retType = types.shift();
      argCount--;
      var argN = new Array(argCount);
      var invokerFunction = (obj, func, destructorsRef, args) => {
        var offset = 0;
        for (var i = 0; i < argCount; ++i) {
          argN[i] = types[i]["readValueFromPointer"](args + offset);
          offset += types[i]["argPackAdvance"];
        }
        var rv =
          kind === 1 ? reflectConstruct(func, argN) : func.apply(obj, argN);
        return emval_returnValue(retType, destructorsRef, rv);
      };
      var functionName = `methodCaller<(${types.map((t) => t.name).join(", ")}) => ${retType.name}>`;
      return emval_addMethodCaller(
        createNamedFunction(functionName, invokerFunction),
      );
    };
    var __emval_run_destructors = (handle) => {
      var destructors = Emval.toValue(handle);
      runDestructors(destructors);
      __emval_decref(handle);
    };
    var _abort = () => {
      abort("");
    };
    var getHeapMax = () => 2147483648;
    var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {}
    };
    var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var alignUp = (x, multiple) =>
        x + ((multiple - (x % multiple)) % multiple);
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(
          overGrownHeapSize,
          requestedSize + 100663296,
        );
        var newSize = Math.min(
          maxHeapSize,
          alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
        );
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang =
          (
            (typeof navigator == "object" &&
              navigator.languages &&
              navigator.languages[0]) ||
            "C"
          ).replace("-", "_") + ".UTF-8";
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: lang,
          _: getExecutableName(),
        };
        for (var x in ENV) {
          if (ENV[x] === void 0) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++] = str.charCodeAt(i);
      }
      HEAP8[buffer] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[(__environ + i * 4) >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => (bufSize += string.length + 1));
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    var runtimeKeepaliveCounter = 0;
    var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
    var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module9["onExit"]?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
    var exitJS = (status, implicit) => {
      EXITSTATUS = status;
      _proc_exit(status);
    };
    var _exit = exitJS;
    var _fd_close = (fd) => 52;
    var convertI32PairToI53Checked = (lo, hi) =>
      (hi + 2097152) >>> 0 < 4194305 - !!lo
        ? (lo >>> 0) + hi * 4294967296
        : NaN;
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
      return 70;
    }
    var printCharBuffers = [null, [], []];
    var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
    var _fd_write = (fd, iov, iovcnt, pnum) => {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[(iov + 4) >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAPU32[pnum >> 2] = num;
      return 0;
    };
    InternalError = Module9["InternalError"] = class InternalError extends (
      Error
    ) {
      constructor(message) {
        super(message);
        this.name = "InternalError";
      }
    };
    embind_init_charCodes();
    BindingError = Module9["BindingError"] = class BindingError extends Error {
      constructor(message) {
        super(message);
        this.name = "BindingError";
      }
    };
    init_emval();
    UnboundTypeError = Module9["UnboundTypeError"] = extendError(
      Error,
      "UnboundTypeError",
    );
    var wasmImports = {
      j: ___cxa_throw,
      k: __embind_finalize_value_object,
      n: __embind_register_bigint,
      h: __embind_register_bool,
      z: __embind_register_emval,
      f: __embind_register_float,
      e: __embind_register_function,
      c: __embind_register_integer,
      a: __embind_register_memory_view,
      g: __embind_register_std_string,
      d: __embind_register_std_wstring,
      l: __embind_register_value_object,
      b: __embind_register_value_object_field,
      i: __embind_register_void,
      s: __emscripten_memcpy_js,
      y: __emval_call,
      u: __emval_decref,
      A: __emval_get_global,
      x: __emval_get_method_caller,
      w: __emval_run_destructors,
      o: _abort,
      p: _emscripten_resize_heap,
      q: _environ_get,
      r: _environ_sizes_get,
      B: _exit,
      t: _fd_close,
      m: _fd_seek,
      v: _fd_write,
    };
    var wasmExports = createWasm();
    var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["D"])();
    var ___getTypeName = (a0) => (___getTypeName = wasmExports["E"])(a0);
    var _malloc = (a0) => (_malloc = wasmExports["F"])(a0);
    var _free = (a0) => (_free = wasmExports["G"])(a0);
    var __emscripten_stack_restore = (a0) =>
      (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(
        a0,
      );
    var __emscripten_stack_alloc = (a0) =>
      (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
    var _emscripten_stack_get_current = () =>
      (_emscripten_stack_get_current =
        wasmExports["emscripten_stack_get_current"])();
    var ___cxa_increment_exception_refcount = (a0) =>
      (___cxa_increment_exception_refcount =
        wasmExports["__cxa_increment_exception_refcount"])(a0);
    var ___cxa_is_pointer_type = (a0) =>
      (___cxa_is_pointer_type = wasmExports["I"])(a0);
    var dynCall_jiji = (Module9["dynCall_jiji"] = (a0, a1, a2, a3, a4) =>
      (dynCall_jiji = Module9["dynCall_jiji"] = wasmExports["J"])(
        a0,
        a1,
        a2,
        a3,
        a4,
      ));
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run() {
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module9["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module9);
        if (Module9["onRuntimeInitialized"]) Module9["onRuntimeInitialized"]();
        postRun();
      }
      if (Module9["setStatus"]) {
        Module9["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module9["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module9["preInit"]) {
      if (typeof Module9["preInit"] == "function")
        Module9["preInit"] = [Module9["preInit"]];
      while (Module9["preInit"].length > 0) {
        Module9["preInit"].pop()();
      }
    }
    run();
    return readyPromise;
  };
})();
var mozjpeg_enc_default = Module5;

// node_modules/@jsquash/jpeg/meta.js
var defaultOptions3 = {
  quality: 75,
  baseline: false,
  arithmetic: false,
  progressive: true,
  optimize_coding: true,
  smoothing: 0,
  color_space: 3,
  quant_table: 3,
  trellis_multipass: false,
  trellis_opt_zero: false,
  trellis_opt_table: false,
  trellis_loops: 1,
  auto_subsample: true,
  chroma_subsample: 2,
  separate_chroma_quality: false,
  chroma_quality: 75,
};

// node_modules/@jsquash/jpeg/utils.js
function initEmscriptenModule3(
  moduleFactory,
  wasmModule,
  moduleOptionOverrides = {},
) {
  let instantiateWasm;
  if (wasmModule) {
    instantiateWasm = (imports, callback) => {
      const instance = new WebAssembly.Instance(wasmModule, imports);
      callback(instance);
      return instance.exports;
    };
  }
  return moduleFactory({
    // Just to be safe, don't automatically invoke any wasm functions
    noInitialRun: true,
    instantiateWasm,
    ...moduleOptionOverrides,
  });
}

// node_modules/@jsquash/jpeg/encode.js
var emscriptenModule3;
async function init3(module, moduleOptionOverrides) {
  let actualModule = module;
  let actualOptions = moduleOptionOverrides;
  if (arguments.length === 1 && !(module instanceof WebAssembly.Module)) {
    actualModule = void 0;
    actualOptions = module;
  }
  emscriptenModule3 = initEmscriptenModule3(
    mozjpeg_enc_default,
    actualModule,
    actualOptions,
  );
}
async function encode3(data, options = {}) {
  if (!emscriptenModule3) init3();
  const module = await emscriptenModule3;
  const _options = { ...defaultOptions3, ...options };
  const resultView = module.encode(
    data.data,
    data.width,
    data.height,
    _options,
  );
  return resultView.buffer;
}

// node_modules/@jsquash/jxl/meta.js
var defaultOptions4 = {
  effort: 7,
  quality: 75,
  progressive: false,
  epf: -1,
  lossyPalette: false,
  decodingSpeedTier: 0,
  photonNoiseIso: 0,
  lossyModular: false,
  lossless: false,
};

// node_modules/@jsquash/jxl/utils.js
function initEmscriptenModule4(
  moduleFactory,
  wasmModule,
  moduleOptionOverrides = {},
) {
  let instantiateWasm;
  if (wasmModule) {
    instantiateWasm = (imports, callback) => {
      const instance = new WebAssembly.Instance(wasmModule, imports);
      callback(instance);
      return instance.exports;
    };
  }
  return moduleFactory({
    // Just to be safe, don't automatically invoke any wasm functions
    noInitialRun: true,
    instantiateWasm,
    ...moduleOptionOverrides,
  });
}

// node_modules/@jsquash/jxl/encode.js
var emscriptenModule4;
var isRunningInNode2 = () =>
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node";
var isRunningInCloudflareWorker2 = () => {
  var _a;
  return (
    ((_a = globalThis.caches) === null || _a === void 0
      ? void 0
      : _a.default) !== void 0
  );
};
async function init4(module, moduleOptionOverrides) {
  let actualModule = module;
  let actualOptions = moduleOptionOverrides;
  if (arguments.length === 1 && !(module instanceof WebAssembly.Module)) {
    actualModule = void 0;
    actualOptions = module;
  }
  if (
    !isRunningInNode2() &&
    !isRunningInCloudflareWorker2() &&
    (await threads())
  ) {
    if (await simd()) {
      const jxlEncoder3 = await Promise.resolve().then(
        () => (init_jxl_enc_mt_simd(), jxl_enc_mt_simd_exports),
      );
      emscriptenModule4 = initEmscriptenModule4(
        jxlEncoder3.default,
        actualModule,
        actualOptions,
      );
      return emscriptenModule4;
    }
    const jxlEncoder2 = await Promise.resolve().then(
      () => (init_jxl_enc_mt(), jxl_enc_mt_exports),
    );
    emscriptenModule4 = initEmscriptenModule4(
      jxlEncoder2.default,
      actualModule,
      actualOptions,
    );
    return emscriptenModule4;
  }
  const jxlEncoder = await Promise.resolve().then(
    () => (init_jxl_enc(), jxl_enc_exports),
  );
  emscriptenModule4 = initEmscriptenModule4(
    jxlEncoder.default,
    actualModule,
    actualOptions,
  );
  return emscriptenModule4;
}
async function encode4(data, options = {}) {
  if (!emscriptenModule4) emscriptenModule4 = init4();
  const module = await emscriptenModule4;
  const _options = { ...defaultOptions4, ...options };
  if (_options.lossless) {
    if (options.quality !== void 0 && options.quality !== 100) {
      console.warn(
        "JXL lossless: Quality setting is ignored when lossless is enabled (quality must be 100).",
      );
    }
    if (options.lossyModular) {
      console.warn(
        "JXL lossless: LossyModular setting is ignored when lossless is enabled (lossyModular must be false).",
      );
    }
    if (options.lossyPalette) {
      console.warn(
        "JXL lossless: LossyPalette setting is ignored when lossless is enabled (lossyPalette must be false).",
      );
    }
    _options.quality = 100;
    _options.lossyModular = false;
    _options.lossyPalette = false;
  }
  const resultView = module.encode(
    data.data,
    data.width,
    data.height,
    _options,
  );
  if (!resultView) {
    throw new Error("Encoding error.");
  }
  return resultView.buffer;
}

// node_modules/@jsquash/oxipng/meta.js
var defaultOptions5 = {
  level: 2,
  interlace: false,
  optimiseAlpha: false,
};

// node_modules/@jsquash/oxipng/optimise.js
async function initMT(moduleOrPath) {
  const {
    default: init6,
    initThreadPool: initThreadPool2,
    optimise: optimise4,
    optimise_raw: optimise_raw3,
  } = await Promise.resolve().then(
    () => (init_squoosh_oxipng(), squoosh_oxipng_exports),
  );
  await init6(moduleOrPath);
  await initThreadPool2(globalThis.navigator.hardwareConcurrency);
  return { optimise: optimise4, optimise_raw: optimise_raw3 };
}
async function initST(moduleOrPath) {
  const {
    default: init6,
    optimise: optimise4,
    optimise_raw: optimise_raw3,
  } = await Promise.resolve().then(
    () => (init_squoosh_oxipng2(), squoosh_oxipng_exports2),
  );
  await init6(moduleOrPath);
  return { optimise: optimise4, optimise_raw: optimise_raw3 };
}
var wasmReady;
async function init5(moduleOrPath) {
  var _a;
  if (!wasmReady) {
    const hasHardwareConcurrency =
      ((_a = globalThis.navigator) === null || _a === void 0
        ? void 0
        : _a.hardwareConcurrency) > 1;
    const isWorker =
      typeof self !== "undefined" &&
      typeof WorkerGlobalScope !== "undefined" &&
      self instanceof WorkerGlobalScope;
    if (isWorker && hasHardwareConcurrency && (await threads())) {
      wasmReady = initMT(moduleOrPath);
    } else {
      wasmReady = initST(moduleOrPath);
    }
  }
  return wasmReady;
}
async function optimise3(data, options = {}) {
  const _options = { ...defaultOptions5, ...options };
  const { optimise: optimise4, optimise_raw: optimise_raw3 } = await init5();
  if (data instanceof ImageData) {
    return optimise_raw3(
      data.data,
      data.width,
      data.height,
      _options.level,
      _options.interlace,
      _options.optimiseAlpha,
    ).buffer;
  }
  return optimise4(
    new Uint8Array(data),
    _options.level,
    _options.interlace,
    _options.optimiseAlpha,
  ).buffer;
}

// assets/js/img-opti.js
var import_jszip = __toESM(require_jszip_min(), 1);
var modeSingle = document.getElementById("mode-single");
var modeBatch = document.getElementById("mode-batch");
var singlePanel = document.getElementById("single-panel");
var batchPanel = document.getElementById("batch-panel");
var singleDropzone = document.getElementById("single-dropzone");
var singleInput = document.getElementById("single-input");
var batchDropzone = document.getElementById("batch-dropzone");
var batchInput = document.getElementById("batch-input");
var batchList = document.getElementById("batch-list");
var batchCount = document.getElementById("batch-count");
var batchOptimize = document.getElementById("batch-optimize");
var batchDownload = document.getElementById("batch-download");
var batchProgress = document.getElementById("batch-progress");
var batchProgressBar = document.getElementById("batch-progress-bar");
var batchStatus = document.getElementById("batch-status");
var format = document.getElementById("format");
var quality = document.getElementById("quality");
var qualityValue = document.getElementById("quality-value");
var qualityWrapper = document.getElementById("quality-wrapper");
var resizeEnabled = document.getElementById("resize-enabled");
var resizeOptions = document.getElementById("resize-options");
var widthInput = document.getElementById("width");
var heightInput = document.getElementById("height");
var keepRatio = document.getElementById("keep-ratio");
var formatSelect = document.getElementById("format-select");
var formatTrigger = document.getElementById("format-trigger");
var formatOptions = document.getElementById("format-options");
var formatLabel = document.getElementById("format-label");
var formatDot = document.getElementById("format-dot");
var formatChevron = document.getElementById("format-chevron");
var formatOptionElements =
  formatOptions?.querySelectorAll(".format-option") || [];
var batchFormat = document.getElementById("batch-format");
var batchQuality = document.getElementById("batch-quality");
var batchQualityValue = document.getElementById("batch-quality-value");
var batchQualityWrapper = document.getElementById("batch-quality-wrapper");
var batchResizeEnabled = document.getElementById("batch-resize-enabled");
var batchResizeOptions = document.getElementById("batch-resize-options");
var batchWidthInput = document.getElementById("batch-width");
var batchHeightInput = document.getElementById("batch-height");
var batchKeepRatio = document.getElementById("batch-keep-ratio");
var batchFormatSelect = document.getElementById("batch-format-select");
var batchFormatTrigger = document.getElementById("batch-format-trigger");
var batchFormatOptions = document.getElementById("batch-format-options");
var batchFormatLabel = document.getElementById("batch-format-label");
var batchFormatDot = document.getElementById("batch-format-dot");
var batchFormatChevron = document.getElementById("batch-format-chevron");
var batchFormatOptionElements =
  batchFormatOptions?.querySelectorAll(".batch-format-option") || [];
var singleFile = null;
var singleBlob = null;
var singleOriginalUrl = null;
var singleOptimizedUrl = null;
var originalWidth = 0;
var originalHeight = 0;
var optimizationId = 0;
var batchFiles = [];
var batchResults = [];
var batchZipBlob = null;
var formatSelectOpen = false;
var batchFormatSelectOpen = false;
function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
function getExtension(formatValue = format.value) {
  return formatValue === "jpeg" ? "jpg" : formatValue;
}
function getSaving(original, optimized) {
  if (!original || optimized >= original) {
    return "0%";
  }
  return `${((1 - optimized / original) * 100).toFixed(1)}%`;
}
function getOutputName(name, formatValue = format.value) {
  return `${name.replace(/\.[^/.]+$/, "")}.${getExtension(formatValue)}`;
}
function isImage(file) {
  return file?.type.startsWith("image/");
}
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function invalidateBatchResults() {
  batchResults = [];
  batchZipBlob = null;
  batchDownload?.classList.add("hidden");
}
function setMode(mode) {
  const isSingle = mode === "single";
  singlePanel?.classList.toggle("hidden", !isSingle);
  batchPanel?.classList.toggle("hidden", isSingle);
  modeSingle?.classList.toggle("bg-blue-500/15", isSingle);
  modeSingle?.classList.toggle("text-white", isSingle);
  modeSingle?.classList.toggle("text-white/45", !isSingle);
  modeSingle?.setAttribute("aria-pressed", String(isSingle));
  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("bg-blue-400/10", isSingle);
  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("bg-white/[0.035]", !isSingle);
  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("text-blue-300", isSingle);
  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("text-white/35", !isSingle);
  modeBatch?.classList.toggle("bg-blue-500/15", !isSingle);
  modeBatch?.classList.toggle("text-white", !isSingle);
  modeBatch?.classList.toggle("text-white/45", isSingle);
  modeBatch?.setAttribute("aria-pressed", String(!isSingle));
  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("bg-blue-400/10", !isSingle);
  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("bg-white/[0.035]", isSingle);
  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("text-blue-300", !isSingle);
  modeBatch?.querySelector("span")?.classList.toggle("text-white/35", isSingle);
  closeFormatSelect();
  closeBatchFormatSelect();
}
modeSingle?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  setMode("single");
});
modeBatch?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  setMode("batch");
});
singleDropzone?.addEventListener("click", () => {
  singleInput.value = "";
  singleInput.click();
});
singleInput?.addEventListener("change", () => {
  const file = singleInput.files?.[0];
  if (file) {
    loadSingleFile(file);
  }
});
singleDropzone?.addEventListener("dragover", (event) => {
  event.preventDefault();
  singleDropzone.classList.add(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});
singleDropzone?.addEventListener("dragleave", () => {
  singleDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});
singleDropzone?.addEventListener("drop", (event) => {
  event.preventDefault();
  singleDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
  const file = [...event.dataTransfer.files].find(isImage);
  if (file) {
    loadSingleFile(file);
  }
});
async function loadSingleFile(file) {
  if (!isImage(file)) {
    return;
  }
  optimizationId++;
  singleFile = file;
  singleBlob = null;
  if (singleOriginalUrl) {
    URL.revokeObjectURL(singleOriginalUrl);
  }
  if (singleOptimizedUrl) {
    URL.revokeObjectURL(singleOptimizedUrl);
    singleOptimizedUrl = null;
  }
  singleOriginalUrl = URL.createObjectURL(file);
  const preview = document.getElementById("single-original-preview");
  if (preview) {
    preview.src = singleOriginalUrl;
  }
  try {
    const bitmap = await createImageBitmap(file);
    originalWidth = bitmap.width;
    originalHeight = bitmap.height;
    bitmap.close();
  } catch (error) {
    console.error(error);
    return;
  }
  const name = document.getElementById("single-name");
  const info = document.getElementById("single-info");
  const originalSize = document.getElementById("single-original-size");
  const singleWidth = document.getElementById("single-width");
  const statsOriginal = document.getElementById("single-stats-original");
  const tool = document.getElementById("single-tool");
  if (name) {
    name.textContent = file.name;
  }
  if (info) {
    info.textContent = `${originalWidth} \xD7 ${originalHeight}`;
  }
  if (originalSize) {
    originalSize.textContent = formatBytes(file.size);
  }
  if (singleWidth) {
    singleWidth.textContent = `${originalWidth} \xD7 ${originalHeight} px`;
  }
  if (statsOriginal) {
    statsOriginal.textContent = formatBytes(file.size);
  }
  widthInput.value = originalWidth;
  heightInput.value = originalHeight;
  tool?.classList.remove("hidden");
  singleDropzone?.classList.add("hidden");
  await optimizeSingle();
}
var singleOriginalPreview = document.getElementById("single-original-preview");
var singleOptimizedPreview = document.getElementById(
  "single-optimized-preview",
);
singleOriginalPreview?.addEventListener("click", () => {
  if (singleOriginalUrl) {
    window.open(singleOriginalUrl, "_blank", "noopener,noreferrer");
  }
});
singleOptimizedPreview?.addEventListener("click", () => {
  if (singleOptimizedUrl) {
    window.open(singleOptimizedUrl, "_blank", "noopener,noreferrer");
  }
});
async function encodeImage(file, settings = {}) {
  const bitmap = await createImageBitmap(file);
  const {
    formatValue = format.value,
    qualityValue: qualityValue2 = Number(quality.value),
    resize = resizeEnabled.checked,
    width = widthInput.value,
    height = heightInput.value,
  } = settings;
  let targetWidth = bitmap.width;
  let targetHeight = bitmap.height;
  if (resize) {
    targetWidth = Math.max(1, Number(width)) || bitmap.width;
    targetHeight = Math.max(1, Number(height)) || bitmap.height;
  }
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });
  if (!ctx) {
    bitmap.close();
    throw new Error("Nie uda\u0142o si\u0119 utworzy\u0107 Canvas.");
  }
  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
  bitmap.close();
  const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
  let outputBuffer;
  let outputMime;
  if (formatValue === "webp") {
    outputBuffer = await encode(imageData, {
      quality: Number(qualityValue2),
    });
    outputMime = "image/webp";
  }
  if (formatValue === "avif") {
    outputBuffer = await encode2(imageData, {
      quality: Number(qualityValue2),
    });
    outputMime = "image/avif";
  }
  if (formatValue === "jpeg") {
    outputBuffer = await encode3(imageData, {
      quality: Number(qualityValue2),
    });
    outputMime = "image/jpeg";
  }
  if (formatValue === "jxl") {
    outputBuffer = await encode4(imageData, {
      quality: Number(qualityValue2),
      effort: 7,
    });
    outputMime = "image/jxl";
  }
  if (formatValue === "png") {
    outputBuffer = await optimise3(imageData, {
      level: 6,
      optimiseAlpha: true,
    });
    outputMime = "image/png";
  }
  if (!outputBuffer) {
    throw new Error("Nieobs\u0142ugiwany format.");
  }
  return new Blob([outputBuffer], {
    type: outputMime,
  });
}
async function optimizeSingle() {
  if (!singleFile) {
    return;
  }
  const currentId = ++optimizationId;
  const optimizedSize = document.getElementById("single-optimized-size");
  const optimizedPreview = document.getElementById("single-optimized-preview");
  const statsOptimized = document.getElementById("single-stats-optimized");
  const saving = document.getElementById("single-saving");
  if (optimizedSize) {
    optimizedSize.textContent = "Przetwarzanie...";
  }
  if (statsOptimized) {
    statsOptimized.textContent = "\u2026";
  }
  if (saving) {
    saving.textContent = "\u2026";
  }
  try {
    const blob = await encodeImage(singleFile, {
      formatValue: format.value,
      qualityValue: Number(quality.value),
      resize: resizeEnabled.checked,
      width: widthInput.value,
      height: heightInput.value,
    });
    if (currentId !== optimizationId) {
      return;
    }
    singleBlob = blob;
    if (singleOptimizedUrl) {
      URL.revokeObjectURL(singleOptimizedUrl);
    }
    singleOptimizedUrl = URL.createObjectURL(blob);
    if (optimizedPreview) {
      optimizedPreview.src = singleOptimizedUrl;
    }
    if (optimizedSize) {
      optimizedSize.textContent = formatBytes(blob.size);
    }
    if (statsOptimized) {
      statsOptimized.textContent = formatBytes(blob.size);
    }
    if (saving) {
      saving.textContent = getSaving(singleFile.size, blob.size);
    }
    updateDownloadButton();
  } catch (error) {
    console.error("Single optimization error:", error);
    if (currentId !== optimizationId) {
      return;
    }
    if (optimizedSize) {
      optimizedSize.textContent = "B\u0142\u0105d";
    }
    if (statsOptimized) {
      statsOptimized.textContent = "B\u0142\u0105d";
    }
    if (saving) {
      saving.textContent = "\u2014";
    }
  }
}
function updateDownloadButton() {
  const button = document.getElementById("single-download");
  if (!button) {
    return;
  }
  button.innerHTML = `
    <i class="fad fa-download mr-2"></i>
    Pobierz ${getExtension().toUpperCase()}
  `;
}
document.getElementById("single-download")?.addEventListener("click", () => {
  if (!singleBlob || !singleFile) {
    return;
  }
  const url = URL.createObjectURL(singleBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getOutputName(singleFile.name, format.value);
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e3);
});
document.getElementById("single-change")?.addEventListener("click", () => {
  singleInput.value = "";
  singleInput.click();
});
resizeEnabled?.addEventListener("change", () => {
  resizeOptions.classList.toggle("hidden", !resizeEnabled.checked);
  if (singleFile) {
    optimizeSingle();
  }
});
keepRatio?.addEventListener("change", () => {
  if (keepRatio.checked) {
    updateHeightFromWidth();
  }
  if (singleFile) {
    optimizeSingle();
  }
});
widthInput?.addEventListener("input", () => {
  if (keepRatio.checked) {
    updateHeightFromWidth();
  }
  clearTimeout(widthInput._timer);
  widthInput._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});
heightInput?.addEventListener("input", () => {
  if (keepRatio.checked) {
    updateWidthFromHeight();
  }
  clearTimeout(heightInput._timer);
  heightInput._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});
function updateHeightFromWidth() {
  if (!keepRatio.checked || !originalWidth) {
    return;
  }
  const width = Number(widthInput.value);
  if (!width || width < 1) {
    return;
  }
  heightInput.value = Math.round(width * (originalHeight / originalWidth));
}
function updateWidthFromHeight() {
  if (!keepRatio.checked || !originalHeight) {
    return;
  }
  const height = Number(heightInput.value);
  if (!height || height < 1) {
    return;
  }
  widthInput.value = Math.round(height * (originalWidth / originalHeight));
}
quality?.addEventListener("input", () => {
  qualityValue.textContent = `${quality.value}%`;
  clearTimeout(quality._timer);
  quality._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});
format?.addEventListener("change", () => {
  updateQualityVisibility();
  updateFormatSelect();
  if (singleFile) {
    optimizeSingle();
  }
});
function updateQualityVisibility() {
  const isPng = format.value === "png";
  qualityWrapper?.classList.toggle("hidden", isPng);
  updateDownloadButton();
}
var formatColors = {
  webp: {
    dot: "bg-sky-400",
    text: "text-sky-300",
    shadow: "shadow-[0_0_10px_rgba(56,189,248,0.45)]",
  },
  avif: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    shadow: "shadow-[0_0_10px_rgba(167,139,250,0.45)]",
  },
  jpeg: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    shadow: "shadow-[0_0_10px_rgba(251,191,36,0.45)]",
  },
  jxl: {
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    shadow: "shadow-[0_0_10px_rgba(34,211,238,0.45)]",
  },
  png: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    shadow: "shadow-[0_0_10px_rgba(52,211,153,0.45)]",
  },
};
var batchFormatColors = formatColors;
function setupDropdown(options) {
  if (!options) {
    return;
  }
  if (options.parentElement !== document.body) {
    document.body.appendChild(options);
  }
  options.style.position = "fixed";
  options.style.zIndex = "99999";
  options.style.margin = "0";
}
function positionDropdown(trigger, options) {
  if (!trigger || !options) {
    return;
  }
  const triggerRect = trigger.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight;
  const gap = 8;
  const padding = 8;
  options.style.position = "fixed";
  options.style.width = `${triggerRect.width}px`;
  options.style.zIndex = "99999";
  const previousTransition = options.style.transition;
  options.style.transition = "none";
  options.style.left = `${triggerRect.left}px`;
  options.style.top = `${triggerRect.bottom + gap}px`;
  void options.offsetHeight;
  const dropdownHeight = options.getBoundingClientRect().height;
  const spaceBelow = viewportHeight - triggerRect.bottom - gap - padding;
  const spaceAbove = triggerRect.top - gap - padding;
  const shouldOpenAbove =
    spaceBelow < dropdownHeight && spaceAbove > spaceBelow;
  let top = shouldOpenAbove
    ? triggerRect.top - dropdownHeight - gap
    : triggerRect.bottom + gap;
  top = Math.max(
    padding,
    Math.min(top, viewportHeight - dropdownHeight - padding),
  );
  let left = triggerRect.left;
  if (left + triggerRect.width > viewportWidth - padding) {
    left = viewportWidth - triggerRect.width - padding;
  }
  left = Math.max(padding, left);
  options.style.left = `${left}px`;
  options.style.top = `${top}px`;
  options.dataset.placement = shouldOpenAbove ? "top" : "bottom";
  options.style.transition = previousTransition;
}
function prepareDropdown(options) {
  options?.classList.add(
    "pointer-events-none",
    "invisible",
    "opacity-0",
    "scale-95",
  );
  options?.classList.remove("opacity-100", "scale-100");
}
setupDropdown(formatOptions);
function openFormatSelect() {
  if (!formatTrigger || !formatOptions || formatSelectOpen) {
    return;
  }
  formatSelectOpen = true;
  setupDropdown(formatOptions);
  prepareDropdown(formatOptions);
  positionDropdown(formatTrigger, formatOptions);
  void formatOptions.offsetHeight;
  formatOptions.classList.remove("invisible", "pointer-events-none");
  formatTrigger.setAttribute("aria-expanded", "true");
  formatChevron?.classList.add("rotate-180");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!formatSelectOpen) {
        return;
      }
      formatOptions.classList.remove("opacity-0", "scale-95");
      formatOptions.classList.add("opacity-100", "scale-100");
    });
  });
}
function closeFormatSelect() {
  if (!formatOptions || !formatTrigger) {
    return;
  }
  if (!formatSelectOpen) {
    prepareDropdown(formatOptions);
    formatTrigger.setAttribute("aria-expanded", "false");
    formatChevron?.classList.remove("rotate-180");
    return;
  }
  formatSelectOpen = false;
  formatOptions.classList.remove("opacity-100", "scale-100");
  formatOptions.classList.add("opacity-0", "scale-95");
  formatTrigger.setAttribute("aria-expanded", "false");
  formatChevron?.classList.remove("rotate-180");
  window.setTimeout(() => {
    if (!formatSelectOpen) {
      formatOptions.classList.add("pointer-events-none", "invisible");
    }
  }, 200);
}
function updateFormatSelect() {
  if (!format || !formatOptions || !formatLabel || !formatDot) {
    return;
  }
  const value = format.value;
  const selectedOption = formatOptions.querySelector(`[data-value="${value}"]`);
  if (!selectedOption) {
    return;
  }
  const label = selectedOption.querySelector("span.flex span:last-child");
  formatLabel.textContent = label?.textContent?.trim() || value.toUpperCase();
  const colors = formatColors[value];
  if (!colors) {
    return;
  }
  formatDot.className = `
    h-2
    w-2
    rounded-full
    ${colors.dot}
    ${colors.shadow}
    transition-all
    duration-300
  `;
  formatLabel.className = `
    transition-colors
    duration-300
    ${colors.text}
  `;
  formatOptionElements.forEach((option) => {
    const selected = option.dataset.value === value;
    const check = option.querySelector(".format-check");
    option.setAttribute("aria-selected", String(selected));
    check?.classList.toggle("opacity-100", selected);
    check?.classList.toggle("opacity-0", !selected);
    option.classList.toggle("bg-white/[0.07]", selected);
    option.classList.toggle("text-white", selected);
    option.classList.toggle("text-white/65", !selected);
  });
}
formatTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (formatSelectOpen) {
    closeFormatSelect();
  } else {
    openFormatSelect();
  }
});
formatOptionElements.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const value = option.dataset.value;
    if (!value) {
      return;
    }
    format.value = value;
    format.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );
    updateFormatSelect();
    closeFormatSelect();
  });
});
formatTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeFormatSelect();
    formatTrigger.focus();
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (formatSelectOpen) {
      closeFormatSelect();
    } else {
      openFormatSelect();
    }
  }
});
batchDropzone?.addEventListener("click", () => {
  batchInput.value = "";
  batchInput.click();
});
batchInput?.addEventListener("change", () => {
  addBatchFiles([...batchInput.files]);
});
batchDropzone?.addEventListener("dragover", (event) => {
  event.preventDefault();
  batchDropzone.classList.add(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});
batchDropzone?.addEventListener("dragleave", () => {
  batchDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});
batchDropzone?.addEventListener("drop", (event) => {
  event.preventDefault();
  batchDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
  addBatchFiles([...event.dataTransfer.files]);
});
function addBatchFiles(files) {
  const images = files.filter(isImage);
  for (const file of images) {
    const exists = batchFiles.some(
      (item) =>
        item.name === file.name &&
        item.size === file.size &&
        item.lastModified === file.lastModified,
    );
    if (!exists) {
      batchFiles.push(file);
    }
  }
  invalidateBatchResults();
  renderBatchList();
}
function renderBatchList() {
  batchList.innerHTML = "";
  batchCount.textContent =
    batchFiles.length === 1
      ? "1 zdj\u0119cie"
      : `${batchFiles.length} zdj\u0119\u0107`;
  if (!batchFiles.length) {
    batchList.innerHTML = `
      <div class="py-10 text-center text-sm text-white/30">
        Nie dodano jeszcze \u017Cadnych zdj\u0119\u0107
      </div>
    `;
    batchOptimize.disabled = true;
    return;
  }
  batchOptimize.disabled = false;
  batchFiles.forEach((file, index) => {
    const row = document.createElement("div");
    row.className =
      "flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3";
    row.innerHTML = `
      <div class="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-black/20">
        <img
          class="batch-thumb h-full w-full object-cover"
          alt=""
        />
      </div>

      <div class="min-w-0 flex-1">
        <div class="truncate text-sm text-white/80">
          ${escapeHtml(file.name)}
        </div>

        <div class="mt-0.5 text-xs text-white/30">
          ${formatBytes(file.size)}
        </div>

        <div
          class="batch-file-status mt-1 text-xs text-white/25"
          data-index="${index}"
        >
          Oczekuje
        </div>
      </div>

      <button
        type="button"
        class="batch-remove h-8 w-8 shrink-0 rounded-lg text-white/30 transition hover:bg-red-400/10 hover:text-red-300"
        data-index="${index}"
        title="Usu\u0144"
      >
        <i class="fad fa-xmark"></i>
      </button>
    `;
    const image = row.querySelector(".batch-thumb");
    const imageUrl = URL.createObjectURL(file);
    image.src = imageUrl;
    image.addEventListener("load", () => URL.revokeObjectURL(imageUrl), {
      once: true,
    });
    batchList.appendChild(row);
  });
  batchList.querySelectorAll(".batch-remove").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      batchFiles.splice(index, 1);
      invalidateBatchResults();
      renderBatchList();
    });
  });
}
batchOptimize?.addEventListener("click", async () => {
  if (!batchFiles.length) {
    return;
  }
  batchOptimize.disabled = true;
  batchDownload.classList.add("hidden");
  batchProgress.classList.remove("hidden");
  batchProgressBar.style.width = "0%";
  batchStatus.textContent = `Optymalizowanie 0 / ${batchFiles.length}`;
  batchResults = [];
  batchZipBlob = null;
  for (let i = 0; i < batchFiles.length; i++) {
    const file = batchFiles[i];
    const status = batchList.querySelector(
      `.batch-file-status[data-index="${i}"]`,
    );
    if (status) {
      status.textContent = "Przetwarzanie...";
      status.className = "batch-file-status mt-1 text-xs text-blue-300";
    }
    try {
      const blob = await encodeImage(file, {
        formatValue: batchFormat.value,
        qualityValue: Number(batchQuality.value),
        resize: batchResizeEnabled.checked,
        width: batchWidthInput.value,
        height: batchHeightInput.value,
      });
      batchResults.push({
        file,
        blob,
        name: getOutputName(file.name, batchFormat.value),
      });
      if (status) {
        status.textContent = `Gotowe \xB7 ${formatBytes(blob.size)}`;
        status.className = "batch-file-status mt-1 text-xs text-emerald-300";
      }
    } catch (error) {
      console.error(`B\u0142\u0105d optymalizacji ${file.name}:`, error);
      if (status) {
        status.textContent = "B\u0142\u0105d";
        status.className = "batch-file-status mt-1 text-xs text-red-300";
      }
    }
    const progress = ((i + 1) / batchFiles.length) * 100;
    batchProgressBar.style.width = `${progress}%`;
    batchStatus.textContent = `Optymalizowanie ${i + 1} / ${batchFiles.length}`;
  }
  if (!batchResults.length) {
    batchStatus.textContent =
      "Nie uda\u0142o si\u0119 zoptymalizowa\u0107 plik\xF3w.";
    batchOptimize.disabled = false;
    return;
  }
  batchStatus.textContent = `Gotowe \xB7 ${batchResults.length} / ${batchFiles.length}`;
  await createBatchZip();
  batchOptimize.disabled = false;
});
async function createBatchZip() {
  const zip = new import_jszip.default();
  for (const result of batchResults) {
    zip.file(result.name, result.blob);
  }
  batchStatus.textContent = "Tworzenie ZIP...";
  batchZipBlob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: {
      level: 6,
    },
  });
  batchStatus.textContent = `Gotowe \xB7 ${batchResults.length} plik\xF3w`;
  batchDownload.classList.remove("hidden");
}
function getBatchZipName() {
  const now = /* @__PURE__ */ new Date();
  const pad = (value) => String(value).padStart(2, "0");
  const date = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
  const time = `${pad(now.getHours())}.${pad(now.getMinutes())}`;
  const selectedFormat = batchFormat.value.toUpperCase();
  const formatPart =
    batchFormat.value === "png"
      ? selectedFormat
      : `${selectedFormat}${batchQuality.value}`;
  return `OptiMAR-${batchFiles.length}-${formatPart}-${date}-${time}.zip`;
}
batchDownload?.addEventListener("click", () => {
  if (!batchZipBlob) {
    return;
  }
  const url = URL.createObjectURL(batchZipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getBatchZipName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e3);
});
setupDropdown(batchFormatOptions);
function openBatchFormatSelect() {
  if (!batchFormatTrigger || !batchFormatOptions || batchFormatSelectOpen) {
    return;
  }
  batchFormatSelectOpen = true;
  setupDropdown(batchFormatOptions);
  prepareDropdown(batchFormatOptions);
  positionDropdown(batchFormatTrigger, batchFormatOptions);
  void batchFormatOptions.offsetHeight;
  batchFormatOptions.classList.remove("invisible", "pointer-events-none");
  batchFormatTrigger.setAttribute("aria-expanded", "true");
  batchFormatChevron?.classList.add("rotate-180");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!batchFormatSelectOpen) {
        return;
      }
      batchFormatOptions.classList.remove("opacity-0", "scale-95");
      batchFormatOptions.classList.add("opacity-100", "scale-100");
    });
  });
}
function closeBatchFormatSelect() {
  if (!batchFormatOptions || !batchFormatTrigger) {
    return;
  }
  if (!batchFormatSelectOpen) {
    prepareDropdown(batchFormatOptions);
    batchFormatTrigger.setAttribute("aria-expanded", "false");
    batchFormatChevron?.classList.remove("rotate-180");
    return;
  }
  batchFormatSelectOpen = false;
  batchFormatOptions.classList.remove("opacity-100", "scale-100");
  batchFormatOptions.classList.add("opacity-0", "scale-95");
  batchFormatTrigger.setAttribute("aria-expanded", "false");
  batchFormatChevron?.classList.remove("rotate-180");
  window.setTimeout(() => {
    if (!batchFormatSelectOpen) {
      batchFormatOptions.classList.add("pointer-events-none", "invisible");
    }
  }, 200);
}
function updateBatchFormatSelect() {
  if (
    !batchFormat ||
    !batchFormatOptions ||
    !batchFormatLabel ||
    !batchFormatDot
  ) {
    return;
  }
  const value = batchFormat.value;
  const selectedOption = batchFormatOptions.querySelector(
    `[data-value="${value}"]`,
  );
  if (!selectedOption) {
    return;
  }
  const label = selectedOption.querySelector("span.flex span:last-child");
  batchFormatLabel.textContent =
    label?.textContent?.trim() || value.toUpperCase();
  const colors = batchFormatColors[value];
  if (!colors) {
    return;
  }
  batchFormatDot.className = `
    h-2
    w-2
    rounded-full
    ${colors.dot}
    ${colors.shadow}
    transition-all
    duration-300
  `;
  batchFormatLabel.className = `
    transition-colors
    duration-300
    ${colors.text}
  `;
  batchFormatOptionElements.forEach((option) => {
    const selected = option.dataset.value === value;
    const check = option.querySelector(".batch-format-check");
    option.setAttribute("aria-selected", String(selected));
    check?.classList.toggle("opacity-100", selected);
    check?.classList.toggle("opacity-0", !selected);
    option.classList.toggle("bg-white/[0.07]", selected);
    option.classList.toggle("text-white", selected);
    option.classList.toggle("text-white/65", !selected);
  });
}
batchFormatTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (batchFormatSelectOpen) {
    closeBatchFormatSelect();
  } else {
    openBatchFormatSelect();
  }
});
batchFormatOptionElements.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const value = option.dataset.value;
    if (!value) {
      return;
    }
    batchFormat.value = value;
    batchFormat.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );
    updateBatchFormatSelect();
    closeBatchFormatSelect();
  });
});
batchFormatTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeBatchFormatSelect();
    batchFormatTrigger.focus();
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (batchFormatSelectOpen) {
      closeBatchFormatSelect();
    } else {
      openBatchFormatSelect();
    }
  }
});
batchFormat?.addEventListener("change", () => {
  updateBatchFormatSelect();
  updateBatchQualityVisibility();
  invalidateBatchResults();
  resetBatchStatuses();
});
batchQuality?.addEventListener("input", () => {
  batchQualityValue.textContent = `${batchQuality.value}%`;
  invalidateBatchResults();
});
batchResizeEnabled?.addEventListener("change", async () => {
  batchResizeOptions.classList.toggle("hidden", !batchResizeEnabled.checked);
  if (
    batchResizeEnabled.checked &&
    batchFiles.length &&
    !batchWidthInput.value &&
    !batchHeightInput.value
  ) {
    await updateBatchDimensionsFromFirstImage();
  }
  invalidateBatchResults();
});
batchKeepRatio?.addEventListener("change", () => {
  if (batchKeepRatio.checked && batchWidthInput.value) {
    updateBatchHeightFromWidth();
  }
  invalidateBatchResults();
});
batchWidthInput?.addEventListener("input", () => {
  if (batchKeepRatio.checked) {
    updateBatchHeightFromWidth();
  }
  invalidateBatchResults();
});
batchHeightInput?.addEventListener("input", () => {
  if (batchKeepRatio.checked) {
    updateBatchWidthFromHeight();
  }
  invalidateBatchResults();
});
function updateBatchQualityVisibility() {
  const isPng = batchFormat.value === "png";
  batchQualityWrapper?.classList.toggle("hidden", isPng);
}
function resetBatchStatuses() {
  batchList?.querySelectorAll(".batch-file-status").forEach((status) => {
    status.textContent = "Oczekuje";
    status.className = "batch-file-status mt-1 text-xs text-white/25";
  });
  if (batchFiles.length) {
    batchOptimize.disabled = false;
  }
}
async function updateBatchDimensionsFromFirstImage() {
  const file = batchFiles[0];
  if (!file) {
    return;
  }
  try {
    const bitmap = await createImageBitmap(file);
    batchWidthInput.value = bitmap.width;
    batchHeightInput.value = bitmap.height;
    bitmap.close();
  } catch (error) {
    console.error(
      "Nie uda\u0142o si\u0119 pobra\u0107 wymiar\xF3w obrazu:",
      error,
    );
  }
}
async function updateBatchHeightFromWidth() {
  const file = batchFiles[0];
  if (!file || !batchKeepRatio.checked) {
    return;
  }
  const width = Number(batchWidthInput.value);
  if (!width || width < 1) {
    return;
  }
  try {
    const bitmap = await createImageBitmap(file);
    batchHeightInput.value = Math.round(width * (bitmap.height / bitmap.width));
    bitmap.close();
  } catch (error) {
    console.error(error);
  }
}
async function updateBatchWidthFromHeight() {
  const file = batchFiles[0];
  if (!file || !batchKeepRatio.checked) {
    return;
  }
  const height = Number(batchHeightInput.value);
  if (!height || height < 1) {
    return;
  }
  try {
    const bitmap = await createImageBitmap(file);
    batchWidthInput.value = Math.round(height * (bitmap.width / bitmap.height));
    bitmap.close();
  } catch (error) {
    console.error(error);
  }
}
document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    formatTrigger &&
    formatOptions &&
    !formatTrigger.contains(target) &&
    !formatOptions.contains(target)
  ) {
    closeFormatSelect();
  }
  if (
    batchFormatTrigger &&
    batchFormatOptions &&
    !batchFormatTrigger.contains(target) &&
    !batchFormatOptions.contains(target)
  ) {
    closeBatchFormatSelect();
  }
});
window.addEventListener("resize", () => {
  if (formatSelectOpen) {
    positionDropdown(formatTrigger, formatOptions);
  }
  if (batchFormatSelectOpen) {
    positionDropdown(batchFormatTrigger, batchFormatOptions);
  }
});
window.addEventListener(
  "scroll",
  () => {
    if (formatSelectOpen) {
      positionDropdown(formatTrigger, formatOptions);
    }
    if (batchFormatSelectOpen) {
      positionDropdown(batchFormatTrigger, batchFormatOptions);
    }
  },
  true,
);
updateQualityVisibility();
updateFormatSelect();
updateBatchFormatSelect();
updateBatchQualityVisibility();
if (batchQualityValue && batchQuality) {
  batchQualityValue.textContent = `${batchQuality.value}%`;
}
setMode("single");
renderBatchList();
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
