import Categories from '@/component/Categories';
import MidNews from '@/component/MidNews';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    console.log(id)

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-5'>
      {/* <h2 className='text-3xl font-bold text-center my-10'>Home Page</h2> */}
      <Categories></Categories>
      <div className='col-span-3'>
        <MidNews id={id}></MidNews>
      </div>
      <RightSide></RightSide>
    </div>
    );
};

export default page;