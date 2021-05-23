import React from "react"
import ShoppingProduct from './ShoppingProduct'


export default class ShoppingProductsList extends React.Component
{

  render()
  {
      
      let product_list

      if(this.props.category_value === "all" && this.props.SearchValue === "")  product_list = this.props.product_list

      else if(this.props.SearchValue !== "") product_list = this.props.product_list.filter(product=>product.name.toLowerCase().includes(this.props.SearchValue.toLowerCase()))
                      
      else if(this.props.category_value !== "all") product_list = this.props.product_list.filter(product=>(product.category === this.props.category_value))

        return <div className="container shopping-products">

                  <div className="row">

                    {product_list.map((product,index) => <ShoppingProduct key={index} product={product} costum_key = {index} />)}

                  </div>
             
             </div>

    }
}