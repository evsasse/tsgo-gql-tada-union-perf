import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3552 } from "./fragment3552";
import type { FragmentToken3553 } from "./fragment3553";

export const FRAGMENT_3554 = gql(`
  fragment Fragment3554 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult3554 = ResultOf<typeof FRAGMENT_3554>;
type FragmentSelf3554 = NonNullable<FragmentResult3554>;

export type FragmentToken3554 =
  | FragmentSelf3554["__typename"]
  | FragmentSelf3554["typenameHint"] | FragmentToken3552 | FragmentToken3553;
