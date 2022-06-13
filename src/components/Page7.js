import React from 'react';
import { Select, Checkbox } from 'antd';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

const { Option } = Select;

function Page3() {
    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3 mb-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Find Groups to Join</h4>
                <div className='row px-4 mb-3'>
                    <div className='col-5 pe-0'>
                        <p className=' mb-0 content-1'>Name contains:</p>
                    </div>
                    <div className='col-6 ps-0 ms-3'>
                        <input className='input-box m-0' style={{ width: '80%', height: '30px'}} type='text' />
                    </div>
                </div>
                <div className='row px-4 mb-3'>
                    <div className='col-7 pe-0'>
                        <p className=' mb-0 content-1'>Description contains:</p>
                    </div>
                    <div className='col-5 ps-0'>
                        <input className='input-box m-0' style={{ width: '90%', height: '30px'}} type='text' />
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-8 pe-0'>
                        <p className=' mb-0 content-1'>Is accepting new members:</p>
                    </div>
                    <div className='col-3 pt-1 ps-4'>
                        <Checkbox />
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-3 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>Custodian:</p>
                    </div>
                    <div className='col-6 pt-1 ps-4'>
                        <Select
                            className='custodian-select'
                            placeholder='username'
                        >
                            <Option value="1">a</Option>
                            <Option value="2">b</Option>
                            <Option value="3">c</Option>
                        </Select>
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-12 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>Has between <input className='input-box m-0' style={{ width: '10%', height: '30px'}} type='number' /> and <input className='input-box m-0' style={{ width: '10%', height: '30px'}} type='number' /> members</p>
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-12 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>
                            Has at least: 
                            <input className='input-box m-0 ms-3 me-1' style={{ width: '15%', height: '30px'}} type='number' />
                            % 
                            <Select
                                defaultValue='1'
                                className='custodian-select ms-3'
                                style={{width:'35%'}}
                            >
                                <Option value="1">male</Option>
                                <Option value="2">female</Option>
                            </Select>
                         </p>
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-12 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>
                            Based in
                            <Select
                                className='custodian-select ms-3'
                                placeholder='city'
                                style={{width:'35%'}}
                            >
                                {/* <Option value="1">male</Option>
                                <Option value="2">female</Option> */}
                            </Select>
                            <Select
                                className='custodian-select ms-3'
                                placeholder='country'
                                style={{width:'35%'}}
                            >
                                {/* <Option value="1">male</Option>
                                <Option value="2">female</Option> */}
                            </Select>
                         </p>
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-12 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>
                            Has had more than 
                            <input className='input-box m-0 ms-3 me-1' style={{ width: '15%', height: '30px'}} type='number' />
                         </p>
                    </div>
                </div>
                <div className='row px-4 mb-4'>
                    <div className='col-12 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>
                            Posts in the last
                            <Select
                                className='custodian-select ms-3'
                                placeholder='day'
                                style={{width:'35%'}}
                            >
                                {/* <Option value="1">male</Option>
                                <Option value="2">female</Option> */}
                            </Select>
                         </p>
                    </div>
                </div>
                <div className='row px-4 text-center'>
                    <div className='col-12'>
                        <button className='find-btn px-3 ms-0' style={{width: '80%', height: '40px'}}>Find Groups</button>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Page3;