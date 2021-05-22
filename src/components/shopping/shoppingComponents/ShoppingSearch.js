import React from 'react'

export default class ShoppingSearch extends React.Component
{
    constructor(props)
    {
        super(props)

        this.HandleSearchChange = this.HandleSearchChange.bind(this)

    }
    HandleSearchChange(e)
    {
        this.props.onSearchChange(e.target.value)
    }

    render()
    {
        return <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend ">
                      <span className="input-group-text bg-success text-light" id="inputGroup-sizing-sm">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.HandleSearchChange}></input>
              </div>
    }
}