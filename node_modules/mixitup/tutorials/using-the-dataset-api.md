# Using the Dataset API

## Introduction and Background

As you can probably tell from its selector-driven API, MixItUp hails from the jQuery era. While we've left jQuery behind with version 3, much of MixItUp's functionality is still based on the concept of querying the DOM in order to filter and sort your content.

With the release of MixItUp 3, we wanted to give our users the ability to break free from this paradigm and integrate MixItUp more seamlessly into the UI components of modern data-driven JavaScript applications.

We still feel there's a time and a place for MixItUp's selector-based APIs like `filter()`, `sort()`, and `multimix()`. After all, not every UI component has underlying data, and many front-end developers do not work closely with back-end code or application data models, so unabstracted selector querying is often still the best option for manipulating the DOM.

We believed that in the right circumstances however, developers should be able control MixItUp **directly via changes to their application data model**, and bypass the ugliness of working with the DOM directly.

We wanted to do this in a way that wasn't tightly coupled to a particular front-end framework, and future-proof MixItUp against framework obsolescence in the process.

The following tutorial will demonstrate how we can perform all of MixItUp's existing functionality using the Dataset API, and will attempt to do so in a general way that can hopefully be integrated into applications built with any framework or none.

## Get Started

As with all MixItUp-based components, Dataset allows us to manipulate a list of items inside a container: showing, hiding, or changing the order of "target elements".

Conceptually, we can imagine that any list of elements in the DOM could have an underlying data structure consisting of an array of objects – **this is our dataset**. Each object in the array is an instance of a data model made up from attributes that we can interact with using JavaScript.

When using the Dataset API, we have two possible starting points.

### Option 1: Empty Container

This first option is more suited to pure single-page-applications (SPAs) where we are happy to give MixItUp control over the full lifecycle of rendering and manipulating the content of our component. With this option, we instantiate MixItUp on an empty container.

### Option 2: Pre-rendered Targets

This second option is ideal for isomorphic applications where our client-side application progressively-enhances an initial server-rendered view, and shares a common data model, routes, and so on. This approach can also be used in single page apps where your application renders the component and its items in the browser before MixItUp is instantiated. With this option we instantiate MixItUp on top of an existing pre-rendered set of elements.

We will look at each approach in detail later on, but first we need some data:

## Application Data

The following array will form the dataset for all the examples in this tutorial. It represents a list of people, each one with various attributes. You can already imagine how we can use these attributes to sort or filter.

```json
[
    {
        id: 142,
	name: 'Joe',
        role: 'Developer',
        age: 22
    },
    {
        id: 242,
	name: 'Zack',
        role: 'Project Manager',
        age: 45
    },
    {
        id: 243,
	name: 'Kumar',
        role: 'Designer',
        age: 29
    },
    {
        id: 402,
	name: 'Steph',
        role: 'Developer',
        age: 33
    },
    {
        id: 511,
	name: 'Sohyun',
        role: 'Developer',
        age: 23
    }
]
```

You will also notice that every item in our dataset has a unique ID. **Unique IDs are required in order to use the Dataset API**. As all databases enforce some sort of unique primary key, it should be easy to find an appropriate key in your data model. You may use any key as your unique ID (e.g. `'id'`, `'_id'`, `'Id'`, etc), which you will specify using the `data.uidKey` configuration option.

In a typical application, this data will live in a database and be queryable via an asynchronous API. For the purposes of the upcoming examples, let's imagine that our API is abstracted behind a `People` class with a static `.get()` method allowing us to fetch our data from the server using a Promise. **This is not part of MixItUp and is used purely to illustrate the process of fetching data.**

```js
People.get()
    .then(people => {
        console.log(people); // [{...}, {...}, {...}, {...}, {...}]
        console.log(people.length); // 5
    });
```

Let's also imagine that we can pass parameters with which to query the DB with. In the following example, we pass a query object which results in returning only those people with the `'role'` of `'Developer'`.

```js
People.get({
    role: 'Developer'
})
    .then(people => console.log(people.length)); // 3
```

## Instantiating MixItUp

When using the Dataset API, A typical MixItUp instantiation looks like this:

