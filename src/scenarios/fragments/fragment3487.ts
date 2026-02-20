import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3485 } from "./fragment3485";
import type { FragmentToken3486 } from "./fragment3486";

export const FRAGMENT_3487 = gql(`
  fragment Fragment3487 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult3487 = ResultOf<typeof FRAGMENT_3487>;
type FragmentSelf3487 = NonNullable<FragmentResult3487>;

export type FragmentToken3487 =
  | FragmentSelf3487["__typename"]
  | FragmentSelf3487["typenameHint"] | FragmentToken3485 | FragmentToken3486;
