import React, {Component} from "react";

export default class ProductItem extends Component<any, any> {

    render() {
        let {url, name, desc} = this.props.dataProductItem;
        return (
            <div className='card text-left'>
                <img className='card-img-top' src={url} alt={url} style={{width: '110px'}}/>
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                    <p className='card-text'>{desc}</p>
                </div>
            </div>
        );
    }
}
