import React from 'react';
import './OurBrandsComponent.min.css';

const OurBrandsComponent = () => {
  return (
    <div class="our-brands-container">
        <div class="our-brands-text-main-container">
            <div class="our-brands-title">
                Istaknuti brendovi za koje radimo distribuciju
            </div>
            <div class="our-brands-title-line"></div>
        </div>
        <div class="our-brands-image-main-container">
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/dove-brand-logo.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Dove</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/nivea-brand-logo.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Nivea</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/palmolive-brand-logo.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Palmolive</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/vanish-brand-logo-2.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Vanish</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/ajax-brand-logo.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Ajax</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src="../../images/cif-brand-logo.png" alt="An example PNG image"/>
                <div class="our-brands-image-title">Cif</div>
            </div>
        </div>
        <div class="button-all-brands-container">
            <button class="button-all-brands">Svi brendovi u nasem portfoliju</button>
        </div>   
    </div>
  )
}

export default OurBrandsComponent