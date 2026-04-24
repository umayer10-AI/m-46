import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
        <div className='flex gap-3 items-center max-w-[80%] bg-gray-100 py-3 px-3 rounded-xl mx-auto'>
            <h2 className='btn btn-error text-white'>Latest</h2>
            <Marquee pauseOnHover={true} speed={50} className='font-semibold'>
                {
                    news.map(v => 
                        <p key={v._id}>{v.title}</p>
                    )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;