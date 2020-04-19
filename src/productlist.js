import React from 'react';
import Product from './product';
import Total from './total';
import ModalPopup from './modalPopup';

let promise = fetch('data/itemlist.json');

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            totalQuantity: 0,
            productList: ""
        };

        this.calculateTotal = this.calculateTotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            promise.then(response => response.json())
                .then(data => {
                    let sorted_data = data.sort(function compare(a, b) {
                        a = a.BrandName.toUpperCase();
                        b = b.BrandName.toUpperCase();
                        let comparison = 0;
                        if (a > b) {
                            comparison = 1;
                        } else if (a < b) {
                            comparison = -1;
                        }
                        return comparison;
                    });
                    this.setState({ productList: sorted_data });
                })
                .catch(error => alert(error));
        }, 1000);

    }

    calculateTotal(price) {
        console.log(this.state);
        this.setState({
            total: this.state.total + price
        });
    }

    updateQuantity(qnt) {
        this.setState({
            totalQuantity: this.state.totalQuantity + Number(qnt)
        })
    }

    render() {
        if (!this.state.productList) return <p>loading...!!!!</p>;

        var component = this;
        var products = this.state.productList.map(function (product) {
            return (
                <Product
                    BrandName={product.BrandName}
                    ProductName={product.ProductName}
                    Quantity={product.Quantity}
                    MRP={product.MRP}
                    Price={product.Price}
                    OfferText={product.OfferText}
                    img={product.src}
                    handleTotal={component.calculateTotal}
                    handleQuantity={component.updateQuantity}
                />
            );
        });

        return (
            <div>
                {products}
                <Total total={this.state.total} totalQuantity={this.state.totalQuantity} />

                <ModalPopup />
            </div>
        );
    }
}
export default ProductList;