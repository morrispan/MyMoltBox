import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { StarIcon, MapPinIcon, WifiIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { accommodationsData, Accommodation } from '../../data/accommodations';

const AccommodationDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [accommodation, setAccommodation] = useState<Accommodation | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const accId = parseInt(Array.isArray(id) ? id[0] : id);
      const found = accommodationsData.find(acc => acc.id === accId);
      setAccommodation(found);
    }
  }, [id]);

  if (!accommodation) {
    return (
      <div className="min-h-screen bg-soft-cream flex items-center justify-center">
        <p className="text-gentle-brown text-xl">載入中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-cream">
      <Head>
        <title>{accommodation.title} - MyMoltBox</title>
        <meta name="description" content={accommodation.description} />
      </Head>

      {/* 導航欄 */}
      <nav className="bg-warm-ivory shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gentle-brown flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="font-semibold text-gentle-brown">MyMoltBox</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="/" className="text-gentle-brown hover:text-warm-sand font-medium">首頁</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">民宿</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">我的訂單</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">登入</a>
        </div>
      </nav>

      {/* 民宿圖片區域 */}
      <section className="relative h-96 w-full">
        <Image 
          src={accommodation.image} 
          alt={accommodation.title} 
          layout="fill" 
          objectFit="cover"
        />
      </section>

      {/* 民宿資訊 */}
      <section className="max-w-7xl mx-auto py-12 px-6 -mt-24 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gentle-brown mb-2">{accommodation.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-gray-700">{accommodation.rating}</span>
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <span>台灣 台北</span>
                </div>
              </div>
            </div>
            <div className="bg-warm-beige rounded-lg p-4">
              <p className="text-center text-gentle-brown font-bold">NT${accommodation.price}<span className="text-sm font-normal"> / 晚</span></p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 民宿描述 */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gentle-brown mb-4">民宿描述</h2>
              <p className="text-gray-700 mb-6">{accommodation.description}</p>

              <h3 className="text-lg font-semibold text-gentle-brown mb-3">設備與服務</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <WifiIcon className="h-5 w-5 text-gentle-brown mr-2" />
                  <span>免費 WiFi</span>
                </div>
                <div className="flex items-center">
                  <HomeIcon className="h-5 w-5 text-gentle-brown mr-2" />
                  <span>廚房設備</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-gentle-brown mr-2" />
                  <span>可容納 4 人</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gentle-brown mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>空調系統</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gentle-brown mb-3">房源介紹</h3>
              <p className="text-gray-700 mb-6">
                這間溫馨的民宿位於寧靜的社區中，距離當地市場和餐廳只需步行5分鐘。空間寬敞明亮，裝潢採用溫暖的木質調，營造出家的感覺。
                客廳配有舒適的沙發和大螢幕電視，廚房設備齊全，適合自炊。臥室配有高品質床墊，確保您一夜好眠。
              </p>
            </div>

            {/* 預訂表單 */}
            <div className="bg-light-beige rounded-xl p-6 h-fit">
              <h3 className="text-xl font-semibold text-gentle-brown mb-4">預訂住宿</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">入住日期</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">退房日期</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">房客人數</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent">
                  <option>1 位房客</option>
                  <option>2 位房客</option>
                  <option>3 位房客</option>
                  <option>4 位房客</option>
                  <option>5+ 位房客</option>
                </select>
              </div>
              
              <div className="mb-4 p-4 bg-warm-ivory rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>${accommodation.price} x 2 晚</span>
                  <span>$5,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>清潔費</span>
                  <span>$500</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>總計</span>
                  <span>NT$5,500</span>
                </div>
              </div>
              
              <button className="w-full bg-gentle-brown hover:bg-warm-sand text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                立即預訂
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 相關推薦 */}
      <section className="py-12 px-6 bg-light-beige">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gentle-brown mb-8">你可能也喜歡</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationsData
              .filter(acc => acc.id !== accommodation.id)
              .slice(0, 3)
              .map((acc) => (
                <div key={acc.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-40">
                    <Image 
                      src={acc.image} 
                      alt={acc.title} 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gentle-brown">{acc.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">★ {acc.rating}</span>
                      <span className="font-bold text-gentle-brown">${acc.price}/晚</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationDetail;