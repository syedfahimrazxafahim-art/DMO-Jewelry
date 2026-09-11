import React, { useState } from 'react';
import { Star, MessageSquarePlus, Check } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
}

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceType, setServiceType] = useState('Jewelry Purchase');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      rating,
      service: serviceType,
      comment: comment.trim(),
      date: 'Just now',
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setComment('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#080808] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#050505] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Client Feedback &amp; Experiences
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            CLIENT <span className="gold-text-gradient">TESTIMONIALS</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            We value genuine client relationships and transparent transactions. Share your experience with DMO Jewelry or review verified client feedback below.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#151515] hover:bg-[#202020] text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] font-serif text-xs uppercase tracking-[0.15em] transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{showForm ? 'Close Review Form' : 'Write A Review'}</span>
            </button>
          </div>
        </div>

        {/* Review Submission Form */}
        {showForm && (
          <div className="max-w-xl mx-auto mb-16 bg-[#121212] border border-[#D4AF37]/40 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-4 text-center">
              Share Your DMO Jewelry Experience
            </h3>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <p className="font-serif text-white text-base">Thank you for your review!</p>
                <p className="text-neutral-400 text-xs">Your feedback has been added to the client showcase.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="review-author" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Marcus V."
                    className="w-full bg-[#080808] border border-neutral-800 focus:border-[#D4AF37] px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="review-rating" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-1">
                      Rating
                    </label>
                    <select
                      id="review-rating"
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full bg-[#080808] border border-neutral-800 focus:border-[#D4AF37] px-4 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value={5}>★★★★★ (5 Stars)</option>
                      <option value={4}>★★★★☆ (4 Stars)</option>
                      <option value={3}>★★★☆☆ (3 Stars)</option>
                      <option value={2}>★★☆☆☆ (2 Stars)</option>
                      <option value={1}>★☆☆☆☆ (1 Star)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="review-service" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-1">
                      Service Experience
                    </label>
                    <select
                      id="review-service"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-[#080808] border border-neutral-800 focus:border-[#D4AF37] px-4 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="Jewelry Purchase">Jewelry Purchase</option>
                      <option value="Sold Gold / Bullion">Sold Gold / Bullion</option>
                      <option value="Diamond Setting">Diamond Setting</option>
                      <option value="Luxury Watch">Luxury Watch</option>
                      <option value="Showroom Consultation">Showroom Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="review-comment" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-1">
                    Your Review
                  </label>
                  <textarea
                    id="review-comment"
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts on the service, pieces, and showroom experience..."
                    className="w-full bg-[#080808] border border-neutral-800 focus:border-[#D4AF37] px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div
                key={r.id}
                className="bg-[#121212] border border-[#D4AF37]/20 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-neutral-200 text-sm italic mb-4">
                    "{r.comment}"
                  </p>
                </div>
                <div className="border-t border-neutral-900 pt-4 flex justify-between items-center text-xs">
                  <span className="font-serif text-white uppercase tracking-wider">{r.author}</span>
                  <span className="text-neutral-400">{r.service}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 px-6 bg-[#101010] border border-neutral-900">
              <div className="max-w-md mx-auto space-y-3">
                <Star className="w-8 h-8 text-[#D4AF37] mx-auto opacity-70" />
                <h4 className="text-base font-serif uppercase tracking-wider text-white">
                  Be The First To Review In This Session
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  In adherence to authentic review standards, all reviews shown here are genuine user-submitted testimonials. Click "Write A Review" above to leave your feedback.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
