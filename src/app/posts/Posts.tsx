import { useState, FormEvent, useRef } from 'react';

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

const DEFAULT_ERRORS = { name: '', text: '' };

const validateForm = (name: string, text: string) => {
  const errors = { ...DEFAULT_ERRORS };
  if (!name) errors.name = 'Name is required';
  if (!text) errors.text = 'Text is required';
  return errors;
};

export const Posts = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [errors, setErrors] = useState({ ...DEFAULT_ERRORS });
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const formatDate = (date: Date) => `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = inputRef.current?.value || '';
    const text = textareaRef.current?.value || '';
    const errors = validateForm(name, text);
    setErrors(errors);
    if (errors.name || errors.text) return;
    setPost(currentPosts => [{ id: post.length + 1, name, text, publishedAt: new Date() }, ...currentPosts]);
    inputRef.current!.value = '';
    textareaRef.current!.value = '';
  };

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
        <form onSubmit={handleSubmit}>
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
                  ref={inputRef}
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
                  ref={textareaRef}
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
