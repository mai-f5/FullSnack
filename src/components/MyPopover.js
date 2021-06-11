import React from 'react'

export default function MyPopover() {
    return (
        <>
            <OverlayTrigger
                trigger="click"
                key='bottom'
                placement='bottom'
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                        {/* <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                        <Popover.Content>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Content> */}
                    </Popover>
                }
            >
                {/* <Button variant="secondary">Popover on {placement}</Button> */}
            </OverlayTrigger>
        </>
    )
}
