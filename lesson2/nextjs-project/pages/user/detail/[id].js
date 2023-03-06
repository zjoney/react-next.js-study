import React from 'react';
import UserLayout from '../_layout';
import axios from '../../../utils/axios';
import dynamic from 'next/dynamic';
const DynamicUseInfo  = dynamic(import('../../../components/UserInfo'));
//有些我们不需要在详情页直接立刻显示所有的字段,默认只需要显示一部分就可以了
function UserDetail(props){
    let [show,setShow]= React.useState(false)
    return (
        <UserLayout>
         <div>
             <p>ID:{props.user.id}</p>
             <button onClick={()=>setShow(!show)}>显示/隐藏</button>
             {
                 show&&<DynamicUseInfo user={props.user}/>
             }
         </div>
        </UserLayout>
    )
}
//getInitialProps老的方法
UserDetail.getInitialProps = async (ctx)=>{
    console.log('ctx',ctx);
    let res = await axios.get(`/api/users/${ctx.query.id}`).then(res=>res.data);
    //next.js不支持params
    return {user:res.data};
}
export default UserDetail;