import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2450 } from "./fragment2450";
import type { FragmentToken2451 } from "./fragment2451";

export const FRAGMENT_2452 = gql(`
  fragment Fragment2452 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult2452 = ResultOf<typeof FRAGMENT_2452>;
type FragmentSelf2452 = NonNullable<FragmentResult2452>;

export type FragmentToken2452 =
  | FragmentSelf2452["__typename"]
  | FragmentSelf2452["typenameHint"] | FragmentToken2450 | FragmentToken2451;
