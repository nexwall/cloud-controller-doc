---
title: "Adding a firewall"
sidebar_position: 1
description: "Connect a firewall to the controller with a join code."
---

# Adding a firewall

A firewall joins the controller with a **join code**.

1. In the controller, open **Firewall manager** and click **Add firewall**, then copy the join code.
2. Open the web interface of the firewall you want to add and go to **Administration > Central Management**.
3. Paste the join code and click **Connect the firewall**.
4. After a moment the firewall appears in the **Firewall manager**. It shows as *Not registered* until it has sent its first data, then as *Connected*.

<Shots items={[{"name": "add-firewall", "caption": "The Add firewall panel with the join code."}]} />

The firewall needs outbound internet access only; no inbound port has to be opened. If the firewall does not appear, see [Troubleshooting](../help/troubleshooting.md).

Use a different join code for each firewall you add; do not share the code publicly.

## Licence

A new firewall starts with a trial period. To license it, buy a plan (NW-50, NW-250 or NW-1000) on the **Licences** page of the Partner Portal. When the plan is applied, the controller makes the firewall check in with the licence server at once, so the new licence is active without waiting for the next scheduled check-in. The firewall must be connected to the controller for this.
