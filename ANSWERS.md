
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

   PropTypes are used to check the incoming data types we are reciving from a API or any kind of source. We can check any props type and be sure that we are using correct that array / oject / string / number /func ... In this mode we can avoid errors and less bugs in the code

- [ ] Describe a life-cycle event in React?

   When starting a React application our components go through a life-cycle methods.  React provides methods that get calld automatically at each point in the life of a Component . The birth: mountig the component, then updating and unmounting . We can acces any of these stages of a component with some methods. For exemple with ComponentDidMonth we can: set some initial state to the props , make a ajax request to fetch some data needed for the component.

- [ ] Explain the details of a Higher Order Component?

   A Higher Order Component (HOC) its a Component thet accepts another Component as a argument. This allows us to reuse component logic and return new components with new information and functionality. With HOC we cand add props to a Compoent too

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

1. With css files imported in Component - you have a unique css file for every component . Its really easy to do it because its the old and good way of style. Everybody nows it and can refactor the code

2. Using librarys like Bootstrap , Semantic UI - allows you to develop and style quickly and efficienty any site

3. with Styled Compoennts - Another library that allows user to build styled components so we can write all our CSS in javascript. We can also reuse and costumize styles