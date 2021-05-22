import React from 'react'
import ShoppingSearch from './ShoppingSearch'

export default class ShoppingOptions extends React.Component
{
   render()
   {
      return <div className="container-fuid">

      <div className="row">

          <div className="col-lg-3">

             <ShoppingSearch onSearchChange={this.props.onSearchChange}/> 

          </div>

      </div>

  </div>
   }
}