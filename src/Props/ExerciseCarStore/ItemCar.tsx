import React, {Component} from "react";

export default class ItemCar extends Component<any, any> {

    render() {
        let {dataProductItem} = this.props;

        return (
            <div className='card text-left'>
                <img className='card-img-top w-200' src={dataProductItem.img} alt={dataProductItem.img}/>
                <div className='card-body'>
                    <h4 className='card-title'>{dataProductItem.name}</h4>
                    <p className='card-text'>{dataProductItem.price}</p>
                    <button onClick={() => {
                        this.props.showDetailCar(dataProductItem)
                    }} className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Xem chi tiết
                    </button>
                </div>
            </div>
        );
    }

}
