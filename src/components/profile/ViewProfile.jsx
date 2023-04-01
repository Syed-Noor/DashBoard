import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../App.css'
import Card from 'react-bootstrap/Card';
// import CardBody from 'react-bootstrap/CardBody'
import {Container,Table,} from 'react-bootstrap'



function ProfileView() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`api/students/${id}`).then((response) => {
      setStudent(response.data);
    });
  }, [id]);

  return (
    
    <Card className='mt-2 border-0 rounded-0 shadow-sm mt-5 card' id='profile'>
            <cardBody>
                <h3 className='text-uppercase'>Profile Information</h3>

                <Container className='text-center'>
                    <img style={{ maxWidth: '200px', maxHeight: '200px' }} src='./image.jpg' alt="pic" className='img-fluid  rounded-circle' />
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                        <tr>
                            <td >
                               Student ID
                            </td>
                            <td>
                              01
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER NAME
                            </td>
                            <td>
                               Syed Noor
                            </td>
                        </tr>
                        <tr>
                            <td >
                               Father Name
                            </td>
                            <td>
                               Bilal
                            </td>
                        </tr>
                        <tr>
                            <td >
                                Address
                            </td>
                            <td>
                               Peshawar
                            </td>

                        </tr>

                        <tr>
                            <td >
                               Class
                            </td>
                            <td>
                              4th
                            </td>

                        </tr>

                        <tr>
                            <td >
                                DOB
                            </td>
                            <td>
                              06-04-2005
                            </td>

                        </tr>
                        <tr>
                            <td >
                               Phone Number
                            </td>
                            <td>
                              03345963355
                            </td>

                        </tr>
                        {/* <tr>
                            <td>
                                ROLE
                            </td> */}
                            {/* <td>
                                {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })}
                            </td> */}
                        {/* </tr> */}
                    </tbody>
                </Table>

              

            </cardBody>
        </Card>

    
    
  );
}

export default ProfileView;



