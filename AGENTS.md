# AGENTS.md

Operating notes for AI coding agents (Claude Code, Codex, Cursor, Copilot and others) working in this repository. Everything here is derived from the files actually in the tree, so trust it over guesses, and update it when the facts change.

## What this repository is

Browser-native 3D agent viewer and chat UI from three.ws: drop in a GLB, give it an LLM brain, and embed it anywhere.

- Homepage: https://nirholas.github.io/three-ui/
- Source: https://github.com/nirholas/three-ui
- Primary language: JavaScript
- License: Other (see the LICENSE file)

## Repository layout

- `agent-payments-sdk/`
- `api/`
- `assets/`
- `avatar/`
- `character-studio/`
- `chat-plugin/`
- `chat/`
- `contracts/`
- `data/`
- `docs/`
- `examples/`
- `experiments/`
- `prompts/`
- `public/`
- `README.md`
- `LICENSE`
- `CONTRIBUTING.md`
- `package.json`

Tests live in `tests/`. Add or update a test next to the code you change.

## Setup

```bash
npm install
```

## Commands

| Task | Command |
|---|---|
| dev | `npm run dev` |
| build | `npm run build` |
| test | `npm test` |
| format | `npm run format` |

Run the test and lint commands above before you consider a change finished. If a command fails on code you did not touch, say so in your report instead of silently skipping it.

## Conventions

- This is a monorepo (`workspaces` in `package.json`); run scripts from the root unless a package README says otherwise.
- `.env` files are gitignored; never commit credentials, and read configuration from environment variables.
- Commit messages follow Conventional Commits (`type(scope): summary`), matching the existing history.
- Read `CONTRIBUTING.md` before opening a pull request.
- Read the surrounding code before adding to it, and match its naming, file organisation and error-handling style.
- Keep `README.md` accurate: if a change alters behaviour, commands or configuration, update the docs in the same commit.
- Do not leave TODO comments, stub functions, placeholder data or commented-out code behind. Finish what you start or leave it out.
- Small, focused commits with a subject line that describes the change, not the act of committing.

## Where to raise things

- Bugs and feature requests: https://github.com/nirholas/three-ui/issues
- Questions and ideas: https://github.com/nirholas/three-ui/discussions
- Security issues: report privately at https://github.com/nirholas/three-ui/security/advisories/new, never in a public issue.
