import './Portfolio.css'

function Portfolio() {
    return (
        <div id='main-box-portfolio'>
            <h2>Projetos</h2>

            <table id=''>
                <thead>
                    <tr>
                        <th>Nome do projeto</th>
                        <th>Link para download</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jogo Roblox</td>
                        <td><a href="https://etecspgov-my.sharepoint.com/:u:/g/personal/daniel_concordia_etec_sp_gov_br/EfYWunvPuJlBmuqXgJjBS-gBvULALLw3_5mW93JQdFf8BQ?e=MzE1w3" target='_blank'>Jogo Roblox</a></td>
                        <td>Um jogo feito para um evento na escola, a intenção é um jogo de perguntas e respostas sobre matemática. Jogo feito em .Lua</td>
                    </tr>
                    <tr>
                        <td>Projeto Números</td>
                        <td><a href="https://etecspgov-my.sharepoint.com/:f:/g/personal/daniel_concordia_etec_sp_gov_br/EhWSAZcNnSRFvE8eg0OYpJEBfynKBBTs1BkMGiKEdkRD7w?e=qCNtG9" target='_blank'>Projeto Números</a></td>
                        <td>Um projeto feito com html, javascript e css básico, que calcula  a potencia, raiz quadrada e tabuada de alguns números que o usuário digita</td>
                    </tr>
                    <tr>
                        <td>Teste Vocacional TI</td>
                        <td><a href="https://etecspgov-my.sharepoint.com/:f:/g/personal/daniel_concordia_etec_sp_gov_br/El1RNzUidHpMsnOwZf8M05UBjukZpvQgv3D14fm----pIA?e=IIRdEm" target='_blank'>Teste Vocacional</a></td>
                        <td>Um teste vocacional feito em React, com API feita em C# e banco de dados feito em MySql. Nota: Só mostrará o resultado do teste se conectar a API no front-end.</td>
                    </tr>
                    <tr>
                        <td>Office 365</td>
                        <td><a href="https://etecspgov-my.sharepoint.com/:f:/g/personal/daniel_concordia_etec_sp_gov_br/EnBcoDAw4D9EhBifu-xK7psB-PotP2Lqd7KQy1Op451xUA?e=IXjnlP" target='_blank'>Office 365</a></td>
                        <td>Arquivos de exemplos que mostram o quanto sei dos aplicativos, tais como: Power Point, Word, Excel.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Portfolio