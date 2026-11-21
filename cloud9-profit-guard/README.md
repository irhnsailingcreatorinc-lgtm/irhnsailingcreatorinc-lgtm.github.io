# Cloud 9 Profit Guard — Standalone Preview

**Product owner:** IRHN Sailing Creator LLC  
**Status:** isolated review branch; not a live paid service.

Open `index.html` in a browser, or serve the directory with any HTTPS-capable static host. All calculations run locally in the visitor's browser. The browser can retain up to 250 manually entered product comparisons; export data to CSV to back it up. No supplier APIs, Shopify credentials, tracking pixels, external scripts, or payment charges are used.

## Verification
Run `node --test cloud9-profit-guard/pricing.test.cjs` from the repository root with Node.js 22 or newer. Check the interface at 360px, 412px and desktop widths before merging or deploying.

## Pricing conventions
Revenue = retail price - discount + shipping charged to the customer. Processing fees are computed on that amount. Contribution profit = revenue - production cost - supplier shipping - other costs - processing fees. A suggested retail price is calculated from the target contribution margin. This does not account for platform fees, tax, refunds, chargebacks or unentered expenses.

## Security and release boundaries
This is a **static preview only**. Do not put private merchant data into a public/shared browser. No production customer registration, Stripe billing, supplier API token storage, or automatic Shopify editing is implemented. The richer v0.5 local server package is separate and requires staging/security verification before publishing. GitHub repository is public; never commit secrets.

## Release checklist
- [ ] Run all tests and manually review responsive layout and calculation accuracy
- [ ] Confirm owner approval for a public static preview and its URL
- [ ] Add privacy policy, terms and seller support contact before public marketing
- [ ] Use a dedicated repository for the future multi-user SaaS backend
- [ ] Keep NIKOLAI, production domains and live Shopify listings unchanged
