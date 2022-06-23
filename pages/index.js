import Layout from '../components/layout';
import Link from 'next/link';

import Refugees from '../public/images/refugees.jpg'
import Entertainment from '../public/images/entertainment.png'
import Exchange from '../public/images/exchange.jpg'
import Announcement from '../public/images/announcement.jpg'
import QRCode from '../public/images/qrcode.jpg';

const stylingRefugees = {
    backgroundImage: `url(${Refugees.src})`,
}

const stylingEntertainment = {
    backgroundImage: `url(${Entertainment.src})`,
}

const stylingExchange = {
    backgroundImage: `url(${Exchange.src})`,
}

const stylingAnnouncement = {
    backgroundImage: `url(${Announcement.src})`,
}

const stylingQRCode = {
    backgroundImage: `url(${QRCode.src})`,
}

export default function Index() {
    return (
        <Layout>
            <div className='p-3 bg-gradient-to-tr from-yellow-100 to-white'>
                <p className='text-xl lg:text-7xl text-yellow-900 font-extrabold text-center py-5 mb-5'>Flee Market</p>
                <div className='mb-10 w-11/12 h-screen bg-no-repeat bg-center bg-contain' style={stylingAnnouncement}></div>
                <p className='text-lg lg:text-4xl text-center m-2'>QR-Code for Donations</p>
                <div className='flex flex-row flex-wrap justify-center p-10 animate-pulse w-full'>
                    <div className='flex flex-row flex-wrap'>
                        <Link href="https://tikkie.me/pay/BSN_FA/pKV2tAGaEzuBz2cCusm9BF">
                            <a style={stylingQRCode} className="h-32 w-32 bg-cover m-2"></a>
                        </Link>
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'>Zenbit</p> */}
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                    </div>
                </div>
                <div className='h-screen rounded-lg relative bg-cover bg-no-repeat mb-10 bg-contain bg-center' style={stylingRefugees}>
                    <p className='absolute bg-blue-200 min-w-full text-blue-600 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place where Ukrainian families that were forced to flee can come and collect essentials</p>
                </div>
                <div className='h-screen rounded-lg relative bg-center bg-no-repeat mb-10' style={stylingEntertainment}>
                    <p className='absolute bg-blue-200 min-w-full text-blue-600 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place with lots of entertainment for children of all ages</p>
                </div>
                <div className='h-screen rounded-lg relative bg-cover bg-no-repeat' style={stylingExchange}>
                    <p className='absolute bg-blue-200 min-w-full text-blue-600 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place of cultural exchange between volunteers, refugees and local residents</p>
                </div>
            </div>
        </Layout>
    )
}