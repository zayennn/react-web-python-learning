# Filtering with MixItUp

> Filtering allows us to show a subset of target elements in a MixItUp container. This tutorial will discuss the various filtering techniques available in MixItUp 3.

## Control Buttons

Control buttons provide an easy way of building filtering UI, and allow basic filtering via DOM selector querying. MixItUp 3 offers two types of filter-based controls: **filters** and **toggles**.

### Filter Controls

Filter controls allow a single selector to be active at any one time. When a filter control is clicked and becomes active, all other active filter controls are deactivated.

Filter controls are queried by MixItUp on instantiation based on the presence of a `data-filter` attribute in their markup, and then bound for click events. The value of each control's `data-filter` attribute defines the control's filtering action, which must be a valid selector (e.g. `'.category-a'`, `'[data-category~="a"]'`, etc), or the values `'all'` or `'none'`.

#### Example: Filter controls markup

```html
<button type="button" data-filter="all">Show all</button>
<button type="button" data-filter=".category-a">Category A</button>
<button type="button" data-filter=".category-b">Category B</button>
<button type="button" data-filter=".category-c">Category C</button>
<button type="button" data-filter="none">Hide all</button>
```

The following demo shows basic filtering functionality via filter control buttons:

- [Demo: Basic Filtering](https://patrickkunka.github.io/mixitup/demos/basic/)

### Toggle Controls

New to MixItUp 3, toggle controls are a means of combining multiple selectors. When a toggle control is clicked and becomes active, it stays active until it is clicked again and "toggled off". Multiple toggle controls may therefore be active simultaneously.

Toggle controls are queried based on the presence of a `data-toggle` attribute in their markup. The value of this attribute defines the control's filtering action, which must be a valid selector.

#### Example: Toggle controls markup

```html
<button type="button" data-filter="all">Show all</button>
<button type="button" data-toggle=".category-a">Category A</button>
<button type="button" data-toggle=".category-b">Category B</button>
<button type="button" data-toggle=".category-c">Category C</button>
```

As can be seen in the above example, filter controls and toggle controls may also exist simultaneously, but clicking a filter control will result in all toggle controls being deactivated (unless they share the same selector). The "Show all" filter control above provides an easy means of deactivating all active toggles in a single click.

> [!NOTE]
> You may use any clickable element as a control button, but <button type="button"> is recommended for accessibility, as it allows for easy keyboard control of your UI.

### Control Styling

When a filter or toggle control is clicked and becomes active, MixItUp will add an "active" modifier class to its markup for styling. By default, all controls receive the active class `'mixitup-control-active'`, but this can be customized via the `classNames` configuration stanza.

## Customizing the Behavior of Toggle Controls

Using the configuration object, we can customize several aspects of the behavior of toggle controls.

### `controls.toggleDefault`

New to MixItUp 3 is the `controls.toggleDefault` configuration option. This can be used to define the "default" state of the mixer when all toggles are deactivated. While we might expect that deactivating all toggles should result in an empty selector (e.g. `''` - equivalent to `'none'`), this can be counter-intuitive to users as a toggle-based UI is typically used to "drill-down" into an initial full set of content, returning to that full set when toggles are removed. Therefore, the `controls.toggleDefault` is set to `'all'` by default, but can be set to `'none'` if appropriate.

#### Example: Setting the default toggle state to 'none'

```js
var mixer = mixitup('.container', {
    controls: {
        toggleDefault: 'none'
    }
});
```

### `controls.toggleLogic`

The `controls.toggleLogic` configuration option defines the type of logic to be used when concatenating each active toggle control's selector together into a final "compound" selector. The available values are `'or'` and `'and'`.

#### Example: Setting toggle logic to 'and'

```js
var mixer = mixitup('.container', {
    controls: {
        toggleLogic: 'and'
    }
});
```

To understand what each of these logic settings, let's take a look at some examples:

#### Example: Compound selector strings using 'or' logic

```js
// Class selectors

'.category-a, .category-b'

// Attribute selectors

'[data-category~="a"], [data-category~="b"]'
```

While one of these examples uses class selectors, and the other uses attribute selectors, they are both examples of "or" logic, and can be thought of as follows:

> Show any target matching either category A OR category B

"or" compound selectors therefore, are concatenated together using a **comma as a delimiter**.

These next examples look similar, but are concatenated together **without any delimiter**:

#### Example: Compound selector strings using 'and' logic

```js
// Class selectors

'.category-a.category-b'

// Attribute selectors

'[data-category~="a"][data-category~="b"]'
```

These are both examples of "and" logic and can be thought of as follows:

> Show any target matching both category A AND category B

Now that we understand compound selectors, we can understand how the `controls.toggleLogic` configuration option can be used to define the filtering behavior of your toggles.

The following demo shows toggle UI using "or" logic:

- [Demo: Toggle Filtering with OR Logic](https://patrickkunka.github.io/mixitup/demos/toggle-filtering-or-logic/)

This next demo shows toggle UI using "and" logic. Note that several of the targets have multiple categories as "and" logic is really only useful scenarios where we want eliminate targets that **don't match all criteria**.

- [Demo: Toggle Filtering with AND Logic](https://patrickkunka.github.io/mixitup/demos/toggle-filtering-and-logic/)

## Multidimensional Filtering

As seen above, MixItUp's built-in toggle controls allow us to combine multiple selectors with either "and" or "or" logic, but what if we want to filter by multiple "dimensions", using a combination of logic?

For example, imagine a clothing store where we want to filter products by type, color and size. Each of these attributes can be thought of as a "dimension". We might end up with the following selection:

> Show (shirts OR sweaters) AND (red OR blue) AND large

This is where MixItUp's **"MultiFilter"** extension comes in. It allows us to combine groups of filters, each one representing a particular dimension, using one type of logic within a group and another type of logic between groups. In the example above, we can see that we need "or" logic within each group, and "and" logic between groups. The resulting selector would look like this:

The algorithm required to construct these kinds of selectors (with any number of groups using any combination of logic) is not trivial. Due to the complexity and specific nature of this functionality, it is available as am extension rather than part of the MixItUp core.

Check out the [MixItUp MultiFilter](https://github.com/patrickkunka/mixitup-multifilter) repository for more information, demos, and full documentation.

## API Filtering

Filter controls are completely optional and in many cases, you may wish to build your own user interface to control a MixItUp instance. In these instances, we can use the `.filter()` API method to interface with our mixer.

The `.filter()` method can also be used in a variety of different ways. The most common way is to send a selector string:

```js
mixer.filter('.category-a')
    .then(function(state) {
        console.log(state.activeFilter.selector); // '.category-a'
    });
```

The `.filter()` method returns a promise which resolves when the filter animation ends.

Alternatively, you can provide the `.filter()` method with a single element to show, or a collection of elements (an array or array-like object) to show. This allows you to filter targets in the DOM using your own code, before passing the final filtered array to MixItUp.

```js
var collection = Array.from(container.querySelectorAll('.mix'));

console.log(collection.length); // 34

// Filter the collection manually

var filtered = collection.filter(function(target) {
    return parseInt(target.getAttribute('data-price')) > 10;
});

console.log(filtered.length); // 22

// Pass the filtered collection to MixItUp

mixer.filter(filtered)
    .then(function(state) {
        console.log(state.activeFilter.collection.length); // 22
    });
```

## Dataset API

All of the above techniques use either the DOM selector API or some form of interaction with the DOM. If you're building a modern JavaScript application with a data model, you may wish to use MixItUp 3's [Dataset API](./using-the-dataset-api.md) which allows us to bypass the DOM entirely and interact with MixItUp purely via changes to your model.
