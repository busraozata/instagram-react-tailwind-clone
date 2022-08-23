
import { Outlet } from "react-router-dom"
export default function AuthLayout() {
    return (
        <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
            <Outlet />
        </div>
    )
}
