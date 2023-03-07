import React from 'react';
function UserInfo(props){
  let {user} = props;
  let [createdAt,setCreatedAt]=React.useState(props.user.createdAt);
  async function changeFormat(){
      //这种方式引入的模块需要通过.default才能真正的值 
      let moment  = await import('moment');
      setCreatedAt(moment.default(createdAt).fromNow());
  }
  return (
      <div>
          <p>用户名:{user.name}</p>
          <p>创建时间:{createdAt}<button onClick={changeFormat}>切换为相对时间</button></p>
      </div>
  )
}
export default UserInfo;