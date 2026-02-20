import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2316 } from "./fragment2316";
import type { FragmentToken2317 } from "./fragment2317";

export const FRAGMENT_2318 = gql(`
  fragment Fragment2318 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult2318 = ResultOf<typeof FRAGMENT_2318>;
type FragmentSelf2318 = NonNullable<FragmentResult2318>;

export type FragmentToken2318 =
  | FragmentSelf2318["__typename"]
  | FragmentSelf2318["typenameHint"] | FragmentToken2316 | FragmentToken2317;
