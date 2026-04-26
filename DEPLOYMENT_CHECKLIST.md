# Production Deployment Checklist

## Pre-Deployment ✅

- [x] All code is committed to git
- [x] Build succeeds: `npm run build`
- [x] Linting passes: `npm run lint` (warnings only are OK)
- [x] TypeScript compiles: `npx tsc --noEmit`
- [x] No console errors in development
- [x] All routes tested locally (`npm run dev`)
- [x] Environment variables documented in `.env.example`
- [x] `.gitignore` properly configured
- [x] `.vercelignore` created to optimize deployment
- [x] `vercel.json` configured with:
  - Build command
  - Output directory
  - Rewrites for SPA routing
  - Security headers
  - Caching rules

## Code Quality ✅

- [x] No TypeScript errors
- [x] ESLint warnings only (react-refresh non-critical)
- [x] Code formatted with Prettier
- [x] No hardcoded secrets or API keys
- [x] Console warnings addressed
- [x] Browser console clean in dev mode

## Configuration Files ✅

- [x] `package.json` - Build scripts correct
- [x] `tsconfig.json` - Proper compilation settings
- [x] `vite.config.ts` - Build optimization configured
- [x] `vercel.json` - Vercel deployment settings
- [x] `.vercelignore` - Deployment files excluded
- [x] `.env.example` - Template created
- [x] `.prettierrc` - Formatting rules
- [x] `eslint.config.js` - Linting rules

## GitHub/Repository ✅

- [x] Repository is public/accessible
- [x] `.git` folder initialized
- [x] Main branch is default
- [x] Sensitive files in `.gitignore`
- [x] GitHub Actions workflows configured (optional)

## Vercel Setup

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Find and import this repository

### Step 2: Configure Project
- **Framework Preset**: Choose "Other" (TanStack Start)
- **Build Command**: Auto-detected as `npm run build`
- **Output Directory**: Auto-detected as `dist/client`
- **Install Command**: Auto-detected as `npm install`

### Step 3: Environment Variables (if needed)
In Vercel Dashboard → Settings → Environment Variables:
```
NODE_ENV=production
PUBLIC_URL=https://mypw.pw (optional)
```

### Step 4: Deploy
- Vercel automatically deploys when you push to `main`
- Each push triggers a new deployment
- Preview URLs available for pull requests

## Post-Deployment ✅

- [ ] Visit production URL: https://mypw.pw
- [ ] Test all pages load correctly
- [ ] Check console for errors
- [ ] Verify external links work
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Monitor error logs in Vercel dashboard
- [ ] Set up monitoring alerts (optional)

## Performance Targets

- **Build Time**: < 5 minutes
- **Main Bundle**: < 500KB (gzip)
- **Largest JS Asset**: < 400KB (gzip)
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 4s

## Security Checklist

- [x] No API keys in code
- [x] No secrets in `.env` file
- [x] HTTPS enforced on Vercel
- [x] Security headers configured
- [x] CORS properly configured
- [x] Dependencies scanned for vulnerabilities

## Rollback Plan

If deployment has issues:
1. Check build logs in Vercel dashboard
2. Clear cache: Settings → Git → Deployments → Clear Cache
3. Redeploy from a stable commit
4. Check production URL health

## Monitoring Post-Deployment

### Vercel Dashboard
- **Deployments**: View all deployment history
- **Analytics**: Monitor traffic and performance
- **Logs**: Check runtime errors
- **Functions**: Monitor edge function performance

### Real-time Monitoring
1. Check [StatusPage](https://vercel.com/status) for Vercel incidents
2. Set up monitoring alerts (Sentry, DataDog, etc.)
3. Monitor application error logs

## Support & Documentation

- **Vercel Docs**: https://vercel.com/docs
- **TanStack Start**: https://tanstack.com/start
- **Vite Guide**: https://vitejs.dev/
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## Deployment History

| Date | Commit | Status | Notes |
|------|--------|--------|-------|
| YYYY-MM-DD | commit-hash | Success/Failed | |

---

**Last Updated**: 2024
**Status**: ✅ Ready for Production
**Deployment Target**: Vercel
**Node Version**: 18+
