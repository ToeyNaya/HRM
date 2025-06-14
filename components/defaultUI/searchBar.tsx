import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

function searchBar() {
    return (
        <div className="hidden md:block">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="ค้นหา..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
            </div>
        </div>
    )
}

export default searchBar