```js
function render(item) {
    return `<div class="item" data-ref="item">Name: ${item.name}, Role: ${item.role}, Age: ${item.age}</div>`;
};

const container = document.querySelector('[data-ref="container"]');

const mixer = mixitup(container, {
    data: {
        uidKey: 'id'
    },
    render: {
        target: render
    },
    selectors: {
        target: '[data-ref="item"]'
    }
});
```

As noted before, we must tell MixItUp which key in our data model holds the unique ID in order to use the dataset API. This is done via the `data.uidKey` configuration option.

We must also specify a `render.target` function. This function receives a single object from the dataset, and must return a string representation of a single HTML element to be inserted into the DOM. It is invoked every time an item is added to the DOM.

> [!NOTE]
> In the example above, our render function uses a crude ES6 template literal to produce HTML output, but you could easily integrate a templating engine such as Handlebars, or your framework's built-in rendering method here – as long as it returns a string.

You will also notice above that we are querying our targets using a data-ref attribute, rather than the default selector of `'.mix'`. This is entirely optional, but helps in creating a separation of concerns between JavaScript-related selectors and styling classes which can very useful in large-scale applications.

For the following example, we will use the first approach mentioned above and render all content from scratch using MixItUp, into an empty container. The container element passed to the `mixitup()` factory function should not contain any targets at this point.

```html
<div class="container" data-ref="container"></div>
```

## Adding Elements

With MixItUp instantiated on our container element, let's get started by rendering the full list of people:

```js
People.get()
    .then(people => mixer.dataset(people))
    .then(state => console.log(`showing ${state.activeDataset.length} items`));
    .catch(console.error.bind(console));
```

To trigger the rendering of elements, we simply pass our list of people straight to the mixer's .`dataset()` method. As MixItUp was instantiated without any existing data, it knows that all 5 items in the dataset must be rendered and inserted into the DOM.

As the .dataset() method also returns a promise, we can chain a helpful console message after it, letting us know how many items were rendered using the state.activeDataset property.

For an even more succinct syntax, we could also write the above as follows, implicitly passing the `people` argument through to the `.dataset()` method:

```js
People.get()
    .then(mixer.dataset);
```

Our mixer is now loaded with data and 5 target elements have been rendered into our container, representing the 5 people in our dataset. Our container now looks like this:

```html
<div class="container" data-ref="container">
    <div class="item" data-ref="item">Name: Joe, Role: Developer, Age: 22</div>
    <div class="item" data-ref="item">Name: Zack, Role: Project Manager, Age: 45</div>
    <div class="item" data-ref="item">Name: Kumar, Role: Designer, Age: 29</div>
    <div class="item" data-ref="item">Name: Steph, Role: Developer, Age: 33</div>
    <div class="item" data-ref="item">Name: Sohyun, Role: Developer, Age: 23</div>
</div>
```

## Removing Elements

You will notice that only three of our team are developers. Let's now filter our container to show only the developers.

```js
People.get({
   role: 'Developer'
})
    .then(people => mixer.dataset(people))
    .then(state => console.log(`showing ${state.activeDataset.length} items`));
    .catch(console.error.bind(console));
```

Our API query will now return just 3 items. To filter out the non-developers from our container, we simply pass the updated list from the API to the `dataset()` method again using exactly the same syntax. Using your objects' unique IDs, MixItUp will figure out which items have been removed from the list, and animate them out accordingly.

Our container now looks like this:

```html
<div class="container" data-ref="container">
    <div class="item" data-ref="item">Name: Joe, Role: Developer, Age: 22</div>
    <div class="item" data-ref="item">Name: Steph, Role: Developer, Age: 33</div>
    <div class="item" data-ref="item">Name: Sohyun, Role: Developer, Age: 23</div>
</div>
```

Notice that the elements to be hidden have been removed from the DOM completely rather than just being hidden as would normally happen when using the selector-based `.filter()` API method. This ensures that the DOM stays as light as possible when dealing with large datasets. Additionally, any target that has been rendered once is cached in memory even after it is removed from the DOM, so that it does not need to be re-rendered if and when it is re-added to the DOM.

