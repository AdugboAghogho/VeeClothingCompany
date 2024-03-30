import React from 'react'

const FAQs = () => {
    // show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


  return (
    <section class="faqs">
        <h2>Frequntly Asked Question</h2>
        <div class="container faqs__container">
            

            

          
            

            

           

            <article class="faq">
                <div class="faq__icon"><i class="uil uil-plus"></i></div>
                <div class="question__answer">
                    <h4>How do I know the right courses for me?</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda, sunt sit quas aspernatur mollitia deserunt ex laudantium, excepturi atque asperiores ullam nesciunt esse alias quasi eveniet debitis! Tenetur, ut!
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon"><i class="uil uil-plus"></i></div>
                <div class="question__answer">
                    <h4>How do I know the right courses for me?</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda, sunt sit quas aspernatur mollitia deserunt ex laudantium, excepturi atque asperiores ullam nesciunt esse alias quasi eveniet debitis! Tenetur, ut!
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon"><i class="uil uil-plus"></i></div>
                <div class="question__answer">
                    <h4>How do I know the right courses for me?</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda, sunt sit quas aspernatur mollitia deserunt ex laudantium, excepturi atque asperiores ullam nesciunt esse alias quasi eveniet debitis! Tenetur, ut!
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon"><i class="uil uil-plus"></i></div>
                <div class="question__answer">
                    <h4>How do I know the right courses for me?</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda, sunt sit quas aspernatur mollitia deserunt ex laudantium, excepturi atque asperiores ullam nesciunt esse alias quasi eveniet debitis! Tenetur, ut!
                    </p>
                </div>
            </article>
        </div>
      </section>
  )
}

export default FAQs
