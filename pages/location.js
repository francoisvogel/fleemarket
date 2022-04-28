import Layout from '../components/layout';
import Announcement from '../public/images/announcement.jpg'

const stylingAnnouncement = {
    backgroundImage: `url(${Announcement.src})`,
}

export default function Entertainment() {
    return (
        <Layout>
            <div className=''>
                <p className='text-lg lg:text-4xl text-center'>Location</p>
                <p className='text-lg lg:text-xl text-center px-10'>Vrouw Avenweg 650, 2493 WS Den Haag</p>
                <div className='h-200 w-200 overflow-hidden grid place-items-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1226.6435807730509!2d4.40037990834894!3d52.05629469418812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c9589de88ccd%3A0x34071a6421931555!2sBSN%20JSL%20parking!5e0!3m2!1sen!2snl!4v1651164702642!5m2!1sen!2snl" className='w-11/12 h-screen m-4' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-11/12 h-screen bg-no-repeat bg-center bg-contain' style={stylingAnnouncement}></div>
            </div>
        </Layout>
    )
}