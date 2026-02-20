import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2497 } from "./fragment2497";
import type { FragmentToken2498 } from "./fragment2498";

export const FRAGMENT_2499 = gql(`
  fragment Fragment2499 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult2499 = ResultOf<typeof FRAGMENT_2499>;
type FragmentSelf2499 = NonNullable<FragmentResult2499>;

export type FragmentToken2499 =
  | FragmentSelf2499["__typename"]
  | FragmentSelf2499["typenameHint"] | FragmentToken2497 | FragmentToken2498;
