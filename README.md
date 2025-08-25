# Habitat Root Website

A modern website for Habitat Root communication and posture training courses, built with Astro, Tailwind CSS, and Decap CMS.

## 🌟 Features

- **Modern Stack**: Built with Astro 5, Tailwind CSS, and DaisyUI
- **Content Management**: Decap CMS for easy content editing
- **Responsive Design**: Mobile-first design that works on all devices
- **Event Management**: Dynamic event pages with filtering capabilities
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/emilixs/habitatroot.git
cd habitatroot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your GitHub OAuth credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

### CMS Access

- Admin interface: [http://localhost:4321/admin](http://localhost:4321/admin)
- Requires GitHub OAuth setup for authentication

## 📝 Content Management

### Events
- Create and edit events through the CMS
- Fields include: title, dates, location, program, pricing, special guests
- Automatic filtering by date and type (online/live)

### Trainer Profile
- Single trainer profile editable through CMS
- Displays on homepage and can be expanded

### Site Settings
- Contact information
- Global site settings

## 🚀 Deployment

The site is configured for static generation and can be deployed to:
- Netlify, Vercel, GitHub Pages, or any static hosting provider

### Build Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### GitHub OAuth Setup

1. Go to [GitHub OAuth Apps](https://github.com/settings/applications/new)
2. Create a new OAuth app with:
   - Homepage URL: Your production domain
   - Callback URL: `https://yourdomain.com/oauth/callback`
3. Update `.env` with your Client ID and Secret

## 📚 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **CMS**: [Decap CMS](https://decapcms.org/)
- **Authentication**: GitHub OAuth
- **Content**: Markdown + YAML frontmatter
