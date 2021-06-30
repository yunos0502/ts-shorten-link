import React, { MouseEvent, memo, useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';
import Layout from '../components/Layouts';
import { checkRegex, fetchAPI, findUrl, LinkItemProps } from '../utils/event';
import Modal from '../components/Modal';
import useLocalStorage from '../hooks/useLocalStorage';
import {Messages} from '../utils/types';

const Home: NextPage = memo(() => {
  const [fetchLinks, setFetchLinks] = useLocalStorage<any>('links', []);
  const [transformLink, setTransformLink] = useState<any>();
  const [state, setState] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line no-undef
  let stateTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const onTransformLink = useCallback((_title: string, link: string) => {
    if (!checkRegex(link)) {
      console.log('why', link)
      setState(true);
      setMessage(Messages.BlankValueFailed);
      return;
    }

    const linkItem: LinkItemProps = {
      link,
      tags: [],
      title: '',
    };
    
    fetchAPI(setTransformLink, linkItem);
    if (inputRef.current) inputRef.current.value = '';
  }, []);

  const onDeleteLink = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    const _id = e.currentTarget?.parentElement?.getAttribute('data-_id');
    const filterLinks = fetchLinks.filter((link: { id: string }) => link.id !== _id);

    setFetchLinks(filterLinks);
    setMessage(Messages.DeletedSuccess);
    setState(true);
  }, [fetchLinks]);

  useEffect(() => {
    if (!transformLink) return;
    setState(true);
    if (findUrl(fetchLinks, transformLink)) {
      setMessage(Messages.OverlapFailed);
      return;
    }
    setMessage(Messages.Success);
    setFetchLinks([...fetchLinks, transformLink]);
  }, [transformLink]);

  useEffect(() => {
    stateTimeout = setTimeout(() => setState(false), 1500);
    return () => clearTimeout(stateTimeout);
  }, [message, state]);

  return (
    <Layout>
      <LinkInput 
        onTransformLink={onTransformLink}
        inputRef={inputRef}
      />
      <LinkList 
        links={fetchLinks}
        onDeleteLink={onDeleteLink}
        setState={setState}
        setMessage={setMessage}
      />
      {state && <Modal message={message} />}
    </Layout>
  )
});

export default Home;
