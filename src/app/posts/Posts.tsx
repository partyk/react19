import { useState, useActionState } from 'react';

interface IPost {
  id: number;
  name: string;
  text: string;
  publishedAt: Date;
}

/**
 * @param text {string}
 * @param length {number}
 */
const truncate = (text: string, length: number = 20): string =>
  text.length > length ? `${text.substring(0, length)}...` : text;

const DEFAULT_FORM_STATE = {
  name: '',
  text: '',
  errors: {
    name: '',
    text: '',
  },
};

const validateForm = (name: string, text: string) => {
  const errors = { ...DEFAULT_FORM_STATE.errors };
  if (!name) errors.name = 'Name is required';
  if (!text) errors.text = 'Text is required';
  return errors;
};

export const Posts = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [state, submitAction] = useActionState<
    {
      name: string;
      text: string;
      errors: { name: string; text: string };
    },
    FormData
  >(
    (_, payload) => {
      const text = payload.get('text') as string;
      const name = payload.get('name') as string;

      const errors = validateForm(name, text);

      if (errors.name || errors.text) {
        return { text, name, errors };
      }
      setPost(currentPosts => [{ id: currentPosts.length + 1, name, text, publishedAt: new Date() }, ...currentPosts]);
      return { ...DEFAULT_FORM_STATE };
    },
    { ...DEFAULT_FORM_STATE },
  );
  const formatDate = (date: Date) => `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;

  const { name: nameValue, text: textValue, errors } = state;

  return (
    <>
      <nav className="flex justify-start items-center bg-red-950 px-8 py-3 h-20">
        <ul className="flex">
          <li className="mr-6">
            <a aria-current="page" className="text-white font-bold hover:underline underline" href="/">
              Posts
            </a>
          </li>
          <li className="mr-6">
            <a className="text-white font-bold hover:underline" href="/search">
              Search
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-3 container mx-auto px-4 flex flex-col space-y-4 text-left">
        <form action={submitAction}>
          <div>
            <div className="mt-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your name:
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  defaultValue={nameValue}
                />
              </label>
              <div className="text-red-500">{errors.name}</div>
            </div>
            <div className="mt-2">
              <label htmlFor="text" className="block mb-2 text-sm font-medium">
                Your post:
                <textarea
                  id="text"
                  name="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Some post"
                  rows={4}
                  defaultValue={textValue}
                />
              </label>
              <div className="text-red-500">{errors.text}</div>
            </div>
          </div>
          <div className="mt-2">
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
              Submit
            </button>
          </div>
        </form>
        <section className="space-y-4">
          <ul>
            {post.map(({ id, name: author, text: description, publishedAt }) => (
              <li key={id}>
                <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
                  <div className="flex-none">
                    <div className="flex-row w-32">
                      <div>
                        <strong>{author}</strong>
                      </div>
                      <div>
                        <em>{formatDate(publishedAt)}</em>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-ellipsis overflow-hidden">{truncate(description, 200)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};
