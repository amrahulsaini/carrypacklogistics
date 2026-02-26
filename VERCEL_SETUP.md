# 🚀 VERCEL SETUP GUIDE - Carry Pack Logistics

## Quick Setup Checklist

✅ **Step 1:** Create Vercel Postgres Database  
✅ **Step 2:** Get Brevo SMTP API Key  
✅ **Step 3:** Set Environment Variables  
✅ **Step 4:** Initialize Database  
✅ **Step 5:** Test Everything  

---

## 📊 Step 1: Create Vercel Postgres Database

### 1.1 Create Database in Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your **carrypacklogistics** project
3. Click on the **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Choose database name: `carrypack-db` (or any name)
7. Select region: Choose closest to your users (e.g., Mumbai for India)
8. Click **Create**

### 1.2 Connect Database to Project

1. After database is created, it will show you connection details
2. Click **Connect Project** 
3. Select your **carrypacklogistics** project
4. Click **Connect**

✅ **Done!** Vercel automatically adds these environment variables:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

---

## 📧 Step 2: Get Brevo SMTP API Key

### 2.1 Sign Up for Brevo (Free Plan)

1. Go to: https://www.brevo.com/
2. Click **Sign Up Free**
3. Enter your details and verify email

### 2.2 Get SMTP API Key

1. Log in to Brevo dashboard: https://app.brevo.com/
2. Click on your name (top right) → **SMTP & API**
3. Go to **SMTP** tab
4. You'll see:
   ```
   SMTP Server: smtp-relay.brevo.com
   Port: 587
   Login: 9a47c5001@smtp-brevo.com (this is YOUR unique login)
   Password: [Click to create]
   ```
5. Click **Create a new SMTP key**
6. Name it: "Carry Pack Website"
7. Copy the password (API key) - looks like: `xkeysib-abc123def456...`

⚠️ **Important:** Save this password immediately! You can't see it again.

### 2.3 Verify Sender Email (Important!)

1. In Brevo dashboard, go to **Senders**
2. Click **Add a Sender**
3. Add: `sales@carrypacklogistics.com`
4. Verify the email (check inbox for verification link)

**Without verification, emails won't send!**

---

## ⚙️ Step 3: Set Environment Variables in Vercel

### 3.1 Add Brevo Variables

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add these TWO variables:

**Variable 1:**
```
Key: BREVO_SMTP_USER
Value: 9a47c5001@smtp-brevo.com
Environment: Production, Preview, Development (select all)
```

**Variable 2:**
```
Key: BREVO_SMTP_PASSWORD
Value: xkeysib-your_actual_api_key_here
Environment: Production, Preview, Development (select all)
```

### 3.2 Add Admin Password

**Variable 3:**
```
Key: ADMIN_PASSWORD
Value: YourSecurePassword123!
Environment: Production, Preview, Development (select all)
```

**Tips for secure password:**
- At least 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Example: `CPL@Admin#2026$Secure`

### 3.3 Verify Database Variables

Check that these exist (automatically added when you connected database):
- ✅ `POSTGRES_URL`
- ✅ `POSTGRES_PRISMA_URL`
- ✅ `POSTGRES_URL_NON_POOLING`

If missing, reconnect the database to your project.

---

## 🗄️ Step 4: Initialize Database Table

### 4.1 Deploy Your Project

1. Push your code to GitHub (already done!)
2. Vercel will auto-deploy
3. Wait for deployment to complete

### 4.2 Create Database Table

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to Vercel project → **Storage** → Your Postgres database
2. Click on **Data** tab
3. Click **Query** 
4. Paste this SQL:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  moving_from VARCHAR(255) NOT NULL,
  moving_to VARCHAR(255) NOT NULL,
  moving_date DATE NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'new'
);
```

5. Click **Run Query**
6. You should see: "CREATE TABLE" success message

**Option B: Automatic (on first use)**

The table will be created automatically when the first lead is submitted (via the initDatabase function).

---

## 🧪 Step 5: Test Everything

### 5.1 Test Lead Submission

1. Go to: `https://yourdomain.vercel.app/get-quote`
2. Fill out the form with test data:
   - Name: Test User
   - Contact: 9876543210
   - Email: your_personal_email@gmail.com (use your real email to test)
   - Moving From: Mumbai
   - Moving To: Ahmedabad
   - Moving Date: Tomorrow's date
   - Message: Test lead submission
