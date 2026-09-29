# Carefolio

A React + Vite website for presenting doctor portfolio and setup plans.

## Publish on GitHub Pages

1. Merge this pull request into `main`.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The included GitHub Actions workflow builds and publishes the site on each push to `main`.
4. In Namecheap, open **Domain List → Manage → Advanced DNS** and add these records if the domain uses Namecheap BasicDNS:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `kriticloud.github.io` |

   If the domain is using Namecheap hosting nameservers instead, manage the DNS records where that DNS zone is hosted. Avoid duplicate `@` records that point to other servers. Keep the existing website hosting destination in mind before replacing DNS records.

5. Wait until `e11event.me` resolves to the GitHub Pages IP addresses. Then open **Settings → Pages → Custom domain**, enter `e11event.me`, and save. Enable **Enforce HTTPS** after GitHub issues the certificate.

DNS changes and HTTPS provisioning can take some time. Until the custom domain is connected, the public site is available at https://kriticloud.github.io/Doctor_Promotional/.
