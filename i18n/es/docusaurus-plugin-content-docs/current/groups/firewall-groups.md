---
title: "Grupos de firewalls"
sidebar_position: 1
description: "Agrupa firewalls y limita lo que cada usuario puede gestionar."
---

# Grupos de firewalls

Los grupos permiten organizar los firewalls, por ejemplo un grupo por sede del cliente o por región.

- **Añadir grupo de firewalls**: ponle un nombre y una descripción y elige sus firewalls.
- **Edita** un grupo para añadir o quitar firewalls. Un firewall puede estar en varios grupos.
- **Elimina** un grupo: los firewalls no se quitan, solo el grupo. Un grupo usado por usuarios debe liberarse antes.

<Shots items={[{"name": "groups", "caption": "La lista de grupos de firewalls con el número de firewalls de cada uno."}]} />

Los grupos también controlan el acceso: en [Usuarios](../administration/users.md) eliges qué grupos puede gestionar cada usuario. Un usuario que no es administrador y no tiene grupos no ve ningún firewall.

Los grupos también ayudan con los [informes](../reports/executive-reports.md): puedes generar el informe de todos los firewalls de un grupo con un clic.
