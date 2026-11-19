---
title: "Grupos de firewalls"
sidebar_position: 1
description: "Agrupe firewalls e limite o que cada usuário pode gerenciar."
---

# Grupos de firewalls

Os grupos permitem organizar os firewalls, por exemplo um grupo por unidade do cliente ou por região.

- **Adicionar grupo de firewalls**: dê um nome e uma descrição e escolha os firewalls.
- **Edite** um grupo para adicionar ou remover firewalls. Um firewall pode estar em vários grupos.
- **Exclua** um grupo: os firewalls não são removidos, apenas o grupo. Um grupo usado por usuários precisa ser liberado antes.

<Shots items={[{"name": "groups", "caption": "A lista de grupos de firewalls com o número de firewalls de cada um."}]} />

Os grupos também controlam o acesso: em [Usuários](../administration/users.md) você escolhe quais grupos cada usuário pode gerenciar. Um usuário que não é administrador e não tem grupo não vê nenhum firewall.

Os grupos também ajudam nos [relatórios](../reports/executive-reports.md): você gera o relatório de todos os firewalls de um grupo com um clique.
