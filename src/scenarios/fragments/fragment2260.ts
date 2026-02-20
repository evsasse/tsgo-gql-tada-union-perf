import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2258 } from "./fragment2258";
import type { FragmentToken2259 } from "./fragment2259";

export const FRAGMENT_2260 = gql(`
  fragment Fragment2260 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult2260 = ResultOf<typeof FRAGMENT_2260>;
type FragmentSelf2260 = NonNullable<FragmentResult2260>;

export type FragmentToken2260 =
  | FragmentSelf2260["__typename"]
  | FragmentSelf2260["typenameHint"] | FragmentToken2258 | FragmentToken2259;
