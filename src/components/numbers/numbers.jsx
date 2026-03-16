import './numbers.scss';

function Numbers() {
    return(
        <section className='numbers_area'>
            
            <div className='title'>
                <p><span>Números que Comprovam</span></p>
                <h1>Confiança e Excelência em Dados</h1>
                <p>Nossa trajetória de sucesso se reflete nos números e na satisfação dos nossos clientes.</p>
            </div>
            <div className='numbers_grid'>
                <div className='numbers_field'>
                    <i className="bi bi-person-add"></i>
                    <strong><span>+10.000</span>
                    <br />Clientes Ativos</strong>
                    <p>Confiando em nossa infraestrutura</p>
                </div>
                <div className='numbers_field'>
                    <i className="bi bi-award"></i>
                    <strong><span>98%</span>
                    <br />Satisfação</strong>
                    <p>Taxa de clientes satisfeitos</p>
                </div>
                <div className='numbers_field'>
                    <i className="bi bi-clock"></i>
                    <strong><span>99.9%</span>
                    <br />Disponibilidade</strong>
                    <p>Uptime garantido SLA</p>
                </div>
                <div className='numbers_field'>
                    <i className="bi bi-graph-up-arrow"></i>
                    <strong><span>10+</span>
                    <br />Anos de Mercado</strong>
                    <p>Experiência e credibilidade</p>
                </div>
            </div>

            <div className='instalation_number'>
                <strong><span>+5.000 instalações</span> realizadas em <span>2025</span> | Crescimento de <span>+45%</span> ao ano</strong>
            </div>
        
        </section>
    )
}

export default Numbers;