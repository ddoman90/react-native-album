# Section 1-6

## React:
- knows how a component should behave
- knows how to take a bunch of components and make them work together

## React Native:
- knows how to take the output from a component and place it on the screen
- provides default core components

JSX is only a syntactic sugar it compiles to normal JS

# Section 7 - HTTP Requests with React Native
- it is not possible to have multiple component. There should be only one top level tag.
- functional component: just displays a bunch of elements on the device
-- data goes in, JSX goes out
-- used for presenting static data
-- can't handle fetching data
-- easy to write
- class component:
-- used for dynamic sources of data
-- handles any data that might change (fetching data, user events, etc)
-- knows when it gets rendered to the device (useful for data fetching)
-- more code to write
- life cycle functions
-- componentWillMount: before component gets rendered
- component level sate: technique how react handling changes
- every time, when state changes component will re-render
- use component state
- state level property (only class based components)
- difference between property and state
-- props: parent to child communication
-- state: component internal record keeping
- if we want to render an array of element, each element has to have an unique key
(this is because of the efficient re-rendering) - this should be unique
- If you want to render an own component inside an other own component, you have to tell the outer component
to render the inner component by return with { props.children }