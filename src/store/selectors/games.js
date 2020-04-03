export default (games, { text, vendor }) => {
  return games
    .filter(game => {
      const textMatch = game.Name.toLowerCase().includes(text.toLowerCase());
      const vendorMatch = game.Vendor.toLowerCase().includes(vendor.toLowerCase());
      
      return textMatch && vendorMatch;
    })
    .sort((a, b) => {
        return a.Name < b.Name ? 1 : -1;
    });
};
