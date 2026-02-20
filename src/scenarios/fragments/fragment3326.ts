import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3324 } from "./fragment3324";
import type { FragmentToken3325 } from "./fragment3325";

export const FRAGMENT_3326 = gql(`
  fragment Fragment3326 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult3326 = ResultOf<typeof FRAGMENT_3326>;
type FragmentSelf3326 = NonNullable<FragmentResult3326>;

export type FragmentToken3326 =
  | FragmentSelf3326["__typename"]
  | FragmentSelf3326["typenameHint"] | FragmentToken3324 | FragmentToken3325;
