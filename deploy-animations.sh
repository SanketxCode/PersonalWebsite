#!/bin/bash

echo "==========================================="
echo "Building and Deploying Animation Features"
echo "==========================================="
echo ""

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "feature/Improve_UI" ]; then
  echo "⚠️  Not on feature/Improve_UI branch!"
  echo "Creating and switching to feature/Improve_UI..."
  git checkout -b feature/Improve_UI
fi

echo ""
echo "Step 1: Building the project..."
echo "-------------------------------------------"
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
else
  echo "❌ Build failed. Please fix errors before proceeding."
  exit 1
fi

echo ""
echo "Step 2: Staging all changes..."
echo "-------------------------------------------"
git add -A
git status --short

echo ""
echo "Step 3: Creating commit..."
echo "-------------------------------------------"
git commit -m "Add impressive React animations showcasing advanced skills

- Implement custom cursor with dual-ring system and context awareness
- Add mouse-following parallax glow and 20 floating particles to hero
- Create interactive letter-by-letter name animation with hover effects
- Build scroll progress bar with active section indicator in navbar
- Add 3D card transformations (rotateX, rotateY) for education/achievements
- Implement stagger animations across all sections (200ms delays)
- Create physics-based spring animations for natural motion
- Add timeline dot pulse animation and list item stagger in experience
- Build project card hover effects with icon rotation (360°)
- Create skill pill animations with wiggle rotation and scale effects
- Implement scroll-linked opacity/scale transforms in About section
- Add infinite animations (badge rotation, arrow bounce, email icon wiggle)
- Create mobile menu with backdrop blur and stagger children
- Add footer social icon animations (rotate + scale on hover)
- Optimize performance with GPU acceleration and one-time viewport triggers

Technical highlights:
- Custom React hooks: useScroll, useTransform, useInView, mouse tracking
- Framer Motion variants system for parent-child animation orchestration
- Spring physics with configurable stiffness/damping parameters
- Layout animations with layoutId for smooth transitions
- Passive event listeners for optimal scroll performance
- One-time animation triggers to prevent re-renders

Co-Authored-By: Claude Code <noreply@anthropic.com>"

if [ $? -eq 0 ]; then
  echo "✅ Commit created successfully!"
else
  echo "❌ Commit failed."
  exit 1
fi

echo ""
echo "Step 4: Pushing to remote..."
echo "-------------------------------------------"
echo "To push this feature branch, run:"
echo ""
echo "  git push -u origin feature/Improve_UI"
echo ""
echo "Or if you want to push now, uncomment the line below in this script"
echo "# git push -u origin feature/Improve_UI"
echo ""
echo "==========================================="
echo "✨ Ready to push! ✨"
echo "==========================================="
echo ""
echo "What's new:"
echo "  • Custom animated cursor (desktop)"
echo "  • Mouse parallax effects"
echo "  • Floating particles background"
echo "  • Letter-by-letter name animation"
echo "  • Scroll progress bar"
echo "  • 3D card transformations"
echo "  • Timeline animations"
echo "  • Interactive skill pills"
echo "  • Stagger animations everywhere"
echo "  • Physics-based spring motion"
echo ""
echo "To preview locally: npm run dev"
echo "Documentation: See ANIMATIONS.md for details"
