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

## Licença

Um firewall novo começa com um período de teste. Para licenciá-lo, compre um plano (NW-50, NW-250 ou NW-1000) na página **Licenças** do Portal de Parceiros. Quando o plano é aplicado, o controlador faz o firewall verificar com o servidor de licenças na hora, e a nova licença fica ativa sem esperar a próxima verificação agendada. Para isso o firewall precisa estar conectado ao controlador.
