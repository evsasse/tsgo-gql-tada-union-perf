import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3483 } from "./fragment3483";
import type { FragmentToken3484 } from "./fragment3484";

export const FRAGMENT_3485 = gql(`
  fragment Fragment3485 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult3485 = ResultOf<typeof FRAGMENT_3485>;
type FragmentSelf3485 = NonNullable<FragmentResult3485>;

export type FragmentToken3485 =
  | FragmentSelf3485["__typename"]
  | FragmentSelf3485["typenameHint"] | FragmentToken3483 | FragmentToken3484;
