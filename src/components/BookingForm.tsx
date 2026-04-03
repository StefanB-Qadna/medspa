"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Loader2 } from "lucide-react";

const colors = {
  cream: "#FDFBF7",
  linen: "#F0E6D8",
  brass: "#B08D57",
  brassHover: "#9A7A48",
  warmDark: "#3D3530",
  surface: "rgba(253,251,247,0.06)",
  surfaceHover: "rgba(253,251,247,0.1)",
  border: "rgba(253,251,247,0.12)",
  muted: "rgba(253,251,247,0.5)",
};

const treatmentOptions = [
  "Neuromodulators (Botox, Dysport, Daxxify)",
  "Dermal Fillers",
  "Lip Enhancement",
  "Skin Boosters & Biostimulators",
  "Hydrafacial",
  "Laser Rejuvenation",
  "Chemical Peels",
  "Microneedling",
  "Microneedling + PRP",
  "Laser Hair Removal",
  "Body Contouring",
  "IV Therapy",
  "Medical Weight Management",
  "Not sure yet — I need guidance",
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  treatment?: string;
}

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    const parts = [match[1], match[2], match[3]].filter(Boolean);
    if (parts.length === 0) return "";
    if (parts.length === 1) return `(${parts[0]}`;
    if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  }
  return value;
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10;
};

const isDateUnavailable = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return true;
  if (date.getDay() === 0) return true;
  const dateNum = date.getDate();
  return dateNum % 5 === 0 || dateNum % 7 === 0;
};

