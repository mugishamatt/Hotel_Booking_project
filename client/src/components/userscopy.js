
// //witout Hoc
// import React from 'react';
// import axios from 'axios';

// import { useLoaderData,useNavigate } from 'react-router-dom'

// export  function Users() {

//     const usersData=useLoaderData()
//     const navigate=useNavigate()
//     if(navigate.state==='loading'){
//         return <p>loading..</p>
//     }
//   return (
//     <div>
//       <h2>Users list</h2>
//       <div className="row justify-content-center">
// 	<div className="col-lg-6">
// 		<div className="main-box clearfix">
// 			<div className="table-responsive">
// 				<table className="table user-list">
// 					<thead>
// 						<tr>
// 							<th><span>Name</span></th>
// 							<th><span>Email</span></th>
// 							<th className="text-center"><span>role</span></th>
//               <th><span>Action</span></th>
							
// 						</tr>
// 					</thead>
// 					<tbody>
// {usersData && usersData.map((user)=>{
//   return <tr key={user._id}>
// 							<td>
//                 {user.name}
// 							</td>
// 							<td>
// 								{user.email}
// 							</td>
							
// 							<td>
// 								{user.role}
// 							</td>

// 							<td style={{width: "20%"}}>
								
// 								<a href="#"  className="table-link">
// 									<span className="fa-stack">
// 										<i className="fa fa-square fa-stack-2x"></i>
// 										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
// 									</span>
// 								</a>
// 								<a href="#" className="table-link danger">
// 									<span className="fa-stack">
// 										<i className="fa fa-square fa-stack-2x"></i>
// 										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
// 									</span>
// 								</a>
// 							</td>
// 						</tr>
// })}
										
// 					</tbody>
// 				</table>
// 			</div>
		
// 		</div>
// 	</div>
// </div>
      
//     </div>
//   )
// }

//   export const usersLoader= async()=>{
//     const res=await axios.get('http://localhost:4000/admin/users')
//     return res.data
// }
