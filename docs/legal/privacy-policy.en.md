> **⚠️ DRAFT pending legal review (BORRADOR pendiente de revisión legal).** Not in force or published. Not legal advice.
> Items marked ⚖️ must be reviewed by a Colombian lawyer. The Spanish version prevails.

# Xavier Cloud Privacy and Personal Data Processing Policy

**Version:** draft 0.1 · **Date:** [PUBLICATION DATE]

This policy complies with Colombia's **Statutory Law 1581 of 2012** (habeas data) and **Decree 1074 of 2015** (which compiles Decree 1377 of 2013).

## 1. Data controller

- **Name:** Brahyan Belalcázar, individual (SWAL brand)
- **ID:** [ID / RUT TAX NUMBER]
- **Address:** [ADDRESS], [CITY], Colombia
- **Email for personal data matters:** [privacy@... — the mailbox must exist before publishing]

## 2. Two different roles: controller and processor

| Data | Our role | What it means |
|---|---|---|
| **Account and business data**: email, name (if given), customer ID, plan, subscription status, country, technical logs (IP, usage dates, errors), support messages | **Controller (responsable)** | We decide why and how it is processed, as set out here. |
| **Content you back up**: your agents' memory, files, notes and any data they contain | **Processor (encargado)** | We process it only to provide the Service and on your instructions. If the Content includes third parties' personal data, **you** are the controller and must have a legal basis for it. |

If you use Xavier for yourself, the Content is usually yours and the rights in section 7 apply to you as well.

## 3. What we process and why

| Purpose | Data | Basis |
|---|---|---|
| Create and manage your account and API key | Email, customer ID, key hash | Consent and performance of contract |
| Provide backup, restore and sync | Content (stored encrypted), technical metadata (size, dates, device) | Performance of contract |
| Cloud AI (if you use it) | Fragments of Content your node sends to generate embeddings or answers | Performance of contract |
| Enforce plan limits and prevent abuse | Usage counters, IP, error logs | Legitimate interest / performance of contract ⚖️ |
| Activate and keep your paid plan | Data Polar sends us: email, plan, status, country | Performance of contract |
| Support and Service notices | Email and messages you send | Consent |
| News or waitlist | Email | Express consent, revocable at any time |
| Legal obligations | Whatever the law or a competent authority requires | Legal obligation |

We do **not** sell your data, do **not** use it for third-party advertising and do **not** use your Content to train models. We do not knowingly process data of minors under 18. We do not ask for sensitive data; if you include it in your Content you do so at your own responsibility and answering is optional.

## 4. Security

- Content is stored **encrypted** in cloud storage and travels over encrypted connections (TLS).
- API keys are stored as hashes, not plain text.
- We do **not** currently claim end-to-end or "zero-knowledge" encryption: under the current technical design we cannot guarantee that nobody with access to the infrastructure could read the Content. If this changes, it will be independently verified and this policy updated.
- We do **not** hold ISO or other security certifications.
- If an incident affects your data we will notify you without undue delay and report it to the Superintendence of Industry and Commerce (SIC) where required. ⚖️

## 5. Providers (processors) and international transfer

| Provider | Purpose | Where | Role |
|---|---|---|---|
| **Cloudflare, Inc.** | Hosting: Workers (compute), R2 (backups), KV (accounts, keys and limits), Workers AI (cloud AI) | Global network; headquartered in the US ⚖️ confirm regions | Processor |
| **Polar Software, Inc.** | Sale, charging, invoicing, taxes and refunds as **merchant of record**; processes payments with Stripe | US | Independent controller of payment and billing data; processor for data it shares with us ⚖️ |
| [Email provider, if any] | Sending Service emails | [COUNTRY] | Processor |

**International transfer and transmission.** Using these providers means your data is stored and processed outside Colombia, mainly in the United States.
- With **processors** (such as Cloudflare) this is an international **transmission**, backed by a data transmission contract (article 2.2.2.25.5.2 of Decree 1074 of 2015). We rely on the provider's data processing agreement (DPA). ⚖️ Verify the DPA meets the minimum contents.
- The United States is listed among countries with an adequate level of protection in SIC External Circular 005 of 2017. ⚖️ Confirm it is still current.
- By accepting this policy you **expressly authorize** this international transfer and transmission (article 26 of Law 1581 of 2012).
- Cloudflare states that it does not use Workers AI data to train models. ⚖️ Confirm in its current terms.

## 6. Retention, export and deletion

- **While your account is active** we keep your account data and your Content.
- **Export:** you can download or restore your backups at any time with the Xavier client. Until full self-service export exists, you can request a copy by writing to the privacy email; we deliver it within **15 business days**.
- **Deletion:** you can request deletion of your Content or account at any time. We delete backups within **[30] days** of account closure or request. Technical logs are kept for at most [90] days.
- **Exceptions:** billing data is kept by Polar as merchant of record, and we keep the minimum required by tax and commercial rules. ⚖️ Define periods.

## 7. Your rights as data subject

Under article 8 of Law 1581 of 2012 you may:

1. Know, update and correct your data.
2. Request proof of the authorization you gave us.
3. Be informed about how we use your data.
4. File complaints with the **Superintendence of Industry and Commerce** after completing the process with us.
5. Revoke your authorization and request deletion when there is no legal or contractual duty to keep the data.
6. Access your data free of charge.

## 8. How to exercise them (queries and claims)

Write to [PRIVACY EMAIL] with your name, your account email, what you request and, for a claim, the facts and any documents.

- **Queries:** we answer within **10 business days**, extendable by up to 5 more business days with notice of the reason.
- **Claims** (correction, update, deletion or breach): we answer within **15 business days**, extendable by up to 8 more business days with notice of the reason. If the claim is incomplete we will ask you to complete it within 5 days; if you do not within 2 months, it is deemed withdrawn.

For **Content** (where we act as processor), if a third party writes to exercise their rights, we will refer them to the responsible customer and cooperate with that customer.

## 9. Cookies

The informational portal does not use advertising cookies. [Complete if analytics are added.]

## 10. Changes

We will announce material changes by email or on the portal before they take effect. This policy applies from [DATE] and the database is kept for as long as its purpose lasts.

⚖️ **National Database Registry (RNBD):** only mandatory for controllers with total assets above 100,000 UVT; it does not apply today, but review it yearly.
