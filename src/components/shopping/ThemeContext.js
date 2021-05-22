import React from 'react';

const TestThemeContext = React.createContext({
    
   AddedProduct : ['prod01'] ,

   AddNewProduct: (product) => this.AddedProduct.push(product),
    
});


export default TestThemeContext


// class TestParent extends React.Component
// {

//     render()
//     {

//      return (

//            <TestThemeContext.Provider value="dark">

//              <TestChild />

//            </TestThemeContext.Provider>

//         )
//     }

// }

// class TestChild extends React.Component
// {
//     static contextType = TestThemeContext;

//     render()
//     {
//         return <h1>{this.context}</h1>
//     }
// }