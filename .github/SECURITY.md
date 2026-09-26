# Security Policy

## Supported versions

This is a storefront front-end project for More by Prinal. Only the latest version on the `main`
branch is maintained.

| Version | Supported |
|---------|:---------:|
| Latest (`main`) | Yes |
| Older commits | No |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Instead, use GitHub's private reporting:

1. Go to the [Security tab](https://github.com/stackified/morebyprinal/security).
2. Click **Report a vulnerability**.
3. Describe the issue, steps to reproduce, and potential impact.

You can expect an acknowledgement within a few days. Thank you for helping keep the project safe.

## Notes on this project

More by Prinal is a static React single-page app served from GitHub Pages. It has no backend, no
authentication, no database, no payment integration and no environment secrets. Product data is
bundled with the app, the cart is held in memory in the browser, and the contact form does not
send data anywhere. The only third-party resources are Google Fonts and outbound social links.

The security surface is therefore limited to the client-side code and its npm dependencies. The
JavaScript is scanned by CodeQL on every push and pull request to `main`.
