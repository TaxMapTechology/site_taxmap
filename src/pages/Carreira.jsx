import Header from "../components/Header"
import '../styles/Carreira.css'
import img_carreira from '/icon_carreira.png'

export default function Carreira(){
    return(
        <>
        <Header />
        <section className="carreira">
            <h1>Carreira</h1>

            <div className="carreira-cards-flex">
                {/* Card */}
                <div className="card-carreira">
                    <div>
                        <img src={img_carreira} alt="" />
                    </div>
                    <div>
                        <p>Novos Talentos</p>
                    </div>
                </div>
                {/* Card */}
                {/* Card */}
                <div className="card-carreira">
                    <div>
                        <img src={img_carreira} alt="" />
                    </div>
                    <div>
                        <p>Contabilidade</p>
                    </div>
                </div>
                {/* Card */}


            </div>
            

        </section>
        </>
    )
}