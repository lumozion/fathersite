import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Amit Kumar",
      rating: 5,
      text: "Excellent quality transformers and professional service. Rajesh ji delivered exactly what we needed for our industrial setup.",
      date: "2 months ago"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Very reliable and efficient service. The control transformers are working perfectly in our automation system.",
      date: "3 months ago"
    },
    {
      name: "Vikash Singh",
      rating: 5,
      text: "Great experience with S.R. Electronics. Quality products and timely delivery. Highly recommended!",
      date: "4 months ago"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#fffef8] to-[#f8f6f0]">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">What Our Customers Say</h2>
          <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our transformer solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="backdrop-blur-md bg-white/20 p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A572] text-[#C5A572]" />
                ))}
              </div>
              <p className="text-[#1a1a1a] mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1a1a1a]">{review.name}</p>
                  <p className="text-sm text-[#8a8a8a]">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://share.google/ZJiomWH6UULgktfGr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#4285f4] text-white px-8 py-4 rounded-full hover:bg-[#3367d6] transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View All Google Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;