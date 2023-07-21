/* eslint-disable @next/next/no-img-element */
import { allPosts } from 'contentlayer/generated';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Konstantin Münster';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://konstantin.digital'
    : 'http://localhost:3000';

const Background = ({ children }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${baseUrl}/images/pattern/noisy-gradient-bg.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '1100px',
          height: '540px',
          transform: 'rotate(-1deg)',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 34px rgba(0, 0, 0, 0.20)',
          borderRadius: '16px',
          padding: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            right: -550,
            top: 50,
            backgroundImage: `url(${baseUrl}/images/pattern/logo-bg.png)`,
          }}
        />
        <div style={{ display: 'flex', flexGrow: '1' }}>{children}</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img
            src={`${baseUrl}/apple-icon.png`}
            alt="Logo"
            width={50}
            height={50}
          />
          <div
            style={{ display: 'flex', fontFamily: 'Inter', fontSize: '24px' }}
          >
            konstantin.digital
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function Image({ params: { slug } }: any) {
  // Load fonts in component: https://github.com/vercel/next.js/issues/48081
  const uxumBold = fetch(
    new URL('../../../fonts/UxumGrotesque-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());

  const interRegular = fetch(
    new URL('../../../fonts/Inter-Regular.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());

  // const interBold = fetch(
  //   new URL('../../../fonts/Inter-Bold.ttf', import.meta.url)
  // ).then(res => res.arrayBuffer());

  const post = allPosts.find(post => post.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return new ImageResponse(
    (
      <Background>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '40px',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: 24,
              display: 'flex',
              alignSelf: 'flex-start',
              fontFamily: 'Inter',
              fontWeight: 700,
              color: '#ECBC00',
              backgroundColor: '#FFF0B2',
              padding: '10px 20px',
              borderRadius: '9999px',
            }}
          >
            {post.category}
          </div>
          <div
            style={{
              fontSize: 60,
              lineHeight: 1.35,
              width: '100%',
              display: 'flex',
              paddingRight: '50px',
              paddingTop: '30px',
            }}
          >
            {post.title}
          </div>
        </div>
      </Background>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Uxum Grotesque',
          data: await uxumBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 400,
        },
        // {
        //   name: 'Inter',
        //   data: await interBold,
        //   style: 'normal',
        //   weight: 700,
        // },
      ],
    }
  );
}
