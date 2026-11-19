---
title: "Informes ejecutivos"
sidebar_position: 1
description: "Genera y descarga informes en PDF de tus firewalls."
---

# Informes ejecutivos

La página **Informes** crea un informe ejecutivo en PDF de cada firewall a partir de los datos del propio firewall. Es el mismo informe ejecutivo de *Threat Analytics* del firewall.

## Generar informes

1. Selecciona los firewalls o haz clic en **Añadir grupo** para seleccionar todos los firewalls de un grupo. Los firewalls sin conexión aparecen como *sin conexión* y se omiten.
2. Elige el periodo en días.
3. Elige si **mostrar nombres y direcciones de los dispositivos**. Desactivado, los dispositivos aparecen como *Dispositivo 1, Dispositivo 2...* y el informe se puede compartir con seguridad; activado, aparecen los nombres y direcciones reales.
4. Haz clic en **Generar**. Mantén la página abierta hasta que termine.

<Shots items={[{"name": "reports", "caption": "Selecciona los firewalls, elige el periodo y genera los informes."}]} />

Cada firewall pasa por *En espera*, *Generando (intento n de máx.)* y, si hace falta, *Reintentando*. El resumen muestra cuántos han terminado, han fallado o están sin conexión.

## Informes guardados

Los informes terminados se guardan en el controlador y se listan en **Informes guardados** con el firewall y la fecha. Puedes **descargarlos** o eliminarlos cuando quieras.

Los clientes también pueden recibir un informe mensual de valor desde el Portal de Socios; consulta la documentación del Portal de Socios.
