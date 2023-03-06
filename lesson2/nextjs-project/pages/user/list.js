import UserLayout from './_layout';
import Link from 'next/link';
import axios from '../../utils/axios';
function UserList(props){
    console.log('UserList render');
    return (
        <UserLayout>
           <ul>
               {
                   props.list.map(user=>(
                       <li key={user.id}>
                           <Link href={`/user/detail/${user.id}`}>{user.name}</Link>
                       </li>
                   ))
               }
           </ul>
        </UserLayout>
    )
}
/**
 * 给UserList组件添加一个类的属性 ,用来获取 新始化的数据,它会返回一个对象
 * 这个对象将会成为当的组件的属性对象
 * @param { } ctx 
 */
UserList.getInitialProps = async (ctx)=>{
  console.log('UserList.getInitialProps');
   //axios res={headers,data,statusCode}
  let res = await axios.get('/api/users').then(res=>res.data);
  return {list:res.data};//res.data是用户的数组
}
export default UserList;