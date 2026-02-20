import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3352 } from "./fragment3352";
import type { FragmentToken3353 } from "./fragment3353";

export const FRAGMENT_3354 = gql(`
  fragment Fragment3354 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult3354 = ResultOf<typeof FRAGMENT_3354>;
type FragmentSelf3354 = NonNullable<FragmentResult3354>;

export type FragmentToken3354 =
  | FragmentSelf3354["__typename"]
  | FragmentSelf3354["typenameHint"] | FragmentToken3352 | FragmentToken3353;
