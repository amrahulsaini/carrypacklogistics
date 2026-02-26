# Carry Pack Logistics - Environment Setup Guide

## Required Environment Variables

Add these variables to your Vercel project or `.env.local` file:

### 1. DATABASE_URL (Neon Database)

**How to get it:**
1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up or log in
3. Click "Create Project"
4. Name your project (e.g., "carrypacklogistics")
5. Select region closest to your users
6. Click "Create Project"
7. Copy the connection string that looks like:
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```
8. Add to Vercel: `DATABASE_URL=your_connection_string_here`

### 2. GMAIL_USER & GMAIL_APP_PASSWORD (Google Workspace)

**How to get Gmail App Password:**

1. **Enable 2-Factor Authentication (if not already enabled):**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click on "2-Step Verification"
   - Follow the steps to enable it

2. **Generate App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Search for "App passwords" or go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Type "Carry Pack Logistics Website"
   - Click "Generate"
   - Copy the 16-character password (it looks like: `abcd efgh ijkl mnop`)
   - **Important:** Remove the spaces, so it becomes: `abcdefghijklmnop`

3. **Add to Vercel:**
   ```
   GMAIL_USER=sales@carrypacklogistics.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

**Note:** If you're using Google Workspace (business email), make sure:
- 2FA is enabled for your account
- Less secure app access is OFF (App Passwords work better)
- IMAP is enabled in Gmail settings

### 3. ADMIN_PASSWORD

**Set a secure password for admin panel access:**
```
ADMIN_PASSWORD=YourSecurePassword123!
```

**Tips for a secure password:**
- At least 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- Don't use common words
- Example: `CPL@dmin#2026$Secure`

## Setting up in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add each variable:
   - Key: `DATABASE_URL`
   - Value: `your_neon_connection_string`
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"
5. Repeat for `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `ADMIN_PASSWORD`
6. Redeploy your application

## Database Initialization

The database table will be created automatically on first run. The schema includes:

- **id**: Auto-incrementing primary key
- **name**: Customer name
- **contact_number**: Phone number
- **email**: Email address
- **moving_from**: Origin location
- **moving_to**: Destination location
- **moving_date**: Preferred moving date
- **message**: Optional additional information
- **created_at**: Timestamp of submission
- **status**: Lead status (new, contacted, quoted, confirmed, completed, cancelled)

## Testing Email Setup

After setting up environment variables:

1. Go to `/get-quote` page
2. Fill out and submit the form
3. Check if you receive emails at:
   - Customer email (the one you entered in form)
   - sales@carrypacklogistics.com
   - carrypacklogistics@gmail.com

## Accessing Admin Panel

1. Go to `/admin` page
2. Enter the password you set in `ADMIN_PASSWORD`
3. View and manage all leads

## Troubleshooting

### Email not sending?
- Verify GMAIL_USER and GMAIL_APP_PASSWORD are correct
- Check if 2FA is enabled on Gmail account
- Make sure App Password has no spaces
- Check Vercel deployment logs for errors

### Database connection error?
- Verify DATABASE_URL is correct
- Check if Neon project is active
- Ensure connection string includes `?sslmode=require`

### Admin login not working?
- Verify ADMIN_PASSWORD matches exactly
- No extra spaces in environment variable
- Redeploy after changing environment variables

## Security Notes

- Never commit `.env.local` or `.env` to git
- Keep your App Password secure
- Change ADMIN_PASSWORD periodically
- Use different passwords for development and production

## Local Development

Create `.env.local` file in project root with all variables:

```env
DATABASE_URL=postgresql://...
GMAIL_USER=sales@carrypacklogistics.com
GMAIL_APP_PASSWORD=your_app_password
ADMIN_PASSWORD=your_admin_password
```

Then run: `npm run dev`
