import './App.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';


function App() {
  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF'];

    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      gsap.to(particle, {
        duration: 1.5,
        opacity: 0,
        scale: gsap.utils.random(0.5, 2),
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        onComplete: () => {
          particle.remove();
        }
      });
    };

    const onMouseMove = (e) => {
      for (let i = 0; i < 5; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  return (
    <>
      <div className="home">
        <nav className='bg-[#262626] text-white w-full  p-3 sticky top-0' >
          <ul className="flex justify-between" >
            <li className='flex items-center font-Outfit text-xl' > <img width={33} src="/src/assets/motionarteffect-img2.png" alt="" />envato <span className='text-[#81b441] font-thin'>market</span></li>
            <li><button className="bg-[#81b441] px-4 py-1 rounded-md">Buy now</button></li>
          </ul>

        </nav>

        <div className="section2 ">
          <ul className='flex justify-between'>
            <li className='mx-24 my-7'> <img src="/src/assets/MotionArtEffect-logo.png" alt="logo" /></li>
            <li className='mx-24 my-7'> <button className='bg-white border border-2 text-black text-lg px-9 py-3 rounded-md hover:bg-transparent hover:text-white'> Purchase Now</button> </li>
          </ul>
        </div>

        <div className="section3 flex">

          <div className="left w-[20%] mx-24 my-7">

            <div className="text2 mt-10 font-bold">Transform</div>
            <div className="text2 font-bold"> Your Website</div>

            <div className='text-white mt-3'>With Motion Art <br /> Effect </div>
          </div>
          <div className="rigth w-[80%]  pt-14 mr-10 ">
            <div className="text text-white text-[65px]  flex flex-col  sora">
              <div className="text  ">Attract Your </div>
              <div> Visitors Attention </div>
              <div> With Colorful</div>
            </div>
            <div className=' text-[65px]   flex flex-col gap-3 sora text2'>Motion Art Effect</div>
            <div className="desc w-[500px] text-slate-400">
              Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
            </div>

          </div>


        </div>

        < div className="review">
          <h1 className='text-center text-white pt-16 text-2xl'>Trusted by thousands of users around the world</h1>
          <div className="stars flex justify-around">
            <div className="review-item relative">
              <img src="/src/assets/motionarteffect-img2.png" alt="" />
              <img src="/src/assets/motionarteffect-img4.png" height={10} alt="" />
              <div className="text text-slate-400"><span className='font-bold'>4.5</span> Score, 9 Reviews</div>
            </div>
            <div className="review-item">
              <img src="/src/assets/motionarteffect-img1.png" alt="" />
              <img src="/src/assets/motionarteffect-img4.png" height={10} alt="" />
              <div className="text text-slate-400"><span className='font-bold'>4.5</span> Score, 9 Reviews</div>
            </div>
            <div className="review-item">
              <img src="/src/assets/motionarteffect-img3.png" alt="" />
              <img src="/src/assets/motionarteffect-img4.png" height={10} alt="" />
              <div className="text text-slate-400"><span className='font-bold'>4.5</span> Score, 9 Reviews</div>
            </div>
          </div>
        </div>

        <div className="section4 my-[150px] mx-20 flex">
          <div className="left w-[60%] ">
            <div className="text text-white text-4xl">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
            <div className="motiondesc text-lg text-white mt-6">
              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
            </div>
          </div>
          <div className="right w-[40%] pl-20">
            <img className='pl-20 ml-16' src="/src/assets/motionarteffect-img5.png" alt="" />
          </div>
        </div>

        <div className="section5 text-white  px-[100px] ">
          <h1 className='text-5xl text-center'>Apply On Any Section Or Enable For <br />Whole Page</h1>
          <div className="images flex gap-3 mt-[80px]">
            <div className="section section-bg h-[580px] w-[580px] border border-2 rounded-2xl p-10">
              <h2 className='text-2xl font-bold'>Apply On Section</h2>
              <div className="desc py-5">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.

              </div>
              <img src="/src/assets/motionarteffect-img11.png" alt="section" />
            </div>
            <div className="section section-bg h-[600px] w-[600px] border border-2 rounded-2xl p-10 mt-[80px]">
              <h2 className='text-2xl font-bold'>Apply On Page
              </h2>
              <div className="desc py-5">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.

              </div>
              <img src="/src/assets/motionarteffect-img10.png" alt="section" />
            </div>
          </div>
        </div>
        <div className=' flex justify-center '>

          <div className="Browsers section-bg rounded-2xl  text-center flex items-center flex-col h-[290px] w-[86%] ">
            <h2 className='text-2xl p-5 text-white'> Supported by All Popular Browsers</h2>
            <h4 className='text-slate-200 pb-5 fo text-sm'>Rest assured, Motion Art is designed to be compatible <br />with all major web browsers.</h4>
            <img className=' align-middle' src="/src/assets/motionarteffect-img8.png" alt="Browsers" />
          </div>
        </div>
        <div className="fetures text-white flex justify-center  text-center gap-5 ">
          <div className="text w-[45%]">
            <h2 className='text-4xl'>An All-Round Plugin With Powerful Features</h2>
            <h4 className='text-gray-400 text-[16px] mt-5'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</h4>
          </div>


        </div>
        <div className="cards flex justify-around mx-16 my-10 ">
          <div className="card h-[400px] w-[400px] section-bg rounded-2xl">
            <div > <img src="/src/assets/motionarteffect-img9.png" alt="feture image" /></div>
            <div className="title text-white text-2xl ">Light Weight</div>
            <div className="desc text-gray-400 text-[18px] mt-3">Motion Art for Elementor is designed to be lightweight.</div>
          </div>
          <div className="card h-[400px] w-[400px] section-bg rounded-2xl">
            <div > <img src="/src/assets/motionarteffect-img6.png" alt="feture image" /></div>
            <div className="title text-white text-2xl ">100% Responsive</div>
            <div className="desc text-gray-400 text-[18px] mt-3">Create a consistent visual experience across all devices.</div>
          </div>
          <div className="card h-[400px] w-[400px] section-bg rounded-2xl">
            <div > <img src="/src/assets/motionarteffect-img7.png" alt="feture image" /></div>
            <div className="title text-white text-2xl ">User Friendly Interface</div>
            <div className="desc text-gray-400 text-[18px] mt-3">Ensure a smooth experience for both applicants and administrators.</div>
          </div>
        </div>
      </div>

      <footer className='flex justify-between px-20 p-4 bg-footer'>
        <div className="1 ">
        <div className='text-white font-thin text-[15px]'>&copy; 2023 Copywrite. All rights reserved by QodeMatrix</div>
        </div>

        <div className="2 text-gray-400 text-[14px] flex gap-5">
          <div className='hover:text-gray-200 cursor-pointer transition-all'>Documentation</div>
          <div className='hover:text-gray-200 cursor-pointer transition-all'>Support</div>
        </div>
        
        </footer>



    </>
  )
}

export default App
