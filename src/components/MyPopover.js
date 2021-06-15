import React from 'react'
import SignIn from './SignIn'
import UserMenu from './UserMenu'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap'

export default function MyPopover({ type }) {
    return (
        <>
            <OverlayTrigger
                trigger="click"
                key='bottom'
                placement='bottom'
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                        {type === 'signin' ? <SignIn /> : <UserMenu />}
                        {/* <Popover.Title as="h3">{`Popover `}</Popover.Title>
                        <Popover.Content>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Content> */}
                    </Popover>
                }
            >
                <Button variant="secondary">Popover on </Button>
            </OverlayTrigger>
        </>
    )
}
