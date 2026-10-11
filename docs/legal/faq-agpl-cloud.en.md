> **⚠️ DRAFT pending legal review (BORRADOR pendiente de revisión legal).** Not in force or published. Not legal advice: this is a general explanation of how we understand the license. The Spanish version prevails.

# FAQ: AGPL and Xavier Cloud

**Is Xavier free?**
Yes. Xavier is released under the **GNU AGPL-3.0** license. You can download, use, modify and self-host it without paying and without an account. The **Local** plan is exactly that.

**So why pay for Xavier Cloud?**
You pay for **infrastructure and operations**, not for permission to use the software: encrypted off-device backup, restore, sync between devices, capped cloud AI and, later, hosted MCP and team spaces. If you prefer to run your own infrastructure, you can.

**Does using Xavier Cloud make my code AGPL?**
No. Backing up memory or connecting your agents to Xavier (via MCP, CLI or REST) does not make your code AGPL. The AGPL applies to Xavier's code and to modifications you make **to Xavier**. ⚖️ This is our general interpretation; if your case is complex (for example, linking Xavier as a library inside a proprietary product), ask your lawyer.

**I modified Xavier for internal use. Do I have to publish my changes?**
If only you or your organization use it internally, the AGPL does not require you to publish anything. The AGPL's special obligation (section 13) applies when you **offer a modified version of Xavier to other people over a network**: then you must offer those users the source code of your modified version.

**Can I offer Xavier as a service to my customers?**
Yes, the AGPL allows it as long as you meet its conditions: keep the license and copyright notices, and give your users access to the corresponding source code, including your modifications. If that is not acceptable for your company, the **Empresa (Enterprise)** plan includes a custom **commercial license**.

**What is the commercial license?**
A license different from the AGPL, negotiated by contract, for organizations that cannot or do not want to meet the AGPL's obligations. ⚖️ To offer it we must hold the rights to all the code, including external contributions (for example through a contributor agreement). To be defined before selling this plan.

**Is the Xavier Cloud code open too?**
[CONFIRM: license of the xavier-cloud repository.] The Xavier client, which runs on your machine and sends your backups, is AGPL-3.0 and you can audit it.

**Can the cloud read my memory?**
The cloud stores your backups **encrypted**. Today we do **not** claim end-to-end or "zero-knowledge" encryption; we will only claim it once it is independently verified. Details in the [Privacy Policy](privacy-policy.en.md).

**Is there a token or crypto-asset?**
No. Xavier Cloud is paid in US dollars through Polar, which acts as merchant of record. There is no token and no promise of returns.

**What happens to my data if I stop paying?**
Xavier keeps working on your machine on the Local plan. You can export your backups and, if you close your account, we delete them within the period stated in the Privacy Policy.
