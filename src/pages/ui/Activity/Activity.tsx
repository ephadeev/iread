import "@/app/App.css";
import ActivityPost from "@/widgets/ActivityPost/ui/ActivityPost.tsx";
import AddPost from "@/features/AddPost/ui/AddPostButton.tsx";
import {FC, memo} from "react";
import {Box, Container, List} from '@mui/material';
import {PostWithId} from "@/entities/post/model/IPost.ts";

const Activity: FC<{ posts: PostWithId[] }> = memo(
    ({posts}) => {
        // TODO: need to show only posts with isPrivate=false
        return (
            <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
                <Container maxWidth='xl'>
                    <AddPost/>
                    <List>
                        {posts?.map((post, i) => {
                            const date = new Date(post.time);
                            return (
                                <ActivityPost
                                    userId={post.userId}
                                    postText={post.text}
                                    key={post.postId}
                                    hours={date.getHours().toString().padStart(2, "0")}
                                    minutes={date.getMinutes().toString().padStart(2, "0")}
                                    day={date.getDate()}
                                    month={date.getMonth().toString().padStart(2, "0")}
                                    year={date.getFullYear()}
                                    withDivider={i !== posts.length - 1}
                                />
                            );
                        })}
                    </List>
                </Container>
            </Box>
        );
    },
);

export default Activity;
