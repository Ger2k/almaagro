export default function UserDetails({ params } : {
    params: {
        userId: string;
    }

}){
    {console.log(params)}
    return (
        <h1>Id del usuario: {params.userId}</h1>
    )
}