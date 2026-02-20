import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3917 } from "./fragment3917";
import type { FragmentToken3918 } from "./fragment3918";

export const FRAGMENT_3919 = gql(`
  fragment Fragment3919 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult3919 = ResultOf<typeof FRAGMENT_3919>;
type FragmentSelf3919 = NonNullable<FragmentResult3919>;

export type FragmentToken3919 =
  | FragmentSelf3919["__typename"]
  | FragmentSelf3919["typenameHint"] | FragmentToken3917 | FragmentToken3918;
