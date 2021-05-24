import React from 'react'
import ThemeContext from '../../ThemeContext'

export default class ShoppingNavbar extends React.Component
{
    static contextType = ThemeContext;

    render()
    {
        return   <li className="nav-item dropdown">

                     <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.title ? this.props.title : "options"}
                     </a>

                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                         {
                           this.context.AddedProduct.length > 0

                           ? this.context.AddedProduct.map((body,index)=> <a key={index} className="dropdown-item" href="#">{body.name}</a> )

                           : "you have not added any product yet"
                         }
                      
                     </div>
                 </li>
    }
}