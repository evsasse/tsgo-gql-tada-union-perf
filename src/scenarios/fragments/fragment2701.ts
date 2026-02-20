import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2699 } from "./fragment2699";
import type { FragmentToken2700 } from "./fragment2700";

export const FRAGMENT_2701 = gql(`
  fragment Fragment2701 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult2701 = ResultOf<typeof FRAGMENT_2701>;
type FragmentSelf2701 = NonNullable<FragmentResult2701>;

export type FragmentToken2701 =
  | FragmentSelf2701["__typename"]
  | FragmentSelf2701["typenameHint"] | FragmentToken2699 | FragmentToken2700;
