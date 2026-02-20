import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3434 } from "./fragment3434";
import type { FragmentToken3435 } from "./fragment3435";

export const FRAGMENT_3436 = gql(`
  fragment Fragment3436 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult3436 = ResultOf<typeof FRAGMENT_3436>;
type FragmentSelf3436 = NonNullable<FragmentResult3436>;

export type FragmentToken3436 =
  | FragmentSelf3436["__typename"]
  | FragmentSelf3436["typenameHint"] | FragmentToken3434 | FragmentToken3435;
