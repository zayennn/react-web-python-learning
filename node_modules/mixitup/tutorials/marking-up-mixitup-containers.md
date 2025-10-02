# Marking-up MixItUp Containers

In its a most simple form, a MixItUp "container" is comprised of a single containing element with zero or more targets elements nested inside.

However, the needs of your project may necessitate additional structures and elements. This tutorial will cover several common variations on the basic container markup structure, and explain what is and isn't possible.

## Localized Controls & Nested Targets

If your project requires multiple MixItUp instances (mixers) within the same document (with controls), each mixer should be configured to have 'local' control scoping via the controls.scope configuration option, to ensure that each mixer's controls do not interfere with other mixers in the document.

The caveat to this setting is that controls must be nested within your container (so MixItUp knows where to look for them), which without additional nesting, would result in control elements becoming siblings to your target elements. Although MixItUp will function just fine with this structure, it is not ideal for styling.

Thankfully, we can nest both our targets and controls as deeply as is necessary within our container, and MixItUp will still successfully query and index these elements.

#### Example: "Ring-fencing" controls and targets within nested elements

```html
<div class="container">
    <div class="controls">
        <button type="button" data-filter="all">All</button>
        ...
    </div>
    <div class="targets">
        <div class="mix"></div>
        ...
    </div>
</div>
```

> [!NOTE]
> MixItUp will always treat the parent of the first target element indexed as the actual container element. In most cases, this parent element will be the same as the outer container, but in the above example our ".targets" element will act as the parent.

## Non-target Sibling Elements

Many projects require additional elements alongside target elements. These might be UI elements, or "gap" elements used to maintain flex-box or inline-block grid columns (see [MixItUp Grid Layouts](./mixitup-grid-layouts.md)).

As long as any additional elements appear before or after all targets elements, MixItUp will function correctly. The only constraint is that all targets must be adjacent siblings. If non-target elements are present between targets, they will be removed from the DOM during sort operations.

#### Example 1: An "Add New" button as the first item in a grid

```html
<div class="container">
    <button type="button" class="item">Add New</button>

    <div class="item mix">Item 1</div>
    <div class="item mix">Item 2</div>
    <div class="item mix">Item 3</div>
</div>
```

In the above design, we want our "Add New" button to sit alongside our target elements, with similar styling.

While all items have the class "item", only the items matching our target selector (`.mix`) will be indexed as targets. MixItUp will not interfere with the position of the "Add New" button, and it will persist as the first child of the container, regardless of insertion, removal, or sorting.

> [!NOTE]
> If you .prepend() a new target into a container where the first child is not a target, the new target will be inserted before the first target element. This is because insertion indices are relative only to target elements - not all children.

#### Example 2: "Gap" Elements

A common solution to laying out flex-box or inline-block-based grids with a potential for an incomplete last row, involves using "gap" elements to maintain even column spacing.

```html
<div class="container">
    <div class="mix"></div>
    <div class="mix"></div>
    <div class="mix"></div>
    <div class="mix"></div>
    <div class="mix"></div>

    <div class="gap"></div>
    <div class="gap"></div>
</div>
```

Again, because the gap elements appear after all target elements, MixItUp will function correctly leaving gap elements untouched during insertion, removal, and sorting.

- [Demo: Basic Grid Layout](https://patrickkunka.github.io/mixitup/demos/basic)

## Instantiating Empty Containers

Both of the above examples rely on there being at least one target in the container during instantiation, showing MixItUp where targets start and end. But what happens when your container is empty at the point of instantiation?

```html
<div class="container">
    <button type="button" class="item">Add New</button>
</div>
```

```html
<div class="container">
    <div class="gap"></div>
    <div class="gap"></div>
</div>
```

In these cases, we can use the `.insertBefore()` or `.insertAfter()` API methods when inserting our first target into the container. Both of these methods accept a reference element as their second argument, which could be any of the additional elements in the above examples.

Alternatively, if our non-target elements are persistent, we can you the `layout.siblingBefore` and `layout.siblingAfter` configuration options to pass references to either or both of these elements.

```js
var mixer = mixitup(containerEl);

var buttonAddNew = containerEl.querySelector('button');

// Insert a new target element after the "Add New" button

mixer.insertAfter('<div class="item mix"></div>', buttonAddNew);
```

```js
var firstGap = containerEl.querySelector('.gap');

// Insert a new target element before the first "gap" element

mixer.insertBefore('<div class="item mix"></div>', firstGap);
```

- [Demo: Non-target First Element](https://patrickkunka.github.io/mixitup/demos/insertion-non-target-elements)
