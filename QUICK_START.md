# 📧 Email Forms - Quick Reference Card

## 🎯 Current Status: ✅ CODE COMPLETE - AWAITING YOUR EMAILJS SETUP

---

## 📍 Where to Find Things

### Your Forms (Already Updated):
1. **Catering Form:** http://localhost:3000/catering
2. **Jobs Form:** http://localhost:3000/jobs
3. **Contact Form:** http://localhost:3000/contact

### Setup Documents:
1. **`EMAILJS_SETUP_GUIDE.md`** ← Start here! Complete step-by-step guide
2. **`IMPLEMENTATION_SUMMARY.md`** ← Technical details of what was implemented

---

## ✅ What's Already Done (By Me)

- [x] Installed @emailjs/browser package
- [x] Updated Catering.jsx with EmailJS code
- [x] Updated Jobs.jsx with EmailJS code
- [x] Updated Contact.jsx with EmailJS code
- [x] Added loading states (button shows "Submitting...")
- [x] Added success messages (green banner)
- [x] Added error messages (red banner)
- [x] Forms auto-clear after successful submission
- [x] Prevented double-submission with disabled states
- [x] All fields mapped to email template variables

---

## 📝 What You Need to Do (6 Simple Steps)

### Step 1: Create EmailJS Account (5 minutes)
→ Go to https://www.emailjs.com/
→ Sign up for free

### Step 2: Connect Your Email (3 minutes)
→ Add email service (Gmail/Outlook)
→ **Save Service ID**

### Step 3: Create 3 Templates (10 minutes)
→ Catering template (to: catering@noas.uk)
→ Jobs template (to: operations@noas.uk)
→ Contact template (to: operations@noas.uk)
→ **Save all 3 Template IDs**

### Step 4: Get Public Key (1 minute)
→ Account → General
→ **Save Public Key**

### Step 5: Update Code (5 minutes)
Open these 3 files and replace placeholders:

**File: src/pages/Catering.jsx (line ~32)**
```javascript
'YOUR_SERVICE_ID'            → 'service_abc123'
'YOUR_CATERING_TEMPLATE_ID'  → 'template_xyz789'
'YOUR_PUBLIC_KEY'            → 'ABcd123EFgh456'
```

**File: src/pages/Jobs.jsx (line ~25)**
```javascript
'YOUR_SERVICE_ID'            → 'service_abc123'
'YOUR_JOBS_TEMPLATE_ID'      → 'template_xyz789'
'YOUR_PUBLIC_KEY'            → 'ABcd123EFgh456'
```

**File: src/pages/Contact.jsx (line ~24)**
```javascript
'YOUR_SERVICE_ID'            → 'service_abc123'
'YOUR_CONTACT_TEMPLATE_ID'   → 'template_xyz789'
'YOUR_PUBLIC_KEY'            → 'ABcd123EFgh456'
```

### Step 6: Test (5 minutes)
→ Visit each form
→ Submit test data
→ Check your email inbox
→ ✅ Done!

---

## 🎨 Template Content (Copy/Paste Ready)

### Catering Template

**Subject:**
```
New Catering Inquiry from {{from_name}}
```

**Body:**
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

**To Email:** `catering@noas.uk`

---

### Jobs Template

**Subject:**
```
New Job Application from {{from_name}}
```

**Body:**
```
New Job Application Received

APPLICANT DETAILS:
Name: {{from_name}}
Email: {{user_email}}
Phone: {{phone}}
Preferred Location: {{location}}

---
This application was submitted via the noa's Café Jobs page.
```

**To Email:** `operations@noas.uk`

---

### Contact Template

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
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

**To Email:** `operations@noas.uk`

---

## 🚨 Important Notes

- **Same Service ID** for all 3 forms
- **Same Public Key** for all 3 forms
- **Different Template ID** for each form
- **Don't share Public Key publicly** (it's okay in your code, but don't post it online)

---

## 🎉 When Complete, You'll Have:

✅ Catering inquiries → catering@noas.uk
✅ Job applications → operations@noas.uk
✅ Contact messages → operations@noas.uk
✅ Professional email templates
✅ User-friendly success/error messages
✅ No server configuration needed
✅ 200 free emails per month

---

## 📞 Need More Details?

See `EMAILJS_SETUP_GUIDE.md` for:
- Detailed screenshots guidance
- Troubleshooting tips
- Testing checklist
- Error handling info

---

**Total Time to Complete: ~30 minutes**

**Your dev server is running at: http://localhost:3000/**

🚀 **Let's get your forms working!**
