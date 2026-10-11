> **⚠️ BORRADOR pendiente de revisión legal / DRAFT pending legal review.**
> Ningún documento de esta carpeta está vigente ni se ha publicado. No constituye asesoría legal.
> None of these documents is in force or published. Not legal advice.

# Documentos legales de Xavier Cloud / Xavier Cloud legal documents

| Documento | Español | English |
|---|---|---|
| Términos de servicio | [terminos-de-servicio.es.md](terminos-de-servicio.es.md) | [terms-of-service.en.md](terms-of-service.en.md) |
| Política de privacidad y tratamiento de datos (Ley 1581 de 2012) | [politica-de-privacidad.es.md](politica-de-privacidad.es.md) | [privacy-policy.en.md](privacy-policy.en.md) |
| Política de uso aceptable | [uso-aceptable.es.md](uso-aceptable.es.md) | [acceptable-use.en.md](acceptable-use.en.md) |
| Preguntas frecuentes: AGPL y nube | [faq-agpl-nube.es.md](faq-agpl-nube.es.md) | [faq-agpl-cloud.en.md](faq-agpl-cloud.en.md) |

La versión en español es la que prevalece en caso de diferencia. / The Spanish version prevails in case of any discrepancy.

## Cómo leer estos borradores

- `[CORCHETES]` = dato pendiente de completar (cédula/NIT, dirección, correo, fechas).
- ⚖️ = punto que **debe** revisar un abogado colombiano antes de publicar.
- Los planes y precios citados salen del catálogo canónico `iberi22/xavier-cloud → plans/catalog.v1.json` (versión `2026-10-08.1`). Si el catálogo cambia, actualizar aquí.

## Principios que siguen estos textos

1. **Solo afirmaciones verificables.** La nube guarda respaldos cifrados; **no** se afirma cifrado de extremo a extremo (E2EE) ni "zero-knowledge" hasta que esté verificado de forma independiente. Tampoco se afirma ninguna certificación ISO.
2. **Polar actúa como comerciante registrado (merchant of record).** Polar vende, cobra, factura y gestiona impuestos y reembolsos de las suscripciones; nosotros no recibimos datos de tarjeta.
3. **Sin token.** La oferta de Xavier Cloud no incluye ni promete ningún token o criptoactivo.
4. **Titular actual:** Brahyan Belalcázar, persona natural con RUT en Colombia (operando con la marca SWAL). Cuando exista la SAS, se actualizarán titular y textos.

## Pendientes antes de publicar (checklist)

- [ ] Revisión por abogado colombiano (protección de datos, consumidor, comercio electrónico).
- [ ] Completar `[CORCHETES]`: número de RUT/NIT, ciudad y dirección de notificaciones, correo de privacidad (el buzón debe existir).
- [ ] Confirmar regiones de Cloudflare usadas (R2/KV/Workers AI) y aceptar su DPA (sirve como contrato de transmisión ⚖️).
- [ ] Confirmar términos vigentes de Polar como merchant of record y su política de reembolsos.
- [ ] Decidir el plazo de retención de logs y de respaldos tras la cancelación.
- [ ] Publicar en el portal (`/legal/...`) y enlazar desde el pie de página y el checkout.
