import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3833 } from "./fragment3833";
import type { FragmentToken3834 } from "./fragment3834";

export const FRAGMENT_3835 = gql(`
  fragment Fragment3835 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult3835 = ResultOf<typeof FRAGMENT_3835>;
type FragmentSelf3835 = NonNullable<FragmentResult3835>;

export type FragmentToken3835 =
  | FragmentSelf3835["__typename"]
  | FragmentSelf3835["typenameHint"] | FragmentToken3833 | FragmentToken3834;
