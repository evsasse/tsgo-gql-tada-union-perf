import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3422 } from "./fragment3422";
import type { FragmentToken3423 } from "./fragment3423";

export const FRAGMENT_3424 = gql(`
  fragment Fragment3424 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult3424 = ResultOf<typeof FRAGMENT_3424>;
type FragmentSelf3424 = NonNullable<FragmentResult3424>;

export type FragmentToken3424 =
  | FragmentSelf3424["__typename"]
  | FragmentSelf3424["typenameHint"] | FragmentToken3422 | FragmentToken3423;
