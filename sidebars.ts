import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const category = (label: string, items: string[]) => ({ type: 'category' as const, label, collapsed: false, items })

const sidebars: SidebarsConfig = {
  manual: [
    category("Getting started", ["getting-started/overview", "getting-started/signing-in"]),
    category("Firewalls", ["firewalls/adding-a-firewall", "firewalls/firewall-manager", "firewalls/updates", "firewalls/ssh-terminal"]),
    category("Groups", ["groups/firewall-groups"]),
    category("Reports", ["reports/executive-reports"]),
    category("Administration", ["administration/users", "administration/account-settings"]),
    category("Support", ["support/support-screen"]),
    category("Help", ["help/troubleshooting"])
  ]
}

export default sidebars
