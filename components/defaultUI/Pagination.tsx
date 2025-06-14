import React from 'react'
import { Button } from '../ui/button'

function Pagination() {
    return (
        <div className="mt-4 flex items-center justify-end space-x-2">
            <Button variant="outline" size="sm">ก่อนหน้า</Button>
            <Button variant="outline" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">ถัดไป</Button>
        </div>
    )
}

export default Pagination