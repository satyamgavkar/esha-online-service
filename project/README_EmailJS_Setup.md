# EmailJS Setup Guide for Esha Online Service

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Inquiry from {{from_name}} - {{service}}

Hello {{to_name}},

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Required: {{service}}

Message:
{{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Website Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration
Replace the placeholder values in `src/components/Contact.tsx`:

```javascript
const EMAILJS_SERVICE_ID = 'service_2bdpl3s';
const EMAILJS_TEMPLATE_ID = 'template_aq4qn9z';
const EMAILJS_PUBLIC_KEY = 'Gi-mvx0OwNihdABE8';
```

## Step 6: Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email to confirm it's working

## Security Notes
- EmailJS public key is safe to use in frontend code
- The free plan allows 200 emails per month
- Consider upgrading for higher limits

## Troubleshooting
- Check browser console for any errors
- Verify all IDs are correct
- Ensure your email service is properly configured
- Test with a simple template first

## Template Variables Available
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{service}}` - Selected service
- `{{message}}` - User's message
- `{{to_name}}` - Your business name
- `{{reply_to}}` - User's email for replies