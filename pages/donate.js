import Layout from '../components/layout';
import Link from 'next/link';
import BSN from '../public/images/bsn.jpg';
import Items from '../public/images/items.jpg';
import QRCode from '../public/images/qrcode.jpg';

const stylingBSN = {
    backgroundImage: `url(${BSN.src})`,
}

const stylingItems = {
    backgroundImage: `url(${Items.src})`,
}

const stylingQRCode = {
    backgroundImage: `url(${QRCode.src})`,
}

export default function Donate() {
    return (
        <Layout>
            <div className='grid place-items-center'>
                <p className='text-lg lg:text-4xl text-center m-2'>How can you help?</p>
                <p className='text-base lg:text-2xl text-center font-bold text-red-800 py-10'>Important: The new Flee Market is scheduled for the 10th July!</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lorem a libero efficitur volutpat ut quis enim. Nunc rhoncus pretium dapibus. Maecenas tincidunt massa nec mi facilisis, et pharetra massa ullamcorper. Aenean fringilla commodo est, quis facilisis dui accumsan ac. Curabitur ante odio, facilisis ac urna accumsan, suscipit ultrices mi. Pellentesque eleifend magna vel sagittis viverra. In finibus mauris ut quam condimentum, in luctus eros pharetra. Cras non dui vitae tortor porta consequat.Vestibulum placerat sit amet nisl vehicula convallis. Donec sit amet auctor elit. Cras eget ex sollicitudin, auctor risus id, luctus mauris. Proin convallis, ligula id iaculis pellentesque, neque nibh fermentum nibh, ac ultricies urna nunc eget ligula. Curabitur mollis eget mi non tincidunt. Phasellus ac lorem libero. Vestibulum non feugiat nibh. Mauris auctor orci at felis vestibulum elementum. Aliquam sodales dolor at odio bibendum, id pharetra turpis auctor. In vel mauris ac massa cursus venenatis. Sed quis aliquam augue. Sed sollicitudin dui a turpis dignissim vestibulum. Duis ut justo porta leo lobortis consequat ac ut nisi. Donec gravida lorem nec risus suscipit varius. Duis vel tincidunt nisi, ac ultrices tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mollis, felis eget scelerisque fermentum, quam ipsum rhoncus enim, ut auctor velit tortor non lectus. Aliquam aliquet ipsum sed rhoncus bibendum. Donec aliquet risus purus, quis porttitor lorem blandit quis. Fusce volutpat faucibus justo. Aenean fringilla scelerisque eros a hendrerit. Morbi nec felis eget justo elementum blandit. Curabitur eget sem ut tellus tristique ornare. Mauris sodales mattis nunc, a lacinia nisi tincidunt quis. Proin leo nibh, condimentum varius ante sed, auctor maximus erat. Nullam sagittis dolor non erat porta varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac orci consequat, pellentesque ipsum eu, hendrerit diam.</p> */}
                <div className='w-11/12 h-screen bg-no-repeat bg-center bg-contain' style={stylingItems}></div>
                <p className='text-lg lg:text-4xl text-center m-2'>QR-Code for Donations</p>
                <div className='flex flex-row flex-wrap'>
                    <div className='flex flex-row flex-wrap'>
                        <Link href="https://tikkie.me/pay/BSN_FA/pKV2tAGaEzuBz2cCusm9BF">
                            <a style={stylingQRCode} className="h-32 w-32 bg-cover m-2"></a>
                        </Link>
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'>Zenbit</p> */}
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                        {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                    </div>
                </div>
                <p className='text-lg lg:text-4xl text-center m-2'>Sponsors</p>
                <div className='flex flex-row flex-wrap'>
                    <Link href="https://britishschool.nl">
                        <a style={stylingBSN} className="h-32 w-32 bg-cover m-2"></a>
                    </Link>
                    {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'>Zenbit</p> */}
                    {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                    {/* <p className='h-32 w-32 rounded bg-gray-200 m-2 p-2 rotate-90'></p> */}
                </div>
            </div>
        </Layout>
    )
}