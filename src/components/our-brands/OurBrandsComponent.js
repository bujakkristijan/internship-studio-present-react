import React, {useState, useEffect} from 'react';
import './OurBrandsComponent.min.css';
import DataService from '../../services/DataService';

const OurBrandsComponent = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBrands();
    }, [])


    const getBrands = () =>{
        DataService.loadBrandsFromJSONFile().then(response =>{
            setBrands(response.brands);
            console.log(response.brands);
        }).catch((error) =>{
            console.error("Error getting data", error);
        })
    }

  return (
    <div class="our-brands-container">
        <div class="our-brands-text-main-container">
            <div class="our-brands-title">
                Istaknuti brendovi za koje radimo distribuciju
            </div>
            <div class="our-brands-title-line"></div>
        </div>
        <div class="our-brands-image-main-container">

            {
                brands.map(
                    brand =>
                    <div class="our-brands-image-container" key={brand.id}>
                        <img class="image-our-brand" src={brand.imagePath} alt="An example PNG image"/>
                        <div class="our-brands-image-title">{brand.title}</div>
                    </div>
                )
            }

            {/* <div class="our-brands-image-container">
                <img class="image-our-brand" src={require('../../images/dove-brand-logo.png')} alt="An example PNG image"/>
                <div class="our-brands-image-title">Dove</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src={require("../../images/nivea-brand-logo.png")} alt="An example PNG image"/>
                <div class="our-brands-image-title">Nivea</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src={require("../../images/palmolive-brand-logo.png")} alt="An example PNG image"/>
                <div class="our-brands-image-title">Palmolive</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src={require("../../images/vanish-brand-logo-2.png")} alt="An example PNG image"/>
                <div class="our-brands-image-title">Vanish</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src={require("../../images/ajax-brand-logo.png")} alt="An example PNG image"/>
                <div class="our-brands-image-title">Ajax</div>
            </div>
            <div class="our-brands-image-container">
                <img class="image-our-brand" src={require("../../images/cif-brand-logo.png")} alt="An example PNG image"/>
                <div class="our-brands-image-title">Cif</div>
            </div> */}
        </div>
        <div class="button-all-brands-container">
            <button class="button-all-brands">Svi brendovi u nasem portfoliju</button>
        </div>   
    </div>
  )
}

export default OurBrandsComponent