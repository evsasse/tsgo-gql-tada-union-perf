import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3920 } from "./fragment3920";
import type { FragmentToken3921 } from "./fragment3921";

export const FRAGMENT_3922 = gql(`
  fragment Fragment3922 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult3922 = ResultOf<typeof FRAGMENT_3922>;
type FragmentSelf3922 = NonNullable<FragmentResult3922>;

export type FragmentToken3922 =
  | FragmentSelf3922["__typename"]
  | FragmentSelf3922["typenameHint"] | FragmentToken3920 | FragmentToken3921;
