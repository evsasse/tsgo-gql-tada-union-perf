import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2546 } from "./fragment2546";
import type { FragmentToken2547 } from "./fragment2547";

export const FRAGMENT_2548 = gql(`
  fragment Fragment2548 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult2548 = ResultOf<typeof FRAGMENT_2548>;
type FragmentSelf2548 = NonNullable<FragmentResult2548>;

export type FragmentToken2548 =
  | FragmentSelf2548["__typename"]
  | FragmentSelf2548["typenameHint"] | FragmentToken2546 | FragmentToken2547;
