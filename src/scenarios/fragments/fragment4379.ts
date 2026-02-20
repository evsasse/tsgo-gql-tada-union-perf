import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4377 } from "./fragment4377";
import type { FragmentToken4378 } from "./fragment4378";

export const FRAGMENT_4379 = gql(`
  fragment Fragment4379 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult4379 = ResultOf<typeof FRAGMENT_4379>;
type FragmentSelf4379 = NonNullable<FragmentResult4379>;

export type FragmentToken4379 =
  | FragmentSelf4379["__typename"]
  | FragmentSelf4379["typenameHint"] | FragmentToken4377 | FragmentToken4378;
