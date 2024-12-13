import { ImageMain, LogoMain } from '../../assets/index.tsx'
import Header from '../../components/macro/Header.tsx'
import ButtonMain from '../../components/micro/ButtonMain.tsx'

const Home = () => {
  return (
    <div className='h-screen' >
        <div className='h-[100vh]'>
            <Header hgt='20%'/>
            <div style={{backgroundImage: `url(${ImageMain})`}} className='h-[86%] object-center'>
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
    </div>
  )
}

export default Home