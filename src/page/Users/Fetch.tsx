import style from "./Users.module.css";

async function loadPosts() {
    const res = await fetch("http://localhost:5000/users/test/1", {
        next: { revalidate: 20 },
    });
    return res.json();
}

export const Users = async () => {
    const posts = await loadPosts();
    console.log("Узеры", posts);
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Users</p>
            {/* {posts.map((post:any) => (
                <div key={post.id} className="post-listing">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                </div>
            ))} */}
            {/* <UsersWidget users={posts.users} /> */}
        </div>
    );
};
