import './prices.scss';

function Prices() {
    return(
        <section id='packets' className='prices_area'>
             <div className='title'>
                <p><span>Planos e Preços</span></p>
                <h1>Escolha o Plano Perfeito para Você</h1>
                <p>Escolha o produto ideal para o seu perfil e aproveite internet de qualidade premium.</p>
            </div>

            <div className='prices_grid'>
                <div className='prices_field'>
                    <div className='value_area'>
                        <strong>Básico</strong>
                        <span>R$ 89 <small>,90/mês</small></span>
                        <p><span className='orange_price'>200 Mbps</span></p>
                        <p>Ideal para uso básico e navegação</p>
                    </div>
                    <div className='value_info'>
                        <ul>
                            <li>Download: 200 Mbps</li>
                            <li>Upload: 100 Mbps</li>
                            <li>Wi-Fi incluso</li>
                            <li>Suporte padrão</li>
                            <li>Instalação grátis</li>
                        </ul>
                        <button className='value_button'><i class="bi bi-lightning-charge-fill"></i> Contratar</button>
                    </div>
                </div>
                <div className='prices_field'>
                    <div className='value_area'>
                        <strong>Avançado</strong>
                        <span>R$ 129 <small>,90/mês</small></span>
                        <p><span className='orange_price'>500 Mbps</span></p>
                        <p>Perfeito para streaming e trabalho</p>
                    </div>
                    <div className='value_info'>
                        <ul>
                            <li>Download: 500 Mbps</li>
                            <li>Upload: 250 Mbps</li>
                            <li>Wi-Fi Mesh incluso</li>
                            <li>Suporte prioritário</li>
                            <li>Instalação grátis</li>
                            <li>IP fixo opcional</li>
                        </ul>
                        <button className='value_button'><i class="bi bi-lightning-charge-fill"></i> Contratar</button>
                    </div>
                </div>
                <div className='prices_field'>
                    <div id='premium' className='value_area'>
                        <strong>Premium</strong>
                        <span>R$ 179<small>,90/mês</small></span>
                        <p><span className='orange_price'>800 Mbps</span></p>
                        <p>Para quem exige o máximo</p>
                    </div>
                    <div className='value_info'>
                        <ul>
                            <li>Download: 800 Mbps</li>
                            <li>Upload: 400 Mbps</li>
                            <li>Wi-Fi Mesh Premium</li>
                            <li>Suporte VIP 24/7</li>
                            <li>Instalação expressa</li>
                            <li>IP fixo incluso</li>
                            <li>Segurança digital</li>
                        </ul>
                        <button className='value_button'><i class="bi bi-lightning-charge-fill"></i> Contratar</button>
                    </div>
                </div>
                <div className='prices_field'>
                    <div id='ultra' className='value_area'>
                        <strong>Ultra Diamond</strong>
                        <span>R$ 249 <small>,90/mês</small></span>
                        <p><span className='orange_price'>1 Gbps</span></p>
                        <p>O máximo em conectividade</p>
                    </div>
                    <div className='value_info'>
                        <ul>
                            <li>Download: 1 Gbps</li>
                            <li>Upload: 500 Mbps</li>
                            <li>Wi-Fi 6 Premium</li>
                            <li>Gerente de conta dedicado</li>
                            <li>Instalação VIP</li>
                            <li>IP fixo incluso</li>
                            <li>Segurança empresarial</li>
                            <li>Backup em nuvem 100GB</li>
                        </ul>
                        <button className='value_button'><i class="bi bi-lightning-charge-fill"></i> Contratar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices;