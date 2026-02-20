import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1761 } from "./fragment1761";
import type { FragmentToken1762 } from "./fragment1762";

export const FRAGMENT_1763 = gql(`
  fragment Fragment1763 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult1763 = ResultOf<typeof FRAGMENT_1763>;
type FragmentSelf1763 = NonNullable<FragmentResult1763>;

export type FragmentToken1763 =
  | FragmentSelf1763["__typename"]
  | FragmentSelf1763["typenameHint"] | FragmentToken1761 | FragmentToken1762;
