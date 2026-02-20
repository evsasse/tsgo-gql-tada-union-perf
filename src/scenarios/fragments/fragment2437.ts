import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2435 } from "./fragment2435";
import type { FragmentToken2436 } from "./fragment2436";

export const FRAGMENT_2437 = gql(`
  fragment Fragment2437 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult2437 = ResultOf<typeof FRAGMENT_2437>;
type FragmentSelf2437 = NonNullable<FragmentResult2437>;

export type FragmentToken2437 =
  | FragmentSelf2437["__typename"]
  | FragmentSelf2437["typenameHint"] | FragmentToken2435 | FragmentToken2436;
