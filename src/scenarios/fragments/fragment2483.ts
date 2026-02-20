import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2481 } from "./fragment2481";
import type { FragmentToken2482 } from "./fragment2482";

export const FRAGMENT_2483 = gql(`
  fragment Fragment2483 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult2483 = ResultOf<typeof FRAGMENT_2483>;
type FragmentSelf2483 = NonNullable<FragmentResult2483>;

export type FragmentToken2483 =
  | FragmentSelf2483["__typename"]
  | FragmentSelf2483["typenameHint"] | FragmentToken2481 | FragmentToken2482;
