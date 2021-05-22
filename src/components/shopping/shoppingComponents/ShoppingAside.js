import React from 'react'
import ShoppingCategory from './ShoppingCategory'


export default class ShoppingAside extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            Categories :
             [
                 {id:1, name :'all'},
                 {id:2, name :'Home'},
                 {id:3, name :'Profile'},
                 {id:4, name :'Messages'},
                 {id:5, name :'Settings'},
             ]
        }
    }

    render()
    {
      return <ShoppingCategory Categories={this.state.Categories} onCategoryChange={this.props.onCategoryChange}/>
    }
}