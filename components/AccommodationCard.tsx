import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Accommodation {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image 
          src={accommodation.image} 
          alt={accommodation.title} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gentle-brown">{accommodation.title}</h3>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span className="ml-1 text-gray-700">{accommodation.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mt-2">{accommodation.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gentle-brown">${accommodation.price}<span className="text-sm font-normal"> / 晚</span></span>
          <button className="bg-gentle-brown hover:bg-warm-sand text-white px-4 py-2 rounded-lg transition duration-300">
            查看詳情
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;