import React from 'react'

export default class ShoppingCategory extends React.Component
{
    constructor(props)
    {
       super(props)

       this.handleCategoryValueChange = this.handleCategoryValueChange.bind(this)
    }

    handleCategoryValueChange(Category)
    {
      this.props.onCategoryChange(Category)
    }

    render()
    {
      return <div className="col-lg-3">

                <div className="list-group" id="list-tab" role="tablist">

                  {this.props.Categories.map((Category,index)=>
                   {

                     return <a onClick={()=>this.handleCategoryValueChange(Category)} key={index} className={"list-group-item list-group-item-action "+ (index === 0 ? 'active' : '')} id={"list-"+Category.name+"-list"} data-toggle="list" href={"#list-"+Category.name} role="tab" aria-controls={Category.name}>{Category.name}</a>

                  })}

                </div>       

              </div>
    }

}