# Carefolio

A React + Vite website for presenting doctor portfolio and setup plans.

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The included GitHub Actions workflow builds the site and publishes it on each push to `main`.
4. In **Settings → Pages → Custom domain**, enter `e11event.me`. The `public/CNAME` file is included in the published site.
5. In Namecheap, open **Domain List → Manage → Advanced DNS** and add these records if the domain uses Namecheap BasicDNS:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `kriti-stack.github.io` |

   If the domain is using Namecheap hosting nameservers instead, manage the DNS records where that DNS zone is hosted. Avoid duplicate `@` records that point to other servers.

DNS changes and HTTPS provisioning can take some time. Once the workflow succeeds and GitHub Pages finishes enabling HTTPS, the website should load at `https://e11event.me`.
