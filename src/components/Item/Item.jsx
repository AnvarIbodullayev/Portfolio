import React from 'react'

export default function Item(props) {
    return (
        <div className='text-left text-[#ffffff3a] w-[240px] p-4 pb-8'>
            <h2>
                {props.textOne}
            </h2>
            <h2 className='mt-4'>
                {props.textTwo}
            </h2>
        </div>
    )
}