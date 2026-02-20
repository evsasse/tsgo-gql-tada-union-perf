import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3136 } from "./fragment3136";
import type { FragmentToken3137 } from "./fragment3137";

export const FRAGMENT_3138 = gql(`
  fragment Fragment3138 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult3138 = ResultOf<typeof FRAGMENT_3138>;
type FragmentSelf3138 = NonNullable<FragmentResult3138>;

export type FragmentToken3138 =
  | FragmentSelf3138["__typename"]
  | FragmentSelf3138["typenameHint"] | FragmentToken3136 | FragmentToken3137;
