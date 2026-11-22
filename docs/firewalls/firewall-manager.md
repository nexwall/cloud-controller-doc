---
title: "Firewall manager"
sidebar_position: 2
description: "The list of firewalls and what you can do with each."
---

# Firewall manager

The **Firewall manager** lists every firewall of the controller. Use the **Filter firewalls** box to search by name or by serial number.

For each firewall you see its name and ID, its **serial number**, the installed version, and whether it is **Connected**, **Not connected** or **Not registered**. For connected firewalls the details show the connection time, the virtual and real addresses and the data sent and received.

<Shots items={[{"name": "units", "caption": "Status, version and actions of each firewall."}]} />

## Actions

The **Open firewall** button opens the firewall's own interface through the controller, in a new tab (metrics and logs are in that interface). Allow pop-ups for the site if your browser blocks it.

Open the **actions menu** (three dots) of a firewall to:

- **Open SSH terminal**: see [Remote terminal](ssh-terminal.md).
- **Sync firewall info**: refresh the data the controller keeps about the firewall.
- **Check packages updates** and the image update actions: see [Updates](updates.md).
- **Remove firewall**: the firewall keeps working normally but is no longer managed by this controller. It is also removed from its groups.

If the firewall runs an older version than the controller expects, a warning explains that a recent feature may need you to open the firewall directly, or that the firewall must be updated first.
