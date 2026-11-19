---
title: "Terminal remoto"
sidebar_position: 4
description: "Abra um terminal SSH em um firewall pelo navegador."
---

# Terminal remoto

Você pode abrir um terminal de linha de comando em qualquer firewall conectado pelo controlador, em uma nova janela do navegador.

1. No **Gerenciador de firewalls**, abra o menu de ações do firewall e escolha **Abrir terminal SSH**.
2. O controlador entra no firewall por você com uma **chave gerenciada**: não é preciso informar a senha do firewall.
3. Para sair do terminal, feche a janela.

<Shots items={[{"name": "terminal", "caption": "O terminal remoto de um firewall."}]} />

Se o acesso direto não for possível, a janela pede o usuário e a senha do firewall, ou a frase secreta da sua própria chave (**Usar a senha do firewall**).

## Usar a sua própria chave SSH

Em [Configurações da conta](../administration/account-settings.md) você pode gerar o seu par de chaves SSH protegido por uma frase secreta. Depois, no Gerenciador de firewalls, use **Enviar chave pública SSH** em um ou mais firewalls e **Revogar chave pública SSH** para removê-la.

Se o navegador bloquear a janela do terminal, permita pop-ups para o site do controlador.
