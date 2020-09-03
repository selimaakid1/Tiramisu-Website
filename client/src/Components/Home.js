import React from 'react'
import Info from './Info'
import Homeshop from './Homeshop'
import Infotiramisu from './Infotiramisu'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Home() {
    return (
        <div>
            <Info />
            <Homeshop />
            <Infotiramisu />
            <div>
                <MessengerCustomerChat
                    pageId="<PAGE_ID>"
                    appId="<APP_ID>"
                    htmlRef="<REF_STRING>"
                />
            </div>
        </div>
    )
}

export default Home
