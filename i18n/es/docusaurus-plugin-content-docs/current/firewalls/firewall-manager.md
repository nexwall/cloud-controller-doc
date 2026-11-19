---
title: "Gestor de firewalls"
sidebar_position: 2
description: "La lista de firewalls y qué puedes hacer con cada uno."
---

# Gestor de firewalls

El **Gestor de firewalls** muestra todos los firewalls del controlador. Usa el campo de filtro para buscar por nombre.

De cada firewall ves el nombre y el ID, la versión instalada y si está **Conectado**, **No conectado** o **No registrado**. En los firewalls conectados, los detalles muestran la hora de conexión, las direcciones virtual y real y los datos enviados y recibidos.

<Shots items={[{"name": "units", "caption": "Estado, versión y acciones de cada firewall."}]} />

## Acciones

Abre el **menú de acciones** (tres puntos) de un firewall para:

- **Abrir firewall**: abre la interfaz del propio firewall a través del controlador, en una pestaña nueva. Permite las ventanas emergentes del sitio si el navegador las bloquea.
- **Abrir métricas** y **Abrir registros**: van directamente a esas páginas del firewall.
- **Abrir terminal SSH**: consulta [Terminal remoto](ssh-terminal.md).
- **Sincronizar información del firewall**: actualiza los datos que el controlador guarda del firewall.
- **Buscar actualizaciones de paquetes** y las acciones de actualización de imagen: consulta [Actualizaciones](updates.md).
- **Quitar firewall**: el firewall sigue funcionando con normalidad, pero deja de estar gestionado por este controlador. También se quita de sus grupos.

Si el firewall tiene una versión anterior a la que espera el controlador, un aviso explica que una función reciente puede requerir abrir el firewall directamente, o que primero hay que actualizarlo.
