import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1755 } from "./fragment1755";
import type { FragmentToken1756 } from "./fragment1756";

export const FRAGMENT_1757 = gql(`
  fragment Fragment1757 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult1757 = ResultOf<typeof FRAGMENT_1757>;
type FragmentSelf1757 = NonNullable<FragmentResult1757>;

export type FragmentToken1757 =
  | FragmentSelf1757["__typename"]
  | FragmentSelf1757["typenameHint"] | FragmentToken1755 | FragmentToken1756;
