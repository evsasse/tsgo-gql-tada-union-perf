import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1471 } from "./fragment1471";
import type { FragmentToken1472 } from "./fragment1472";

export const FRAGMENT_1473 = gql(`
  fragment Fragment1473 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult1473 = ResultOf<typeof FRAGMENT_1473>;
type FragmentSelf1473 = NonNullable<FragmentResult1473>;

export type FragmentToken1473 =
  | FragmentSelf1473["__typename"]
  | FragmentSelf1473["typenameHint"] | FragmentToken1471 | FragmentToken1472;
