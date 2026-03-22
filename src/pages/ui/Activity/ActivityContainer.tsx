import Activity from "./Activity.tsx";
import { useGetPostsQuery } from "@/entities/post/api/post.api.ts";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";

const ActivityContainer = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { data: posts } = useGetPostsQuery();

	return posts && <Activity posts={posts} checkedTheme={checkedTheme} />;
};
export default ActivityContainer;
