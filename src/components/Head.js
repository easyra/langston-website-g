import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  const defaultTitle = "Langston Alimayu | Abstract LA Art | Sweet Lang"
  const defaultDescription =
    "Langston's experimental LA art is here! Langston Alimayu or Sweet Lang is an local abstract artist in Los Angeles, California. SweetLang is also a member of LAVA aka LA Valley Art."
  return (
    <Helmet
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription,
        },
      ]}
    />
  )
}

export default Head
