import React from 'react'
import { useEffect } from 'react';
import './PopupComponent.min.css';

const PopupComponent = () => {

  useEffect(() => {
    popupMessage();
  }, [])
  
  const popupMessage = () =>{
    // Set timeout for displaying popup
    setTimeout(function () {
      document.getElementById("popup").style.display = "block";
      document.body.style.overflow = "hidden"; // Disable scrolling
  }, 3000); 

  // Close popup when close button is clicked
  document.getElementById("closePopup").addEventListener("click", function () {
      document.getElementById("popup").style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
  });
  }

  return (
    <div class="popup-container" id="popup">
        <div class="popup-content">
            <span class="close-btn" id="closePopup">&times;</span>
            <h2 class="popup-title">Dobrodosli</h2>
            <p class="popup-description">
                Ukoliko danas budete kupovali preko naseg sajta, dobijate dodatni popust od 30%!
                <br></br>
                Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI kupci.
            </p> 
        </div>
    </div>
  )
}

export default PopupComponent