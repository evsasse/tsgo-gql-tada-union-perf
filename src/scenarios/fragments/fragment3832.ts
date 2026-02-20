import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3830 } from "./fragment3830";
import type { FragmentToken3831 } from "./fragment3831";

export const FRAGMENT_3832 = gql(`
  fragment Fragment3832 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult3832 = ResultOf<typeof FRAGMENT_3832>;
type FragmentSelf3832 = NonNullable<FragmentResult3832>;

export type FragmentToken3832 =
  | FragmentSelf3832["__typename"]
  | FragmentSelf3832["typenameHint"] | FragmentToken3830 | FragmentToken3831;
