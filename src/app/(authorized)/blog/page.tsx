import { BlogCard, Button, Container } from '@/components';
import { Pagination } from '@/components/Pagination/Pagination';
import { Input, Select } from '@/components/inputs';

const Page = () => {
  return (
    <>
      <section className='w-full py-24 bg-gray-50 gap-8'>
        <Container className='flex flex-col justify-start items gap-3 mb-6'>
          <div className=' text-yellow-700 text-base font-semibold  leading-normal'>Resources</div>
          <h1 className=' text-gray-900 text-5xl font-semibold leading-[60px]'>Cool Blog</h1>

          <p className=' text-slate-600 text-xl font-normal leading-[30px]'>Tool and strategies modern teams need to help their companies grow. Also frogs.</p>
        </Container>
      </section>
      <section>
        <Container className='flex flex-wrap py-[96px]'>
          <aside className='w-[28.34%] h-full pr-16'>
            <form
              className='flex flex-col justify-start items-stretch gap-8'
              action=''
            >
              <Input
                name='search'
                placeholder='Search by name'
              />
              <Select
                labelClassName='text-yellow-700 font-semibold'
                name='categories'
                label='Categories'
                options={[
                  { title: 'Design', value: 'Design' },
                  { title: 'Sales', value: 'Sales' },
                  { title: 'DevOps', value: 'DevOps' },
                ]}
              />
              <Select
                labelClassName='text-yellow-700 font-semibold'
                name='sortBy'
                label='Sort by'
                options={[
                  { title: 'Date', value: 'date' },
                  { title: 'Name', value: 'name' },
                  { title: 'Author', value: 'author' },
                ]}
              />
              <Select
                labelClassName='text-yellow-700 font-semibold'
                name='sortOrder'
                label='Sort order'
                options={[
                  { title: 'Ascending', value: 'asc' },
                  { title: 'Descending', value: 'desc' },
                ]}
              />
              <div className='flex gap-3 '>
                <Button
                  className='grow'
                  variant='outline'
                >
                  Reset
                </Button>
                <Button className='grow'>Apply</Button>
              </div>
            </form>
          </aside>
          <main className='w-[71.66%] grow grid grid-cols-2 gap-x-8 gap-y-16'>
            {Array.from(Array(12).keys()).map(() => {
              return <BlogCard />;
            })}
          </main>
          <Pagination
            className='mt-16'
            totalPages={6}
          />
        </Container>
      </section>
    </>
  );
};

export default Page;
