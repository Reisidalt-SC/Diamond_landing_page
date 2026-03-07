import '../styles/services.scss';


function Services() {
    return(
        <section id='services' className='services_area'>
             <div className='title'>
                <p><span>Serviços Adicionais</span></p>
                <h1>Muito Além da Internet</h1>
                <p>A Diamond Co. oferece um ecossistema completo de tecnologia para atender todas as suas necessidades digitais.</p>
            </div>

            <div className='services_grid'>
                <div className='services_field'>
                    <i className="bi bi-wifi"></i>
                    <span>Wi-Fi Mesh</span>
                    <p>Cobertura total em todos os ambientes com tecnologia mesh de última geração.</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-shield"></i>
                    <span>Segurança Digital</span>
                    <p>Proteção avançada contra ameaças online e navegação segura para toda família..</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-cloud-check"></i>
                    <span>Backup em Nuvem</span>
                    <p>Armazenamento seguro na nuvem para seus arquivos mais importantes.</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-activity"></i>
                    <span>Monitoramento de Rede</span>
                    <p>Acompanhamento em tempo real da sua conexão com alertas proativos.</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-globe-americas"></i>
                    <span>IP Fixo</span>
                    <p>Endereço IP dedicado para acessos remotos e aplicações empresariais.</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-building"></i>
                    <span>Soluções Corporativas</span>
                    <p>Infraestrutura completa para empresas com demandas específicas.</p>
                </div>
                <div className='services_field'>
                    <i className="bi bi-tv"></i>
                    <span>Streaming Premium</span>
                    <p>Pacotes de streaming otimizados para máxima qualidade de vídeo.</p>
                </div>
            </div>

            <div className='consult_button'>
                <div className='consult_text'>
                    <strong>Quer saber mais sobre nossos serviços?</strong>
                    <p>Entre em contato com nossa equipe e descubra como podemos criar a solução perfeita para você.</p>
                </div>
                <button>Solicitar Consultoria</button>
            </div>
        </section>
    )
}

export default Services;