import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3937 } from "./fragment3937";
import type { FragmentToken3938 } from "./fragment3938";

export const FRAGMENT_3939 = gql(`
  fragment Fragment3939 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult3939 = ResultOf<typeof FRAGMENT_3939>;
type FragmentSelf3939 = NonNullable<FragmentResult3939>;

export type FragmentToken3939 =
  | FragmentSelf3939["__typename"]
  | FragmentSelf3939["typenameHint"] | FragmentToken3937 | FragmentToken3938;
