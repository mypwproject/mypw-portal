# mypw.pw — Your Digital Hub

A modern, responsive web application built with TanStack Start and React, providing access to all your digital tools in one place.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or bun

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── routes/           # TanStack Router pages
│   ├── __root.tsx   # Root layout and error handling
│   └── index.tsx    # Home page with tool tiles
├── components/
│   └── ui/          # shadcn/ui component library
├── hooks/           # Custom React hooks
├── lib/            # Utilities and helpers
└── styles.css      # Global styles with Tailwind CSS
```

## ✨ Features

- **TanStack Router**: Type-safe routing with automatic code splitting
- **React 19**: Latest React features and improvements
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach
- **Multi-language Support**: English and Arabic

## 🛠 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run build:dev  # Build in development mode
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 📦 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Linting**: [ESLint](https://eslint.org)
- **Formatting**: [Prettier](https://prettier.io)

## 🚢 Deployment

This application is configured for **Vercel deployment**.

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically:
   - Detect the build command (`npm run build`)
   - Build the application
   - Deploy to production

### Deployment Configuration

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions, environment variables, and troubleshooting.

## 📋 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NODE_ENV=production
PUBLIC_URL=https://mypw.pw
```

## 🧪 Quality Assurance

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format
```

### Build Verification

The application includes:
- ✅ TypeScript strict mode enabled
- ✅ ESLint with React best practices
- ✅ Prettier formatting
- ✅ Security headers in Vercel config
- ✅ Optimized production bundle

## 🔒 Security

- Security headers configured in `vercel.json`
- Content Security Policy ready for implementation
- Type-safe development with TypeScript
- Dependency vulnerabilities scanned

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

Proprietary - All rights reserved

## 🔗 Tools

- **CODA**: All-in-one code editor
- **HASHY**: Secure hashing tool
- **LINKSHRINK**: URL shortener
- **Morph**: Data transformer
- **QRcode Maker**: QR code generation
- **Netspeed**: Internet speed test

## 📞 Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
2. Review [Vercel Documentation](https://vercel.com/docs)
3. Visit [TanStack Router Docs](https://tanstack.com/router)

---

**Production Ready** ✅ - This application is fully configured and tested for production deployment on Vercel.
