import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3406 } from "./fragment3406";
import type { FragmentToken3407 } from "./fragment3407";

export const FRAGMENT_3408 = gql(`
  fragment Fragment3408 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult3408 = ResultOf<typeof FRAGMENT_3408>;
type FragmentSelf3408 = NonNullable<FragmentResult3408>;

export type FragmentToken3408 =
  | FragmentSelf3408["__typename"]
  | FragmentSelf3408["typenameHint"] | FragmentToken3406 | FragmentToken3407;
