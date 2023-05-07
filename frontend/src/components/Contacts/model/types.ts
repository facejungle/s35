export type contactPromiseType = {
   default: {
      phone: contactType,
      email: contactType
   },
   phone: contactType[],
   email: contactType[],
}

export type contactType = {
   url: string,
   text: string,
   description: string,
   default?: boolean;
}