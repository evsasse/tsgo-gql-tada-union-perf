import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3978 } from "./fragment3978";
import type { FragmentToken3979 } from "./fragment3979";

export const FRAGMENT_3980 = gql(`
  fragment Fragment3980 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult3980 = ResultOf<typeof FRAGMENT_3980>;
type FragmentSelf3980 = NonNullable<FragmentResult3980>;

export type FragmentToken3980 =
  | FragmentSelf3980["__typename"]
  | FragmentSelf3980["typenameHint"] | FragmentToken3978 | FragmentToken3979;
