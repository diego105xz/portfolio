import './style.css';
import RodapeLogo from '../../assets/code-logo.svg';

function Rodape(){
    return(
        <footer>
            <div className='rodape'>
                <p className='diego2022'>@ 2022 - Diego Melo</p>
                <div >
                    <p className='power'>Powered by</p>
                    <img src={RodapeLogo} alt="Logo-rodape" className='rodape-logo'/>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;