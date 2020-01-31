var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as jsasync from './tfchain.polyfill.asynchronous.js';
import * as jslog from './tfchain.polyfill.log.js';
import * as jshttp from './tfchain.polyfill.http.js';
import * as jsarr from './tfchain.polyfill.array.js';
import * as jsobj from './tfchain.polyfill.encoding.object.js';
import * as jsjson from './tfchain.polyfill.encoding.json.js';
import * as tferrors from './tfchain.errors.js';
import {datetime} from './datetime.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = 'tfchain.explorer';
export var Client =  __class__ ('Client', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, addresses) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'addresses': var addresses = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (addresses, list)) || len (addresses) == 0) {
			var __except0__ = py_TypeError ('addresses expected to be a non-empty list of string-formatted explorer addresses, not {}'.format (py_typeof (addresses)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._addresses = addresses;
		self._consensus_addresses = (function () {
			var __accu0__ = [];
			for (var addr of addresses) {
				__accu0__.append (addr);
			}
			return __accu0__;
		}) ();
		self._last_consensus_update_time = 0;
	});},
	get _update_consensus_if_needed () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var now = int (datetime.now ().timestamp ());
		if (now - self._last_consensus_update_time < 60 * 5) {
			return null;
		}
		self._last_consensus_update_time = now;
		var generator = function* () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			for (var addr of self._addresses) {
				yield jsasync.catch_promise (jsasync.chain (jshttp.http_get (addr, '/explorer'), self._height_result_cb), self._height_error_cb_new (addr));
			}
			};
		var result_cb = function (results) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'results': var results = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var d = jsobj.new_dict ();
			var a = dict ({});
			for (var [addr, height] of results) {
				if (!__in__ (height, a)) {
					a [height] = [];
				}
				a [height].append (addr);
				d [height] = d.get_or (height, 0) + 1;
			}
			var c_height = -(1);
			var c_height_votes = -(1);
			for (var height of a.py_keys ()) {
				var votes = d [height];
				var height = int (height);
				if (votes > c_height_votes || votes == c_height_votes && height > c_height) {
					var c_height = height;
					var c_height_votes = votes;
				}
			}
			if (c_height == -(1)) {
				jslog.error ('update_consensus of explorer (HTTP): no explorer addresses are available');
				var all_addresses = [];
				for (var [_, addresses] of jsobj.get_items (a)) {
					var all_addresses = jsarr.concat (all_addresses, addresses);
				}
				self._consensus_addresses = addresses;
			}
			else {
				self._consensus_addresses = a [c_height];
			}
		};
		return jsasync.chain (jsasync.promise_pool_new (generator), result_cb);
	});},
	get _height_result_cb () {return __get__ (this, function (self, result) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'result': var result = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return tuple ([result ['address'], int (result ['data'] ['height'])]);
	});},
	get _height_error_cb_new () {return __get__ (this, function (self, address) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'address': var address = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cb = function (error) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'error': var error = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			jslog.warning ('error occured while probing explorer {} for height:'.format (address), error);
			return tuple ([address, 0]);
		};
		return cb;
	});},
	get _get_addresses () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._addresses;
	});},
	get data_get () {return __get__ (this, function (self, endpoint) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'endpoint': var endpoint = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cp = self._update_consensus_if_needed ();
		if (cp == null) {
			return self._data_get_body (endpoint);
		}
		return jsasync.chain (cp, (function __lambda__ (_) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case '_': var _ = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._data_get_body (endpoint);
		}));
	});},
	get _data_get_body () {return __get__ (this, function (self, endpoint) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'endpoint': var endpoint = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var indices = list (range (len (self._consensus_addresses)));
		random.shuffle (indices);
		var resolve = function (result) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'result': var result = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			if (result.code == 200) {
				return tuple ([result.address, jsobj.as_dict (result.data)]);
			}
			if (result.code == 204 || result.code == 400 && (__in__ ('unrecognized hash', result.data) || __in__ ('not found', result.data))) {
				var __except0__ = tferrors.ExplorerNoContent ('GET: no content available (code: 204)', endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (result.code == 400) {
				var __except0__ = tferrors.ExplorerBadRequest ('error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (result.code == 403) {
				var __except0__ = tferrors.ExplorerForbidden ('error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (Math.floor (result.code / 100) == 4) {
				var __except0__ = tferrors.ExplorerClientError ('client error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var __except0__ = tferrors.ExplorerServerError ('error (code: {}): {}'.format (result.code, result.data), endpoint);
			__except0__.__cause__ = null;
			throw __except0__;
		};
		var address = self._consensus_addresses [indices [0]];
		if (!(isinstance (address, str))) {
			var __except0__ = py_TypeError ('explorer address expected to be a string, not {}'.format (py_typeof (address)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var p = jsasync.chain (jshttp.http_get (address, endpoint), resolve);
		var create_fallback_catch_cb = function (address) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'address': var address = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var f = function (reason) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'reason': var reason = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				if (isinstance (reason, tferrors.ExplorerUserError)) {
					var __except0__ = reason;
					__except0__.__cause__ = null;
					throw __except0__;
				}
				jslog.debug ('retrying on another server, previous GET call failed: {}'.format (reason));
				return jsasync.chain (jshttp.http_get (address, endpoint), resolve);
			};
			return f;
		};
		for (var idx of indices.__getslice__ (1, null, 1)) {
			var address = self._consensus_addresses [idx];
			if (!(isinstance (address, str))) {
				var __except0__ = py_TypeError ('explorer address expected to be a string, not {}'.format (py_typeof (address)));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var cb = create_fallback_catch_cb (address);
			var p = jsasync.catch_promise (p, cb);
		}
		var final_catch = function (reason) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'reason': var reason = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			if (isinstance (reason, tferrors.ExplorerUserError)) {
				if (isinstance (reason, tferrors.ExplorerError)) {
					jslog.warning ('raising error as-is in final catch of', endpoint, reason);
					var __except0__ = reason;
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var __except0__ = tferrors.ExplorerError ('GET call(s) failed: {}'.format (reason), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			jslog.debug ('servers exhausted, previous GET call failed as well: {}'.format (reason));
			var __except0__ = tferrors.ExplorerNotAvailable ('no explorer was available', endpoint, self._consensus_addresses);
			__except0__.__cause__ = null;
			throw __except0__;
		};
		return jsasync.catch_promise (p, final_catch);
	});},
	get data_post () {return __get__ (this, function (self, endpoint, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'endpoint': var endpoint = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cp = self._update_consensus_if_needed ();
		if (cp == null) {
			return self._data_post_body (endpoint, data);
		}
		return jsasync.chain (cp, (function __lambda__ (_) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case '_': var _ = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._data_post_body (endpoint, data);
		}));
	});},
	get _data_post_body () {return __get__ (this, function (self, endpoint, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'endpoint': var endpoint = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var indices = list (range (len (self._consensus_addresses)));
		random.shuffle (indices);
		var headers = dict ({'Content-Type': 'Application/json;charset=UTF-8'});
		var s = data;
		if (!(isinstance (s, str))) {
			var s = jsjson.json_dumps (s);
		}
		var resolve = function (result) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'result': var result = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			if (result.code == 200) {
				return tuple ([result.address, jsobj.as_dict (result.data)]);
			}
			if (result.code == 400) {
				jslog.warning ('invalid data object posted to {}:'.format (endpoint), s);
				var __except0__ = tferrors.ExplorerBadRequest ('error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (result.code == 403) {
				var __except0__ = tferrors.ExplorerForbidden ('error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (Math.floor (result.code / 100) == 4) {
				var __except0__ = tferrors.ExplorerClientError ('client error (code: {}): {}'.format (result.code, result.data), endpoint);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var __except0__ = tferrors.ExplorerServerPostError ('POST: unexpected error (code: {}): {}'.format (result.code, result.data), endpoint, __kwargtrans__ ({data: data}));
			__except0__.__cause__ = null;
			throw __except0__;
		};
		var address = self._consensus_addresses [indices [0]];
		if (!(isinstance (address, str))) {
			var __except0__ = py_TypeError ('explorer address expected to be a string, not {}'.format (py_typeof (address)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var p = jsasync.chain (jshttp.http_post (address, endpoint, s, headers), resolve);
		var create_fallback_catch_cb = function (address) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'address': var address = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var f = function (reason) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'reason': var reason = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				if (isinstance (reason, tferrors.ExplorerUserError)) {
					var __except0__ = reason;
					__except0__.__cause__ = null;
					throw __except0__;
				}
				jslog.debug ('retrying on another server, previous POST call failed: {}'.format (reason));
				return jsasync.chain (jshttp.http_post (address, endpoint, s, headers), resolve);
			};
			return f;
		};
		for (var idx of indices.__getslice__ (1, null, 1)) {
			var address = self._consensus_addresses [idx];
			if (!(isinstance (address, str))) {
				var __except0__ = py_TypeError ('explorer address expected to be a string, not {}'.format (py_typeof (address)));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var cb = create_fallback_catch_cb (address);
			var p = jsasync.catch_promise (p, cb);
		}
		var final_catch = function (reason) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'reason': var reason = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			if (isinstance (reason, tferrors.ExplorerUserError)) {
				var __except0__ = reason;
				__except0__.__cause__ = null;
				throw __except0__;
			}
			jslog.debug ('servers exhausted, previous POST call failed as well: {}'.format (reason));
			var __except0__ = tferrors.ExplorerNotAvailable ('no explorer was available', endpoint, self._consensus_addresses);
			__except0__.__cause__ = null;
			throw __except0__;
		};
		return jsasync.catch_promise (p, final_catch);
	});}
});
Object.defineProperty (Client, 'addresses', property.call (Client, Client._get_addresses));;

//# sourceMappingURL=tfchain.explorer.map
