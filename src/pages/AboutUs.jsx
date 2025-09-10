import React from "react";
import Header from "../components/Header";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      {/* Header */}
      <Header
        title="About Us"
        background="images/hero_bg_1.jpg"
      />

      {/* About Section */}
      <section className="about-section container py-5">
        <h2 className="mb-4 text-center about-title">Welcome to Furever Care</h2>

        <p className="about-text">
          At <strong>Furever Care</strong>, our story begins with a simple yet
          powerful belief: every pet, regardless of size, breed, or background,
          deserves unconditional love and the very best care. What started as a
          small passion project by a group of pet lovers has now grown into a
          trusted community for pet parents who want to give their companions
          the happiest and healthiest lives possible.
        </p>

        <p className="about-text">
          We pride ourselves on curating only the highest-quality pet supplies —
          from nutritious food and delicious treats to durable toys and
          comfortable bedding. Every product is carefully selected with both
          safety and joy in mind. Beyond supplies, our grooming experts ensure
          that your pets look and feel their absolute best, offering gentle and
          professional services tailored to the unique needs of each furry
          friend.
        </p>

        <p className="about-text">
          But <strong>Furever Care</strong> is more than just a store. We are a
          compassionate hub where pet owners can find support, guidance, and
          reassurance. Our experienced veterinarians are always ready to offer
          trusted advice, from routine health tips to urgent medical attention.
          With a strong commitment to education, we also provide training
          resources and wellness programs to strengthen the bond between pets
          and their families.
        </p>

        <p className="about-text">
          Community is at the heart of everything we do. We actively collaborate
          with shelters, adoption centers, and rescue initiatives, believing
          deeply that every animal deserves a forever home. Through adoption
          drives, awareness campaigns, and success stories, we aim to inspire
          kindness, empathy, and responsible pet ownership.
        </p>

        <p className="about-text">
          At the end of the day, <strong>our mission is simple</strong>: to make
          the world a brighter place for pets and the people who love them. When
          you choose Furever Care, you’re not just shopping — you’re joining a
          movement dedicated to compassion, wellness, and lifelong happiness.
        </p>

        <h3 className="about-subtitle mt-5">Why Choose Us?</h3>
        <ul className="about-list">
          <li>✨ Premium-quality products handpicked for safety and joy</li>
          <li>✨ Experienced veterinarians and grooming specialists</li>
          <li>✨ A trusted community that supports adoption and rescue</li>
          <li>✨ Educational resources for responsible pet care</li>
          <li>✨ A heartfelt mission to create lasting bonds with pets</li>
        </ul>

        <p className="about-text mt-4">
          Thank you for making us a part of your pet’s journey. Together, let’s
          celebrate the unconditional love that makes life extraordinary.
        </p>
      </section>
    </>
  );
};

export default AboutUs;
