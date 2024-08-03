import React from 'react';
import { Star, StarHalf, Star as StarEmpty } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className='flex items-center gap-1'>
      {Array(fullStars).fill(<Star className='text-[#F9D826] fill-[#F9D826] w-4 h-4' />)}
      {halfStars === 1 && <StarHalf className='text-[#F9D826] fill-[#F9D826] w-4 h-4' />}
      {Array(emptyStars).fill(<StarEmpty className='text-[#DBDBDD] fill-[#DBDBDD] w-4 h-4'  />)}
    </div>
  );
};

export default StarRating;
