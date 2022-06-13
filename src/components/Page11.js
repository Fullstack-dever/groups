import React, {useState} from 'react';
import Sidebar from './Sidebar';
import { Popover, Radio, Checkbox, Divider, Table } from 'antd';
import TopSection from './TopSection'
import threeIcon from '../images/three-dots.svg'
import '../styles/style.css';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Photos',
      dataIndex: 'photos',
    },
    {
      title: 'Vids',
      dataIndex: 'vids',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
    {
      title: 'Last Post',
      dataIndex: 'lastPost',
    },
    {
      title: 'Gag',
      dataIndex: 'gag',
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
    },
    {
      title: 'PM',
      dataIndex: 'pm',
    },
]

const disData = [
    {
        key: '1',
        name: 'Harry',
        photos: 42,
        vids: 12,
        status: 14,
        comment: 54,
        lastPost: '12 Jun',
        gag: 'G',
        delete: 'D',
        pm: 'PM'
    },
    {
        key: '2',
        name: 'Jane',
        photos: 0,
        vids: 1,
        status: 677,
        comment: 3,
        lastPost: '13 Jun',
        gag: 'G',
        delete: 'D',
        pm: 'PM'
    },
]

function Page6(props) {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(disData)

    const drop = (
        <div className='drop-content'>
            <p className='menu-title mb-2 mt-1'>Sort by:</p>
            <div className='ps-3'>
                <Radio.Group defaultValue={1}>
                    <Radio value={1}>Most Photos</Radio>
                    <Radio value={2}>Most Videos</Radio>
                    <Radio value={3}>Most Status</Radio>
                    <Radio value={4}>Newest Content</Radio>
                </Radio.Group>
            </div>
            <Divider />
            <p className='menu-title mb-2'>Show Members who posted:</p>
            <div className='ps-3'>
                <Checkbox>photos</Checkbox>
                <Checkbox>videos</Checkbox>
                <Checkbox>status updates</Checkbox>
                <Checkbox>comments</Checkbox>
            </div>
        </div>
    );

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Manage Group: {localStorage.getItem('curr')}</h4>
                <p className='ps-3 group-detail' style={{fontSize: '15px'}}>{localStorage.getItem('curr')} &gt; <strong>Manage Members</strong></p>
                <Popover
                    content={drop}
                    trigger="click"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                    arrowPointAtCenter
                    placement="bottomRight"
                >
                    <img className='me-4 mb-3' src = {threeIcon} alt="" style={{width:'30px',float: 'right'}}/>
                </Popover>
                <div className='px-2' style={{clear: 'both', width: '100vw'}}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </div>
        </div>    
    );
}

export default Page6;