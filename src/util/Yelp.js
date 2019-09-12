const apiKey =
  "FFvh-U80MrPbE5T-_an2Ouk34zf-qAFNxFuSiDHs-D5mZ3p-tg2sNjcPt_jdqfdfH3s1ecxeVbvbCgQSvjlPPL1r40HKdYAX21kTCxVVMNKN6rm2AAp6Xbuzm1h5XXYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              location: business.location.adress1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.postal_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};
