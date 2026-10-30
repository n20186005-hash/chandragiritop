# Build evidence scope

The original exact baseline has a successful historical Cloudflare frozen install/build/deployment under Node24.21.0, pnpm12.4.2 and Wrangler4.133.0. Earlier authoring-network limitations are historical and are not treated as current build failures.

Current local validation uses the same runtime and exact dependencies/lock. See self-check.sh for reproducible install/check/native SSR build and generated-entry/binding/output checks. Default Wrangler dry-run/dev are additional native checks; browser and formal production release acceptance remain independent gates. No deployment is performed by the local authoring workflow.
