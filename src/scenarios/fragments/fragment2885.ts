import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2883 } from "./fragment2883";
import type { FragmentToken2884 } from "./fragment2884";

export const FRAGMENT_2885 = gql(`
  fragment Fragment2885 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult2885 = ResultOf<typeof FRAGMENT_2885>;
type FragmentSelf2885 = NonNullable<FragmentResult2885>;

export type FragmentToken2885 =
  | FragmentSelf2885["__typename"]
  | FragmentSelf2885["typenameHint"] | FragmentToken2883 | FragmentToken2884;
