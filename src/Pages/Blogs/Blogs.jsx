import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <>
         <Helmet>
        <title>Blogs | Phudu</title>
        <link rel="icon" href="/images/blogs.png" />
      </Helmet>
      <section className="max-w-[95%] md:max-w-[80%] mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#176AE5]">React FAQs</h2>

            <div className="space-y-6">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="collapse collapse-plus bg-[#176AE520] border border-[#176AE550] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <input type="radio" name="react-accordion" defaultChecked={index === 0} />
                        <div className="collapse-title font-semibold text-base md:text-lg text-[#176AE5]">
                            {faq.title}
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            {faq.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
       
    );
};

const faqData = [
    {
        title: "What is useState and how does it work in React?",
        content: (
            <>
                <p>
                    <code>useState</code> is a React Hook that lets you add state to functional components.
                    You call it with an initial value, and it returns an array with the current state and a function to update it.
                </p>
                <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                    {`const [count, setCount] = useState(0);`}
                </pre>
                <p className="mt-2">
                    When <code>setCount</code> is called, React re-renders the component with the new value.
                </p>
            </>
        ),
    },
    {
        title: "What is the purpose of useEffect in React?",
        content: (
            <>
                <p>
                    <code>useEffect</code> is a React Hook used for side effects like fetching data,
                    subscriptions, or manually changing the DOM. It runs after the render and can be set
                    to run only once, on updates, or on specific state/prop changes.
                </p>
                <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                    {`useEffect(() => {
  // Side effect
}, [dependency]);`}
                </pre>
            </>
        ),
    },
    {
        title: "What is a custom hook in React and when should you use one?",
        content: (
            <>
                <p>
                    A custom hook is a JavaScript function that starts with <code>use</code> and can call other hooks.
                    It's used to extract and reuse stateful logic across multiple components. Ideal when multiple components share similar logic (like form handling or data fetching).
                </p>
                <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                    {`function useToggle(initial) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}`}
                </pre>
            </>
        ),
    },
    {
        title: "Difference between controlled and uncontrolled components? Which one is better?",
        content: (
            <>
                <p>
                    <strong>Controlled components</strong> have their form data managed by React state,
                    making it easy to validate and manipulate input.
                    <br />
                    <strong>Uncontrolled components</strong> use the DOM to handle input via <code>ref</code>.
                </p>
                <p className="mt-2">
                    Controlled components are generally better for complex forms because of easier validation and state tracking.
                </p>
            </>
        ),
    },
    {
        title: "Tell us something about useFormStatus() (explore and explain)",
        content: (
            <>
                <p>
                    <code>useFormStatus()</code> is a hook from React’s experimental <strong>React Server Actions</strong> or used with <code>&lt;form&gt;</code> in Next.js (App Router).
                    It lets you access metadata about the current form submission, like whether the form is submitting or has errors.
                </p>
                <p className="mt-2">
                    It's useful to show loading indicators or disable buttons while submitting.
                </p>
                <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                    {`const { pending } = useFormStatus();`}
                </pre>
                <p className="mt-2">
                    It works only inside a <code>&lt;form&gt;</code> context, often in a child component of the form.
                </p>
            </>
        ),
    },
];

export default Blogs;

