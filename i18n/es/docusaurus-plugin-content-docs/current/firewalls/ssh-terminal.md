---
title: "Terminal remoto"
sidebar_position: 4
description: "Abre un terminal SSH en un firewall desde el navegador."
---

# Terminal remoto

Puedes abrir un terminal de línea de comandos en cualquier firewall conectado desde el controlador, en una ventana nueva del navegador.

1. En el **Gestor de firewalls**, abre el menú de acciones del firewall y elige **Abrir terminal SSH**.
2. El controlador inicia sesión en el firewall por ti con una **clave gestionada**: no hace falta la contraseña del firewall.
3. Para salir del terminal, cierra la ventana.

<Shots items={[{"name": "terminal", "caption": "El terminal remoto de un firewall."}]} />

Si no es posible el acceso directo, el diálogo pide el usuario y la contraseña del firewall, o la frase de contraseña de tu propia clave (**Usar la contraseña del firewall**).

## Clave SSH

El controlador gestiona la clave SSH por sí mismo: se genera automáticamente un par de claves y la clave pública se instala en cada firewall que conectas, así que no hay nada que generar ni enviar.

Si el navegador bloquea la ventana del terminal, permite las ventanas emergentes del sitio del controlador.
