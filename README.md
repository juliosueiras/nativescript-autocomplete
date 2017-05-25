# Autocomplete for NativeScript

- [Autocomplete for NativeScript](#autocomplete-for-nativescript)
  * [Install](#install)
  * [Usage](#usage)
  * [ScreenShots](#screenshots)

## Install

```
$ tns plugin add https://github.com/juliosueiras/nativescript-autocomplete
```

## Usage

**INFO:** The Autocomplete include the text field, hence you don't need to include `<TextField>`

**IMPORTANT:** Make sure you include `xmlns:ac="nativescript-autocomplete"` on the Page element

e.g

```typescript
let item:Array<string> = ['1','2','3','4']
```

```typescript
itemTapped(args){
    const eventName = args.eventName;
    const data = args.data;
    const view = args.view;
    const index = args.index;
    const object = args.object;
}
```
```xml
<ac:Autocomplete  items="{{list}}" itemTap="itemTapped"/>
```


## ScreenShots

![Android](./screenshots/autocomplete.gif?raw=true)