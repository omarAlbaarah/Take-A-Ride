import './Toast.scss';
const Toast = () => {
    return (
        <div className="wrapper-success">
            <div className="card">
                <div className="icon"><i className="fas fa-phone-alt"></i></div>
                <div className="subject">
                    <h3>Call Us !</h3>
                    <a href="tel:+12069090804">+1(206) 909-0804</a>
                </div>
            </div>
        </div>
    );
}
export default Toast;