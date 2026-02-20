import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3545 } from "./fragment3545";
import type { FragmentToken3546 } from "./fragment3546";

export const FRAGMENT_3547 = gql(`
  fragment Fragment3547 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult3547 = ResultOf<typeof FRAGMENT_3547>;
type FragmentSelf3547 = NonNullable<FragmentResult3547>;

export type FragmentToken3547 =
  | FragmentSelf3547["__typename"]
  | FragmentSelf3547["typenameHint"] | FragmentToken3545 | FragmentToken3546;
