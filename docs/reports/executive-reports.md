---
title: "Executive reports"
sidebar_position: 1
description: "Generate and download PDF reports of your firewalls."
---

# Executive reports

The **Reports** page builds an executive PDF report for each firewall from the firewall's own data. It is the same report as the *Threat Analytics* executive report on the firewall.

## Generate reports

1. Select the firewalls, or click **Add group** to select every firewall of a group. Offline firewalls are shown as *offline* and are skipped.
2. Choose the period in days.
3. Choose whether to **show device names and addresses**. With it off, devices appear as *Device 1, Device 2...* so the report can be shared safely; with it on, real names and addresses appear.
4. Click **Generate**. Keep the page open until it finishes.

<Shots items={[{"name": "reports", "caption": "Select firewalls, choose the period and generate the reports."}]} />

Each firewall goes through *Waiting*, *Generating (try n of max)* and, if needed, *Retrying*. The summary shows how many are done, failed or offline.

## Saved reports

Finished reports are stored in the controller and listed under **Saved reports** with the firewall and the date. You can **download** or delete them at any time.

Customers can also receive a monthly value report from the Partner Portal; see the Partner Portal documentation.
