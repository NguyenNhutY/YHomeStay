import React, { memo } from "react";

const Title = ({
  title1,
  title2,
  titleStyles = "",
  title2Styles = "",
  paraStyles = "",
  para,
}) => {
  return (
    <section className={`${titleStyles}`}>
      {/* Title 1 */}
      {title1 && (
        <h4 className='text-2xl font-semibold mb-4 text-secondary'>{title1}</h4>
      )}

      {/* Title 2 */}
      {title2 && (
        <h1
          className={`text-4xl font-bold mb-4 text-secondary ${title2Styles}`}
        >
          {title2}
        </h1>
      )}

      {/* Paragraph */}
      <p className={`max-w-lg mt-2 ${paraStyles}`}>
        {para
          ? para
          : "Discover your perfect home with our expert real estate services, guiding you every step of the way. Experience modern living through well-presented properties, professional support, and thoughtfully designed spaces."}
      </p>
    </section>
  );
};

export default memo(Title);
