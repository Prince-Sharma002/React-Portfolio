import React from 'react'

const Testimonails = () => {
  return (
    <div id='testimonails'> 
<h2>Testimonial</h2>

<section>
  <TestimonialCard
    name={"Abhishek"}
    feedback={"Your Teaching skills are so good."}
  />

  <TestimonialCard
    name={"Ramzi"}
    feedback={
      "Wow what a portfolio, doesn't expected this to be on youtube!"
    }
  />

  <TestimonialCard
    name={"Sundar Pichai"}
    feedback={"Amazing seems like you should the Google CEO"}
  />
</section>
    </div>
  )
}

export default Testimonails