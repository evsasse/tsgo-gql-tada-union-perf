import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3553 } from "./fragment3553";
import type { FragmentToken3554 } from "./fragment3554";

export const FRAGMENT_3555 = gql(`
  fragment Fragment3555 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult3555 = ResultOf<typeof FRAGMENT_3555>;
type FragmentSelf3555 = NonNullable<FragmentResult3555>;

export type FragmentToken3555 =
  | FragmentSelf3555["__typename"]
  | FragmentSelf3555["typenameHint"] | FragmentToken3553 | FragmentToken3554;
