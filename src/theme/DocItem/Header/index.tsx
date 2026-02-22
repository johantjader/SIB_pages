import React from 'react';
import Header from '@theme-original/DocItem/Header';
import type HeaderType from '@theme/DocItem/Header';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof HeaderType>;

export default function HeaderWrapper(props: Props): JSX.Element {
  const {frontMatter} = useDoc();
  const status = frontMatter.status as string | undefined;

  const badgeColors: Record<string, string> = {
    stable: '#28a745', // Green
    draft: '#ffc107',  // Yellow/Orange
    archived: '#6c757d', // Gray
  };

  return (
    <>
      <Header {...props} />
      {status && (
        <div style={{
          display: 'inline-block',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          color: status.toLowerCase() === 'draft' ? '#000' : '#fff',
          backgroundColor: badgeColors[status.toLowerCase()] || '#6c757d',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          {status}
        </div>
      )}
    </>
  );
}
