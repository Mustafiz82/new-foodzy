import React from "react";
import image from "../../assets/others/faq.png";
import PageName from "../Shared/PageName";

const FAQ = () => {
  const faqData = [
  {
    question: "What Facilities Does Your Hotel Have?",
    answer: "Our hotel offers a wide range of facilities to enhance your stay, including a swimming pool, fitness center, spa services, multiple dining options, conference rooms, and complimentary Wi-Fi throughout the premises. We also provide concierge services, valet parking, and a gift shop for your convenience."
  },
  {
    question: "How Do I Book A Room For My Vacation?",
    answer: "You can book a room for your vacation directly through our website by navigating to the 'Book Now' section. Alternatively, you can call our reservations team at [Hotel Phone Number] or email us at [Hotel Email Address]. We also partner with various online travel agencies for your booking convenience."
  },
  {
    question: "How We are best among others?",
    answer: "We stand out from others through our commitment to exceptional customer service, luxurious accommodations, and a prime location that offers easy access to local attractions. Our dedicated staff goes above and beyond to ensure a memorable experience for every guest, providing personalized attention and anticipating your every need."
  },
  {
    question: "Is There Any Fitness Center In Your Hotel?",
    answer: "Yes, our hotel features a state-of-the-art fitness center equipped with a variety of cardio machines, weightlifting equipment, and free weights. It is accessible to all guests 24/7, allowing you to maintain your workout routine during your stay."
  },
  {
    question: "What Type Of Room Service Do You Offer?",
    answer: "We offer 24-hour room service featuring a diverse menu that includes breakfast, lunch, dinner, and late-night snacks. Our menu caters to various dietary preferences and offers a selection of beverages, ensuring you can enjoy a delicious meal in the comfort of your room at any time."
  },
  {
    question: "What Facilities Does Your Hotel Have?",
    answer: "To reiterate, our hotel boasts comprehensive facilities including a refreshing swimming pool, a fully-equipped fitness center, a serene spa for relaxation, diverse dining establishments, versatile conference and event spaces, and high-speed Wi-Fi access. Additional amenities like concierge assistance and a gift shop are also available."
  },
  {
    question: "How Do I Book A Room For My Vacation?",
    answer: "Booking your vacation room is simple. You can visit our official website and use our online booking system, or directly contact our reservations department via phone at [Hotel Phone Number] or email at [Hotel Email Address]. We look forward to assisting you with your reservation."
  }
];
  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row gap-5 container  lg:my-20 mx-auto ">
        <img src={image} className="flex-1" alt="" />
        <div className="flex-1 space-y-4">
        {
            faqData.map((item , idx) =>    <div key={idx} className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2 " defaultChecked />
            <div className="collapse-title m-2 font-semibold">
            {item?.question}
            </div>
            <div className="collapse-content mx-2 text-sm">
             {item?.answer}
            </div>
          </div>
        )
        }
        </div>
      </div>
    </div>
  );
};

export default FAQ;
