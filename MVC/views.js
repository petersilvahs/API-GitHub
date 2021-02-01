class View
{
    constructor(name, login, image, acssUrl, urlModel)
    {
        let $ = document.querySelector.bind(document);
        this._imgUsuario = $('#imgUsuario').setAttribute('src', image);
        this._nomeUsuario = $('#nomeUsuario').innerText = name;
    }
}




//bind -> cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido.