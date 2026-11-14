---
name: pre-launch-security-audit
description: Comprehensive 85-point pre-launch application security audit for web and mobile applications (React, Next.js, FastAPI, Node, MongoDB, Supabase, Firebase, Expo). Formatted from Mayank Shah's official pre-launch security framework (v2.0, Nov 2026). Runs 67 automated code checks across Secrets, Auth, Injection, Database/RLS, Webhooks/Payments, and Dependencies, followed by an 18-point human verification checklist, writing findings to AUDIT.md.
license: Community
metadata:
  author: Mayank Shah (@mayankshah_ai)
  version: 2.0.0
---

# Pre-Launch Security Audit (85-Point AI Security Protocol)

Developed by Mayank Shah (@mayankshah_ai, @Mayankshahh).

A battle-tested 4-step security audit protocol for web and mobile applications before public launch.

## 4-Step Audit Methodology

1. **Step 1: Stack & Architecture Detection**
   Identify frontend (React/Next.js/Expo), backend (FastAPI/Express/Next API), database (MongoDB/PostgreSQL/Supabase/Firebase), and external integrations (Stripe, Razorpay, LLM providers).
2. **Step 2: Automated 67-Point Code Audit**
   Run all applicable checks across secrets, authentication, authorization, injection, databases, webhooks, and supply chain. Write comprehensive evidence to AUDIT.md. Report findings grouped by severity (Critical, High, Medium, Low).
3. **Step 3: Approval-Gated Fix Round**
   Fix only issues explicitly approved by the user, Critical first. Re-verify each fix and update AUDIT.md.
4. **Step 4: 18-Point Human Checklist (H1–H18)**
   Interactive verification of operational, financial, and compliance controls that cannot be confirmed from static code alone.

---

## The 67 Code Checks by Category

### 1. Secrets & Credentials (1.1 - 1.6)
- **1.1 No hardcoded API keys, tokens, or private secrets in source code.**
- **1.2 No exposed secrets in client-side bundles (e.g. NEXT_PUBLIC_ or VITE_ containing backend keys).**
- **1.3 .env and .env.local files are listed in .gitignore and not tracked in Git history.**
- **1.4 Test keys (Stripe test, sandbox credentials) are never used in production configuration.**
- **1.5 Secrets are loaded via runtime environment variables with strict validation.**
- **1.6 Database credentials, connection strings, and service accounts are isolated from public repositories.**

### 2. Authentication & Session Management (2.1 - 2.8)
- **2.1 Passwords hashed using robust modern algorithms (Argon2id, bcrypt with cost factor >= 12, scrypt).**
- **2.2 Password reset tokens are cryptographically secure, single-use, and expire in <= 15 minutes.**
- **2.3 Brute-force protection: Rate limiting on /login, /register, /forgot-password, /verify-otp.**
- **2.4 JWT signatures verified on every protected route (reject algorithm 
one).**
- **2.5 JWT expiration enforced with refresh token rotation.**
- **2.6 Session cookies use HttpOnly, Secure, and SameSite=Lax or Strict flags.**
- **2.7 Logout invalidates server-side session or blacklists/revokes active refresh tokens.**
- **2.8 Multi-factor authentication (MFA) enforcement for administrative routes.**

### 3. Authorization & Access Control (3.1 - 3.6)
- **3.1 Object-level authorization (BOLA / IDOR): Users cannot access or mutate resources owned by other tenants.**
- **3.2 Role-based access control (RBAC): Admin routes strictly enforce server-side role validation.**
- **3.3 Principle of least privilege for database connection users and service accounts.**
- **3.4 CORS configuration is strictly scoped to authorized origins (never Access-Control-Allow-Origin: * with credentials).**
- **3.5 Direct API access to internal microservices or databases is blocked by firewall/private network.**
- **3.6 File download / upload routes check user ownership before serving files.**

### 4. Database & Storage Security (4.1 - 4.6)
- **4.1 Parameterized queries / ORM usage: Zero raw string concatenation in SQL queries.**
- **4.2 NoSQL injection prevention (MongoDB $where, $regex, and object-injection sanitization).**
- **4.3 Supabase: Row Level Security (RLS) enabled on EVERY table; policies check uth.uid().**
- **4.4 Firebase: Security Rules enforce authentication and document ownership checks.**
- **4.5 S3 / Cloud Storage buckets: Public read/write disabled unless explicitly intended for static assets.**
- **4.6 Storage upload limits: File type whitelist (MIME + magic bytes), maximum size caps, and filename sanitization.**

