import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans container'>
            <h1 className='ques-ans-heading'>Questions & Answers</h1>
            <div className='ques-ans-1 shadow-lg p-3 mb-5 bg-white rounded'>
                <h4 className='ques-1'>Question-1: What Is Semantic Tag Element?</h4>
                <h6 className='que-1-paragraph'>
                    Ans: Semantic HTML elements are those that clearly define their meaning in a human and machine-readable way. Semantic HTML or semantic marker is HTML that introduces meaning to a web page rather than just a presentation. For example, the tag a, p indicates that a closed text is a paragraph. This is both semantic and presentation because people know what categories, and browsers know how to display them.The benefit of writing semantic HTML comes from what should be the driving goal of any webpage: the desire to communicate. By adding semantic tags to your document, you provide more information about that document, which helps to connect. Specifically, semantic tags make it clear to the browser what the page's meaning and content are.
                    The semantic elements added in HTML5 are: header, nav, section, main, article, aside, details, footer.
                </h6>
            </div>
            <div className='ques-ans-2 shadow-lg p-3 mb-5 bg-white rounded'>
                <h4 className='ques-2'>Question-2: What is Context API? What Is the purpose of Context API? </h4>
                <h6 className='que-2-paragraph'>
                    Ans: The React Context API is a way for the React application to successfully generate transferable global variables. This is another way of “"prop drilling"” or moving props from grandfather to child to parent, and so on. Content is also regarded as a simple, easy-to-use way for country administrators using Redux. The context provides a way to share similar values ​​between components without explicitly transferring support to all levels of the tree. Context is mainly used when other data needs to be accessed by multiple components at different breeding levels.React.createContext() returns consumer and a provider. The provider is part of the fact that as its names suggest it gives status to its children. It will hold the "store" and be the parent of all the parts that may need that store. The purpose of using Context Api when we need to share state between lot's of components with a lot of nesting. Most of the time, the data we have in one component will only be relevant to its children, so passing it in props is more indicative and nicer. By Using context, we can avoid passing props by through intermediate elements.
                </h6>
            </div>



        </div>
    );
};

export default Blogs;