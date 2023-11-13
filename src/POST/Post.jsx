import { useLoaderData } from "react-router-dom";
import PostData from "../PostData/PostData";


const Post = () => {
    const posts = useLoaderData()
    console.log(posts)

    return (
        <div className="container mx-auto pt-32">
            <h1 className="font-bold text-3xl text-center">This is Post</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 m-3">
                {
                    posts.map(post => <PostData
                        key={post.id}
                        post={post}
                    ></PostData>)
                }


            </div>
        </div>
    );
};

export default Post;