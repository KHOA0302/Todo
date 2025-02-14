import { RiSunLine } from 'react-icons/ri'
import { GoHome } from 'react-icons/go'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { MdOutlineDone } from 'react-icons/md'
import { LiaCircleSolid } from 'react-icons/lia'
import { CiStar } from 'react-icons/ci'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { BiRightArrow } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
import { PiTrashSimple } from 'react-icons/pi'
import { RxExit } from 'react-icons/rx'
import { BsX } from 'react-icons/bs'

export const MyDayIcon = () => {
  return <RiSunLine />
}

export const ImportantIcon = () => {
  return <CiStar />
}

export const TaskIcon = () => {
  return <GoHome />
}

export const PlannedIcon = () => {
  return <HiOutlineCalendarDays />
}

export const CircleIcon = () => {
  return <LiaCircleSolid />
}

export const TickIcon = () => {
  return <MdOutlineDone />
}

export const DoneIcon = () => {
  return <IoIosCheckmarkCircle />
}

export const ArrowIcon = () => {
  return <BiRightArrow />
}

export const ImportantActiveIcon = () => {
  return <TiStarFullOutline />
}

export const RemoveIcon = () => {
  return <PiTrashSimple />
}

export const ExitIcon = () => {
  return <RxExit />
}

export const CancelIcon = () => {
  return <BsX />
}
