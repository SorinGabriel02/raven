const apiKey =
  "FFvh-U80MrPbE5T-_an2Ouk34zf-qAFNxFuSiDHs-D5mZ3p-tg2sNjcPt_jdqfdfH3s1ecxeVbvbCgQSvjlPPL1r40HKdYAX21kTCxVVMNKN6rm2AAp6Xbuzm1h5XXYx";

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` }
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        console.log(business);
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          adress: business.location.adress1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.postal_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        };
      });
    }
  }
};

export default Yelp;
