import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3496 } from "./fragment3496";
import type { FragmentToken3497 } from "./fragment3497";

export const FRAGMENT_3498 = gql(`
  fragment Fragment3498 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult3498 = ResultOf<typeof FRAGMENT_3498>;
type FragmentSelf3498 = NonNullable<FragmentResult3498>;

export type FragmentToken3498 =
  | FragmentSelf3498["__typename"]
  | FragmentSelf3498["typenameHint"] | FragmentToken3496 | FragmentToken3497;
