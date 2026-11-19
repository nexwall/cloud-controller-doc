---
title: "Usuarios"
sidebar_position: 1
description: "Crea usuarios del controlador y decide qué pueden gestionar."
---

# Usuarios

Los usuarios de esta página pueden iniciar sesión en el controlador. Solo los administradores pueden crear, cambiar o eliminar usuarios.

Para añadir un usuario haz clic en **Añadir usuario** y rellena el nombre de usuario, el nombre para mostrar y la contraseña. Las contraseñas necesitan al menos 8 caracteres, con una mayúscula, una minúscula, un número y un carácter especial.

<Shots items={[{"name": "users", "caption": "La lista de usuarios del controlador con el estado del 2FA."}]} />

- **Usuario administrador**: puede gestionar todos los firewalls y todos los usuarios.
- **Grupos de firewalls**: para los demás usuarios, elige los grupos que pueden gestionar. Un usuario sin grupos no accede a ningún firewall.
- **Estado del 2FA**: muestra si el usuario tiene activada la autenticación en dos pasos. Cada usuario la activa en sus propios [Ajustes de la cuenta](account-settings.md).

Puedes editar un usuario (deja la contraseña como *Sin cambios* para conservarla) o eliminarlo. Los clientes no necesitan un usuario del controlador: ven sus datos en modo de solo lectura en el Portal de Socios.
