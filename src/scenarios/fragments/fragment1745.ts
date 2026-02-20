import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1743 } from "./fragment1743";
import type { FragmentToken1744 } from "./fragment1744";

export const FRAGMENT_1745 = gql(`
  fragment Fragment1745 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult1745 = ResultOf<typeof FRAGMENT_1745>;
type FragmentSelf1745 = NonNullable<FragmentResult1745>;

export type FragmentToken1745 =
  | FragmentSelf1745["__typename"]
  | FragmentSelf1745["typenameHint"] | FragmentToken1743 | FragmentToken1744;
