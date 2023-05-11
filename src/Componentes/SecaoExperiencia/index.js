import './style.css';

function SecaoExperiencia(){
    return(
        <section className='secaoExp' id="ir-exp">
            <div className='secao-exp'>
                <h3>Experiência</h3>
                <div className='exp1'>
                    <div className='titulo'>
                        <h4>Analista Junior</h4>
                        <p>Nov 2021 - Atual</p>
                    </div>
                    <h5>Accenture</h5>
                    <p className='descricao'>Participei de projetos onde minha responsabilidade era fazer engenharia
                        reversa e documentar aplicações legados com linguagem PHP e SQL e
                        migrar aplicações de servidores, onde tive contato do linux e docker.
                    </p>
                </div>
                <div className='exp1'>
                    <div className='titulo'>
                        <h4>Estágio Suporte N1</h4>
                        <p>Dez 2019 - JUL 2021</p>
                    </div>
                    <h5>Beesby</h5>
                    <p className='descricao'>Prestava suporte via chat em um E-commerce orietando o cliente e
                        coletando dados de possivel bug no site documetando e reportando para
                        correção no N2

                    </p>
                </div>
            </div>
        </section>
    );
}

export default SecaoExperiencia;