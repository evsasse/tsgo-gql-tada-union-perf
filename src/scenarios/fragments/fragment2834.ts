import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2832 } from "./fragment2832";
import type { FragmentToken2833 } from "./fragment2833";

export const FRAGMENT_2834 = gql(`
  fragment Fragment2834 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult2834 = ResultOf<typeof FRAGMENT_2834>;
type FragmentSelf2834 = NonNullable<FragmentResult2834>;

export type FragmentToken2834 =
  | FragmentSelf2834["__typename"]
  | FragmentSelf2834["typenameHint"] | FragmentToken2832 | FragmentToken2833;
