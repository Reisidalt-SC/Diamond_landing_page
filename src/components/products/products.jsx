import './products.scss';
import { img1, img2, img3, img4, img5, img6 } from "../../assets/images";

function Products() {
    return(
        <section id='products' className='products_area'>
            <div className='title'>
                <p><span>Produtos</span></p>
                <h1>Soluções de Internet para Todas as Necessidades</h1>
                <p>Escolha o produto ideal para o seu perfil e aproveite internet de qualidade premium.</p>
            </div>

            <div className='products_grid'>
                <div className='products_field'>
                    <div style={{backgroundImage: `repeating-linear-gradient(45deg, rgba(255,155,81,0.5) 0px, rgba(255,155,81,0.5) 10px, rgba(255,140,61,0.5) 10px, rgba(255,140,61,0.5) 20px), url(${img2})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className='product_logo'>
                        <i className="bi bi-house-gear"></i>
                    </div>
                    <div className='product_information'>
                        <span>Internet Residencial</span>
                        <p>Perfeita para sua casa e família, com velocidade e estabilidade para todos os dispositivos.</p>
                        <ul className='info_list'>
                            <li>Wi-Fi de alta performance</li>
                            <li>Streaming em 4K simultâneo</li>
                            <li>Instalação incluída</li>
                            <li>Sem fidelidade</li>
                        </ul>
                        <button className='more_info'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className='products_field'>
                    <div style={{backgroundImage: `repeating-linear-gradient(45deg,rgba(47,59,68,0.5),rgba(47,59,68,0.5) 10px,rgba(31,44,53,0.5) 10px,rgba(31,44,53,0.5) 20px),url(${img1})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",}} className='product_logo'>
                        <i className="bi bi-building-gear"></i>
                    </div>
                    <div className='product_information'>
                        <span>Internet Empresarial</span>
                        <p>Solução completa para empresas que precisam de conectividade confiável e suporte dedicado.</p>
                        <ul className='info_list'>
                            <li>IP fixo incluído</li>
                            <li>SLA garantido</li>
                            <li>Suporte prioritário</li>
                            <li>Equipamentos premium</li>
                        </ul>
                        <button className='more_info'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className='products_field'>
                    <div style={{backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 10px, rgba(255,255,255,0.04) 10px, rgba(255,255,255,0.04) 20px), linear-gradient(45deg, rgba(255,155,81,0.5), rgba(37,52,63,0.5)),url(${img2})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",}} className='product_logo'>
                        <i className="bi bi-controller"></i>
                    </div>
                    <div className='product_information'>
                        <span>Internet Gamer</span>
                        <p>Ultra baixa latência e alta velocidade para jogadores que levam a sério sua experiência online.</p>
                        <ul className='info_list'>
                            <li>Ping ultra baixo</li>
                            <li>Roteador gamer incluso</li>
                            <li>QoS otimizado</li>
                            <li>Velocidade dedicada</li>
                        </ul>
                        <button className='more_info'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className='products_field'>
                    <div style={{backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 10px, rgba(255,255,255,0.04) 10px, rgba(255,255,255,0.04) 20px), linear-gradient(45deg, rgba(255,155,81,0.5), rgba(37,52,63,0.5)),url(${img3})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",}} className='product_logo'>
                        <i className="bi bi-suitcase-lg"></i>
                    </div>
                    <div className='product_information'>
                        <span>Internet Corporativa</span>
                        <p>Infraestrutura robusta para grandes empresas com demandas críticas de conectividade.</p>
                        <ul className='info_list'>
                            <li>Link dedicado</li>
                            <li>Redundância garantida</li>
                            <li>Gerenciamento 24/7</li>
                            <li>Contrato personalizado</li>
                        </ul>
                        <button className='more_info'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;