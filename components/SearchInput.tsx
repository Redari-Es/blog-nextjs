import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"


type Props = {
	placeholder?: string,
}
// export function SearchInput({ placeholder }: Props) {
// 	return (
// 		<div className="border rounded-lg flex justify-between items-center">
// 			<Input
// 				type="text"
// 				placeholder={placeholder || "Search"}
// 				className="border-r-none"
// 			/>
// 			<Button className="border-none" variant="ghost" size="icon">
// 				<Search />
// 				<span className="sr-only">Search Button</span>
// 			</Button>
// 		</div>
// 	)
// }

export function SearchInput({ placeholder }: Props) {
	return (
		<div className="bg-white  border rounded-lg flex justify-between items-center">
			<input
				type="text"
				placeholder={placeholder || "Search"}
				className="border-r-none border-gray-300 focus:outline-none focus:border-gray-500 rounded-l-lg py-1 px-2"
			/>
			<button
				className="px-3 py-1 rounded-r-lg focus:outline-none flex items-center"
			>
				<Search size={20} /> 				<span className="sr-only">Search Button</span>
			</button>
		</div>
	)
}