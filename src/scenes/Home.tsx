import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/pngegg.png';
import HomePageRedBull from '../assets/SponsorRedBull.png';
import HomePageForbes from '../assets/SponsorForbes.png';
import HomePageFortune from '../assets/SponsorFortune.png';
import { SelectedPage } from '../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id='home' className='gap-16 py-10 bg-gray-20 md:h-full md:pb-0'>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className='items-center justify-center w-5/6 mx-auto md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img alt='home-page-text' src={HomePageText} />
              </div>
            </div>

            <p className='mt-8 text-sm'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you
              Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className='flex items-center gap-8 mt-8'
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className='flex justify-center basis-1/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img alt='home-pageGraphic' src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='w-5/6 mx-auto'>
            <div className='flex items-center justify-between w-3/5 gap-8'>
              <img alt='redbull-sponsor' src={HomePageRedBull} />
              <img alt='forbes-sponsor' src={HomePageForbes} />
              <img alt='fortune-sponsor' src={HomePageFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
