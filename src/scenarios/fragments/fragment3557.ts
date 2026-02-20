import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3555 } from "./fragment3555";
import type { FragmentToken3556 } from "./fragment3556";

export const FRAGMENT_3557 = gql(`
  fragment Fragment3557 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult3557 = ResultOf<typeof FRAGMENT_3557>;
type FragmentSelf3557 = NonNullable<FragmentResult3557>;

export type FragmentToken3557 =
  | FragmentSelf3557["__typename"]
  | FragmentSelf3557["typenameHint"] | FragmentToken3555 | FragmentToken3556;
