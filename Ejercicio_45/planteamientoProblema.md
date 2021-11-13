# Problema

Los cajeros automáticos deben proveer dinero a los usuarios de manera eficiente, sin embargo, el problema más común para un desarrollador que está iniciando es: "Cómo puedo programar un cajero automático para que entregue el dinero de manera eficiente?" Es decir, que entregue los biletes y monedas necesarias para entregar primero los billetes de denominación (valor) más alto disponible y luego comience a descender hasta entregar la totalidad del dinero.

Ejemplo: Si el usuario solicita $320, el cajero entregará tres billetes de 100 y uno de 20 (si es que tiene disponibles esos billetes). Ahora, suponiendo que no tiene billetes de 100 sino solo de 50 y 20, entregará seis billetes de 50 y uno de 20. Y en el escenario donde no tenga sino solo billetes de 10, entregará treinta y dos billetes de 10.

El cajero solo cuenta con $1.350 para entregar con las siguientes denominaciones:

• 3 billetes de 100
• 6 billetes de 50
• 10 billetes de 20
• 50 billetes de 10
• 50 monedas de 1

## Entradas

El usuario digitará el valor a retirar. Debemos tener en cuenta que no validaremos usuario+clave, solo validaremos que el cajero tiene el suficiente efectivo para entregar.

## La salida

Si no hay error de valores, la cantidad de billetes que entregará por cada denominación hasta entregar el valor solicitado.

### Ejemplo de entrada y salida

100000000 ----------> Error, no hay suficiente efectivo para entregar

170 ----------> 1 billete de 100, 1 billete de 50, 1 bilete de 20

1300 ----------> 3 billetes de 100, 6 billetes de 50, 10 billetes de 20, 50 billetes de 10

1010 ----------> 3 billetes de 100, 6 billetes de 50, 10 billetes de 20, 21 billetes de 10

360 ----------> 3 billetes de 100, 1 billete de 50, 1 billete de 10

1034 ----------> 3 billetes de 100, 6 billetes de 50, 10 billetes de 20, 23 billetes de 10, 4 monedas de 1
