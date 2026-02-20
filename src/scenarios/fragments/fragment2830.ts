import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2828 } from "./fragment2828";
import type { FragmentToken2829 } from "./fragment2829";

export const FRAGMENT_2830 = gql(`
  fragment Fragment2830 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult2830 = ResultOf<typeof FRAGMENT_2830>;
type FragmentSelf2830 = NonNullable<FragmentResult2830>;

export type FragmentToken2830 =
  | FragmentSelf2830["__typename"]
  | FragmentSelf2830["typenameHint"] | FragmentToken2828 | FragmentToken2829;
