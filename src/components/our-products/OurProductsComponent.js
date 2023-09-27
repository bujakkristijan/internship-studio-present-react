import React from 'react';
import { useEffect, useState } from 'react';
import DataService from '../../services/DataService';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './OurProductsComponent.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const OurProductsComponent = () => {

    const [products, setProducts] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        window.addEventListener("resize", updateSlidesPerView);
        getProducts();
    }, [])


    const getProducts = () =>{
        DataService.loadProductsFromJSONFile().then(response =>{
            setProducts(response.products);
        }).catch((error) =>{
            console.error("Error getting data", error);
        })
    }

    const updateSlidesPerView = () => {
        const viewportWidth = window.innerWidth;
    
        if (viewportWidth < 900) {
            setSlidesPerView(1);
          } 
        else if(viewportWidth < 1200 && viewportWidth >= 900){
            setSlidesPerView(3);
        }
        else {
            setSlidesPerView(4);
          }
      }
    

  return (
    <div class="our-products-container">
        <div class="our-products-text-main-container">
            <div class="our-products-title">
                Nasi proizvodi
            </div>
            <div class="our-products-title-line"></div>
            <div class="our-products-description">
                Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI kupci.
            </div>
        </div>
    
         <Swiper id="mySwiper" className="mySwiper-our-products" 
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={30}
            navigation ={true}
            modules={[Navigation]}
            space-between={30}
            >
            {
                products.map(
                    product =>
                    <SwiperSlide className="swiper-our-products" key={product.id}>
                    <div className="our-products-image-container-box">
                        <img className="image-our-product" src={product.imagePath} alt="An example PNG image"/>
                        <div className="our-products-name">{product.title}</div>   
                    </div>
                    </SwiperSlide>
                )
            }     
            </Swiper> 

    </div>
    
  )
}

export default OurProductsComponent