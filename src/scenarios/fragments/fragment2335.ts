import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2333 } from "./fragment2333";
import type { FragmentToken2334 } from "./fragment2334";

export const FRAGMENT_2335 = gql(`
  fragment Fragment2335 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult2335 = ResultOf<typeof FRAGMENT_2335>;
type FragmentSelf2335 = NonNullable<FragmentResult2335>;

export type FragmentToken2335 =
  | FragmentSelf2335["__typename"]
  | FragmentSelf2335["typenameHint"] | FragmentToken2333 | FragmentToken2334;
