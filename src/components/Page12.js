import React from 'react';
import { Select } from 'antd';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

const { Option } = Select;

const placeholder = 'Type your status or thought here, if a photo or video, this is where you put the title.';

function Page3() {

    const onUpload = () => {
        document.getElementById('imgInp').click();
    }

    const selectFile = (e) => {
        const [file] = document.getElementById('imgInp').files
        if (file) {
            document.getElementsByClassName('post-img')[0].src = URL.createObjectURL(file)
        }
    }

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3 mb-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Post Content</h4>
                <div className='row px-3 mb-4'>
                    <div className='col-5 pe-0'>
                        <p className=' mb-0 content-1' style={{paddingTop: '3px'}}>Post to Group:</p>
                    </div>
                    <div className='col-6 pt-1 ps-0'>
                        <Select
                            className='custodian-select'
                            placeholder='group name'
                            style={{width: '100%'}}
                        >
                            <Option value="1">DildoManiacs</Option>
                            <Option value="2">flower Browsers</Option>
                            <Option value="3">MotorCar Fans</Option>
                            <Option value="4">Rock Climbers</Option>
                        </Select>
                    </div>
                </div>
                <p className='mt-1 mb-0 ps-4 content-1'>Status Update / Thouht or Title:</p>
                <textarea className='post-content mx-4' placeholder={placeholder} />
                <p className=' mt-4 mb-0 ps-4 content-1'>Include a photo or video in this post:</p>
                <div className='mt-3 mx-0 px-3 text-center'>
                    <button className='find-btn px-3 mb-3 mx-0' style={{width: '85%', height: '40px'}} onClick={onUpload} >Click to browse for photo / video</button>
                    <img className='post-img' src='' alt=''/>
                    <button className='find-btn px-3 my-3 mx-0' style={{width: '85%', height: '40px'}}>Submit Post</button>
                </div>
                <input accept="image/*" type='file' id="imgInp" style={{display: 'none'}} onChange={selectFile} />
            </div>
        </div>    
    );
}

export default Page3;