import ShoppingProductsContent from './shoppingComponents/ShoppingProductsContent'
import ShoppingAside from './shoppingComponents/ShoppingAside'
import ShoppingOptions from './shoppingComponents/ShoppingOptions'

import ThemeContext from './ThemeContext'

import '../.././css/shoppingProducts.css';
import React from 'react';


class Shopping extends React.Component
{
    //  static contextType = ThemeContext;
    
    constructor(props)
    {
        super(props)

        // this.AddNewProduct = (product) => this.AddedProduct.push(product),

        this.AddNewProduct = (product) => {
          this.setState(state => ({ AddedProduct : state.AddedProduct.concat('test')}))
        };

        this.state =
        {
          category_value:'all' , SearchValue : '',testval:1,

          AddedProduct : ['prod01'] ,
          
          AddNewProduct: this.AddNewProduct,

        }

        this.handleCategoryValueChange = this.handleCategoryValueChange.bind(this)

        this.handleSearchValueChange = this.handleSearchValueChange.bind(this)
    }

    componentDidMount()
    {
      // this.test()
    }

    handleCategoryValueChange(category)
    {
      this.setState({category_value  : category.name})
    }
    
    handleSearchValueChange(value)
    {
      this.setState({SearchValue  : value})
    }

    test()
    {
      setInterval(() => {

        this.setState({testval:this.state.testval + 1})
        
      }, 3000);
    }

    render()
    {

     return (

       
       <div className="container-fuid shopping-body">

                 <ShoppingOptions onSearchChange={this.handleSearchValueChange} />

                 <div className="row">

                     <ShoppingAside onCategoryChange={this.handleCategoryValueChange}/>

                     <div className="col-lg-9">

                        <ThemeContext.Provider value={this.state}>
                          
                          <ShoppingProductsContent category_value={this.state.category_value} SearchValue={this.state.SearchValue} />


                        </ThemeContext.Provider>

                        
                     </div>

                 </div>

             </div>


        )
    }
}


export default Shopping;