# Quick Reference: Deploy to Vercel in 3 Minutes

## TL;DR - Fastest Deployment

```bash
# 1. Ensure all changes are committed
git add .
git commit -m "Ready for production"
git push origin main

# 2. Go to vercel.com
# 3. Click "Add New Project" → Import repository
# 4. Done! Automatic deployment happens on every push to main
```

## Troubleshooting Fast Answers

### "Build failed"
- Check `npm run build` locally - fix any errors
- Clear cache: Vercel Dashboard → Settings → Git → Clear Cache
- Verify Node version is 18+

### "Getting 404 errors"
- Verify `vercel.json` has correct `outputDirectory: "dist/client"`
- Ensure rewrites are configured for SPA routing

### "Environment variables not working"
- Check Vercel Dashboard → Settings → Environment Variables
- Prefix client-side vars with `VITE_`
- Redeploy after adding variables

### "Function errors in production"
- Check Vercel Dashboard → Functions tab
- Look for runtime errors
- Check browser console for client-side errors

## Common Commands

```bash
# Local development
npm run dev              # Start dev server at localhost:8080

# Before pushing to production
npm run lint             # Check code quality
npm run build            # Build for production
npm run format           # Fix formatting

# Vercel CLI deployment (if using CLI)
npm install -g vercel   # Install once
vercel --prod            # Deploy to production
```

## Environment Variables

### Add to Vercel Dashboard

1. Settings → Environment Variables
2. Add variables:
   ```
   NODE_ENV=production
   PUBLIC_URL=https://mypw.pw
   ```

### .env.example template
```env
NODE_ENV=production
PUBLIC_URL=https://mypw.pw
```

## File Locations

| File | Purpose |
|------|---------|
| `vercel.json` | Deployment config |
| `src/routes/` | All pages |
| `src/routes/__root.tsx` | Root layout + errors |
| `src/routes/index.tsx` | Home page |
| `DEPLOYMENT.md` | Full guide |

## Performance Checklist

✅ Build time: ~3-4 seconds  
✅ Bundle size: ~325 KB (103 KB gzip)  
✅ Time to interactive: < 2 seconds  
✅ All dependencies cached  

## Rollback to Previous Deploy

1. Vercel Dashboard → Deployments
2. Click on previous deployment
3. Click "Promote to Production"

## Real-time Logs

```bash
# View Vercel logs (requires CLI)
vercel logs --prod
```

## Custom Domain Setup

1. Vercel Dashboard → Settings → Domains
2. Add domain
3. Update DNS records (instructions provided)
4. Wait for propagation (usually < 1 hour)

## What Happens on Deploy

1. Repository is pulled
2. Dependencies installed (`npm install`)
3. Build runs (`npm run build`)
4. Output from `dist/client/` deployed
5. Vercel CDN caches all assets
6. Your app is live! 🎉

## Monitoring

- **Analytics**: Vercel Dashboard → Analytics
- **Errors**: Vercel Dashboard → Functions → Runtime logs
- **Performance**: Check Web Vitals in Analytics

## Next Steps

1. Push code to git
2. Go to vercel.com
3. Click "Add Project" → Import repository
4. Automatic deployment ✨

---

**Need more help?** See [DEPLOYMENT.md](./DEPLOYMENT.md)
