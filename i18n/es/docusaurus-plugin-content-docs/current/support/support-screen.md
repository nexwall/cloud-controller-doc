---
title: "Soporte y Support Packets"
sidebar_position: 1
description: "Tickets y Support Packets de tus firewalls."
---

# Soporte y Support Packets

**Soporte** tiene dos pestañas. Ambas usan los mismos tickets, así que la conversación es la misma en todas partes, también en el Portal de Socios.

## Tickets

Abre un ticket para un firewall con **Nuevo ticket**, sigue la conversación y responde. Puedes pegar capturas de pantalla o adjuntar imágenes, PDF, ZIP, GZ y archivos de texto (hasta 10 MB cada uno). Usa **Marcar como resuelto** cuando se resuelva el problema y **Reabrir** si vuelve.

## Nivel 2: diagnóstico por CLI

Usa esta pestaña cuando soporte te pida mirar dentro de un firewall. Tiene tres paneles:

1. **Seleccione un Support Packet**: la lista de diagnósticos, agrupados por tema. Haz clic en uno para seleccionarlo.
2. **El packet**: para qué sirve, qué ejecuta, cuánto tiempo puede correr y cuánta salida devuelve. Completa los campos que pide (por ejemplo un host, un nombre o un puerto).
3. **Conversación**: el historial del ticket, con las mismas opciones de pegar y adjuntar.

Para ejecutar un packet:

1. Elige el **firewall** del ticket.
2. Selecciona el **Support Packet** y lee su descripción.
3. Completa los campos.
4. Marca **He leído la descripción de este Support Packet y autorizo su ejecución en el firewall seleccionado**. **Ejecutar** solo se habilita después.
5. Haz clic en **Ejecutar**. Mientras corre, reproduce el problema si el packet lo pide.
6. Al terminar, revisa el resultado. Usa **Descargar (.zip)** para guardar una copia y **Enviar resultado al ticket** para que soporte pueda leerlo.

Los Support Packets solo leen el estado del firewall; no cambian la configuración. Las contraseñas, claves y tokens se eliminan de la salida antes de que la veas, y la pantalla muestra cuántos secretos se ocultaron. Los resultados se conservan por un tiempo limitado.

La lista completa de Support Packets, con sus campos, está en https://support.nexwall.com.br/es/#packets (la misma lista tiene enlace en la pantalla).

## Si un packet no se ejecuta

- El firewall debe estar **en línea** y registrado en este controlador.
- El firmware del firewall debe incluir los Support Packets. En firmware más antiguo la pantalla indica que esta versión del firewall no admite diagnóstico remoto; actualiza el firewall (ver **Actualizaciones**) e inténtalo de nuevo.
- Si el packet informa campos faltantes, completa los campos indicados en el mensaje.
