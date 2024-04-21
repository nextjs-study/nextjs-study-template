import { Container } from '@/components';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <section>
        <Container className='flex flex-col items-center py-[96px]'>
          <header className='flex flex-col items-center mb-16'>
            <div className='mb-3 text-yellow-700 font-semibold'>Published 20 Jan 2022</div>
            <h1 className='mb-6  text-gray-900 text-5xl font-semibold leading-[60px]'>UX review presentations</h1>
            <p className='text-xl text-slate-600'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </header>
          <img
            className='w-full aspect-[1216/560] object-cover'
            src='/placeholder.jpg'
            alt=''
          />
        </Container>
      </section>
      <section>
        <Container className='flex flex-col items-center pb-[96px]'>
          <article className='max-w-[720px]'>
            <h2 className='mb-8 text-gray-900 text-4xl font-semibold'>Introduction h2</h2>
            <h3 className='mb-5 mt-6 text-gray-900 text-2xl font-semibold'>Introduction h3</h3>
            <h4 className='mb-4 mt-6 text-gray-900 text-xl font-semibold'>Introduction h4</h4>
            <h5 className='mb-4 mt-6 text-gray-900 text-lg font-semibold'>Introduction h5</h5>
            <p className='mb-5  mt-6 text-slate-600 text-lg font-normal leading-7'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              <br />
              <br />
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id
              est ac volutpat.
            </p>

            <div className='flex flex-col justify-start mb-12 items-start gap-4'>
              <img
                className='rounded-xl object-fit'
                src='/placeholder.jpg'
              />
              <caption className='text-slate-600 font-normal text-sm'>
                Image courtesy of Fauxels via{' '}
                <Link
                  href=''
                  className='text-slate underline text-sm'
                >
                  Pexels
                </Link>
              </caption>
            </div>

            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>
            <blockquote className='flex flex-col gap-8 mb-12 pl-6 text-gray-900 text-2xl font-medium leading-9 border-l-2 border-yellow-700 italic'>
              “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
              <cite className='text-slate-600 text-base font-normal leading-normal not-italic'>— Olivia Rhye, Product Designer</cite>
            </blockquote>
            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
              <br />
              <br />
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id
              augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
              <br />
              <br />
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>
            <h3 className='mb-5 mt-6 text-gray-900 text-2xl font-semibold'>Software and tools</h3>
            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              <br />
              <br />
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id
              est ac volutpat.
            </p>
            <h3 className='mb-5 mt-6 text-gray-900 text-2xl font-semibold'>Other resources</h3>

            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus
              vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
            </p>
            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Lectus id duis vitae porttitor enim gravida morbi.
              <br />
              <br />
              Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
              <br />
              <br />
              Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </p>

            <div className='flex flex-col justify-start mb-12 items-start gap-4'>
              <img
                className='rounded-xl object-fit'
                src='/placeholder.jpg'
              />
              <caption className='text-slate-600 font-normal text-sm'>
                Image courtesy of Fauxels via{' '}
                <Link
                  href=''
                  className='text-slate underline text-sm'
                >
                  Pexels
                </Link>
              </caption>
            </div>

            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
              <br />
              <br />
              Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie
              pellentesque. Arcu ultricies sed mauris vestibulum.
            </p>

            <p className='mb-5 text-slate-600 text-lg font-normal leading-7'>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
              <br />
              <br />
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
              <br />
              <br />
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
            </p>

            <div className='w-full flex flex-col pt-6 justify-start items-start border-t border-gray-200'>
              <div className='justify-start items-center gap-4 flex'>
                <img
                  className='w-14 h-14 rounded-full'
                  src='/placeholder.jpg'
                />
                <div className='flex flex-col justify-start items-start'>
                  <div className='text-gray-900 text-lg font-semibold leading-7'>Olivia Rhye</div>
                  <div className='text-slate-600 text-base font-normal  leading-normal'>Product Designer, Untitled</div>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
};

export default Page;
