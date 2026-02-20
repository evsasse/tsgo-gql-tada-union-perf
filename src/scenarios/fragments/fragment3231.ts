import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3229 } from "./fragment3229";
import type { FragmentToken3230 } from "./fragment3230";

export const FRAGMENT_3231 = gql(`
  fragment Fragment3231 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult3231 = ResultOf<typeof FRAGMENT_3231>;
type FragmentSelf3231 = NonNullable<FragmentResult3231>;

export type FragmentToken3231 =
  | FragmentSelf3231["__typename"]
  | FragmentSelf3231["typenameHint"] | FragmentToken3229 | FragmentToken3230;
