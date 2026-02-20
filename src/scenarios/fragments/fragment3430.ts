import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3428 } from "./fragment3428";
import type { FragmentToken3429 } from "./fragment3429";

export const FRAGMENT_3430 = gql(`
  fragment Fragment3430 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult3430 = ResultOf<typeof FRAGMENT_3430>;
type FragmentSelf3430 = NonNullable<FragmentResult3430>;

export type FragmentToken3430 =
  | FragmentSelf3430["__typename"]
  | FragmentSelf3430["typenameHint"] | FragmentToken3428 | FragmentToken3429;
