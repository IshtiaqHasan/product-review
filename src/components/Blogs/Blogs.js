import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans'>
            <h1 className='ques-ans-heading'>Questions & Answers</h1>
            <div className='ques-ans-1'>
                <h4 className='ques-1'>Question-1: What Is Semantic Tag Element?</h4>
                <h6 className='que-1-paragraph'>
                    Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a,p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is.
                    The semantic elements added in HTML5 are: header, main, article, aside, details, footer.
                </h6>
            </div>



        </div>
    );
};

export default Blogs;