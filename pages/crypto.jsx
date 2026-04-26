import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {motion} from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

const Crypto = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
    initial={{
      opacity: 0,   
     }}
     whileInView = {{
       x : 0,
       opacity : 1,
       scale : 1,
     }}
     transition ={{ duration : 1.5 }}
    className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Crypto App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>{t('common.project')}</p>
          <h2>{t('common.overview')}</h2>
          <p>
            {t('projectPages.crypto.desc')}
          </p>
          <a
            href='https://github.com/fireclint/crypto-react-firebase'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>{t('common.code')}</button>
          </a>
          <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>{t('common.demo')}</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>{t('common.technologies')}</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coin Gecko API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>{t('common.back')}</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Crypto;
