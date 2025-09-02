import { FaFilter } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function SortFilter({ sortBy, setSortBy }) {
    return (
        <div className='flex gap-2'>
            <Menu>
                <MenuButton className="inline-flex whitespace-nowrap items-center gap-2 rounded-md bg-sky-400 data-hover:bg-sky-500 dark:bg-blue-600 dark:hover:bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white transition duration-300 cursor-pointer focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white dark:data-hover:bg-blue-500 data-open:bg-sky-500 dark:data-open:bg-blue-600">
                    <FaFilter /> {sortBy.field}
                </MenuButton>
                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 z-10 origin-top-right shadow-xl rounded-xl border border-white/5 bg-white dark:bg-gray-900 p-1 text-sm/6 text-gray-900 dark:text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                >
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'clickCount_desc', field: 'Clicks (most)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Clicks (most)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'clickCount_asc', field: 'Clicks (least)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Clicks (least)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'qrScans_asc', field: 'Scans (least)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Scans (least)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'qrScans_desc', field: ' Scans (most)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Scans (most)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'active', field: 'Active' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Active
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'inactive', field: 'Inactive' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Inactive
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'createdAt_desc', field: 'Created (newest)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Created (newest)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'createdAt_asc', field: 'Created (oldest)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Created (oldest)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'updatedAt_desc', field: 'Updated (newest)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Updated (newest)
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={() => setSortBy({ slug: 'updatedAt_asc', field: 'Updated (oldest)' })} className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                            Updated (oldest)
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default SortFilter