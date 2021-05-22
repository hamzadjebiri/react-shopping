import React from "react"
import logo from '../../.././logo.svg';
import ShoppingProductsList from './ShoppingProductsList'
import PropTypes from 'prop-types'

import ThemeContext from '../ThemeContext'


class ShoppingProductsContent extends React.Component
{
    static contextType = ThemeContext;


    custom_description = "Ordinateurs portables , Laptop (Pc Portable)"+
    "CPU : Intel Celeron N3060 @ 1.60GHz"+
    "RAM : 4 GO"+
    "Ecran : 15 pouces"+
    "Disque : 500 GO"+
    "Intel HD 520"+
    "Etat neuf"+
    "Bonjour je mets en vente un ordinateur portable hp sous emballage venu de france en parfait état 10-10 fourni avec sa boite et son"+
    "chargeur original. idea pour vos travaux bureautiques ( suite office, chrome, adobe .. etc )"+
    "configuration : processeur : intel celeron n3060 ram : 4gb ddr3 1"
    

    constructor(props)
    {
        super(props)

        this.state = 
        {            
            Product_List : 
            [
                {id:1 , name:"Produit 1", price:14.5, category:"Home" , units:6 ,  description:this.custom_description , photos:logo},
                {id:2 , name:"Produit 2", price:17 ,  category:"Profile" , units:10 , description:"test description" , photos:logo},
                {id:3 , name:"Produit 3", price:10 ,  category:"Messages" , units:1 ,  description:"test description" , photos:logo},
                {id:4 , name:"Produit 4", price:8 ,   category:"Home" , units:3 ,  description:"test description" , photos:logo},
                {id:5 , name:"Produit 5", price:9.3,  category:"Settings" , units:2 ,  description:"test description" , photos:logo},
                {id:6 , name:"Produit 6", price:12 ,  category:"Settings" , units:5 ,  description:"test description" , photos:logo},
            ]
        }
    }

    render()
    {
                

        return (
            <div>

                <button onClick={()=>this.context.AddNewProduct()}>clique</button>
                                <ShoppingProductsList product_list={this.state.Product_List} category_value={this.props.category_value} SearchValue={this.props.SearchValue} />
            </div>
        )
    }

}

export default ShoppingProductsContent