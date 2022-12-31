import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ysix43ww',
    dataset: 'production',
    apiVersion:'2022-03-10',
    useCdn: true,
    token: process.env.x
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
