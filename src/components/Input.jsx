import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'
export default function Input({ label, type = "text", ...props }) {
    const [field] = useField(props)
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType("text")
        } else if (type === "password") {
            setType("password")
        }
    }, [show, type])
    return (
        <div>
            <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400 items-center">
                <input
                    required={true}
                    type={inputType}
                    className={
                        classNames({
                            "px-2 text-xs bg-transparent w-full outline-none h-[38px]": true,
                            "pt-[10px]": field.value
                        })
                    }
                    {...field}
                    {...props}
                />
                <small className={
                    classNames({
                        "absolute  left-[9px] -translate-y-1/2 pointer-events-none cursor-text text-gray-400 transition-all ": true,
                        "text-xs top-1/2": !field.value,
                        "text-[10px] top-2.5": field.value
                    })
                }>
                    {label}
                </small>
                {type === 'password' && field.value && (
                    <div onClick={() => setShow(show => !show)} className="h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2">
                        {show ? 'Hide' : 'Show'}
                    </div>
                )}
            </label>
        </div>
    )
}
