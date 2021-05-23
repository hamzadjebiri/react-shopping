import React from "react"
import ShoppingProductsList from './ShoppingProductsList'
import PropTypes from 'prop-types'

class ShoppingProductsContent extends React.Component
{
  
    render()
    {
        return (
            <div>
                 <ShoppingProductsList product_list={this.props.product_list} category_value={this.props.category_value} SearchValue={this.props.SearchValue} />
            </div>
        )
    }

}

export default ShoppingProductsContent