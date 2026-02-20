import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3540 } from "./fragment3540";
import type { FragmentToken3541 } from "./fragment3541";

export const FRAGMENT_3542 = gql(`
  fragment Fragment3542 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult3542 = ResultOf<typeof FRAGMENT_3542>;
type FragmentSelf3542 = NonNullable<FragmentResult3542>;

export type FragmentToken3542 =
  | FragmentSelf3542["__typename"]
  | FragmentSelf3542["typenameHint"] | FragmentToken3540 | FragmentToken3541;
