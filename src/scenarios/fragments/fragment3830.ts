import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3828 } from "./fragment3828";
import type { FragmentToken3829 } from "./fragment3829";

export const FRAGMENT_3830 = gql(`
  fragment Fragment3830 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult3830 = ResultOf<typeof FRAGMENT_3830>;
type FragmentSelf3830 = NonNullable<FragmentResult3830>;

export type FragmentToken3830 =
  | FragmentSelf3830["__typename"]
  | FragmentSelf3830["typenameHint"] | FragmentToken3828 | FragmentToken3829;
