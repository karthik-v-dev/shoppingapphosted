import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isModalReadyToUse: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        this.setState({ isModalReadyToUse: true });
    }

    openModal() {
        if (this.state.isModalReadyToUse === true) {
            this.setState({ isModalOpen: true });
            document.getElementById('myModal').style.display = "block";
        }
    }

    closeModal() {
        if (this.state.isModalReadyToUse === true) {
            this.setState({ isModalOpen: false });
            document.getElementById('myModal').style.display = "";
        }
    }

    render() {
        return (
            <span>
                <button id="checkOut" onClick={this.openModal}>Check out</button>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={this.closeModal}>&times;</div>
                        <div style={{ textAlign: "center" }}>
                            <div><img src={require('./images/success.gif')} alt="Success!" style={{ width: "44vw" }} /></div>
                            <div style={{ color: "green", fontSize: "1.7rem", fontWeight: "bold" }}>
                                Transaction Successful.
                            </div>
                            <div>Total Price: ₹{this.props.totalAmount}</div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}

export default Modal;