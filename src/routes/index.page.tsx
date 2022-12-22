import {Head, Page, useServerSideQuery} from "rakkasjs";
import React from "react";

function SlowComponent() {
    const {data: {message}, refetch, isRefetching} = useServerSideQuery<{message: string}>(() =>
        fetch("http://localhost:3000/express",).then((res) => res.json()).then((data) => new Promise(done => setTimeout(()=> done(data), 300)))
    );

    return <div><h1>{isRefetching ? '...' : message}</h1>
        <button onClick={refetch}>Refetch</button>
    </div>
}

const Index: Page = () => (
    <>
        <Head title="Suspense"/>
        <React.Suspense fallback={<h1>...</h1>}>
            <SlowComponent/>
        </React.Suspense>
    </>
);
export default Index
