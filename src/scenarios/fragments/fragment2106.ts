import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2104 } from "./fragment2104";
import type { FragmentToken2105 } from "./fragment2105";

export const FRAGMENT_2106 = gql(`
  fragment Fragment2106 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult2106 = ResultOf<typeof FRAGMENT_2106>;
type FragmentSelf2106 = NonNullable<FragmentResult2106>;

export type FragmentToken2106 =
  | FragmentSelf2106["__typename"]
  | FragmentSelf2106["typenameHint"] | FragmentToken2104 | FragmentToken2105;