3. Click **Submit Request**
4. Should see success message ✅

### 5.2 Check Emails

Within 1-2 minutes, check these inboxes:
- ✅ Your test email (customer confirmation)
- ✅ sales@carrypacklogistics.com (admin notification)
- ✅ carrypacklogistics@gmail.com (admin notification)

**If no email received:**
- Check spam folder
- Verify sender email in Brevo is verified
- Check Vercel function logs for errors

### 5.3 Test Admin Panel

1. Go to: `https://yourdomain.vercel.app/admin`
2. Enter your `ADMIN_PASSWORD`
3. Should see the test lead you submitted
4. Try changing its status
5. Check stats are updating

---

## 📝 Environment Variables Summary

Here's what you need to set in Vercel:

```env
# Brevo SMTP (YOU SET THESE)
BREVO_SMTP_USER=9a47c5001@smtp-brevo.com
BREVO_SMTP_PASSWORD=xkeysib-your_api_key_here

# Admin Access (YOU SET THIS)
ADMIN_PASSWORD=YourSecurePassword123!

# Database (AUTOMATIC - Vercel sets these)
POSTGRES_URL=postgres://...
POSTGRES_PRISMA_URL=postgres://...
POSTGRES_URL_NON_POOLING=postgres://...
POSTGRES_USER=...
POSTGRES_HOST=...
POSTGRES_PASSWORD=...
POSTGRES_DATABASE=...
```

---

## 🔍 Troubleshooting

### Emails Not Sending?

**Check:**
1. ✅ Sender email verified in Brevo
2. ✅ `BREVO_SMTP_USER` is correct (looks like: `abc123@smtp-brevo.com`)
3. ✅ `BREVO_SMTP_PASSWORD` has no extra spaces
4. ✅ Brevo account is active (check dashboard)
5. ✅ Check Vercel function logs: Project → Deployments → Latest → Functions tab

**Common Issues:**
- "Invalid login" → Wrong SMTP user or password
- "Sender not verified" → Need to verify email in Brevo
- "Daily limit exceeded" → Free plan has 300 emails/day limit

### Database Errors?

**Check:**
1. ✅ Database is connected to project
2. ✅ Table is created (run SQL query again)
3. ✅ Environment variables exist
4. ✅ Deployment completed successfully

**Fix:**
- Reconnect database: Storage → Database → Reconnect Project
- Redeploy: Deployments → Latest → Redeploy

### Admin Panel Not Working?

**Check:**
1. ✅ `ADMIN_PASSWORD` is set in environment variables
2. ✅ No typos in password
3. ✅ Redeployed after setting variables

**Fix:**
- Set/update `ADMIN_PASSWORD` in Vercel
- Redeploy the project

### Form Submission Fails?

**Check:**
1. ✅ All required fields filled
2. ✅ Date is in future
3. ✅ Valid email format
4. ✅ Phone number is 10 digits

**Check browser console:**
- F12 → Console tab
- Look for error messages

---

## 🎯 Quick Reference URLs

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Brevo Dashboard:** https://app.brevo.com/
- **Your Website:** https://yourdomain.vercel.app
- **Get Quote Page:** https://yourdomain.vercel.app/get-quote
- **Admin Panel:** https://yourdomain.vercel.app/admin

---

## 📊 Brevo Free Plan Limits

- ✅ **300 emails per day** (more than enough for leads)
- ✅ Unlimited contacts
- ✅ Email templates
- ✅ SMTP relay included

**Need more?** Upgrade to paid plan for higher limits.

---

## 🎉 Success Checklist

Once everything is set up:

- [ ] Vercel Postgres database created and connected
- [ ] Brevo account created
- [ ] Brevo SMTP credentials obtained
- [ ] Sender email verified in Brevo
- [ ] Environment variables set in Vercel
- [ ] Project deployed successfully
- [ ] Database table created
- [ ] Test lead submitted successfully
- [ ] Customer email received
- [ ] Admin emails received (both addresses)
- [ ] Admin panel accessible
- [ ] Lead visible in admin panel

---

## 🚀 You're All Set!

Your lead management system is now live with:
- ✅ Vercel Postgres database
- ✅ Brevo email notifications
- ✅ Secure admin panel
- ✅ Professional form
- ✅ Complete workflow

**Share your `/get-quote` page with customers and start receiving leads!** 📈
