import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2689 } from "./fragment2689";
import type { FragmentToken2690 } from "./fragment2690";

export const FRAGMENT_2691 = gql(`
  fragment Fragment2691 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult2691 = ResultOf<typeof FRAGMENT_2691>;
type FragmentSelf2691 = NonNullable<FragmentResult2691>;

export type FragmentToken2691 =
  | FragmentSelf2691["__typename"]
  | FragmentSelf2691["typenameHint"] | FragmentToken2689 | FragmentToken2690;
