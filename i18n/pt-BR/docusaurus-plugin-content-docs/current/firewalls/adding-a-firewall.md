---
title: "Adicionar um firewall"
sidebar_position: 1
description: "Conecte um firewall ao controlador com um código de adesão."
---

# Adicionar um firewall

Um firewall entra no controlador com um **código de adesão**.

1. No controlador, abra o **Gerenciador de firewalls**, clique em **Adicionar firewall** e copie o código de adesão.
2. Abra a interface web do firewall que você quer adicionar e vá em **Administração > Gerenciamento central**.
3. Cole o código de adesão e clique em **Conectar o firewall**.
4. Em instantes, o firewall aparece no **Gerenciador de firewalls**. Ele aparece como *Não registrado* até enviar os primeiros dados e depois como *Conectado*.

<Shots items={[{"name": "add-firewall", "caption": "O painel Adicionar firewall com o código de adesão."}]} />

O firewall só precisa de acesso de saída à internet; nenhuma porta de entrada precisa ser aberta. Se o firewall não aparecer, veja [Solução de problemas](../help/troubleshooting.md).

Use um código de adesão diferente para cada firewall e não o divulgue publicamente.
