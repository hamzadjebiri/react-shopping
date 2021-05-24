import ShoppingProductsContent from './shoppingComponents/ShoppingProductsContent'
import ShoppingAside from './shoppingComponents/ShoppingAside'
import ShoppingNavbar from './shoppingComponents/ShoppingNavbarComponents/ShoppingNavbar'
import ShoppingOptions from './shoppingComponents/ShoppingOptions'
import ThemeContext from './ThemeContext'
import '../.././css/shoppingProducts.css';
import React from 'react';



class Shopping extends React.Component
{  
    constructor(props)
    {
        super(props)

        this.AddNewProduct = (product) =>
        {
           alert("your product has been successfully Added to the Shopping Cart !"); 
           this.setState({AddedProduct : this.state.AddedProduct.concat(product)})
        }

        this.RemoveProduct = (id_product) => 
        {
          alert("your product has been successfully Removed From the Shopping Cart !"); 
          this.setState({AddedProduct : this.state.AddedProduct.filter(product =>  product.id !== id_product) })
        }

        this.state =
        {
          category_value:'all' , SearchValue : '',

          AddedProduct : [] ,
          
          AddNewProduct: this.AddNewProduct,

          RemoveProduct: this.RemoveProduct,
        }

        this.handleCategoryValueChange = this.handleCategoryValueChange.bind(this)

        this.handleSearchValueChange = this.handleSearchValueChange.bind(this)
    }

    handleCategoryValueChange(category)
    {
      this.setState({category_value  : category.name})
    }
    
    handleSearchValueChange(value)
    {
      this.setState({SearchValue  : value})
    }

    render()
    {
     return <React.Fragment>


              <ThemeContext.Provider value={this.state}>

                 <ShoppingNavbar />
              
              </ThemeContext.Provider>

       
       
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

             </React.Fragment>
    }
}


export default Shopping;