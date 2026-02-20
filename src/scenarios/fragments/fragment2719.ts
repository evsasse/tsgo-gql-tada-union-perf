import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2717 } from "./fragment2717";
import type { FragmentToken2718 } from "./fragment2718";

export const FRAGMENT_2719 = gql(`
  fragment Fragment2719 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult2719 = ResultOf<typeof FRAGMENT_2719>;
type FragmentSelf2719 = NonNullable<FragmentResult2719>;

export type FragmentToken2719 =
  | FragmentSelf2719["__typename"]
  | FragmentSelf2719["typenameHint"] | FragmentToken2717 | FragmentToken2718;
