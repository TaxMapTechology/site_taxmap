import Header from "../components/Header"
import '../styles/Carreira.css'
import img_carreira from '/icon_carreira.png'

import React, { useState } from 'react';

import frame from '/Frame.png'

export default function Carreira(){

    const [modalOpen, setModalOpen] = useState(false); 

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    return(
        <>
        <Header />
        <section className="carreira">

            <img src={frame} alt="" />
            {/* <h1>Carreira</h1>

            <div className="carreira-cards-flex">
               
                <div className="card-carreira" onClick={openModal}>
                    <div>
                    <img src={img_carreira} alt="" />
                    </div>
                    <div>
                    <p>Novos Talentos</p>
                    </div>
                </div>
              

                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <span className="close-button" onClick={closeModal}>
                        &times;
                        </span>
                        <h2>Novos talentos</h2>
                        <a href="">Inscreva-se</a>
                        
                    </div>
                    </div>
                )}

            </div> */}



        </section>
        </>
    )
}