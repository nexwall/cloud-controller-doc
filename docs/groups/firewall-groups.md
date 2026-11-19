---
title: "Firewall groups"
sidebar_position: 1
description: "Group firewalls and limit what each user can manage."
---

# Firewall groups

Groups let you organize firewalls, for example one group per customer site or per region.

- **Add firewall group**: give it a name and a description and choose its firewalls.
- **Edit** a group to add or remove firewalls. A firewall can be in several groups.
- **Delete** a group: the firewalls are not removed, only the group. A group that is used by users must be released first.

<Shots items={[{"name": "groups", "caption": "The list of firewall groups with the number of firewalls in each."}]} />

Groups also control access: in [Users](../administration/users.md) you choose which groups each user can manage. A user who is not an administrator and has no group sees no firewall at all.

Groups are also handy for [reports](../reports/executive-reports.md): you can generate the report of every firewall in a group with one click.
