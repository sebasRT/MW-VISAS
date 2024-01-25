import Link from 'next/link';
import React, { ReactNode } from 'react'
type Props = {
    href: string;
    children: ReactNode;
    className?: string;
}
const LinkButton = ({ href, children, className }: Props) => {

    return (
        <Link href={href}>
            <div className={`${className} text-base font-semibold font-sans uppercase bg-primary-700 p-2`}>
                {children}
            </div>
        </Link>
    )
}

export default LinkButton