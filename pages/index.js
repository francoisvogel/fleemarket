import Layout from '../components/layout';

import Refugees from '../public/images/refugees.jpg'
import Entertainment from '../public/images/entertainment.png'
import Exchange from '../public/images/exchange.jpg'

const stylingRefugees = {
    backgroundImage: `url(${Refugees.src})`,
}

const stylingEntertainment = {
    backgroundImage: `url(${Entertainment.src})`,
}

const stylingExchange = {
    backgroundImage: `url(${Exchange.src})`,
}

export default function Index() {
    return (
        <Layout>
            <div className='p-3 bg-gradient-to-tr from-yellow-100 to-white'>
                <p className='text-xl lg:text-7xl text-yellow-900 font-extrabold text-center py-5 mb-5'>Flee Market</p>
                <div className='h-screen rounded-lg relative bg-cover bg-no-repeat mb-10' style={stylingRefugees}>
                    <p className='absolute text-red-500 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place where Ukrainian families that were forced to flee can come and collect essentials</p>
                </div>
                <div className='h-screen rounded-lg relative bg-cover bg-no-repeat mb-10' style={stylingEntertainment}>
                    <p className='absolute text-blue-600 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place with lots of entertainment for children of all ages</p>
                </div>
                <div className='h-screen rounded-lg relative bg-cover bg-no-repeat' style={stylingExchange}>
                    <p className='absolute text-yellow-600 bottom-10 p-3 text-center text-xl lg:text-5xl font-bold'>A place of cultural exchange between volunteers, refugees and local residents</p>
                </div>
            </div>
        </Layout>
    )   
}