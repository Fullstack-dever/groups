import React, {useState, useEffect} from 'react';
import { Radio, Divider, Checkbox, Popover, Rate } from 'antd';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import threeIcon from '../images/three-dots.svg'
import '../styles/style.css';

function Page5() {

    const [visible, setVisible] = useState(false);
    const [titleArr, setTitleArr] = useState(['SiteName', 'flower Browsers', 'MotorCar Fans']);
    const [modalTitle, setModalTitle] = useState('');
    const [invite, setInvite] = useState(false);

    let flag = 0;

    useEffect(() => {
        window.addEventListener("load", () => {
            let elements = document.getElementsByClassName('start-group');
            for(let i = 0; i < elements.length; i++) {
                let height = (elements[i].clientHeight - elements[i].children[0].clientHeight)/2 + 'px';
                elements[i].style.paddingTop = height;
            }
        });
    }, []);

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    const startGroup = (e) => {
        e.target.children[0].click()
    }

    const showDetail = (e) => {
        document.getElementsByClassName('detail-background')[0].style.display = 'block';
        setModalTitle(titleArr[e.target.parentNode.id]);
    }

    const hideDetail = (e) => {
        document.getElementsByClassName('detail-background')[0].style.display = 'none';
        document.getElementsByClassName('detail-body')[0].style.height = '55vh';
        setInvite(false);
    }

    const bodyClick = () => {
        flag = 1;
    }

    const backClick = () => {
        if(flag === 0){
            hideDetail();
        }
        flag = 0;
    }

    const inviteSomeone = () => {
        document.getElementsByClassName('detail-body')[0].style.height = '45vh';
        setInvite(true);
    }

    const drop = (
        <div className='drop-content'>
            <p className='menu-title mb-2 mt-1'>Sort by:</p>
            <div className='ps-3'>
                <Radio.Group defaultValue={1}>
                    <Radio value={1}>Most Active</Radio>
                    <Radio value={2}>Most Members</Radio>
                    <Radio value={3}>Most Photos</Radio>
                    <Radio value={4}>Newest Content</Radio>
                </Radio.Group>
            </div>
            <Divider />
            <p className='menu-title mb-2'>Show Groups with:</p>
            <div className='ps-3'>
                <Checkbox>photos</Checkbox>
                <Checkbox>videos</Checkbox>
                <Checkbox>status updates</Checkbox>
            </div>
        </div>
    )

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <div style={{position: 'relative', marginTop:'74px'}}>
                    <h4 className='px-3 mb-3' style={{fontWeight: '700', width: '100vw'}}>Your Groups</h4>
                    <Popover
                        content={drop}
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                        arrowPointAtCenter
                        placement="bottomRight"
                    >
                        <img src = {threeIcon} alt="" style={{width:'30px',position: 'absolute', right: '20px', top: '0px'}}/>
                    </Popover>
                </div>
                <div className='px-3'>
                    <div className='row px-4 pt-3'>
                        {titleArr.map((title, i) => {
                            return (
                                <div className='col-sm-3 col-6 px-2 text-center'>
                                    <div className='empty'>
                                        <div className='bottom-btn-section pe-1'>
                                            <button className='mute-leave-btn py-0 px-2 ms-3'>leave</button>
                                            <button className='mute-leave-btn py-0 px-2 ms-3'>mute</button>
                                        </div>
                                        <div className='top-btn-section'>
                                            <button className='top-3-btn' id={i} onClick={showDetail}><img src={threeIcon} alt="" style={{width:'20px'}}/></button>
                                        </div>
                                    </div>
                                    <p className='pt-1' style={{fontWeight: '500', fontSize: '16px'}}>{title}</p>
                                </div>
                            )
                        })}
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty'>
                                <div className='bottom-btn-section'>
                                    <button className='mute-leave-btn py-0 px-2' style={{width: '84%', margin: '0 8%'}}><a href='manage-groups'>manage</a></button>
                                </div>
                                <div className='top-btn-section'>
                                    <button className='top-3-btn'><img src={threeIcon} alt="" style={{width:'20px'}}/></button>
                                </div>
                            </div>
                            <p className='pt-1' style={{fontWeight: '500', fontSize: '16px'}}>Rock Climbers</p>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty-group' onClick={startGroup}>
                                <a href='/find-groups' className='start-group' style={{fontWeight: '500'}}><p className='mb-0'>Find a<br/>Group to<br/>Join</p></a>
                            </div>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty-group' onClick={startGroup}>
                                <a href='/start-a-group' className='start-group' style={{fontWeight: '500', backgroundColor: '#afafaf', color: 'white'}}><p className='mb-0'>Start Your<br/>Own Group</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detail-background' onClick={backClick}>
                <div className='detail-body' onClick={bodyClick}>
                    <button className='cancel-btn' onClick={hideDetail}>X</button>
                    {!invite && 
                        <div>
                            <p className='detail-title'>{modalTitle}</p>
                            <div className='detail-content'>
                                <div className='row ps-2'>
                                    <div className='col-3 p-0'>
                                        <p className='detail-subtitle m-0'>Custodian:</p>
                                    </div>
                                    <div className='col-2 p-0 ps-3'>
                                        <div className='detail-avatar'></div>
                                    </div>
                                    <div className='col-7 p-0 ps-2'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px'}}>boxerboi</p>
                                        <Rate allowHalf defaultValue={3.5} />
                                    </div>
                                </div>
                                <div className='row ps-2 pb-2'>
                                    <div className='col-3 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Moderators:</p>
                                    </div>
                                    <div className='col-9 p-0 ps-4'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '10px'}}>boxerboi<br/>recumrace<br/>angelface</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-3 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Created:</p>
                                    </div>
                                    <div className='col-9 p-0 ps-2'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '10px'}}><strong>December</strong> 12 2015</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-3 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Members:</p>
                                    </div>
                                    <div className='col-9 p-0 ps-2'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '10px'}}>452 &nbsp; (350 M / 102 F)</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-2 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Posts:</p>
                                    </div>
                                    <div className='col-10 p-0 ps-2'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '10px'}}>1,563</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-2 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Motto:</p>
                                    </div>
                                    <div className='col-10 p-0 ps-2'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '12px'}}>There ain't nothing finer than a flower smooth as silk</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-3 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Description:</p>
                                    </div>
                                    <div className='col-9 p-0 ps-4'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '12px'}}>{modalTitle} is a group for lovers of fine flowers to share their mutual appreciation</p>
                                    </div>
                                </div>
                                <div className='row ps-2 pb-3'>
                                    <div className='col-8 p-0'>
                                        <p className='detail-subtitle p-0 m-0'>Accepting New Members?:</p>
                                    </div>
                                    <div className='col-4 p-0'>
                                        <p className='m-0 rating-name1' style={{fontSize: '10px', lineHeight: '12px'}}>Yes<br/><span onClick={inviteSomeone}>(invite someone)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {invite &&
                        <div>
                            <p className='detail-title'>{modalTitle} - Invite somwone</p>
                            <div className='detail-content'>
                                <p className='detail-subtitle m-0 mb-3' style={{lineHeight: 'normal'}}>Enter the Member Name of the person you wish to invite this group:</p>
                                <input className='input-box' type='text' placeholder='Enter member name...' />
                                <p className='detail-subtitle mb-3 mt-3'>Optional note to the member:</p>
                                <textarea className='text-box mb-3' placeholder="Optional comment, eg. on why you think they'll love this group" />
                                <button className='upload-btn' style={{float: 'right'}}>invite</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>    
    );
}

export default Page5;