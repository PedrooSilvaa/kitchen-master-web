import { Logo } from '../../assets'
import ButtonMain from '../micro/ButtonMain'

interface HeaderProps{
  hgt: string;
}

const Header = ( {hgt} : HeaderProps) => {
  return (
    <div className={`flex justify-between items-center h-${hgt} px-16`}>
        <img src={Logo} alt="" />

        <div className='flex gap-14 text-lg font-semibold text-black'>
            <h2>Menu</h2>
            <h2>About</h2>
            <h2>Location</h2>
        </div>

        <ButtonMain onClick={() => "#"} color='#FB8951' border={0}>
          Sign in
        </ButtonMain>
    </div>
  )
}

export default Header