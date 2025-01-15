import { RiSunLine } from 'react-icons/ri'
import { GoHome } from 'react-icons/go'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { MdOutlineDone } from 'react-icons/md'
import { LiaCircleSolid } from 'react-icons/lia'
import { CiStar } from 'react-icons/ci'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosCheckmarkCircle } from 'react-icons/io'

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
