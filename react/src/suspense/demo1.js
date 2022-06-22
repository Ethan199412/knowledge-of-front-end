import React, { Component } from 'react';

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'ethan',
                age: 20
            })
        }, 500)
    })
}

const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    text: 'hehe'
                },
                {
                    id: 2,
                    text: 'simple'
                }
            ])
        }, 500)
    })
}

function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser().then(u => setUser(u));
    }, []);

    if (user === null) {
        return <p>Loading profile...</p>;
    }
    return (
        <>
            <h1>{user.name}</h1>
            <ProfileTimeline />
        </>
    );
}

function ProfileTimeline() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchPosts().then(p => setPosts(p));
    }, []);

    if (posts === null) {
        return <h2>Loading posts...</h2>;
    }
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>
    );
}

export default ProfilePage