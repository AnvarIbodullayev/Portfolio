import React from 'react'
import  one from './images/1.png';
import  two from './images/2.png';
import  three from './images/3.png';
import  four from './images/4.png';
import  five from './images/5.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

export default function Works() {
    return (
        <>
            <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <div className='w-full h-[400px]'>
                                <h1 className='text-[60px] text-white text-[60px]'>.Works( )</h1>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={0}>
                        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 w-[50%] m-auto">
                            <Animator animation={MoveIn(-100, -200)}>
                                <div className="transform scale-110 -rotate-6">
                                    <img src={one} alt="1" loading="lazy" />
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(200, 0)}>
                                <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                                    <img src={two} alt="2" loading="lazy" />
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(200, 0)}>
                                <div className="transform scale-150 translate-y-11">
                                    <img src={three} alt="3" loading="lazy" />
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(100, 0)}>
                                <div className="transform translate-y-24">
                                    <img src={four} alt="4" loading="lazy" />
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(350, 0)}>
                                <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 scale-300 translate-y-11">
                                    <img src={five} alt="5" loading="lazy" />
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
            </ScrollContainer>
            
        </>
    )
}