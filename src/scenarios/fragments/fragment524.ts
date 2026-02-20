import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken522 } from "./fragment522";
import type { FragmentToken523 } from "./fragment523";

export const FRAGMENT_524 = gql(`
  fragment Fragment524 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult524 = ResultOf<typeof FRAGMENT_524>;
type FragmentSelf524 = NonNullable<FragmentResult524>;

export type FragmentToken524 =
  | FragmentSelf524["__typename"]
  | FragmentSelf524["typenameHint"] | FragmentToken522 | FragmentToken523;
