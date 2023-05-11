import './style.css';

function Topo(){
    return(
        <header>
            <div>
                <p class="p-portfolio">Portfólio</p>
                <nav>
                    <input type="checkbox" id="check"/>
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li><a href="https://diego105xz.github.io/portfolio/">Home</a></li>
                        <li><a href="#ir-sobre">Sobre mim</a></li>
                        <li><a href="#ir-exp">Experiência</a></li>
                        <li><a href="#ir-projetos">Projetos</a></li>
                    </ul>
                </nav>       
            </div>
        </header>
    );
}

export default Topo;