import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3998 } from "./fragment3998";
import type { FragmentToken3999 } from "./fragment3999";

export const FRAGMENT_4000 = gql(`
  fragment Fragment4000 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult4000 = ResultOf<typeof FRAGMENT_4000>;
type FragmentSelf4000 = NonNullable<FragmentResult4000>;

export type FragmentToken4000 =
  | FragmentSelf4000["__typename"]
  | FragmentSelf4000["typenameHint"] | FragmentToken3998 | FragmentToken3999;
