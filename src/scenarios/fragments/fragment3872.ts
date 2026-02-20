import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3870 } from "./fragment3870";
import type { FragmentToken3871 } from "./fragment3871";

export const FRAGMENT_3872 = gql(`
  fragment Fragment3872 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult3872 = ResultOf<typeof FRAGMENT_3872>;
type FragmentSelf3872 = NonNullable<FragmentResult3872>;

export type FragmentToken3872 =
  | FragmentSelf3872["__typename"]
  | FragmentSelf3872["typenameHint"] | FragmentToken3870 | FragmentToken3871;
