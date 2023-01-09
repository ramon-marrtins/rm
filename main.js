function logar(){
   var nome = document.getElementById('nome').value;
   var senha = document.getElementById('senha').value;

   if(nome == "ramon" && senha == "ramon"){
      location.href = "sucesso.html";
   }else{
      alert('usuario ou senha incorreto');
   }
}