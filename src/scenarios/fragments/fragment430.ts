import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken428 } from "./fragment428";
import type { FragmentToken429 } from "./fragment429";

export const FRAGMENT_430 = gql(`
  fragment Fragment430 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult430 = ResultOf<typeof FRAGMENT_430>;
type FragmentSelf430 = NonNullable<FragmentResult430>;

export type FragmentToken430 =
  | FragmentSelf430["__typename"]
  | FragmentSelf430["typenameHint"] | FragmentToken428 | FragmentToken429;
