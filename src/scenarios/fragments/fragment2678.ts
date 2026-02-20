import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2676 } from "./fragment2676";
import type { FragmentToken2677 } from "./fragment2677";

export const FRAGMENT_2678 = gql(`
  fragment Fragment2678 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult2678 = ResultOf<typeof FRAGMENT_2678>;
type FragmentSelf2678 = NonNullable<FragmentResult2678>;

export type FragmentToken2678 =
  | FragmentSelf2678["__typename"]
  | FragmentSelf2678["typenameHint"] | FragmentToken2676 | FragmentToken2677;
