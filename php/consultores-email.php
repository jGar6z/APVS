<?php

    //Variáveis
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $celular = $_POST['cel'];
    $mensagem = $_POST['message'];
    $data_envio = date('d/m/Y');
    $hora_envio = date('H:i:s');

    //Compo E-mail
    $arquivo = "
        Nome: $nome
        E-mail: $email
        Celular: $celular
        Mensagem: $mensagem
        Este e-mail foi enviado em $data_envio as $hora_envio
    ";
    
    //Emails para quem será enviado o formulário
    $destino = "apvsregionalayrtonsenna@gmail.com";
    $assunto = "Contato pelo Site - Consultores";

    //Este sempre deverá existir para garantir a exibição correta dos caracteres
    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\n";
    $headers .= "From: $nome";

    //Enviar
    mail($destino, $assunto, $arquivo, $headers);
    
    echo "<meta http-equiv='refresh' content='10;URL=../'>";

?>