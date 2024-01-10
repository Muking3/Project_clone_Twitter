import './App.css'
import Container from './Component/Container'
import Tweet from './Component/Tweet'

function App() {
  return (
    <div className='flex max-w-[1265px] m-auto bg-black'>
      <div className='w-[22%] h-screen'>
        fveovierov
      </div>
      <div className='w-[47%] h-screen border-r-[1px] border-l-[1px] border-[#2F3336]'>
        <div className='flex justify-between border-b-[1px] border-[#2F3336]'>
          <p className='m-[15px]'>Home</p>
          <img src="src/assets/Top-Tweets.svg" alt="Etoile" className='mr-[15px]' />
        </div>
        <div>
          <div className='flex gap-[4%] items-center pl-[15px] pr-[15px]'>
            <div className='w-[8%] h-[8%]'>
              <img src="src/assets/robbie-lens.png" alt="Photo de profil" className='rounded-[100%] mt-[4px]' />
            </div>
            <textarea className='w-[88%] bg-black h-[25px] resize-none' placeholder="What's happending?"></textarea>
          </div>
          <div className='flex justify-between pl-[15px] pr-[15px] mt-[35px] mb-[4px]'>
            <div className='flex ml-[60px]'>
              <img src="src/assets/icon_img.svg" alt="" />
              <img src="src/assets/icon_gif.svg" alt="" />
              <img src="src/assets/icon.svg" alt="" />
              <img src="src/assets/icon_emoji.svg" alt="" />
              <img src="src/assets/icon_calendrier.svg" alt="" />
            </div>
            <button type="button" className='rounded-[50px] bg-[#1D9BF0] w-[79px]'>Tweet</button>
          </div>
        </div>
        <div className='border-b-[1px] border-t-[1px] border-[#2F3336]'>
          <div className='flex gap-[4%] pt-[12px] pl-[16px] pr-[16px] pb-[12px] text-[15px]'>
            <div className='w-[8%] h-[8%]'>
              <img src="src/assets/image 1.svg" alt="Photo de profil" className='rounded-[100%] mt-[4px]' />
            </div>
            <div className='w-[88%]'>
              <div className='flex'>
                <span className='pr-[2px]'>CNN</span>
                <img src="src/assets/icon_suivre.svg" alt="Badge de certification" />
                <a href="#" className='text-[#6E767D] pl-[4px] pr-[4px]'>@CNN</a>
                <span className='text-[#6E767D] pl-[4px] pr-[4px]'>.</span>
                <a href="#" className='text-[#6E767D]'>7m</a>
              </div>
              <p className='pt-[5px]'>
                President Joe Biden touted a new agreement reached with the European Union to ease 
                Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to 
                both strengthen the US steel industry and combat the global climate crisis.
              </p>
              <div className='flex pt-[12px]'>
                <div className='flex pr-[52px]'>
                  <img src="src/assets/Reply.svg" alt="Icone pour reagir" />
                  <span className='pl-[12px] pr-[12px]'>57</span>
                </div>
                <div className='flex pr-[52px]'>
                  <img src="src/assets/Retweet.svg" alt="" />
                  <span className='pl-[12px] pr-[12px]'>144</span>
                </div>
                <div className='flex pr-[52px]'>
                  <img src="src/assets/React.svg" alt="" />
                  <span className='pl-[12px] pr-[12px]'>184</span>
                </div>
                <div className='pr-[64px]'>
                  <img src="src/assets/Share.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[28%] h-screen'>
        fveovierov
      </div>
    </div>
  )
}

export default App
