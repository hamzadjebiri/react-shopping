import React from "react"
import ThemeContext from '../ThemeContext'


export default class AddToShoppingCart extends React.Component
{
    static contextType = ThemeContext;

    constructor(props)
    {
        super(props)

        this.AddNewProduct = this.AddNewProduct.bind(this)

        this.state =
        {
            is_already_added:this.props.product.is_already_added,
            
            button_color: this.props.product.is_already_added ? "btn-danger" : "btn-success"
        }
    }

    AddNewProduct()
    {
        this.context.AddNewProduct(this.props.product,!this.state.is_already_added,this.props.costum_key)

        this.setState({is_already_added:!this.state.is_already_added,button_color : this.state.is_already_added ? "btn-success" : "btn-danger"})
    }

    render()
    {
        return <React.Fragment>

                 <button type="button" className={"btn "+this.state.button_color} onClick={this.AddNewProduct}>
                    {this.state.is_already_added ? "Remove from Cart" : "Add To Cart"} 
                 </button>

        </React.Fragment>
    }
}