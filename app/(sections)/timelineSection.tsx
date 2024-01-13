import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { headerData } from '@/lib/const';
import { timelineDefinition } from '@/lib/definition';

const ExperienceCard = ({ timeline }: { timeline: timelineDefinition }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={timeline.years}
      // iconStyle={{ background: timeline.iconBg }}
    >
      <div>
        <h3 className='text-[24px] font-bold text-white'>{timeline.name}</h3>
        <p
          className='text-[16px] font-semibold text-secondary'
          style={{ margin: 0 }}
        >
          {timeline.desc}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export const TimelineSection = () => {
  const { timeline } = headerData;
  return (
    <>
      <section id={`timeline`} className={`bg-orange-200 pb-32 pt-36`}>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {timeline.map((timeline, index) => (
              <ExperienceCard key={`timeline-${index}`} timeline={timeline} />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};
