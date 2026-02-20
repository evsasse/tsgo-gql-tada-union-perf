import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2230 } from "./fragment2230";
import type { FragmentToken2231 } from "./fragment2231";

export const FRAGMENT_2232 = gql(`
  fragment Fragment2232 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult2232 = ResultOf<typeof FRAGMENT_2232>;
type FragmentSelf2232 = NonNullable<FragmentResult2232>;

export type FragmentToken2232 =
  | FragmentSelf2232["__typename"]
  | FragmentSelf2232["typenameHint"] | FragmentToken2230 | FragmentToken2231;
