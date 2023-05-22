"use strict";
exports.__esModule = true;
exports.HoaDon = void 0;
var HoaDon = /** @class */ (function () {
    function HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong) {
        this._cmnd = cmnd;
        this._ten = ten;
        this._tuoi = tuoi;
        this._soNgayThue = soNgayThue;
        this._loaiPhong = loaiPhong;
    }
    Object.defineProperty(HoaDon.prototype, "cmnd", {
        get: function () {
            return this._cmnd;
        },
        set: function (value) {
            this._cmnd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (value) {
            this._ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "tuoi", {
        get: function () {
            return this._tuoi;
        },
        set: function (value) {
            this._tuoi = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "soNgayThue", {
        get: function () {
            return this._soNgayThue;
        },
        set: function (value) {
            this._soNgayThue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "loaiPhong", {
        get: function () {
            return this._loaiPhong;
        },
        set: function (value) {
            this._loaiPhong = value;
        },
        enumerable: false,
        configurable: true
    });
    return HoaDon;
}());
exports.HoaDon = HoaDon;
