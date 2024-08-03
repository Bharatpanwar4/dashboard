import { CircleUserRound } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface AvatarProps {
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ size = 50 }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchRandomAvatar = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const avatarUrl = data.results[0].picture.thumbnail;
        setImageUrl(avatarUrl);
      } catch (error) {
        console.error('Error fetching random avatar:', error);
      }
    };

    fetchRandomAvatar();
  }, []);

  if (!imageUrl) {
    return   <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
        <CircleUserRound  className="xl:w-5 xl:h-5 w-4 h-4"/>
    </div> 
  }

  return (
    <img
      src={imageUrl}
      alt="Random Avatar"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
};

export default Avatar;
