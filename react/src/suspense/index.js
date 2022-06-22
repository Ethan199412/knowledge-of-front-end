// import User from "./user";
import React, { Component } from 'react';
const User = React.lazy(() => import("./User"));

export const SuspenseDemo = () => {
    return (
        <>
            <React.Suspense fallback={<div>Loading...</div>}>
                <User id={1} />
            </React.Suspense>
        </>
    );
};