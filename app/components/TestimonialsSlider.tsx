'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Patel',
    location: 'Ahmedabad',
    service: 'Car Transport',
    rating: 5,
    text: 'Exceptional service! My car was transported from Ahmedabad to Mumbai without a single scratch. The team was professional, punctual, and kept me updated throughout. Will definitely use again.',
    initials: 'RP',
    color: '#1a365d',
  },
  {
    name: 'Priya Sharma',
    location: 'Surat → Ahmedabad',
    service: 'Door-to-Door',
    rating: 5,
    text: 'Carry Pack Logistics made our home relocation completely stress-free. They packed everything with such care — even our fragile items arrived perfectly safe. The pricing was transparent with zero hidden charges.',
    initials: 'PS',
    color: '#c8a951',
  },
  {
    name: 'Amit Desai',
    location: 'Ahmedabad',
    service: 'Warehouse Solutions',
    rating: 5,
    text: 'We have been using their warehouse for over 8 months. The facility is immaculate, well-organised, and the team is always responsive. Best logistics partner we have had for our business.',
    initials: 'AD',
    color: '#1a365d',
  },
  {
    name: 'Sunita Mehta',
    location: 'Ahmedabad → Delhi',
    service: 'Separate Vehicle',
    rating: 5,
    text: 'Booked a dedicated truck for our office relocation. Everything reached on time, nothing was damaged. The driver was courteous and communication was excellent. Highly recommended!',
    initials: 'SM',
    color: '#c8a951',
  },
  {
    name: 'Ketan Shah',
    location: 'Ahmedabad',
    service: 'Bike Transport',
    rating: 5,
    text: 'Sent my Royal Enfield from Ahmedabad to Bangalore. Bike was packed professionally and delivered on the promised date. The tracking updates gave me real peace of mind.',
    initials: 'KS',
    color: '#1a365d',
  },
  {
    name: 'Nidhi Joshi',
    location: 'Vadodara → Ahmedabad',
    service: 'Sharing Vehicle',
    rating: 5,
    text: 'Great value for money with the shared vehicle service. My goods were handled with the same care as a dedicated vehicle. The staff was helpful and responsive throughout.',
    initials: 'NJ',
    color: '#c8a951',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[#c8a951] fill-[#c8a951]" />
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = reviews.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + dir + total) % total);
        setAnimating(false);
      }, 250);
    },
    [animating, total]
  );

  // Auto-play every 5 s
  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  // Visible indices: prev, active, next (desktop shows 3)
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <div className="select-none">
      {/* Desktop — 3 cards side by side */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {[prev, active, next].map((idx, pos) => {
          const r = reviews[idx];
          const isCenter = pos === 1;
          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-7 border transition-all duration-500 flex flex-col ${
                isCenter
                  ? 'border-[#c8a951]/50 shadow-xl scale-[1.02] z-10'
                  : 'border-gray-200 shadow-md opacity-70 scale-[0.97]'
              }`}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-4 flex-shrink-0"
                style={{ color: isCenter ? '#c8a951' : '#d1d5db' }}
              />

              {/* Stars */}
              <StarRating count={r.rating} />

              {/* Text */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-[#f8f9fc] text-gray-400 border border-gray-100">
                  {r.service}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile — single card */}
      <div className="md:hidden">
        <div
          className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-lg transition-opacity duration-250 ${
            animating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Quote size={26} className="text-[#c8a951] mb-3" />
          <StarRating count={reviews[active].rating} />
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            &ldquo;{reviews[active].text}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: reviews[active].color }}
            >
              {reviews[active].initials}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{reviews[active].name}</p>
              <p className="text-xs text-gray-400">{reviews[active].location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#1a365d] hover:text-[#1a365d] transition-all shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!animating) { setAnimating(true); setTimeout(() => { setActive(i); setAnimating(false); }, 250); } }}
              aria-label={`Go to review ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '20px' : '7px',
                height: '7px',
                background: i === active ? '#1a365d' : '#d1d5db',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#1a365d] hover:text-[#1a365d] transition-all shadow-sm"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
