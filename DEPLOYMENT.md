# Vercel Deployment Guide

## Overview
This is a TanStack Start + React application configured for production deployment on Vercel.

## Pre-Deployment Checklist

✅ **Build**: Production build verified
✅ **Linting**: Code quality verified (only non-critical warnings)
✅ **Configuration**: Vercel configuration in place
✅ **Environment**: Environment variables configured
✅ **Dependencies**: All dependencies installed

## Deployment Steps

### 1. Connect Repository to Vercel

```bash
# If not already done, initialize git
git init

# Add all changes
git add .

# Commit changes
git commit -m "Prepare for Vercel deployment"

# Push to GitHub/GitLab/Bitbucket
git push -u origin main
```

Then visit [vercel.com](https://vercel.com) and connect your repository.

### 2. Configure Environment Variables (if needed)

In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add any required variables from `.env.example`
3. Common variables:
   - `NODE_ENV=production` (auto-set by Vercel)
   - `PUBLIC_URL=https://mypw.pw` (optional, for absolute URLs)

### 3. Deploy

Vercel will automatically deploy on each push to main branch.

## Build Configuration

The `vercel.json` file contains:
- **buildCommand**: `npm run build`
- **outputDirectory**: `dist/client`
- **framework**: `other` (for custom frameworks)
- **cleanUrls**: `true` (removes .html extensions)
- **rewrites**: SPA routing configuration

## Performance Optimizations

- **Asset Caching**: Static assets cached for 1 year
- **Code Splitting**: Automatic chunk splitting by TanStack Router
- **CSS Minification**: Handled by Vite
- **Bundle Analysis**: JS bundle is ~325KB (gzip: ~103KB)

## Security Headers

The app includes:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

## Troubleshooting

### Build Fails on Vercel
- Check Node version in Vercel settings (recommend 18+)
- Clear cache: Go to Settings → Git → Deployments → Clear Cache
- Check `npm run build` works locally

### Pages Return 404
- Ensure `vercel.json` rewrites are configured
- Check `outputDirectory` points to correct build folder

### Environment Variables Not Working
- Verify variables are added in Vercel dashboard
- Prefix client-side variables with `VITE_` (automatically injected)

## Monitoring

After deployment:
1. Check build logs in Vercel dashboard
2. Monitor runtime errors in Functions tab
3. Use Analytics tab to track performance

## Rollback

To rollback to a previous deployment:
1. Go to Deployments tab
2. Click on previous deployment
3. Click "Promote to Production"

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [TanStack Router Docs](https://tanstack.com/router)
- [Vite Documentation](https://vitejs.dev/)

## Files Modified for Deployment

- ✅ `vercel.json` - Vercel configuration with caching and security headers
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ `.env.example` - Environment variables template
- ✅ `public/index.html` - HTML entry point
- ✅ All code files formatted for production
