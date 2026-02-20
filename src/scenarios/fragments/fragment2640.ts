import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2638 } from "./fragment2638";
import type { FragmentToken2639 } from "./fragment2639";

export const FRAGMENT_2640 = gql(`
  fragment Fragment2640 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult2640 = ResultOf<typeof FRAGMENT_2640>;
type FragmentSelf2640 = NonNullable<FragmentResult2640>;

export type FragmentToken2640 =
  | FragmentSelf2640["__typename"]
  | FragmentSelf2640["typenameHint"] | FragmentToken2638 | FragmentToken2639;
