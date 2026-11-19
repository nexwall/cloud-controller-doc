---
title: "Usuários"
sidebar_position: 1
description: "Crie usuários do controlador e defina o que podem gerenciar."
---

# Usuários

Os usuários desta página podem entrar no controlador. Somente administradores podem criar, alterar ou excluir usuários.

Para adicionar um usuário, clique em **Adicionar usuário** e preencha o nome de usuário, o nome de exibição e a senha. As senhas precisam de pelo menos 8 caracteres, com letra maiúscula, letra minúscula, número e caractere especial.

<Shots items={[{"name": "users", "caption": "A lista de usuários do controlador com o status do 2FA."}]} />

- **Usuário administrador**: pode gerenciar todos os firewalls e todos os usuários.
- **Grupos de firewalls**: para os demais usuários, escolha os grupos que eles podem gerenciar. Um usuário sem grupos não acessa nenhum firewall.
- **Status do 2FA**: mostra se o usuário ativou a autenticação em dois fatores. Cada usuário a ativa nas suas próprias [Configurações da conta](account-settings.md).

Você pode editar um usuário (deixe a senha como *Inalterada* para mantê-la) ou excluí-lo. Os clientes não precisam de usuário no controlador: eles veem os dados somente leitura no Portal de Parceiros.
