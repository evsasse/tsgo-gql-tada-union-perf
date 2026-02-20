import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2716 } from "./fragment2716";
import type { FragmentToken2717 } from "./fragment2717";

export const FRAGMENT_2718 = gql(`
  fragment Fragment2718 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult2718 = ResultOf<typeof FRAGMENT_2718>;
type FragmentSelf2718 = NonNullable<FragmentResult2718>;

export type FragmentToken2718 =
  | FragmentSelf2718["__typename"]
  | FragmentSelf2718["typenameHint"] | FragmentToken2716 | FragmentToken2717;
