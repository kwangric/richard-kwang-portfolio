import { useRouter } from 'next/router'
import { useEffect } from 'react'

const btpl = () => {
    const router = useRouter()
    const redirect = () => router.push('https://btpl-richard.vercel.app/')
    useEffect(() => {
        redirect()
    }, [])
    return (<>

    </>)
}

export default btpl