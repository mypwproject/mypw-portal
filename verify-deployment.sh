#!/bin/bash
# Production Deployment Verification Script

echo "🔍 Starting production deployment checks..."
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_pass() {
  echo -e "${GREEN}✓${NC} $1"
}

check_fail() {
  echo -e "${RED}✗${NC} $1"
}

check_warn() {
  echo -e "${YELLOW}⚠${NC} $1"
}

# 1. Node version check
echo "📦 Dependencies Check"
if node -v | grep -qE 'v(1[8-9]|[2-9][0-9])'; then
  check_pass "Node version is 18 or higher"
else
  check_fail "Node version must be 18 or higher"
fi

# 2. Git repository check
if [ -d .git ]; then
  check_pass "Git repository initialized"
else
  check_warn "Git repository not initialized (required for Vercel)"
fi

# 3. Build check
echo ""
echo "🔨 Build Check"
if npm run build > /dev/null 2>&1; then
  check_pass "Production build successful"
else
  check_fail "Production build failed"
  exit 1
fi

# 4. Bundle size check
echo ""
echo "📊 Bundle Size Check"
if [ -f dist/client/assets/index-*.js ]; then
  SIZE=$(ls -lh dist/client/assets/index-*.js | awk '{print $5}' | tail -1)
  check_pass "Bundle size: $SIZE"
else
  check_fail "Bundle files not found"
fi

# 5. Lint check
echo ""
echo "🧹 Code Quality Check"
LINT_OUTPUT=$(npm run lint 2>&1)
ERROR_COUNT=$(echo "$LINT_OUTPUT" | grep -oP '(\d+) error' | grep -oP '\d+' || echo "0")
WARNING_COUNT=$(echo "$LINT_OUTPUT" | grep -oP '(\d+) warning' | grep -oP '\d+' || echo "0")

if [ "$ERROR_COUNT" = "0" ]; then
  check_pass "No ESLint errors"
else
  check_fail "$ERROR_COUNT ESLint errors found"
fi

if [ "$WARNING_COUNT" -gt "0" ]; then
  check_warn "$WARNING_COUNT ESLint warnings (non-critical)"
fi

# 6. Configuration files check
echo ""
echo "⚙️  Configuration Check"
[ -f vercel.json ] && check_pass "vercel.json exists" || check_fail "vercel.json missing"
[ -f .vercelignore ] && check_pass ".vercelignore exists" || check_fail ".vercelignore missing"
[ -f .env.example ] && check_pass ".env.example exists" || check_fail ".env.example missing"
[ -f tsconfig.json ] && check_pass "tsconfig.json exists" || check_fail "tsconfig.json missing"
[ -f package.json ] && check_pass "package.json exists" || check_fail "package.json missing"

# 7. Source files check
echo ""
echo "📝 Source Files Check"
[ -f src/router.tsx ] && check_pass "Router configured" || check_fail "Router not found"
[ -f src/routes/__root.tsx ] && check_pass "Root route exists" || check_fail "Root route missing"
[ -f src/routes/index.tsx ] && check_pass "Index route exists" || check_fail "Index route missing"
[ -f src/styles.css ] && check_pass "Styles configured" || check_fail "Styles missing"

# 8. Type checking
echo ""
echo "🔬 TypeScript Check"
if npx tsc --noEmit > /dev/null 2>&1; then
  check_pass "TypeScript compilation successful"
else
  check_fail "TypeScript compilation errors"
fi

# Summary
echo ""
echo "==========================================="
echo "✅ Deployment Readiness Summary"
echo "==========================================="
echo ""
echo "To deploy on Vercel:"
echo "1. Push code to GitHub/GitLab/Bitbucket"
echo "2. Go to vercel.com and import the repository"
echo "3. Vercel will auto-detect build settings"
echo "4. Deployment will complete automatically"
echo ""
echo "See DEPLOYMENT.md for detailed instructions"
echo ""
