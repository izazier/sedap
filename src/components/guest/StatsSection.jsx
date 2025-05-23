import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-orange-300 py-10 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center px-4">
        {/* Item 1 */}
        <div>
          <h3 className="text-3xl font-bold">230</h3>
          <p className="text-sm">Startups We Have Funded</p>
        </div>
        {/* Item 2 */}
        <div>
          <h3 className="text-3xl font-bold">7k</h3>
          <p className="text-sm">Funded From Sedap Community</p>
        </div>
        {/* Item 3 */}
        <div>
          <h3 className="text-3xl font-bold">$68B</h3>
          <p className="text-sm">Our Combined Valuation</p>
        </div>
        {/* Item 4 */}
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-sm">Years Of Best Experience</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
