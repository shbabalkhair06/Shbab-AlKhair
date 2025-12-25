import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function JoinUs() {
  const { language } = useContext(LanguageContext);
  const joinContent = content[language].join;
  const formContent = joinContent.form;

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    city: '',
    email: '',
    experience: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.age.trim()) {
      newErrors.age = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }
    if (!formData.reason.trim()) {
      newErrors.reason = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid - in production, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        age: '',
        phone: '',
        city: '',
        email: '',
        experience: '',
        reason: '',
      });
      setErrors({});
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="pt-24 section-padding bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            {joinContent.success}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <SectionTitle
          title={joinContent.title}
          subtitle={joinContent.subtitle}
        />

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.fullName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.age} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.phone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.city} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.experience}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="yes"
                      checked={formData.experience === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {formContent.yes}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="no"
                      checked={formData.experience === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {formContent.no}
                  </label>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {formContent.reason} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                {formContent.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

