import React from 'react'
import './Whoami.css'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineSaveAlt} from 'react-icons/md';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';
import Item from '../Item/Item';

export default function Whoami() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <div className='text-white'>
            <div className='fieldInfo absolute w-full h-[70vh]'>
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <h1 className='text-[60px]'>.Whoami( )</h1>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={FadeUp}>
                            <div className='flex items-center mt-6'>
                                <a href='https://github.com/AnvarIbodullayev' className='text-[#00df4a]'><AiOutlineGithub className='text-[30px]'/></a>
                                
                                <a href='https://www.linkedin.com/in/anvar-ibodullayev-3636bb1b4/' className='text-[#00df4a96]'><AiFillLinkedin className='text-[30px] mx-2'/></a>
                                <p className='mx-4 text-[#ffffff7a]'>Download my</p>
                                <button className='bg-[#00df4a] hover:bg-[#000300] hover:text-white hover:border-[#00df4a] border-solid border-2 border-[#000300] rounded-md font-medium my-1  px-2 flex items-center text-black ease-in-out duration-300'>
                                    resume <MdOutlineSaveAlt className='ml-2' />
                                </button>
                            </div>
                            <p className='text-[#00df4a] mt-4'>
                                I am a creative frontend developer. From Uzbekistan
                            </p>
                            <p className='text-[#ffffff73] mt-2 font-semibold'>
                                // 3+ years of experience 
                            </p>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <Animator animation={batch(Fade(), Sticky())}>
                            <div className='h-[500px]'>
                                <h1 className='text-[30px]'>Main skills</h1>
                                <div className='flex flex-wrap w-full'>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                    <Item textOne='Frontend development, UX/UI design' textTwo='E-commerce, Magento, WordPress'/>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </div>
        </div>
    )
}