import React from "react";

import Topo from "../../Componentes/Topo";
import SecaoCapa from "../../Componentes/SecaoCapa";

function Home(){
    return(
        <div>
            <Topo />
            <main>
                <SecaoCapa />
            </main>
        </div>
    );
}

export default Home;