const isTimeSlotBooked = (date: Date, timeSlot: string): boolean => {
  const hash = date.getDate() + timeSlot.charCodeAt(0);
  return hash % 5 < 2;
};

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          background: colors.surface,
          border: `0.5px solid ${error ? "#E07070" : colors.border}`,
          borderRadius: "8px",
          padding: "14px 16px",
          fontFamily: "var(--font-jost), sans-serif",
          fontSize: "0.9375rem",
          color: value ? colors.cream : "rgba(253,251,247,0.35)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          outline: "none",
        }}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          size={16}
          style={{
            color: colors.muted,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              background: colors.cream,
              border: "0.5px solid rgba(61,53,48,0.15)",
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              maxHeight: "240px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                style={{
                  padding: "11px 16px",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "0.9rem",
                  color: colors.warmDark,
                  cursor: "pointer",
                  background: value === option ? colors.linen : colors.cream,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.linen;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    value === option ? colors.linen : colors.cream;
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <div
          style={{
            fontFamily: "var(--font-jost), sans-serif",
            fontSize: "0.75rem",
            color: "#E07070",
            marginTop: "4px",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

function Calendar({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    if (today.getDate() > 20) {
      return new Date(today.getFullYear(), today.getMonth() + 1, 1);
    }
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const dayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
            )
          }
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: colors.muted,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.brass;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.muted;
          }}
        >
          <ChevronDown size={20} style={{ transform: "rotate(90deg)" }} />
        </button>
        <div
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: colors.cream,
          }}
        >
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
            )
          }
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: colors.muted,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.brass;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.muted;
          }}
        >
          <ChevronDown size={20} style={{ transform: "rotate(-90deg)" }} />
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        {dayLabels.map((day) => (
          <div
            key={day}
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(253,251,247,0.4)",
              textAlign: "center",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
        }}
      >
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day
          );
          const isUnavailable = isDateUnavailable(date);
          const isSelected =
            selectedDate &&
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          return (
            <button
              key={day}
              onClick={() => !isUnavailable && onSelectDate(date)}
              disabled={isUnavailable}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: isSelected ? colors.brass : "transparent",
                color: isUnavailable
                  ? "rgba(253,251,247,0.2)"
                  : isSelected
                  ? colors.cream
                  : "rgba(253,251,247,0.75)",
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "0.875rem",
                fontWeight: isSelected ? 500 : 400,
                cursor: isUnavailable ? "not-allowed" : "pointer",
                textDecoration: isToday && !isSelected ? "underline" : "none",
                textDecorationColor: colors.brass,
              }}
              onMouseEnter={(e) => {
                if (!isUnavailable && !isSelected) {
                  e.currentTarget.style.background = "rgba(176,141,87,0.2)";
                  e.currentTarget.style.color = colors.cream;
                }
              }}
              onMouseLeave={(e) => {
                if (!isUnavailable && !isSelected) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(253,251,247,0.75)";
                }
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onSelectTime,
}: {
  selectedDate: Date;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}) {
  const formatDate = (date: Date): string => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{ marginTop: "24px" }}
    >
      <div
        style={{
          fontFamily: "var(--font-jost), sans-serif",
          fontSize: "0.68rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(253,251,247,0.6)",
          marginBottom: "12px",
        }}
      >
        Available times for {formatDate(selectedDate)}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
        }}
      >
        {timeSlots.map((slot) => {
          const isBooked = isTimeSlotBooked(selectedDate, slot);
          const isSelected = selectedTime === slot;

          return (
            <button
              key={slot}
              onClick={() => !isBooked && onSelectTime(slot)}
              disabled={isBooked}
              style={{
                background: isSelected ? colors.brass : colors.surface,
                border: `0.5px solid ${isSelected ? colors.brass : colors.border}`,
                borderRadius: "6px",
                padding: "8px 0",
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "0.8rem",
                fontWeight: isSelected ? 500 : 400,
                color: isBooked
                  ? "rgba(253,251,247,0.3)"
                  : isSelected
                  ? colors.cream
                  : "rgba(253,251,247,0.75)",
                cursor: isBooked ? "not-allowed" : "pointer",
                textDecoration: isBooked ? "line-through" : "none",
                opacity: isBooked ? 0.3 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isBooked && !isSelected) {
                  e.currentTarget.style.borderColor = colors.brass;
                  e.currentTarget.style.color = colors.cream;
                  e.currentTarget.style.background = "rgba(176,141,87,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isBooked && !isSelected) {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.color = "rgba(253,251,247,0.75)";
                  e.currentTarget.style.background = colors.surface;
                }
              }}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

const inputStyle = (hasError: boolean) => ({
  width: "100%",
  background: colors.surface,
  border: `0.5px solid ${hasError ? "#E07070" : colors.border}`,
  borderRadius: "8px",
  padding: "14px 16px",
  fontFamily: "var(--font-jost), sans-serif",
  fontSize: "0.9375rem",
  color: colors.cream,
  outline: "none",
});

const labelStyle = {
  fontFamily: "var(--font-jost), sans-serif",
  fontSize: "0.68rem",
  fontWeight: 500 as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "rgba(253,251,247,0.6)",
  display: "block" as const,
  marginBottom: "6px",
};

const errorStyle = {
  fontFamily: "var(--font-jost), sans-serif",
  fontSize: "0.75rem",
  color: "#E07070",
  marginTop: "4px",
};

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "phone") {
      setFormData({ ...formData, [field]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters)";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0];
      setShakeField(firstError);
      setTimeout(() => setShakeField(null), 300);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm() || !selectedDate || !selectedTime) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const isFormComplete =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.treatment &&
    selectedDate &&
    selectedTime;

  if (isSuccess) {
    return (
      <section
        id="book"
        style={{
          background: colors.warmDark,
          padding: "80px 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            style={{ marginBottom: "24px" }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              style={{ margin: "0 auto", display: "block" }}
            >
              <circle cx="32" cy="32" r="30" stroke={colors.brass} strokeWidth="2" />
              <motion.path
                d="M20 32L28 40L44 24"
                stroke={colors.brass}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </svg>
          </motion.div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "2.2rem",
              fontWeight: 400,
              color: colors.cream,
              marginBottom: "16px",
            }}
          >
            You&apos;re confirmed.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.95rem",
              color: colors.muted,
              marginBottom: "24px",
              lineHeight: 1.6,
            }}
          >
            We&apos;ve received your request for{" "}
            {selectedDate?.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}{" "}
            at {selectedTime} for {formData.treatment}. Dr. Robledo&apos;s team
            will reach out within 24 hours to confirm your visit.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.85rem",
              color: "rgba(253,251,247,0.45)",
            }}
          >
            (469) 397-0434 · admin@rejuvenateandrefine.com
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="book" style={{ background: colors.warmDark, padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: colors.brass,
              marginBottom: "12px",
            }}
          >
            Reserve Your Visit
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 400,
              color: colors.cream,
              marginBottom: "12px",
            }}
          >
            Book a complimentary consultation.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.9rem",
              color: "rgba(253,251,247,0.65)",
            }}
          >
            No commitment, no pressure. Dr. Robledo will personally review your
            goals before your visit.
          </p>
        </div>

        <div
          className="booking-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
        >
          {/* Left: Form fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <motion.input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                animate={shakeField === "fullName" ? { x: [-6, 6, -6, 6, 0] } : {}}
                transition={{ duration: 0.3 }}
                style={inputStyle(!!errors.fullName)}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.brass;
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(176,141,87,0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.fullName ? "#E07070" : colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {errors.fullName && <div style={errorStyle}>{errors.fullName}</div>}
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <motion.input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                animate={shakeField === "email" ? { x: [-6, 6, -6, 6, 0] } : {}}
                transition={{ duration: 0.3 }}
                style={inputStyle(!!errors.email)}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.brass;
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(176,141,87,0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.email ? "#E07070" : colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>

            <div>
              <label style={labelStyle}>Phone Number</label>
              <motion.input
                type="tel"
                placeholder="(000) 000-0000"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                animate={shakeField === "phone" ? { x: [-6, 6, -6, 6, 0] } : {}}
                transition={{ duration: 0.3 }}
                style={inputStyle(!!errors.phone)}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.brass;
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(176,141,87,0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.phone ? "#E07070" : colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
            </div>

            <motion.div
              animate={shakeField === "treatment" ? { x: [-6, 6, -6, 6, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <label style={labelStyle}>Treatment Interest</label>
              <CustomSelect
                value={formData.treatment}
                onChange={(value) => handleInputChange("treatment", value)}
                options={treatmentOptions}
                placeholder="Select a treatment"
                error={errors.treatment}
              />
            </motion.div>
          </div>

          {/* Right: Calendar + Time slots */}
          <div>
            <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            {selectedDate && (
              <TimeSlotPicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />
            )}
          </div>
        </div>

        {/* Summary bar */}
        <AnimatePresence>
          {isFormComplete && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                marginTop: "32px",
                background: "rgba(176,141,87,0.12)",
                border: "0.5px solid rgba(176,141,87,0.3)",
                borderRadius: "8px",
                padding: "12px 20px",
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "0.82rem",
                color: "rgba(253,251,247,0.75)",
                overflow: "hidden",
              }}
            >
              {formData.fullName} <span style={{ color: colors.brass }}>·</span>{" "}
              {formData.treatment} <span style={{ color: colors.brass }}>·</span>{" "}
              {selectedDate?.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}{" "}
              <span style={{ color: colors.brass }}>·</span> {selectedTime}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button */}
        <div style={{ marginTop: "32px" }}>
          <button
            onClick={handleSubmit}
            disabled={!isFormComplete || isSubmitting}
            style={{
              width: "100%",
              background: colors.brass,
              opacity: isFormComplete && !isSubmitting ? 1 : 0.45,
              color: colors.cream,
              border: "none",
              borderRadius: "8px",
              padding: "16px 32px",
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              cursor: isFormComplete && !isSubmitting ? "pointer" : "not-allowed",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              if (isFormComplete && !isSubmitting) {
                e.currentTarget.style.background = colors.brassHover;
              }
            }}
            onMouseLeave={(e) => {
              if (isFormComplete && !isSubmitting) {
                e.currentTarget.style.background = colors.brass;
              }
            }}
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            {isSubmitting ? "Sending..." : "Reserve My Consultation"}
          </button>
          <p
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "0.78rem",
              color: "rgba(253,251,247,0.45)",
              textAlign: "center",
              marginTop: "14px",
            }}
          >
            Complimentary for new patients. Dr. Robledo personally reviews every
            consultation request before confirming.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .booking-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .booking-grid > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
