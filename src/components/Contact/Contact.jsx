import React from 'react'
import Item from '../Item/Item'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImTelegram} from 'react-icons/im';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

export default function Contact() {

    return (
        <>
            <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <div className='w-full h-[400px]'>
                                <h1 className='text-[60px] text-white text-[60px]'>.Contact( )</h1>
                            </div>
                        </Animator>
                    </ScrollPage>
            </ScrollContainer>
            <div className='text-white p-[12px] m-auto flex justify-center items-center w-[50%]'>
                <a href='https://t.me/Anvar99' className='text-[#00df4a] mx-2'>
                    <ImTelegram className='text-[30px]'/>
                </a>
                <a href='https://github.com/AnvarIbodullayev' className='text-[#00df4a] mx-2'>
                    <AiOutlineGithub className='text-[30px]'/>
                </a>
                <a href='https://www.linkedin.com/in/anvar-ibodullayev-3636bb1b4/' className='text-[#00df4a] mx-2'>
                    <AiFillLinkedin className='text-[30px]'/>
                </a>
            </div>
            
        </>
    )
}