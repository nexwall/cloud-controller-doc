---
title: "Suporte e Support Packets"
sidebar_position: 1
description: "Chamados e Support Packets dos seus firewalls."
---

# Suporte e Support Packets

**Suporte** tem duas abas. Ambas usam os mesmos chamados, então a conversa é a mesma em todo lugar, inclusive no Portal de Parceiros.

## Chamados

Abra um chamado para um firewall com **Novo chamado**, acompanhe a conversa e responda. Você pode colar capturas de tela ou anexar imagens, PDF, ZIP, GZ e arquivos de texto (até 10 MB cada). Use **Marcar como resolvido** quando o problema for resolvido e **Reabrir** se ele voltar.

## Nível 2: diagnóstico por CLI

Use esta aba quando o suporte pedir para olhar dentro de um firewall. Ela tem três painéis:

1. **Selecione Support Packet**: a lista de diagnósticos, agrupados por assunto. Clique em um para selecioná-lo.
2. **O packet**: para que serve, o que executa, por quanto tempo pode rodar e quanta saída retorna. Preencha os campos que ele pede (por exemplo um host, um nome ou uma porta).
3. **Conversa**: o histórico do chamado, com as mesmas opções de colar e anexar.

Para executar um packet:

1. Escolha o **firewall** do chamado.
2. Selecione o **Support Packet** e leia a descrição.
3. Preencha os campos.
4. Marque **Li a descrição deste Support Packet e autorizo a execução no firewall selecionado**. **Executar** só é habilitado depois disso.
5. Clique em **Executar**. Enquanto roda, reproduza o problema se o packet pedir.
6. Ao terminar, revise o resultado. Use **Baixar (.zip)** para guardar uma cópia e **Enviar resultado ao chamado** para que o suporte possa lê-lo.

Os Support Packets apenas leem o estado do firewall; não alteram a configuração. Senhas, chaves e tokens são removidos da saída antes de você vê-la, e a tela mostra quantos segredos foram ocultados. Os resultados são mantidos por tempo limitado.

A lista completa de Support Packets, com seus campos, está em https://support.nexwall.com.br/pt-BR/#packets (a mesma lista tem link na tela).

## Se um packet não executa

- O firewall precisa estar **online** e registrado neste controlador.
- O firmware do firewall precisa incluir os Support Packets. Em firmware mais antigo a tela informa que esta versão do firewall não suporta diagnóstico remoto; atualize o firewall (veja **Atualizações**) e tente de novo.
- Se o packet informar campos faltando, preencha os campos indicados na mensagem.
