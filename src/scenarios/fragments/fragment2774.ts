import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2772 } from "./fragment2772";
import type { FragmentToken2773 } from "./fragment2773";

export const FRAGMENT_2774 = gql(`
  fragment Fragment2774 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult2774 = ResultOf<typeof FRAGMENT_2774>;
type FragmentSelf2774 = NonNullable<FragmentResult2774>;

export type FragmentToken2774 =
  | FragmentSelf2774["__typename"]
  | FragmentSelf2774["typenameHint"] | FragmentToken2772 | FragmentToken2773;
