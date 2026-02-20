import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3186 } from "./fragment3186";
import type { FragmentToken3187 } from "./fragment3187";

export const FRAGMENT_3188 = gql(`
  fragment Fragment3188 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult3188 = ResultOf<typeof FRAGMENT_3188>;
type FragmentSelf3188 = NonNullable<FragmentResult3188>;

export type FragmentToken3188 =
  | FragmentSelf3188["__typename"]
  | FragmentSelf3188["typenameHint"] | FragmentToken3186 | FragmentToken3187;
