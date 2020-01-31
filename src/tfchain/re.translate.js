var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
var __name__ = 're.translate';
export var VERBOSE = false;
export var MAX_SHIFTREDUCE_LOOPS = 1000;
export var stringFlags = 'aiLmsux';
export var Group =  __class__ ('Group', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, start, end, klass) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
						case 'klass': var klass = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start = start;
		self.end = end;
		self.klass = klass;
	});},
	get __repr__ () {return __get__ (this, function (self) {
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
		return str (tuple ([self.start, self.end, self.klass]));
	});}
});
export var generateGroupSpans = function (tokens) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var groupInfo = [];
	var idx = 0;
	for (var token of tokens) {
		if (__t__ (token.py_name.startswith ('('))) {
			groupInfo.append (Group (idx, null, token.py_name));
		}
		else if (__t__ (token.py_name == ')')) {
			for (var group of py_reversed (groupInfo)) {
				if (__t__ (group.end === null)) {
					group.end = idx;
				}
			}
		}
		idx++;
	}
	return groupInfo;
};
export var countCaptureGroups = function (tokens) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var groupInfo = generateGroupSpans (tokens);
	var count = 0;
	for (var token of tokens) {
		if (__t__ (token.py_name == '(')) {
			count++;
		}
	}
	return count;
};
export var getCaptureGroup = function (groupInfo, namedGroups, groupRef) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'groupInfo': var groupInfo = __allkwargs0__ [__attrib0__]; break;
					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
					case 'groupRef': var groupRef = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	try {
		var id = int (groupRef);
	}
	catch (__except0__) {
		var id = namedGroups [groupRef];
	}
	var search = 0;
	for (var group of groupInfo) {
		if (__t__ (group.klass == '(')) {
			search++;
			if (__t__ (search == id)) {
				return group;
			}
		}
	}
};
export var splitIfElse = function (tokens, namedGroups) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'tokens': var tokens = __allkwargs0__ [__attrib0__]; break;
					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var variants = [];
	var groupInfo = generateGroupSpans (tokens);
	for (var group of groupInfo) {
		if (__t__ (group.klass == '(?<')) {
			var iff = tokens.__getslice__ (0, null, 1);
			var els = tokens.__getslice__ (0, null, 1);
			var conStart = group.start;
			var conEnd = group.end;
			var ref = tokens [conStart + 1].py_name;
			var captureGroup = getCaptureGroup (groupInfo, namedGroups, ref);
			var captureGroupModifier = tokens [captureGroup.end + 1];
			if (__t__ (__t__ (__in__ (captureGroupModifier.py_name, ['?', '*'])) || captureGroupModifier.py_name.startswith ('{0,'))) {
				if (__t__ (captureGroupModifier.py_name == '?')) {
					iff [captureGroup.end + 1] = null;
				}
				else if (__t__ (captureGroupModifier.py_name == '*')) {
					iff [captureGroup.end + 1] = Token ('+');
				}
				else if (__t__ (captureGroupModifier.py_name.startswith ('{0,'))) {
					iff [captureGroup.end + 1].py_name.__setslice__ (0, 3, null, '{1,');
				}
				els [captureGroup.end + 1] = null;
				var hasElse = false;
				for (var idx = conStart; idx < conEnd; idx++) {
					if (__t__ (tokens [idx].py_name == '|')) {
						var hasElse = true;
						els.py_pop (conEnd);
						iff.__setslice__ (idx, conEnd + 1, null, []);
						els.__setslice__ (conStart, idx + 1, null, []);
						break;
					}
				}
				if (__t__ (!__t__ ((hasElse)))) {
					els.__setslice__ (conStart, conEnd + 1, null, []);
					iff.py_pop (conEnd);
				}
				iff.__setslice__ (conStart, conStart + 3, null, []);
				els.__setslice__ (captureGroup.start, captureGroup.end + 1, null, [Token ('('), Token (')')]);
				iff.remove (null);
				els.remove (null);
				variants.append (iff);
				variants.append (els);
			}
			else {
				var pastIff = false;
				for (var idx = conStart; idx < conEnd; idx++) {
					if (__t__ (iff [idx].py_name == '|')) {
						var iff = tokens.__getslice__ (0, idx, 1);
						iff.extend (tokens.__getslice__ (conEnd + 1, null, 1));
						break;
					}
				}
				iff.__setslice__ (conStart, conStart + 3, null, []);
				variants.append (iff);
			}
			break;
		}
	}
	if (__t__ (!__t__ ((variants)))) {
		return [tokens];
	}
	var allVariants = [];
	for (var variant of variants) {
		allVariants.extend (splitIfElse (variant, namedGroups));
	}
	return allVariants;
};
export var Token =  __class__ ('Token', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name, paras, pure) {
		if (typeof paras == 'undefined' || (paras != null && paras.hasOwnProperty ("__kwargtrans__"))) {;
			var paras = null;
		};
		if (typeof pure == 'undefined' || (pure != null && pure.hasOwnProperty ("__kwargtrans__"))) {;
			var pure = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
						case 'paras': var paras = __allkwargs0__ [__attrib0__]; break;
						case 'pure': var pure = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (__t__ (paras === null)) {
			var paras = [];
		}
		self.py_name = py_name;
		self.paras = paras;
		self.pure = pure;
		self.isModeGroup = false;
	});},
	get __repr__ () {return __get__ (this, function (self) {
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
		return self.py_name;
	});},
	get resolve () {return __get__ (this, function (self) {
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
		var paras = '';
		for (var para of self.paras) {
			paras += str (para);
		}
		return self.py_name + paras;
	});}
});
export var shift = function (stack, queue) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'stack': var stack = __allkwargs0__ [__attrib0__]; break;
					case 'queue': var queue = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var done = !__t__ ((bool (queue)));
	if (__t__ (!__t__ ((done)))) {
		stack.append (Token (queue [0], [], true));
		var queue = queue.__getslice__ (1, null, 1);
	}
	return tuple ([stack, queue, done]);
};
export var shiftReduce = function (stack, queue, namedGroups, flags) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'stack': var stack = __allkwargs0__ [__attrib0__]; break;
					case 'queue': var queue = __allkwargs0__ [__attrib0__]; break;
					case 'namedGroups': var namedGroups = __allkwargs0__ [__attrib0__]; break;
					case 'flags': var flags = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var done = false;
	var high = len (stack) - 1;
	if (__t__ (len (stack) < 2)) {
		var __left0__ = shift (stack, queue);
		var stack = __left0__ [0];
		var queue = __left0__ [1];
		var done = __left0__ [2];
		return tuple ([stack, queue, flags, done]);
	}
	var s0 = (__t__ (len (stack) > 0) ? stack [high] : Token (''));
	var s1 = (__t__ (len (stack) > 1) ? stack [high - 1] : Token (''));
	if (__t__ (VERBOSE)) {
		for (var token of stack) {
			console.log (token.resolve (), '\t', __kwargtrans__ ({end: ''}));
		}
		console.log ('');
	}
	if (__t__ (s1.py_name == '\\')) {
		if (__t__ (s0.py_name == 'A')) {
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('^')]);
		}
		else if (__t__ (s0.py_name == 'a')) {
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\07')]);
		}
		else if (__t__ (s0.py_name == 'Z')) {
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('$')]);
		}
		else {
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\' + s0.py_name)]);
		}
	}
	else if (__t__ (__t__ (s0.py_name == '$') && s0.pure)) {
		stack.py_pop ();
		stack.extend ([Token ('(?='), Token ('\\n'), Token ('?'), Token ('$'), Token (')')]);
	}
	else if (__t__ (s1.py_name == '{')) {
		if (__t__ (__t__ (s0.py_name == ',') && len (s1.paras) == 0)) {
			s1.paras.append ('0');
			s1.paras.append (',');
		}
		else if (__t__ (s0.py_name == '}')) {
			s1.paras.append ('}');
			s1.py_name = s1.resolve ();
			s1.paras = [];
		}
		else {
			s1.paras.append (s0.py_name);
		}
		var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
	}
	else if (__t__ (__t__ (s1.py_name == '[') && s0.py_name == '^')) {
		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('[^')]);
	}
	else if (__t__ (__t__ (s1.py_name == '(') && s0.py_name == '?')) {
		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(?')]);
	}
	else if (__t__ (__t__ (__in__ (s1.py_name, ['*', '+', '?'])) && s0.py_name == '?')) {
		stack.__setslice__ (-__t__ ((2)), null, null, [Token (s1.py_name + '?')]);
	}
	else if (__t__ (__t__ (s1.isModeGroup) && s0.py_name == ')')) {
		var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
	}
	else if (__t__ (s1.py_name == '(?')) {
		if (__t__ (__in__ (s0.py_name, stringFlags))) {
			if (__t__ (s0.py_name == 'i')) {
				flags |= re.IGNORECASE;
			}
			else if (__t__ (s0.py_name == 'L')) {
				flags |= re.LOCALE;
			}
			else if (__t__ (s0.py_name == 'm')) {
				flags |= re.MULTILINE;
			}
			else if (__t__ (s0.py_name == 's')) {
				flags |= re.DOTALL;
			}
			else if (__t__ (s0.py_name == 'u')) {
				flags |= re.UNICODE;
			}
			else if (__t__ (s0.py_name == 'x')) {
				flags |= re.VERBOSE;
			}
			else if (__t__ (s0.py_name == 'a')) {
				flags |= re.ASCII;
			}
			stack.py_pop ();
			s1.isModeGroup = true;
		}
		else {
			if (__t__ (s0.py_name == '(')) {
				s0.py_name = '<';
			}
			var newToken = Token ('(?' + s0.py_name);
			stack.__setslice__ (-__t__ ((2)), null, null, [newToken]);
		}
	}
	else if (__t__ (s1.py_name == '(?<')) {
		if (__t__ (s0.py_name == ')')) {
			stack.__setslice__ (-__t__ ((1)), null, null, [Token (''.join (s1.paras)), Token ('>')]);
			s1.paras = [];
		}
		else {
			s1.paras.append (s0.py_name);
			stack.py_pop ();
		}
	}
	else if (__t__ (s1.py_name == '(?P')) {
		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(?P' + s0.py_name)]);
	}
	else if (__t__ (s1.py_name == '(?P<')) {
		if (__t__ (s0.py_name == '>')) {
			namedGroups [''.join (s1.paras)] = countCaptureGroups (stack) + 1;
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(')]);
		}
		else {
			s1.paras.append (s0.py_name);
			stack.py_pop ();
		}
	}
	else if (__t__ (s1.py_name == '(?P=')) {
		if (__t__ (s0.py_name == ')')) {
			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\' + str (namedGroups [s1.paras [0]]))]);
		}
		else if (__t__ (!__t__ ((s1.paras)))) {
			s1.paras.append (s0.py_name);
			stack.py_pop ();
		}
		else {
			s1.paras [0] += s0.py_name;
			stack.py_pop ();
		}
	}
	else if (__t__ (s1.py_name == '(?#')) {
		if (__t__ (s0.py_name == ')')) {
			var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
		}
		else {
			var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
		}
	}
	else {
		var __left0__ = shift (stack, queue);
		var stack = __left0__ [0];
		var queue = __left0__ [1];
		var done = __left0__ [2];
	}
	return tuple ([stack, queue, flags, done]);
};
export var translate = function (rgx) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'rgx': var rgx = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var stack = [];
	var queue = list (rgx);
	var flags = 0;
	var namedGroups = dict ();
	var nloop = 0;
	while (__t__ (true)) {
		nloop++;
		if (__t__ (nloop > MAX_SHIFTREDUCE_LOOPS)) {
			var __except0__ = Exception ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var __left0__ = shiftReduce (stack, queue, namedGroups, flags);
		var stack = __left0__ [0];
		var queue = __left0__ [1];
		var flags = __left0__ [2];
		var done = __left0__ [3];
		if (__t__ (done)) {
			break;
		}
	}
	var variants = splitIfElse (stack, namedGroups);
	var n_splits = len (variants);
	var final = [];
	for (var i = 0; i < len (variants); i++) {
		final.extend (variants [i]);
		if (__t__ (i < len (variants) - 1)) {
			final.append (Token ('|'));
		}
	}
	var stack = final;
	var groupInfo = generateGroupSpans (stack);
	var resolvedTokens = [];
	for (var token of stack) {
		var stringed = token.resolve ();
		if (__t__ (__t__ (flags & re.DOTALL) && stringed == '.')) {
			var stringed = '[\\s\\S]';
		}
		resolvedTokens.append (stringed);
	}
	return tuple ([resolvedTokens, flags, namedGroups, countCaptureGroups (stack), n_splits]);
};

//# sourceMappingURL=re.translate.map
