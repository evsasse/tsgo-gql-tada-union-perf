import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2904 } from "./fragment2904";
import type { FragmentToken2905 } from "./fragment2905";

export const FRAGMENT_2906 = gql(`
  fragment Fragment2906 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult2906 = ResultOf<typeof FRAGMENT_2906>;
type FragmentSelf2906 = NonNullable<FragmentResult2906>;

export type FragmentToken2906 =
  | FragmentSelf2906["__typename"]
  | FragmentSelf2906["typenameHint"] | FragmentToken2904 | FragmentToken2905;
