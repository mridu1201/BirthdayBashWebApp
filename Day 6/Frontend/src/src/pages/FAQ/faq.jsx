import React from 'react';

const FAQPage = () => {
  return (
    
    <div className="bg-white min-h-screen">
      <header className="bg-pink-500 text-white py-8">
        <h1 className="text-3xl font-bold">FAQ Page</h1>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">General Questions</h2>
          <div className="faq-item mb-4">
            <h3 className="text-lg font-semibold cursor-pointer">What is Lorem Ipsum?</h3>
            <div className="answer hidden">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
          <div className="faq-item mb-4">
            <h3 className="text-lg font-semibold cursor-pointer">Why do we use it?</h3>
            <div className="answer hidden">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Technical Questions</h2>
          <div className="faq-item mb-4">
            <h3 className="text-lg font-semibold cursor-pointer">What is HTML?</h3>
            <div className="answer hidden">
              <p>HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.</p>
            </div>
          </div>
          <div className="faq-item mb-4">
            <h3 className="text-lg font-semibold cursor-pointer">What is CSS?</h3>
            <div className="answer hidden">
              <p>CSS stands for Cascading Style Sheets. It is used to style the appearance of web pages.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-4 text-center">
        <p>&copy; 2024 FAQ Page</p>
      </footer>
    </div>
  );
};

export default FAQPage;
