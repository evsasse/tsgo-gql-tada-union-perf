import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3568 } from "./fragment3568";
import type { FragmentToken3569 } from "./fragment3569";

export const FRAGMENT_3570 = gql(`
  fragment Fragment3570 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult3570 = ResultOf<typeof FRAGMENT_3570>;
type FragmentSelf3570 = NonNullable<FragmentResult3570>;

export type FragmentToken3570 =
  | FragmentSelf3570["__typename"]
  | FragmentSelf3570["typenameHint"] | FragmentToken3568 | FragmentToken3569;
