import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken307 } from "./fragment307";
import type { FragmentToken308 } from "./fragment308";

export const FRAGMENT_309 = gql(`
  fragment Fragment309 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult309 = ResultOf<typeof FRAGMENT_309>;
type FragmentSelf309 = NonNullable<FragmentResult309>;

export type FragmentToken309 =
  | FragmentSelf309["__typename"]
  | FragmentSelf309["typenameHint"] | FragmentToken307 | FragmentToken308;
