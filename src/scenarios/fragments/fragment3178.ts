import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3176 } from "./fragment3176";
import type { FragmentToken3177 } from "./fragment3177";

export const FRAGMENT_3178 = gql(`
  fragment Fragment3178 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult3178 = ResultOf<typeof FRAGMENT_3178>;
type FragmentSelf3178 = NonNullable<FragmentResult3178>;

export type FragmentToken3178 =
  | FragmentSelf3178["__typename"]
  | FragmentSelf3178["typenameHint"] | FragmentToken3176 | FragmentToken3177;
