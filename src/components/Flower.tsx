import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/div.css';

import b from '../assets/b.jpeg';
import bbco from '../assets/bbco.jpeg';
import f from '../assets/f.jpeg';
import j from '../assets/j.jpeg';
import mp from '../assets/mp.jpeg';
import o from '../assets/o.jpeg';
import p from '../assets/p.jpeg';
import sj from '../assets/sj.jpeg';
import yb from '../assets/yb.jpeg';


const Flower: React.FC = () => {
    const { flower } = useParams();
    let name = "";
    let source = "";
    let text = "UNDEFINED BEHAVIOUR";
    if (flower === "b") {
        name = "Bougainvillea";
        text = `The Bougainvillea is a genus of thorny ornamental vines, bushes, and trees. They can grow until about 4.6 m
			to 12.2 m. They have heart - shaped leaves, and small white flowers.The commonly mistaken "flowers" are in
            fact several brightly colored modified leaves called bracts.`;
        source = b;
    } else if (flower === "bbco") {
        name = "Bay Biscayne Creeping Oxeye";
        text = `The Bay Biscane Creeping Oxeye, scientific name Sphagneticola trilobata, is a flowering plant native to
			Mexico, Central America, and the Caribbean, but now grows throughout the Neotropics. It is typically a
			ground cover plant, with daisy-like yellow flowers. Each flower head is up to 1.5" (3.5 cm) in diameter with
			numerous tiny yellow florets in the center and 8-13 yellow petal-like florets with toothed tips on the
			periphery.`;
        source = bbco;
    } else if (flower === "yb") {
        name = "Tecoma stans";
        text = `Yellow Bells are is a species of flowering perennial shrub in the trumpet vine family, Bignoniaceae native to
			the Americas. The large, showy, golden yellow, trumpet-shaped flowers are in clusters at the ends of
			branches`;
        source = yb;
    } else if (flower === "f") {
        name = "Red Frangipani";
        text = `The Red Frangipani, scientific name Plumeria rubra, is a deciduous plant species that belongs to the genus
			Plumeria. It grows as a spreading tree to 7–8 m (23–26 ft) high and wide, and usually has flowers with
			shades of red, yellow and pink.`;
        source = f;
    } else if (flower === "j") {
        name = "Jasmine";
        text = `The Jasmine, scientific name Jasminum officinale is a species of flowering plant in the olive family
			Oleaceae. They have long, pointed oval leaves, with pale white flowers that typically have five petals.`;
        source = j;
    } else if (flower === "mp") {
        name = "Mexican Petunia";
        text = `The Mexican Petunia is a is a species of flowering plant in the family Acanthaceae. It usually grows to about
			90 cm to 1 meter. It has purple bell shaped flowers, with leaves that are narrow and linear.`;
        source = mp;
    } else if(flower === 'o'){
        name = "Oleander";
        text = `The Oleander, scientific name Nerium oleander, is a toxic flowering plant. It has thick and pointy leaves
			arranged in pairs of three along the stem and flowers of a rose colour.`;
        source = o;
    } else if(flower === 'p'){
        name = "Parakeet flower";
        text = `The Parakeet Flower, scientific name Heliconia psittacorum is a flowering herbaceous plant. ts showy
			inflorescence is erect, comprised of long bracts and orange tubular flowers. The bracts are red to
			pink-colored, fading to orange towards the base.`;
        source = p;
    } else if(flower === 'sj'){
        name = "Scarlet Jungleflame";
        text = `The Scarlet Jungleflame, scientific name Ixora coccinea, is a flowering plant in the family Rubiaceae. It
			produces small tubular, scarlet flowers in dense rounded clusters 2–5 in (5.1–12.7 cm) across all year long.`;
        source = sj;
    }
    return (
        <>
            <div className="title">
                <h1>{name}</h1>
            </div>
            <img src={source} style={{ width: 300, height: 300 }} className="flower-container"></img>
            <h2 className="text">{text}</h2>
        </>
    );
}

export default Flower;