---
title: "Clarify Artifact Versioning Process in Docusaurus"
area: "documentation"
status: "todo"
priority: "medium"
created: "2026-02-22"
---

# Clarify Artifact Versioning Process in Docusaurus

There is a need to better understand and document how Docusaurus handles new versions of artifacts pulled from the sandbox.

**Objective**: Research and document the workflow for updating an existing artifact vs. creating a new version in Docusaurus.

**Key Questions**:
- [ ] If an artifact is updated in the sandbox, does it automatically update the 'Next' version in `SIB_pages`? (Answer: Yes, via sync).
- [ ] How is a new official version (e.g., `v1.1.0`) of an artifact created? (Answer: `npm run docusaurus docs:version v1.1.0`).
- [ ] If a new version of an artifact is uploaded to the sandbox, does Docusaurus need to be told to snapshot it, or does it stay in the 'Next' track?

**Desired Outcome**: A clear guide for the user on how to manage the lifecycle of an artifact from sandbox to a frozen Docusaurus version.
