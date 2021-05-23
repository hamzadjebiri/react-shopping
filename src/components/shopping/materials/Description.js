import React from "react"

export default class Description extends React.Component
{
    constructor(props)
    {
        super(props)

        this.ShowDetailsState = this.ShowDetailsState.bind(this)

        this.state = {ShowDetails : false}
    }

    ShowDetailsState(event)
    {
        this.setState({ ShowDetails : !this.state.ShowDetails })
    }

    render()
    {
        let description  = (this.props.description && this.props.MaxCharNumber && !this.state.ShowDetails ) ? this.props.description.slice(0,this.props.MaxCharNumber)+"..."
                                                  :  this.props.description

        return <React.Fragment>
                    <p>{description} </p>
                    <p className={this.state.ShowDetails ? "btn text-danger" : "btn text-primary"} onClick={this.ShowDetailsState}>{this.state.ShowDetails ? "Hide Details" : "Show Details"}</p>
           </React.Fragment>

    }
}