import React from "react";
import {ContactsDataType, getContacts} from "@shared/index";
import Link from "next/link";

export function Contacts({contactsData, isDefault}: {
    contactsData: ContactsDataType, isDefault?: boolean
}): React.ReactElement {
    const contacts = contactsData;
    let defaultPhone = <>default phone</>;
    let defaultEmail = <>default email</>;
    if (contacts) {
        if (isDefault) {
            const phone = contacts?.phone.map(phone => {
                if (phone.default) {
                    defaultPhone = <Link href={phone.url}>{phone.text}</Link>
                }
            });
            const email = contacts?.email.map(email => {
                if (email.default) {
                    defaultEmail = <Link href={email.url}>{email.text}</Link>
                }
            });
            return (
                <>
                    {defaultPhone}
                    {defaultEmail}
                </>
            );
        } else {
            const phone = contacts?.phone.map(phone => {
                if (!phone.default) {
                    defaultPhone = <Link href={phone.url}>{phone.text}</Link>
                }
            });
            const email = contacts?.email.map(email => {
                if (!email.default) {
                    defaultPhone = <Link href={email.url}>{email.text}</Link>
                }
            });
            return (
                <>
                    {defaultPhone}
                    {defaultEmail}
                </>
            );
        }
    }
    return (
        <>
            {defaultPhone}
            {defaultEmail}
        </>
    );
}