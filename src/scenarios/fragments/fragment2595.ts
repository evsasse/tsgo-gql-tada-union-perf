import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2593 } from "./fragment2593";
import type { FragmentToken2594 } from "./fragment2594";

export const FRAGMENT_2595 = gql(`
  fragment Fragment2595 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult2595 = ResultOf<typeof FRAGMENT_2595>;
type FragmentSelf2595 = NonNullable<FragmentResult2595>;

export type FragmentToken2595 =
  | FragmentSelf2595["__typename"]
  | FragmentSelf2595["typenameHint"] | FragmentToken2593 | FragmentToken2594;
