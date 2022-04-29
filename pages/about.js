import Layout from '../components/layout';
import Person from '../components/person';

export default function About() {
    return (
        <Layout>
            <div className='grid place-items-center'>
                {/* <p className='text-xl lg:text-4xl text-center'>Our Story</p> */}
                {/* <p className='w-11/12 lg:w-1/2 content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lorem a libero efficitur volutpat ut quis enim. Nunc rhoncus pretium dapibus. Maecenas tincidunt massa nec mi facilisis, et pharetra massa ullamcorper. Aenean fringilla commodo est, quis facilisis dui accumsan ac. Curabitur ante odio, facilisis ac urna accumsan, suscipit ultrices mi. Pellentesque eleifend magna vel sagittis viverra. In finibus mauris ut quam condimentum, in luctus eros pharetra. Cras non dui vitae tortor porta consequat.Vestibulum placerat sit amet nisl vehicula convallis. Donec sit amet auctor elit. Cras eget ex sollicitudin, auctor risus id, luctus mauris. Proin convallis, ligula id iaculis pellentesque, neque nibh fermentum nibh, ac ultricies urna nunc eget ligula. Curabitur mollis eget mi non tincidunt. Phasellus ac lorem libero. Vestibulum non feugiat nibh. Mauris auctor orci at felis vestibulum elementum. Aliquam sodales dolor at odio bibendum, id pharetra turpis auctor. In vel mauris ac massa cursus venenatis. Sed quis aliquam augue. Sed sollicitudin dui a turpis dignissim vestibulum. Duis ut justo porta leo lobortis consequat ac ut nisi. Donec gravida lorem nec risus suscipit varius. Duis vel tincidunt nisi, ac ultrices tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mollis, felis eget scelerisque fermentum, quam ipsum rhoncus enim, ut auctor velit tortor non lectus. Aliquam aliquet ipsum sed rhoncus bibendum. Donec aliquet risus purus, quis porttitor lorem blandit quis. Fusce volutpat faucibus justo. Aenean fringilla scelerisque eros a hendrerit. Morbi nec felis eget justo elementum blandit. Curabitur eget sem ut tellus tristique ornare. Mauris sodales mattis nunc, a lacinia nisi tincidunt quis. Proin leo nibh, condimentum varius ante sed, auctor maximus erat. Nullam sagittis dolor non erat porta varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac orci consequat, pellentesque ipsum eu, hendrerit diam.</p> */}
                {/* <p className='text-xl lg:text-4xl text-center'>Organizers you can trust</p> */}
                <div className='flex flex-row flex-wrap'>
                    <Person name="Dorota" title="Main Organizer" email="dloszczykow@gmail.com" tel="+31641337805" />
                    <Person name="Francois" title="Web/communications coordinator" email="francoisvogel@bsnstudent.nl" tel="--" />
                    <Person name="Romain" title="Activities coordinator" email="romainkrummenacher@bsnstudent.nl" tel="--" />
                </div>
            </div>
        </Layout>
    )
}