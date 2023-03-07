import React from 'react';
import UserLayout from '../_layout';
import axios from '../../../utils/axios';
function UserDetail(props){
    return (
        <UserLayout>
         <div>
             <p>ID:{props.user.id}</p>
             <p>name:{props.user.name}</p>
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