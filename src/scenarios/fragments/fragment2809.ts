import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2807 } from "./fragment2807";
import type { FragmentToken2808 } from "./fragment2808";

export const FRAGMENT_2809 = gql(`
  fragment Fragment2809 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult2809 = ResultOf<typeof FRAGMENT_2809>;
type FragmentSelf2809 = NonNullable<FragmentResult2809>;

export type FragmentToken2809 =
  | FragmentSelf2809["__typename"]
  | FragmentSelf2809["typenameHint"] | FragmentToken2807 | FragmentToken2808;
