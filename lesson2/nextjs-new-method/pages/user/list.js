import Link from 'next/link';
function UserList(props){
    return (
        <ul>
               {
                   props.list.map(user=>(
                       <li key={user.id}>
                           <Link href={`/user/detail/${user.id}`}>{user.name}</Link>
                       </li>
                   ))
               }
           </ul>
    )
}
//{params 动态路由才有
export async function getStaticProps(){
    console.log('getStaticProps');
    const res = await fetch(`http://localhost:4000/api/users`).then(res=>res.json());
    return {props:{list:res.data}};//res.data是用户的数组
}

export default UserList;
//getInitialProps 方法会在客户端和服务都调用，有时候显示 比较奇怪 