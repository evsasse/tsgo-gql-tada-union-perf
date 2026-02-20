import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3360 } from "./fragment3360";
import type { FragmentToken3361 } from "./fragment3361";

export const FRAGMENT_3362 = gql(`
  fragment Fragment3362 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult3362 = ResultOf<typeof FRAGMENT_3362>;
type FragmentSelf3362 = NonNullable<FragmentResult3362>;

export type FragmentToken3362 =
  | FragmentSelf3362["__typename"]
  | FragmentSelf3362["typenameHint"] | FragmentToken3360 | FragmentToken3361;
