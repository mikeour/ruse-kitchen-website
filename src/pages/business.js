import React from "react"
import { ButtonLink } from "../components/shared"
import { motion } from "framer-motion"
import { css } from "@emotion/core"
import { mq } from "../styles"

const BusinessPage = () => {
  return (
    <motion.div
      key="business"
      css={css`
        padding: 12rem 12rem 0 12rem;

        ${mq("medium")} {
          padding: 4rem 2rem;
        }

        ${mq("small")} {
          padding: 5rem 0.5rem;
        }
      `}
    >
      <div
        css={css`
          padding: 2rem 4rem;
          margin: 0 1rem 1rem 1rem;
          position: relative;
          background: white;
          border-radius: 10px;
          box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

          .btn {
            margin: 0 2rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 1.5rem;
            letter-spacing: 1.5px;
            align-items: center;
            vertical-align: middle;
            display: inline-block;
          `}
        >
          Have a general inquiry?
        </h1>
        <ButtonLink className="btn" to="/contact">
          General
        </ButtonLink>
      </div>
    </motion.div>
  )
}

export default BusinessPage
