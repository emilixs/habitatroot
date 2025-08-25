# Deployment Guide for Habitat Root Website

This guide covers deploying the Habitat Root website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended for CMS)

1. **Install Netlify Adapter**
   ```bash
   npm install @astrojs/netlify
   ```

2. **Use Netlify Configuration**
   ```bash
   cp astro.config.netlify.mjs astro.config.mjs
   ```

3. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the `habitatroot` repository

4. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

5. **Environment Variables**
   ```
   OAUTH_GITHUB_CLIENT_ID=your_github_client_id
   OAUTH_GITHUB_CLIENT_SECRET=your_github_client_secret
   PUBLIC_DECAP_CMS_VERSION=3.3.3
   SITE_URL=https://yourdomain.com
   ```

6. **Enable Netlify Identity**
   - Go to Site Settings > Identity
   - Enable Identity
   - Enable Git Gateway
   - Add GitHub as external provider

7. **Domain Setup**
   - Configure custom domain in Netlify settings
   - Update `public/admin/config.yml` with your domain
   - SSL is automatically configured

### Option 2: Vercel (Good for CMS)

1. **Install Vercel Adapter**
   ```bash
   npm install @astrojs/vercel
   ```

2. **Use Vercel Configuration**
   ```bash
   cp astro.config.vercel.mjs astro.config.mjs
   ```

3. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Astro configuration

4. **Environment Variables**
   - Add the same environment variables as Netlify
   - Configure in Vercel dashboard under Settings > Environment Variables

5. **Build Configuration**
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. **CMS Setup**
   - Update `public/admin/config.yml` with your Vercel domain
   - Configure GitHub OAuth app with Vercel callback URL

### Option 3: GitHub Pages (Static Only - Limited CMS)

1. **Use Default Static Configuration**
   - The current `astro.config.mjs` is already configured for static builds
   - No additional adapters needed

2. **Enable GitHub Actions**
   - The `.github/workflows/deploy.yml` file is already created
   - Set up GitHub Pages in repository settings

3. **Configure Repository Settings**
   - Go to Settings > Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

4. **Update Astro Config for GitHub Pages**
   ```js
   export default defineConfig({
     site: 'https://emilixs.github.io',
     base: '/habitatroot',
     // ... other config
   });
   ```

5. **CMS Limitations**
   - CMS will work but requires manual GitHub OAuth setup
   - Users need GitHub accounts to edit content
   - No server-side authentication

## 🔧 Pre-Deployment Checklist

### 1. GitHub OAuth App Configuration

- [ ] Create GitHub OAuth App at https://github.com/settings/applications/new
- [ ] Set Homepage URL to your production domain
- [ ] Set Authorization callback URL to `https://yourdomain.com/oauth/callback`
- [ ] Copy Client ID and Client Secret

### 2. Update CMS Configuration

Edit `public/admin/config.yml`:

```yml
backend:
  name: github
  repo: emilixs/habitatroot
  branch: main
  site_domain: yourdomain.com  # Update this
  base_url: https://yourdomain.com  # Update this
  auth_endpoint: oauth
```

### 3. Environment Variables

Set these in your hosting platform:

```bash
OAUTH_GITHUB_CLIENT_ID=your_actual_client_id
OAUTH_GITHUB_CLIENT_SECRET=your_actual_client_secret
PUBLIC_DECAP_CMS_VERSION=3.3.3
```

### 4. Content Preparation

- [ ] Replace placeholder images with real images
- [ ] Update trainer profile with real information
- [ ] Add real event content
- [ ] Update contact information in settings

### 5. SEO & Analytics

- [ ] Update meta descriptions for all pages
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test social media sharing with real images

## 🧪 Testing After Deployment

### 1. Basic Functionality
- [ ] Homepage loads correctly
- [ ] Events page shows events and filters work
- [ ] Individual event pages load
- [ ] Contact page displays contact information
- [ ] Navigation works on all pages

### 2. CMS Testing
- [ ] Access `/admin` successfully
- [ ] Log in with GitHub OAuth
- [ ] Create a test event
- [ ] Edit trainer profile
- [ ] Upload an image
- [ ] Publish changes and verify they appear on site

### 3. Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test mobile responsiveness
- [ ] Check loading speeds
- [ ] Verify images are optimized

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` file to repository
- Use hosting platform's environment variable settings
- Rotate GitHub OAuth secrets if compromised

### CMS Access
- Only grant CMS access to trusted users
- Use GitHub organization for better access control
- Monitor CMS activity through GitHub commits

### Content Security
- Review all content before publishing
- Use branch protection rules for main branch
- Consider adding content approval workflow

## 📊 Monitoring & Maintenance

### Analytics Setup
1. Add Google Analytics to layout
2. Set up Google Search Console
3. Monitor Core Web Vitals

### Content Updates
1. Train content editors on CMS usage
2. Establish content review process
3. Schedule regular content audits

### Technical Maintenance
1. Keep dependencies updated
2. Monitor hosting platform status
3. Regular backup verification

## 🆘 Troubleshooting

### Common Issues

**CMS Login Fails**
- Check GitHub OAuth app configuration
- Verify callback URL matches exactly
- Ensure environment variables are set correctly

**Images Not Loading**
- Check media folder configuration in CMS
- Verify image paths in content
- Ensure images are properly uploaded

**Build Failures**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

### Support Resources
- [Astro Documentation](https://docs.astro.build)
- [Decap CMS Documentation](https://decapcms.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎯 Next Steps After Deployment

1. **Content Migration**: Replace all placeholder content with real content
2. **SEO Optimization**: Add proper meta descriptions and optimize for search
3. **Performance Monitoring**: Set up analytics and monitoring
4. **User Training**: Train content editors on CMS usage
5. **Marketing Integration**: Connect with social media and email marketing tools
