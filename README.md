# Caso de Prueba: TC002 - Validación del Formulario de Registro

## Descripción
Verificar que el formulario de registro funcione correctamente con diferentes entradas.

## Precondiciones
El usuario debe estar en la página de registro del sistema.

## Datos de Entrada
- **Nombre:** Juan
- **Apellido:** Pérez
- **Email:** juan.perez@example.com
- **Edad:** 30

## Pasos para Ejecutar
1. Introducir `Juan` en el campo de nombre.
2. Introducir `Pérez` en el campo de apellido.
3. Introducir `juan.perez@example.com` en el campo de email.
4. Introducir `30` en el campo de edad.
5. Hacer clic en el botón "Registrar".

## Resultados Esperados
El usuario debe ser registrado exitosamente y debe aparecer un mensaje de confirmación: "Registro completado exitosamente".

## Post-condiciones
El sistema debe permitir nuevos intentos de registro y mantener la integridad de los datos.
