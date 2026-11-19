---
title: "Users"
sidebar_position: 1
description: "Create controller users and decide what they can manage."
---

# Users

The users on this page can sign in to the controller. Only administrators can create, change or delete users.

To add a user click **Add user** and fill in the user name, display name and password. Passwords need at least 8 characters with an uppercase letter, a lowercase letter, a number and a special character.

<Shots items={[{"name": "users", "caption": "The list of controller users with their 2FA status."}]} />

- **Administrator user**: can manage every firewall and every user.
- **Firewall groups**: for other users, choose the groups they can manage. A user with no groups cannot access any firewall.
- **2FA status**: shows whether the user has two-factor authentication enabled. Each user enables it in their own [Account settings](account-settings.md).

You can edit a user (leave the password as *Unchanged* to keep it) or delete it. Customers do not need a controller user: they see their data read-only in the Partner Portal.
