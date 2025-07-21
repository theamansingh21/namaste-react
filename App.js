const parent = React.createElement("div",{id:"parent"}, [
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"hi i am an h2 tag"),
        ]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"i am an h2 tag"),
        ])
            //to create siblings we have to create array for example(if we have to create another h2 tag then we have to create an array to the third arguements).
            //to create an array simpy we have to use square brackets and use comma to separate.
    ]);


const heading = React.createElement("h1",{id:"heading"},"Hello world from react!");



//ReactElement is an object which is a html that browser understands.
//while it is rendering it into the DOM it conerting into into the html or else.

console.log(parent); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// this (object{}) is a place where you give attribute to the tag.
//if we have to create a nested structure first of all we have to create a parent(by creating using createElement and put inside it the child).

//