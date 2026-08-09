import {Box, CircularProgress, Container, List} from '@mui/material';
import User from "@/widgets/User/ui/User.tsx";
import {useGetUsersInfiniteQuery} from "@/entities/user/api/user.api.ts";
import {FC, useEffect, useRef} from "react";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const Users: FC = () => {
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const {
        data,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useGetUsersInfiniteQuery(
        {currentUserUid: uid},
        {skip: !uid},
    );

    const users = data?.pages.flat() ?? [];
    
    // TODO: can  we make it without refs?
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const {isAuthChecking, friends} = useAuthUser();

    useEffect(() => {
        const el = loadMoreRef.current;
        if (!el || !hasNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {threshold: 0},
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    return (
        <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
            <Container maxWidth='xl'>
                {isAuthChecking
                    ? (
                        <Box sx={{display: 'flex', justifyContent: 'center', py: 2}}>
                            {/*TODO: CircularProgress component needs to be vertically centered on the screen*/}
                            <CircularProgress aria-label='Loading...'/>
                        </Box>
                    ) : (
                        <List>
                            {users.map((user, i) => {
                                return (
                                    <User
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        userIndex={user.userId}
                                        userAvatar={user.image}
                                        areUsersLoading={isLoading}
                                        friends={friends}
                                        key={user.userId}
                                        withDivider={i !== users.length - 1}
                                    />
                                );
                            })}
                        </List>
                    )}
                {isFetchingNextPage && (
                    <Box sx={{display: 'flex', justifyContent: 'center', py: 2}}>
                        <CircularProgress aria-label='Loading more users...' size={32}/>
                    </Box>
                )}
                <Box ref={loadMoreRef} sx={{height: 1}}/>
            </Container>
        </Box>
    );
};

export default Users;
