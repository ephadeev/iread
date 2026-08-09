import Activity from "./Activity.tsx";
import {useListenPostsQuery} from "@/entities/post/api/post.api.ts";

const ActivityContainer = () => {
    const {data: posts} = useListenPostsQuery();

    return posts && <Activity posts={posts}/>;
};
export default ActivityContainer;
