# Build verification status

The project source and configuration have been prepared for the requested Astro / Tailwind / TypeScript / Cloudflare Workers stack.

## Required clean-environment command

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Current execution environment limitation

The supplied execution container cannot establish an outbound HTTPS connection to `registry.npmjs.org`, so Corepack cannot download pnpm and dependencies cannot be installed here. Because of that network-level limitation, the three required package-manager/build commands could not be truthfully reported as passed in this environment.

The included `pnpm-lock.yaml` records the exact direct dependency versions but could not be regenerated/validated against the registry in this blocked environment. Before production deployment, regenerate the lockfile once in a normal networked environment and rerun `./self-check.sh`; commit the resulting full lockfile.

This note is included to avoid presenting an unexecuted CI check as successful.
