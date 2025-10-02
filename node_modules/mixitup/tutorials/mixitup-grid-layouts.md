# MixItUp Grid Layouts

When applying MixItUp to a responsive grid layout, there are a variety of CSS approaches available to us.

This tutorial will cover the pros and cons of the three most common approaches (inline-block, flex-box, and floats), and help you to find the right one for your project.

## Option 1: Inline-block

Inline-block continues to provide the most robust and consistent method of laying out simple grids, with a few common gotchas which will be explained later.

#### Pros

- Concise and semantic syntax
- Consistent cross-browser behavior
- Strong legacy browser support
- Implicit margin definition via justification

#### Cons

- Dealing with whitespace and vertical align can be fiddly
- Elements must be same height
- HTML compression can collapse whitespace and break layout

- [Demo: Inline-block Grid](https://patrickkunka.github.io/mixitup/demos/grid-inline-block)

The inline-block syntax is concise, semantic and easy to understand and essentially allows block-like elements (with explicit height and width) to flow "inline" across a document just like words, wrapping from line to line.

One of the most useful features of inline-block is its observance of `text-align` and `direction` rules. By applying `text-align: justify;` to the parent element and a full-width `:after` pseudo-element, we can cause our elements to distribute themselves evenly across available horizontal space, meaning that margins are created implicitly by dividing up the left over space between elements, and do not need to be defined.

The following SASS formula is particularly useful when calculating the width of items in inline-block and flex-box layouts, when using implicit margins. Essentially, it sums all gutter space needed for a row, then divides it between the number of elements in the row. `calc` is then used to subtract that value from the element's percentage width.

```scss
@function grid-item-width($columns, $gutter) {
    @return calc(#{100% / $columns} - #{($gutter * ($columns - 1)) / $columns});
}
```

The first parameter is the number of columns, and the second parameter is your desired gutter. The function can be called like as follows:

```scss
// 2 column grid with a 1rem gutter

.mix,
.gap {
    width: grid-item-width(2, 1rem); // calc(50% - 0.5rem)
}

// 3 column grid with a 1rem gutter

@media screen and (min-width: 768px) {
    .mix,
    .gap {
        width: grid-item-width(3, 1rem); // calc(33.333% - 0.667rem)
    }
}
```

### Gotcha #1: Whitespace

As with text, one or more whitespace nodes in your markup between inline-block elements are necessary to allow spacing (implicit margins) and natural line-breaks between elements. The caveat to this is that these whitespace nodes will occupy the same amount of horizontal space in your layout as the equivalent space character between two words would (at the font size of the parent element). This can create some surprises when dealing with responsive layouts where we might expect elements to converge on resize but instead line-break unpredictably due to invisible whitespace.

The solution is to "collapse" whitespace via CSS, which can be achieved via a number of methods, the simplest of which is to set the parent element's font-size to `0.1px` (Firefox doesn't like `0`).

### Gotcha #2: Vertical Align

Also relating to the text-like nature of inline-blocks, adjacent elements will vertically align themselves (by default) to the baseline of any text nodes contained in a row of elements. This can cause elements to jump up and down unpredictably if some elements contain text and others do not.

The solution is simple and requires the setting of a `vertical-align` rule on all elements, overriding the default value of `baseline`, with either `top`, `middle`, or `bottom`.

### Gotcha #3: Incomplete Final Row

A common scenario when creating a layout for an unknown number of grid items, is a final row which does not contain the full number of grid columns. When using `text-align: justify;`, this results in uneven distribution of the final row (unless there is only one item).

The solution involves the creation of invisible, height-less "gap" elements which match the width of the grid items and sit at the end of the grid ensuring the final row always contains the full number of columns.

> [!NOTE]
> The number of "gap" elements required for any grid layout is equal to the maximum number of columns minus two. For example, the number of gap elements needed for a four-column grid would be two.

## Option 2: Flex-box

A relative newcomer, flex-box is fast becoming the goto layout method of the future, not just for grids, but as a wide-ranging and powerful solution to all sorts of common layout problems.

#### Pros

- Powerful and expressive
- Ability to auto-match the height of elements on a per-row basis
- Implicit margin definition via justification

#### Cons

- Confusing and un-semantic syntax
- Inconsistent cross-browser behavior
- Modern browsers only
- Gap elements also required to align final row

- [Demo: Flex-box Grid](https://patrickkunka.github.io/mixitup/demos/grid-flex-box)

Giving us everything that inline-block gives us and much more (and with no whitespace gotchas), flex-box suffers however from a confusing and non-intuitive syntax, and (as of late 2016) continuing browser inconsistencies (see [FlexBugs](https://github.com/philipwalton/flexbugs)).

Using the justify-content: space-between; rule, we can achieve a justified grid with implicit margins just like inline-block. Also like inline-block unfortunately, "gap" elements are still necessary to ensure even distribution of an incomplete final row (see above).

For simple grids, one of its most useful features is the ability to match the heights of elements in a row, something that was previously only possible with JavaScript.

Shuffle the grid in the following demo and observe how MixItUp gracefully animates the height of elements in response to row-height changes.

- [Demo: Flex-box Matching Heights](https://patrickkunka.github.io/mixitup/demos/grid-flex-box-matching-heights)

## Option 3: Floats and Float-based Grid Frameworks

#### Pros

- Frameworks allow for hands-off and HTML-first approach
- Whitespace is ignored

#### Cons

- "nth-child"-based margin rules are incompatible with client-side filtering/sorting
- "clearfix" hack required
- Explicit margin definitions required

Using floats for grids is still ubiquitous years after inline-block and (later) flex-box became standardized. This is due to their relative simplicity and predictability. Unfortunately, many float-based grids are reliant on "nth-child" selectors to define margin rules, **which renders them incompatible with MixItUp**, or any sort of client-side filtering/sorting. This is because when elements are hidden or re-ordered, their indices no longer match the intended nth-child rules, which always target all elements, rather than just those that are visible.

While we don't recommend using floats for MixItUp, it is possible as long as nth-child selectors are avoided. Typically nth-child selectors are used to set the `margin-left` of the first item in a row to `0` and the `margin-right` of the last item to `0`. This results in a clean grid and allows us to follow general best practice of padding the inside of the parent element to provide clear space to its children.

The only way to achieve this sort of layout without using `nth-child` selectors is to reduce the horizontal padding on the parent element by half (equal to the left/right margins of its children), so that when it is combined with the horizontal margins of its children, the grid remains clean and consistent. Mixing adjacent padding and margins is generally a symptom of poor design and makes components less reusable, but in this case it is the best available option without resorting to unnecessary nesting within the child elements.

- [Demo: Float Grid](https://patrickkunka.github.io/mixitup/demos/grid-floats)

As can be seen in the above demo, the formula for calculating the widths of elements is considerably simpler when margins are explicitly defined.

## Conclusion

Each of the above grid approaches has its pros and cons. Personal preference will most likely be the deciding factor for your project, but we hope that this tutorial has provided additional insight to help you choose the most suitable option and an awareness of any potential pitfalls you may encounter along the way.