### Sorting Elements

Now let's sort our list of people. Let's imagine that our API query object accepts optional `$sort_by` and `$order` properties, specifying a key to sort by and an order.

```js
People.get({
   role: 'Developer',
   $sort_by: 'Age',
   $order: 'desc'
})
    .then(people => mixer.dataset(people))
    .then(state => console.log(`showing ${state.activeDataset.length} items`));
    .catch(console.error.bind(console));
```

Again, the syntax is exactly the same, but this time MixItUp will see that the order of items in the dataset has changed and sort the respective targets accordingly. Our container now looks like this, with our oldest developer, Steph, at the top of the list:

```html
<div class="container" data-ref="container">
    <div class="item" data-ref="item">Name: Steph, Role: Developer, Age: 33</div>
    <div class="item" data-ref="item">Name: Sohyun, Role: Developer, Age: 23</div>
    <div class="item" data-ref="item">Name: Joe, Role: Developer, Age: 22</div>
</div>
```

These three simple examples cover the majority of functionality needed for a typical MixItup-enabled component: adding elements, removing elements, and re-ordering elements.

When using the Dataset API, we can let our back-end and API do the heavy lifting in terms of providing our filtered and sorted data, and MixItUp will do the rest and enhance your component with beautiful animated DOM manipulations.

Dataset also gives you complete freedom over what kind of UI to build in order to trigger your API calls and update MixItUp.

## Pre-rendered Targets

As mentioned earlier, another common use for the Dataset API, is to progressively enhance a pre-rendered set of elements that have been rendered either by the server or client-side application. Assuming we have access to the same data and/or APIs that were used to render the pre-existing elements, we can instantiate MixItUp as follows:

```js
const container = document.querySelector('[data-ref="container"]');

let mixer;

People.get()
    .then(people => {
        mixer = mixitup(container, {
            selectors: {
                target: '[data-ref="item"]'
            },
            data: {
                uidKey: 'id'
            },
            load: {
               dataset: people
            },
            render: {
                target: render
            }
        });
    })
    .catch(console.error.bind(console));
```

In the above example, we provide MixItUp with the same underlying dataset that was used the render the existing targets via the `load.dataset` configuration stanza. When MixItUp queries and indexes these elements on instantiation, it will associate them with the respective items in the dataset based on their order.

> [!WARNING]
> If instantiating MixItUp on top of pre-rendered elements, it is essential that your dataset is identical to that which was used to render the original markup.

## Dirty-checking

As mentioned earlier, MixItUp caches each rendered target in memory after it has been inserted into the DOM once. This means that by default, if you update an item in your dataset (through a CRUD operation for example), this change will not be reflected in your markup simply by passing a dataset containing the updated object.

To have MixItUp watch for changes in your data models and re-render the respective targets, you can enable "dirty checking" by setting the `data.dirtyCheck` configuration option to true. As this is not particularly efficient and may not be needed in all projects, it is disabled by default.

## Cleaning Up

When building dynamic user interfaces we should always account for the removal of our component from the DOM when the user changes view. This typically involves allowing our component to gracefully detach or "unmount" by unbinding event handlers and allowing any cached data to garbage collected.

MixItUp provides a `.destroy()` method for use in such cases, which it should always be called when your component is detached.

If using React for example, we can hook into the `componentWillUnmount()` method in our component class:

```js
componentWillUnmount() {
    this.mixer.destroy();
}
```

When using MixItUp in an object-oriented component, we recommended caching a reference to your mixer as a property of your class instance (`this.mixer` in the example above), so that it can be accessed by all class methods.

## Examples

The following two examples show the Dataset API in use. The first demo shows the rendering of elements into an empty container, and the second demo shows usage with pre-rendered targets.

Both demos use a "mock API" to mimic the back-end and DB side of the application, and are integrated with custom UI.

- [Demo: Dataset with Empty Container](https://patrickkunka.github.io/mixitup/demos/dataset-empty-container/)
- [Demo: Dataset with Pre-rendered Targets](https://patrickkunka.github.io/mixitup/demos/dataset-pre-rendered-targets/)

