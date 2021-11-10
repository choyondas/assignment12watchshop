import React from 'react';
import Product from '../Product/Product';
import './Services.css'






const products = [
    {

        name: "Mazzucato RIM Reversible Automatic Scuba Orange",
        img: 'https://i.ibb.co/5hNDvrW/watch-1.png',
        description: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        `,
        info: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        But the true product concept, to which the name refers, is RIM's dual analogue and chronograph watch function.
        
        The 'Reverse' system allows the case to be inverted fully in both directions. A quick-release catch releases the crown from its protection by rotating the crown protector. Two special arms allow the case to rotate freely, and a clearly recognizable click tells you when the case is in the correct position to be locked back into place. A simple maneuver that transforms RIM into an elegant and sporty chronograph watch.`,
        price: "2,200",
        manufacturer: "Mazzucato company, Hongkong",
        brand: 'Mazzucato',
        rating:'4'

    },
    {

        name: "The Electricianz Moka Z 42mm Brown Leather",

        img: 'https://i.ibb.co/89KD1z3/watch-2.png',
        description: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        `,
        info: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        But the true product concept, to which the name refers, is RIM's dual analogue and chronograph watch function.
        
        The 'Reverse' system allows the case to be inverted fully in both directions. A quick-release catch releases the crown from its protection by rotating the crown protector. Two special arms allow the case to rotate freely, and a clearly recognizable click tells you when the case is in the correct position to be locked back into place. A simple maneuver that transforms RIM into an elegant and sporty chronograph watch.`,
        price: "2,500",
        manufacturer: "Electricianz company, China",
        brand: 'Electricianz',
        rating:'5'
    },

    {

        name: "SISU Bravado BQ5-50-RB Stealth Swiss Limited Edition",

        img: 'https://i.ibb.co/9vN40Rd/watch-12.png',
        description: `SISU is a powerful Finnish philosophy that translates into English as strength of will, determination, perseverance, or acting rationally in the face of adversity. The meaning is equivalent to "having guts."

        `,
        info: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        But the true product concept, to which the name refers, is RIM's dual analogue and chronograph watch function.
        
        The 'Reverse' system allows the case to be inverted fully in both directions. A quick-release catch releases the crown from its protection by rotating the crown protector. Two special arms allow the case to rotate freely, and a clearly recognizable click tells you when the case is in the correct position to be locked back into place. A simple maneuver that transforms RIM into an elegant and sporty chronograph watch.`,
        price: "2990",
        manufacturer: "SISU company, Dhaka",
        brand: 'SISU',
        rating:'5'
    },
    {

        name: "UNDONE Batman Dark Knight Retrospective Automatic Limited Edition",

        img: 'https://i.ibb.co/5xyJfcH/watch-11.png',
        description: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        `,
        info: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        But the true product concept, to which the name refers, is RIM's dual analogue and chronograph watch function.
        
        The 'Reverse' system allows the case to be inverted fully in both directions. A quick-release catch releases the crown from its protection by rotating the crown protector. Two special arms allow the case to rotate freely, and a clearly recognizable click tells you when the case is in the correct position to be locked back into place. A simple maneuver that transforms RIM into an elegant and sporty chronograph watch.`,
        price: "4990",
        manufacturer: "UNDONE company, Dhaka",
        brand: 'UNDONE',
        rating:'4'
    },
    {

        name: "AAASY Supercolor Digital Black",

        img: 'https://i.ibb.co/vZTVMGp/watch-10.png',
        description: `AAASY Supercolor is a full stainless steel digital watch featuring the brand's signature color-changing screen.
        The watch is compatible with AAASY straps. AAASY straps can be swapped in seconds - no tools required - and allow hundreds of color combinations.

        `,
        info: `The most striking thing about RIM is the design, which takes inspiration from the world of motor racing, where everything is honed down to the smallest detail, and every last component is designed for high-level performance.

        But the true product concept, to which the name refers, is RIM's dual analogue and chronograph watch function.
        
        The 'Reverse' system allows the case to be inverted fully in both directions. A quick-release catch releases the crown from its protection by rotating the crown protector. Two special arms allow the case to rotate freely, and a clearly recognizable click tells you when the case is in the correct position to be locked back into place. A simple maneuver that transforms RIM into an elegant and sporty chronograph watch.`,
        price: "2390",
        manufacturer: "AAASY company, India",
        brand: 'AAASY',
        rating:'5'
    },



    {

        name: "Eone Apex Element Ceramic Khaki Green Limited Edition",

        img: 'https://i.ibb.co/7nDtshT/watch-9.png',
        description: `Eone's founder, Hyungsoo Kim, was a graduate student at MIT when he noticed that his friend and classmate couldn’t tell time — and it wasn’t just because he was blind. Too embarrassed to use his talking watch and interrupt the lecture, he’d discreetly whisper to his sighted friend for the time.

        `,
        info: `These special edition Apex Elements have been launched to celebrate veterans. $30 USD from every piece sold will be donated to our friends at NSOF (Navy Special Operations Foundation). NSOF exists to ensure operators and their families are provided with all the tools necessary to overcome any challenges they may face and let them know they are never alone in the fight.

        The Apex Element timepiece features raised markers that allow you to feel the time by touch: a triangular marker for twelve, elongated line segments for three, six, and nine, and shorter line segments for the other markers. Two magnetized ball bearings travel around the watch face in separate, recessed tracks: one track around the center of the watch face for the minute, and one track around the outside edge of the watch face for the hour.`,
        price: "2980",
        manufacturer: "Eone Apex company, London",
        brand: 'Eone Apex',
        rating:'5'
    },



    {

        name: "Shinola Vinton 32mm Mother of Pearl Silver Bracelet",

        img: 'https://i.ibb.co/WtY3qdr/watch-8.png',
        description: `Shinola is a design brand with an unwavering commitment to crafting lasting products, from watches to leather goods and beyond. We celebrate timeless design and thoughtful craftsmanship with products and stories that inspire people to live well and be confident in a style that is uniquely their own.

        `,
        info: `Named for the neoclassical building in Detroit’s financial district, the 32mm Vinton exudes elegance with its seamless design. This luxe edition features a white mother-of-pearl dial, full cut diamonds set in rounded square bushings at the hour indices, and champagne gold accents from the case to the two-tone bracelet. Designed to make an impression and built to last, this 32mm Vinton is a timeless classic that you’ll never want to leave home without.`,
        price: "990",
        manufacturer: "Shinola company, London",
        brand: 'Shinola',
        rating:'5'
    },



    {

        name: "G-Shock GSWH1000 Google G-Smart black",

        img: 'https://i.ibb.co/d2W12NV/watch-7.png',
        description: `G-SMART WITH WEAR OS BY GOOGLE. The new red resin band GSWH1000-1A4 multi-sport smartwatch is built with all the toughness of a G-SHOCK, with shock resistance and 200-meter water resistance. It is also the first G-SHOCK smartwatch to run on Wear OS by Google. As the flagship product of the sports-focused G-SHOCK Move line

        `,
        info: `G-SMART WITH WEAR OS BY GOOGLE. The new red resin band GSWH1000-1A4 multi-sport smartwatch is built with all the toughness of a G-SHOCK, with shock resistance and 200-meter water resistance. It is also the first G-SHOCK smartwatch to run on Wear OS by Google. As the flagship product of the sports-focused G-SHOCK Move line, the GSWH1000 is great for use in a wide range of athletic settings—from activities like running, indoor workouts, road biking, and swimming, to more extreme pursuits like surfing and snowboarding. The new watch has an optical sensor to measure heart rate, as well as a compass, altitude/air pressure sensor, accelerometer, gyrometer, GPS functionality and more. This powerful hardware profile enables the watch to capture the data on distance, speed and pace which is so useful for people doing physical training. The dual-layer monochrome and color display features an interface with a three-tier layout that users can customize to suit their goals, putting multiple data points at their fingertips, easily accessible at a glance.`,
        price: "2990",
        manufacturer: "G-Shock company, London",
        brand: 'G-Shock',
        rating:'4'
    },
    {

        name: "Projects Overlap Black White",

        img: 'https://i.ibb.co/0hB6Fff/watch-6.png',
        description: `The Overlap Watch challenges perception while using straightforward design elements.

        The minute disc revolves and intersects with the hour disc once an hour, echoing the visual of an early computer game. The four-pointed center second disc re-aligns every 15 seconds. Discreet, unique, simple, clean.

        `,
        info: `The Overlap Watch challenges perception while using straightforward design elements.

        The minute disc revolves and intersects with the hour disc once an hour, echoing the visual of an early computer game. The four-pointed center second disc re-aligns every 15 seconds. Discreet, unique, simple, clean.
        
        This is the second Projects watch design from the innovative Spanish design group Negroimpar designers Alvaro Alvarez and Maria Lopez.`,
        price: "2990",
        manufacturer: "Projects company, Bangladesh",
        brand: 'Projects',
        rating:'5'
    },
    {

        name: "Archetype Caspian Automatic Silver Gunmetal Black",

        img: 'https://i.ibb.co/JkC1bcF/watch-5.png',
        description: `Archetype always cuts away the dials so you can see the oscillating balance wheel while you wear your watch. They've taken that up a notch with the Caspian Automatic by showcasing dual balance wheels - a first for Archetype.

        `,
        info: `Archetype always cuts away the dials so you can see the oscillating balance wheel while you wear your watch. They've taken that up a notch with the Caspian Automatic by showcasing dual balance wheels - a first for Archetype. The two balance wheels are surrounded by a beautifully textured, guilloche-style baseplate. The time telling dial features two stamped textures and classic Roman numerals hour markers which is all elevated above the balance wheels and baseplate. An embossed-croc leather strap with stainless steel traditional tang buckle complement the guilloche dial details for a refined look.`,
        price: "2990",
        manufacturer: "Archetype company, China",
        brand: 'Archetype',
        rating:'5'
    },
    {

        name: "Thomas Earnshaw Longitude Automatic Black Brown",

        img: 'https://i.ibb.co/t3rqZQ6/watch-4.png',
        description: `The Lines of Longitude--determinants of ones position in terms of navigation--was a crucial puzzle to be solved in the early era of English naval dominance.

        `,
        info: `The Lines of Longitude--determinants of ones position in terms of navigation--was a crucial puzzle to be solved in the early era of English naval dominance.

        Clockmakers, like Thomas Earnshaw, the often heralded "father of the modern chronometer," were celebrated for their genius in helping to navigate the world's oceans. Thomas Earnshaw and his famed chronometers were rewarded and recognized by the Board of Longitude in 1805 for their work in helping to open up the seas to safe and accurate passage around the world.`,
        price: "2990",
        manufacturer: "Thomas Earnshaw company, Japan",
        brand: 'Thomas Earnshaw',
        rating:'4'
    },
    {

        name: "Xeric Regulator Automatic Royal Sand",

        img: 'https://i.ibb.co/QKhyWwW/watch-3.png',
        description: `Reimagining time and space, Xeric pushes the boundaries of watch design and time displays. They are passionate about creating time machines that you've never seen before while still keeping them affordable.

        `,
        info: `The Xeric Regulator Automatic breaks down timekeeping into its purest form, separating the hours, minutes, and seconds into distinctly isolated functions.

        To pull this off, Xeric turned to the mechanical regulator clocks of the 18th century, which were used when legibility was essential, and sometimes meant life or death. Railway conductors, mariners--and even Captain Cook on his voyages around the globe--relied on regulator clocks’ clear and simple way of time telling. Separating functions into isolated subdials allows the reader to see each hand clearly and distinctly.`,
        price: "1290",
        manufacturer: "Xeric company, London",
        brand: 'Xeric',
        rating:'5'
    },

]





const Services = () => {


    return (
        <div className="products">
            <div className="container p-5 ">
                <div className="p-5">

                    <h3 style={{ color: 'yellow' }}>
                        Most Wanted Products
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px' }}>
                        Popular Watches
                    </h1>
                </div>



                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        >

                        </Product>)
                    }




                </div>

            </div>
        </div>
    );
};

export default Services;