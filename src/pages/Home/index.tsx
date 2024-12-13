import { ImageMain, LogoMain, PlateOne, PlateThree, PlateTwo } from '../../assets/index.tsx'
import Header from '../../components/macro/Header.tsx'
import ButtonMain from '../../components/micro/ButtonMain.tsx'

const Home = () => {
  return (
    <div className='h-screen' >
        <div className='h-screen'>
            <Header hgt='100%'/>
            <div style={{backgroundImage: `url(${ImageMain})`}} className='h-[86%] object-center bg-no-repeat bg-cover'>
                <div className='h-full bg-[rgba(0,0,0,0.5)]'>
                    <div className='flex h-full justify-center items-center'>
                        <div style={{backgroundImage:`url(${LogoMain})`}} className='h-[450px] w-[450px] bg-no-repeat flex items-end justify-center gap-10'>
                        <ButtonMain color='#FB8951' border={0}>
                            Order Now
                        </ButtonMain>
                        <ButtonMain color='transparent' border={2}>
                            Download App
                        </ButtonMain>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-screen w-full'>
            <h1 className='text-5xl font-bold text-[#FB923C] px-[185px] py-16'>
                Founded in 2016 and Serving All Authentic Food 
            </h1>
            <div className='flex'>
                <div className='flex w-[610px]'>
                    <div className='pl-20'>
                        <h2 className='text-[#FB9948] text-2xl font-medium'>Our Menu</h2>
                        <h1 className='font-extrabold text-6xl'>Familiar Meals, Unique Recipes</h1>
                        <p className='font-normal text-xl pt-5'>
                            This Burger will fill your mouth with a party of a sweet juicy flavors, with your choice of your patty. 
                            The burger plant based is only 150 CAL which is an equivalent to eating a hot chetto bag.
                        </p>
                        <div className='pt-12 flex gap-7 items-center'>
                            <ButtonMain color='#FB8951' border={0}>Order Now</ButtonMain>
                            <h1 className='font-bold text-base'>View Menu</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <img src={PlateOne} alt="" className='mr-[200px]' />
                    <img src={PlateTwo} alt="" />
                    <img src={PlateThree} alt="" className='pt-8'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home