import React from 'react'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from 'react-share'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi'


export default function ShareProject({ projectId }) {
    const link = `http://localhost:3000/projectdisplay/${projectId}`;
    return (
        <div className='share-project'>
            <h2>Share Project</h2>
            <hr />
            <div className='mt-4 d-flex justify-content-between share-btns w-50 mx-auto'>
                <FacebookShareButton url={link}
                ><FacebookIcon round={true} /></FacebookShareButton>
                <LinkedinShareButton url={link}
                ><LinkedinIcon round={true} /></LinkedinShareButton>
                <TwitterShareButton url={link}
                ><TwitterIcon round={true} /></TwitterShareButton>
                <WhatsappShareButton url={link}
                ><WhatsappIcon round={true} /></WhatsappShareButton>
            </div>
            <div className='mt-4'>
                <h3 className='mb-3'>Page Link</h3>
                <div className='d-inline share-link-copy pl-1 pr-5 rounded py-1'>{link}</div>
                <CopyToClipboard text={link}>
                    <button className='copy-btn m-n4 d-inline btn-as-link text-dark text-dark-hover'><FiCopy /></button>
                </CopyToClipboard>
            </div>


        </div>
    )
}
