# EmailJS Setup Guide for noa's Café Website

## Overview
Your website now has 3 functional contact forms that will send emails using EmailJS:
- **Catering Form** → sends to `catering@noas.uk`
- **Jobs Form** → sends to `operations@noas.uk`
- **Contact Form** → sends to `operations@noas.uk`

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create a free account (supports 200 emails/month)
4. Verify your email address

---

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook/Office 365** (if using noas.uk domain)
   - Or any other provider you use
4. Follow the connection steps (you may need to authorize EmailJS to send emails)
5. **Copy your Service ID** (looks like `service_abc123`)
   - Save this somewhere - you'll need it later!

---

## Step 3: Create Email Templates

You need to create **2 templates** for the 3 forms (Jobs and Contact forms share the same template since both go to operations@noas.uk).

### Template 1: Catering Inquiries

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. **Template Name:** `Catering Inquiry`
4. **Template Configuration:**

**Subject:**
```
New Catering Inquiry from {{from_name}}
```

**Content (Body):**
```
New Catering Inquiry Received

FROM: {{from_name}}
EMAIL: {{user_email}}
PHONE: {{phone}}
COMPANY: {{company}}

EVENT DETAILS:
Type: {{event_type}}
Guest Count: {{guest_count}}
Event Date: {{event_date}}

MESSAGE:
{{message}}

---
This inquiry was submitted via the noa's Café Catering form.
```

**To Email:**
```
catering@noas.uk
```

**From Name:**
```
noa's Café Website
```

5. Click **"Save"**
6. **Copy the Template ID** (looks like `template_xyz789`)

---

### Template 2: Job Applications & General Contact (Shared Template)

1. Click **"Create New Template"** again
2. **Template Name:** `Job Application & Contact` (you can name it anything - this is just for your reference)
3. **Template Configuration:**

**Subject:**
```
New Submission from {{from_name}}
```

**Content (Body):**
```
New Form Submission

FROM: {{from_name}}
EMAIL: {{user_email}}
PHONE: {{phone}}

DETAILS:
{{location}}

---
This submission was received via the noa's Café website.
The [JOB APPLICATION] or [CONTACT FORM] prefix will help you identify the type.
```

**To Email:**
```
operations@noas.uk
```

**From Name:**
```
noa's Café Website
```

4. Click **"Save"**
5. **Copy the Template ID** (this will be used for both Jobs and Contact forms)

**Note:** This template is shared between Jobs and Contact forms. The forms add prefixes `[JOB APPLICATION]` or `[CONTACT FORM]` to the location field so you can easily distinguish between them.

---

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **Copy your Public Key** (looks like `ABcd123EFgh456`)

---

## Step 5: Update Your Website Code

**Good news!** Your code is already updated with the actual credentials:
- ✅ Service ID: `service_qnv4xb2`
- ✅ Catering Template ID: `template_wc6bi9s`
- ✅ Jobs/Contact Template ID: `template_diit26o` (shared template)
- ✅ Public Key: `Gn3B67ifhZvRHtfkb`

All three forms are fully functional and ready to go. Just update the "To Email" in your EmailJS templates to:
- Catering template → `catering@noas.uk`
- Jobs/Contact template → `operations@noas.uk`

---

## Step 6: Test Your Forms

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test each form:
   - Go to `/catering` and submit a test inquiry
   - Go to `/jobs` and submit a test application
   - Go to `/contact` and submit a test message

3. Check your email inbox:
   - `catering@noas.uk` should receive catering inquiries
   - `operations@noas.uk` should receive jobs + contact messages

4. Look for these success indicators:
   - ✅ Green success message appears
   - ✅ Form clears after submission
   - ✅ Email arrives in correct inbox
   - ✅ Email contains all form data

---

## Troubleshooting

### Form shows error message
- **Check your credentials** - Make sure Service ID, Template IDs, and Public Key are correct
- **Check the browser console** - Look for error messages (F12 → Console tab)
- **Verify email service** - Make sure your EmailJS email service is connected and active

### Email not received
- **Check spam folder** - EmailJS emails might be filtered
- **Verify template "To Email"** - Make sure the recipient email is correct in the template
- **Check EmailJS dashboard** - Go to "Email Logs" to see if the email was sent

### Template variables not showing
- **Check variable names** - They must match exactly (e.g., `{{from_name}}`, not `{{name}}`)
- **Case sensitive** - Use underscores, not camelCase in templates

### Rate limit reached
- Free plan = 200 emails/month
- Upgrade to paid plan if you need more

---

## Summary Checklist

- [ ] Created EmailJS account
- [ ] Added email service (Gmail/Outlook/etc.)
- [ ] Created 2 templates (Catering, Jobs/Contact shared)
- [ ] Updated Catering template "To Email" to `catering@noas.uk`
- [ ] Updated Jobs/Contact template "To Email" to `operations@noas.uk`
- [ ] Tested all 3 forms
- [ ] Verified emails are being received at correct addresses

---

## Need Help?

If you encounter any issues, check:
1. EmailJS documentation: https://www.emailjs.com/docs/
2. Browser console for error messages (F12 → Console)
3. EmailJS dashboard → Email Logs to see sent emails

---

**That's it! Your forms are now fully functional and will send emails directly to your inbox.** 🎉
