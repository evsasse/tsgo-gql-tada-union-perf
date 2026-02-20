import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3919 } from "./fragment3919";
import type { FragmentToken3920 } from "./fragment3920";

export const FRAGMENT_3921 = gql(`
  fragment Fragment3921 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult3921 = ResultOf<typeof FRAGMENT_3921>;
type FragmentSelf3921 = NonNullable<FragmentResult3921>;

export type FragmentToken3921 =
  | FragmentSelf3921["__typename"]
  | FragmentSelf3921["typenameHint"] | FragmentToken3919 | FragmentToken3920;
