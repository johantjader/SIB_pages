---
title: "Automate Content Sync on Push to Private Repo"
area: "ci-cd"
status: "todo"
priority: "high"
created: "2026-02-22"
---

# Automate Content Sync on Push to Private Repo

Currently, the `sync-content.yml` workflow in the `SIB_pages` repository must be triggered manually or runs on a daily schedule.

**Objective**: Configure a GitHub Action in the private `SIB-normativa-artefakter-sandbox` repository that triggers the `sync-content.yml` workflow in the `SIB_pages` repository whenever a push occurs on the `main` branch.

**Key Tasks**:
- [ ] Create a "Repository Dispatch" or "Workflow Dispatch" call from the sandbox repository.
- [ ] Update `sync-content.yml` to trigger on `repository_dispatch`.
- [ ] Ensure the `PAT_TOKEN` is used for the cross-repo communication.

**Desired Outcome**: Pushing an artifact to the sandbox immediately triggers a sync and rebuild of the public portal.
