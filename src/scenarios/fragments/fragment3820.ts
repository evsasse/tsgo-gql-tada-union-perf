import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3818 } from "./fragment3818";
import type { FragmentToken3819 } from "./fragment3819";

export const FRAGMENT_3820 = gql(`
  fragment Fragment3820 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult3820 = ResultOf<typeof FRAGMENT_3820>;
type FragmentSelf3820 = NonNullable<FragmentResult3820>;

export type FragmentToken3820 =
  | FragmentSelf3820["__typename"]
  | FragmentSelf3820["typenameHint"] | FragmentToken3818 | FragmentToken3819;
