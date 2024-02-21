import data_publi from "./data_publi";

const Noticia = () => {
    return(
        <div>
            {data_publi.map((item, index) => {
                <div key={index}>
                    <div>
                        <img src={item.img_banner} alt="" />
                        <p>Data original da publicação: {item.data_original}</p>
                        <p>Autor: {item.autor}</p>
                        <h1>{item.title}</h1>
                        <p>{item.corpo}</p>
                        <p>Fonte: {item.fonte}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
export default Noticia;