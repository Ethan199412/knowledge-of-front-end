import React, { useState, useEffect } from 'react';

// 网络请求，获取 user 数据
const requestUser = id =>
    new Promise(resolve =>
        setTimeout(() => resolve({ id, name: `用户${id}`, age: 10 + id }), id * 1000)
    );

const User = props => {
    const [user, setUser] = useState({});

    useEffect(() => {
        requestUser(props.id).then(res => setUser(res));
    }, [props.id]);

    return <div>当前用户是: {user.name}</div>;
};

export default User;