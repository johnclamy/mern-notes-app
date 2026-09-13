import Post from './Post'
import posts from '../../../api'


const PostList: React.FC = () => {
    

    return (
        <div className="col-span-full mx-auto grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
                <Post key={`${post.author}-${post.dateCreated}-${post.title}`} post={post} />
            ))}
        </div>
    );
};

export default PostList;
