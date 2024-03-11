import Header from "../components/Header"
import '../styles/Carreira.css'
import img_carreira from '/icon_carreira.png'

import React, { useState } from 'react';

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
            <h1>Carreira</h1>

            <div className="carreira-cards-flex">
                {/* Card */}
                <div className="card-carreira" onClick={openModal}>
                    <div>
                    <img src={img_carreira} alt="" />
                    </div>
                    <div>
                    <p>Novos Talentos</p>
                    </div>
                </div>
                {/* Card */}

                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <span className="close-button" onClick={closeModal}>
                        &times;
                        </span>
                        <h2>Novos talentos</h2>
                        {/* Aqui você pode adicionar o conteúdo do modal */}
                    </div>
                    </div>
                )}

                
               


            </div>
            

        </section>
        </>
    )
}