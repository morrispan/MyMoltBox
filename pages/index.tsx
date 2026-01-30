import Head from 'next/head';
import Image from 'next/image';
import AccommodationCard from '../components/AccommodationCard';
import { accommodationsData } from '../data/accommodations';

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Head>
        <title>MyMoltBox - 民宿訂房</title>
        <meta name="description" content="溫馨舒適的民宿訂房平台" />
        <link rel="icon" href="/favicon.ico" />
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
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">首頁</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">民宿</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">我的訂單</a>
          <a href="#" className="text-gentle-brown hover:text-warm-sand font-medium">登入</a>
        </div>
      </nav>

      {/* Hero 區域 */}
      <section className="py-16 px-6 bg-warm-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gentle-brown mb-6">
              發現溫馨的<br />民宿體驗
            </h1>
            <p className="text-lg text-gentle-brown mb-8">
              在 MyMoltBox 找到完美的住宿，享受家一般的溫暖與舒適。
            </p>
            
            {/* 搜索框 */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">目的地</label>
                  <input 
                    type="text" 
                    placeholder="搜尋地點..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">入住日期</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">退房日期</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">房客人數</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gentle-brown focus:border-transparent">
                    <option>1 位房客</option>
                    <option>2 位房客</option>
                    <option>3 位房客</option>
                    <option>4 位房客</option>
                    <option>5+ 位房客</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-gentle-brown hover:bg-warm-sand text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                搜尋民宿
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/placeholder-home.jpg" 
                alt="溫馨民宿" 
                layout="fill" 
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特色民宿 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gentle-brown mb-12 text-center">精選民宿</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodationsData.map((accommodation) => (
              <AccommodationCard 
                key={accommodation.id} 
                accommodation={accommodation} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 如何使用 */}
      <section className="py-16 px-6 bg-light-beige">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gentle-brown mb-12 text-center">輕鬆三步驟完成訂房</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gentle-brown rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gentle-brown mb-2">選擇地點</h3>
              <p className="text-gray-600">輸入目的地和入住日期，找到理想的民宿</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gentle-brown rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gentle-brown mb-2">比較選擇</h3>
              <p className="text-gray-600">瀏覽評價、照片和價格，選擇最適合的住宿</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gentle-brown rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gentle-brown mb-2">確認訂房</h3>
              <p className="text-gray-600">安全付款，在指定日期享受完美住宿</p>
            </div>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="py-12 px-6 bg-warm-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gentle-brown mb-4">MyMoltBox</h3>
            <p className="text-gray-600">溫馨舒適的民宿訂房平台，讓每一次旅行都成為美好回憶。</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gentle-brown mb-4">房源</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">山景民宿</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">海景民宿</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">城市民宿</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">鄉村小屋</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gentle-brown mb-4">支援</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">客服中心</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">常見問題</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">取消政策</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">聯絡我們</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gentle-brown mb-4">社群</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gentle-brown">部落格</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2024 MyMoltBox. 保留所有權利。</p>
        </div>
      </footer>
    </div>
  );
}