# Sorting with MixItUp

_Sorting allows us to change the order of target elements in a MixItUp container. This tutorial will discuss the various sorting techniques available in MixItUp 3._

## Control Buttons

Control buttons provide an easy way of building sorting UI, and allow for sorting either by the default order of targets in the DOM, or by the value of attributes present on targets.

Sort controls are queried by MixItUp on instantiation based on the presence of a `data-sort` attribute in their markup, and bound for click events. The value of each control's `data-sort` attribute (or "sort string", defines the control's sorting behavior, and is made up of an "attribute" component and an optional "order" component, or the string `'random'`.

The possible values of the order component are `':asc'`, or `':desc'`. If the order component is omitted, ascending order will be used by default.

The following examples illustrate some possible sort strings:

```js
// Default, ascending order

`default`

// Default, ascending order (order explicitly defined)

`default:asc`

// data-price, ascending order

`data-price`

// data-publish-date, descending order

`publish-date:desc`

// Random order

`random`
```

## Sorting by Default

The default order is the order that targets are found in the DOM when MixItUp is instantiated and targets are indexed. This equates to the sort string `'default:asc'`. If we want to reverse the default order, we can use the value `'default:desc'`.

#### Example: Sorting by default with control buttons

```html
<button type="button" data-sort="default:asc">Sort Ascending</button>
<button type="button" data-sort="default:desc">Sort Descending</button>
```

- [Demo: Sorting by Default](https://patrickkunka.github.io/mixitup/demos/sorting-by-attribute/)

> [!NOTE]
> You may use any clickable element as a control button, but <button type="button"> is recommended for accessibility, as it allows for easy keyboard control of your UI.

## Sorting by Attribute

To sort our targets according to specific values, we can reference a custom data attribute in the attribute component of the sort string. In this case, `'price'`:

```html
<div class="controls">
    <button type="button" data-sort="price:asc">Sort by price (low to high)</button>
    <button type="button" data-sort="price:desc">Sort by price (high to low)</button>
</div>

<div class="container">
    <div class="mix" data-price="14.99"></div>
    <div class="mix" data-price="29.99"></div>
    <div class="mix" data-price="59.99"></div>
</div>
```

As can be seen in the above example, when we reference a custom data attribute, the initial `'data-'` segment of the attribute name is omitted for brevity.

- [Demo: Sorting by Attribute](https://patrickkunka.github.io/mixitup/demos/sorting-by-attribute/)

> [!WARNING]
> When adding custom sorting attributes to your targets' markup, ensure that all attributes are present on _all_ targets in your container.

## Sorting by Multiple Attributes

Multiple sorting attributes can be added to targets as required, enabling users to sort content by a variety of attributes and orders.

```html
<div class="controls">
    <button type="button" data-sort="price:asc">Sort by price (low to high)</button>
    <button type="button" data-sort="price:desc">Sort by price (high to low)</button>

    <button type="button" data-sort="name:asc">Sort by name (A-Z)</button>
    <button type="button" data-sort="name:desc">Sort by name (Z-A)</button>
</div>

<div class="container">
    <div class="mix" data-price="14.99" data-name="Foo"></div>
    <div class="mix" data-price="29.99" data-name="Bar"></div>
    <div class="mix" data-price="59.99" data-name="Baz"></div>
</div>
```

We can also then sort content by multiple attributes simultaneously, with multiple space-separated sort strings:

```html
<button type="button" data-sort="price:desc name:asc">Sort by price (high to low)</button>
```

The above control would result in sorting firstly by price in descending order, and then by name in ascending order.

These types of sort strings are particularly useful when multiple targets in the container share the same value for one or more sort attributes, and can be used to ensure that sorting always results in a meaningful, readable order.

The following demo shows sorting by `published-date`, then by `name`. Notice how the middle row (Alpha, Mike, and Zulu) share the same publish date (2016-09-03) and always remain in alphabetic order. As JavaScript sorting is "destructive", we could not guarantee this behavior without specifying a secondary attribute to sort by.

- [Demo: Sorting by Multiple Attributes](https://patrickkunka.github.io/mixitup/demos/sorting-by-multiple-attributes/)

## Sort API

Sort controls are completely optional and in many cases, you may wish to build your own user interface to control a MixItUp instance. In these instances, we can use the `.sort()` API method to interface with our mixer.

The `.sort()` method can be used in a variety of different ways. The most common way is to send a sort string, just as you would use with a sort control.

```js
mixer.sort('price:desc')
    .then(function(state) {
        console.log(state.activeSort.sortString); // 'price:desc'
    });
```

The `.sort()` method returns a promise which resolves when the sorting animation ends.

Alternatively, you can provide the `.sort()` method with an array of elements, representing your final intended order.

This allows you to sort targets using your own custom code, before passing the final array to MixItUp.

```js
var collection = Array.from(container.querySelectorAll('.mix'));

// Swap the position of two elements in the collection:

var temp = collection[1];

collection[1] = collection[0];
collection[0] = temp;

// Pass the sorted collection to MixItUp

mixer.sort(collection)
    .then(function(state) {
        console.log(state.targets[0] === collection[0]); // true
    });
```

## Dataset API

All of the above techniques use either the DOM selector API or some form of interaction with the DOM. If you're building a modern JavaScript application with a data model, you may wish to use MixItUp 3's [Dataset API](./using-the-dataset-api.md) which allows us to bypass the DOM entirely and interact with MixItUp purely via changes to your model.
