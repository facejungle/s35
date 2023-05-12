export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/contacts',
         handler: 'contact.v2find',
      },
   ]
}