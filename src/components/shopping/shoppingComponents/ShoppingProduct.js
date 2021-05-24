import React from "react"
import AddToShoppingCart from '../materials/AddToShoppingCart'
import Description from '../materials/Description'
import ShoppingAlert from '../materials/ShoppingAlert'

export default class ShoppingProduct extends React.Component
{
    render()
    {
        let product = this.props.product
        
        return (
              
           <div className="product-blog col-lg-4">
                    
                <div className="card" style={{width: 18 +"rem"}}>
   
                    <img className="card-img-top" src={product.photos} alt="Card cap" />

                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <Description className="card-text" description={product.description} MaxCharNumber={30}/>
                      <p className="card-text">{product.price}</p>
                      <ShoppingAlert costum_key={this.props.costum_key} header={<img className="card-img-top" src={product.photos} alt="Card cap" />} body={<Description description={product.description} MaxCharNumber={200} />} footer={<AddToShoppingCart costum_key={this.props.costum_key} product={product} ChangeProductState={this.props.ChangeProductState}/>}>
                    
                         <button type="button" className="btn btn-primary">
                            Show details
                        </button>
                       
                      </ShoppingAlert>


                    </div>

                </div>

             </div>
           )
    }
}