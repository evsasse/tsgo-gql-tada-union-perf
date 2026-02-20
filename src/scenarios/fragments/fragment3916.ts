import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3914 } from "./fragment3914";
import type { FragmentToken3915 } from "./fragment3915";

export const FRAGMENT_3916 = gql(`
  fragment Fragment3916 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult3916 = ResultOf<typeof FRAGMENT_3916>;
type FragmentSelf3916 = NonNullable<FragmentResult3916>;

export type FragmentToken3916 =
  | FragmentSelf3916["__typename"]
  | FragmentSelf3916["typenameHint"] | FragmentToken3914 | FragmentToken3915;
