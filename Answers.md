# Answers

1.  What is React JS and what problems does it try and solve?

- React JS is a framework that lets us build responsive web apps using JSX, which is a sort of JS/HTML hybrid. It allows our app to re-render as needed based on user input and state changes within our app.

1.  What does it mean to _think_ in react?

- Thinking in React involves breaking an app down into its component parts, as well as figuring which of those components can be functional and which need to be full-blown class components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Class components are extended from React.Component, and hold on to state data along with their own methods. Functional components are, well, functions, that are more focused on presentation/structure/styling of components, though of course they can still manipulate data and pass (possibly state-changing) information back up to a class component.

1.  Describe state.

- State is the aspect of our components that holds onto data for us. State triggers re-rendering when it changes/is changed.

1.  Describe props.

- Props are state data or functions or whatever else that are passed down to a component from its parent component. Props are passed down via properties in the component's JSX tag and accessed within that component using the props keyword.
