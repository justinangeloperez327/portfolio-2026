# Technical SEO

## Canonical URLs

Every primary indexable route declares its canonical path. Dynamic project pages derive their canonical URL from the canonical project slug. The deployment origin remains centralized in `siteConfig.url`.

## Structured data

The homepage emits a JSON-LD `Person` entity using public portfolio facts: name, professional role, canonical URL, GitHub profile, location, and broad engineering topics. Structured data must remain consistent with visible content and must not contain inferred credentials or fabricated history.

## Project metadata

Each case study emits route-specific title, description, canonical URL, Open Graph article metadata, and Twitter/X card metadata.

## Crawl architecture

Important content is server-rendered and reachable through ordinary links. The sitemap uses the same project registry as the application so discovery does not drift from real routes.

## Social images

The metadata contracts are ready for social images. A generic image is intentionally deferred until a deliberate portfolio-specific Open Graph asset is produced.

## Production verification

1. Set the final `NEXT_PUBLIC_SITE_URL`.
2. Inspect canonical tags on every route.
3. Validate JSON-LD.
4. Verify `robots.txt` and `sitemap.xml`.
5. Confirm unknown project slugs return 404.
6. Test social previews after the final Open Graph image is available.
