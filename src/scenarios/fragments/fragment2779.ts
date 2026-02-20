import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2777 } from "./fragment2777";
import type { FragmentToken2778 } from "./fragment2778";

export const FRAGMENT_2779 = gql(`
  fragment Fragment2779 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult2779 = ResultOf<typeof FRAGMENT_2779>;
type FragmentSelf2779 = NonNullable<FragmentResult2779>;

export type FragmentToken2779 =
  | FragmentSelf2779["__typename"]
  | FragmentSelf2779["typenameHint"] | FragmentToken2777 | FragmentToken2778;
