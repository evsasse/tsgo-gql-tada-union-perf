import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2944 } from "./fragment2944";
import type { FragmentToken2945 } from "./fragment2945";

export const FRAGMENT_2946 = gql(`
  fragment Fragment2946 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult2946 = ResultOf<typeof FRAGMENT_2946>;
type FragmentSelf2946 = NonNullable<FragmentResult2946>;

export type FragmentToken2946 =
  | FragmentSelf2946["__typename"]
  | FragmentSelf2946["typenameHint"] | FragmentToken2944 | FragmentToken2945;
