import './footer.scss';


function Footer() {
    return(
        <footer className='footer_area'>
            <div className='footer_container'>
                <div className='above_footer'>
                    <div className='left_area'>
                        <div className='logo'>
                            <i className="bi bi-gem"></i>
                            <div className='logo_text'>
                                <p>Diamond CO.</p>
                                <span>PREMIUM INTERNET</span>
                            </div>
                        </div>
                        <p>Conectividade premium com qualidade incomparável. 
                            <br />Tecnologia de ponta para quem valoriza excelência.</p>
                        <ul className='social_links'>
                            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="#"><i class="bi bi-twitter-x"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                            <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className='links_area'>
                        <span>Links Rápidos</span>
                        <ul className='links_list'>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Planos</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Depoimentos</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className='middle_footer'>
                    <div className='informations_left'>
                            <span>Informações Legais</span>
                            <ul className='left_list'>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Termos de Uso</a></li>
                                <li><a href="#">Política de Cookies</a></li>
                                <li><a href="#">LGPD</a></li>
                            </ul>
                            <div className='cnpj_area'>
                                <strong>CNPJ</strong>
                                <span>12.345.678/0001-99</span>
                            </div>
                        </div>

                        <div className='right_contacts'>
                            <span>Contato</span>
                            <div className='contacts_field'>
                                <div className='contact'>
                                    <i className="bi bi-phone"></i>
                                    <div className='contact_info'>
                                        <span>0800 123 4567</span>
                                        <span>(11) 3456-7890</span>
                                    </div>
                                </div>
                                <div className='contact'>
                                <i className="bi bi-envelope"></i>
                                    <div className='contact_info'>
                                        <span>contato@diamondco.com.br</span>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <i className="bi bi-geo-alt"></i>
                                    <div className='contact_info'>
                                        <span>Av. Paulista, 1000 São Paulo - SP</span>
                                        <span>CEP 01310-100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='bellow_footer'>
                <span>© 2026 Diamond Co. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}


export default Footer;