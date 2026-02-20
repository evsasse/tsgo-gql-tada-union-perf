import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2629 } from "./fragment2629";
import type { FragmentToken2630 } from "./fragment2630";

export const FRAGMENT_2631 = gql(`
  fragment Fragment2631 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult2631 = ResultOf<typeof FRAGMENT_2631>;
type FragmentSelf2631 = NonNullable<FragmentResult2631>;

export type FragmentToken2631 =
  | FragmentSelf2631["__typename"]
  | FragmentSelf2631["typenameHint"] | FragmentToken2629 | FragmentToken2630;
