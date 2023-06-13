import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-dark">
            <div className="copyright">
                &copy; Copyright <strong><span>{new Date().getFullYear()}</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by Mihir
            </div>
        </footer>
    )
}

export default Footer