"use client"
import React from 'react'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/constant'
import Link from 'next/link'
import { SearchInput } from './SearchInput'
import Sidebar from './Sidebar'

const Navbar = () => {
	return (
		<nav className='bg-[#465e65] z-20 p-2 flexBetween'>
			<span className='text-white font-semibold hover:font-bold text-nowrap px-2'>ShonH's 小行星</span>
			<SearchInput />
			<ul className="text-white text-nowrap hidden h-full flexCenter gap-12 pl-2 lg:max-container w-auto ">
				{NAV_LINKS.map((link) => (
					<Link href={link.href} key={link.key}
						className="pr-2 font-base text-white-50 text-center  cursor-pointer pb-1.5 transition-all  hover:font-bold"
					>
						{link.labels}
					</Link>
				))}
			</ul>
			{/* <Menu width={36} height={36} className='cursor-pointer hover:scale-125 stroke-white' /> */}
			{/* <Sidebar /> */}
		</nav>
	)
}



export default Navbar

