import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2229 } from "./fragment2229";
import type { FragmentToken2230 } from "./fragment2230";

export const FRAGMENT_2231 = gql(`
  fragment Fragment2231 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult2231 = ResultOf<typeof FRAGMENT_2231>;
type FragmentSelf2231 = NonNullable<FragmentResult2231>;

export type FragmentToken2231 =
  | FragmentSelf2231["__typename"]
  | FragmentSelf2231["typenameHint"] | FragmentToken2229 | FragmentToken2230;
