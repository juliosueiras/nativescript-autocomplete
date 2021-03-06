"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editable_text_base_1 = require("tns-core-modules/ui/editable-text-base");
var app = require("tns-core-modules/application");
var color_1 = require("tns-core-modules/color");
var AutoComplete = (function (_super) {
    __extends(AutoComplete, _super);
    function AutoComplete() {
        return _super.call(this) || this;
    }
    Object.defineProperty(AutoComplete.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoComplete.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            if (value) {
                this.itemsUpdate(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoComplete.prototype, "threshold", {
        get: function () {
            return this._threshold;
        },
        set: function (value) {
            this._threshold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoComplete.prototype, "textColor", {
        get: function () {
            return this._textColor;
        },
        set: function (value) {
            this._textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    AutoComplete.prototype.createNativeView = function () {
        this._android = new android.widget.AutoCompleteTextView(app.android.context);
        if (!this.threshold) {
            this._android.setThreshold(1);
        }
        else {
            this._android.setThreshold(this.threshold);
        }
        if (!this.textColor) {
            this._android.setTextColor(new color_1.Color('black').android);
        }
        else {
            this._android.setTextColor(new color_1.Color(this.textColor).android);
        }
        var that = new WeakRef(this);
        this._android.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({
            onItemClick: function (parent, view, index, id) {
                var owner = that.get();
                if (owner) {
                    owner.notify({ eventName: AutoComplete.itemTapEvent, object: owner, index: index, view: view, data: view.getText() });
                }
            }
        }));
        this._android.setOnDismissListener(new android.widget.AutoCompleteTextView.OnDismissListener({
            onDismiss: function () {
                var owner = that.get();
                if (owner) {
                    owner.notify({ eventName: AutoComplete.onClose, object: owner });
                }
            }
        }));
        return this._android;
    };
    AutoComplete.prototype.itemsUpdate = function (items) {
        var arr = Array.create(java.lang.String, this.items.length);
        this.items.forEach(function (item, index) {
            arr[index] = item;
        });
        var ad = new android.widget.ArrayAdapter(app.android.context, android.R.layout.simple_list_item_1, arr);
        this._android.setAdapter(ad);
    };
    AutoComplete.prototype.showDropDown = function () {
        this._android.showDropDown();
    };
    AutoComplete.prototype.dismissDropDown = function () {
        this._android.dismissDropDown();
    };
    AutoComplete.prototype.clearListSelection = function () {
        this._android.clearListSelection();
    };
    AutoComplete.prototype.setDropDownHorizontalOffset = function (offset) {
        this._android.setDropDownHorizontalOffset(offset);
    };
    AutoComplete.prototype.setDropDownVerticalOffset = function (offset) {
        this._android.setDropDownVerticalOffset(offset);
    };
    AutoComplete.prototype.setDropDownWidth = function (width) {
        this._android.setDropDownWidth(width);
    };
    AutoComplete.prototype.setListSelection = function (index) {
        this._android.setListSelection(index);
    };
    return AutoComplete;
}(editable_text_base_1.EditableTextBase));
AutoComplete.itemTapEvent = "itemTap";
AutoComplete.onClose = "onClose";
exports.AutoComplete = AutoComplete;
