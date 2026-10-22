import './VermouthCulture.css';

const VermouthCulture = () => {
  return (
    <section className="vermouth-culture">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-culture-header">
          <h2 className="vermouth-culture-title font-serif">
            <span>
              <em>the</em>
            </span>

            <span>CULTURAL HEART</span>

            <span>
              <em>of the</em> RIVIERA
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="vermouth-culture-grid">
          {/* LEFT — TEXT */}
          <div className="vermouth-culture-text">
            <p>
              Together Monte-Carlo and Monaco represent a unique blend born from the influence of
              their French and Italian neighbours throughout history, combined with fierce pride in
              tradition, savoir-faire and an inimitable epicurean lifestyle.
            </p>

            <p>
              Situated along the French Riviera a mere stone’s throw from the Italian border the
              Principality of Monaco is the cultural heart of the Riviera. For centuries, the
              Principality attracted people from all over the world seeking to discover the best
              experiences and to enjoy every moment of their life. This makes it the undisputable
              worldwide reference in the most rooted, refined and multicultural luxury.
            </p>

            <p>
              From the royal court of Turin centuries ago, to Hollywood’s cinematic icons or the
              Lost Generation of Hemingway, vermouth has always been celebrated by the truly
              discerning palate. Like the principality of Monaco, Monte Carlo Vermouth is proud of
              its heritage, its influences, and ancestral know-how, as it is the embodiment and
              culmination of the most refined craftsmanship and ingredients.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="vermouth-culture-image-wrapper">
            <img
              src="/images/VermouthPage/culture/monaco.png"
              alt="Historic architecture of Monaco with a grand staircase and palm trees"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* SECOND PART */}
        <div className="vermouth-culture-grid vermouth-culture-grid-reverse">
          {/* LEFT — IMAGE */}
          <div className="vermouth-culture-image-wrapper">
            <img
              src="/images/VermouthPage/culture/craft.png"
              alt="Monte Carlo Vermouth Rosé bottle in a wicker basket"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="vermouth-culture-text">
            <p>
              Monte Carlo Vermouth is created using artisanal methods of vermouth making from the
              renowned Piedmont region, whose vineyards are listed among the UNESCO World Heritage.
              Expert Italian winemakers create Moscato d’Asti DOCG to form an unparalleled aromatic
              base using the whole grape, grown expressly for this purpose. The liquid is then
              blended with Côte d’Azur botanicals exclusively from expert distillers in the perfume
              capital of the world, Grasse. Known around the globe for the quality of its fragrances
              since the 18th century, it is where the finest luxury perfumes are made.
            </p>

            <p>
              Finally, the liquid is made more exceptional with a touch of the Monégasque terroir:
              hand-picked rose petals from the principality’s rose garden to impart intrigue,
              elegance, and a divine taste.
            </p>

            <p>
              Whether visiting for a whirlwind weekend of racing by day and Casino by night, or
              stationing your yacht to stay a while, one thing is for certain: the aura of
              Monte-Carlo becomes part of you. Crafted to bottle this singular spirit, Monte Carlo
              Vermouth is the ideal refreshment for everyday chic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthCulture;
