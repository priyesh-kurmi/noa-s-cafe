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

You need to create **3 separate templates** for the 3 forms.

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

### Template 2: Job Applications

1. Click **"Create New Template"** again
2. **Template Name:** `Job Application`
3. **Template Configuration:**

**Subject:**
```
New Job Application from {{from_name}}
```

**Content (Body):**
```
New Job Application Received

APPLICANT DETAILS:
Name: {{from_name}}
Email: {{user_email}}
Phone: {{phone}}
Preferred Location: {{location}}

---
This application was submitted via the noa's Café Jobs page.
Please contact the applicant to discuss opportunities.
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
5. **Copy the Template ID**

---

### Template 3: General Contact

1. Click **"Create New Template"** again
2. **Template Name:** `General Contact`
3. **Template Configuration:**

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content (Body):**
```
New Contact Form Submission

FROM: {{from_name}}
EMAIL: {{user_email}}
PHONE: {{phone}}
ENQUIRY TYPE: {{enquiry_type}}

MESSAGE:
{{message}}

---
This message was submitted via the noa's Café Contact form.
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
5. **Copy the Template ID**

---

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **Copy your Public Key** (looks like `ABcd123EFgh456`)

---

## Step 5: Update Your Website Code

Now you have all 4 credentials:
- ✅ Service ID (e.g., `service_abc123`)
- ✅ Catering Template ID (e.g., `template_catering123`)
- ✅ Jobs Template ID (e.g., `template_jobs456`)
- ✅ Contact Template ID (e.g., `template_contact789`)
- ✅ Public Key (e.g., `ABcd123EFgh456`)

### Update Catering.jsx

1. Open `src/pages/Catering.jsx` in VS Code
2. Find line ~32 with `'YOUR_SERVICE_ID'`
3. Replace the placeholders:
   ```javascript
   await emailjs.send(
     'service_abc123',  // ← Replace YOUR_SERVICE_ID with your actual Service ID
     'template_catering123',  // ← Replace YOUR_CATERING_TEMPLATE_ID with your Catering Template ID
     {
       from_name: formData.name,
       user_email: formData.email,
       phone: formData.phone,
       company: formData.company,
       event_type: formData.eventType,
       guest_count: formData.guestCount,
       event_date: formData.eventDate,
       message: formData.message,
     },
     'ABcd123EFgh456'  // ← Replace YOUR_PUBLIC_KEY with your actual Public Key
   )
   ```

### Update Jobs.jsx

1. Open `src/pages/Jobs.jsx` in VS Code
2. Find line ~25 with `'YOUR_SERVICE_ID'`
3. Replace the placeholders:
   ```javascript
   await emailjs.send(
     'service_abc123',  // ← Same Service ID
     'template_jobs456',  // ← Replace YOUR_JOBS_TEMPLATE_ID with your Jobs Template ID
     {
       from_name: `${formData.firstName} ${formData.lastName}`,
       user_email: formData.email,
       phone: formData.phone,
       location: formData.location,
       to_email: 'operations@noas.uk'
     },
     'ABcd123EFgh456'  // ← Same Public Key
   )
   ```

### Update Contact.jsx

1. Open `src/pages/Contact.jsx` in VS Code
2. Find line ~24 with `'YOUR_SERVICE_ID'`
3. Replace the placeholders:
   ```javascript
   await emailjs.send(
     'service_abc123',  // ← Same Service ID
     'template_contact789',  // ← Replace YOUR_CONTACT_TEMPLATE_ID with your Contact Template ID
     {
       from_name: formData.name,
       user_email: formData.email,
       phone: formData.phone,
       enquiry_type: formData.enquiryType,
       message: formData.message,
       to_email: 'operations@noas.uk'
     },
     'ABcd123EFgh456'  // ← Same Public Key
   )
   ```

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
- [ ] Created 3 templates (Catering, Jobs, Contact)
- [ ] Copied Service ID
- [ ] Copied all 3 Template IDs
- [ ] Copied Public Key
- [ ] Updated `Catering.jsx` with credentials
- [ ] Updated `Jobs.jsx` with credentials
- [ ] Updated `Contact.jsx` with credentials
- [ ] Tested all 3 forms
- [ ] Verified emails are being received

---

## Need Help?

If you encounter any issues, check:
1. EmailJS documentation: https://www.emailjs.com/docs/
2. Browser console for error messages (F12 → Console)
3. EmailJS dashboard → Email Logs to see sent emails

---

**That's it! Your forms are now fully functional and will send emails directly to your inbox.** 🎉
