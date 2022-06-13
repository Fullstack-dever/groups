import React, {useEffect} from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

function Page1() {

    useEffect(() => {
        window.addEventListener("load", () => {
            let elements = document.getElementsByClassName('start-group');
            for(let i = 0; i < elements.length; i++) {
                let height = (elements[i].clientHeight - elements[i].children[0].clientHeight)/2 + 'px';
                elements[i].style.paddingTop = height;
            }
        });
    }, []);

    const startGroup = (e) => {
        e.target.children[0].click()
    }

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteName Logo' />
                <h4 className='pt-3 ps-3' style={{fontWeight: '700', width:'100vw', marginTop:'50px'}}>Your Groups</h4>
                <div className='content-bottom ps-5 pe-5'>
                    <p className='px-2 py-1 heading-1'>You are not a member of any groups!</p>
                    <p className='px-2 py-1 heading-1'>Here are some suggested groups for you to join.</p>
                    <div className='row m-0'>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty'>
                                <button className='join-btn'>join</button>
                            </div>
                            <p className='pt-1' style={{fontWeight: '500'}}>Car Lovers</p>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty'>
                                <button className='join-btn'>join</button>
                            </div>
                            <p className='pt-1' style={{fontWeight: '500'}}>Beach Browsers</p>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty'>
                                <button className='join-btn'>join</button>
                            </div>
                            <p className='pt-1' style={{fontWeight: '500'}}>Animals</p>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty-group' onClick={startGroup}>
                                <a href='/start-a-group' className='start-group' style={{fontWeight: '500'}}><p className='mb-0'>Start Your<br/>Own Group</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Page1;