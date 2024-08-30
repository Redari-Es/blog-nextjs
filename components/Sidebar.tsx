"use client"
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 transform transition duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
			<div className="flex justify-between items-center">
				<Menu width={36} height={36} className='cursor-pointer hover:scale-125 stroke-white' onClick={toggleSidebar} />

				{isOpen && (
					<h2 className="text-xl font-semibold">Sidebar</h2>
				)}
			</div>
			<ul className="mt-4">
				<li className="py-2">Link 1</li>
				<li className="py-2">Link 2</li>
				<li className="py-2">Link 3</li>
			</ul>
		</div>
	);
};


export default Sidebar;
