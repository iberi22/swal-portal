> **⚠️ BORRADOR pendiente de revisión legal.** No vigente ni publicado. No constituye asesoría legal.
> Los puntos marcados con ⚖️ requieren revisión de un abogado colombiano.

# Política de privacidad y tratamiento de datos personales de Xavier Cloud

**Versión:** borrador 0.1 · **Fecha:** [FECHA DE PUBLICACIÓN]

Esta política cumple la **Ley Estatutaria 1581 de 2012** (habeas data) y el **Decreto 1074 de 2015** (que compila el Decreto 1377 de 2013) de la República de Colombia.

## 1. Responsable del tratamiento

- **Nombre:** Brahyan Belalcázar, persona natural (marca SWAL)
- **Identificación:** [CÉDULA / NIT DEL RUT]
- **Domicilio y dirección:** [DIRECCIÓN], [CIUDAD], Colombia
- **Correo para asuntos de datos personales:** [privacidad@... — el buzón debe existir antes de publicar]

## 2. Dos papeles distintos: responsable y encargado

| Datos | Nuestro papel | Qué significa |
|---|---|---|
| **Datos de cuenta y relación comercial**: correo, nombre (si lo das), identificador de cliente, plan, estado de la suscripción, país, registros técnicos (IP, fecha de uso, errores), comunicaciones de soporte | **Responsable** | Decidimos para qué y cómo se tratan, según esta política. |
| **Contenido que respaldas**: memoria de tus agentes, archivos, notas y cualquier dato que contengan | **Encargado** | Lo tratamos solo para prestarte el Servicio y según tus instrucciones. Si el Contenido incluye datos personales de terceros, **tú** eres el responsable de tenerlos con base legal. |

Si eres una persona que usa Xavier para sí misma, el Contenido suele ser tuyo y te aplican igualmente los derechos de la sección 7.

## 3. Qué datos tratamos y para qué

| Finalidad | Datos | Base |
|---|---|---|
| Crear y administrar tu cuenta y tu clave de API | Correo, identificador de cliente, hash de la clave | Autorización y ejecución del contrato |
| Prestar respaldo, restauración y sincronización | Contenido (guardado cifrado), metadatos técnicos (tamaño, fechas, equipo) | Ejecución del contrato |
| IA en la nube (si la usas) | Fragmentos del Contenido que tu nodo envía para generar embeddings o respuestas | Ejecución del contrato |
| Aplicar límites del plan y prevenir abuso | Contadores de uso, IP, registros de errores | Interés legítimo / ejecución del contrato ⚖️ |
| Activar y mantener tu plan pagado | Datos que nos envía Polar: correo, plan, estado, país | Ejecución del contrato |
| Soporte y avisos del Servicio | Correo y mensajes que nos envíes | Autorización |
| Novedades o lista de espera | Correo | Autorización expresa, revocable en cualquier momento |
| Cumplir obligaciones legales | Lo que exija la ley o una autoridad competente | Obligación legal |

**No** vendemos tus datos, **no** los usamos para publicidad de terceros y **no** usamos tu Contenido para entrenar modelos. No tratamos a sabiendas datos de menores de 18 años. No pedimos datos sensibles; si decides incluirlos en tu Contenido, lo haces bajo tu responsabilidad y su respuesta es facultativa.

## 4. Seguridad

- El Contenido se guarda **cifrado** en el almacenamiento de la nube y viaja por conexiones cifradas (TLS).
- Las claves de API se guardan como hash, no en texto plano.
- **No afirmamos** hoy cifrado de extremo a extremo ni "zero-knowledge": por diseño técnico actual, no podemos garantizar que nadie con acceso a la infraestructura pueda leer el Contenido. Si esto cambia, se verificará de forma independiente y se actualizará esta política.
- **No** contamos con certificaciones ISO u otras certificaciones de seguridad.
- Si ocurre un incidente que afecte tus datos, te avisaremos sin demora indebida y lo reportaremos a la Superintendencia de Industria y Comercio (SIC) cuando corresponda. ⚖️

## 5. Proveedores (encargados) y transferencia internacional

Usamos estos proveedores, que tratan datos por cuenta nuestra o en su propio rol:

