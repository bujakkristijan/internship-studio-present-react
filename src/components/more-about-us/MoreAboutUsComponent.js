import React from 'react';
import './MoreAboutUsComponent.min.css';

const MoreAboutUsComponent = () => {
  return (
    
        <div class="more-about-us-container">
            <div class="more-about-us-box-container">
                <img class="image-more-about-us" src={require("../../images/more-about-us-image.png")} alt="An example PNG image"/>
            </div>
            <div class="more-about-us-box-container text-box">
                <div class="title-more-about-us">
                    DVG COMPANY
                </div>
                <div class="line1-more-about-us"></div>
                <div class="subtitle-more-about-us">
                    Veleprodaja i maloprodaja kozmetike i kucne hemije
                </div>
                <div class="line2-more-about-us"></div>
                <div class="description-more-about-us">DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici.
                    Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije.
                    U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.
                </div>
                <button class="button-more-about-us">Saznaj vise o nama</button>
            </div>
        </div>
    
  )
}

export default MoreAboutUsComponent