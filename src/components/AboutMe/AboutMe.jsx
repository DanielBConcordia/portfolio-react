import './AboutMe.css'

function AboutMe() {
    return (
        <div id='main-box-aboutMe'>
            

            <img src="https://i.imgur.com/nVLXDzM.png" alt="Perfil" id='PerfilPhoto' /> 

            <div>
                <p className='aboutme-text name'>
                    Nome: <span>Daniel Barbosa Concordia</span>
                </p> 
                <p className='aboutme-text'>
                Gênero: <span>Masculino</span>
                </p>
                <p className='aboutme-text'>
                    Idade: <span>17 anos</span>
                </p>
                <p className='aboutme-text'>
                    Escolaridade: <span>Cursando o 3° Ano do Ensino Médio na ETEC com Técnico em    Desenvolvimento de Sistemas</span>
                </p>
                <p className='aboutme-text'>
                    Endereço: <span>Rua Domingues Ângelo N° 70 A, Parque payol 2, Pirapora do Bom Jesus, SP, CEP: 06550-000</span>
                </p>
                <p className='aboutme-text'>
                    Gostos pessoais: 
                </p>
                    <ul className='aboutme-text'>
                        <li>Jogos em geral</li>
                        <li>Programação Web</li>
                        <li>Aprendizado em diversas áreas</li>
                    </ul>

            </div>
        </div>
    );
}

export default AboutMe