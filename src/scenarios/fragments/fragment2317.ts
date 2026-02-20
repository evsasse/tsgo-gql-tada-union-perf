import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2315 } from "./fragment2315";
import type { FragmentToken2316 } from "./fragment2316";

export const FRAGMENT_2317 = gql(`
  fragment Fragment2317 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult2317 = ResultOf<typeof FRAGMENT_2317>;
type FragmentSelf2317 = NonNullable<FragmentResult2317>;

export type FragmentToken2317 =
  | FragmentSelf2317["__typename"]
  | FragmentSelf2317["typenameHint"] | FragmentToken2315 | FragmentToken2316;
