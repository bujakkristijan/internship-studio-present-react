import React from 'react';
import './DvgNumbersComponent.min.css';

const DvgNumbersComponent = () => {
  return (
    <div class="dvg-numbers-container">
            <div class="dvg-numbers-text-container">
                <div class="dvg-numbers-title">DVG Company</div>
                <div class="dvg-numbers-subtitle">u brojkama</div>
                <div class="dvg-numbers-line"> </div>
            </div>
            <div class="dvg-numbers-image-container">
                
                <div class="numbers-box-container">
                    <div class="numbers-value">
                        3000m2
                    </div>
                    <div class="numbers-description">
                        Magacinskog prostora
                    </div>
                </div>
                <div class="numbers-box-container">
                    <div class="numbers-value">
                        20
                    </div>
                    <div class="numbers-description">
                        Vozila
                    </div>
                </div>
                <div class="numbers-box-container">
                    <div class="numbers-value">
                        8 
                    </div>
                    <div class="numbers-description">
                        Komercijalista
                    </div>
                </div>
                <div class="numbers-box-container last-box">
                    <div class="numbers-value">
                        170 
                    </div>
                    <div class="numbers-description">
                        Brendova
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DvgNumbersComponent