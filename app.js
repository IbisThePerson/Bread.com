    function pesquisar() {
        let section = document.getElementById("resultados-pesquisa")
        console.log(section);

        let campoPesquisa = document.getElementById("campo-pesquisa").value

        if (!campoPesquisa) {
            section.innerHTML = "<p>Nada foi foi digitado</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

        console.log(campoPesquisa)

        let resultado ="";
        let título = "";
        let descricao = "";
        let tags = "";

        // para cada dado dentro da lista de dados
        for (let dado of dados) {
            título = dado.título.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
            if (título.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // cria um novo elemento
                resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.título}</a> 
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
             `
            }
            console.log(dado.título.includes(campoPesquisa))
            
        }
        if (!resultado) {
            resultado = "<p>Nada sobre isso foi encontrado </p>" 
        }

 section.innerHTML = resultado


    }
    //   console.log(dados);

        