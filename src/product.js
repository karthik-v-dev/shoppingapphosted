import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        this.setState({
            qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.Price);
        this.props.handleQuantity(1);
    }

    subtract() {
        this.setState({
            qty: this.state.qty - 1
        });
        this.props.handleTotal(-this.props.Price);
        this.props.handleQuantity(-1);
    }

    render() {
        return (
            <div id="productDiv col">
                <table className="center">
                    <tbody>
                        <tr>
                            <td rowSpan='5' className="tdLeft">
                                <img src={require(`${this.props.img}`)} alt='dProblame' width='60px' height='60px' />
                            </td>
                            <td colSpan='1' className='colrs Alleft tdRight brandName'>
                                {this.props.BrandName}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='1' className='Alleft productName'>
                                {this.props.ProductName}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='1' className='Alleft quantity'>
                                {this.props.Quantity}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='1' className='Alleft'>
                                <del>
                                    <span>MRP: </span>
                                    ₹{this.props.MRP}
                                </del>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='1' className='Alleft' style={{ fontWeight: 'bold' }}>
                                <span>Price: </span>
                                <span className='Pri'>
                                    ₹{this.props.Price}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className='tdLeft offerText'>
                                {this.props.OfferText}
                            </td>
                            <td className='Alleft'>
                                <span style={{ display: (this.state.qty < 1) ? "block" : "none" }}>
                                    <button className='btn-color' onClick={this.add} > Add To Cart </button>
                                </span>
                                <span style={{ display: (this.state.qty > 0) ? "block" : "none" }}>
                                    <button className='btn-colr' onClick={this.subtract} disabled={this.state.qty < 1} >
                                        <span className='sywidth'>-</span>
                                    </button>
                                    <span id='QTValue'>
                                        {this.state.qty}
                                    </span>
                                    <button className='btn-colg' onClick={this.add} >
                                        <span className='sywid'>+</span>
                                    </button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
            </div>
        );
    }
}
export default Product;