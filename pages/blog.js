import Layout from '../components/layout';
import Article from '../components/article';

export default function Blog() {
    return (
        <Layout>
            <div className='grid place-items-center'>
                <p className='text-xl lg:text-4xl text-center'>News</p>
                {/* <Article title="This is a test" date="26/04/22" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lorem a libero efficitur volutpat ut quis enim. Nunc rhoncus pretium dapibus. Maecenas tincidunt massa nec mi facilisis, et pharetra massa ullamcorper. Aenean fringilla commodo est, quis facilisis dui accumsan ac. Curabitur ante odio, facilisis ac urna accumsan, suscipit ultrices mi. Pellentesque eleifend magna vel sagittis viverra. In finibus mauris ut quam condimentum, in luctus eros pharetra. Cras non dui vitae tortor porta consequat.Vestibulum placerat sit amet nisl vehicula convallis. Donec sit amet auctor elit. Cras eget ex sollicitudin, auctor risus id, luctus mauris. Proin convallis, ligula id iaculis pellentesque, neque nibh fermentum nibh, ac ultricies urna nunc eget ligula. Curabitur mollis eget mi non tincidunt. Phasellus ac lorem libero. Vestibulum non feugiat nibh. Mauris auctor orci at felis vestibulum elementum. Aliquam sodales dolor at odio bibendum, id pharetra turpis auctor. In vel mauris ac massa cursus venenatis. Sed quis aliquam augue. Sed sollicitudin dui a turpis dignissim vestibulum. Duis ut justo porta leo lobortis consequat ac ut nisi. Donec gravida lorem nec risus suscipit varius. Duis vel tincidunt nisi, ac ultrices tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mollis, felis eget scelerisque fermentum, quam ipsum rhoncus enim, ut auctor velit tortor non lectus. Aliquam aliquet ipsum sed rhoncus bibendum. Donec aliquet risus purus, quis porttitor lorem blandit quis. Fusce volutpat faucibus justo. Aenean fringilla scelerisque eros a hendrerit. Morbi nec felis eget justo elementum blandit. Curabitur eget sem ut tellus tristique ornare. Mauris sodales mattis nunc, a lacinia nisi tincidunt quis. Proin leo nibh, condimentum varius ante sed, auctor maximus erat. Nullam sagittis dolor non erat porta varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac orci consequat, pellentesque ipsum eu, hendrerit diam." /> */}
                <Article title="New date confirmed" date="21/06/22" content="The date of the 4th Flee Market has officially been confirmed for the 10th of July 2022!" />
                {/* <Article title="A successful Flee Market" date="08/05/22" content="This was a successful Flee Market where 1000 refugees could pick up necessary items. Photos will be posted soon!" /> */}

            </div>
        </Layout>
    )
}