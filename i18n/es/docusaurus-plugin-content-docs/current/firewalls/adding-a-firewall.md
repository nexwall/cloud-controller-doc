---
title: "Añadir un firewall"
sidebar_position: 1
description: "Conecta un firewall al controlador con un código de unión."
---

# Añadir un firewall

Un firewall se une al controlador con un **código de unión**.

1. En el controlador, abre el **Gestor de firewalls**, haz clic en **Añadir firewall** y copia el código de unión.
2. Abre la interfaz web del firewall que quieres añadir y ve a **Administración > Gestión central**.
3. Pega el código de unión y haz clic en **Conectar el firewall**.
4. En unos instantes el firewall aparece en el **Gestor de firewalls**. Figura como *No registrado* hasta que envía sus primeros datos y después como *Conectado*.

<Shots items={[{"name": "add-firewall", "caption": "El panel Añadir firewall con el código de unión."}]} />

El firewall solo necesita acceso saliente a internet; no hay que abrir ningún puerto de entrada. Si el firewall no aparece, consulta [Solución de problemas](../help/troubleshooting.md).

Usa un código de unión distinto para cada firewall y no lo difundas públicamente.

## Licencia

Un firewall nuevo comienza con un período de prueba. Para licenciarlo, compre un plan (NW-50, NW-250 o NW-1000) en la página **Licencias** del Portal de Socios. Cuando el plan se aplica, el controlador hace que el firewall verifique de inmediato con el servidor de licencias, y la nueva licencia queda activa sin esperar la siguiente verificación programada. Para ello el firewall debe estar conectado al controlador.
