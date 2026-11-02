
const Footer = () => {
  return (
    <footer className="w-full bg-[#fbfbfb] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#f5f5f5] p-6 rounded-lg mb-8">
          <div className="flex flex-col">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <img src="public/flover16.png" alt="" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Garden Care</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
               <img src="/public/flover15.png" alt="" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Plant Renovation</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <img src="public/flover16.png" alt="" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Watering Graden</h4>
            <p className="text-xs text-gray-500 leading-relaxed">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Would you like to join newsletters?</h4>
              <form  className="flex mb-3 shadow-sm rounded overflow-hidden">
                <input type="email" placeholder="enter your email address..." className="flex-1 px-3 py-2 text-xs border border-gray-300 focus:outline-none bg-white"/>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-5 text-xs font-medium transition-colors cursor-pointer">Join</button>
              </form>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
          </div>
        </div>
        <div className="bg-[#edf6ed] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 rounded-md mb-8">
          <div className="flex items-center gap-2 font-bold text-xl text-green-700 tracking-wider">
            <img src="/Vector.png" alt="GREENSHOP" className="h-8" />
            <span className="text-2xl font-bold text-green-700">GREENSHOP</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span className="text-green-600 font-bold">📍</span> 70 West Buckingham Ave. Farmingdale, NY 11735
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span className="text-green-600 font-bold">✉️</span> contact@greenshop.com
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span className="text-green-600 font-bold">📞</span> +88 01911 717 490
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4 border-b border-gray-200 text-xs">
          <div>
            <h5 className="font-bold text-gray-900 mb-3 text-sm">My Account</h5>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">My Account</li>
              <li className="hover:text-green-600 cursor-pointer">Our stores</li>
              <li className="hover:text-green-600 cursor-pointer">Contact us</li>
              <li className="hover:text-green-600 cursor-pointer">Career</li>
              <li className="hover:text-green-600 cursor-pointer">Specials</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-3 text-sm">Help & Guide</h5>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">Help Center</li>
              <li className="hover:text-green-600 cursor-pointer">How to Buy</li>
              <li className="hover:text-green-600 cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-green-600 cursor-pointer">Product Policy</li>
              <li className="hover:text-green-600 cursor-pointer">How to Return</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-3 text-sm">Categories</h5>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">House Plants</li>
              <li className="hover:text-green-600 cursor-pointer">Potter Plants</li>
              <li className="hover:text-green-600 cursor-pointer">Seeds</li>
              <li className="hover:text-green-600 cursor-pointer">Small Plants</li>
              <li className="hover:text-green-600 cursor-pointer">Accessories</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-gray-900 mb-3 text-sm">Social Media</h5>
              <div className="flex gap-2">
                <span className="w-8 h-8 bg-green-50 text-green-600 border border-green-200 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-colors">f</span>
                <span className="w-8 h-8 bg-green-50 text-green-600 border border-green-200 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-colors">ig</span>
                <span className="w-8 h-8 bg-green-50 text-green-600 border border-green-200 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-colors">t</span>
                <span className="w-8 h-8 bg-green-50 text-green-600 border border-green-200 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-colors">in</span>
                <span className="w-8 h-8 bg-green-50 text-green-600 border border-green-200 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-colors">yt</span>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2 text-sm">We accept</h5>
              <div className="flex gap-2 items-center text-[10px] font-bold text-gray-500">
                <span className="border px-2 py-1 rounded">PayPal</span>
                <span className="border px-2 py-1 rounded">MasterCard</span>
                <span className="border px-2 py-1 rounded">VISA</span>
                <span className="border px-2 py-1 rounded">American</span>
              </div>
            </div>   </div>
        </div>
        <div className="text-center pt-6 text-xs text-gray-500">© 2021 GreenShop. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer