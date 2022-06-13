import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import avatar from '../images/avatar.png'
import '../styles/style.css';

function Page6() {

    const [titleArr, setTitleArr] = useState(['DildoManiacs', 'flower Browsers', 'MotorCar Fans', 'Rock Climbers']);

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

    const showDetail = (e) => {
        let id = parseInt(e.target.id);
        localStorage.setItem('curr',titleArr[id]);
        document.getElementById('redirect').click();
    }

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <div style={{position: 'relative', marginTop:'74px'}}>
                    <h4 className='px-3 mb-3' style={{fontWeight: '700', width: '100vw'}}>Manage Group(s)</h4>
                </div>
                <div className='px-3'>
                    <div className='row px-4 pt-3'>
                        {titleArr.map((title, i) => {
                            return (
                                <div className='col-sm-3 col-6 px-2 text-center'>
                                    <div className='empty'>
                                        <div className='top-btn-section'>
                                            <button className='top-3-btn' id={i} onClick={showDetail}><p className='m-0' id={i}><img id={i} src={avatar} alt='' style={{height:'13px'}}/>{i+1}</p></button>
                                            <a id='redirect' href='manage-group-detail' style={{diplay: 'none'}}/>
                                        </div>
                                    </div>
                                    <p className='pt-1' style={{fontWeight: '500', fontSize: '16px'}}>{title}</p>
                                </div>
                            )
                        })}
                        <div className='col-sm-3 col-6 px-2 text-center'>
                        </div>
                        <div className='col-sm-3 col-6 px-2 text-center'>
                            <div className='empty-group' onClick={startGroup}>
                                <a href='/start-a-group' className='start-group' style={{fontWeight: '500', backgroundColor: '#afafaf', color: 'white'}}><p className='mb-0'>Start Your<br/>Own Group</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Page6;