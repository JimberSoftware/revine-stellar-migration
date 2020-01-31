import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {BlockstakeOutput, CoinOutput, MinerPayout} from './tfchain.types.IO.js';
import {ERC20Address} from './tfchain.types.ERC20.js';
import {Currency, Hash} from './tfchain.types.PrimitiveTypes.js';
import {ConditionMultiSignature, UnlockHash, UnlockHashType} from './tfchain.types.ConditionTypes.js';
import {TransactionV128} from './tfchain.types.transactions.Minting.js';
import {TransactionBaseClass} from './tfchain.types.transactions.Base.js';
import * as transactions from './tfchain.types.transactions.js';
import * as ConditionTypes from './tfchain.types.ConditionTypes.js';
import * as tfchaintype from './tfchain.chain.js';
import {MultiSigWalletBalance, SingleSigWalletBalance, WalletBalance} from './tfchain.balance.js';
import * as tfexplorer from './tfchain.explorer.js';
import * as tferrors from './tfchain.errors.js';
import * as jslog from './tfchain.polyfill.log.js';
import * as jsarr from './tfchain.polyfill.array.js';
import * as jsdate from './tfchain.polyfill.date.js';
import * as jsasync from './tfchain.polyfill.asynchronous.js';
import * as jsjson from './tfchain.polyfill.encoding.json.js';
import * as jsstr from './tfchain.polyfill.encoding.str.js';
import * as jsobj from './tfchain.polyfill.encoding.object.js';
var __name__ = 'tfchain.client';
export var TFChainClient =  __class__ ('TFChainClient', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, explorer_client, network_type) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'explorer_client': var explorer_client = __allkwargs0__ [__attrib0__]; break;
						case 'network_type': var network_type = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (explorer_client, tfexplorer.Client))) {
			var __except0__ = py_TypeError ('explorer_client has to be a tfexplorer.Client, cannot be {}'.format (py_typeof (explorer_client)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._explorer_client = explorer_client;
		if (!(isinstance (network_type, tfchaintype.NetworkType))) {
			var __except0__ = py_TypeError ('network_type has to be a tfchaintype.NetworkType, cannot be {}'.format (py_typeof (network_type)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._network_type = network_type;
		self._minter = TFChainMinterClient (self);
		self._authcoin = RivineAuthCoinClient (self);
	});},
	get _get_minter () {return __get__ (this, function (self) {
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
		return self._minter;
	});},
	get _get_authcoin () {return __get__ (this, function (self) {
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
		return self._authcoin;
	});},
	get _get_explorer_addresses () {return __get__ (this, function (self) {
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
		return self._explorer_client.addresses;
	});},
	get blockchain_info_get () {return __get__ (this, function (self) {
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
		var get_block = function (result) {
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
			var __left0__ = result;
			var used_addr = __left0__ [0];
			var raw_block = __left0__ [1];
			var address = used_addr;
			var get_block_with_tag = function (result) {
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
				return tuple (['b', tuple ([address, result])]);
			};
			var blockid = Hash.from_json (__kwargtrans__ ({obj: raw_block ['blockid']}));
			return jsasync.chain (self.block_get (blockid), get_block_with_tag);
		};
		var get_constants_with_tag = function (result) {
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
			return tuple (['c', result]);
		};
		var get_info = function (results) {
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
			if (len (results) != 2) {
				var __except0__ = RuntimeError ('expected 2 values as result, but received: {}'.format (results));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var d = dict (results);
			var __left0__ = d ['c'];
			var _ = __left0__ [0];
			var raw_constants = __left0__ [1];
			var info = raw_constants ['chaininfo'];
			var constants = BlockchainConstants (info ['Name'], info ['ChainVersion'], info ['NetworkName']);
			var __left0__ = d ['b'];
			var address = __left0__ [0];
			var last_block = __left0__ [1];
			return ExplorerBlockchainInfo (__kwargtrans__ ({constants: constants, last_block: last_block, explorer_address: address}));
		};
		return jsasync.chain (jsasync.wait (jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: '/explorer'})), get_block), jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: '/explorer/constants'})), get_constants_with_tag)), get_info);
	});},
	get block_get () {return __get__ (this, function (self, value) {
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
		var p = null;
		if (isinstance (value, int)) {
			var p = self._block_get_by_height (value);
		}
		else {
			var p = self._block_get_by_hash (value);
		}
		return jsasync.chain (p, self._block_get_parse_cb);
	});},
	get _block_get_parse_cb () {return __get__ (this, function (self, result) {
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
		var __left0__ = result;
		var endpoint = __left0__ [0];
		var block = __left0__ [1];
		try {
			var transactions = [];
			for (var etxn of block ['transactions']) {
				var transaction = self._transaction_from_explorer_transaction (etxn, __kwargtrans__ ({endpoint: endpoint, resp: block}));
				transactions.append (transaction);
			}
			var rawblock = block ['rawblock'];
			var parentid = Hash.from_json (__kwargtrans__ ({obj: rawblock ['parentid']}));
			var miner_payouts = [];
			var minerpayoutids = block.get_or ('minerpayoutids', null) || [];
			var eminerpayouts = rawblock.get_or ('minerpayouts', null) || [];
			if (len (eminerpayouts) != len (minerpayoutids)) {
				var __except0__ = tferrors.ExplorerInvalidResponse ('amount of miner payouts and payout ids are not matching: {} != {}'.format (len (eminerpayouts), len (minerpayoutids)), endpoint, block);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			for (var [idx, mp] of enumerate (eminerpayouts)) {
				var id = Hash.from_json (minerpayoutids [idx]);
				var value = Currency.from_json (mp ['value']);
				var unlockhash = UnlockHash.from_json (mp ['unlockhash']);
				miner_payouts.append (ExplorerMinerPayout (__kwargtrans__ ({id: id, value: value, unlockhash: unlockhash})));
			}
			var height = int (block ['height']);
			var timestamp = int (rawblock ['timestamp']);
			var blockid = Hash.from_json (block ['blockid']);
			return ExplorerBlock (__kwargtrans__ ({id: blockid, parentid: parentid, height: height, timestamp: timestamp, transactions: transactions, miner_payouts: miner_payouts}));
		}
		catch (__except0__) {
			if (isinstance (__except0__, KeyError)) {
				var exc = __except0__;
				var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, block);
				__except1__.__cause__ = exc;
				throw __except1__;
			}
			else {
				throw __except0__;
			}
		}
	});},
	get _block_get_by_height () {return __get__ (this, function (self, value) {
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
		var endpoint = '/explorer/blocks/{}'.format (value);
		var get_block_prop = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var result = __left0__ [1];
			var block = result.get_or ('block', null);
			if (block == null) {
				var __except0__ = tferrors.ExplorerInvalidResponse ('block property is undefined', endpoint, result);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return tuple ([endpoint, block]);
		};
		return jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), get_block_prop);
	});},
	get _block_get_by_hash () {return __get__ (this, function (self, value) {
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
		var blockid = self._normalize_id (value);
		var endpoint = '/explorer/hashes/' + blockid;
		var get_block_prop = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var result = __left0__ [1];
			try {
				if (result ['hashtype'] != 'blockid') {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected hash type 'blockid' not '{}'".format (result ['hashtype']), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var block = result ['block'];
				if (block ['blockid'] != blockid) {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected block ID '{}' not '{}'".format (blockid.__str__ (), block ['blockid']), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				return tuple ([endpoint, block]);
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, result);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), get_block_prop);
	});},
	get transaction_get () {return __get__ (this, function (self, txid) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'txid': var txid = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var txid = self._normalize_id (txid);
		var endpoint = '/explorer/hashes/' + txid;
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var result = __left0__ [1];
			try {
				if (result ['hashtype'] != 'transactionid') {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected hash type 'transactionid' not '{}'".format (result ['hashtype']), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var txnresult = result ['transaction'];
				if (txnresult ['id'] != txid) {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected transaction ID '{}' not '{}'".format (txid, txnresult ['id']), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				return self._transaction_from_explorer_transaction (txnresult, __kwargtrans__ ({endpoint: endpoint, resp: result}));
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, result);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb);
	});},
	get transaction_put () {return __get__ (this, function (self, transaction) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'transaction': var transaction = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (transaction, TransactionBaseClass)) {
			var transaction = transaction.json ();
		}
		if (!(jsobj.is_js_obj (transaction))) {
			var __except0__ = py_TypeError ('transaction is of an invalid type {}'.format (py_typeof (transaction)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var endpoint = '/transactionpool/transactions';
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var transaction = __left0__ [1];
			try {
				return Hash (__kwargtrans__ ({value: transaction ['transactionid']})).__str__ ();
			}
			catch (__except0__) {
				if (isinstance (__except0__, tuple ([KeyError, ValueError, py_TypeError]))) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, transaction);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self.explorer_post (__kwargtrans__ ({endpoint: endpoint, data: transaction})), cb);
	});},
	get unconfirmed_transactions_get () {return __get__ (this, function (self) {
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
		var endpoint = '/transactionpool/transactions';
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var resp = __left0__ [1];
			try {
				var unconfirmed_transactions = [];
				var resp_transactions = resp ['transactions'];
				if (resp_transactions != null && jsobj.is_js_arr (resp_transactions)) {
					for (var etxn of resp_transactions) {
						var transaction = transactions.from_json (__kwargtrans__ ({obj: etxn}));
						transaction.id = transaction.transaction_id_new ();
						transaction.unconfirmed = true;
						unconfirmed_transactions.append (transaction);
					}
				}
				return unconfirmed_transactions;
			}
			catch (__except0__) {
				if (isinstance (__except0__, tuple ([KeyError, ValueError, py_TypeError]))) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, transaction);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb);
	});},
	get unlockhash_get () {return __get__ (this, function (self, target) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var unlockhash = ConditionTypes.from_recipient (target).unlockhash.__str__ ();
		var endpoint = '/explorer/hashes/' + unlockhash;
		var catch_no_content = function (reason) {
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
			if (isinstance (reason, tferrors.ExplorerNoContent)) {
				jslog.debug ('catch_no_content: returning empty result for ', unlockhash, reason);
				return ExplorerUnlockhashResult (__kwargtrans__ ({unlockhash: UnlockHash.from_json (unlockhash), transactions: [], multisig_addresses: null, erc20_info: null}));
			}
			var __except0__ = reason;
			__except0__.__cause__ = null;
			throw __except0__;
		};
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var resp = __left0__ [1];
			try {
				if (resp ['hashtype'] != 'unlockhash') {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected hash type 'unlockhash' not '{}'".format (resp ['hashtype']), endpoint, resp);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var transactions = [];
				var resp_transactions = resp ['transactions'];
				if (resp_transactions != null && jsobj.is_js_arr (resp_transactions)) {
					for (var etxn of resp_transactions) {
						var transaction = self._transaction_from_explorer_transaction (etxn, __kwargtrans__ ({endpoint: endpoint, resp: resp}));
						transactions.append (transaction);
					}
				}
				var multisig_addresses = (function () {
					var __accu0__ = [];
					for (var uh of resp.get_or ('multisigaddresses', null) || []) {
						__accu0__.append (UnlockHash.from_json (__kwargtrans__ ({obj: uh})));
					}
					return __accu0__;
				}) ();
				for (var addr of multisig_addresses) {
					if (addr.uhtype.__ne__ (UnlockHashType.MULTI_SIG)) {
						var __except0__ = tferrors.ExplorerInvalidResponse ('invalid unlock hash type {} for MultiSignature Address (expected: 3)'.format (addr.uhtype.value), endpoint, resp);
						__except0__.__cause__ = null;
						throw __except0__;
					}
				}
				var erc20_info = null;
				if (__in__ ('erc20info', resp)) {
					var info = resp ['erc20info'];
					var erc20_info = ERC20AddressInfo (__kwargtrans__ ({address_tft: UnlockHash.from_json (info ['tftaddress']), address_erc20: ERC20Address.from_json (info ['erc20address']), confirmations: int (info ['confirmations'])}));
				}
				var txn_arr_sort = function (a, b) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'a': var a = __allkwargs0__ [__attrib0__]; break;
									case 'b': var b = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					var height_a = (a.height < 0 ? pow (2, 64) : a.height);
					var height_b = (b.height < 0 ? pow (2, 64) : b.height);
					if (height_a < height_b) {
						return -(1);
					}
					if (height_a > height_b) {
						return 1;
					}
					var tx_order_a = (a.transaction_order < 0 ? pow (2, 64) : a.transaction_order);
					var tx_order_b = (b.transaction_order < 0 ? pow (2, 64) : b.transaction_order);
					if (tx_order_a < tx_order_b) {
						return -(1);
					}
					if (tx_order_a > tx_order_b) {
						return 1;
					}
					return 0;
				};
				var transactions = jsarr.py_sort (transactions, txn_arr_sort, __kwargtrans__ ({reverse: true}));
				return ExplorerUnlockhashResult (__kwargtrans__ ({unlockhash: UnlockHash.from_json (unlockhash), transactions: transactions, multisig_addresses: multisig_addresses, erc20_info: erc20_info}));
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, resp);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.catch_promise (jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb), catch_no_content);
	});},
	get coin_output_get () {return __get__ (this, function (self, id) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._output_get (id, __kwargtrans__ ({expected_hash_type: 'coinoutputid'}));
	});},
	get blockstake_output_get () {return __get__ (this, function (self, id) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._output_get (id, __kwargtrans__ ({expected_hash_type: 'blockstakeoutputid'}));
	});},
	get _output_get () {return __get__ (this, function (self, id, expected_hash_type) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
						case 'expected_hash_type': var expected_hash_type = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!__in__ (expected_hash_type, tuple (['coinoutputid', 'blockstakeoutputid']))) {
			var __except0__ = ValueError ("expected hash type should be one of ('coinoutputid', 'blockstakeoutputid'), not {}".format (expected_hash_type));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var id = self._normalize_id (id);
		var endpoint = '/explorer/hashes/' + id;
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var result = __left0__ [1];
			try {
				var hash_type = result ['hashtype'];
				if (hash_type != expected_hash_type) {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected hash type '{}', not '{}'".format (expected_hash_type, hash_type), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var tresp = result ['transactions'];
				var lresp = len (tresp);
				if (!__in__ (lresp, tuple ([1, 2]))) {
					var __except0__ = tferrors.ExplorerInvalidResponse ('expected one or two transactions to be returned, not {}'.format (lresp), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var creation_txn = tresp [0];
				var spend_txn = null;
				if (lresp == 2) {
					if (tresp [1] ['height'] > creation_txn ['height']) {
						var spend_txn = tresp [1];
					}
					else {
						var spend_txn = creation_txn;
						var creation_txn = tresp [1];
					}
				}
				var creation_txn = self._transaction_from_explorer_transaction (creation_txn, __kwargtrans__ ({endpoint: endpoint, resp: result}));
				if (spend_txn != null) {
					var spend_txn = self._transaction_from_explorer_transaction (spend_txn, __kwargtrans__ ({endpoint: endpoint, resp: result}));
				}
				var output = null;
				for (var out of (hash_type == 'coinoutputid' ? creation_txn.coin_outputs : creation_txn.blockstake_outputs)) {
					if (str (out.id) == id) {
						var output = out;
						break;
					}
				}
				if (output == null) {
					var __except0__ = tferrors.ExplorerInvalidResponse ("expected output {} to be part of creation Tx, but it wasn't".format (id), endpoint, result);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				return ExplorerOutputResult (output, creation_txn, spend_txn);
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, result);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb);
	});},
	get _transaction_from_explorer_transaction () {return __get__ (this, function (self, etxn, endpoint, resp) {
		if (typeof endpoint == 'undefined' || (endpoint != null && endpoint.hasOwnProperty ("__kwargtrans__"))) {;
			var endpoint = '/?';
		};
		if (typeof resp == 'undefined' || (resp != null && resp.hasOwnProperty ("__kwargtrans__"))) {;
			var resp = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'etxn': var etxn = __allkwargs0__ [__attrib0__]; break;
						case 'endpoint': var endpoint = __allkwargs0__ [__attrib0__]; break;
						case 'resp': var resp = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (resp == null) {
			var resp = jsobj.new_dict ();
		}
		var transaction = transactions.from_json (__kwargtrans__ ({obj: etxn ['rawtransaction'], id: etxn ['id']}));
		var coininputoutputs = etxn.get_or ('coininputoutputs', null) || [];
		if (len (transaction.coin_inputs) != len (coininputoutputs)) {
			var __except0__ = tferrors.ExplorerInvalidResponse ('amount of coin inputs and parent outputs are not matching: {} != {}'.format (len (transaction.coin_inputs), len (coininputoutputs)), endpoint, resp);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var [idx, rco] of enumerate (coininputoutputs)) {
			var co = CoinOutput.from_json (__kwargtrans__ ({obj: rco}));
			co.id = transaction.coin_inputs [idx].parentid;
			transaction.coin_inputs [idx].parent_output = co;
			if (__in__ ('custody', rco) && __in__ ('iscustodyfee', rco ['custody']) && !(rco ['custody'] ['iscustodyfee'])) {
				transaction.coin_inputs [idx].parent_output.custody_fee = Currency.from_json (rco ['custody'] ['custodyfee']);
				transaction.coin_inputs [idx].parent_output.spendable_value = Currency.from_json (rco ['custody'] ['spendablevalue']);
				transaction.coin_inputs [idx].parent_output.spent = rco ['custody'] ['spent'];
			}
		}
		var coinoutputids = etxn.get_or ('coinoutputids', null) || [];
		if (len (transaction.coin_outputs) != len (coinoutputids)) {
			var __except0__ = tferrors.ExplorerInvalidResponse ('amount of coin outputs and output identifiers are not matching: {} != {}'.format (len (transaction.coin_outputs), len (coinoutputids)), endpoint, resp);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var [idx, id] of enumerate (coinoutputids)) {
			transaction.coin_outputs [idx].id = Hash.from_json (__kwargtrans__ ({obj: id}));
		}
		var coinoutputcustodyfees = etxn.get_or ('coinoutputcustodyfees', null) || [];
		if (len (coinoutputcustodyfees) > 0) {
			if (len (transaction.coin_outputs) != len (coinoutputcustodyfees)) {
				var __except0__ = tferrors.ExplorerInvalidResponse ('amount of coin outputs and output info are not matching: {} != {}'.format (len (transaction.coin_outputs), len (coinoutputcustodyfees)), endpoint, resp);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			for (var [idx, coinoutputcustodyfee] of enumerate (coinoutputcustodyfees)) {
				if (__in__ ('iscustodyfee', coinoutputcustodyfee) && !(coinoutputcustodyfee ['iscustodyfee'])) {
					transaction.coin_outputs [idx].custody_fee = Currency.from_json (coinoutputcustodyfee ['custodyfee']);
					transaction.coin_outputs [idx].spendable_value = Currency.from_json (coinoutputcustodyfee ['spendablevalue']);
					transaction.coin_outputs [idx].spent = coinoutputcustodyfee ['spent'];
				}
			}
		}
		var blockstakeinputoutputs = etxn.get_or ('blockstakeinputoutputs', null) || [];
		if (len (transaction.blockstake_inputs) != len (blockstakeinputoutputs)) {
			var __except0__ = tferrors.ExplorerInvalidResponse ('amount of blockstake inputs and parent outputs are not matching: {} != {}'.format (len (transaction.blockstake_inputs), len (blockstakeinputoutputs)), endpoint, resp);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var [idx, bso] of enumerate (blockstakeinputoutputs)) {
			var bso = BlockstakeOutput.from_json (__kwargtrans__ ({obj: bso}));
			bso.id = transaction.blockstake_inputs [idx].parentid;
			transaction.blockstake_inputs [idx].parent_output = bso;
		}
		var blockstakeoutputids = etxn.get_or ('blockstakeoutputids', null) || [];
		if (len (transaction.blockstake_outputs) != len (blockstakeoutputids)) {
			var __except0__ = tferrors.ExplorerInvalidResponse ('amount of blokstake outputs and output identifiers are not matching: {} != {}'.format (len (transaction.blockstake_inputs), len (blockstakeoutputids)), endpoint, resp);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var [idx, id] of enumerate (blockstakeoutputids)) {
			transaction.blockstake_outputs [idx].id = Hash.from_json (__kwargtrans__ ({obj: id}));
		}
		transaction.unconfirmed = etxn.get_or ('unconfirmed', false);
		if (!(transaction.unconfirmed)) {
			transaction.height = int (etxn.get_or ('height', 0));
			transaction.timestamp = int (etxn.get_or ('timestamp', 0));
			transaction.transaction_order = int (etxn.get_or ('order', 0));
			transaction.blockid = etxn.get_or ('parent', null);
			var miner_payouts = [];
			var rewardIndex = (self._network_type.block_creation_fee ().greater_than (0) ? 0 : -(1));
			for (var [idx, mp] of enumerate (etxn.get_or ('minerpayouts', []))) {
				var dmp = MinerPayout.from_json (mp);
				dmp.is_reward = idx == rewardIndex;
				dmp.unlockheight = transaction.height + self._network_type.miner_payout_block_delay ();
				miner_payouts.append (dmp);
			}
			transaction.miner_payouts = miner_payouts;
			if (self._network_type.block_creation_fee ().less_than_or_equal_to (0)) {
				if (len (transaction.miner_payouts) >= 1) {
					transaction.fee_payout_id = transaction.miner_payouts [0].id;
					transaction.fee_payout_address = transaction.miner_payouts [0].unlockhash;
				}
			}
			else if (len (transaction.miner_payouts) >= 2) {
				transaction.fee_payout_id = transaction.miner_payouts [1].id;
				transaction.fee_payout_address = transaction.miner_payouts [1].unlockhash;
			}
		}
		return transaction;
	});},
	get explorer_get () {return __get__ (this, function (self, endpoint, data) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
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
		return self._explorer_client.data_get (endpoint, __kwargtrans__ ({data: data}));
	});},
	get explorer_post () {return __get__ (this, function (self, endpoint, data) {
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
		return self._explorer_client.data_post (endpoint, data);
	});},
	get _normalize_id () {return __get__ (this, function (self, id) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return Hash (__kwargtrans__ ({value: id})).str ();
	});}
});
Object.defineProperty (TFChainClient, 'explorer_addresses', property.call (TFChainClient, TFChainClient._get_explorer_addresses));
Object.defineProperty (TFChainClient, 'authcoin', property.call (TFChainClient, TFChainClient._get_authcoin));
Object.defineProperty (TFChainClient, 'minter', property.call (TFChainClient, TFChainClient._get_minter));;
export var ExplorerOutputResult =  __class__ ('ExplorerOutputResult', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, output, creation_tx, spend_tx) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'output': var output = __allkwargs0__ [__attrib0__]; break;
						case 'creation_tx': var creation_tx = __allkwargs0__ [__attrib0__]; break;
						case 'spend_tx': var spend_tx = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (output, tuple ([CoinOutput, BlockstakeOutput])))) {
			var __except0__ = py_TypeError ('output has to be a coin- or blocktake output, not be of type {}'.format (py_typeof (output)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._output = output;
		if (!(isinstance (creation_tx, TransactionBaseClass))) {
			var __except0__ = py_TypeError ('creation tx has to be of type TransactionBaseClass, not be of type {}'.format (py_typeof (creation_tx)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._creation_tx = creation_tx;
		if (spend_tx != null && !(isinstance (spend_tx, TransactionBaseClass))) {
			var __except0__ = py_TypeError ('spend tx has to be None or be of type TransactionBaseClass, not be of type {}'.format (py_typeof (spend_tx)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._spend_tx = spend_tx;
	});},
	get _get_output () {return __get__ (this, function (self) {
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
		return self._output;
	});},
	get _get_creation_transaction () {return __get__ (this, function (self) {
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
		return self._creation_tx;
	});},
	get _get_spend_transaction () {return __get__ (this, function (self) {
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
		return self._spend_tx;
	});}
});
Object.defineProperty (ExplorerOutputResult, 'spend_transaction', property.call (ExplorerOutputResult, ExplorerOutputResult._get_spend_transaction));
Object.defineProperty (ExplorerOutputResult, 'creation_transaction', property.call (ExplorerOutputResult, ExplorerOutputResult._get_creation_transaction));
Object.defineProperty (ExplorerOutputResult, 'output', property.call (ExplorerOutputResult, ExplorerOutputResult._get_output));;
export var ExplorerBlockchainInfo =  __class__ ('ExplorerBlockchainInfo', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, constants, last_block, explorer_address) {
		if (typeof constants == 'undefined' || (constants != null && constants.hasOwnProperty ("__kwargtrans__"))) {;
			var constants = null;
		};
		if (typeof last_block == 'undefined' || (last_block != null && last_block.hasOwnProperty ("__kwargtrans__"))) {;
			var last_block = null;
		};
		if (typeof explorer_address == 'undefined' || (explorer_address != null && explorer_address.hasOwnProperty ("__kwargtrans__"))) {;
			var explorer_address = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'constants': var constants = __allkwargs0__ [__attrib0__]; break;
						case 'last_block': var last_block = __allkwargs0__ [__attrib0__]; break;
						case 'explorer_address': var explorer_address = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (constants == null) {
			self._constants = BlockchainConstants ();
		}
		else {
			if (!(isinstance (constants, BlockchainConstants))) {
				var __except0__ = py_TypeError ('expected constants to be of type BlockchainConstants, not type {}'.format (py_typeof (constants)));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			self._constants = constants;
		}
		if (last_block == null) {
			self._last_block = ExplorerBlock ();
		}
		else {
			if (!(isinstance (last_block, ExplorerBlock))) {
				var __except0__ = py_TypeError ('expected constants to be of type ExplorerBlock, not type {}'.format (py_typeof (constants)));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			self._last_block = last_block;
		}
		if (explorer_address == null) {
			self._explorer_address = '';
		}
		else {
			if (!(isinstance (explorer_address, str)) || explorer_address == '') {
				var __except0__ = py_TypeError ('expected explorer address to be a non-empty str, not be {} ({})'.format (explorer_address, py_typeof (explorer_address)));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			self._explorer_address = explorer_address;
		}
	});},
	get _get_explorer_address () {return __get__ (this, function (self) {
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
		return self._explorer_address;
	});},
	get _get_constants () {return __get__ (this, function (self) {
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
		return self._constants;
	});},
	get _get_last_block () {return __get__ (this, function (self) {
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
		return self._last_block;
	});},
	get _get_blockid () {return __get__ (this, function (self) {
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
		return self.last_block.id.__str__ ();
	});},
	get _get_height () {return __get__ (this, function (self) {
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
		return self.last_block.height;
	});},
	get _get_timestamp () {return __get__ (this, function (self) {
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
		return self.last_block.timestamp;
	});}
});
Object.defineProperty (ExplorerBlockchainInfo, 'timestamp', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_timestamp));
Object.defineProperty (ExplorerBlockchainInfo, 'height', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_height));
Object.defineProperty (ExplorerBlockchainInfo, 'blockid', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_blockid));
Object.defineProperty (ExplorerBlockchainInfo, 'last_block', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_last_block));
Object.defineProperty (ExplorerBlockchainInfo, 'constants', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_constants));
Object.defineProperty (ExplorerBlockchainInfo, 'explorer_address', property.call (ExplorerBlockchainInfo, ExplorerBlockchainInfo._get_explorer_address));;
export var BlockchainConstants =  __class__ ('BlockchainConstants', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, chain_name, chain_version, chain_network) {
		if (typeof chain_name == 'undefined' || (chain_name != null && chain_name.hasOwnProperty ("__kwargtrans__"))) {;
			var chain_name = null;
		};
		if (typeof chain_version == 'undefined' || (chain_version != null && chain_version.hasOwnProperty ("__kwargtrans__"))) {;
			var chain_version = null;
		};
		if (typeof chain_network == 'undefined' || (chain_network != null && chain_network.hasOwnProperty ("__kwargtrans__"))) {;
			var chain_network = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'chain_name': var chain_name = __allkwargs0__ [__attrib0__]; break;
						case 'chain_version': var chain_version = __allkwargs0__ [__attrib0__]; break;
						case 'chain_network': var chain_network = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._chain_name = chain_name || '';
		self._chain_version = chain_version || '';
		self._chain_network = chain_network || '';
	});},
	get _get_chain_name () {return __get__ (this, function (self) {
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
		return self._chain_name;
	});},
	get _get_chain_version () {return __get__ (this, function (self) {
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
		return self._chain_version;
	});},
	get _get_chain_network () {return __get__ (this, function (self) {
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
		return self._chain_network;
	});}
});
Object.defineProperty (BlockchainConstants, 'chain_network', property.call (BlockchainConstants, BlockchainConstants._get_chain_network));
Object.defineProperty (BlockchainConstants, 'chain_version', property.call (BlockchainConstants, BlockchainConstants._get_chain_version));
Object.defineProperty (BlockchainConstants, 'chain_name', property.call (BlockchainConstants, BlockchainConstants._get_chain_name));;
export var ExplorerUnlockhashResult =  __class__ ('ExplorerUnlockhashResult', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, unlockhash, transactions, multisig_addresses, erc20_info) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'unlockhash': var unlockhash = __allkwargs0__ [__attrib0__]; break;
						case 'transactions': var transactions = __allkwargs0__ [__attrib0__]; break;
						case 'multisig_addresses': var multisig_addresses = __allkwargs0__ [__attrib0__]; break;
						case 'erc20_info': var erc20_info = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._unlockhash = unlockhash;
		self._transactions = transactions || [];
		self._multisig_addresses = multisig_addresses || [];
		self._erc20_info = erc20_info;
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
	get _get_transactions () {return __get__ (this, function (self) {
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
		return self._transactions;
	});},
	get _get_multisig_addresses () {return __get__ (this, function (self) {
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
		return self._multisig_addresses;
	});},
	get _get_erc20_info () {return __get__ (this, function (self) {
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
		return self._erc20_info;
	});},
	get balance () {return __get__ (this, function (self, info) {
		if (typeof info == 'undefined' || (info != null && info.hasOwnProperty ("__kwargtrans__"))) {;
			var info = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'info': var info = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._unlockhash.uhtype.__eq__ (UnlockHashType.MULTI_SIG)) {
			if (len (self._multisig_addresses) > 0) {
				var __except0__ = RuntimeError ('BUG: ms addresses should be empty, but have: {}'.format (self._multisig_addresses));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var balance = self._multisig_balance (info);
		}
		else {
			var balance = SingleSigWalletBalance ();
			for (var address of self._multisig_addresses) {
				balance.multisig_address_add (address);
			}
			var address = self.unlockhash.__str__ ();
			for (var txn of self.transactions) {
				for (var [index, ci] of enumerate (txn.coin_inputs)) {
					var uhstr = ci.parent_output.condition.unlockhash.__str__ ();
					if (uhstr == address) {
						balance.output_add (txn, index, __kwargtrans__ ({confirmed: !(txn.unconfirmed), spent: true}));
					}
				}
				for (var [index, co] of enumerate (txn.coin_outputs)) {
					var uhstr = co.condition.unlockhash.__str__ ();
					if (uhstr == address) {
						balance.output_add (txn, index, __kwargtrans__ ({confirmed: !(txn.unconfirmed), spent: false}));
					}
				}
			}
		}
		if (info != null) {
			balance.chain_height = info.height;
			balance.chain_time = info.timestamp;
			balance.chain_blockid = info.blockid;
		}
		return balance;
	});},
	get _multisig_balance () {return __get__ (this, function (self, info) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'info': var info = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var balance = MultiSigWalletBalance ();
		var address = self.unlockhash.__str__ ();
		for (var txn of self.transactions) {
			for (var [index, ci] of enumerate (txn.coin_inputs)) {
				if (ci.parent_output.condition.unlockhash.__str__ () == address) {
					var oc = ci.parent_output.condition.unwrap ();
					if (!(isinstance (oc, ConditionMultiSignature))) {
						var __except0__ = py_TypeError ("multi signature's output condition cannot be of type {} (expected: ConditionMultiSignature)".format (py_typeof (oc)));
						__except0__.__cause__ = null;
						throw __except0__;
					}
					balance.output_add (txn, index, __kwargtrans__ ({confirmed: !(txn.unconfirmed), spent: true}));
				}
			}
			for (var [index, co] of enumerate (txn.coin_outputs)) {
				if (co.condition.unlockhash.__str__ () == address) {
					var oc = co.condition.unwrap ();
					if (!(isinstance (oc, ConditionMultiSignature))) {
						var __except0__ = py_TypeError ("multi signature's output condition cannot be of type {} (expected: ConditionMultiSignature)".format (py_typeof (oc)));
						__except0__.__cause__ = null;
						throw __except0__;
					}
					balance.output_add (txn, index, __kwargtrans__ ({confirmed: !(txn.unconfirmed), spent: false}));
				}
			}
			if (isinstance (txn, TransactionV128)) {
				balance.condition = txn.mint_condition;
			}
		}
		return balance;
	});}
});
Object.defineProperty (ExplorerUnlockhashResult, 'erc20_info', property.call (ExplorerUnlockhashResult, ExplorerUnlockhashResult._get_erc20_info));
Object.defineProperty (ExplorerUnlockhashResult, 'multisig_addresses', property.call (ExplorerUnlockhashResult, ExplorerUnlockhashResult._get_multisig_addresses));
Object.defineProperty (ExplorerUnlockhashResult, 'transactions', property.call (ExplorerUnlockhashResult, ExplorerUnlockhashResult._get_transactions));
Object.defineProperty (ExplorerUnlockhashResult, 'unlockhash', property.call (ExplorerUnlockhashResult, ExplorerUnlockhashResult._get_unlockhash));;
export var ERC20AddressInfo =  __class__ ('ERC20AddressInfo', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, address_tft, address_erc20, confirmations) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'address_tft': var address_tft = __allkwargs0__ [__attrib0__]; break;
						case 'address_erc20': var address_erc20 = __allkwargs0__ [__attrib0__]; break;
						case 'confirmations': var confirmations = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._address_tft = address_tft;
		self._address_erc20 = address_erc20;
		self._confirmations = confirmations;
	});},
	get _get_address_tft () {return __get__ (this, function (self) {
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
		return self._address_tft;
	});},
	get _get_address_erc20 () {return __get__ (this, function (self) {
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
		return self._address_erc20;
	});},
	get _get_confirmations () {return __get__ (this, function (self) {
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
		return self._confirmations;
	});}
});
Object.defineProperty (ERC20AddressInfo, 'confirmations', property.call (ERC20AddressInfo, ERC20AddressInfo._get_confirmations));
Object.defineProperty (ERC20AddressInfo, 'address_erc20', property.call (ERC20AddressInfo, ERC20AddressInfo._get_address_erc20));
Object.defineProperty (ERC20AddressInfo, 'address_tft', property.call (ERC20AddressInfo, ERC20AddressInfo._get_address_tft));;
export var ExplorerBlock =  __class__ ('ExplorerBlock', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, id, parentid, height, timestamp, transactions, miner_payouts) {
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (typeof parentid == 'undefined' || (parentid != null && parentid.hasOwnProperty ("__kwargtrans__"))) {;
			var parentid = null;
		};
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (typeof timestamp == 'undefined' || (timestamp != null && timestamp.hasOwnProperty ("__kwargtrans__"))) {;
			var timestamp = null;
		};
		if (typeof transactions == 'undefined' || (transactions != null && transactions.hasOwnProperty ("__kwargtrans__"))) {;
			var transactions = null;
		};
		if (typeof miner_payouts == 'undefined' || (miner_payouts != null && miner_payouts.hasOwnProperty ("__kwargtrans__"))) {;
			var miner_payouts = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
						case 'parentid': var parentid = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
						case 'timestamp': var timestamp = __allkwargs0__ [__attrib0__]; break;
						case 'transactions': var transactions = __allkwargs0__ [__attrib0__]; break;
						case 'miner_payouts': var miner_payouts = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._id = id || Hash ();
		self._parentid = parentid || Hash ();
		self._height = height || 0;
		self._timestamp = timestamp || 0;
		self._transactions = transactions || [];
		self._miner_payouts = miner_payouts || [];
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
		return self._id.__str__ ();
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
		return self._parentid.__str__ ();
	});},
	get _get_height () {return __get__ (this, function (self) {
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
		return self._height;
	});},
	get _get_timestamp () {return __get__ (this, function (self) {
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
		return self._timestamp;
	});},
	get _get_transactions () {return __get__ (this, function (self) {
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
		return self._transactions;
	});},
	get _get_miner_payouts () {return __get__ (this, function (self) {
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
		return self._miner_payouts;
	});},
	get __str__ () {return __get__ (this, function (self) {
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
		return str (self.id);
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
		return self.__str__ ();
	});}
});
Object.defineProperty (ExplorerBlock, 'miner_payouts', property.call (ExplorerBlock, ExplorerBlock._get_miner_payouts));
Object.defineProperty (ExplorerBlock, 'transactions', property.call (ExplorerBlock, ExplorerBlock._get_transactions));
Object.defineProperty (ExplorerBlock, 'timestamp', property.call (ExplorerBlock, ExplorerBlock._get_timestamp));
Object.defineProperty (ExplorerBlock, 'height', property.call (ExplorerBlock, ExplorerBlock._get_height));
Object.defineProperty (ExplorerBlock, 'parentid', property.call (ExplorerBlock, ExplorerBlock._get_parentid));
Object.defineProperty (ExplorerBlock, 'id', property.call (ExplorerBlock, ExplorerBlock._get_id));;
export var ExplorerMinerPayout =  __class__ ('ExplorerMinerPayout', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, id, value, unlockhash) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						case 'unlockhash': var unlockhash = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._id = id;
		self._value = value;
		self._unlockhash = unlockhash;
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
		return str (self._id);
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
		return str (self._unlockhash);
	});},
	get __str__ () {return __get__ (this, function (self) {
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
		return self.id.__str__ ();
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
		return self.__str__ ();
	});}
});
Object.defineProperty (ExplorerMinerPayout, 'unlockhash', property.call (ExplorerMinerPayout, ExplorerMinerPayout._get_unlockhash));
Object.defineProperty (ExplorerMinerPayout, 'value', property.call (ExplorerMinerPayout, ExplorerMinerPayout._get_value));
Object.defineProperty (ExplorerMinerPayout, 'id', property.call (ExplorerMinerPayout, ExplorerMinerPayout._get_id));;
export var TFChainMinterClient =  __class__ ('TFChainMinterClient', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, client) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'client': var client = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (client, TFChainClient))) {
			var __except0__ = py_TypeError ('client is expected to be a TFChainClient');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._client = client;
	});},
	get condition_get () {return __get__ (this, function (self, height) {
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var endpoint = '/explorer/mintcondition';
		if (height != null) {
			if (!(isinstance (height, tuple ([int, str])))) {
				var __except0__ = py_TypeError ('invalid block height given');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (isinstance (height, str)) {
				var height = jsstr.to_int (height);
			}
			endpoint += '/{}'.format (height);
		}
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var resp = __left0__ [1];
			try {
				return ConditionTypes.from_json (__kwargtrans__ ({obj: resp ['mintcondition']}));
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, resp);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self._client.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb);
	});}
});
export var RivineAuthCoinClient =  __class__ ('RivineAuthCoinClient', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, client) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'client': var client = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(isinstance (client, TFChainClient))) {
			var __except0__ = py_TypeError ('client is expected to be a TFChainClient');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._client = client;
	});},
	get condition_get () {return __get__ (this, function (self, height) {
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var endpoint = '/explorer/authcoin/condition';
		if (height != null) {
			if (!(isinstance (height, tuple ([int, str])))) {
				var __except0__ = py_TypeError ('invalid block height given');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (isinstance (height, str)) {
				var height = jsstr.to_int (height);
			}
			endpoint += '/{}'.format (height);
		}
		var cb = function (result) {
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
			var __left0__ = result;
			var _ = __left0__ [0];
			var resp = __left0__ [1];
			try {
				return ConditionTypes.from_json (__kwargtrans__ ({obj: resp ['authcondition']}));
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, resp);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self._client.explorer_get (__kwargtrans__ ({endpoint: endpoint})), cb);
	});},
	get auth_status_get () {return __get__ (this, function (self, addresses, height) {
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'addresses': var addresses = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(addresses)) {
			return jsasync.promise_new ((function __lambda__ (_) {
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
				return dict ({});
			}));
		}
		var concatChar = '?';
		var endpoint = '/explorer/authcoin/status';
		for (var address of addresses) {
			endpoint += '{}addr={}'.format (concatChar, address);
			var concatChar = '&';
		}
		if (height != null) {
			if (!(isinstance (height, tuple ([int, str])))) {
				var __except0__ = py_TypeError ('invalid block height given');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (isinstance (height, str)) {
				var height = jsstr.to_int (height);
			}
			endpoint += '&height={}'.format (height);
		}
		var addresses_cb = function (result) {
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
			try {
				var __left0__ = result;
				var _ = __left0__ [0];
				var result = __left0__ [1];
				var s = result ['auths'];
				var r = dict ({});
				for (var [index, addr] of enumerate (addresses)) {
					r [addr] = s [index];
				}
				return r;
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					var exc = __except0__;
					var __except1__ = tferrors.ExplorerInvalidResponse (str (exc), endpoint, result);
					__except1__.__cause__ = exc;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		};
		return jsasync.chain (self._client.explorer_get (__kwargtrans__ ({endpoint: endpoint})), addresses_cb);
	});}
});

//# sourceMappingURL=tfchain.client.map
