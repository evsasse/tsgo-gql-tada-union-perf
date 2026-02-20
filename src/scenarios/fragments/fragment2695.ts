import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2693 } from "./fragment2693";
import type { FragmentToken2694 } from "./fragment2694";

export const FRAGMENT_2695 = gql(`
  fragment Fragment2695 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult2695 = ResultOf<typeof FRAGMENT_2695>;
type FragmentSelf2695 = NonNullable<FragmentResult2695>;

export type FragmentToken2695 =
  | FragmentSelf2695["__typename"]
  | FragmentSelf2695["typenameHint"] | FragmentToken2693 | FragmentToken2694;
