import React from 'react';

const Resume = () => {
  const pdfPath = '/Manoj_Kumar_5Resume.pdf'; // PDF located in public folder

  return (
    <section className="py-12 bg-gray-900" id="resume">
      <div className="container mx-auto px-4">
        {/* Card Container */}
        <div className="bg-gray-800 text-white rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold mb-2 text-center">My Resume</h2>
          <p className="text-gray-300 mb-6 text-center">Preview my resume below or download the file directly.</p>

          {/* PDF Preview */}
          <div className="mb-6 overflow-hidden rounded-lg border border-gray-600">
            <object
              data={pdfPath}
              type="application/pdf"
              className="w-full h-[500px] md:h-[700px] lg:h-[800px]"
            >
              <p className="text-center text-gray-400">
                Your browser does not support PDF preview. You can{' '}
                <a href={pdfPath} download className="text-primary underline">
                  download the file here
                </a>
                .
              </p>
            </object>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href={pdfPath}
              download
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
              aria-label="Download resume PDF"
            >
              Download PDF
            </a>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-gray-700 text-gray-200 rounded-full hover:bg-gray-600 transition-colors"
              aria-label="Open resume in new tab"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
