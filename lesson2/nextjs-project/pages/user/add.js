import React from 'react';
import UserLayout from './_layout';
import axios from '../../utils/axios';
import router from 'next/router';
function UserAdd(props){
    let nameRef = React.useRef();
    let passwordRef = React.useRef();
    const handleSubmit = async  (event)=>{
        event.preventDefault();//阻止默认事件，不要让页面刷新
        let name = nameRef.current.value;
        let password = passwordRef.current.value;
        let user = {name,password};
        let response = await axios.post('/api/register',user).then(res=>res.data);
        if(response.success){
          router.push('/user/list');
        }else{
          alert('添加用户失败');
        }
    }
    return (
        <UserLayout>
          <form onSubmit={handleSubmit}>
            用户名:<input ref={nameRef}/>
            密码:<input ref={passwordRef}/>
            <button type="submit">添加</button>
          </form>
        </UserLayout>
    )
}
export default UserAdd;