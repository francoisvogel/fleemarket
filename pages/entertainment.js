import Layout from '../components/layout';
import Announcement from '../public/images/announcement.jpg'

const stylingAnnouncement = {
    backgroundImage: `url(${Announcement.src})`,
}

export default function Entertainment() {
    return (
        <Layout>
            <div className='grid place-items-center'>
                <p className='text-lg lg:text-4xl text-center'>Entertainment & Activities</p>
                <p className='text-lg lg:text-xl px-2 lg:w-1/2'>Several activities will proposed to children during the event:</p>
                <ul className='list-disc text-lg lg:text-xl px-2 lg:w-1/3'>
                    <li>Drawing & Coloring</li>
                    <li>Bracelet making</li>
                    <li>Cookie making</li>
                    <li>Face painting</li>
                    <li>Fabrication of paper airplanes</li>
                    <li>Babysitting</li>
                </ul>
                <p className='text-lg lg:text-xl px-2 lg:w-1/2'>These activities will be available during the entire event. Feel free to have your children come along!</p>
                <div className='w-11/12 h-screen bg-no-repeat bg-center bg-contain' style={stylingAnnouncement}></div>
                <p></p>
            </div>
        </Layout>
    )   
}