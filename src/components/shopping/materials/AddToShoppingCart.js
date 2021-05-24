import React from "react"
import ThemeContext from '../ThemeContext'


export default class AddToShoppingCart extends React.Component
{
    static contextType = ThemeContext;

    constructor(props)
    {
        super(props)

        this.ChangeProductState = this.ChangeProductState.bind(this)

        this.state =
        {
            is_already_added:this.props.product.is_already_added,
            
            button_color: this.props.product.is_already_added ? "btn-danger" : "btn-success"
        }
    }

    ChangeProductState()
    {
        /*  Of course we have several solutions to make these changes , for Example we can use the list of Products Retrieved from the Data Base
         *  To observe the products added via the "is_already_added" attribute and then displayed its on the shping cart
         *  but i prefer using context and events to test the different React features
        */

        // this can send response to cange "is_already_added" value on data base but in our case we use an Example of a product list
        this.props.ChangeProductState(this.props.costum_key,!this.state.is_already_added)
        
        // Here we use context to add or remove from shopping cart

        this.state.is_already_added

        ? this.context.RemoveProduct(this.props.product.id)
        
        : this.context.AddNewProduct(this.props.product)


        this.setState({is_already_added:!this.state.is_already_added,button_color : this.state.is_already_added ? "btn-success" : "btn-danger"})
    }

    render()
    {
        return <React.Fragment>

                 <button type="button" className={"btn "+this.state.button_color} onClick={this.ChangeProductState}>
                    {this.state.is_already_added ? "Remove from Cart" : "Add To Cart"} 
                 </button>

        </React.Fragment>
    }
}