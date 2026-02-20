import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2553 } from "./fragment2553";
import type { FragmentToken2554 } from "./fragment2554";

export const FRAGMENT_2555 = gql(`
  fragment Fragment2555 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult2555 = ResultOf<typeof FRAGMENT_2555>;
type FragmentSelf2555 = NonNullable<FragmentResult2555>;

export type FragmentToken2555 =
  | FragmentSelf2555["__typename"]
  | FragmentSelf2555["typenameHint"] | FragmentToken2553 | FragmentToken2554;
