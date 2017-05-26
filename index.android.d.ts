import * as view from 'tns-core-modules/ui/core/view';
import { EditableTextBase } from 'tns-core-modules/ui/editable-text-base';
export declare class AutoComplete extends EditableTextBase {
    private _android;
    private _items;
    private _textColor;
    private _threshold;
    static itemTapEvent: string;
    static onClose: string;
    constructor();
    readonly android: android.widget.AutoCompleteTextView;
    items: Array<any>;
    threshold: number;
    textColor: string;
    createNativeView(): android.widget.AutoCompleteTextView;
    itemsUpdate(items: any): void;
    showDropDown(): void;
    dismissDropDown(): void;
    clearListSelection(): void;
    setDropDownHorizontalOffset(offset: number): void;
    setDropDownVerticalOffset(offset: number): void;
    setDropDownWidth(width: number): void;
    setListSelection(index: number): void;
}
export interface ItemTap {
    eventName: string;
    object: view.View;
    index: number;
    view: android.widget.AutoCompleteTextView;
    data: string;
}
