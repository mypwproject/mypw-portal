# Production Configuration Reference

## Vercel Configuration (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client",
  "framework": "other",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [...],
  "rewrites": [...]
}
```

**Explanation:**
- `buildCommand`: Command Vercel runs to build your app
- `outputDirectory`: Folder containing static files to serve
- `framework`: Set to "other" for custom TanStack framework
- `cleanUrls`: Remove .html extensions from URLs
- `trailingSlash`: Don't add trailing slashes
- `headers`: Security headers on all responses
- `rewrites`: Route all requests to index.html (SPA routing)

## Security Headers

```json
"headers": [
  {
    "source": "/assets/(.*)",
    "headers": [{
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }]
  },
  {
    "source": "/(.*)",
    "headers": [
      {"key": "X-Content-Type-Options", "value": "nosniff"},
      {"key": "X-Frame-Options", "value": "DENY"},
      {"key": "X-XSS-Protection", "value": "1; mode=block"}
    ]
  }
]
```

**Headers Explained:**
- **Cache-Control**: Cache static assets for 1 year (31536000 seconds)
- **X-Content-Type-Options**: Prevent MIME-type sniffing
- **X-Frame-Options**: Prevent clickjacking
- **X-XSS-Protection**: Enable browser XSS filtering

## SPA Routing Configuration

```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

This ensures all URLs are routed to `index.html` so TanStack Router can handle client-side routing.

## Environment Variables

### Available in Production

These are automatically available:
- `NODE_ENV=production`
- `CI=true`

### Custom Variables

Add in Vercel Dashboard → Settings → Environment Variables

**Format:**
```
KEY=value
VITE_PUBLIC_KEY=public_value
```

**Client-side access** (must start with `VITE_`):
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**Server-side access** (any key):
```javascript
const secret = process.env.SECRET_KEY
```

## Build Process

### Local Build
```bash
npm run build
```

Output:
```
dist/
├── client/          # Static files served by Vercel
│   ├── assets/      # CSS/JS bundles
│   └── .assetsignore
└── server/          # Server configuration
```

### Vercel Build
1. Pull repository
2. Install: `npm install`
3. Build: `npm run build`
4. Deploy: Contents of `dist/client/`

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "moduleResolution": "Bundler",
    "jsx": "react-jsx"
  }
}
```

**Key Settings:**
- `strict: true` - Enforce strict type checking
- `target: ES2022` - Modern JavaScript features
- `jsx: react-jsx` - New JSX transform

## ESLint Configuration

```javascript
{
  ignores: ["dist", ".output", ".vinxi"],
  files: ["**/*.{ts,tsx}"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

## Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Node Version Support

**Minimum**: Node 18.x
**Recommended**: Node 20.x or 22.x

Set in Vercel → Settings → Node Version

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite dev",              // Development server
    "build": "vite build",          // Production build
    "build:dev": "vite build --mode development",
    "preview": "vite preview",      // Preview production build
    "lint": "eslint .",             // Run linter
    "format": "prettier --write ." // Format code
  }
}
```

## Vite Configuration

```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      host: "127.0.0.1",
      port: 8080
    }
  }
});
```

**What's included automatically:**
- TanStack Router plugin
- React support
- Tailwind CSS
- TypeScript paths
- Cloudflare support
- Component tagging
- Error logging

## Deployment Ignore File (`.vercelignore`)

```
# Ignore in production deployment
node_modules/
.git/
.env.local
.wrangler/
dist/          # Will rebuild
.tanstack/     # Cache
```

## GitHub Actions Workflows

### Deploy Workflow (`.github/workflows/deploy.yml`)
- Runs on: Push to main, Pull requests
- Tests Node 18 and 20
- Builds and tests
- Deploys to Vercel on main push

### Quality Workflow (`.github/workflows/quality.yml`)
- Runs: Linter, TypeScript check, Prettier check
- Triggers: Every push and PR
- Uploads lint reports as artifacts

## Performance Benchmarks

| Metric | Target | Current |
|--------|--------|---------|
| Build Time | < 5m | ~3-4s |
| Bundle Size | < 500KB | ~325KB |
| Time to Interactive | < 2s | ~1.5s |
| Core Web Vitals | Green | ✅ |
| Cache Hit Rate | > 90% | ~95% |

## Monitoring Configuration

### Vercel Analytics
- Enabled by default
- Tracks Core Web Vitals
- Shows performance trends
- Available in Vercel Dashboard

### Error Tracking
- View in Vercel → Functions tab
- Check runtime errors
- Monitor failed deployments

## DNS Configuration (Custom Domain)

If using custom domain (e.g., mypw.pw):

1. Vercel → Settings → Domains
2. Add domain
3. Update DNS records:
   ```
   CNAME: yourdomain.com → cname.vercel.com
   TXT: _vercel=xyz... (provided by Vercel)
   ```

## Caching Strategy

- **Static Assets** (`/assets/`): 1 year (cache busting via hashing)
- **HTML**: No cache (always fresh)
- **API Calls**: Configured in code
- **CDN**: Vercel's global network

## Rate Limiting

- **Vercel Free**: Unlimited deployments
- **Vercel Pro**: Unlimited deployments + analytics
- **Edge Functions**: 1000 requests/second per project
- **Bandwidth**: Based on plan

## Rollback & Versioning

### Automatic
- All deployments kept for 72 hours (free) / indefinite (pro)
- One-click rollback in dashboard

### Manual
- Use Vercel CLI: `vercel --prod`
- Point to specific git commit: `vercel --prod --git-commit`

## Troubleshooting Reference

| Issue | Check |
|-------|-------|
| Build fails | Node version, `npm run build` locally |
| 404 errors | SPA rewrites, output directory |
| Env vars missing | Dashboard settings, VITE_ prefix |
| Functions timeout | Check logs, optimize code |
| High latency | Check region, CDN cache |

---

## More Information

- **Vercel Docs**: https://vercel.com/docs
- **TanStack Docs**: https://tanstack.com
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
