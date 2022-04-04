import "./Profile.css"
import React from 'react';
import Report from './Report';




function Profile(){

    return (
        <>
            <div className="profileImage offset-5 col-2">
                <img src="https://avatars.githubusercontent.com/u/62353456?v=4"  style={{width : "100%"}} alt="/" />
            </div>
            <div className="col-10 offset-1">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <h2>User Details</h2>      
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Name</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Age</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Blood Group</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Sex</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Email Id</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Mobile Number</th>
                        <td>Mark</td>      
                        </tr>
                        <tr>
                        <th scope="row">Address</th>
                        <td>Mark</td>      
                        </tr>    
                    </tbody>
                </table>
            </div>            
            <div className="Reports">
                <Report />
                <Report />
                <Report />
                <Report />
                <Report />
            </div>


        </>
    )


}

export default Profile;