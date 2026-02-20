import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2446 } from "./fragment2446";
import type { FragmentToken2447 } from "./fragment2447";

export const FRAGMENT_2448 = gql(`
  fragment Fragment2448 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult2448 = ResultOf<typeof FRAGMENT_2448>;
type FragmentSelf2448 = NonNullable<FragmentResult2448>;

export type FragmentToken2448 =
  | FragmentSelf2448["__typename"]
  | FragmentSelf2448["typenameHint"] | FragmentToken2446 | FragmentToken2447;
