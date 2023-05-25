import React from "react";
import {TContactsData, getContacts} from "@shared/index";
import Link from "next/link";

export function Contacts({contactsData, isDefault}: {
    contactsData: TContactsData, isDefault?: boolean
}): React.ReactElement {
    const contacts = contactsData;
    let defaultPhone = <Link href="/">default phone</Link>;
    let defaultEmail = <Link href="/">default email</Link>;
    if (contacts.data) {
        if (isDefault) {
            const phone = contacts.data.attributes.phone.map(phone => {
                if (phone.default) {
                    defaultPhone = <Link href={phone.url}>{phone.text}</Link>
                }
            });
            const email = contacts.data.attributes.email.map(email => {
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
            const phone = contacts.data.attributes.phone.map(phone => {
                if (!phone.default) {
                    defaultPhone = <Link href={phone.url}>{phone.text}</Link>
                }
            });
            const email = contacts.data.attributes.email.map(email => {
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