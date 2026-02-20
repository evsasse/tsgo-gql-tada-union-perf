import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2492 } from "./fragment2492";
import type { FragmentToken2493 } from "./fragment2493";

export const FRAGMENT_2494 = gql(`
  fragment Fragment2494 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult2494 = ResultOf<typeof FRAGMENT_2494>;
type FragmentSelf2494 = NonNullable<FragmentResult2494>;

export type FragmentToken2494 =
  | FragmentSelf2494["__typename"]
  | FragmentSelf2494["typenameHint"] | FragmentToken2492 | FragmentToken2493;
