import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1701 } from "./fragment1701";
import type { FragmentToken1702 } from "./fragment1702";

export const FRAGMENT_1703 = gql(`
  fragment Fragment1703 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult1703 = ResultOf<typeof FRAGMENT_1703>;
type FragmentSelf1703 = NonNullable<FragmentResult1703>;

export type FragmentToken1703 =
  | FragmentSelf1703["__typename"]
  | FragmentSelf1703["typenameHint"] | FragmentToken1701 | FragmentToken1702;
