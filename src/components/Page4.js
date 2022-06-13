import React, {useState} from 'react';
import { Rate , Radio, Divider, Checkbox, Popover } from 'antd';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import threeIcon from '../images/three-dots.svg'
import '../styles/style.css';

function Page4() {

    const [visible, setVisible] = useState(false);

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    const drop = (
        <div className='drop-content'>
            <p className='menu-title mb-2 mt-1'>View mode:</p>
            <div className='ps-3'>
                <Radio.Group defaultValue={1}>
                    <Radio value={1}>activity now</Radio>
                    <Radio value={2}>chrono</Radio>
                    <Radio value={3}>pics/bids only</Radio>
                </Radio.Group>
            </div>
            <Divider />
            <p className='menu-title mb-2'>Show:</p>
            <div className='ps-3'>
                <Checkbox>photos</Checkbox>
                <Checkbox>videos</Checkbox>
                <Checkbox>status updates</Checkbox>
                <Checkbox>comments</Checkbox>
                <Checkbox>joins</Checkbox>
            </div>
        </div>
    )

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <div style={{position: 'relative', marginTop:'74px'}}>
                    <h4 className='px-3 mb-3' style={{fontWeight: '700', width: '100vw'}}>Your Stream</h4>
                    <Popover
                        content={drop}
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                        arrowPointAtCenter
                        placement="bottomRight"
                    >
                        <img src = {threeIcon} alt="" style={{width:'24px',position: 'absolute', right: '20px', top: '0px'}}/>
                    </Popover>
                </div>
                <div className='px-3'>
                    <p className='m-0' style={{fontWeight: '500'}}>posted in <strong>NatureLovers</strong> - 2 mins ago</p>
                    <div className='empty-content'></div>
                    <div className='comment-section row'>
                        <div className='col-1 p-0'>
                            <div className='comment-avatar'></div>
                        </div>
                        <div className='rating-section col-3'>
                            <p className='m-0 rating-name'>RoxanneS</p>
                            <Rate allowHalf defaultValue={3.5} />
                        </div>
                        <div className='col-7 py-1 ps-1 pe-4'>
                            <div className='rating-comment'>I am hungry for pie - who has some?</div>
                        </div>
                        <div className='col-1 py-1 ps-1 pe-0'>
                            <p className='rating-btn m-0'>like<br />comment</p>
                        </div>
                    </div>
                    <div className='comment-sub-section1'>
                    </div> 
                    <div className='comment-sub-section2 row'>
                        <div className='col-1 p-0'>
                            <div className='comment-avatar1'></div>
                        </div>
                        <div className='rating-section1 col-3'>
                            <p className='m-0 rating-name1'>boxerboi</p>
                            <Rate allowHalf defaultValue={3.5} />
                        </div>
                        <div className='col-8 py-1 px-1'>
                            <div className='rating-comment1'>It is a nice flower I will give you that.</div>
                            <div className='rating-from'>
                                naughtywife2016 likes this
                                <div className='like-btn'>like</div>
                            </div>
                        </div>
                    </div>
                    <div className='your-comment row'>
                        <div className='col-1 p-0'>
                            <div className='comment-avatar2'></div>
                        </div>
                        <div className='col-11 ps-2 pe-0'>
                            <input className='your-comment-text' type='text' placeholder='your comment...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Page4;