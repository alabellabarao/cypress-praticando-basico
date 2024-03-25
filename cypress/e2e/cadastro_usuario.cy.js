/// <reference types="cypress" />

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import { faker } from '@faker-js/faker';

describe('Login', () =>{

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastrousuario()

    })
    it('Campo Nome vazio', () =>{
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo E-mail vazio', () =>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo E-mail inválido', () =>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.person.fullName())
        //cadastro_usuario_page.preencheEmail('abcdef fadda.com')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })


    it('Campo Senha vazio', () =>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha inválido', () =>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário com sucesso', async () =>{
        const name = await faker.person.fullName()
        
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('123456')
        cadastro_usuario_page.clicarCadastrar()        
        cadastro_usuario_page.validarMensagem(name)
        
    })
})