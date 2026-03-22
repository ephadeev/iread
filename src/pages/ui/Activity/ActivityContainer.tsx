import Activity from "./Activity.tsx";
import { useGetPostsQuery } from "@/entities/post/api/post.api.ts";

const ActivityContainer = () => {
	const { data: posts } = useGetPostsQuery();

	return <Activity postsFromProps={posts} />;
};
export default ActivityContainer;
