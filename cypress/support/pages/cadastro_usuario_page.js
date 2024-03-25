/// <reference types="cypress" />

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

// essa forma de fazer também pode ser por should
//    validarMensagemErro(){

        // pegar esse elemento (mensagem de erro)
//        cy.get('.errorLabel')

            // pega a mensagem de erro e joga dentro da variável element
//            .then((elemnent)=>{

              // verifica se a mensagem está visível  
//              expect(elemnent).to.be.visible   
              
              // verificar se o texto que ele pegou é igual ao texto do eq
//              expect(elemnent.text()).eq('O campo nome deve ser prenchido')
//            })
            
//    },

    validarMensagemErro(mensagem){

        // pegar esse elemento (mensagem de erro)
        cy.get('.errorLabel')
            // verifica se a mensagem está visível  
            .should('be.visible')
              
              // verificar se o texto que ele pegou é igual ao texto do eq
            .should('have.text', mensagem)
            
    },

    preencheNome(nome){
          cy.get('#user')
            .type(nome)
         
    },

    preencheEmail(email){
        cy.get('#email')
          .type(email)
       
  },

    preencheSenha(senha){
        cy.get('#password')
           .type(senha)
   
}, 
    validarMensagem(nome){
        cy.get('#swal2-title')
            .should( 'be.visible')
            .should('Cadastro realizado!')
            
        cy.get('#swal2-html-container')
            .should( 'be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
            // .should('have.text', 'Bem-vindo ' + nome)

        cy.get('.swal2-confirm.swal2-styled')
            .should( 'be.visible')
            .should('have.text', 'OK')
               .click()

    }
}