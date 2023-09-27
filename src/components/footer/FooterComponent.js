import React from 'react';
import './FooterComponent.min.css';

const FooterComponent = () => {
  return (
    <div class="footer-container">
        <div class="footer-big-row-container">
            <div class="footer-row-box-container">
                <img class="image-footer-logo" src={require("../../images/footer-logo.png")} alt="An example PNG image"/>
            </div>
            <div class="footer-row-box-container">
                <div class="footer-contact-title">
                    D.V.G COMPANY
                </div>
                <div class="footer-contact-box-container">
                    <div class="footer-contact-box-img-text-container">
                        <div class="footer-contact-logo-container">
                            <img class="image-footer-logo" src={require("../../images/location-footer-logo.png")} alt="An example PNG image"/>
                        </div>
                        <div class="footer-contact-text">
                            Čantavirski put bb 24000 Subotica, Srbija
                        </div>
                    </div>
                    <div class="footer-contact-box-img-text-container">
                        <div class="footer-contact-logo-container">
                            <img class="image-footer-logo" src={require("../../images/phone-footer-logo.png")} alt="An example PNG image"/>
                        </div>
                        <div class="footer-contact-text">
                            +381 24 568 555
                        </div>
                    </div>
                    <div class="footer-contact-box-img-text-container">
                        <div class="footer-contact-logo-container">
                            <img class="image-footer-logo" src={require("../../images/message-footer-logo.png")} alt="An example PNG image"/>
                        </div>
                        <div class="footer-contact-text">
                            office@dvgcomapny.com
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-row-box-container tabs">

                <div class="footer-tab-text">O NAMA</div>
                <div class="footer-tab-text">DVG PROIZVODI</div>
                <div class="footer-tab-text">BRENDOVI</div>
                <div class="footer-tab-text">DISTRIBUCIJA</div>
                <div class="footer-tab-text">SARADNJA</div>
                <div class="footer-tab-text">NOVOSTI</div>
                <div class="footer-tab-text">KONTAKT</div>
            </div>

            <div class="footer-row-box-container last">
                <div class="footer-socials-container">
                    <div class="footer-socials-text">Pratite nas:</div>
                    <div class="footer-socials-logo-container">
                        <img class="image-footer-social-logo" src={require("../../images/facebook-social-logo.png")} alt="An example PNG image"/>
                        <img class="image-footer-social-logo" src={require("../../images/twitter-social-logo.png")} alt="An example PNG image"/>
                        <img class="image-footer-social-logo" src={require("../../images/youtube-social-logo.png")} alt="An example PNG image"/>
                        <img class="image-footer-social-logo" src={require("../../images/messenger-social-logo.png")} alt="An example PNG image"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-small-row-container">
            <div class="footer-small-row-box-text">
                Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.
            </div>
            <div class="footer-small-row-box-text underlined">
                Privatnost podatka
            </div>
            <div class="footer-small-row-box-text underlined">
                Uslovi korišćenja
            </div>
            <div class="footer-small-row-box-text with-parts">
                <div class="footer-small-row-text-part-1">Powered by:</div>
                <div class="footer-small-row-text-part-2">StudioPresent</div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent