import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2545 } from "./fragment2545";
import type { FragmentToken2546 } from "./fragment2546";

export const FRAGMENT_2547 = gql(`
  fragment Fragment2547 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult2547 = ResultOf<typeof FRAGMENT_2547>;
type FragmentSelf2547 = NonNullable<FragmentResult2547>;

export type FragmentToken2547 =
  | FragmentSelf2547["__typename"]
  | FragmentSelf2547["typenameHint"] | FragmentToken2545 | FragmentToken2546;
