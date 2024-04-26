import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
} from "next";

export const getServerSideProps: GetServerSideProps<{
    repo: any;
}> = async () => {
    const res = await fetch("http://localhost:5000/users/1");
    const repo = await res.json();
    return { props: { repo } };
};

export default function Test({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
           dsdsdsdsdsds
        </div>
    );
}