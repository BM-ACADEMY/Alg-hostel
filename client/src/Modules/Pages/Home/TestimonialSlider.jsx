import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react'; // Import Lucide Quote icon

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import your background image
import bgBanner from '@/assets/testimonial-bg.png'; // Ensure this path is correct
// Import a common avatar image
import defaultAvatar from '@/assets/girl.png'; 

const testimonials = [
  {
    id: 1,
    name: "Lakshmi priya",
    rating: 5,
    text: "I was looking for a clean and comfortable hostel for the past 5 months. A friend told me about ALG ladies hostel. After staying in ALG, I felt like my home, the staff was very friendly, the food was delicious, the rooms were very neat and tidy.",
  },
  {
    id: 2,
    name: "Divya dharshini",
    rating: 5,
    text: "Great location just beside the biggest city attractions, nice breakfast, friendly warden who is always there to help. The cleaning ladies were also kind and polite. Definitely recommended.",
  },
  {
    id: 3,
    name: "Ashwini",
    rating: 5,
    text: "ALG ladies hostel is one of the best accommodation for ladies staying out in Peelamedu. The staffs are very comfortable & friendly, I suggest ALG ladies hostel. Good place to stay.",
  },
  {
    id: 4,
    name: "Priya Dharshini",
    rating: 5,
    text: "Clean rooms and very good management. Highly recommended for students.",
  },
  {
    id: 5,
    name: "Sneha",
    rating: 5,
    text: "Safe environment for girls and the food quality is better than most hostels in this area.",
  }
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section 
      className="relative w-full py-24 bg-gray-900 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      {/* Dark Overlay to make text readable over the background image */}
      <div className="absolute inset-0 bg-black/1 "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-3"
          >
            ALG Ladies Hostel
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#004d5a]"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper !pb-24" 
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl relative flex flex-col h-full w-full border border-white/20 transition-transform duration-300">
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar Image Component */}
                    <div className="w-17 h-17 rounded-2xl overflow-hidden">
                        <img 
                          src={defaultAvatar} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 leading-tight">
                            {item.name}
                        </h4>
                        <div className="flex gap-0.5 mt-1">
                            {[...Array(item.rating)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                    </div>
                  </div>
                  <Quote className="text-[#6a72828e] w-10 h-10 -mt-2" fill="currentColor" />
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow italic">
                  "{item.text}"
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* Ensures cards in the same row stay equal height */
        .swiper-wrapper {
          display: flex !important;
        }

        /* Positions pagination dots lower down to prevent overlap */
        .testimonial-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        /* Customizes dot colors */
        .testimonial-swiper .swiper-pagination-bullet {
          background: black !important;
          width: 10px;
          height: 10px;
          opacity: 1;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #004d5a !important; /* Amber-500 */
          width: 25px;
          border-radius: 5px;
        }
      `}} />
    </section>
  );
};

export default Testimonials;