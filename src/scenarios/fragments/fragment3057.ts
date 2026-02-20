import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3055 } from "./fragment3055";
import type { FragmentToken3056 } from "./fragment3056";

export const FRAGMENT_3057 = gql(`
  fragment Fragment3057 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult3057 = ResultOf<typeof FRAGMENT_3057>;
type FragmentSelf3057 = NonNullable<FragmentResult3057>;

export type FragmentToken3057 =
  | FragmentSelf3057["__typename"]
  | FragmentSelf3057["typenameHint"] | FragmentToken3055 | FragmentToken3056;
