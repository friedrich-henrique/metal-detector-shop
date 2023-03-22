import Button from '@/components/Button';
import  { useRouter } from  'next/router'

const Test  = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
        <Button type='submit' className="bg-blue-500">Test button too</Button>
        <p>Post: {pid}</p>
        </>
    )  
};

export default Test;