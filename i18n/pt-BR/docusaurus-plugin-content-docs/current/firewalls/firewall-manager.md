---
title: "Gerenciador de firewalls"
sidebar_position: 2
description: "A lista de firewalls e o que você pode fazer com cada um."
---

# Gerenciador de firewalls

O **Gerenciador de firewalls** lista todos os firewalls do controlador. Use o campo **Filtrar firewalls** para pesquisar pelo nome ou pelo número de série.

Para cada firewall você vê o nome e o ID, o **número de série**, a versão instalada e se ele está **Conectado**, **Não conectado** ou **Não registrado**. Nos firewalls conectados, os detalhes mostram o horário da conexão, os endereços virtual e real e os dados enviados e recebidos.

<Shots items={[{"name": "units", "caption": "Status, versão e ações de cada firewall."}]} />

## Ações

O botão **Abrir firewall** abre a interface do próprio firewall pelo controlador, em uma nova aba (métricas e logs ficam nessa interface). Permita pop-ups para o site se o navegador bloquear.

Abra o **menu de ações** (três pontos) de um firewall para:

- **Abrir terminal SSH**: veja [Terminal remoto](ssh-terminal.md).
- **Sincronizar informações do firewall**: atualiza os dados que o controlador guarda sobre o firewall.
- **Verificar atualizações de pacotes** e as ações de atualização de imagem: veja [Atualizações](updates.md).
- **Remover firewall**: o firewall continua funcionando normalmente, mas deixa de ser gerenciado por este controlador. Ele também é removido dos grupos.

Se o firewall tem uma versão anterior à esperada pelo controlador, um aviso explica que um recurso recente pode exigir abrir o firewall diretamente, ou que o firewall precisa ser atualizado antes.
