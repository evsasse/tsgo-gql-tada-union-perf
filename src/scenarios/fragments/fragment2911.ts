import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2909 } from "./fragment2909";
import type { FragmentToken2910 } from "./fragment2910";

export const FRAGMENT_2911 = gql(`
  fragment Fragment2911 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult2911 = ResultOf<typeof FRAGMENT_2911>;
type FragmentSelf2911 = NonNullable<FragmentResult2911>;

export type FragmentToken2911 =
  | FragmentSelf2911["__typename"]
  | FragmentSelf2911["typenameHint"] | FragmentToken2909 | FragmentToken2910;
