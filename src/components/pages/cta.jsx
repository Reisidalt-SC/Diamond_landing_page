import '../styles/cta.scss';
import backgroundVideo from '../../assets/video/cta_video.mp4';

function Cta() {
    return(
        <section id='cta' className='cta_area'>
            <div className='left_cta_area'>
            <p>Internet Premium</p>
            <h1>Conectividade Premium no Nível de um <span>Diamante</span></h1>
            <h2>Experimente internet ultra rápida com estabilidade garantida. Tecnologia de ponta para quem valoriza qualidade e confiança.</h2>
            
            <div className='cta_attributes'>
                <div className='attributes_field'>
                    <i className="bi bi-lightning-charge"></i>
                    <span>Ultra Rápida</span>
                </div>
                <div className='attributes_field'>
                    <i className="bi bi-shield"></i>
                    <span>Segura</span>
                </div>
                <div className='attributes_field'>
                    <i className="bi bi-wifi"></i>
                    <span>Estável</span>
                </div>
                <div className='attributes_field'>
                    <i className="bi bi-headset"></i>
                    <span>Suporte 24/7</span>
                </div>
            </div>

             <div className='cta_buttons'>
                    <button className='plans_button'> <i className="bi bi-lightning-charge"></i><span>Ver Planos</span></button>
                    <button className='cta_hire_button'>Solicitar Contato</button>
                </div>
            </div>
            <div className='right_cta_area'>
                <video src={backgroundVideo}autoPlay loop muted playsInline/>
            </div>
        </section>
    )
}

export default Cta;