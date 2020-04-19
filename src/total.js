import React from 'react';
import ModalButton from './modalPopup';

class Total extends React.Component {
    render() {
        let total = this.props.total.toFixed(2);
        let totalQuantity = this.props.totalQuantity;

        return (
            <div className="footer">
                <table style={{ "right": "0", "width": "98%", top: '50%' }}>
                    <tbody>
                        <tr style={{ "textAlign": "left", "fontWeight": "bold" }}>
                            <td>
                                Quantity: {totalQuantity}
                            </td>
                            <td rowSpan='2' style={{ "textAlign": "right", "fontWeight": "bold" }} >
                                {/* <button id="checkOut">Check out</button> */}
                                <ModalButton totalAmount={total} />
                            </td>
                        </tr>
                        <tr style={{ "textAlign": "left", "fontWeight": "bold" }}>
                            <td>
                                Total Price: ₹{total}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Total;