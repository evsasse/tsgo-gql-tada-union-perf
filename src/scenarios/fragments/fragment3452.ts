import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3450 } from "./fragment3450";
import type { FragmentToken3451 } from "./fragment3451";

export const FRAGMENT_3452 = gql(`
  fragment Fragment3452 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult3452 = ResultOf<typeof FRAGMENT_3452>;
type FragmentSelf3452 = NonNullable<FragmentResult3452>;

export type FragmentToken3452 =
  | FragmentSelf3452["__typename"]
  | FragmentSelf3452["typenameHint"] | FragmentToken3450 | FragmentToken3451;
