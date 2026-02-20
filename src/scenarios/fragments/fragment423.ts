import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken421 } from "./fragment421";
import type { FragmentToken422 } from "./fragment422";

export const FRAGMENT_423 = gql(`
  fragment Fragment423 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult423 = ResultOf<typeof FRAGMENT_423>;
type FragmentSelf423 = NonNullable<FragmentResult423>;

export type FragmentToken423 =
  | FragmentSelf423["__typename"]
  | FragmentSelf423["typenameHint"] | FragmentToken421 | FragmentToken422;
