import React from "react"

export default class ShoppingAlert extends React.Component
{   
   render()
   {

    let ShoppingAlertButton = this.props.children
                 ? <span data-toggle="modal" data-target="#exampleModalCenter">{this.props.children}</span>
                 : <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                      {this.props.name ? this.props.name : "Show details"}
                   </button>
                 
    return <React.Fragment>

      {ShoppingAlertButton}
         
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{this.props.header ? this.props.header : "Product Details"}</h5>

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
             
               <h5 className="modal-title">{this.props.body ? this.props.body : "Product Details"}</h5>

            </div>

            <div className="modal-footer">

              {this.props.footer ? this.props.footer : <button type="button" className="btn btn-success">Add To Cart</button>}
              
            </div>

          </div>
        </div>
      </div>

       </React.Fragment>
   }


}