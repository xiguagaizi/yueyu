Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.removeTransactionObserver = exports.addTransactionObserver = void 0;
    var e, n = require("../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../@babel/runtime/helpers/asyncToGenerator"),
        r = (e = require("../api/iapVerify")) && e.__esModule ? e : {
            default: e
        },
        a = require("../commons/utils"),
        o = require("../commons/config");
    var i, s = {},
        c = {
            updatedTransactions: (i = t(n().mark((function e(i) {
                var c, u, l, d, p;
                return n().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = i.transactions, u = void 0 === c ? [] : c, console.log("update..."), console.warn(u), l = !1, d = !1, u.length) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return");
                        case 7:
                            if (wx.showLoading({
                                    title: "处理中...",
                                    mask: !0
                                }), !((p = u.map(function() {
                                    var e = t(n().mark((function e(t) {
                                        var a, o, i, c, u;
                                        return n().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a = t.transactionState, console.log("state", a), !(o = t.transactionIdentifier)) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    if (!s[o]) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 6:
                                                    s[o] = !0;
                                                case 7:
                                                    e.prev = 7, e.t0 = a, e.next = "SKPaymentTransactionStatePurchased" === e.t0 ? 11 : "SKPaymentTransactionStateFailed" === e.t0 ? 24 : "SKPaymentTransactionStatePurchasing" === e.t0 ? 28 : "SKPaymentTransactionStateRestored" === e.t0 ? 30 : 33;
                                                    break;
                                                case 11:
                                                    if (i = t.transactionReceipt) {
                                                        e.next = 16;
                                                        break
                                                    }
                                                    return console.warn("No receipt found in transaction"), wx.miniapp.IAP.finishTransaction({
                                                        transactionIdentifier: o
                                                    }), e.abrupt("break", 34);
                                                case 16:
                                                    return e.next = 18, (0, r.default)(i);
                                                case 18:
                                                    return c = e.sent, u = c.data, console.log("data", u), (null == u ? void 0 : u.status) >= 0 && wx.miniapp.IAP.finishTransaction({
                                                        transactionIdentifier: o
                                                    }), 0 === (null == u ? void 0 : u.status) && (l = !0), e.abrupt("break", 34);
                                                case 24:
                                                    return console.log("xxxxxxxxxxxxx"), hasError = !0, wx.miniapp.IAP.finishTransaction({
                                                        transactionIdentifier: o
                                                    }), e.abrupt("break", 34);
                                                case 28:
                                                    return d = !0, e.abrupt("break", 34);
                                                case 30:
                                                    return wx.miniapp.IAP.finishTransaction({
                                                        transactionIdentifier: o
                                                    }), console.log("交易恢复:", o), e.abrupt("break", 34);
                                                case 33:
                                                    console.warn("未知 transactionState:", a);
                                                case 34:
                                                    e.next = 39;
                                                    break;
                                                case 36:
                                                    e.prev = 36, e.t1 = e.catch(7), console.error("处理交易出错：", e.t1);
                                                case 39:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [7, 36]
                                        ])
                                    })));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }())).length > 0)) {
                                e.next = 12;
                                break
                            }
                            return e.next = 12, Promise.all(p);
                        case 12:
                            console.log("isPur", d), !0 !== d && wx.hideLoading(), l && ((0, a.setVip)(!0), wx.showModal({
                                title: "开通成功",
                                content: "您已开通会员",
                                confirmText: "去体验",
                                showCancel: !1,
                                complete: function() {
                                    wx.reLaunch({
                                        url: o.HOME_PATH
                                    })
                                }
                            }));
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), function(e) {
                return i.apply(this, arguments)
            }),
            restoreCompletedTransactionsFailedWithError: function(e) {
                console.log("restoreCompletedTransactionsFailedWithError:", e)
            },
            paymentQueueRestoreCompletedTransactionsFinished: function(e) {
                console.log("paymentQueueRestoreCompletedTransactionsFinished:", e)
            },
            shouldAddStorePayment: function(e) {
                console.log("shouldAddStorePayment:", e)
            },
            paymentQueueDidChangeStorefront: function(e) {
                console.log("paymentQueueDidChangeStorefront:", e)
            },
            didRevokeEntitlementsForProductIdentifiers: function(e) {
                console.log("didRevokeEntitlementsForProductIdentifiers:", e)
            }
        };
    exports.removeTransactionObserver = function() {
        wx.miniapp.IAP.removeTransactionObserver(c)
    };
    exports.addTransactionObserver = function() {
        wx.miniapp.IAP.addTransactionObserver(c)
    };