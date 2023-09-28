import React, { useRef, useState, useEffect } from 'react'
import './HeaderComponent.min.css'; 

const HeaderComponent = () => {

    // const tabTitle = document.querySelector(".tab-title");
    // const offerTitle = document.querySelector(".title-offer");
    // const dvgNumbersTitle = document.querySelector('.dvg-numbers-title');
    // const dvgNumbersSubTitle = document.querySelector('.dvg-numbers-subtitle');
    // const ourProductsContainer = document.querySelector('.our-products-container');
    // const ourProductsTitle = document.querySelector('.our-products-title');
    // const ourProductsDescription = document.querySelector('.our-products-description');
    // const ourBrandsTitle = document.querySelector('.our-brands-title');
    // const ourBrandsImageTitle = document.querySelector('.our-brands-image-title');

    // let hamburgerMenuButton = document.getElementById("hamburger-menu-button");
    // let xMenuButton = document.getElementById("x-menu-button");

    // ZASTO NE MOZE headerBoxTabContainer da stoji tu odgovor !!!
    // In React, the component's render method and the creation of the associated DOM 
    // elements occur after the useEffect hook runs for the first time. 
    // In your code, you're trying to access headerBoxTabContainer outside of the useEffect hook,
    // which means that when initializeTabsLanguageIcon is called, the DOM element
    // with the id "header-box-tab-container" may not exist yet in the document. 
    // const headerBoxTabContainer = document.getElementById("header-box-tab-container");
     

    const hasInitialized = useRef(false);
    useEffect(() => {
        if (!hasInitialized.current) {
            initializeTabsLanguageIcon();
            hasInitialized.current = true;
          }
        toggleSwitchMode();
    }, []);
    
    const showMenu = () => {
        const headerBoxTabContainer = document.getElementById("header-box-tab-container");
        headerBoxTabContainer.style.right = "0px";
        headerBoxTabContainer.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, .50)";
      }
    
    const hideMenu = () => {
        const headerBoxTabContainer = document.getElementById("header-box-tab-container");
        headerBoxTabContainer.style.right = "-300px";
        headerBoxTabContainer.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
      }
    
      const initializeTabsLanguageIcon = () =>{
        const headerBoxTabContainer = document.getElementById("header-box-tab-container");
        const xIcon = document.querySelector(".fa.fa-times");
      
        // kreiram container gde cu dodavati child elemente za svaki jezik posebno
        const languageMobileContainer = document.createElement("div");
        languageMobileContainer.className = "language-mobile-container";
      
        // kreiram i dodajem element za srpski jezik kao child element na languageMobileContainer
        const srpskiDiv = document.createElement("div");
        srpskiDiv.className = "language-mobile-text";
        srpskiDiv.textContent = "Srpski";
        languageMobileContainer.appendChild(srpskiDiv);
      
        // kreiram i dodajem element za engleski jezik kao child element na languageMobileContainer
        const englishDiv = document.createElement("div");
        englishDiv.className = "language-mobile-text";
        englishDiv.textContent = "English";
        languageMobileContainer.appendChild(englishDiv);
      
        // kreiram i dodajem element za madjarski jezik kao child element na languageMobileContainer
        const magyarDiv = document.createElement("div");
        magyarDiv.className = "language-mobile-text";
        magyarDiv.textContent = "Magyar";
        languageMobileContainer.appendChild(magyarDiv);
      
        // dodajem languageMobileContainer pre xIcon, mada je xIcon position: absolute svakako;
        // nema potrebe xIcon.nextSibling da bude, dovoljno je samo da doda pre xIcon, xIcon je position: absolute svakako da stoji gore u gornjem desnom cosku od header-box-2, koji je position: fixed, pa na osnovu njega se pozicionira tacno 
        headerBoxTabContainer.insertBefore(languageMobileContainer, xIcon);
      
        // kreiram languageTextContainer koji ce biti prvi, odnosno pre container-a sa jezicima koji su dodati kao child elementi
        const languageTextContainer = document.createElement("div");
        languageTextContainer.className = "language-text-container";
        languageTextContainer.textContent = "JEZIK";
      
        // stavljam languageTextContainer pre languageMobileContainer
        headerBoxTabContainer.insertBefore(languageTextContainer, languageMobileContainer);
        // toggleSwitchMode();
      }

      const toggleSwitchMode = () =>{
        const darkModeToggle = document.getElementById('swith-toggle-mode');
        const body = document.body;
        //premestio sam ovde da ne bi u konzoli greske ispisivao jer ne postoje na pocetku, vec se kreiraju preko js-a, mada je radilo okej sve 
        // const languageTitleMobile = document.querySelector('.language-text-container');
        // const languageTextMobile = document.querySelector('.language-mobile-container');  
        let isDarkModeEnabled = false;

          // Check the initial state of the dark mode toggle
        //   if (isDarkModeEnabled) {
        //     enableDarkMode();
        //     darkModeToggle.checked = true;
        //   }
      
          // Toggle dark mode when the switch is clicked
          darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                enableDarkMode();
                isDarkModeEnabled = true;
            } else {
                disableDarkMode();
                isDarkModeEnabled = false;
            }
          });
      
          const enableDarkMode = () =>{
            /* iz body svi nasledjuju 'dark-mode' izgleda, dovoljno je na njega da se dodeli samo */
            body.classList.add('dark-mode');
            // tabTitle.classList.add('dark-mode');
            // offerTitle.classList.add('dark-mode');
            // dvgNumbersTitle.classList.add('dark-mode');
            // dvgNumbersSubTitle.classList.add('dark-mode');
            // ourProductsContainer.classList.add('dark-mode');
            // hamburgerMenuButton.classList.add('dark-mode');
            // xMenuButton.classList.add('dark-mode');
            // languageTitleMobile.classList.add('dark-mode');
            // languageTextMobile.classList.add('dark-mode');
            // ourProductsTitle.classList.add('dark-mode');
            // ourProductsDescription.classList.add('dark-mode');
            // ourBrandsTitle.classList.add('dark-mode');
            // ourBrandsImageTitle.classList.add('dark-mode');
            // headerBoxLogoAndLanguage.classList.add('dark-mode'); /* ne mora ovako svaki posebno, izgleda je dosta na body sto ima classList. Proveriti posle zasto tako radi tacno!!! */ 
          }
      
          const disableDarkMode = () => {
            body.classList.remove('dark-mode');
            // tabTitle.classList.remove('dark-mode');
            // offerTitle.classList.remove('dark-mode');
            // dvgNumbersTitle.classList.remove('dark-mode');
            // dvgNumbersSubTitle.classList.remove('dark-mode');
            // ourProductsContainer.classList.remove('dark-mode');
            // hamburgerMenuButton.classList.remove('dark-mode');
            // xMenuButton.classList.remove('dark-mode');
            // languageTitleMobile.classList.remove('dark-mode');
            // languageTextMobile.classList.remove('dark-mode');
            // ourProductsTitle.classList.remove('dark-mode');
            // ourProductsDescription.classList.remove('dark-mode');
            // ourBrandsTitle.classList.remove('dark-mode');
            // ourBrandsImageTitle.classList.remove('dark-mode');
            // headerBoxLogoAndLanguage.classList.remove('dark-mode');
          }
      }
      

  return (
    <header id="header" class="header">
    <div id="header-logo-language" class="header-box-1">
        <div class="logo-container">
            <img class="image-logo-company" src={require("../../images/logo.png")} alt="An example PNG image"/>
        </div>
        <div class="switch-container">
            <label class="switch-toggle">
                <input class="switch-toggle-input" type="checkbox" id="swith-toggle-mode"/>
                <span class="slider-toggle"></span>
              </label>
        </div>

        <i id="hamburger-menu-button" class="fa fa-bars" aria-hidden="true" onClick={showMenu}></i>
       
        <div class="language-container">
            <label class="language-label">Srpski</label>
            <label class="language-label">English</label>
            <label class="language-label">Magyar</label>
        </div>
    </div>
    <div id="header-box-tab-container" class="header-box-2">
        <i id="x-menu-button" class="fa fa-times" aria-hidden="true" onClick={hideMenu}></i>

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