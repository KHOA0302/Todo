import { RiSunLine } from 'react-icons/ri'
import { RxStar } from 'react-icons/rx'
import { GoHome } from 'react-icons/go'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { MdOutlineDone } from 'react-icons/md'
import { LiaCircleSolid } from 'react-icons/lia'
import { CiStar } from 'react-icons/ci'

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

export const AddTodoIcon = () => {
  return <LiaCircleSolid />
}

export const DoneIcon = () => {
  return <MdOutlineDone />
}
