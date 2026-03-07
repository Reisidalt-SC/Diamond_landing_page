import '../styles/form.scss';

function Form(){
    return(
        <section id='contact' className='form_area'>
            <div className='title'>
                <p><span>Entre em Contato</span></p>
                <h1>Fale com Nossa Equipe</h1>
                <p>Estamos prontos para atender você. Preencha o formulário ou utilize nossos canais de contato.</p>
            </div>
            <div className='form_container'>
            <form action="#" className='form'>
                
                <div className='input_field'>
                <label htmlFor="name">Nome Completo *</label>
                <input id='name' type="text" placeholder='Seu nome' required/>
                </div>
                
                <div className='double_input_field'>
                    <div className='input_field'>
                        <label htmlFor="email">E-mail *</label>
                        <input id='email' type="email" placeholder='Seu@email.com' required/>
                    </div>
                    <div className='input_field'>
                        <label htmlFor="tel">Telefone *</label>
                        <input id='tel' type="tel" placeholder='(00) 00000-0000' required/>
                    </div>
                </div>
                
                <div className='double_input_field'>
                    <div className='input_field'>
                        <label htmlFor="city">Cidade *</label>
                        <input id='city' type="text" placeholder='Sua cidade' required/>
                    </div>
                    <div className='select_field'>
                    <label htmlFor="select">Plano de Interesse</label>
                    <select name="select" id="select">
                        <option value="0">Selecione um plano</option>
                        <option value="1">Básico - 200 Mbps</option>
                        <option value="2">Avançado - 500 Mbps</option>
                        <option value="3">Premium - 800 Mbps</option>
                        <option value="4">Ultra Diamond - 1 Gbps</option>
                    </select>
                    </div>
                </div>

                <div className='text_area'>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        placeholder="Conte-nos mais sobre suas necessidades"
                    />
                </div>

                <button className='form_button'><i className="bi bi-send"></i> Solicitar Contato</button>
            </form>

            <div className='second_section'>
            <div className='contact_infos'>
                <div className='above_info'>
                    <span>Outras Formas de Contato</span>
                    <div className='contact_data'>
                        <i className="bi bi-phone"></i>
                        <div className='contact_text'>
                            <p>Telefone</p>
                            <span>0800 123 4567</span>
                            <span>(11) 3456-7890</span>
                        </div>
                    </div>
                    <div className='contact_data'>
                        <i className="bi bi-envelope"></i>
                        <div className='contact_text'>
                            <p>E-mail</p>
                            <span>contato@diamondco.com.br</span>
                            <span>vendas@diamondco.com.br</span>
                        </div>
                    </div>
                    <div className='contact_data'>
                        <i className="bi bi-geo-alt"></i>
                        <div className='contact_text'>
                            <p>Endereço</p>
                            <span>Av. Paulista, 1000</span>
                            <span>São Paulo - SP, 01310-100</span>
                        </div>
                    </div>
                </div>
                <div className='bellow_info'>
                    <strong><i className="bi bi-clock"></i> Horário de Atendimento</strong>
                    <div className='bellow_time'>
                    <div><span>Segunda a Sexta:</span><span>8h às 20h</span></div>
                    <div><span>Sábados:</span><span>9h às 18h</span></div>
                    <div><span>Domingos:</span><span>10h às 16h</span></div>
                    </div>
                </div>
            </div>

            <div className='support_info'>
                <strong>Suporte 24/7</strong>
                <p>Para emergências e suporte técnico, nossa equipe está disponível 24 horas por dia, 7 dias por semana.</p>
                <span>0800 999 8888</span>
            </div>
            </div>
            </div>


        </section>
    )
}

export default Form;