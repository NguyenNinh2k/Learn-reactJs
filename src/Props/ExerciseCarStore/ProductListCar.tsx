import React, {Component} from "react";
import ItemCar from "./ItemCar";

export default class ProductListCar extends Component<any, any> {

    renderListCar = () => {
        return this.props.detailDataProduct.map((item: any, index: number) => {
            return (
                <div className='col-3 mt-3 w3-container w3-center w3-animate-zoom'
                     key={index} style={{margin: 0}} >
                    <ItemCar showDetailCar={this.props.showDetailCar} dataProductItem={item}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderListCar()}
            </div>
        );
    }
}
