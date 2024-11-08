import React from 'react'

export const Navbar = () => {
    return (
        <header className="flex bg-green-900 py-4 px-8 text-slate-50">
            <div>
                <h1 className="text-5xl">Shop It</h1>
            </div>
            <nav className="ml-auto flex gap-8">
                <span className="material-icons-outlined text-3xl hover:cursor-pointer">
                    favorite
                </span>
                <span className="material-icons-outlined text-3xl hover:cursor-pointer">
                    shopping_cart
                </span>
                <span className="material-icons-outlined text-3xl hover:cursor-pointer">
                    account_circle
                </span>
            </nav>
        </header>
    )
}