### 5. Input Validation & Injection (5.1 - 5.6)
- **5.1 Server-side schema validation (e.g. Zod, Pydantic, Joi) on all incoming request bodies and query parameters.**
- **5.2 Cross-Site Scripting (XSS): User-generated content is sanitized or escaped; no unescaped dangerouslySetInnerHTML.**
- **5.3 SSRF protection: Server-side URL fetching strictly validates scheme (http/https) and blocks internal IP ranges (127.0.0.1, 169.254.169.254, RFC1918).**
- **5.4 Command injection: No eval(), exec(), shell=True, or dynamic system execution on user inputs.**
- **5.5 Path traversal: File path inputs sanitized against ../ directory climbing.**
- **5.6 LLM Prompt Injection: Guardrails on user-supplied context fed into AI prompts; system instructions separated.**

### 6. Payments & Webhooks (6.1 - 6.6)
- **6.1 Webhook signatures verified using raw request body (Stripe, Razorpay, Paddle, PayPal).**
- **6.2 Webhook idempotency: Duplicate event delivery is tracked and processed only once.**
- **6.3 Payment amounts computed and validated server-side (client never submits editable price).**
- **6.4 Customer ID / Subscription state tied strictly to authenticated user record.**
- **6.5 Failed payment and cancellation webhooks properly revoke user access.**
- **6.6 Webhook endpoints reject invalid or unauthenticated HTTP methods and payloads.**

### 7. API Security & Infrastructure (7.1 - 7.7)
- **7.1 Global API rate limiting applied to prevent DoS and abuse.**
- **7.2 Security HTTP headers configured: Content-Security-Policy, X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Strict-Transport-Security.**
- **7.3 Detailed stack traces, internal errors, and server versions suppressed in production API responses.**
- **7.4 Debug endpoints, OpenAPI/Swagger docs, and test routes disabled or authenticated in production.**
- **7.5 Dead code, backup files (.bak, .old), and leftover development files removed.**
- **7.6 Healthcheck endpoints do not leak sensitive environment or database credentials.**
- **7.7 Logging avoids storing PII, passwords, credit card numbers, or full authorization tokens.**

### 8. Mobile & Expo Security (8.1 - 8.4)
- **8.1 Secure storage used for sensitive tokens (expo-secure-store, Keychain, EncryptedSharedPreferences).**
- **8.2 API calls enforce HTTPS with SSL/TLS certificate validation.**
- **8.3 Deep links and universal links validate incoming parameters before routing.**
- **8.4 App release configuration: ProGuard / R8 enabled, debuggable flag set to alse.**

### 9. Dependencies & Supply Chain (9.1 - 9.4)
- **9.1 Zero known critical/high vulnerabilities in dependencies (
pm audit, pip audit).**
- **9.2 Lockfiles (package-lock.json, poetry.lock, Pipfile.lock) committed and verified.**
- **9.3 No typosquatted or suspicious unmaintained third-party packages.**
- **9.4 Automated dependency scanning integrated into build/CI.**

---

## The 18 Human Operational Checks (H1 - H18)

- **H1:** Domain DNS has SPF, DKIM, and DMARC records configured to prevent email spoofing.
- **H2:** Production database has automated daily backups enabled and point-in-time recovery tested.
- **H3:** Third-party provider billing alerts (Stripe, AWS, Cloudflare, OpenAI/Anthropic) are configured.
- **H4:** Incident response plan: Who gets alerted at 3 AM if the service goes down or a breach occurs?
- **H5:** Production database root password is unique, strong (>= 24 chars), and stored in a password manager.
- **H6:** Multi-factor authentication (MFA) enabled on all developer, admin, GitHub, and cloud provider accounts.
- **H7:** Terms of Service and Privacy Policy published and compliant with local data protection laws (GDPR, CCPA).
- **H8:** Cookie consent banner implemented if non-essential tracking cookies or analytics are deployed.
- **H9:** User data export / account deletion (Right to be Forgotten) mechanism exists and functions.
- **H10:** AI models data privacy: Verify that customer data sent to third-party LLMs is not used for model training.
- **H11:** Test accounts, mock cards, and dummy test users removed from live production databases.
- **H12:** Custom error pages (404, 500) created without exposing server infrastructure details.
- **H13:** Uptime monitoring / status page configured (e.g. BetterStack, Pingdom, UptimeRobot).
- **H14:** Sentry / Datadog / LogRocket error alerting configured for production exception tracking.
- **H15:** Cloudflare or CDN DDoS protection, SSL/TLS full/strict encryption, and Web Application Firewall (WAF) enabled.
- **H16:** App Store / Google Play privacy labels and permissions accurately reflect app data collection.
- **H17:** Employee / contractor offboarding process verified: No lingering API tokens or repo access.
- **H18:** Final walkthrough performed on staging with exact production environment flags.
