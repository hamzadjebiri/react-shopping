import React from 'react';

// import ShoppingProductsContent from './shoppingComponents/ShoppingProductsContent'

import ShoppingAside from './shoppingComponents/ShoppingAside'
import ShoppingNavbar from './shoppingComponents/ShoppingNavbarComponents/ShoppingNavbar'
import ShoppingOptions from './shoppingComponents/ShoppingOptions'
import ThemeContext from './ThemeContext'
import ShoppingSpinner from './materials/ShoppingSpinner'
import '../.././css/shoppingProducts.css';



const ShoppingProductsContent = React.lazy(() => import('./shoppingComponents/ShoppingProductsContent'));


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

     logTimes(id, phase, actualTime, baseTime, startTime, commitTime)
     {
      console.log(`${id}'s ${phase} phase:`);
      console.log(`Actual time: ${actualTime}`);
      console.log(`Base time: ${baseTime}`);
      console.log(`Start time: ${startTime}`);
      console.log(`Commit time: ${commitTime}`);
    };

    render()
    {
     return <React.Fragment>

            <React.Profiler id="StockChart" onRender={this.logTimes}>


              <ThemeContext.Provider value={this.state}>

                 <ShoppingNavbar />
              
              </ThemeContext.Provider>

       
       
                <div className="container-fuid shopping-body">

                   <ShoppingOptions onSearchChange={this.handleSearchValueChange} />

                   <div className="row">

                     <ShoppingAside onCategoryChange={this.handleCategoryValueChange}/>

                        <div className="col-lg-9">

                           <React.Suspense fallback={<ShoppingSpinner />}>

                             <ThemeContext.Provider value={this.state}>

                               <ShoppingProductsContent category_value={this.state.category_value} SearchValue={this.state.SearchValue} />

                             </ThemeContext.Provider>

                           </React.Suspense>

                        </div>

                   </div>

                 </div>

                 </React.Profiler>

             </React.Fragment>
    }
}


export default Shopping;