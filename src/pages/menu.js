import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import MenuItem from "../components/menuItem"

const MenuPage = () => {
  return (
    <div>
      <Layout>
        <Section title="Made in House and Meticulously Spiced">
          <MenuItem name="Lamb Gyro" price="8">
            House made vegan lamb with marinated onion, cucumber and tomato.
            Topped with harissa and tahini tzatziki
          </MenuItem>
          <MenuItem name="Spicy Italian Sausage" price="7">
            House made vegan sausage, with balsamic onions and peppers and
            served with a garlic mustard
          </MenuItem>
          <MenuItem name="Falafel Burger" price="7">
            House made falafel burger. Served with marinated cucumber, onion,
            tomato, harissa and tahini tzatiziki
          </MenuItem>
          <MenuItem name="Tofu Satay Taco" price="3.75">
            Lemongrass marinated tofu. Served with a peanut sauce and a
            coriander slaw. Topped with pickled ginger carrots
          </MenuItem>
          <MenuItem name="Beef Chimichurri Taco" price="3.75">
            House made vegan beef. Served with cumin-blistered shishito peppers.
            Topped with pickled red onions
          </MenuItem>
          <MenuItem name="Mix and Match Two Tacos" price="7">
            Can't decide? Mix and match our two tacos
          </MenuItem>
          <MenuItem name="Steak Pesto Pita" price="9">
            Charbroiled steak sauteed with peppers and onions, topped with pesto
            and a red cabbage slaw
          </MenuItem>
          <MenuItem name="Fattoush Salad" price="7">
            Lebanese salad with parsley, mint, radish, tomato, and romaine
            lettuce, topped with pita croutons and a pomegranate vinaigrette.
          </MenuItem>
        </Section>
      </Layout>
    </div>
  )
}

export default MenuPage
