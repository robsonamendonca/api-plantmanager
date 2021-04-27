import { Router } from 'express';

const data = require('../data/server.json');

export const router = Router();

//home
router.get('/',
    (req, res) => res.send(
        `<div style="max-width: 960px;
    margin: auto;
    padding: 1rem;">
    <h1>API PlantManager!</h1>
    <p>
        Api manager of plants.
        <br>
        🪴🌾🌴🍀🌿🪴
    </p>

    <div id="resources">
        <div>
            <h1>Resources</h1>

            <ul>

                <li>
                    <a href="plants_water_frequencies">/plants_water_frequencies</a>
                    <sup>2x</sup>
                </li>

                <li>
                    <a href="plants_environments">/plants_environments</a>
                    <sup>4x</sup>
                </li>

                <li>
                    <a href="plants">/plants</a>
                    <sup>10x</sup>
                </li>

            </ul>

        </div>
    </div>
</div>`
    ));

router.get('/plants', (req, res) => res.json(data.plants));
router.get('/plants_environments', (req, res) => res.json(data.plants_environments));
router.get('/plants_water_frequencies', (req, res) => res.json(data.plants_water_frequencies));

