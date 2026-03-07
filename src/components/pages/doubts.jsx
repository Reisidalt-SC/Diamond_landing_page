import '../styles/doubts.scss';
import { useState } from "react";

function Doubts() {
    const [active, setActive] = useState(null);
    
    return(
        <section className='doubts_area'>
            <div className='title'>
                <p><span><i className="bi bi-question-circle"></i>Dúvidas Frequentes</span></p>
                <h1>Perguntas Frequentes</h1>
                <p>Encontre respostas para as dúvidas mais comuns sobre nossos serviços.</p>
            </div>

            <div className='accordions_container'>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 0 ? null : 0)}className="accordion_header">
                        <span>Como funciona a instalação?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 0 ? "active" : ""}`}>
                        <p>
                            A instalação é totalmente gratuita e pode ser agendada conforme sua disponibilidade. 
                            Nossa equipe técnica realizará todo o processo, que geralmente leva de 2 a 4 horas. 
                            Levamos os equipamentos necessários e configuramos tudo para você começar a usar imediatamente.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 1 ? null : 1)}className="accordion_header">
                        <span>Existe período de fidelidade?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 1 ? "active" : ""}`}>
                        <p>
                            Não! A Diamond Co. acredita que a qualidade do serviço deve ser o motivo para você ficar conosco, não contratos rígidos. 
                            Você pode cancelar quando quiser, sem multas ou taxas de cancelamento.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 2 ? null : 2)}className="accordion_header">
                        <span>Como funciona o suporte técnico?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 2 ? "active" : ""}`}>
                        <p>
                            Oferecemos suporte 24/7 através de diversos canais: telefone (0800), WhatsApp, e-mail e chat online.
                            Para clientes dos planos Premium e Ultra Diamond, disponibilizamos suporte prioritário com tempo de resposta ainda mais rápido.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 3 ? null : 3)}className="accordion_header">
                        <span>Qual a área de cobertura?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 3 ? "active" : ""}`}>
                        <p>
                            Atualmente estamos presentes em mais de 50 cidades em todo o Brasil. 
                            Você pode verificar a disponibilidade em sua região através do nosso formulário de contato ou ligando para nosso 0800. Estamos em constante expansão!
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 4 ? null : 4)}className="accordion_header">
                        <span>A velocidade é garantida?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 4 ? "active" : ""}`}>
                        <p>
                           Sim! Diferente de outras empresas, garantimos via contrato a velocidade contratada. 
                           Nossa infraestrutura de fibra óptica e gerenciamento inteligente de rede asseguram que você tenha acesso à velocidade total do seu plano.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 5 ? null : 5)}className="accordion_header">
                        <span>Posso mudar de plano depois?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 5 ? "active" : ""}`}>
                        <p>
                            Com certeza! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento sem custos adicionais. 
                            O ajuste é feito de forma simples através do nosso suporte ou área do cliente, e a mudança ocorre em até 24 horas.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 6 ? null : 6)}className="accordion_header">
                        <span>O que está incluso no valor mensal?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 6 ? "active" : ""}`}>
                        <p>
                            O valor do plano já inclui: 
                            instalação gratuita, roteador Wi-Fi (comodato), manutenção dos equipamentos, suporte técnico, e todos os impostos. Não há taxas ocultas ou cobranças surpresa.
                        </p>
                    </div>
                </div>
                <div className='accordion'>
                    <button onClick={() => setActive(active === 7 ? null : 7)}className="accordion_header">
                        <span>Como funciona o pagamento?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 7 ? "active" : ""}`}>
                        <p>
                           Aceitamos diversas formas de pagamento:
                            boleto bancário, cartão de crédito, débito automático e PIX. O vencimento é flexível e pode ser ajustado conforme sua preferência (dias 5, 10, 15, 20 ou 25 de cada mês).
                        </p>
                    </div>
                </div>
               <div className='accordion'>
                    <button onClick={() => setActive(active === 8 ? null : 8)}className="accordion_header">
                        <span>Tem limite de dados?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 8 ? "active" : ""}`}>
                        <p>
                           Não! Todos os nossos planos são ilimitados. 
                           Você pode navegar, fazer streaming, jogar online e trabalhar o quanto quiser, sem se preocupar com franquia de dados ou velocidade reduzida.
                        </p>
                    </div>
                </div>
               <div className='accordion'>
                    <button onClick={() => setActive(active === 9 ? null : 9)}className="accordion_header">
                        <span>E se eu tiver problemas com a conexão?</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className={`accordion_body ${active === 9 ? "active" : ""}`}>
                        <p>
                            Nosso SLA garante 99.9% de disponibilidade. 
                            Em caso de problemas, nossa equipe técnica inicia o atendimento imediatamente. Para planos Premium e Ultra Diamond, garantimos resolução em até 4 horas úteis.
                        </p>
                    </div>
                </div>
            </div>

            <div className='doubts_button'>
                <p>Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
                <button>Fale Conosco <i className="bi bi-arrow-right"></i></button>
            </div>
        </section>
    )
}

export default Doubts;