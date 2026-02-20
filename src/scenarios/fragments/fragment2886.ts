import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2884 } from "./fragment2884";
import type { FragmentToken2885 } from "./fragment2885";

export const FRAGMENT_2886 = gql(`
  fragment Fragment2886 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult2886 = ResultOf<typeof FRAGMENT_2886>;
type FragmentSelf2886 = NonNullable<FragmentResult2886>;

export type FragmentToken2886 =
  | FragmentSelf2886["__typename"]
  | FragmentSelf2886["typenameHint"] | FragmentToken2884 | FragmentToken2885;
