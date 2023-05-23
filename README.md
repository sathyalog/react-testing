## React-testing

Jest Vs RTL

Jest:
1. Jest is a javascript testing framework
2. Jest is a test runner that finds tests, run the tests, determines whether the tests are passed or failed and reports it back in a human readable manner.

RTL:
1. Javascript testing utility that provides virtual DOM for testing react components
2. RTL provides a virtual DOM which can use to interact with and verify the behavior of a react component
3. Testing library is infact a family of packages which helps test UI components
4. Core library is called DOM testing library and RTL is simply a wrapper around this core library to test react applications in an easier way

Types of tests
1. Unit tests - Focus is on testing the individual building blocks of an application such as a class or a function or a component.
Each unit or building block is tested in isolation, independent of other units
dependencies are mocked
2. Integration tests - Focus is on testing a combination of units and ensuring they work together
3. E2E tests - Focus is on testing the entire application flow and ensuring it works as designed from scratch to finish. Involves in react UI, a real backend database/real services.

# Code coverage metrics
A metic that can help you understand how much of your software code is tested

1. Statement coverage: How many of the statements in the software code have been executed.
2. Branches coverage: How many of the branches of the control structures(if statement for instance) have been executed.
3. Function coverage: How many of the functions defined have been called and finally
4. Line coverage: How many of lines of source code have been tested

# Configuration
"coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,constants, stories}.{ts,tsx}'"
Here we are trying to collect the coverage from src/components folder having files with ts,tsx extensions.
Also we are ignoring the files like greet.types.ts(x), constants, stories from src/components.

# What to test?
Fundamentals:
1. Test component renders
2. Test component renders with props
3. Test component renders in different states
4. Test component reacts to events

# What not to test?
1. Implementation details
2. 3rd party code like npm libraries
3. Code that is not important from user point of view like date format how you show using utils etc.

# RTL Queries
 Every test we write generally involves the following basic steps
 1. Render the component
 2. Find an element rendered by the component
 3. Assert againts the element found in step2 which will pass or fail the test
 To render the component, we use the render method from RTL
 For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom

 RTL Queries comes into the picture here..
 Queries are the methods that testing library provides to find elements on the page

 Find a single element on the page, we have getBy..,queryBy..,findBy..
 To find multiple elements on page, we have getAllBy..,queryAllBy..,findAllBy..
 Suffix for findBy.. or any method is Role, LabelText, Placeholder