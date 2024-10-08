import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';
import HText from '../shared/HText';
import Benefit from './Benefit';
import ActionButton from '../shared/ActionButton';
import BenefitsPageGraphic from '../assets/gym1.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='w-6 h-6' />,
    title: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <UserGroupIcon className='w-6 h-6' />,
    title: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.',
  },
  {
    icon: <AcademicCapIcon className='w-6 h-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='w-5/6 min-h-full py-20 mx-auto '>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa explicabo accusantium, perferendis
            cupiditate consequuntur in quam optio assumenda voluptatibus ad veniam dignissimos dolores aspernatur earum
            sunt dolorum quo nulla!
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className='items-center justify-between gap-8 mt-5 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='items-center justify-between gap-20 mt-16 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img className='w-2/4 mx-auto' alt='benefits-page-graphic' src={BenefitsPageGraphic} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing
                ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec.
                Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin
                integer nisl. Felis orci diam odio.
              </p>
              <p className='mb-5'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit
                euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis
                odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
