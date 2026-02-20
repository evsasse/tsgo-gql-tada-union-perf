import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1588 } from "./fragment1588";
import type { FragmentToken1589 } from "./fragment1589";

export const FRAGMENT_1590 = gql(`
  fragment Fragment1590 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult1590 = ResultOf<typeof FRAGMENT_1590>;
type FragmentSelf1590 = NonNullable<FragmentResult1590>;

export type FragmentToken1590 =
  | FragmentSelf1590["__typename"]
  | FragmentSelf1590["typenameHint"] | FragmentToken1588 | FragmentToken1589;
