import Layout from '../components/layout';
import Announcement from '../public/images/announcement.jpg'

const stylingAnnouncement = {
    backgroundImage: `url(${Announcement.src})`,
}

export default function Entertainment() {
    return (
        <Layout>
            <div className=''>
                <p className='text-lg lg:text-4xl text-center'>Entertainment & Activities</p>
                <div className='w-11/12 h-screen bg-no-repeat bg-center bg-contain' style={stylingAnnouncement}></div>
                <p></p>
            </div>
        </Layout>
    )   
}