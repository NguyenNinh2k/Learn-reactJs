import React, {Component} from "react";
import Modal from "./Modal";
import ProductListCar from "./ProductListCar";

export default class ExerciseCarStore extends Component<any, any> {
    products = [
        {id: 1, name: 'black car', img: './products/black-car.jpg', price: 1000},
        {id: 2, name: 'red car', img: './products/red-car.jpg', price: 2000},
        {id: 3, name: 'sliver car', img: './products/silver-car.jpg', price: 3000},
        {id: 4, name: 'steel car', img: './products/steel-car.jpg', price: 4000},
    ]

    state = {
        productDetail: {
            id: 1, name: 'black car', img: './products/black-car.jpg', price: 1000
        }
    }

    detailCar = (productCar: {}) => {
        this.setState({
            productDetail: productCar
        })
    }

    render() {
        return (
            <div className='row justify-content-center' style={{margin: 'auto'}}>
                <ProductListCar showDetailCar={this.detailCar} detailDataProduct={this.products}/>
                <Modal content={this.state.productDetail}/>
            </div>
        );
    }
}
