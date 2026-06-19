# GitHub and Cloudflare Pages deployment

Canonical production URL: `https://danielshuaizhang.com`

The `www` hostname should permanently redirect to the apex domain while
preserving paths and query strings.

## 1. Publish the Git repository

Create an empty repository on GitHub named `daniel-zhang-portfolio`. Do not add
a README, `.gitignore`, or license in GitHub because those files already exist
locally.

From this project directory:

```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/daniel-zhang-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with the account that owns the repository.

## 2. Add the domain to Cloudflare

If `danielshuaizhang.com` is not already an active Cloudflare zone:

1. In Cloudflare, choose **Add a domain**.
2. Enter `danielshuaizhang.com`.
3. Select the Free plan unless you need paid features.
4. Review imported DNS records carefully, especially email-related MX, TXT,
   DKIM, SPF, and DMARC records.
5. At the domain registrar, replace the current nameservers with the two
   Cloudflare nameservers shown in the dashboard.
6. Wait until Cloudflare marks the zone **Active**.

Do not delete existing email DNS records.

## 3. Create the Pages project

1. Open **Workers & Pages**.
2. Choose **Create application → Pages → Connect to Git**.
3. Authorize GitHub and select `daniel-zhang-portfolio`.
4. Use:
   - Production branch: `main`
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
5. No environment variables are required.
6. Choose **Save and Deploy**.
7. Test the generated `*.pages.dev` URL, including a nested route such as
   `/work/steps-of-tranquility`.

## 4. Connect the apex domain

1. Open the Pages project.
2. Go to **Custom domains → Set up a domain**.
3. Enter `danielshuaizhang.com`.
4. Confirm the proposed DNS change and wait for the status to become active.

Cloudflare should create the necessary proxied DNS record when the domain is an
active zone in the same account.

## 5. Redirect `www` to the apex

Use a Cloudflare Bulk Redirect so there is one canonical hostname:

1. Open **Bulk Redirects** and create a redirect list.
2. Add:
   - Source: `www.danielshuaizhang.com`
   - Target: `https://danielshuaizhang.com`
   - Status: `301`
   - Enable **Preserve query string**
   - Enable **Subpath matching**
   - Enable **Preserve path suffix**
3. Create and enable a Bulk Redirect Rule using that list.
4. In **DNS**, add a proxied record:
   - Type: `A`
   - Name: `www`
   - IPv4 address: `192.0.2.1`
   - Proxy status: **Proxied**

This record exists only so requests reach Cloudflare and the redirect rule.

## 6. Verify

After DNS and certificates are active:

```bash
curl -I https://danielshuaizhang.com/
curl -I https://danielshuaizhang.com/work/steps-of-tranquility
curl -I https://www.danielshuaizhang.com/work/steps-of-tranquility
```

Expected results:

- The first two URLs return `200`.
- The `www` URL returns `301`.
- Its `Location` header is
  `https://danielshuaizhang.com/work/steps-of-tranquility`.
- HTTPS shows a valid Cloudflare certificate.

## Routine publishing

Cloudflare Pages rebuilds the production site after each push to `main`:

```bash
git add .
git commit -m "Describe the update"
git push
```

Pull requests receive separate preview deployments.
