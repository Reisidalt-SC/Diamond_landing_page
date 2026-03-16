import './about.scss';

function About() {
    return(
        <section id='about' className='about_area'>
            
            <span>Sobre a Diamond Co.</span>
            
            <div className='about_text'>
                <h1>Conectividade Premium com DNA de <span>Excelência</span></h1>
                <p>A <b>Diamond Co.</b> nasceu da visão de transformar a experiência de conectividade, oferecendo internet de qualidade premium com o compromisso de superar expectativas.</p>
                <p>Inspirados em valores de excelência e inovação, construímos uma infraestrutura robusta que combina tecnologia de ponta com atendimento humanizado, garantindo que cada cliente tenha a melhor experiência possível.</p>
                <p>Nossa inspiração vem de culturas que valorizam a perfeição nos detalhes e a hospitalidade genuína. Assim como um diamante é lapidado para brilhar, nossa internet é desenvolvida para oferecer o máximo em performance e confiabilidade.</p>
            </div>
            
            <div className='about_numbers'>
                <div>
                    <span>10 +</span>
                    <p>Anos</p>
                </div>
                <div>
                    <span>50 +</span>
                    <p>Cidades</p>
                </div>
                <div>
                    <span>10k +</span>
                    <p>Clientes</p>
                </div>
            </div>

            <div className='missions_grid'>
                <div className='missions_field'>
                    <i className="bi bi-award"></i>
                    <span>Missão</span>
                    <p>Fornecer conectividade premium com excelência em serviço, inovação tecnológica e atendimento humanizado.</p>
                </div>
                <div className='missions_field'>
                    <i className="bi bi-eye"></i>
                    <span>Visão</span>
                    <p>Ser referência em internet de qualidade, reconhecida pela confiabilidade e compromisso com nossos clientes.</p>
                </div>
                <div className='missions_field'>
                    <i className="bi bi-heart-half"></i>
                    <span>Valores</span>
                    <p>Integridade, inovação, excelência, compromisso com o cliente e responsabilidade social.</p>
                </div>
                <div className='missions_field'>
                    <i className="bi bi-graph-up-arrow"></i>
                    <span>Propósito</span>
                    <p>Conectar pessoas e empresas ao futuro digital com tecnologia de ponta e serviço diferenciado.</p>
                </div>
            </div>

            <div className='motto'>
                <strong>Qualidade Internacional, Atendimento Local</strong>
                <p>Combinamos o melhor da tecnologia global com a dedicação e o cuidado de quem conhece as necessidades do mercado local. Nossa equipe está pronta para oferecer a você uma experiência de conectividade incomparável.</p>
            </div>
        </section>
    )
}

export default About;