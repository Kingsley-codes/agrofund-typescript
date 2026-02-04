// components/HeroSlideshow.tsx
"use client";

import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaCheckCircle,
  FaChartLine,
  FaTint,
  FaCalendarAlt,
  FaChartBar,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUsers,
  FaUserCheck,
  FaBolt,
  // FaSensors,
  FaIndustry,
  FaBoxOpen,
  FaSeedling,
} from "react-icons/fa";

// Type definitions
interface ButtonProps {
  text: string;
  primary: boolean;
  icon?: React.ComponentType<any>;
}

interface StatProps {
  value: string;
  label: string;
  trend?: string;
}

interface StatCardProps {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  trend?: string;
  percentage?: number;
  subtitle?: string;
  color?: string;
}

interface BadgeProps {
  icon?: React.ComponentType<any>;
  text: string;
  color?: string;
  animate?: boolean;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  badge?: BadgeProps;
  stats?: StatProps[];
  buttons: ButtonProps[];
  monitoringUI?: {
    title: string;
    subtitle: string;
    metrics?: Array<{ label: string; value: string; percentage: number }>;
    status?: string;
  };
  statsCards?: StatCardProps[];
  socialProof?: {
    text: string;
    avatars: string[];
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Own Farms. Farm Remotely.",
    subtitle:
      "Become a real farmer without stepping on the field. Own agricultural projects in Nigeria's heartlands and earn from every harvest.",
    bgImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768213215/f3tfcfmz8hotxeekiqlb.png",
    badge: {
      icon: FaShieldAlt,
      text: "Secured & Verified Farm Projects",
    },
    stats: [
      { value: "5,000+", label: "Active Farmers" },
      { value: "12,000", label: "Hectares Owned" },
      { value: "₦2.4B", label: "Harvest Returns" },
    ],
    buttons: [
      { text: "Start Farming Remotely", primary: true, icon: FaChartLine },
      { text: "View Active Farms", primary: false },
    ],
  },
  {
    id: 2,
    title: "At Agrofund Hub, You Own the Farm.",
    subtitle:
      "From planting to harvest, your farms are professionally managed while you track progress remotely. Experience the power of commercial-scale agriculture without getting your hands dirty.",
    bgImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768213423/mptkzxaetnjot7uhfxlv.png",
    badge: {
      icon: FaUserCheck,
      text: "Ownership Tier",
    },
    stats: [
      { value: "15,000+", label: "Active Acreage", trend: "+12%" },
      { value: "98.4%", label: "Ops Efficiency", trend: "Real-time" },
    ],
    buttons: [
      { text: "View Available Farms", primary: true, icon: FaChartLine },
    ],
  },
  {
    id: 3,
    title: "Monitor Your Farms in Real Time",
    subtitle:
      "Get updates, reports, and harvest timelines — all without leaving your location. Verified data from the field to your screen.",
    bgImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768213779/mnpfq3idjgfrve9grtyw.png",
    badge: {
      text: "Transparency",
    },
    statsCards: [
      {
        icon: FaChartBar,
        title: "Growth Progress",
        value: "78%",
        trend: "+12%",
        percentage: 78,
      },
      {
        icon: FaCalendarAlt,
        title: "Next Harvest",
        value: "45 Days",
        subtitle: "Projected: Oct 2026",
      },
    ],
    buttons: [
      { text: "See How It Works", primary: true },
      { text: "Play Video", primary: false, icon: FaPlay },
    ],
  },
  {
    id: 4,
    title: "Farm for Profit. Grow Food for Millions.",
    subtitle:
      "Your remote farms create jobs, strengthen food supply, and deliver sustainable income for local communities across Nigeria.",
    bgImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768213837/yvapk8gjlpc0lkzhtfk3.png",
    badge: {
      icon: FaUsers,
      text: "Social Impact Driven",
      color: "bg-[#D96C3A]",
    },
    stats: [
      { value: "200+", label: "Local Producers" },
      { value: "1,000+", label: "Jobs Created" },
      { value: "100%", label: "Local Sourcing" },
    ],
    buttons: [{ text: "Farm With Impact", primary: true }],
    socialProof: {
      text: "Join 5,000+ remote farmers",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIssT-bhGj_pcJwI2VfqibuVZ6GaosLnw2LqVwN6FbF0d5elUVlAghnUICBswpG5Belk_aBZZs9K-E0c7lpBuLq8JrpYiH_bKqpdwdhk4DHYCKwUpdpa6UbB-3gz-IeIhsWW-dG0aX3Pd3dtPpZZOQOOYmnf9YjGqUre9NrlOwYes98COCbHJPzUinL5rB3c4QF0UPhUibwpGLDhXMAhwkImmtM5QjrIwxXdD_Y6yHHJf1VV4x2FxkS-OTYCwMqA7VkrTMtDOWA33c",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDidyBdAGNJSH4j6xJo5bCnCMg9F0m0nq08l2VkTaja_6Eoq5WgbKvLTGqScHSrvEKly6-R6T-VrwSWU7F6BsqP9tHLRmdIOwc4S5hdsetB046e_DPtc8NO0FwdRpZCyag3qi8tNroPMnpDpACJiX2T1ApL049c6ZmB_jCXrpgAm8EpVO-XqFF67lb9geH-_7QL-eYgITAAnb2SgVNQgKiEDzK40-TmQgBj_Jd58SuQ_WGNBTnsTxtyiAVODd1vBlemcGoYyv5mFN",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUD02SFGER4kHv3OWAmmzZ8Q-es1ZhOu7GdhxDcvmSo9GXJo1ZyQrFEt4jo_ZfLNdSTvRBVvV-dSZkGKRA8PDkbqltG-unZK_ym_gmlunbU_Kh2Cj8-RTufJK3q0q8gaOaixSeLaduunkkqhku2OsH0dLX59KbUdxUpEhPl7sVR5aovFCmDqApuhvY6q1sTfLSQNHxWE6LKYijvvjTnL0nrLMtmvDSOBxpkn7kTBMFm9wv1X88WShnn9xsinXGu19phI-6y1ysF8Ix",
      ],
    },
  },
  {
    id: 5,
    title: "Earn From Every Harvest Cycle.",
    subtitle:
      "Structured farming projects with clear timelines, realistic yields, and shared success. From yams to maize, we bridge the gap between rural bounty and urban ownership.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaGzTc4uLtjnogTXxRMYZiMn8126RQ5cw4wxWgGiO3WZjtA0u4uuQDiqWpGqKpDVgyrexiroNhUreGqwFgv8pyxMffK_FW05DC592s2ZdY6ya9DeZQPu-htLWi8XNpOaiCIfQuoXQdW51NLcRMxluTXk3qR_QZJ9Q44B6Hx_3tW9GvhBV7jg7UJMc9P4p23YmSDqq6DLQZDJKvYkxExUE45Dc_hY-_8Bsh0gdHyEzRBW-4KZxYFmfInuHN0--4WZ0r9cezs3yY5G7D",
    badge: {
      icon: FaCheckCircle,
      text: "Harvest Season Active",
      color: "bg-[#D96C3A]/90",
      animate: true,
    },
    statsCards: [
      {
        icon: FaChartBar,
        title: "Avg. Yield Increase",
        value: "+25%",
        color: "text-[#1a6b41]",
      },
      {
        icon: FaBoxOpen,
        title: "Bags Harvested",
        value: "10,000+",
        color: "text-[#B89C5C]",
      },
    ],
    buttons: [
      { text: "Join as a Remote Farmer", primary: true, icon: FaChartLine },
      { text: "View Live Stats", primary: false },
    ],
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(19, 31, 25, 0.9) 0%, rgba(19, 31, 25, 0.4) 50%, rgba(19, 31, 25, 0.1) 100%), url(${slide.bgImage})`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          {slide.badge && (
            <div
              className={`inline-flex items-center gap-2 ${
                slide.badge.color || "bg-white/10"
              } text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${
                slide.badge.animate ? "animate-pulse" : ""
              } backdrop-blur-md border border-white/20`}
            >
              {slide.badge.icon && <slide.badge.icon className="w-4 h-4" />}
              <span>{slide.badge.text}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
            {slide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {slide.buttons.map((button, index) => (
              <button
                key={index}
                className={`flex items-center justify-center gap-2 h-14 px-8 rounded-xl font-bold text-lg transition-all ${
                  button.primary
                    ? "bg-[#1a6b41] text-white hover:bg-[#1a6b41]/90 shadow-lg shadow-[#1a6b41]/30 hover:scale-[1.02]"
                    : "border-2 border-white/20 text-white hover:border-white/40 backdrop-blur-md"
                }`}
              >
                {button.icon && <button.icon className="w-5 h-5" />}
                <span>{button.text}</span>
              </button>
            ))}
          </div>

          {/* Stats Section - Slide 1 */}
          {slide.stats && (
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {slide.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-white text-2xl font-bold">{stat.value}</p>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-widest">
                    {stat.label}
                  </p>
                  {stat.trend && (
                    <div className="flex items-center gap-1 text-[#07882c] text-sm font-bold mt-1">
                      <FaChartLine className="w-4 h-4" />
                      <span>{stat.trend}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Monitoring UI - Slide 2 */}
          {slide.monitoringUI && (
            <div className="absolute top-10 right-10 p-6 bg-white/90 backdrop-blur rounded-2xl border border-white/20 shadow-2xl max-w-[280px] hidden lg:block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#1a6b41] tracking-widest">
                    {slide.monitoringUI.title}
                  </p>
                  <h3 className="text-sm font-bold">
                    {slide.monitoringUI.subtitle}
                  </h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              </div>
            </div>
          )}

          {/* Stats Cards - Slide 3 & 5 */}
          {slide.statsCards && (
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              {slide.statsCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl w-64 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white/70 text-xs font-medium uppercase">
                      {card.title}
                    </p>
                    {card.icon && (
                      <card.icon
                        className={`w-5 h-5 ${card.color || "text-[#1a6b41]"}`}
                      />
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p
                      className={`text-white text-3xl font-black ${
                        card.color || ""
                      }`}
                    >
                      {card.value}
                    </p>
                    {card.trend && (
                      <p className="text-[#1a6b41] text-sm font-bold">
                        {card.trend}
                      </p>
                    )}
                  </div>
                  {card.subtitle && (
                    <p className="text-white/60 text-sm mt-1">
                      {card.subtitle}
                    </p>
                  )}
                  {card.percentage !== undefined && (
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-4 overflow-hidden">
                      <div
                        className="bg-[#1a6b41] h-full rounded-full"
                        style={{ width: `${card.percentage}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Social Proof - Slide 4 */}
          {slide.socialProof && (
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-3">
                {slide.socialProof.avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-[#131f19] bg-cover bg-center"
                    style={{ backgroundImage: `url(${avatar})` }}
                  ></div>
                ))}
              </div>
              <p className="text-white/80 text-sm font-medium">
                {slide.socialProof.text}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-2 rounded-full bg-[#1a6b41] shadow-[0_0_12px_rgba(26,107,65,0.8)]"
                  : "w-2 h-2 rounded-full bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
