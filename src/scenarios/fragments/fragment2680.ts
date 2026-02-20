import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2678 } from "./fragment2678";
import type { FragmentToken2679 } from "./fragment2679";

export const FRAGMENT_2680 = gql(`
  fragment Fragment2680 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult2680 = ResultOf<typeof FRAGMENT_2680>;
type FragmentSelf2680 = NonNullable<FragmentResult2680>;

export type FragmentToken2680 =
  | FragmentSelf2680["__typename"]
  | FragmentSelf2680["typenameHint"] | FragmentToken2678 | FragmentToken2679;
