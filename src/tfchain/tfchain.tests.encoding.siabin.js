import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as jsass from './tfchain.tests.jsassert.js';
import {IntegerOutOfRange} from './tfchain.encoding.errors.js';
import {SiaBinaryEncoder, SiaBinaryObjectEncoderBase} from './tfchain.encoding.siabin.js';
var __name__ = 'tfchain.tests.encoding.siabin';
export var test_sia_basic_encoding = function () {
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
	var e = SiaBinaryEncoder ();
	e.add (false);
	e.add ('a');
	e.add ([1, true, 'foo']);
	e.add (bytes ('123'));
	jsass.equals (e.data, bytes ('        a                     foo       123'));
};
export var test_sia_types = function () {
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
	var e = SiaBinaryEncoder ();
	e.add_array ([false, true, true]);
	e.add_byte (6);
	e.add_byte ('4');
	e.add_byte (bytes ('2'));
	jsass.equals (e.data, bytes (' 42'));
};
export var test_sia_custom = function () {
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
	var e = SiaBinaryEncoder ();
	var Answer = __class__ ('Answer', [SiaBinaryObjectEncoderBase], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, number) {
			if (typeof number == 'undefined' || (number != null && number.hasOwnProperty ("__kwargtrans__"))) {;
				var number = 0;
			};
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
							case 'number': var number = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			self._number = number;
		});},
		get sia_binary_encode () {return __get__ (this, function (self, encoder) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
							case 'encoder': var encoder = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			if (self._number == 42) {
				return encoder.add (true);
			}
			return encoder.add (false);
		});}
	});
	e.add (Answer ());
	e.add (Answer (42));
	e.add_array ([Answer (5), Answer (2)]);
	jsass.equals (e.data, bytes ('   '));
	jsass.raises (IntegerOutOfRange, (function __lambda__ (_) {
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
		return e.add (-(1));
	}));
};
export var tests = function () {
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
	test_sia_basic_encoding ();
	test_sia_types ();
	test_sia_custom ();
};

//# sourceMappingURL=tfchain.tests.encoding.siabin.map
