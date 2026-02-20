import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2498 } from "./fragment2498";
import type { FragmentToken2499 } from "./fragment2499";

export const FRAGMENT_2500 = gql(`
  fragment Fragment2500 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult2500 = ResultOf<typeof FRAGMENT_2500>;
type FragmentSelf2500 = NonNullable<FragmentResult2500>;

export type FragmentToken2500 =
  | FragmentSelf2500["__typename"]
  | FragmentSelf2500["typenameHint"] | FragmentToken2498 | FragmentToken2499;
