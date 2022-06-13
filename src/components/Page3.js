import React from 'react';
import { Switch, Select } from 'antd';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

const { Option } = Select;

function Page3() {

    const onUpload = () => {
        document.getElementById('imgInp').click();
    }

    const selectFile = (e) => {
        const [file] = document.getElementById('imgInp').files
        if (file) {
            document.getElementsByClassName('upload-image')[0].src = URL.createObjectURL(file)
        }
    }

    const onSwitchGenderRatio = (checked) => {
    }

    const selectGenderRatio = (value) => {
    }

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3 mb-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Start Your Own Group</h4>
                <div className='content-bottom px-4'>
                    <p className='mt-2 mb-0 content-1'>Group Name:</p>
                    <input className='input-box' type='text' />
                    <p className='mt-2 mb-0 content-1'>Group Moto: (short slogan)</p>
                    <input className='input-box' type='text' />
                    <p className='mt-2 mb-0 content-1'>Group Description:</p>
                    <textarea className='text-box' />
                    <div>
                        <div style={{position: 'relative'}}>
                            <p className='mb-0 content-1'>Group Image:</p>
                            <button className='mt-2 upload-btn' onClick={onUpload}>upload</button>
                            <input accept="image/*" type='file' id="imgInp" style={{display: 'none'}} onChange={selectFile} />
                            <img className='upload-image' src='' alt="GroupImage" />
                        </div>
                    </div>
                    <p className='mt-5 mb-2 content-1'>Allow These Types of Content:</p>
                    <div className='row'>
                        <div className='col-4 mb-2'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="photos"> Photos</label>
                        </div>
                        <div className='col-4 mb-2'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="videos"> Videos</label>
                        </div>
                        <div className='col-4 mb-2'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="status"> Status</label>
                        </div>
                        <div className='col-4 mb-4 pe-0'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="comments"> Comments</label>
                        </div>
                    </div>
                    <p className='mb-2 content-1'>Allow These Types of Member:</p>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="photos"> Premium</label>
                        </div>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="videos"> Free</label>
                        </div>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="status"> PSP</label>
                        </div>
                    </div>
                    <p className='mb-2 content-1'>Allow Genders:</p>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="photos"> Male</label>
                        </div>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="videos"> Female</label>
                        </div>
                        <div className='col-4 mb-4'>
                            <input className='check-box' type='checkbox'/><label className='ps-2' for="status"> TG</label>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Gender Ratio:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mt-2 mb-4'>
                        <Select
                            defaultValue="1"
                            style={{
                                width: '100%',
                            }}
                            onChange={selectGenderRatio}
                        >
                            <Option value="1">90% female 10% male</Option>
                            <Option value="2">80% female 20% male</Option>
                            <Option value="3">70% female 30% male</Option>
                        </Select>
                    </div>
                    <div style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Geographically Based Group:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mt-2 mb-2'>
                        <Select
                            defaultValue="1"
                            style={{
                                width: '100%',
                            }}
                            onChange={selectGenderRatio}
                        >
                            <Option value="1">Country</Option>
                            <Option value="2">Country</Option>
                        </Select>
                    </div>
                    <div className='mt-2 mb-2'>
                        <Select
                            defaultValue="1"
                            style={{
                                width: '100%',
                            }}
                            onChange={selectGenderRatio}
                        >
                            <Option value="1">State / Region</Option>
                            <Option value="2">State / Region</Option>
                            <Option value="3">State / Region</Option>
                        </Select>
                    </div>
                    <div className='mt-2 mb-4'>
                        <Select
                            defaultValue="1"
                            style={{
                                width: '100%',
                            }}
                            onChange={selectGenderRatio}
                        >
                            <Option value="1">Town / City</Option>
                            <Option value="2">Town / City</Option>
                            <Option value="3">Town / City</Option>
                        </Select>
                    </div>
                    <div style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Group Has Other Moderators:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='group-moderator mb-2'>Nmae of Mod</div>
                    <div className='group-moderator mb-2'>Nmae of Second Mod(opt)</div>
                    <div className='group-moderator mb-4'>Nmae of Third Mod(opt)</div>
                    <div style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Limited Membership:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mt-3 mb-4'>
                        <Select
                            defaultValue="1"
                            style={{
                                width: '100%',
                            }}
                            onChange={selectGenderRatio}
                        >
                            <Option value="1">10 members</Option>
                            <Option value="2">25 members</Option>
                            <Option value="3">50 members</Option>
                            <Option value="4">100 members</Option>
                            <Option value="5">200 members</Option>
                            <Option value="6">500 members</Option>
                            <Option value="7">1000 members</Option>
                        </Select>
                    </div>
                    <div className='mb-3' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Invite Only Group:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mb-3' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Allow Members to Invite:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mb-3' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Allow your Friends Only:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mb-3' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Include in Suggested Groups:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='mb-4' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Charge Token Fee to Join:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div style={{height: '61px'}}>
                        <input className='input-box mb-4' style={{display: 'inline-block', width: '25%', float:'right'}} type='text' />
                        <p className=' mb-0 me-2 content-1' style={{float: 'right'}}>Amount to Charge:</p>
                    </div>
                    <div className='mb-4' style={{position:'relative'}}>
                        <p className='mb-2 content-1'>Non Members can view group:</p>
                        <div className='switch-toggle'>
                            <Switch defaultChecked onChange={onSwitchGenderRatio} />
                        </div>
                    </div>
                    <div className='my-5 upgrade-section mx-auto'  style={{width: '90%'}}><a className='upgrade-btn' href='/page3'>Start Group</a></div>
                </div>
            </div>
        </div>    
    );
}

export default Page3;