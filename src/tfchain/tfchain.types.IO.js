import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ConditionBaseClass, ConditionLockTime, ConditionNil, ConditionUnlockHash, UnlockHash, UnlockHashType} from './tfchain.types.ConditionTypes.js';
import {FulfillmentBaseClass, FulfillmentSingleSignature} from './tfchain.types.FulfillmentTypes.js';
import * as FulfillmentTypes from './tfchain.types.FulfillmentTypes.js';
import * as ConditionTypes from './tfchain.types.ConditionTypes.js';
import {BinaryData, Blockstake, Currency, Hash} from './tfchain.types.PrimitiveTypes.js';
import {BaseDataTypeClass} from './tfchain.types.BaseDataType.js';
var __name__ = 'tfchain.types.IO';
export var CoinInput =  __class__ ('CoinInput', [BaseDataTypeClass], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parentid, fulfillment, parent_output) {
		if (typeof parentid == 'undefined' || (parentid != null && parentid.hasOwnProperty ("__kwargtrans__"))) {;
			var parentid = null;
		};
		if (typeof fulfillment == 'undefined' || (fulfillment != null && fulfillment.hasOwnProperty ("__kwargtrans__"))) {;
			var fulfillment = null;
		};
		if (typeof parent_output == 'undefined' || (parent_output != null && parent_output.hasOwnProperty ("__kwargtrans__"))) {;
			var parent_output = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'parentid': var parentid = __allkwargs0__ [__attrib0__]; break;
						case 'fulfillment': var fulfillment = __allkwargs0__ [__attrib0__]; break;
						case 'parent_output': var parent_output = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._parent_id = null;
		self.parentid = parentid;
		self._fulfillment = null;
		self.fulfillment = fulfillment;
		self._parent_output = null;
		self.parent_output = parent_output;
	});},
	get from_json () {return __getcm__ (this, function (cls, obj) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return cls (__kwargtrans__ ({parentid: Hash.from_json (obj ['parentid']), fulfillment: FulfillmentTypes.from_json (obj ['fulfillment'])}));
	});},
	get from_coin_output () {return __getcm__ (this, function (cls, co) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'co': var co = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (co, CoinOutput))) {
			var __except0__ = py_TypeError ('invalid co parameter, expected value of type CoinOutput, not {}'.format (py_typeof (co)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var ci = cls (__kwargtrans__ ({parentid: co.id, fulfillment: FulfillmentTypes.from_condition (co.condition)}));
		ci.parent_output = co;
		return ci;
	});},
	get _get_parentid () {return __get__ (this, function (self) {
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
		return self._parent_id;
	});},
	get _set_parentid () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Hash)) {
			self._parent_id = Hash (__kwargtrans__ ({value: value.value}));
			return ;
		}
		self._parent_id = Hash (__kwargtrans__ ({value: value}));
	});},
	get _get_fulfillment () {return __get__ (this, function (self) {
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
		return self._fulfillment;
	});},
	get _set_fulfillment () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._fulfillment = FulfillmentSingleSignature ();
			return ;
		}
		if (!(isinstance (value, FulfillmentBaseClass))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a  CoinInput's fulfillment (expected: FulfillmentBaseClass)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._fulfillment = value;
	});},
	get _get_has_parent_output () {return __get__ (this, function (self) {
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
		return self._parent_output != null;
	});},
	get _get_parent_output () {return __get__ (this, function (self) {
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
		return self._parent_output || CoinOutput ();
	});},
	get _set_parent_output () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._parent_output = null;
			return ;
		}
		if (!(isinstance (value, CoinOutput))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a CoinInput's parent output (expected: CoinOutput)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._parent_output = value;
	});},
	get json () {return __get__ (this, function (self) {
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
		return dict ({'parentid': self._parent_id.json (), 'fulfillment': self._fulfillment.json ()});
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
		encoder.add_all (self._parent_id, self._fulfillment);
	});},
	get rivine_binary_encode () {return __get__ (this, function (self, encoder) {
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
		encoder.add_all (self._parent_id, self._fulfillment);
	});},
	get signature_requests_new () {return __get__ (this, function (self, input_hash_func) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'input_hash_func': var input_hash_func = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_output == null) {
			return [];
		}
		return self._fulfillment.signature_requests_new (__kwargtrans__ ({input_hash_func: input_hash_func, parent_condition: self._parent_output.condition}));
	});},
	get is_fulfilled () {return __get__ (this, function (self) {
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
		if (self._parent_output == null) {
			return false;
		}
		return self._fulfillment.is_fulfilled (self._parent_output.condition);
	});}
});
Object.defineProperty (CoinInput, 'parent_output', property.call (CoinInput, CoinInput._get_parent_output, CoinInput._set_parent_output));
Object.defineProperty (CoinInput, 'has_parent_output', property.call (CoinInput, CoinInput._get_has_parent_output));
Object.defineProperty (CoinInput, 'fulfillment', property.call (CoinInput, CoinInput._get_fulfillment, CoinInput._set_fulfillment));
Object.defineProperty (CoinInput, 'parentid', property.call (CoinInput, CoinInput._get_parentid, CoinInput._set_parentid));;
export var CoinOutput =  __class__ ('CoinOutput', [BaseDataTypeClass], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, value, condition, id, is_fee, is_reward) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = null;
		};
		if (typeof condition == 'undefined' || (condition != null && condition.hasOwnProperty ("__kwargtrans__"))) {;
			var condition = null;
		};
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (typeof is_fee == 'undefined' || (is_fee != null && is_fee.hasOwnProperty ("__kwargtrans__"))) {;
			var is_fee = false;
		};
		if (typeof is_reward == 'undefined' || (is_reward != null && is_reward.hasOwnProperty ("__kwargtrans__"))) {;
			var is_reward = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						case 'condition': var condition = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
						case 'is_fee': var is_fee = __allkwargs0__ [__attrib0__]; break;
						case 'is_reward': var is_reward = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._value = null;
		self.value = value;
		self._spent = false;
		self._spendable_value = null;
		self._custody_fee = null;
		self._condition = null;
		self.condition = condition;
		self._id = null;
		self.id = id;
		self._is_fee = false;
		self.is_fee = is_fee;
		self._is_reward = false;
		self.is_reward = is_reward;
	});},
	get from_json () {return __getcm__ (this, function (cls, obj) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return cls (__kwargtrans__ ({value: Currency.from_json (obj ['value']), condition: ConditionTypes.from_json (obj ['condition'])}));
	});},
	get _get_value () {return __get__ (this, function (self) {
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
		if (self.spent) {
			var sv = self.spendable_value;
			if (sv.greater_than (0)) {
				return sv;
			}
		}
		return self._value;
	});},
	get _set_value () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Currency)) {
			self._value = value;
			return ;
		}
		self._value = Currency (__kwargtrans__ ({value: value}));
	});},
	get _get_spent () {return __get__ (this, function (self) {
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
		return self._spent;
	});},
	get _set_spent () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (value, bool))) {
			var __except0__ = py_TypeError ('spent property of a CoinOutput has to be of type bool, not be of type {}'.format (value));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._spent = value;
	});},
	get _get_creation_value () {return __get__ (this, function (self) {
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
		return self._value;
	});},
	get _get_spendable_value () {return __get__ (this, function (self) {
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
		if (self._spendable_value == null || self._spendable_value.__le__ (0)) {
			return self.value;
		}
		return self._spendable_value;
	});},
	get _set_spendable_value () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._spendable_value = null;
			return ;
		}
		if (isinstance (value, Currency)) {
			self._spendable_value = value;
			return ;
		}
		self._spendable_value = Currency (__kwargtrans__ ({value: value}));
	});},
	get _get_custody_fee () {return __get__ (this, function (self) {
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
		if (self._custody_fee == null) {
			return Currency ();
		}
		return self._custody_fee;
	});},
	get _set_custody_fee () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._custody_fee = null;
			return ;
		}
		if (isinstance (value, Currency)) {
			self._custody_fee = value;
			return ;
		}
		self._custody_fee = Currency (__kwargtrans__ ({value: value}));
	});},
	get _get_condition () {return __get__ (this, function (self) {
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
		return self._condition;
	});},
	get _set_condition () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._condition = ConditionNil ();
			return ;
		}
		if (!(isinstance (value, ConditionBaseClass))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a CoinOutput's condition (expected: ConditionBaseClass subtype)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._condition = value;
	});},
	get _get_id () {return __get__ (this, function (self) {
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
		return self._id;
	});},
	get _set_id () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Hash)) {
			self._id = Hash (__kwargtrans__ ({value: value.value}));
			return ;
		}
		self._id = Hash (__kwargtrans__ ({value: value}));
	});},
	get _get_is_fee () {return __get__ (this, function (self) {
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
		return self._is_fee;
	});},
	get _set_is_fee () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (value, bool))) {
			var __except0__ = py_TypeError ('is fee is supposed to be a bool, cannot be {} ({})'.format (value, py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._is_fee = value;
	});},
	get _get_is_reward () {return __get__ (this, function (self) {
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
		return self._is_reward;
	});},
	get _set_is_reward () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (value, bool))) {
			var __except0__ = py_TypeError ('is is_reward is supposed to be a bool, cannot be {} ({})'.format (value, py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._is_reward = value;
	});},
	get json () {return __get__ (this, function (self) {
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
		return dict ({'value': self._value.json (), 'condition': self._condition.json ()});
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
		encoder.add_all (self._value, self._condition);
	});},
	get rivine_binary_encode () {return __get__ (this, function (self, encoder) {
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
		encoder.add_all (self._value, self._condition);
	});}
});
Object.defineProperty (CoinOutput, 'is_reward', property.call (CoinOutput, CoinOutput._get_is_reward, CoinOutput._set_is_reward));
Object.defineProperty (CoinOutput, 'is_fee', property.call (CoinOutput, CoinOutput._get_is_fee, CoinOutput._set_is_fee));
Object.defineProperty (CoinOutput, 'id', property.call (CoinOutput, CoinOutput._get_id, CoinOutput._set_id));
Object.defineProperty (CoinOutput, 'condition', property.call (CoinOutput, CoinOutput._get_condition, CoinOutput._set_condition));
Object.defineProperty (CoinOutput, 'custody_fee', property.call (CoinOutput, CoinOutput._get_custody_fee, CoinOutput._set_custody_fee));
Object.defineProperty (CoinOutput, 'spendable_value', property.call (CoinOutput, CoinOutput._get_spendable_value, CoinOutput._set_spendable_value));
Object.defineProperty (CoinOutput, 'creation_value', property.call (CoinOutput, CoinOutput._get_creation_value));
Object.defineProperty (CoinOutput, 'spent', property.call (CoinOutput, CoinOutput._get_spent, CoinOutput._set_spent));
Object.defineProperty (CoinOutput, 'value', property.call (CoinOutput, CoinOutput._get_value, CoinOutput._set_value));;
export var BlockstakeInput =  __class__ ('BlockstakeInput', [BaseDataTypeClass], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parentid, fulfillment, parent_output) {
		if (typeof parentid == 'undefined' || (parentid != null && parentid.hasOwnProperty ("__kwargtrans__"))) {;
			var parentid = null;
		};
		if (typeof fulfillment == 'undefined' || (fulfillment != null && fulfillment.hasOwnProperty ("__kwargtrans__"))) {;
			var fulfillment = null;
		};
		if (typeof parent_output == 'undefined' || (parent_output != null && parent_output.hasOwnProperty ("__kwargtrans__"))) {;
			var parent_output = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'parentid': var parentid = __allkwargs0__ [__attrib0__]; break;
						case 'fulfillment': var fulfillment = __allkwargs0__ [__attrib0__]; break;
						case 'parent_output': var parent_output = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._parent_id = null;
		self.parentid = parentid;
		self._fulfillment = null;
		self.fulfillment = fulfillment;
		self._parent_output = null;
		self.parent_output = parent_output;
	});},
	get from_json () {return __getcm__ (this, function (cls, obj) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return cls (__kwargtrans__ ({parentid: Hash.from_json (obj ['parentid']), fulfillment: FulfillmentTypes.from_json (obj ['fulfillment'])}));
	});},
	get from_blockstake_output () {return __getcm__ (this, function (cls, bso) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'bso': var bso = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (bso, BlockstakeOutput))) {
			var __except0__ = py_TypeError ('invalid type of bso {} (expected: BlockstakeOutput)'.format (py_typeof (bso)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var bsi = cls (__kwargtrans__ ({parentid: bso.id, fulfillment: FulfillmentTypes.from_condition (bso.condition)}));
		bsi.parent_output = bso;
		return bsi;
	});},
	get _get_parentid () {return __get__ (this, function (self) {
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
		return self._parent_id;
	});},
	get _set_parentid () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Hash)) {
			self._parent_id = Hash (__kwargtrans__ ({value: value.value}));
			return ;
		}
		self._parent_id = Hash (__kwargtrans__ ({value: value}));
	});},
	get _get_fulfillment () {return __get__ (this, function (self) {
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
		return self._fulfillment;
	});},
	get _set_fulfillment () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._fulfillment = FulfillmentSingleSignature ();
			return ;
		}
		if (!(isinstance (value, FulfillmentBaseClass))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a BlockstakeInput's fulfillment (expected: FulfillmentBaseClass subtype)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._fulfillment = value;
	});},
	get _get_parent_output () {return __get__ (this, function (self) {
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
		return self._parent_output;
	});},
	get _set_parent_output () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._parent_output = BlockstakeOutput ();
			return ;
		}
		if (!(isinstance (value, BlockstakeOutput))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a BlockstakeInput's parent output (expected: BlockstakeOutput)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._parent_output = value;
	});},
	get json () {return __get__ (this, function (self) {
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
		return dict ({'parentid': self._parent_id.json (), 'fulfillment': self._fulfillment.json ()});
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
		encoder.add_all (self._parent_id, self._fulfillment);
	});},
	get rivine_binary_encode () {return __get__ (this, function (self, encoder) {
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
		encoder.add_all (self._parent_id, self._fulfillment);
	});},
	get signature_requests_new () {return __get__ (this, function (self, input_hash_func) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'input_hash_func': var input_hash_func = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_output == null) {
			return [];
		}
		return self._fulfillment.signature_requests_new (__kwargtrans__ ({input_hash_func: input_hash_func, parent_condition: self._parent_output.condition}));
	});},
	get is_fulfilled () {return __get__ (this, function (self) {
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
		if (self._parent_output == null) {
			return false;
		}
		return self._fulfillment.is_fulfilled (self._parent_output.condition);
	});}
});
Object.defineProperty (BlockstakeInput, 'parent_output', property.call (BlockstakeInput, BlockstakeInput._get_parent_output, BlockstakeInput._set_parent_output));
Object.defineProperty (BlockstakeInput, 'fulfillment', property.call (BlockstakeInput, BlockstakeInput._get_fulfillment, BlockstakeInput._set_fulfillment));
Object.defineProperty (BlockstakeInput, 'parentid', property.call (BlockstakeInput, BlockstakeInput._get_parentid, BlockstakeInput._set_parentid));;
export var BlockstakeOutput =  __class__ ('BlockstakeOutput', [BaseDataTypeClass], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, value, condition, id) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = null;
		};
		if (typeof condition == 'undefined' || (condition != null && condition.hasOwnProperty ("__kwargtrans__"))) {;
			var condition = null;
		};
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						case 'condition': var condition = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._value = null;
		self.value = value;
		self._condition = null;
		self.condition = condition;
		self._id = null;
		self.id = id;
	});},
	get from_json () {return __getcm__ (this, function (cls, obj) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return cls (__kwargtrans__ ({value: Blockstake.from_json (obj ['value']), condition: ConditionTypes.from_json (obj ['condition'])}));
	});},
	get _get_value () {return __get__ (this, function (self) {
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
		return self._value;
	});},
	get _set_value () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Blockstake)) {
			self._value = value;
			return ;
		}
		self._value = Blockstake (__kwargtrans__ ({value: value}));
	});},
	get _get_condition () {return __get__ (this, function (self) {
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
		return self._condition;
	});},
	get _set_condition () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._condition = ConditionNil ();
			return ;
		}
		if (!(isinstance (value, ConditionBaseClass))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a BlockstakeOutput's condition (expected: ConditionBaseClass subtype)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._condition = value;
	});},
	get _get_id () {return __get__ (this, function (self) {
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
		return self._id;
	});},
	get _set_id () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Hash)) {
			self._id = Hash (__kwargtrans__ ({value: value.value}));
			return ;
		}
		self._id = Hash (__kwargtrans__ ({value: value}));
	});},
	get json () {return __get__ (this, function (self) {
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
		return dict ({'value': self._value.json (), 'condition': self._condition.json ()});
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
		encoder.add_all (self._value, self._condition);
	});},
	get rivine_binary_encode () {return __get__ (this, function (self, encoder) {
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
		encoder.add_all (self._value, self._condition);
	});}
});
Object.defineProperty (BlockstakeOutput, 'id', property.call (BlockstakeOutput, BlockstakeOutput._get_id, BlockstakeOutput._set_id));
Object.defineProperty (BlockstakeOutput, 'condition', property.call (BlockstakeOutput, BlockstakeOutput._get_condition, BlockstakeOutput._set_condition));
Object.defineProperty (BlockstakeOutput, 'value', property.call (BlockstakeOutput, BlockstakeOutput._get_value, BlockstakeOutput._set_value));;
export var MinerPayout =  __class__ ('MinerPayout', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, value, unlockhash, unlockheight, id, is_reward) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = null;
		};
		if (typeof unlockhash == 'undefined' || (unlockhash != null && unlockhash.hasOwnProperty ("__kwargtrans__"))) {;
			var unlockhash = null;
		};
		if (typeof unlockheight == 'undefined' || (unlockheight != null && unlockheight.hasOwnProperty ("__kwargtrans__"))) {;
			var unlockheight = null;
		};
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (typeof is_reward == 'undefined' || (is_reward != null && is_reward.hasOwnProperty ("__kwargtrans__"))) {;
			var is_reward = true;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						case 'unlockhash': var unlockhash = __allkwargs0__ [__attrib0__]; break;
						case 'unlockheight': var unlockheight = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
						case 'is_reward': var is_reward = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._value = null;
		self.value = value;
		self._unlockhash = null;
		self.unlockhash = unlockhash;
		self._unlockheight = null;
		self.unlockheight = unlockheight;
		self._id = null;
		self.id = id;
		self._is_reward = false;
		self.is_reward = is_reward;
	});},
	get from_json () {return __getcm__ (this, function (cls, obj) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (__in__ ('rawminerpayout', obj)) {
			return cls (__kwargtrans__ ({value: Currency.from_json (obj ['rawminerpayout'] ['value']), unlockhash: UnlockHash.from_json (obj ['rawminerpayout'] ['unlockhash']), id: Hash.from_json (obj ['minerpayoutid'])}));
		}
		return cls (__kwargtrans__ ({value: Currency.from_json (obj ['value']), unlockhash: UnlockHash.from_json (obj ['unlockhash'])}));
	});},
	get _get_value () {return __get__ (this, function (self) {
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
		return self._value;
	});},
	get _set_value () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Currency)) {
			self._value = value;
			return ;
		}
		self._value = Currency (__kwargtrans__ ({value: value}));
	});},
	get _get_unlockhash () {return __get__ (this, function (self) {
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
		return self._unlockhash;
	});},
	get _set_unlockhash () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value === null) {
			self._unlockhash = UnlockHash (__kwargtrans__ ({uhtype: UnlockHashType.NIL}));
			return ;
		}
		if (isinstance (value, str)) {
			self._unlockhash = UnlockHash.from_json (value);
		}
		if (!(isinstance (value, UnlockHash))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a MinerPayout's unlockhash (expected: UnlockHash or str)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._unlockhash = value;
	});},
	get _get_unlockheight () {return __get__ (this, function (self) {
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
		return self._unlockheight;
	});},
	get _set_unlockheight () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value === null) {
			self._unlockheight = null;
			return ;
		}
		if (!(isinstance (value, int))) {
			var __except0__ = py_TypeError ("cannot assign value of type {} as a MinerPayout's unlockheight (expected: int)".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (value <= 0) {
			var __except0__ = py_TypeError ("cannot assign value {} as a MinerPayout's unlockheight (has to be strictly positive)".format (value));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._unlockheight = value;
	});},
	get _get_is_reward () {return __get__ (this, function (self) {
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
		return self._is_reward;
	});},
	get _set_is_reward () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (value, bool))) {
			var __except0__ = py_TypeError ('is is_reward is supposed to be a bool, cannot be {} ({})'.format (value, py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._is_reward = value;
	});},
	get as_coin_output () {return __get__ (this, function (self) {
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
		var cond = ConditionUnlockHash (__kwargtrans__ ({unlockhash: self.unlockhash}));
		if (self._unlockheight != null) {
			var cond = ConditionLockTime (__kwargtrans__ ({condition: cond, lock: self._unlockheight}));
		}
		return CoinOutput (__kwargtrans__ ({value: self.value, condition: cond, id: self.id, is_fee: !(self._is_reward), is_reward: self._is_reward}));
	});},
	get _get_id () {return __get__ (this, function (self) {
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
		return self._id;
	});},
	get _set_id () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (value, Hash)) {
			self._id = Hash (__kwargtrans__ ({value: value.value}));
			return ;
		}
		self._id = Hash (__kwargtrans__ ({value: value}));
	});}
});
Object.defineProperty (MinerPayout, 'id', property.call (MinerPayout, MinerPayout._get_id, MinerPayout._set_id));
Object.defineProperty (MinerPayout, 'is_reward', property.call (MinerPayout, MinerPayout._get_is_reward, MinerPayout._set_is_reward));
Object.defineProperty (MinerPayout, 'unlockheight', property.call (MinerPayout, MinerPayout._get_unlockheight, MinerPayout._set_unlockheight));
Object.defineProperty (MinerPayout, 'unlockhash', property.call (MinerPayout, MinerPayout._get_unlockhash, MinerPayout._set_unlockhash));
Object.defineProperty (MinerPayout, 'value', property.call (MinerPayout, MinerPayout._get_value, MinerPayout._set_value));;

//# sourceMappingURL=tfchain.types.IO.map
