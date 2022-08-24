import React from 'react'

export default function Button({ type = "button", children, ...props }) {
    return (
        <button type="submit"
            {...props}
            className="h-[30px] w-full flex justify-center items-center gap-x-2 mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">
            {children}
        </button>
    )
}
