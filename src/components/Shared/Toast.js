import './Toast.scss';
const Toast = () => {
    return (
        <div className="wrapper-success-t">
            <div className="card-t">
                <div className="icon-t"><i className="fas fa-phone-alt"></i></div>
                <div>
                    <h3 className="subject-t">Call Us !</h3>
                    <a className="subject-t2" href="tel:+12069090804">+1(206) 909-0804</a>
                </div>
            </div>
        </div>
    );
}
export default Toast;