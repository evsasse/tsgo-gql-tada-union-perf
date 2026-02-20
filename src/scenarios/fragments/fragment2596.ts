import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2594 } from "./fragment2594";
import type { FragmentToken2595 } from "./fragment2595";

export const FRAGMENT_2596 = gql(`
  fragment Fragment2596 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult2596 = ResultOf<typeof FRAGMENT_2596>;
type FragmentSelf2596 = NonNullable<FragmentResult2596>;

export type FragmentToken2596 =
  | FragmentSelf2596["__typename"]
  | FragmentSelf2596["typenameHint"] | FragmentToken2594 | FragmentToken2595;
