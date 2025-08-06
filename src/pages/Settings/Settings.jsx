import { useState } from "react";
import {
  Moon,
  Sun,
  Shield,
  Bell,
  Eye,
  CreditCard,
  Globe,
  HelpCircle,
} from "lucide-react";
import "./Settings.css"

const SettingSection = ({ title, icon, children }) => (
  <div className="setting-section">
    <div className="section-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <div className="section-content">{children}</div>
  </div>
);

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [locationSharing, setLocationSharing] = useState(false);
  const [language, setLanguage] = useState("english");
  const [timezone, setTimezone] = useState("gmt");
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [supportContact] = useState("support@example.com");

  return (
    <div className="container-general">
      <div className="settings">
        <h1>Settings</h1>

        <SettingSection
          title="Appearance"
          icon={darkMode ? <Moon size={20} /> : <Sun size={20} />}
        >
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Enable Dark Mode
          </label>
        </SettingSection>

        <SettingSection title="Security" icon={<Shield size={20} />}>
          <label>
            <input
              type="checkbox"
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            />
            Two-Factor Authentication
          </label>
        </SettingSection>

        <SettingSection title="Notifications" icon={<Bell size={20} />}>
          <label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            Email Notifications
          </label>
          <label>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
            SMS Notifications
          </label>
        </SettingSection>

        <SettingSection title="Privacy & Data" icon={<Eye size={20} />}>
          <label>
            Profile Visibility:
            <select
              value={profileVisibility}
              onChange={(e) => setProfileVisibility(e.target.value)}
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={locationSharing}
              onChange={() => setLocationSharing(!locationSharing)}
            />
            Share Location
          </label>
        </SettingSection>

        <SettingSection title="Account" icon={<CreditCard size={20} />}>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
        </SettingSection>

        <SettingSection title="General" icon={<Globe size={20} />}>
          <label>
            Language:
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </label>
          <label>
            Timezone:
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="gmt">GMT</option>
              <option value="est">EST</option>
              <option value="pst">PST</option>
            </select>
          </label>
        </SettingSection>

        <SettingSection title="Support & About" icon={<HelpCircle size={20} />}>
          <p>Contact Support: {supportContact}</p>
          <p>Version: 1.0.0</p>
        </SettingSection>
      </div>
    </div>
  );
};

export default Settings;
