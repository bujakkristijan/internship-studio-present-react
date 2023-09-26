import React from 'react'
import './HeaderComponent.min.css'; 

const HeaderComponent = () => {
  return (
    <header id="header" class="header">
    <div id="header-logo-language" class="header-box-1">
        <div class="logo-container">
            <img class="image-logo-company" src="./images/logo.png" alt="An example PNG image"/>
        </div>
        <div class="switch-container">
            <label class="switch-toggle">
                <input class="switch-toggle-input" type="checkbox" id="swith-toggle-mode"/>
                <span class="slider-toggle"></span>
              </label>
        </div>

        <i id="hamburger-menu-button" class="fa fa-bars" aria-hidden="true"></i>
       
        <div class="language-container">
            <label class="language-label">Srpski</label>
            <label class="language-label">English</label>
            <label class="language-label">Magyar</label>
        </div>
    </div>
    <div id="header-box-tab-container" class="header-box-2">
        <i id="x-menu-button" class="fa fa-times" aria-hidden="true"></i>

        <div id="header-tab-container" class="tab-container">
            
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">O NAMA</div>
                    <div class="tab-description">vizija za uspeh</div>
                </div>
            </div>
            
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">DVG PROIZVODI</div>
                    <div class="tab-description">nasi proizvodi</div>
                </div>
            </div>
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">BRENDOVI</div>
                    <div class="tab-description">koje zastupamo</div>
                </div>
            </div>
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">DISTRIBUCIJA</div>
                    <div class="tab-description">logistika i operativa</div>
                </div>
            </div>
            
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">SARADNJA</div>
                    <div class="tab-description">prosirenje ponude</div>
                </div>
            </div>
            <div class="tab-container-box">
                <div class="tab-box">
                    <div class="tab-title">NOVOSTI</div>
                    <div class="tab-description">aktuelnosti</div>
                </div>
            </div>
            <div class="tab-container-box">
                <div class="tab-box contact">
                    <div class="tab-title">KONTAKT</div>
                    <div class="tab-description">kontaktirajte nas</div>
                </div>
            </div>
            
        </div>
    </div>
</header>
    
  )
}

export default HeaderComponent