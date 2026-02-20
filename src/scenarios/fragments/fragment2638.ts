import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2636 } from "./fragment2636";
import type { FragmentToken2637 } from "./fragment2637";

export const FRAGMENT_2638 = gql(`
  fragment Fragment2638 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult2638 = ResultOf<typeof FRAGMENT_2638>;
type FragmentSelf2638 = NonNullable<FragmentResult2638>;

export type FragmentToken2638 =
  | FragmentSelf2638["__typename"]
  | FragmentSelf2638["typenameHint"] | FragmentToken2636 | FragmentToken2637;
