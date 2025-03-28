'use client';
import { useState } from 'react';

export default function Home() {
  const [hoverStates, setHoverStates] = useState({});

  const handleHover = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: true }));
  };

  const handleLeave = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: false }));
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <img
            src="/images/SOne_index_logo.png"
            alt="Logo"
            className="w-[200px] h-[50px] self-center md:self-start"
          />

          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="flex justify-end gap-2">
              <img src="/images/SOne_index_iconthai.jpg" className="w-[25px] h-[18px]" alt="TH" />
              <img
                src={hoverStates.lang ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"}
                className="w-[25px] h-[18px]"
                alt="EN"
                onMouseEnter={() => handleHover('lang')}
                onMouseLeave={() => handleLeave('lang')}
              />
            </div>

            <div className='flex justify-end'>
              <div className="flex justify-end bg-[#f05a28] p-0.5">
                <div className="bg-white flex gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none px-2 w-full md:w-auto"
                  />
                  <button>
                    <img src="/images/SOne_index_btsearch.jpg" className="w-[23px] h-[23px]" alt="Search" />
                  </button>
                </div>
              </div>
            </div>

            <nav className="flex gap-4 text-sm flex-wrap justify-center md:justify-end">
              <a href="#" className="hover:text-primary-orange">About S-ONE</a>|
              <a href="#" className="hover:text-primary-orange">Job Opportunity</a>|
              <a href="#" className="hover:text-primary-orange">Contact Us</a>|
              <a href="#" className="hover:text-primary-orange">Site Map</a>
            </nav>
          </div>
        </div>
      </header>

      <nav className="text-white py-1 bg-[url(/images/SOne_index_bgmenu02.png)] bg-cover">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start w-full md:w-auto">
            {[
              { key: 'Product', label: 'Product & Services' },
              { key: 'Promotions', label: 'Promotions' },
              { key: 'News', label: 'News & Events' },
              { key: 'Tips', label: 'Safety Tips' },
              { key: 'FAQS', label: 'FAQS' },
              { key: 'Location', label: 'Location' }
            ].map(({ key, label }) => (
              <a key={key} href="#" className='flex items-center gap-2'>
                <img
                  src={hoverStates[key] ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                  onMouseEnter={() => handleHover(key)}
                  onMouseLeave={() => handleLeave(key)}
                  className='w-[20px] h-[20px]'
                  alt={key} 
                />
                <span className='hover:text-[#f05a28]'>{label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2 md:mt-0">
            {['facebook', 'twitter', 'youtube'].map((social) => (
              <img
                key={social}
                src={hoverStates[social] ? `/images/SOne_index_bt${social}1.png` : `/images/SOne_index_bt${social}.png`}
                className='w-[20px] h-[20px]'
                alt={social.toUpperCase()}
                onMouseEnter={() => handleHover(social)}
                onMouseLeave={() => handleLeave(social)}
              />
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4">
        {/* Tire Search Section */}
        <section className="flex flex-col md:flex-row gap-4 my-8">
          <div className="w-full md:w-2/5 h-[300px] relative overflow-hidden">
            <h2 className="absolute bg-[#f05a28] z-20 w-full text-white text-xl px-3 py-1">ค้นหายาง</h2>
            <div className='absolute inset-0 mt-9 w-full h-full text-white flex justify-end bg-[url(/images/SOne_index_bg_searchtype.jpg)] bg-cover bg-no-repeat'>
              <div className='w-49 pt-0.5'>
                <div>
                  <div className='text-[22px] leading-none'>
                    หน้ายาง
                  </div>
                  <div>
                    <label>ความกว้าง (มม.)</label>
                    <select
                      className="w-full h-[25px] mb-1 bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                      <option value="brazil">---เลือกหน้ายาง---</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className='text-[22px] leading-none'>
                    ซีรี่ย์
                  </div>
                  <div>
                    <label>อัตราส่วนความสูงแก้มยาง (%)</label>
                    <select
                      className="w-full h-[25px] mb-1 bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                      <option value="brazil">---เลือกซีรี่ย์---</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className='text-[22px] leading-none'>
                    กระทะล้อ
                  </div>
                  <div>
                    <label>เส้นผ่าศูนย์กลาง (นิ้ว)</label>
                    <select
                      className="w-full h-[25px] bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                      <option value="brazil">---เลือกกระทะล้อ---</option>
                    </select>
                  </div>
                </div>

                <div className='flex justify-center mt-2'>
                  <a href='#'>
                    <img src="/images/SOne_index_search.png" alt="Search" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] relative bg-[url(/images/SOne_index_banner.jpg)] bg-cover bg-left bg-no-repeat">
            <div className=' absolute w-50 right-0 h-full hidden md:flex flex-col justify-center items-center gap-3'>
              <div>
                <a href='#'><img src='/images/SOne_index_arrowup.png' alt="Arrow Up" /></a>
              </div>
              <div>
                <img src='/images/SOne_index_pic01.jpg' className='border border-0.5 border-[#f05a28]' alt="Pic 1" />
              </div>
              <div>
                <img src='/images/SOne_index_pic02.jpg' className='border border-0.5 border-white' alt="Pic 2" />
              </div>
              <div>
                <img src='/images/SOne_index_pic02.jpg' className='border border-0.5 border-white' alt="Pic 3" />
              </div>
              <div>
                <a href='#'><img src='/images/SOne_index_arrowdown.png' alt="Arrow Down" /></a>
              </div>
            </div>
            <div className='w-full h-full flex justify-between items-center'>
              <div className=' rotate-90'>
                <a href='#'><img src='/images/SOne_index_arrowdown.png' alt="Arrow Up" className='drop-shadow-lg'/></a>
              </div>
              <div className=' rotate-90'>
                <a href='#'><img src='/images/SOne_index_arrowup.png' alt="Arrow Up" className='drop-shadow-lg'/></a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-8">
          {['tire', 'break', 'battery', 'chokeup', 'oil', 'guarantee'].map((service) => (
            <img
              key={service}
              src={hoverStates[service] ? `/images/SOne_index_bt-${service}1.jpg` : `/images/SOne_index_bt-${service}.jpg`}
              alt={service}
              onMouseEnter={() => handleHover(service)}
              onMouseLeave={() => handleLeave(service)}
              className="w-full h-auto"
            />
          ))}
        </div>

        {/* Rest of the code remains the same... */}
        {/* (Previous bottom half of the component) */}
         {/* News & Safety Section */}
         <section className="flex flex-col md:flex-row gap-4 my-8">
          <div className="border-[#f05a28] w-full md:w-2/5">
            <h2 className="bg-[#f05a28] px-3 py-1 text-white text-xl">ค้นหาศูนย์บริการ</h2>
            {/* Location dropdowns */}
            <div className='bg-[#252525] flex flex-col gap-2 text-white py-1.5 px-5'>
              <div className='flex gap-2 items-center justify-end'>
                <label>จังหวัด</label>
                <select
                  className="w-50 h-[25px] bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                  <option value="brazil">---เลือกจังหวัด---</option>
                </select>
              </div>
              <div className='flex gap-2 items-center justify-end'>
                <label>เขต/อำเภอ</label>
                <select
                  className="w-50 h-[25px] bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                  <option value="brazil">---เลือกเขต/อำเภอ---</option>
                </select>
              </div>
              <div className='flex gap-2 items-center justify-end'>
                <label>ถนน</label>
                <select
                  className="w-50 h-[25px] bg-white placeholder:text-slate-400 text-slate-700 text-sm text-center border rounded p-0.5 transition duration-300 ease cursor-pointer">
                  <option value="brazil">---เลือกถนน---</option>
                </select>
              </div>
              <div className='text-[#f05a28] text-center'>
                หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
              </div>
              <div className='flex justify-end mr-5'>
                <a href='#'>
                  <img src="/images/SOne_index_search.png" alt="Search" />
                </a>
              </div>
            </div>
          </div>


          <div className="w-full flex flex-col md:flex-row gap-3">
            <div className='border border-[#f05a28] border-b-5 border-b-[#f05a28] flex flex-col justify-between'>
              <div className='flex justify-between border-b-1 border-b-[#f05a28] px-3'>
                <h2 className="text-black text-xl ">News & Events</h2>
                <div className='flex items-center justify-end gap-1'>
                  <img
                    src={hoverStates.bullet1 ? "/images/SOne_index_bullet1.png" : "/images/SOne_index_bullet2.png"}
                    onMouseEnter={() => handleHover('bullet1')}
                    onMouseLeave={() => handleLeave('bullet1')}
                    className='w-[10px] h-[10px]'
                    alt="Product" />
                  <img
                    src={hoverStates.bullet2 ? "/images/SOne_index_bullet1.png" : "/images/SOne_index_bullet2.png"}
                    onMouseEnter={() => handleHover('bullet2')}
                    onMouseLeave={() => handleLeave('bullet2')}
                    className='w-[10px] h-[10px]'
                    alt="Product" />
                  <img
                    src={hoverStates.bullet3 ? "/images/SOne_index_bullet1.png" : "/images/SOne_index_bullet2.png"}
                    onMouseEnter={() => handleHover('bullet3')}
                    onMouseLeave={() => handleLeave('bullet3')}
                    className='w-[10px] h-[10px]'
                    alt="Product" />
                </div>
              </div>
              <div className='flex flex-row gap-2  p-2'>
                <div className='max-w-40 relative'>
                  <div className='absolute text-[10px] text-white text-center bg-[#000000c0] p-1 leading-none m-1'>
                    19 <br />
                    NOV <br />
                    2014
                  </div>
                  <img src='/images/SOne_index_pic3.jpg' className='border-b-5 border-b-[#f05a28]' />
                  <a href='#' className='p-0 m-0 text-xs hover:underline'>
                    ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                    และกิจกรรมข่าวและกิจกรรมข่าว
                    และกิจกรรม
                  </a>
                </div>
                <div className='border-r border-[#f05a28]'></div>
                <div className='max-w-40 relative'>
                  <div className='absolute text-[10px] text-white text-center  bg-[#000000c0] p-1 leading-none m-1'>
                    19 <br />
                    NOV <br />
                    2014
                  </div>
                  <img src='/images/SOne_index_pic3.jpg' className='border-b-5 border-b-[#252525]' />
                  <a href='#' className='p-0 m-0 text-xs hover:underline'>
                    ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                    และกิจกรรมข่าวและกิจกรรมข่าว
                    และกิจกรรม
                  </a>
                </div>
                <div className='border-r border-[#f05a28]'></div>
                <div className='max-w-40 relative'>
                  <div className='absolute text-[10px] text-white text-center bg-[#000000c0] p-1 leading-none m-1'>
                    19 <br />
                    NOV <br />
                    2014
                  </div>
                  <img src='/images/SOne_index_pic3.jpg' className='border-b-5 border-b-[#252525]' />
                  <a href='#' className='p-0 m-0 text-xs hover:underline'>
                    ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                    และกิจกรรมข่าวและกิจกรรมข่าว
                    และกิจกรรม
                  </a>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src='/images/SOne_index_tips1-removebg-preview.png' className='absolute' />
              <div className='flex justify-end'>
                <div className='bg-[#252525] border border-[#f05a28] w-[210px] h-[125px] py-2 pr-[10px] pl-[80px] text-center'>
                  <div className='text-[#f05a28] text-[22px]'>
                    Safety Tips
                  </div>
                  <div className='text-white text-[14px] leading-4'>
                    <span className='text-[22px]'>"</span>
                    ควรเติมน้ำมันตอนเช้า
                    ขณะที่อุณหภูมิบนพื้น
                    ดินยังเย็นอยู่
                    <span className='text-[22px]'>"</span>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center py-1.5 border-dashed border-b-1 border-b-[#f05a28]'>
                <label className='text-[22px]'>สมัครรับข่าวสาร</label>
                <div className='flex'>
                  <input type='text' placeholder='กรุณาใส่อีเมล์' className='w-30 h-[23px] border border-[#f05a28]' />
                  <img src='images/SOne_index_btgo.jpg' className='h-[23px]' />
                </div>
              </div>
              <img src='/images/SOne_index_call.png' className='pt-1.5' />
            </div>
            {/* News grid */}
          </div>
        </section>
      </main>

      <footer className='max-w-6xl mx-auto flex flex-col md:flex-row mb-10'>
        <div className='w-full md:w-auto flex justify-center'>
          <img src='/images/SOne_index_logos.png' alt="Logos" />
        </div>
        <div className='w-full flex justify-center md:justify-start items-center rounded bg-[url(/images/SOne_index_bgmenu02.png)] text-white px-3 mt-2 md:mt-0'>
          <div>Copyright <span className="copyright">©</span> 2014</div>
        </div>
      </footer>
    </div>
  );
}