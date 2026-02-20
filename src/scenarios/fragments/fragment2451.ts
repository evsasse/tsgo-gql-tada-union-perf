import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2449 } from "./fragment2449";
import type { FragmentToken2450 } from "./fragment2450";

export const FRAGMENT_2451 = gql(`
  fragment Fragment2451 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult2451 = ResultOf<typeof FRAGMENT_2451>;
type FragmentSelf2451 = NonNullable<FragmentResult2451>;

export type FragmentToken2451 =
  | FragmentSelf2451["__typename"]
  | FragmentSelf2451["typenameHint"] | FragmentToken2449 | FragmentToken2450;
