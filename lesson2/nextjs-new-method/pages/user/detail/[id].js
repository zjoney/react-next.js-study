export default function ({user}) {
    return (
       <div>
           <p>ID:{user.id}</p>
           <p>name:{user.name}</p>
       </div>
    )
}
//获取 静态的路径 
export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/api/users').then(res=>res.json());
    const users = res.data;
    const paths = users.map(user=>`/user/detail/${user.id}`);
    console.log('paths',paths);
    return {paths,fallback:false}
}
//获取 静态的属性
export async function getStaticProps({params}) {
    console.log('params',params,new Date().toTimeString());
    const res = await fetch(`http://localhost:4000/api/users/${params.id}`).then(res=>res.json());
    return {
      props: {
        user:res.data
      }
    }
}