import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return <>
        <p>Post : {id}</p>
        <Link href="/">Back</Link>
    </>
}

export default Post;
