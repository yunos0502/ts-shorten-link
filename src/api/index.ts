const baseUrl: string = 'https://api-ssl.bitly.com/v4';

const Method = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

const Headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  'Content-Type': 'application/json',
};

const URI = {
  shorten: '/shorten',
  bitlinks: '/bitlinks',
};

const dataString = (linkItem: { link: string; tags?: string[] | undefined; title?: "" | undefined; }) => {
  const { link, tags, title } = linkItem;

  return {
    long_url: link,
    domain: 'bit.ly',
    group_guid: 'Bl517zIzujW',
    title,
    tags,
    deeplinks: [],
  };
};

const option = (method: string, linkItem: {
    link: string; tags?: string[] 
      | undefined; title?: "" | undefined;
  }) => ({
    method,
    headers: Headers,
    body: JSON.stringify(dataString(linkItem)),
  });

const fetchAPI = (path: string, options: any) => fetch(baseUrl + path, options)
    .then((Response) => {
      console.log(Response);
      if (!Response.ok) throw new Error('something went wrong');
      return Response.json();
    })
    .catch((error) => console.error(error));

const API = {
  getShorten: (linkItem: {
      link: string; tags?: string[]
        | undefined; title?: "" | undefined;
    }) => fetchAPI(URI.shorten, option(Method.POST, linkItem)),
  getBitlinks: (linkItem: { link: string; tags?: string[] | undefined; title?: "" | undefined; }) => fetchAPI(URI.bitlinks, option(Method.POST, linkItem)),
};

export default API;
