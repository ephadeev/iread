import List from '@mui/material/List';
import {useGetPostsByIdQuery} from "@/entities/post/api/post.api.ts";
import Post from "@/widgets/ProfilePost/ui/ProfilePost.tsx";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";
import AddPost from "@/features/AddPost/ui/AddPostButton.tsx";

const ProfilePosts = () => {
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const {data: posts} = useGetPostsByIdQuery(uid, {skip: !uid});

    return (
        <>
            <AddPost/>
            <List>
                {posts?.map((post, i) => {
                    const date = new Date(post.time);
                    return (
                        <Post
                            postText={post.text}
                            postId={post.postId}
                            key={post.postId}
                            hours={date.getHours().toString().padStart(2, "0")}
                            minutes={date.getMinutes().toString().padStart(2, "0")}
                            withDivider={i !== posts.length - 1}
                        />
                    );
                })}
            </List>
        </>
    );
};

export default ProfilePosts;
