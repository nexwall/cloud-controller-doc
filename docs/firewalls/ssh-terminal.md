---
title: "Remote terminal"
sidebar_position: 4
description: "Open an SSH terminal on a firewall from your browser."
---

# Remote terminal

You can open a command-line terminal on any connected firewall from the controller, in a new browser window.

1. In the **Firewall manager**, open the actions menu of the firewall and choose **Open SSH terminal**.
2. The controller signs in to the firewall for you with a **managed key**: no firewall password is needed.
3. To leave the terminal, close the window.

<Shots items={[{"name": "terminal", "caption": "The remote terminal of a firewall."}]} />

If direct access is not possible, the dialog asks for the firewall user name and password, or for your own key passphrase (**Use the firewall password instead**).

## SSH key

The controller manages the SSH key itself: a key pair is generated automatically and the public key is installed on every firewall you connect, so there is nothing to generate or send.

If the browser blocks the terminal window, allow pop-ups for the controller site.
