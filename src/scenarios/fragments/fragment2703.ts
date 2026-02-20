import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2701 } from "./fragment2701";
import type { FragmentToken2702 } from "./fragment2702";

export const FRAGMENT_2703 = gql(`
  fragment Fragment2703 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult2703 = ResultOf<typeof FRAGMENT_2703>;
type FragmentSelf2703 = NonNullable<FragmentResult2703>;

export type FragmentToken2703 =
  | FragmentSelf2703["__typename"]
  | FragmentSelf2703["typenameHint"] | FragmentToken2701 | FragmentToken2702;
