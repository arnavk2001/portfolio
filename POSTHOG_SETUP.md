# PostHog Analytics Setup

This project uses PostHog for analytics tracking with the following features:

## Features Implemented

### 1. **Scroll Depth Tracking**
Automatically tracks when users reach 25%, 50%, 75%, and 100% scroll depth on any page.

### 2. **Button Click Tracking**
Tracks clicks on the following buttons:
- **LinkedIn Connect** - Tracks when users click on LinkedIn profile link
- **GitHub Connect** - Tracks when users click on GitHub profile link  
- **Send Email** - Tracks when users click on the email button
- **Hire Me / Get in Touch** - Tracks CTA button clicks in hero section

## Setup Instructions

### 1. Create a PostHog Account
1. Go to [PostHog](https://posthog.com) and sign up for a free account
2. Create a new project
3. Copy your Project API Key from Settings → Project Settings

### 2. Add API Key to Local Environment

1. Open the `.env.local` file in your project root
2. Replace `your_posthog_api_key_here` with your actual PostHog API key:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_from_posthog
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

### 3. Add API Key to Vercel (Production)

1. Go to your Vercel project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add the same variables:
   - **NEXT_PUBLIC_POSTHOG_KEY**: Your PostHog API key
   - **NEXT_PUBLIC_POSTHOG_HOST**: `https://app.posthog.com`
   - **Environment**: Production, Preview, Development (all)

4. Redeploy your application

### 4. Start Development
```bash
npm run dev
```

## Testing Locally (Development Mode)

PostHog is configured to **NOT send data** in development mode - events are only logged to console.

### How It Works

**Development (npm run dev):**
- ✅ PostHog initializes with your API key
- ✅ All events logged to console for testing
- ❌ NO data sent to PostHog dashboard

**Production (Vercel):**
- ✅ PostHog initializes with your API key  
- ❌ No console logs
- ✅ All events sent to PostHog dashboard

### Testing Steps

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open browser console (F12 or Cmd+Option+I)

3. You'll see:
   ```
   🔍 PostHog initialized in DEV mode
   📊 Events will be logged to console only (not sent to dashboard)
   ```

4. Look for the orange dev mode indicator in bottom-right corner

5. Test the tracking:
   
   **Scroll the page** - See console logs at 25%, 50%, 75%, 100%:
   ```
   � PostHog Event [DEV]: scroll_depth {depth_percentage: 25, page_path: '/'}
   ```
   
   **Click LinkedIn/GitHub** in Contact section:
   ```
   📊 PostHog Event [DEV]: connect_button_clicked {button_type: 'linkedin', ...}
   ```
   
   **Click "Send me an email"**:
   ```
   📊 PostHog Event [DEV]: email_button_clicked {button_type: 'send_email', ...}
   ```
   
   **Click "Get in Touch"** in hero:
   ```
   📊 PostHog Event [DEV]: hire_me_button_clicked {button_type: 'hire_me', ...}
   ```

### Production Behavior

When deployed to production (Vercel/production build):
- Events ARE sent to PostHog dashboard
- No console logging
- All tracking works normally

## Events Being Tracked

| Event Name | Description | Properties |
|------------|-------------|------------|
| `$pageview` | Automatic page view tracking | `$current_url` |
| `scroll_depth` | Tracks scroll milestones | `depth_percentage`, `page_path` |
| `connect_button_clicked` | LinkedIn/GitHub clicks | `button_type`, `button_location` |
| `email_button_clicked` | Send email button click | `button_type`, `button_location`, `email` |
| `hire_me_button_clicked` | Hire me CTA click | `button_type`, `button_location` |

## Viewing Analytics

1. Log in to your PostHog dashboard at [app.posthog.com](https://app.posthog.com)
2. Navigate to **Events** to see all tracked events
3. Use **Insights** to create custom dashboards and visualizations
4. Set up **Funnels** to track user journeys (e.g., Home → Projects → Contact)

## Privacy Considerations

PostHog is configured with:
- `person_profiles: 'identified_only'` - Only creates profiles for identified users
- No automatic sensitive data collection
- GDPR compliant with proper configuration

## Additional Features You Can Add

- **Session recordings** - Watch user interactions
- **Feature flags** - A/B testing capabilities
- **Heatmaps** - Visual click/scroll maps
- **Surveys** - In-app user feedback

Check the [PostHog docs](https://posthog.com/docs) for more features.
