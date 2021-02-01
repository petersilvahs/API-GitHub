class Model{
    contructor()
    {
        this._acssUrl = " ";
        this._acssName = " ";
        this._acssLogin = " ";
        this._acssImage = " ";
        this._urlModel = " ";
        this._urlModelDados = " ";
    }
    ShowUser(){
        let request = new XMLHttpRequest(acss, retorna);
        request.open('GET', `https://api.github.com/users/${user}`);
        request.addEventListener('load', () =>
        {
            if(request.status == 200)
            {
                let acesso = JSON.parse(request.acessoTx);
                this._acssUrl = acesso.html;
                this._acssName = acesso.name;
                this._acssLogin = usuario;
                this._acssImage = acessa.img;
                this._urlModelDados = acessa.url;
                this._urlModel = `https://github.com/${acss}` 
                retorna();
            }
            else if(request.status == 404)
            {
                alert('Usuário não encontrado, verifique os dados e tente novamente!');
                console.log();
            }
        })
        request.send();
    }
}