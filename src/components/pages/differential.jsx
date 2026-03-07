import '../styles/differential.scss';
import { img1, img2, img3, img4, img5, img6 } from "../../assets/images";

function Differential() {
    return(
        <section  className='differential_area'>
            <div className='title'>
                <p><span>Diferenciais</span></p>
                <h1>Por que escolher a <span>Diamond Co.</span></h1>
                <p>Oferecemos muito mais que apenas internet. Proporcionamos uma experiência premium de conectividade.</p>
            </div>

            <div className='differential_attributes'>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img6})` }}  className='icons_line'>
                        <i className="bi bi-lightning-charge "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Velocidade Ultra Rápida</span>
                        <p>Conexão de fibra óptica com velocidades de até 1Gbps para streaming, games e trabalho sem interrupções.</p>
                    </div>
                </div>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img4})` }}  className='icons_line'>
                        <i className="bi bi-shield "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Estabilidade Garantida</span>
                        <p>99.9% de uptime com infraestrutura redundante e monitoramento 24/7 para máxima confiabilidade.</p>
                    </div>
                </div>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img1})` }}  className='icons_line'>
                        <i className="bi bi-headset "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Suporte 24/7</span>
                        <p>Equipe especializada disponível a qualquer hora para resolver suas dúvidas e problemas rapidamente.</p>
                    </div>
                </div>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img3})` }}  className='icons_line'>
                        <i className="bi bi-graph-up-arrow "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Tecnologia de Ponta</span>
                        <p>Equipamentos de última geração e infraestrutura moderna para a melhor experiência de conexão.</p>
                    </div>
                </div>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img2})` }}  className='icons_line'>
                        <i className="bi bi-clock-history "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Instalação Rápida</span>
                        <p>Processo ágil de instalação com agendamento flexível e técnicos altamente qualificados.</p>
                    </div>
                </div>
                <div className='differential_field'>
                    <div style={{ backgroundImage: `url(${img5})` }}  className='icons_line'>
                        <i class="bi bi-trophy "></i>
                    </div>
                    <div className='differential_text'>
                        <span>Qualidade Premium</span>
                        <p>Serviço diferenciado com foco em excelência, superando as expectativas dos clientes mais exigentes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Differential;