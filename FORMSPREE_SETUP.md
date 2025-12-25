# إعداد Formspree

## خطوات الإعداد:

### 1. إنشاء حساب في Formspree
- اذهب إلى [https://formspree.io](https://formspree.io)
- اضغط على "Sign Up" لإنشاء حساب مجاني
- سجل دخولك

### 2. إنشاء Form جديد
- بعد تسجيل الدخول، اضغط على "New Form"
- اختر "Email" كطريقة الاستلام
- أدخل الإيميل: `shababalkhair06@gmail.com`
- اضغط على "Create Form"

### 3. الحصول على Form ID
- بعد إنشاء الـ Form، ستجد Form ID في الصفحة
- سيبدو مثل: `xpzgkqyz` أو `abc123def`
- انسخ هذا الـ ID

### 4. تحديث الكود
- افتح ملف `src/config/formspree.js`
- استبدل `YOUR_FORM_ID` بـ Form ID الذي نسخته
- مثال: `'https://formspree.io/f/xpzgkqyz'`

### 5. اختبار النموذج
- افتح الموقع
- املأ النموذج واضغط "إرسال"
- تحقق من وصول الإيميل إلى `shababalkhair06@gmail.com`

## ملاحظات:
- الخطة المجانية تسمح بـ 50 إرسال شهرياً
- يمكنك ترقية الخطة لزيادة الحد
- جميع البيانات تُرسل مباشرة إلى الإيميل المحدد

