---
title: "Support and Support Packets"
sidebar_position: 1
description: "Tickets and Support Packets for your firewalls."
---

# Support and Support Packets

**Support** has two tabs. Both use the same tickets, so the conversation is the same everywhere, including in the Partner Portal.

## Tickets

Open a ticket for a firewall with **New ticket**, follow the conversation and answer it. You can paste screenshots or attach images, PDF, ZIP, GZ and text files (up to 10 MB each). Use **Mark as resolved** when the problem is solved and **Reopen** if it comes back.

## Tier 2: CLI troubleshooting

Use this tab when support asks you to look inside a firewall. It has three panels:

1. **Select a Support Packet**: the list of diagnostics, grouped by subject. Click one to select it.
2. **The packet**: what it is for, what it runs, how long it may run and how much output it returns. Fill in the inputs it asks for (for example a host, a name or a port).
3. **Conversation**: the ticket history, with the same paste and attach options.

To run a packet:

1. Choose the **firewall** of the ticket.
2. Select the **Support Packet** and read its description.
3. Fill in the inputs.
4. Tick **I read the description of this Support Packet and authorize running it on the selected firewall**. **Run** is enabled only after this.
5. Click **Run**. While it runs, reproduce the problem if the packet asks for it.
6. When it ends, review the result. Use **Download (.zip)** to keep a copy and **Send result to the ticket** so support can read it.

Support Packets only read the state of the firewall; they do not change its configuration. Passwords, keys and tokens are removed from the output before you see it, and the screen shows how many secrets were hidden. Results are kept for a limited time.

The complete list of Support Packets, with their inputs, is at https://support.nexwall.com.br/en/#packets (the same list is linked from the screen).

## If a packet cannot run

- The firewall must be **online** and registered in this controller.
- The firewall firmware must include Support Packets. On older firmware the screen says that this firewall version does not support remote diagnostics; update the firewall (see **Updates**) and try again.
- If the packet reports missing inputs, fill in the fields shown in the message.
