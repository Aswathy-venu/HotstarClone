import * as Elements from './Footer.jsx';
import Playstore from '../../media/google-playstore.webp';
import Appstore from '../../media/ios-appstore.webp';
const Footer = () => {
    return (
        <Elements.FooterContainer>
            <Elements.FooterContent>
                <Elements.FooterDetails>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Careers</p>
                </Elements.FooterDetails>

                <Elements.FooterView>
                <h1>View Website in</h1>
                <p> &#10003;   English</p>
                </Elements.FooterView>

                <Elements.FooterHelp>
                <h1>Need Help?</h1>
                <p>Visit Help Center</p>
                <p>Share Feedback</p>
                </Elements.FooterHelp>

                <Elements.FooterConnect>
                <h1>Connect with Us</h1>
                <p>Visit Help Center</p>
                <p>Share Feedback</p>
                </Elements.FooterConnect>

            </Elements.FooterContent>
            <Elements.FooterRight>
            <p>&copy; 2024 Hotstar-Aswathy. All Rights Reserved.<br/>Terms Of Use  Privacy Policy  FAQ</p>
            <img className='playstore' src={Playstore} alt="playstore" />
            <img className='appstore' src={Appstore} alt="appstore" />
            </Elements.FooterRight>  
        </Elements.FooterContainer>
    );
};

export default Footer;