| Proveedor | Para qué | Dónde | Papel |
|---|---|---|---|
| **Cloudflare, Inc.** | Alojamiento del Servicio: Workers (cómputo), R2 (respaldos), KV (cuentas, claves y límites), Workers AI (IA en la nube) | Red global; sede en EE. UU. ⚖️ confirmar regiones | Encargado |
| **Polar Software, Inc.** | Venta, cobro, facturación, impuestos y reembolsos como **comerciante registrado (merchant of record)**; procesa los pagos con Stripe | EE. UU. | Responsable independiente de los datos de pago y facturación; encargado respecto de los datos que nos comparte ⚖️ |
| [Proveedor de correo, si aplica] | Envío de correos del Servicio | [PAÍS] | Encargado |

**Transferencia y transmisión internacional.** Usar estos proveedores implica que tus datos se almacenan y procesan fuera de Colombia, principalmente en Estados Unidos.
- Con los **encargados** (como Cloudflare) se trata de una **transmisión** internacional, respaldada por un contrato de transmisión de datos (artículo 2.2.2.25.5.2 del Decreto 1074 de 2015). Para ello usamos el acuerdo de tratamiento de datos (DPA) del proveedor. ⚖️ Verificar que el DPA cumple los contenidos mínimos.
- Estados Unidos figura entre los países con nivel adecuado de protección según la Circular Externa 005 de 2017 de la SIC. ⚖️ Confirmar vigencia.
- Al aceptar esta política **autorizas expresamente** esta transferencia y transmisión internacional (artículo 26 de la Ley 1581 de 2012).
- Cloudflare declara que no usa los datos de Workers AI para entrenar modelos. ⚖️ Confirmar en sus términos vigentes.

## 6. Conservación, exportación y eliminación

- **Mientras tu cuenta esté activa** conservamos tus datos de cuenta y tu Contenido.
- **Exportación:** puedes descargar o restaurar tus respaldos en cualquier momento con el cliente de Xavier. Hasta que exista exportación de autoservicio completa, puedes pedir una copia escribiendo al correo de privacidad; la entregamos en un plazo máximo de **15 días hábiles**.
- **Eliminación:** puedes pedir el borrado de tu Contenido o de tu cuenta en cualquier momento. Borramos los respaldos dentro de los **[30] días** siguientes al cierre de la cuenta o a la solicitud. Los registros técnicos se conservan como máximo [90] días.
- **Excepciones:** los datos de facturación los conserva Polar como comerciante registrado, y nosotros conservamos lo mínimo que exijan las normas tributarias y comerciales. ⚖️ Definir plazos.

## 7. Tus derechos como titular

Conforme al artículo 8 de la Ley 1581 de 2012 puedes:

1. Conocer, actualizar y rectificar tus datos.
2. Pedir prueba de la autorización que nos diste.
3. Ser informado sobre el uso que damos a tus datos.
4. Presentar quejas ante la **Superintendencia de Industria y Comercio** después de haber agotado el trámite con nosotros.
5. Revocar la autorización y pedir la supresión de tus datos cuando no exista un deber legal o contractual de conservarlos.
6. Acceder gratis a tus datos.

## 8. Cómo ejercerlos (consultas y reclamos)

Escribe a [CORREO DE PRIVACIDAD] indicando tu nombre, el correo de tu cuenta, lo que pides y, si es un reclamo, los hechos y documentos que quieras aportar.

- **Consultas:** respondemos en máximo **10 días hábiles**, prorrogables hasta 5 días hábiles más avisándote el motivo.
- **Reclamos** (corrección, actualización, supresión o incumplimiento): respondemos en máximo **15 días hábiles**, prorrogables hasta 8 días hábiles más avisándote el motivo. Si el reclamo está incompleto te pediremos completarlo dentro de los 5 días siguientes; si no lo haces en 2 meses, se entenderá desistido.

Para el **Contenido** (donde actuamos como encargado), si un tercero nos escribe para ejercer sus derechos, lo remitiremos al cliente responsable y colaboraremos con él.

## 9. Cookies

El portal informativo no usa cookies de publicidad. [Completar si se agregan analíticas.]

## 10. Cambios

Avisaremos de cambios sustanciales por correo o en el portal antes de que entren en vigor. Esta política rige desde [FECHA] y la base de datos se conserva mientras dure la finalidad.

⚖️ **Registro Nacional de Bases de Datos (RNBD):** solo es obligatorio para responsables con activos totales superiores a 100.000 UVT; hoy no aplica, pero revisarlo cada año.
